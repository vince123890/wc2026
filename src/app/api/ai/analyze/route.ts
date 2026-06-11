// /api/ai/analyze — AI fallback chain (AI-R05): Claude → Gemini → Static Analysis.
// API key bisa dari server env ATAU dikirim user (BYOK) di body request.
import { NextRequest, NextResponse } from "next/server";
import { generateStaticAnalysis } from "@/lib/static-analysis";
import { FALLBACK_TEAMS, FALLBACK_COACHES } from "@/lib/fallback-data";
import type { AIAnalysisResponse } from "@/lib/types";

export const maxDuration = 30; // R-06

const SYSTEM_PROMPT = `Kamu adalah Analis Taktis AI untuk FIFA World Cup 2026.
Tugasmu menganalisis pertandingan berdasarkan data statistik, lineup, formasi, profil pelatih, DAN prediksi sistem (model statistik Poisson berbasis ranking FIFA, H2H, lineup, form turnamen, dan taktis).
ATURAN KETAT:
1. SELALU kembalikan respons dalam format JSON valid. Tidak ada teks di luar JSON.
2. Jangan mengarang data. Jika data tidak tersedia, isi field dengan null.
3. Gunakan bahasa Indonesia yang informatif dan engaging.
4. Analisis berbasis data yang diberikan, bukan asumsi.
5. JANGAN cantumkan confidence level — itu dikalkulasi sistem.
6. PENTING: Jika data "Prediksi sistem" diberikan, jadikan itu ANCHOR utama untuk field prediction.homeScore/awayScore — skor prediksimu harus konsisten dengan expected goals & probabilitas sistem (boleh sama, atau beda maksimal ±1 gol per tim jika ada alasan taktis kuat). Jangan membuat prediksi yang jauh lebih ekstrem daripada sistem tanpa menjelaskan alasannya secara eksplisit di reasoning. Jika prediksimu berbeda dari sistem, sebutkan alasannya di reasoning.
Skema JSON: { "tacticalMatchup": string|null, "coachPhilosophy": string|null, "keyPlayers": [{"team","name","position","reason"}], "prediction": {"homeScore":number,"awayScore":number,"alternativeScenario":string,"reasoning":string}, "userPredictionEval": string|null }`;

function buildUserPrompt(body: AnalyzeBody): string {
  const { home, away, homeCoach, awayCoach, tier, userPrediction, lineups, systemPrediction } = body;
  const lines = [
    `Pertandingan: ${home.name} (HOME) vs ${away.name} (AWAY). Tier analisis: ${tier}.`,
    `Statistik ${home.name}: rating ${home.rating}, attack ${home.attack}, defense ${home.defense}, possession ${home.possession}%, form ${home.form?.join("-")}.`,
    `Statistik ${away.name}: rating ${away.rating}, attack ${away.attack}, defense ${away.defense}, possession ${away.possession}%, form ${away.form?.join("-")}.`,
  ];
  if (tier >= 3 && homeCoach && awayCoach) {
    lines.push(`Pelatih ${home.name}: ${homeCoach.name}, formasi ${homeCoach.formation}, gaya ${homeCoach.playingStyle}, press ${homeCoach.pressStyle}.`);
    lines.push(`Pelatih ${away.name}: ${awayCoach.name}, formasi ${awayCoach.formation}, gaya ${awayCoach.playingStyle}, press ${awayCoach.pressStyle}.`);
    lines.push("Sertakan analisis tacticalMatchup.");
  }
  if (tier >= 4) lines.push("Sertakan coachPhilosophy.");
  if (lineups) {
    lines.push(`Starting XI ${home.name} (${lineups.home.formation}): ${lineups.home.starters.join(", ")}.`);
    lines.push(`Starting XI ${away.name} (${lineups.away.formation}): ${lineups.away.starters.join(", ")}.`);
  }
  if (systemPrediction) {
    lines.push(
      `Prediksi sistem (model statistik): skor ${systemPrediction.homeScore}-${systemPrediction.awayScore}, ` +
      `expected goals ${systemPrediction.expectedGoalsHome.toFixed(2)}-${systemPrediction.expectedGoalsAway.toFixed(2)}, ` +
      `probabilitas menang ${home.name} ${systemPrediction.probHomeWin}% / seri ${systemPrediction.probDraw}% / menang ${away.name} ${systemPrediction.probAwayWin}%.`
    );
    const f = systemPrediction.factors;
    lines.push(
      `Breakdown faktor sistem (positif = menguntungkan ${home.name}, range -1..1): ` +
      `ranking ${f.ranking}, form turnamen ${f.form}, taktis ${f.tactical}, lineup ${f.lineup}, h2h ${f.h2h}, pelatih ${f.coach}.`
    );
    lines.push("Gunakan prediksi sistem di atas sebagai acuan utama untuk field prediction (lihat aturan #6 di system prompt).");
  }
  if (userPrediction) lines.push(`Tebakan user: ${userPrediction.homeScore}-${userPrediction.awayScore}. Evaluasi di userPredictionEval.`);
  return lines.join("\n");
}

