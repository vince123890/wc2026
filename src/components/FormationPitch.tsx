"use client";
import { useEffect, useState } from "react";
import type { MatchLineups, LineupPlayer } from "@/lib/types";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

// Mobile adaptive (UX-R04): < 768px portrait → list per lini; else SVG.
function useIsMobilePortrait() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px) and (orientation: portrait)");
    const fn = () => setM(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return m;
}

const LINE_ORDER = ["GK", "DEF", "MID", "FWD"] as const;
function lineOf(pos: string): (typeof LINE_ORDER)[number] {
  if (pos === "GK") return "GK";
  if (["CB", "LB", "RB", "RWB", "LWB"].includes(pos)) return "DEF";
  if (["CDM", "CM", "CAM", "LM", "RM", "RCM", "LCM"].includes(pos)) return "MID";
  return "FWD";
}

function Marker({ p, color }: { p: LineupPlayer; color: string }) {
  if (p.x === undefined || p.y === undefined) return null;
  return (
    <g>
      <circle cx={p.x} cy={p.y} r={17} fill={color} stroke="#07120c" strokeWidth={2} />
      <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#07120c">
        {p.jersey}
      </text>
      <text x={p.x} y={p.y + 30} textAnchor="middle" fontSize={10} fill="#f2efe6">
        {p.short ?? p.name}
        {p.captain ? " (C)" : ""}
      </text>
    </g>
  );
}

export function FormationPitch({ lineups, homeId, awayId }: { lineups: MatchLineups; homeId: string; awayId: string }) {
  const mobile = useIsMobilePortrait();
  const homeColor = "#e8b54a"; // gold for home
  const awayColor = "#4ade80"; // green for away

  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <ListView title={WC2026_TEAMS[homeId]?.name ?? "Home"} lineup={lineups.home.starters} formation={lineups.home.formation} />
        <ListView title={WC2026_TEAMS[awayId]?.name ?? "Away"} lineup={lineups.away.starters} formation={lineups.away.formation} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-pitch-700">
      <div className="flex items-center justify-between bg-pitch-900 px-3 py-2 text-xs">
        <span className="text-ink-mid">
          {WC2026_TEAMS[homeId]?.name} <span className="text-gold">{lineups.home.formation}</span>
        </span>
        <span className="text-ink-mid">
          <span className="text-win">{lineups.away.formation}</span> {WC2026_TEAMS[awayId]?.name}
        </span>
      </div>
      <svg viewBox="0 0 340 540" className="w-full" role="img" aria-label="Formasi taktis kedua tim">
        <defs>
          <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f2417" />
            <stop offset="50%" stopColor="#16331f" />
            <stop offset="100%" stopColor="#0f2417" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="340" height="540" fill="url(#grass)" />
        {/* pitch markings */}
        <g stroke="#1e4128" strokeWidth="1.5" fill="none">
          <rect x="10" y="10" width="320" height="520" />
          <line x1="10" y1="270" x2="330" y2="270" />
          <circle cx="170" cy="270" r="46" />
          <rect x="90" y="10" width="160" height="70" />
          <rect x="90" y="460" width="160" height="70" />
        </g>
        {lineups.home.starters.map((p) => (
          <Marker key={p.id} p={p} color={homeColor} />
        ))}
        {lineups.away.starters.map((p) => (
          <Marker key={p.id} p={p} color={awayColor} />
        ))}
      </svg>
    </div>
  );
}

function ListView({ title, lineup, formation }: { title: string; lineup: LineupPlayer[]; formation: string }) {
  const byLine = LINE_ORDER.map((line) => ({ line, players: lineup.filter((p) => lineOf(p.pos) === line) }));
  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-hi">{title}</span>
        <span className="text-[11px] text-gold">{formation}</span>
      </div>
      {byLine.map(({ line, players }) => (
        <div key={line} className="mb-2">
          <div className="mb-1 text-[10px] uppercase tracking-wide text-ink-low">{line}</div>
          {players.map((p) => (
            <div key={p.id} className="flex items-center gap-2 text-xs text-ink-mid">
              <span className="tabular w-5 text-right text-ink-low">{p.jersey}</span>
              <span className="text-ink-hi">{p.name}</span>
              {p.captain && <span className="text-gold">(C)</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
