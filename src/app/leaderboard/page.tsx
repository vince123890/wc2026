"use client";
import { useEffect, useState } from "react";
import { fetchGlobalLeaderboard, type LeaderboardEntry } from "@/lib/supabase";
import { FALLBACK_LEADERBOARD } from "@/lib/fallback-data";
import { useStore } from "@/lib/store";

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[] | null>(null);
  const [isGlobal, setIsGlobal] = useState(false);
  const { profile, predictions, hydrate } = useStore();

  useEffect(() => {
    hydrate();
    fetchGlobalLeaderboard().then((data) => {
      if (data && data.length > 0) {
        setEntries(data);
        setIsGlobal(true);
      } else {
        setEntries(FALLBACK_LEADERBOARD.map((e) => ({
          nickname: e.nickname,
          total_points: e.totalPoints,
          total_predictions: e.predictions,
        })));
        setIsGlobal(false);
      }
    });
  }, [hydrate]);

  // Gabungkan profile user dengan leaderboard
  const allEntries = (() => {
    if (!entries) return [];
    const exists = entries.some((e) => e.nickname === profile.nickname);
    if (!exists && profile.totalPredictions > 0) {
      return [...entries, { nickname: profile.nickname, total_points: profile.totalPoints, total_predictions: profile.totalPredictions }]
        .sort((a, b) => b.total_points - a.total_points);
    }
    return entries;
  })();

  const predCount = Object.keys(predictions).length;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-hi">Peringkat</h1>
        <p className="text-xs text-ink-low">
          {isGlobal ? "🌐 Leaderboard global (Supabase)" : "📋 Data demo — konfigurasikan Supabase untuk leaderboard global"}
        </p>
      </div>

      {!isGlobal && (
        <div className="rounded-lg border border-gold/20 bg-gold/5 px-4 py-3 text-xs text-ink-mid">
          Aktifkan leaderboard global: buat project gratis di{" "}
          <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-gold underline">supabase.com</a>
          {" "}→ isi <code className="text-gold">NEXT_PUBLIC_SUPABASE_URL</code> dan <code className="text-gold">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> → jalankan SQL di README.
        </div>
      )}

      {/* Statistik user sendiri */}
      {predCount > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Tebakan", value: predCount },
            { label: "Poin", value: profile.totalPoints },
            { label: "Tepat", value: profile.exactScores },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3 text-center">
              <div className="tabular text-xl font-bold text-gold">{s.value}</div>
              <div className="text-[11px] text-ink-low">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-pitch-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-pitch-700 bg-pitch-900 text-[11px] uppercase text-ink-low">
              <th className="px-3 py-2 text-left font-medium">#</th>
              <th className="px-3 py-2 text-left font-medium">Pemain</th>
              <th className="px-3 py-2 text-right font-medium">Tebakan</th>
              <th className="px-3 py-2 text-right font-medium">Poin</th>
            </tr>
          </thead>
          <tbody>
            {allEntries.map((e, i) => {
              const isUser = e.nickname === profile.nickname;
              return (
                <tr key={e.nickname} className={`border-t border-pitch-800 ${isUser ? "bg-gold/10" : ""}`}>
                  <td className="tabular px-3 py-2 text-ink-low">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                  </td>
                  <td className="px-3 py-2 text-ink-hi">
                    {e.nickname}
                    {isUser && <span className="ml-1 text-[10px] text-gold">(kamu)</span>}
                  </td>
                  <td className="tabular px-3 py-2 text-right text-ink-mid">{e.total_predictions}</td>
                  <td className="tabular px-3 py-2 text-right font-bold text-ink-hi">{e.total_points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
