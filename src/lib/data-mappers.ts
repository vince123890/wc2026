// Mapper respons eksternal → RealFixture internal
// worldcup26.ir (JWT gratis) + API-Football (free tier 100 req/hari)
import type { RealFixture } from "./wc2026-data";

// ---------- worldcup26.ir ----------
// Shape: { id, home_team, away_team, home_score, away_score, status, group, stage, date, time, stadium }
export function mapWC26Game(raw: Record<string, unknown>): RealFixture {
  const statusMap: Record<string, string> = {
    NS: "SCHEDULED", "1H": "LIVE", HT: "HALF_TIME", "2H": "LIVE",
    ET: "EXTRA_TIME", P: "PENALTY", FT: "FINISHED", AET: "FINISHED", PEN: "FINISHED",
  };
  const home = (raw.home_team as Record<string, unknown>) ?? {};
  const away = (raw.away_team as Record<string, unknown>) ?? {};
  const score = (raw.score as Record<string, unknown>) ?? {};
  const ft = (score.fulltime as Record<string, unknown>) ?? {};

  return {
    id: `wc26-${raw.id}`,
    round: String(raw.round ?? raw.stage ?? ""),
    homeId: normaliseCode(String(home.code ?? "")),
    homeName: String(home.name ?? raw.home_team ?? ""),
    awayId: normaliseCode(String(away.code ?? "")),
    awayName: String(away.name ?? raw.away_team ?? ""),
    kickoff: buildKickoff(String(raw.date ?? ""), String(raw.time ?? "")),
    group: String(raw.group ?? ""),
    venue: String(raw.stadium ?? raw.venue ?? ""),
    status: statusMap[String(raw.status ?? "")] ?? "SCHEDULED",
    homeScore: ft.home != null ? Number(ft.home) : null,
    awayScore: ft.away != null ? Number(ft.away) : null,
  };
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
    group: String(league.round ?? ""),
    venue: String((fixture.venue as Record<string, unknown>)?.name ?? ""),
    status: statusMap[String(status.short ?? "")] ?? "SCHEDULED",
    homeScore: goals.home != null ? Number(goals.home) : null,
    awayScore: goals.away != null ? Number(goals.away) : null,
  };
}

// ---------- API-Football Lineup mapper ----------
import type { MatchLineups, TeamLineup, LineupPlayer } from "./types";

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

// ---------- helpers ----------
function normaliseCode(code: string): string {
  return code.toLowerCase().replace(/\s+/g, "").slice(0, 5);
}

function buildKickoff(date: string, time: string): string {
  if (!date) return new Date().toISOString();
  if (date.includes("T")) return date;
  const t = time.replace(" UTC", "").trim() || "00:00";
  return `${date}T${t.length === 5 ? t : "00:00"}:00Z`;
}
