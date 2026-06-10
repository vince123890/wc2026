"use client";
import { MANUAL_COACHES } from "@/lib/coaches-manual";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

export default function CoachesPage() {
  const coaches = Object.values(MANUAL_COACHES);
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-hi">Profil Pelatih</h1>
        <p className="text-xs text-ink-low">{coaches.length} pelatih tersedia · Data manual, diperbarui secara berkala</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {coaches.map((c) => {
          const team = WC2026_TEAMS[c.teamId];
          return (
            <div key={c.id} className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-ink-hi">{c.name}</div>
                  <div className="text-xs text-ink-low">
                    {team?.flag} {team?.name} · {c.nationality} · {c.age > 0 ? `${c.age} thn` : ""}
                  </div>
                </div>
                <span className="rounded-md bg-pitch-700 px-2 py-1 text-xs text-gold">{c.formation}</span>
              </div>
              <p className="text-xs leading-relaxed text-ink-mid">{c.philosophy}</p>
              <div className="flex flex-wrap gap-1">
                {c.traits.map((t) => (
                  <span key={t} className="rounded bg-pitch-800 px-1.5 py-0.5 text-[10px] text-ink-mid">{t}</span>
                ))}
              </div>
              <div className="tabular flex gap-4 text-[11px] text-ink-low border-t border-pitch-800 pt-2">
                <span>W {c.winRate}%</span>
                <span>D {c.drawRate}%</span>
                <span>Press {c.pressStyle}</span>
                <span>{c.playingStyle}</span>
                {c.wcExp > 0 && <span>WC ×{c.wcExp}</span>}
              </div>
              {c.titles && c.titles !== "—" && (
                <div className="text-[11px] text-gold/80">🏆 {c.titles}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
