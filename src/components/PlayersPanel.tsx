"use client";
import { useState } from "react";
import { getKeyPlayers, type KeyPlayer } from "@/lib/key-players";
import { WC2026_TEAMS } from "@/lib/wc2026-data";
import { FIFA_RANKING } from "@/lib/fifa-ranking";
import { useSquad } from "@/hooks";
import type { SquadPlayer } from "@/app/api/proxy/squads/route";
import type { MatchLineups, LineupPlayer } from "@/lib/types";

interface Props {
  homeId: string;
  awayId: string;
  homeName: string;
  awayName: string;
  lineups?: MatchLineups | null;
}

const POS_ORDER = ["GK", "DEF", "MID", "FWD"] as const;
const POS_LABEL: Record<string, string> = { GK: "Penjaga Gawang", DEF: "Bertahan", MID: "Tengah", FWD: "Serang" };
const RISK_STYLE: Record<string, string> = {
  LOW: "text-win", MED: "text-gold", HIGH: "text-live",
};
const RISK_LABEL: Record<string, string> = { LOW: "Fit", MED: "Perlu dipantau", HIGH: "⚠️ Cedera risiko" };

export function PlayersPanel({ homeId, awayId, homeName, awayName, lineups }: Props) {
  const homePlayers = getKeyPlayers(homeId);
  const awayPlayers = getKeyPlayers(awayId);
  const homeTeam = WC2026_TEAMS[homeId];
  const awayTeam = WC2026_TEAMS[awayId];
  const homeRank = FIFA_RANKING[homeId];
  const awayRank = FIFA_RANKING[awayId];

  const homeSquad = useSquad(homeId);
  const awaySquad = useSquad(awayId);

  const avgFormHome = homePlayers.length ? Math.round(homePlayers.reduce((s,p)=>s+p.form,0)/homePlayers.length*10)/10 : 0;
  const avgFormAway = awayPlayers.length ? Math.round(awayPlayers.reduce((s,p)=>s+p.form,0)/awayPlayers.length*10)/10 : 0;

  return (
    <div className="space-y-4">
      {/* Team overview */}
      <div className="grid grid-cols-2 gap-3">
        <TeamOverview name={homeName} flag={homeTeam?.flag} players={homePlayers} rank={homeRank} avgForm={avgFormHome} />
        <TeamOverview name={awayName} flag={awayTeam?.flag} players={awayPlayers} rank={awayRank} avgForm={avgFormAway} />
      </div>

      {/* By position */}
      {POS_ORDER.map(pos => {
        const hp = homePlayers.filter(p => p.pos === pos);
        const ap = awayPlayers.filter(p => p.pos === pos);
        if (!hp.length && !ap.length) return null;
        return (
          <div key={pos} className="rounded-xl border border-pitch-700 overflow-hidden">
            <div className="bg-pitch-900 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-low">
              {POS_LABEL[pos]}
            </div>
            <div className="divide-y divide-pitch-800">
              {Math.max(hp.length, ap.length) === 0 ? null :
                Array.from({ length: Math.max(hp.length, ap.length) }).map((_, i) => (
                  <div key={i} className="grid grid-cols-2 gap-0">
                    <PlayerRow player={hp[i] ?? null} side="home" />
                    <PlayerRow player={ap[i] ?? null} side="away" />
                  </div>
                ))
              }
            </div>
          </div>
        );
      })}

      {/* Pemain cadangan — hanya tampil jika lineup resmi sudah dirilis */}
      {lineups?.home.confirmed && (
        <div className="grid grid-cols-2 gap-3">
          <BenchList name={homeName} bench={lineups.home.bench} />
          <BenchList name={awayName} bench={lineups.away.bench} />
        </div>
      )}

      {/* Skuad lengkap 26 pemain (API-Football atau openfootball) */}
      {(["api-football", "openfootball"].includes(homeSquad.data?.source ?? "") ||
        ["api-football", "openfootball"].includes(awaySquad.data?.source ?? "")) && (
        <div className="grid grid-cols-2 gap-3">
          <FullSquad name={homeName} squad={homeSquad.data?.data ?? null} />
          <FullSquad name={awayName} squad={awaySquad.data?.data ?? null} />
        </div>
      )}

      <p className="text-[11px] text-ink-low">
        Data pemain: Wikipedia + Transfermarkt (publik) · Diperbarui Juni 2026
      </p>
    </div>
  );
}

