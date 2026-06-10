"use client";
import { useState, useEffect } from "react";
import { calculatePoints, type ScoreBreakdown } from "@/lib/scoring";
import { useStore, type EvaluatedPrediction } from "@/lib/store";
import { upsertLeaderboard } from "@/lib/supabase";
import type { RealFixture } from "@/lib/wc2026-data";
import type { AIAnalysisResponse } from "@/lib/types";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

// ── Evaluasi poin setelah match selesai (FR-08) ──────────────────────────────
export function ScoreEvaluation({ fixture }: { fixture: RealFixture }) {
  const { predictions, evaluatePrediction, profile } = useStore();
  const [pushed, setPushed] = useState(false);

  const pred = predictions[fixture.id];
  const isFinished = ["FINISHED", "EVALUATED"].includes(fixture.status)
    && fixture.homeScore != null && fixture.awayScore != null;

  // Auto-evaluasi saat match selesai dan ada tebakan
  useEffect(() => {
    if (!isFinished || !pred || (pred as EvaluatedPrediction).evaluated) return;
    const breakdown = calculatePoints(
      { homeScore: pred.homeScore, awayScore: pred.awayScore },
      fixture.homeScore!, fixture.awayScore!
    );
    evaluatePrediction(fixture.id, breakdown, fixture.homeScore!, fixture.awayScore!);
  }, [isFinished, pred, fixture, evaluatePrediction]);

  // Push ke Supabase setelah evaluasi (FR-09)
  useEffect(() => {
    if (!pushed && (pred as EvaluatedPrediction)?.evaluated && isFinished) {
      setPushed(true);
      upsertLeaderboard({
        nickname: profile.nickname,
        total_points: profile.totalPoints,
        total_predictions: profile.totalPredictions,
      });
    }
  }, [pred, pushed, isFinished, profile]);

  if (!isFinished) return null;
  if (!pred) return (
    <div className="rounded-xl border border-dashed border-pitch-700 bg-pitch-900/40 p-4 text-center text-sm text-ink-low">
      Tidak ada tebakan untuk pertandingan ini.
    </div>
  );

  const ev = pred as EvaluatedPrediction;
  if (!ev.evaluated) return null;

  const bd = ev.breakdown;
  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4 space-y-3">
      <h3 className="text-sm font-semibold text-ink-hi">Hasil Tebakanmu</h3>

      {/* Score comparison */}
      <div className="flex items-center justify-around rounded-lg bg-pitch-950 p-3">
        <div className="text-center">
          <div className="text-[10px] text-ink-low mb-1">Tebakanmu</div>
          <div className="tabular text-2xl font-bold text-ink-hi">{ev.homeScore} – {ev.awayScore}</div>
        </div>
        <div className="text-ink-low text-sm">vs</div>
        <div className="text-center">
          <div className="text-[10px] text-ink-low mb-1">Hasil Akhir</div>
          <div className="tabular text-2xl font-bold text-gold">{ev.finalHome} – {ev.finalAway}</div>
        </div>
      </div>

      {/* Points breakdown */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-ink-mid">{bd.label}</span>
          <span className="tabular font-semibold text-ink-hi">+{bd.base}</span>
        </div>
        {bd.bonusUpset > 0 && (
          <div className="flex justify-between text-xs">
            <span className="text-ink-mid">🎯 Bonus upset</span>
            <span className="tabular font-semibold text-win">+{bd.bonusUpset}</span>
          </div>
        )}
        {bd.bonusCleanSheet > 0 && (
          <div className="flex justify-between text-xs">
            <span className="text-ink-mid">🧹 Bonus clean sheet</span>
            <span className="tabular font-semibold text-win">+{bd.bonusCleanSheet}</span>
          </div>
        )}
        <div className="flex justify-between border-t border-pitch-700 pt-1.5 text-sm font-bold">
          <span className="text-ink-hi">Total poin</span>
          <span className="tabular text-gold">+{bd.total}</span>
        </div>
      </div>

      {/* Share button (US-A5) */}
      <SharePrediction fixture={fixture} pred={ev} bd={bd} />
    </div>
  );
}

