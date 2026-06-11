"use client";
import { useState } from "react";
import type { AIAnalysisResponse, Team, Coach, Prediction } from "@/lib/types";
import { useStore } from "@/lib/store";

interface LineupSummary {
  home: { formation: string; starters: string[] };
  away: { formation: string; starters: string[] };
}

export function AIAnalysisPanel({
  home,
  away,
  homeCoach,
  awayCoach,
  tier,
  prediction,
  lineups,
}: {
  home: Team;
  away: Team;
  homeCoach?: Coach | null;
  awayCoach?: Coach | null;
  tier: number;
  prediction?: Prediction | null;
  lineups?: LineupSummary | null;
}) {
  const { apiKey, apiProvider } = useStore();
  const [result, setResult] = useState<AIAnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          home,
          away,
          homeCoach,
          awayCoach,
          tier,
          userPrediction: prediction ? { homeScore: prediction.homeScore, awayScore: prediction.awayScore } : null,
          lineups,
          apiKey,
          provider: apiProvider,
        }),
      });
      if (!res.ok) throw new Error(`Gagal (${res.status})`);
      setResult(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Analisis gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  const providerLabel =
    result?._provider === "claude" ? "Claude" : result?._provider === "gemini" ? "Gemini" : "Analisis Statistik";

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-hi">Analisis Taktis AI</h3>
        {result && (
          <span className="rounded bg-pitch-700 px-2 py-0.5 text-[10px] text-ink-mid">
            {result._provider === "static" ? "Tanpa AI · " : "Powered by "}
            {providerLabel}
          </span>
        )}
      </div>

      {!result && (
        <button
          onClick={run}
          disabled={loading}
          className="w-full rounded-lg bg-gold py-2 text-sm font-semibold text-pitch-950 disabled:opacity-60"
        >
          {loading ? "Menganalisis…" : `Jalankan analisis (Tier ${tier})`}
        </button>
      )}

      {error && <p className="mt-2 text-xs text-live">{error}</p>}
      {result?._provider === "static" && result._debug && (
        <p className="mt-2 text-[11px] text-live">⚠ AI gagal: {result._debug}</p>
      )}

      {result && (
        <div className="space-y-3 text-sm">
          {result.tacticalMatchup && <Section title="Matchup Taktis" body={result.tacticalMatchup} />}
          {result.coachPhilosophy && <Section title="Filosofi Pelatih" body={result.coachPhilosophy} />}

          {result.keyPlayers?.length > 0 && (
            <div>
              <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">Pemain Kunci</h4>
              <ul className="space-y-1">
                {result.keyPlayers.map((p, i) => (
                  <li key={i} className="text-xs text-ink-mid">
                    <span className="text-ink-hi">{p.name}</span> ({p.team}, {p.position}) — {p.reason}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-lg bg-pitch-950 p-3">
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">Prediksi AI</h4>
            <div className="tabular text-lg font-bold text-ink-hi">
              {result.prediction.homeScore} – {result.prediction.awayScore}
            </div>
            <p className="mt-1 text-xs text-ink-mid">{result.prediction.reasoning}</p>
            {result.prediction.alternativeScenario && (
              <p className="mt-2 text-xs italic text-ink-low">Alternatif: {result.prediction.alternativeScenario}</p>
            )}
          </div>

          {result.userPredictionEval && <Section title="Evaluasi Tebakanmu" body={result.userPredictionEval} />}
          {result.postMatchSummary && <Section title="Ringkasan Post-Match" body={result.postMatchSummary} />}

          <button onClick={run} disabled={loading} className="text-[11px] text-ink-low underline hover:text-gold">
            {loading ? "Memuat…" : "Analisis ulang"}
          </button>
        </div>
      )}
    </div>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">{title}</h4>
      <p className="text-xs leading-relaxed text-ink-mid">{body}</p>
    </div>
  );
}