function BenchList({ name, bench }: { name: string; bench: LineupPlayer[] }) {
  const [open, setOpen] = useState(false);
  if (!bench || bench.length === 0) return <div />;

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3">
      <button onClick={() => setOpen(v => !v)} className="w-full text-left text-[11px] text-gold underline decoration-dotted">
        {open ? "Sembunyikan" : "Lihat"} cadangan {name} ({bench.length} pemain)
      </button>
      {open && (
        <ul className="mt-2 space-y-0.5">
          {bench.map(p => (
            <li key={p.id} className="flex items-center justify-between text-[11px] text-ink-mid">
              <span>{p.name}</span>
              <span className="tabular text-ink-low">#{p.jersey} · {p.pos}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SQUAD_POS_ORDER = ["Goalkeeper", "Defender", "Midfielder", "Attacker"];
const SQUAD_POS_LABEL: Record<string, string> = {
  Goalkeeper: "Penjaga Gawang", Defender: "Bertahan", Midfielder: "Tengah", Attacker: "Serang",
};

function FullSquad({ name, squad }: { name: string; squad: SquadPlayer[] | null }) {
  const [open, setOpen] = useState(false);
  if (!squad || squad.length === 0) return <div />;

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3">
      <button onClick={() => setOpen(v => !v)} className="w-full text-left text-[11px] text-gold underline decoration-dotted">
        {open ? "Sembunyikan" : "Lihat"} skuad lengkap {name} ({squad.length} pemain)
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          {SQUAD_POS_ORDER.map(pos => {
            const players = squad.filter(p => p.position === pos);
            if (!players.length) return null;
            return (
              <div key={pos}>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-ink-low">{SQUAD_POS_LABEL[pos] ?? pos}</div>
                <ul className="mt-1 space-y-0.5">
                  {players.map(p => (
                    <li key={p.id} className="flex items-center justify-between text-[11px] text-ink-mid">
                      <span>{p.name}</span>
                      <span className="tabular text-ink-low">{p.number != null ? `#${p.number}` : ""} · {p.age}th</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TeamOverview({ name, flag, players, rank, avgForm }: {
  name: string; flag?: string; players: KeyPlayer[];
  rank?: { rank: number; points: number }; avgForm: number;
}) {
  const stars = players.filter(p => p.isStar);
  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-2xl">{flag ?? "🏳️"}</span>
        <div>
          <div className="text-sm font-semibold text-ink-hi">{name}</div>
          {rank && (
            <div className="tabular text-[11px] text-ink-low">FIFA #{rank.rank} · {rank.points}pts</div>
          )}
        </div>
      </div>
      <div className="tabular text-[11px] text-ink-mid">Form rata-rata: <span className="text-gold">{avgForm}/10</span></div>
      {stars.length > 0 && (
        <div className="mt-1 text-[11px] text-ink-low">
          ⭐ {stars.map(s => s.short).join(", ")}
        </div>
      )}
    </div>
  );
}

function PlayerRow({ player, side }: { player: KeyPlayer | null; side: "home" | "away" }) {
  if (!player) return <div className="px-3 py-2 bg-pitch-900/20" />;
  const isHome = side === "home";
  return (
    <div className={`px-3 py-2 text-xs ${isHome ? "" : "text-right border-l border-pitch-800"} ${player.isStar ? "bg-gold/5" : ""}`}>
      <div className={`flex items-center gap-1 ${isHome ? "" : "flex-row-reverse"}`}>
        {player.isStar && <span className="text-gold text-[10px]">⭐</span>}
        <span className="font-semibold text-ink-hi">{player.short}</span>
        <span className="text-[10px] text-ink-low">#{player.jersey}</span>
      </div>
      <div className={`flex items-center gap-2 mt-0.5 text-[10px] ${isHome ? "" : "flex-row-reverse"}`}>
        <span className="text-ink-low">{player.club}</span>
        <span className="text-ink-mid">Form {player.form}/10</span>
        <span className={RISK_STYLE[player.injuryRisk]}>{RISK_LABEL[player.injuryRisk]}</span>
      </div>
      {player.traits.length > 0 && (
        <div className={`flex flex-wrap gap-0.5 mt-1 ${isHome ? "" : "justify-end"}`}>
          {player.traits.slice(0, 2).map(t => (
            <span key={t} className="rounded bg-pitch-800 px-1 py-0.5 text-[9px] text-ink-low">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}
