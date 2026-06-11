"use client";
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

type PosGroup = "GK" | "DEF" | "MID" | "FWD";
const POS_ORDER: PosGroup[] = ["GK", "DEF", "MID", "FWD"];
const POS_LABEL: Record<PosGroup, string> = { GK: "Penjaga Gawang", DEF: "Bertahan", MID: "Tengah", FWD: "Serang" };
const SQUAD_POS_GROUP: Record<string, PosGroup> = {
  Goalkeeper: "GK", Defender: "DEF", Midfielder: "MID", Attacker: "FWD",
};
const RISK_STYLE: Record<string, string> = {
  LOW: "text-win", MED: "text-gold", HIGH: "text-live",
};
const RISK_LABEL: Record<string, string> = { LOW: "Fit", MED: "Perlu dipantau", HIGH: "⚠️ Cedera risiko" };

// Gabungan data: dasar dari skuad lengkap (26 pemain), enrichment dari KEY_PLAYERS jika nama cocok
interface DisplayPlayer {
  name: string;
  short: string;
  pos: PosGroup;
  jersey: number;
  age?: number;
  key?: KeyPlayer;
}

function buildDisplayPlayers(squad: SquadPlayer[] | null | undefined, keyPlayers: KeyPlayer[]): DisplayPlayer[] {
  const keyByName = new Map(keyPlayers.map((k) => [k.name.toLowerCase(), k]));
  if (squad && squad.length > 0) {
    const used = new Set<string>();
    const players: DisplayPlayer[] = [];
    for (const p of squad) {
      const group = SQUAD_POS_GROUP[p.position];
      if (!group) continue;
      const key = keyByName.get(p.name.toLowerCase());
      if (key) used.add(key.name.toLowerCase());
      players.push({
        name: p.name,
        short: p.name.split(" ").slice(-1)[0],
        pos: group,
        jersey: p.number ?? 0,
        age: p.age || undefined,
        key,
      });
    }
    // Pemain kunci yang tidak ada di skuad (mis. beda penulisan nama) tetap ditampilkan
    for (const k of keyPlayers) {
      if (!used.has(k.name.toLowerCase())) {
        players.push({ name: k.name, short: k.short, pos: k.pos, jersey: k.jersey, key: k });
      }
    }
    return players;
  }
  // Fallback: hanya pemain kunci (5-9/tim)
  return keyPlayers.map((k) => ({ name: k.name, short: k.short, pos: k.pos, jersey: k.jersey, key: k }));
}