interface AnalyzeBody {
  home: (typeof FALLBACK_TEAMS)[string];
  away: (typeof FALLBACK_TEAMS)[string];
  homeCoach?: (typeof FALLBACK_COACHES)[string] | null;
  awayCoach?: (typeof FALLBACK_COACHES)[string] | null;
  tier: number;
  userPrediction?: { homeScore: number; awayScore: number } | null;
  lineups?: { home: { formation: string; starters: string[] }; away: { formation: string; starters: string[] } } | null;
  systemPrediction?: {
    homeScore: number;
    awayScore: number;
    expectedGoalsHome: number;
    expectedGoalsAway: number;
    probHomeWin: number;
    probDraw: number;
    probAwayWin: number;
    factors: { ranking: number; tactical: number; h2h: number; lineup: number; coach: number; form: number };
  } | null;
  apiKey?: string;
  provider?: "claude" | "gemini";
}

function extractJSON(text: string): AIAnalysisResponse | null {
  try {
    const cleaned = text.replace(/```json|```/g, "").trim();
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start < 0 || end < 0) return null;
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch {
    return null;
  }
}

async function tryClaude(body: AnalyzeBody, key: string): Promise<{ result: AIAnalysisResponse | null; debug?: string }> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 28000);
  try {
    const model = body.tier >= 3 ? "claude-sonnet-4-6" : "claude-haiku-4-5-20251001";
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model,
        max_tokens: 1200,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: buildUserPrompt(body) }],
      }),
      signal: ctrl.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return { result: null, debug: `Claude API error ${res.status}: ${errText.slice(0, 200)}` };
    }
    const data = await res.json();
    const text = (data.content ?? []).filter((b: { type: string }) => b.type === "text").map((b: { text: string }) => b.text).join("\n");
    const parsed = extractJSON(text);
    if (parsed) {
      parsed._provider = "claude";
      return { result: parsed };
    }
    return { result: null, debug: `Claude response tidak berisi JSON valid: ${text.slice(0, 200)}` };
  } catch (e) {
    return { result: null, debug: `Claude fetch gagal: ${e instanceof Error ? e.message : String(e)}` };
  } finally {
    clearTimeout(t);
  }
}

async function tryGemini(body: AnalyzeBody, key: string): Promise<{ result: AIAnalysisResponse | null; debug?: string }> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: buildUserPrompt(body) }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
        signal: ctrl.signal,
      }
    );
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return { result: null, debug: `Gemini API error ${res.status}: ${errText.slice(0, 200)}` };
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const parsed = extractJSON(text);
    if (parsed) {
      parsed._provider = "gemini";
      return { result: parsed };
    }
    return { result: null, debug: `Gemini response tidak berisi JSON valid: ${text.slice(0, 200)}` };
  } catch (e) {
    return { result: null, debug: `Gemini fetch gagal: ${e instanceof Error ? e.message : String(e)}` };
  } finally {
    clearTimeout(t);
  }
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as AnalyzeBody;

  const claudeKey = body.provider === "claude" || !body.provider ? body.apiKey || process.env.ANTHROPIC_API_KEY : undefined;
  const geminiKey = body.provider === "gemini" ? body.apiKey || process.env.GEMINI_API_KEY : undefined;

  let debug: string | undefined;

  // 1) Claude
  if (claudeKey) {
    const { result, debug: d } = await tryClaude(body, claudeKey);
    if (result) return NextResponse.json(result);
    debug = d;
  }
  // 2) Gemini
  if (geminiKey) {
    const { result, debug: d } = await tryGemini(body, geminiKey);
    if (result) return NextResponse.json(result);
    debug = d;
  }
  // 3) Static analysis — selalu berhasil
  const fallback = generateStaticAnalysis(body.home, body.away, body.homeCoach, body.awayCoach, body.userPrediction);
  if (debug) fallback._debug = debug;
  return NextResponse.json(fallback);
}
