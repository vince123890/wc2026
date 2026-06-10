"use client";
import type { Coach } from "@/lib/types";

interface Props {
  homeCoach: Coach;
  awayCoach: Coach;
  homeName: string;
  awayName: string;
}

export function CoachComparison({ homeCoach, awayCoach, homeName, awayName }: Props) {
  const rows: { label: string; h: string | number; a: string | number; higher?: "h" | "a" | "none" }[] = [
    { label: "Formasi", h: homeCoach.formation, a: awayCoach.formation, higher: "none" },
    { label: "Gaya bermain", h: homeCoach.playingStyle, a: awayCoach.playingStyle, higher: "none" },
    { label: "Press style", h: homeCoach.pressStyle, a: awayCoach.pressStyle, higher: "none" },
    { label: "Win rate", h: `${homeCoach.winRate}%`, a: `${awayCoach.winRate}%`, higher: homeCoach.winRate > awayCoach.winRate ? "h" : awayCoach.winRate > homeCoach.winRate ? "a" : "none" },
    { label: "Draw rate", h: `${homeCoach.drawRate}%`, a: `${awayCoach.drawRate}%`, higher: "none" },
    { label: "Pengalaman WC", h: `${homeCoach.wcExp}×`, a: `${awayCoach.wcExp}×`, higher: homeCoach.wcExp > awayCoach.wcExp ? "h" : awayCoach.wcExp > homeCoach.wcExp ? "a" : "none" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-pitch-700">
      {/* Header */}
      <div className="grid grid-cols-3 bg-pitch-900 px-3 py-2 text-xs font-semibold">
        <span className="text-ink-hi">{homeName}</span>
        <span className="text-center text-ink-low">vs</span>
        <span className="text-right text-ink-hi">{awayName}</span>
      </div>

      {/* Coach names */}
      <div className="grid grid-cols-3 border-b border-pitch-700 bg-pitch-950/40 px-3 py-2 text-[11px]">
        <span className="text-gold">{homeCoach.name}</span>
        <span className="text-center text-ink-low">Pelatih</span>
        <span className="text-right text-gold">{awayCoach.name}</span>
      </div>

      {/* Stat rows */}
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-3 border-b border-pitch-800 px-3 py-2 text-xs last:border-0">
          <span className={`font-medium ${r.higher === "h" ? "text-win" : "text-ink-hi"}`}>{r.h}</span>
          <span className="text-center text-ink-low">{r.label}</span>
          <span className={`text-right font-medium ${r.higher === "a" ? "text-win" : "text-ink-hi"}`}>{r.a}</span>
        </div>
      ))}

      {/* Traits */}
      <div className="grid grid-cols-2 gap-2 border-t border-pitch-700 p-3">
        <TraitList traits={homeCoach.traits} align="left" />
        <TraitList traits={awayCoach.traits} align="right" />
      </div>

      {/* Philosophy preview */}
      <div className="grid grid-cols-2 gap-3 border-t border-pitch-700 p-3 text-[11px] text-ink-mid">
        <p className="leading-relaxed">{homeCoach.philosophy}</p>
        <p className="leading-relaxed text-right">{awayCoach.philosophy}</p>
      </div>
    </div>
  );
}

function TraitList({ traits, align }: { traits: string[]; align: "left" | "right" }) {
  return (
    <div className={`flex flex-wrap gap-1 ${align === "right" ? "justify-end" : ""}`}>
      {traits.map((t) => (
        <span key={t} className="rounded bg-pitch-700 px-1.5 py-0.5 text-[10px] text-ink-mid">
          {t}
        </span>
      ))}
    </div>
  );
}
