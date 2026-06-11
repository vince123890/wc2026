"use client";
import { useEffect, useState } from "react";
import type { MatchLineups, LineupPlayer } from "@/lib/types";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

// Batas setengah lapangan per tim (viewBox 0 0 340 540) — selaras dengan compressHome/compressAway
const PITCH_X_MIN = 10;
const PITCH_X_MAX = 330;
const HALF_BOUNDS: Record<"home" | "away", { yMin: number; yMax: number }> = {
  home: { yMin: 270, yMax: 530 },
  away: { yMin: 10, yMax: 270 },
};

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

function Marker({ p, color, side, editable, selected, onDragEnd, onSelect }: {
  p: LineupPlayer; color: string; side: "home" | "away"; editable?: boolean; selected?: boolean;
  onDragEnd?: (playerId: string, x: number, y: number) => void;
  onSelect?: (playerId: string) => void;
}) {
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [downPos, setDownPos] = useState<{ x: number; y: number } | null>(null);

  if (p.x === undefined || p.y === undefined) return null;
  const cx = dragPos?.x ?? p.x;
  const cy = dragPos?.y ?? p.y;

  function toSvgPoint(e: React.PointerEvent<SVGGElement>): { x: number; y: number } | null {
    const svg = e.currentTarget.ownerSVGElement;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const scaleX = 340 / rect.width;
    const scaleY = 540 / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    const bounds = HALF_BOUNDS[side];
    return {
      x: Math.min(PITCH_X_MAX, Math.max(PITCH_X_MIN, x)),
      y: Math.min(bounds.yMax, Math.max(bounds.yMin, y)),
    };
  }

  function handlePointerDown(e: React.PointerEvent<SVGGElement>) {
    if (!editable) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDownPos({ x: e.clientX, y: e.clientY });
    setDragging(true);
    const pt = toSvgPoint(e);
    if (pt) setDragPos(pt);
  }

  function handlePointerMove(e: React.PointerEvent<SVGGElement>) {
    if (!editable || !dragging) return;
    const pt = toSvgPoint(e);
    if (pt) setDragPos(pt);
  }

  function handlePointerUp(e: React.PointerEvent<SVGGElement>) {
    if (!editable || !dragging) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
    const moved = downPos && (Math.abs(e.clientX - downPos.x) > 4 || Math.abs(e.clientY - downPos.y) > 4);
    if (moved) {
      const pt = toSvgPoint(e) ?? dragPos;
      if (pt) onDragEnd?.(p.id, pt.x, pt.y);
    } else {
      onSelect?.(p.id);
    }
    setDragPos(null);
    setDownPos(null);
  }

  return (
    <g
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={editable ? { cursor: dragging ? "grabbing" : "grab" } : undefined}
    >
      {selected && <circle cx={cx} cy={cy} r={22} fill="none" stroke="#fff" strokeWidth={2} strokeDasharray="3 2" />}
      <circle cx={cx} cy={cy} r={dragging ? 19 : 17} fill={color} stroke="#07120c" strokeWidth={2} opacity={dragging ? 0.85 : 1} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#07120c">
        {p.jersey}
      </text>
      <text x={cx} y={cy + 30} textAnchor="middle" fontSize={10} fill="#f2efe6">
        {p.short ?? p.name}
        {p.captain ? " (C)" : ""}
      </text>
    </g>
  );
}

export function FormationPitch({ lineups, homeId, awayId, editable, onPlayerMove, onSwap }: {
  lineups: MatchLineups; homeId: string; awayId: string;
  editable?: boolean;
  onPlayerMove?: (side: "home" | "away", playerId: string, x: number, y: number) => void;
  onSwap?: (side: "home" | "away", starterId: string, benchId: string) => void;
}) {
  const mobile = useIsMobilePortrait();
  const homeColor = "#e8b54a"; // gold for home
  const awayColor = "#4ade80"; // green for away
  const [selected, setSelected] = useState<{ side: "home" | "away"; playerId: string } | null>(null);

  function handleSelect(side: "home" | "away", playerId: string) {
    if (selected?.side === side && selected.playerId === playerId) {
      setSelected(null);
    } else {
      setSelected({ side, playerId });
    }
  }

  function handleBenchClick(side: "home" | "away", benchId: string) {
    if (selected?.side === side) {
      onSwap?.(side, selected.playerId, benchId);
      setSelected(null);
    }
  }

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
          <Marker key={p.id} p={p} color={homeColor} side="home" editable={editable}
            selected={selected?.side === "home" && selected.playerId === p.id}
            onDragEnd={(playerId, x, y) => onPlayerMove?.("home", playerId, x, y)}
            onSelect={(playerId) => handleSelect("home", playerId)} />
        ))}
        {lineups.away.starters.map((p) => (
          <Marker key={p.id} p={p} color={awayColor} side="away" editable={editable}
            selected={selected?.side === "away" && selected.playerId === p.id}
            onDragEnd={(playerId, x, y) => onPlayerMove?.("away", playerId, x, y)}
            onSelect={(playerId) => handleSelect("away", playerId)} />
        ))}
      </svg>
      {editable && (lineups.home.bench.length > 0 || lineups.away.bench.length > 0) && (
        <div className="grid grid-cols-2 gap-2 border-t border-pitch-700 bg-pitch-900/60 p-2">
          <BenchPanel bench={lineups.home.bench}
            active={selected?.side === "home"}
            onClick={(benchId) => handleBenchClick("home", benchId)} />
          <BenchPanel bench={lineups.away.bench}
            active={selected?.side === "away"}
            onClick={(benchId) => handleBenchClick("away", benchId)} />
        </div>
      )}
    </div>
  );
}

function BenchPanel({ bench, active, onClick }: { bench: LineupPlayer[]; active?: boolean; onClick: (benchId: string) => void }) {
  if (bench.length === 0) return <div />;
  return (
    <div className="space-y-1">
      <div className="text-[10px] uppercase tracking-wide text-ink-low">
        Cadangan {active && <span className="text-gold">— pilih untuk tukar</span>}
      </div>
      <div className="flex flex-wrap gap-1">
        {bench.map((p) => (
          <button key={p.id} onClick={() => onClick(p.id)}
            disabled={!active}
            className={`rounded-md border px-1.5 py-0.5 text-[10px] ${
              active ? "border-gold/60 text-ink-hi hover:bg-gold/10 cursor-pointer" : "border-pitch-700 text-ink-low cursor-default"}`}>
            #{p.jersey} {p.short ?? p.name} <span className="text-ink-low">({p.pos})</span>
          </button>
        ))}
      </div>
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
