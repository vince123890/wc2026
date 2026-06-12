// Mapper respons eksternal → RealFixture internal
// worldcup26.ir (JWT gratis) + API-Football (free tier 100 req/hari)
import type { RealFixture } from "./wc2026-data";
import { WC2026_GROUPS, WC2026_TEAMS } from "./wc2026-data";

// Nama tim (en) → fifa code lowercase, untuk mencocokkan home_team_name_en/away_team_name_en
const TEAM_NAME_TO_ID: Record<string, string> = Object.fromEntries(
  Object.values(WC2026_TEAMS).map((t) => [t.name, t.id])
);

// worldcup26.ir memakai penamaan resmi FIFA yang berbeda dari WC2026_TEAMS untuk beberapa tim
const TEAM_NAME_ALIASES: Record<string, string> = {
  "Bosnia and Herzegovina": "Bosnia & Herzegovina",
  "United States": "USA",
  "Democratic Republic of the Congo": "DR Congo",
};
for (const [apiName, localName] of Object.entries(TEAM_NAME_ALIASES)) {
  if (TEAM_NAME_TO_ID[localName]) TEAM_NAME_TO_ID[apiName] = TEAM_NAME_TO_ID[localName];
}

// worldcup26.ir "type" → nama round kanonis
const WC26_TYPE_TO_ROUND: Record<string, string> = {
  r32: "Round of 32",
  r16: "Round of 16",
  qf: "Quarter-final",
  sf: "Semi-final",
  third: "Match for third place",
  final: "Final",
};

// ---------- worldcup26.ir ----------
// Shape aktual: { id, home_team_name_en, away_team_name_en, home_score, away_score,
//                 group, matchday, type, local_date: "MM/DD/YYYY HH:mm",
//                 finished, time_elapsed, stadium_id }
export function mapWC26Game(raw: Record<string, unknown>): RealFixture {
  const homeName = String(raw.home_team_name_en ?? "");
  const awayName = String(raw.away_team_name_en ?? "");
  const homeId = TEAM_NAME_TO_ID[homeName] ?? null;
  const awayId = TEAM_NAME_TO_ID[awayName] ?? null;

  const type = String(raw.type ?? "group");
  const round = type === "group"
    ? `Matchday ${raw.matchday ?? "1"}`
    : WC26_TYPE_TO_ROUND[type] ?? type;

  const finished = String(raw.finished ?? "FALSE").toUpperCase() === "TRUE";
  const elapsed = String(raw.time_elapsed ?? "notstarted");
  let status = "SCHEDULED";
  if (finished) status = "FINISHED";
  else if (elapsed !== "notstarted" && elapsed !== "") status = elapsed.toLowerCase() === "ht" ? "HALF_TIME" : "LIVE";

  return {
    id: `wc26-${raw.id}`,
    round,
    homeId,
    homeName,
    awayId,
    awayName,
    kickoff: parseLocalDate(String(raw.local_date ?? ""), String(raw.stadium_id ?? "")),
    group: normaliseGroup(raw.group) || groupFromTeams(homeId ?? "", awayId ?? ""),
    venue: "",
    status,
    homeScore: finished || elapsed !== "notstarted" ? Number(raw.home_score ?? 0) : null,
    awayScore: finished || elapsed !== "notstarted" ? Number(raw.away_score ?? 0) : null,
    homeScorers: parseScorers(raw.home_scorers),
    awayScorers: parseScorers(raw.away_scorers),
  };
}

// worldcup26.ir mengembalikan scorer sebagai string literal array Postgres dengan smart quotes,
// mis. {"J. Quiñones 9'","R. Jiménez 67'"} atau "null" jika tidak ada gol.
function parseScorers(raw: unknown): string[] {
  const str = String(raw ?? "");
  if (!str || str === "null") return [];
  const inner = str.replace(/^\{|\}$/g, "");
  return inner
    .split(",")
    .map((s) => s.trim().replace(/^[“"]|[”"]$/g, ""))
    .filter(Boolean);
}