// ── Web Share API (US-A5) ────────────────────────────────────────────────────
function SharePrediction({ fixture, pred, bd }: {
  fixture: RealFixture;
  pred: EvaluatedPrediction;
  bd: ScoreBreakdown;
}) {
  const [copied, setCopied] = useState(false);
  const home = WC2026_TEAMS[fixture.homeId ?? ""];
  const away = WC2026_TEAMS[fixture.awayId ?? ""];

  const text = [
    `⚽ WC 2026 Predictor`,
    `${home?.flag ?? ""} ${fixture.homeName} ${pred.finalHome} – ${pred.finalAway} ${fixture.awayName} ${away?.flag ?? ""}`,
    `Tebakanku: ${pred.homeScore} – ${pred.awayScore} → ${bd.total > 0 ? `+${bd.total} poin` : "😬 meleset"}`,
    bd.total === 5 ? "🎯 Skor tepat!" : bd.label,
    `Coba tebak di: https://wc2026predictor.vercel.app`,
  ].join("\n");

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text, title: "WC 2026 Prediksi" });
        return;
      } catch { /* user cancel */ }
    }
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }

  return (
    <button
      onClick={share}
      className="w-full rounded-lg border border-pitch-700 py-2 text-sm text-ink-mid hover:border-gold/40 hover:text-ink-hi transition"
    >
      {copied ? "✓ Disalin ke clipboard" : "🔗 Bagikan hasil tebakanmu"}
    </button>
  );
}

// ── Post-match AI analysis panel (FR-23) ────────────────────────────────────
export function PostMatchPanel({ fixture, apiKey, apiProvider }: {
  fixture: RealFixture;
  apiKey: string | null;
  apiProvider: "claude" | "gemini";
}) {
  const [result, setResult] = useState<AIAnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const isFinished = ["FINISHED", "EVALUATED"].includes(fixture.status);
  const { predictions } = useStore();
  const pred = predictions[fixture.id];

  if (!isFinished) return null;

  async function analyze() {
    setLoading(true);
    try {
      const home = { name: fixture.homeName, flag: WC2026_TEAMS[fixture.homeId ?? ""]?.flag ?? "", rating: 0, attack: 0, defense: 0, possession: 50, form: [], id: fixture.homeId ?? "", color: "#e8b54a", bg: "#0f2417", gf: 0, ga: 0 };
      const away = { ...home, name: fixture.awayName, flag: WC2026_TEAMS[fixture.awayId ?? ""]?.flag ?? "", id: fixture.awayId ?? "" };
      const res = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          home, away, tier: 2, apiKey, provider: apiProvider,
          userPrediction: pred ? { homeScore: pred.homeScore, awayScore: pred.awayScore } : null,
          isPostMatch: true,
          finalScore: { home: fixture.homeScore, away: fixture.awayScore },
        }),
      });
      if (res.ok) setResult(await res.json());
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-hi">Analisis Post-Match AI</h3>
        {result && <span className="text-[10px] rounded bg-pitch-700 px-2 py-0.5 text-ink-low">{result._provider ?? "static"}</span>}
      </div>
      {!result ? (
        <button onClick={analyze} disabled={loading} className="w-full rounded-lg bg-gold py-2 text-sm font-semibold text-pitch-950 disabled:opacity-60">
          {loading ? "Menganalisis…" : "🔍 Lihat Analisis Post-Match"}
        </button>
      ) : (
        <div className="space-y-2 text-xs text-ink-mid">
          {result.prediction?.reasoning && <p className="leading-relaxed">{result.prediction.reasoning}</p>}
          {result.userPredictionEval && (
            <div className="rounded-lg bg-pitch-950 p-2">
              <span className="text-gold font-semibold">Evaluasi tebakanmu: </span>
              {result.userPredictionEval}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