export function PlayersPanel({ homeId, awayId, homeName, awayName, lineups }: Props) {
  const homeKeyPlayers = getKeyPlayers(homeId);
  const awayKeyPlayers = getKeyPlayers(awayId);
  const homeTeam = WC2026_TEAMS[homeId];
  const awayTeam = WC2026_TEAMS[awayId];
  const homeRank = FIFA_RANKING[homeId];
  const awayRank = FIFA_RANKING[awayId];

  const homeSquadRes = useSquad(homeId);
  const awaySquadRes = useSquad(awayId);
  const homeSquad = homeSquadRes.data?.data ?? null;
  const awaySquad = awaySquadRes.data?.data ?? null;

  const homePlayers = buildDisplayPlayers(homeSquad, homeKeyPlayers);
  const awayPlayers = buildDisplayPlayers(awaySquad, awayKeyPlayers);

  const avgFormHome = homeKeyPlayers.length ? Math.round(homeKeyPlayers.reduce((s, p) => s + p.form, 0) / homeKeyPlayers.length * 10) / 10 : 0;
  const avgFormAway = awayKeyPlayers.length ? Math.round(awayKeyPlayers.reduce((s, p) => s + p.form, 0) / awayKeyPlayers.length * 10) / 10 : 0;

  return (
    <div className="space-y-4">
      {/* Team overview */}
      <div className="grid grid-cols-2 gap-3">
        <TeamOverview name={homeName} flag={homeTeam?.flag} players={homeKeyPlayers} rank={homeRank} avgForm={avgFormHome} total={homePlayers.length} />
        <TeamOverview name={awayName} flag={awayTeam?.flag} players={awayKeyPlayers} rank={awayRank} avgForm={avgFormAway} total={awayPlayers.length} />
      </div>

      {/* By position — semua pemain skuad (enrichment dari KEY_PLAYERS jika ada) */}
      {POS_ORDER.map((pos) => {
        const hp = homePlayers.filter((p) => p.pos === pos);
        const ap = awayPlayers.filter((p) => p.pos === pos);
        if (!hp.length && !ap.length) return null;
        return (
          <div key={pos} className="rounded-xl border border-pitch-700 overflow-hidden">
            <div className="bg-pitch-900 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-low">
              {POS_LABEL[pos]}
            </div>
            <div className="divide-y divide-pitch-800">
              {Array.from({ length: Math.max(hp.length, ap.length) }).map((_, i) => (
                <div key={i} className="grid grid-cols-2 gap-0">
                  <PlayerRow player={hp[i] ?? null} side="home" />
                  <PlayerRow player={ap[i] ?? null} side="away" />
                </div>
              ))}
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

      <p className="text-[11px] text-ink-low">
        Data skuad: openfootball / API-Football · Pemain kunci: Wikipedia + Transfermarkt (publik) · Diperbarui Juni 2026
      </p>
    </div>
  );
}

function BenchList({ name, bench }: { name: string; bench: LineupPlayer[] }) {
  if (!bench || bench.length === 0) return <div />;
  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3">
      <div className="mb-1.5 text-[11px] font-semibold text-gold">Cadangan {name} ({bench.length})</div>
      <ul className="space-y-0.5">
        {bench.map((p) => (
          <li key={p.id} className="flex items-center justify-between text-[11px] text-ink-mid">
            <span>{p.name}</span>
            <span className="tabular text-ink-low">#{p.jersey} · {p.pos}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamOverview({ name, flag, players, rank, avgForm, total }: {
  name: string; flag?: string; players: KeyPlayer[];
  rank?: { rank: number; points: number }; avgForm: number; total: number;
}) {
  const stars = players.filter((p) => p.isStar);
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
      <div className="tabular text-[11px] text-ink-mid">
        Form rata-rata: <span className="text-gold">{avgForm}/10</span>
        {total > 0 && <span className="ml-2 text-ink-low">· {total} pemain</span>}
      </div>
      {stars.length > 0 && (
        <div className="mt-1 text-[11px] text-ink-low">
          ⭐ {stars.map((s) => s.short).join(", ")}
        </div>
      )}
    </div>
  );
}

function PlayerRow({ player, side }: { player: DisplayPlayer | null; side: "home" | "away" }) {
  if (!player) return <div className="px-3 py-2 bg-pitch-900/20" />;
  const isHome = side === "home";
  const key = player.key;
  return (
    <div className={`px-3 py-2 text-xs ${isHome ? "" : "text-right border-l border-pitch-800"} ${key?.isStar ? "bg-gold/5" : ""}`}>
      <div className={`flex items-center gap-1 ${isHome ? "" : "flex-row-reverse"}`}>
        {key?.isStar && <span className="text-gold text-[10px]">⭐</span>}
        <span className="font-semibold text-ink-hi">{player.short}</span>
        <span className="text-[10px] text-ink-low">#{player.jersey}</span>
      </div>
      <div className={`flex items-center gap-2 mt-0.5 text-[10px] ${isHome ? "" : "flex-row-reverse"}`}>
        {key ? (
          <>
            <span className="text-ink-low">{key.club}</span>
            <span className="text-ink-mid">Form {key.form}/10</span>
            <span className={RISK_STYLE[key.injuryRisk]}>{RISK_LABEL[key.injuryRisk]}</span>
          </>
        ) : (
          player.age && <span className="text-ink-low">{player.age} th</span>
        )}
      </div>
      {key && key.traits.length > 0 && (
        <div className={`flex flex-wrap gap-0.5 mt-1 ${isHome ? "" : "justify-end"}`}>
          {key.traits.slice(0, 2).map((t) => (
            <span key={t} className="rounded bg-pitch-800 px-1 py-0.5 text-[9px] text-ink-low">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}