// ---------- API-Football (v3, RapidAPI) ----------
// Shape: { fixture: { id, date, status: { short } }, teams: { home, away }, goals, league }
export function mapAPIFootballFixture(raw: Record<string, unknown>): RealFixture {
  const statusMap: Record<string, string> = {
    NS: "SCHEDULED", "1H": "LIVE", HT: "HALF_TIME", "2H": "LIVE",
    ET: "EXTRA_TIME", P: "PENALTY", FT: "FINISHED", AET: "FINISHED", PEN: "FINISHED",
  };
  const fixture = (raw.fixture as Record<string, unknown>) ?? {};
  const teams = (raw.teams as Record<string, unknown>) ?? {};
  const home = (teams.home as Record<string, unknown>) ?? {};
  const away = (teams.away as Record<string, unknown>) ?? {};
  const goals = (raw.goals as Record<string, unknown>) ?? {};
  const status = (fixture.status as Record<string, unknown>) ?? {};
  const league = (raw.league as Record<string, unknown>) ?? {};

  return {
    id: `apif-${fixture.id}`,
    round: String(league.round ?? ""),
    homeId: normaliseCode(String(home.code ?? home.name ?? "")),
    homeName: String(home.name ?? ""),
    awayId: normaliseCode(String(away.code ?? away.name ?? "")),
    awayName: String(away.name ?? ""),
    kickoff: String(fixture.date ?? ""),
    group: normaliseGroup(league.round) || groupFromTeams(
      normaliseCode(String(home.code ?? home.name ?? "")),
      normaliseCode(String(away.code ?? away.name ?? ""))
    ),
    venue: String((fixture.venue as Record<string, unknown>)?.name ?? ""),
    status: statusMap[String(status.short ?? "")] ?? "SCHEDULED",
    homeScore: goals.home != null ? Number(goals.home) : null,
    awayScore: goals.away != null ? Number(goals.away) : null,
  };
}

// ---------- worldcup26.ir events ----------
// Bentuk respons tidak konsisten/terdokumentasi antar pertandingan — bisa berupa
// array langsung atau dibungkus { data: [...] } / { events: [...] }. Jika tidak
// bisa menemukan array event, kembalikan [] supaya caller fallback ke FALLBACK_EVENTS
// daripada mengirim object ke frontend (menyebabkan "TypeError: e is not iterable"
// saat di-spread oleh CommentaryFeed).
export function mapWC26Events(raw: unknown, matchId: string): MatchEvent[] {
  const obj = raw as Record<string, unknown>;
  const arr = Array.isArray(raw) ? raw : (Array.isArray(obj?.data) ? obj.data : Array.isArray(obj?.events) ? obj.events : null);
  if (!arr) return [];

  return (arr as Record<string, unknown>[]).map((e, i) => {
    const type = String(e.type ?? e.event_type ?? "EVENT").toUpperCase();
    const playerName = String(e.player_name ?? e.player ?? "");
    return {
      id: String(e.id ?? `${matchId}-${i}`),
      min: Number(e.minute ?? e.min ?? e.time_elapsed ?? 0),
      type,
      teamId: TEAM_NAME_TO_ID[String(e.team_name ?? e.team ?? "")] ?? null,
      playerId: null,
      desc: String(e.description ?? e.desc ?? `${type} - ${playerName}`.trim()),
    };
  });
}

// ---------- API-Football events ----------
// Shape: { response: [{ time: {elapsed}, team: {name}, player: {name}, type, detail, comments }] }
export function mapAPIFootballEvents(raw: unknown, matchId: string): MatchEvent[] {
  const response = (raw as Record<string, unknown>)?.response;
  if (!Array.isArray(response)) return [];

  const typeMap: Record<string, string> = {
    Goal: "GOAL",
    Card: "CARD",
    subst: "SUBSTITUTION",
    Var: "VAR",
  };

  return (response as Record<string, unknown>[]).map((e, i) => {
    const time = (e.time as Record<string, unknown>) ?? {};
    const team = (e.team as Record<string, unknown>) ?? {};
    const player = (e.player as Record<string, unknown>) ?? {};
    const apiType = String(e.type ?? "");
    const detail = String(e.detail ?? "");
    const type = detail.toUpperCase() === "YELLOW CARD" ? "YELLOW_CARD"
      : detail.toUpperCase() === "RED CARD" ? "RED_CARD"
      : typeMap[apiType] ?? apiType.toUpperCase() ?? "EVENT";

    return {
      id: `${matchId}-${i}`,
      min: Number(time.elapsed ?? 0),
      type,
      teamId: normaliseCode(String(team.name ?? "")) || null,
      playerId: null,
      desc: `${detail}${player.name ? ` - ${player.name}` : ""}${e.comments ? ` (${e.comments})` : ""}`.trim(),
    };
  });
}

// ---------- API-Football Lineup mapper ----------
import type { MatchLineups, TeamLineup, LineupPlayer, MatchEvent } from "./types";

