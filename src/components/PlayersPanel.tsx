"use client";
import { getKeyPlayers, type KeyPlayer } from "@/lib/key-players";
import { WC2026_TEAMS } from "@/lib/wc2026-data";
import { FIFA_RANKING } from "@/lib/fifa-ranking";

interface Props {
  homeId: string;
  awayId: string;
  homeName: string;
  awayName: string;
}

const POS_ORDER = ["GK", "DEF", "MID", "FWD"] as const;
const POS_LABEL: Record<string, string> = { GK: "Penjaga Gawang", DEF: "Bertahan", MID: "Tengah", FWD: "Serang" };
const RISK_STYLE: Record<string, string> = {
  LOW: "text-win", MED: "text-gold", HIGH: "text-live",
};
const RISK_LABEL: Record<string, string> = { LOW: "Fit", MED: "Perlu dipantau", HIGH: "⚠️ Cedera risiko" };

export function PlayersPanel({ homeId, awayId, homeName, awayName }: Props) {
  const homePlayers = getKeyPlayers(homeId);
  const awayPlayers = getKeyPlayers(awayId);
  const homeTeam = WC2026_TEAMS[homeId];
  const awayTeam = WC2026_TEAMS[awayId];
  const homeRank = FIFA_RANKING[homeId];
  const awayRank = FIFA_RANKING[awayId];

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

      <p className="text-[11px] text-ink-low">
        Data pemain: Wikipedia + Transfermarkt (publik) · Diperbarui Juni 2026
      </p>
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
