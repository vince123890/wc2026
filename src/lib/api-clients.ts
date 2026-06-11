// Server-side API clients — dipanggil HANYA dari Route Handlers (ARCH-R01)
// Fallback chain: worldcup26.ir → API-Football → BALLDONTLIE → embedded static
import "server-only";

const WC26_BASE = "https://worldcup26.ir";
const APIF_BASE = "https://v3.football.api-sports.io"; // direct API (non-RapidAPI)
const BDL_BASE  = "https://api.balldontlie.io/fifa/worldcup/v1";

const DEFAULT_TIMEOUT = 9000;

async function fetchJSON(url: string, headers: Record<string, string> = {}, timeoutMs = DEFAULT_TIMEOUT) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json", ...headers },
      signal: ctrl.signal,
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

// ── worldcup26.ir (GRATIS — JWT dari registrasi gratis) ──────────────────────
function wc26Headers(): Record<string, string> {
  const jwt = process.env.WC26_JWT;
  return jwt ? { Authorization: `Bearer ${jwt}` } : {};
}
export async function wc26Games()  { return fetchJSON(`${WC26_BASE}/get/games`,   wc26Headers()); }
export async function wc26Groups() { return fetchJSON(`${WC26_BASE}/get/groups`,  wc26Headers()); }
export async function wc26Teams()  { return fetchJSON(`${WC26_BASE}/get/teams`,   wc26Headers()); }
export async function wc26Events(matchId: string) {
  return fetchJSON(`${WC26_BASE}/get/events/${matchId}`, wc26Headers());
}
export async function wc26LiveScore() {
  return fetchJSON(`${WC26_BASE}/get/live`, wc26Headers());
}

// ── API-Football (GRATIS 100 req/hari — butuh APIF_KEY dari api-football.com) ─
// WC 2026 = league_id 1, season 2026
// clientKey: opsional, BYOK dari user (Settings) — dipakai jika APIF_KEY server kosong.
function apifHeaders(clientKey?: string): Record<string, string> | null {
  const key = process.env.APIF_KEY || clientKey;
  return key ? { "x-apisports-key": key } : null;
}
export async function apifFixtures(params = "", clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/fixtures?league=1&season=2026${params}`, h);
}
export async function apifLineups(fixtureId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/fixtures/lineups?fixture=${fixtureId}`, h);
}
export async function apifEvents(fixtureId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/fixtures/events?fixture=${fixtureId}`, h);
}
export async function apifStandings(clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/standings?league=1&season=2026`, h);
}
export async function apifPlayers(teamId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/players?league=1&season=2026&team=${teamId}`, h);
}

// ── Tier 2 (Addendum) — gratis, butuh APIF_KEY, dalam kuota 100 req/hari ────
export async function apifPredictions(fixtureId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/predictions?fixture=${fixtureId}`, h);
}
export async function apifSquads(teamId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/players/squads?team=${teamId}`, h);
}
export async function apifTeamStatistics(teamId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/teams/statistics?league=1&season=2026&team=${teamId}`, h);
}
export async function apifHeadToHead(id1: string, id2: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/fixtures/headtohead?h2h=${id1}-${id2}`, h);
}
export async function apifCoachs(teamId: string, clientKey?: string) {
  const h = apifHeaders(clientKey);
  if (!h) throw new Error("APIF_KEY not configured");
  return fetchJSON(`${APIF_BASE}/coachs?team=${teamId}`, h);
}

// ── BALLDONTLIE (Teams/Stadiums = Free | semua lain = GOAT $39.99/bln) ───────
function bdlHeaders(): Record<string, string> | null {
  const key = process.env.BALLDONTLIE_KEY;
  return key ? { Authorization: key } : null;
}
export async function bdlTeams()   { const h = bdlHeaders(); if (!h) throw new Error("BALLDONTLIE_KEY not configured"); return fetchJSON(`${BDL_BASE}/teams`, h); }
export async function bdlMatches(params = "") { const h = bdlHeaders(); if (!h) throw new Error("BALLDONTLIE_KEY not configured"); return fetchJSON(`${BDL_BASE}/matches${params}`, h); }
export async function bdlLineups(matchId: string) { const h = bdlHeaders(); if (!h) throw new Error("BALLDONTLIE_KEY not configured"); return fetchJSON(`${BDL_BASE}/lineups?match_ids[]=${encodeURIComponent(matchId)}`, h); }
export async function bdlEvents(matchId: string)  { const h = bdlHeaders(); if (!h) throw new Error("BALLDONTLIE_KEY not configured"); return fetchJSON(`${BDL_BASE}/events?match_ids[]=${encodeURIComponent(matchId)}`, h); }

// ── openfootball (GRATIS, statis) ─────────────────────────────────────────────
const OFB_BASE = "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026";
export async function ofbTeams()  { return fetchJSON(`${OFB_BASE}/worldcup.teams.json`); }
export async function ofbGroups() { return fetchJSON(`${OFB_BASE}/worldcup.groups.json`); }

// ── Helper: coba berurutan, kembalikan pertama yang berhasil ──────────────────
export async function firstAvailable<T>(
  attempts: { source: string; run: () => Promise<T> }[]
): Promise<{ source: string; data: T } | null> {
  for (const a of attempts) {
    try { return { source: a.source, data: await a.run() }; }
    catch { /* next */ }
  }
  return null;
}