export function mapAPIFootballLineup(raw: Record<string, unknown>[]): MatchLineups | null {
  if (!raw || raw.length < 2) return null;
  const mapTeam = (t: Record<string, unknown>): TeamLineup => {
    const starters: LineupPlayer[] = ((t.startXI as unknown[]) ?? []).map((p, i) => {
      const pl = ((p as Record<string, unknown>).player ?? p) as Record<string, unknown>;
      return {
        id: String(pl.id ?? i),
        name: String(pl.name ?? ""),
        short: String(pl.name ?? "").split(" ").pop() ?? "",
        pos: String(pl.pos ?? pl.position ?? "FWD"),
        jersey: Number(pl.number ?? pl.jersey ?? i + 1),
      };
    });
    const bench: LineupPlayer[] = ((t.substitutes as unknown[]) ?? []).map((p, i) => {
      const pl = ((p as Record<string, unknown>).player ?? p) as Record<string, unknown>;
      return {
        id: `bench-${pl.id ?? i}`,
        name: String(pl.name ?? ""),
        short: String(pl.name ?? "").split(" ").pop() ?? "",
        pos: String(pl.pos ?? pl.position ?? ""),
        jersey: Number(pl.number ?? pl.jersey ?? 0),
      };
    });
    return {
      formation: String(t.formation ?? "4-4-2"),
      confirmed: true,
      starters,
      bench,
    };
  };
  return { home: mapTeam(raw[0] as Record<string, unknown>), away: mapTeam(raw[1] as Record<string, unknown>) };
}

// ---------- BALLDONTLIE lineups ----------
// Shape (FIFA GOAT tier): { data: [ { team: {...}, formation, starting_lineup: [...]|starters,
//                                       substitutes: [...]|bench, is_home: boolean }, {...} ] }
// Tidak semua field dijamin ada (tergantung tier/match) — kembalikan null jika
// tidak bisa menemukan 2 entry tim dengan starter, supaya caller fallback ke sumber lain
// daripada mengirim shape rusak ke frontend (TypeError: e is not iterable).
export function mapBDLLineups(raw: unknown): MatchLineups | null {
  const arr = (raw as Record<string, unknown>)?.data;
  if (!Array.isArray(arr) || arr.length < 2) return null;

  const mapPlayer = (p: Record<string, unknown>, i: number, prefix: string): LineupPlayer => {
    const name = String(p.name ?? p.player_name ?? "");
    return {
      id: String(p.id ?? `${prefix}-${i}`),
      name,
      short: name.split(" ").pop() ?? name,
      pos: String(p.position ?? p.pos ?? "FWD"),
      jersey: Number(p.number ?? p.jersey ?? i + 1),
    };
  };

  const mapTeam = (entry: Record<string, unknown>, side: string): TeamLineup | null => {
    const starterRaw = (entry.starting_lineup ?? entry.starters ?? entry.starting_xi) as unknown[] | undefined;
    if (!Array.isArray(starterRaw) || starterRaw.length === 0) return null;
    const benchRaw = (entry.substitutes ?? entry.bench) as unknown[] | undefined;
    return {
      formation: String(entry.formation ?? "4-3-3"),
      confirmed: true,
      starters: starterRaw.map((p, i) => mapPlayer(p as Record<string, unknown>, i, `${side}-s`)),
      bench: Array.isArray(benchRaw) ? benchRaw.map((p, i) => mapPlayer(p as Record<string, unknown>, i, `${side}-b`)) : [],
    };
  };

  const homeEntry = arr.find((e) => (e as Record<string, unknown>).is_home === true) ?? arr[0];
  const awayEntry = arr.find((e) => (e as Record<string, unknown>).is_home === false) ?? arr[1];

  const home = mapTeam(homeEntry as Record<string, unknown>, "home");
  const away = mapTeam(awayEntry as Record<string, unknown>, "away");
  if (!home || !away) return null;

  return { home, away };
}

// ---------- BALLDONTLIE group standings ----------
// Shape: { data: [{ team: { abbreviation, name }, group: { name }, position, played,
//                    won, drawn, lost, goals_for, goals_against, goal_difference, points }] }
import type { StandingRow } from "./standings-types";

const FIFA_CODE_TO_ID: Record<string, string> = Object.fromEntries(
  Object.values(WC2026_TEAMS).map((t) => [t.fifaCode, t.id])
);

export function mapBDLGroupStandings(raw: { data?: Record<string, unknown>[] }): Record<string, StandingRow[]> {
  const out: Record<string, StandingRow[]> = {};
  for (const row of raw.data ?? []) {
    const team = (row.team as Record<string, unknown>) ?? {};
    const group = (row.group as Record<string, unknown>) ?? {};
    const groupName = String(group.name ?? "");
    const code = String(team.abbreviation ?? "");
    const teamId = FIFA_CODE_TO_ID[code] ?? code.toLowerCase();
    const wcTeam = WC2026_TEAMS[teamId];

    const standing: StandingRow = {
      teamId,
      name: wcTeam?.name ?? String(team.name ?? code),
      flag: wcTeam?.flag ?? "🏳️",
      played: Number(row.played ?? 0),
      won: Number(row.won ?? 0),
      drawn: Number(row.drawn ?? 0),
      lost: Number(row.lost ?? 0),
      gf: Number(row.goals_for ?? 0),
      ga: Number(row.goals_against ?? 0),
      gd: Number(row.goal_difference ?? 0),
      pts: Number(row.points ?? 0),
      position: Number(row.position ?? 0),
      confederation: String(team.confederation ?? wcTeam?.confed ?? ""),
    };

    if (!out[groupName]) out[groupName] = [];
    out[groupName].push(standing);
  }
  // Urutan posisi resmi dari BALLDONTLIE sudah final (poin → SG → GM)
  for (const rows of Object.values(out)) {
    rows.sort((x, y) => (x.position ?? 0) - (y.position ?? 0));
  }
  return out;
}

// ---------- openfootball full squads (26 pemain/tim, gratis tanpa API key) ----------
import type { SquadPlayer } from "@/app/api/proxy/squads/route";

const OFB_POS_TO_GROUP: Record<string, string> = {
  GK: "Goalkeeper", DF: "Defender", MF: "Midfielder", FW: "Attacker",
};

// raw: array of { name, fifa_code, group, players: [{number, pos, name, date_of_birth}] }
export function mapOFBSquad(raw: Record<string, unknown>[], fifaCode: string): SquadPlayer[] | null {
  const team = raw.find((t) => String(t.fifa_code ?? "") === fifaCode);
  if (!team) return null;
  const players = (team.players as Record<string, unknown>[]) ?? [];
  const thisYear = new Date().getFullYear();
  return players.map((p, i) => {
    const dob = String(p.date_of_birth ?? "");
    const birthYear = Number(dob.slice(0, 4)) || 0;
    return {
      id: i + 1,
      name: String(p.name ?? ""),
      age: birthYear ? thisYear - birthYear : 0,
      number: p.number != null ? Number(p.number) : null,
      position: OFB_POS_TO_GROUP[String(p.pos ?? "")] ?? "Midfielder",
      photo: "",
    };
  });
}

// ---------- helpers ----------
function normaliseCode(code: string): string {
  return code.toLowerCase().replace(/\s+/g, "").slice(0, 5);
}

// Canonical group format: "Group A" - "Group L".
// Sumber eksternal kadang mengirim "A", "Group A", atau "Group Stage - 1" (matchday, bukan grup).
function normaliseGroup(raw: unknown): string {
  const s = String(raw ?? "").trim();
  if (!s) return "";
  if (/^Group [A-L]$/i.test(s)) {
    return `Group ${s.slice(-1).toUpperCase()}`;
  }
  const m = s.match(/^[A-L]$/i);
  if (m) return `Group ${m[0].toUpperCase()}`;
  return "";
}

// Fallback: cari grup berdasarkan kedua tim di WC2026_GROUPS
function groupFromTeams(homeId: string, awayId: string): string {
  for (const [group, teams] of Object.entries(WC2026_GROUPS)) {
    if (teams.includes(homeId) && teams.includes(awayId)) return group;
  }
  return "";
}

// worldcup26.ir "local_date" adalah waktu lokal venue (bukan UTC) tanpa info zona waktu.
// Pemetaan stadium_id → offset UTC saat WC2026 (Juni-Juli, DST aktif di AS/Kanada):
// Meksiko (UTC-6, tanpa DST) = +6, Central AS/Kanada (CDT, UTC-5) = +5,
// Eastern AS/Kanada (EDT, UTC-4) = +4, Western AS/Kanada (PDT, UTC-7) = +7.
const STADIUM_UTC_OFFSET: Record<string, number> = {
  "1": 6, "2": 6, "3": 6,   // Mexico City, Guadalajara, Monterrey
  "4": 5, "5": 5, "6": 5,   // Dallas, Houston, Kansas City
  "7": 4, "8": 4, "9": 4, "10": 4, "11": 4, "12": 4, // Atlanta, Miami, Boston, Philadelphia, NY/NJ, Toronto
  "13": 7, "14": 7, "15": 7, "16": 7, // Vancouver, Seattle, San Francisco Bay Area, Los Angeles
};

// worldcup26.ir local_date format: "MM/DD/YYYY HH:mm" (waktu lokal venue) → UTC ISO string
function parseLocalDate(local: string, stadiumId?: string): string {
  const m = local.match(/^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/);
  if (!m) return new Date().toISOString();
  const [, mm, dd, yyyy, hh, min] = m;
  const offset = STADIUM_UTC_OFFSET[stadiumId ?? ""] ?? 0;
  const utcMs = Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd), Number(hh) + offset, Number(min));
  return new Date(utcMs).toISOString();
}
