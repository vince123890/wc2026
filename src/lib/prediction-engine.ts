// Prediction Score Engine (FR-25) — Model deterministik multi-faktor
// Menggunakan Poisson distribution + weighted factors
// Semua data dari sumber gratis: FIFA Ranking, H2H, Coach, Key Players
import { rankingFactor, getStrength, FIFA_RANKING } from "./fifa-ranking";
import { h2hFactor } from "./h2h-data";
import type { Coach, MatchLineups } from "./types";
import { getLineupStrength } from "./key-players";
import { computeStandings } from "./standings";
import type { StandingRow } from "./standings-types";

// ─────────────────────────────────────────────────────────────────────────────
// Tactical Matchup Engine (FR-26)
// ─────────────────────────────────────────────────────────────────────────────

/** Keuntungan formasi — berdasarkan matchup taktis standar */
const FORMATION_ADVANTAGE: Record<string, Record<string, number>> = {
  "4-3-3":  { "4-3-3":0, "4-2-3-1":0.15, "3-5-2":-0.15, "4-4-2":0.1, "3-4-3":0.05, "4-1-4-1":0.1, "4-3-2-1":0.05, "3-3-1-3":-0.1 },
  "4-2-3-1":{ "4-3-3":-0.15,"4-2-3-1":0,"3-5-2":-0.2,"4-4-2":0.1,"3-4-3":-0.1,"4-1-4-1":0.05,"4-3-2-1":0,"3-3-1-3":-0.05 },
  "3-5-2":  { "4-3-3":0.15,"4-2-3-1":0.2,"3-5-2":0,"4-4-2":0.25,"3-4-3":0.1,"4-1-4-1":0.2,"4-3-2-1":0.15,"3-3-1-3":0.1 },
  "4-4-2":  { "4-3-3":-0.1,"4-2-3-1":-0.1,"3-5-2":-0.25,"4-4-2":0,"3-4-3":-0.15,"4-1-4-1":-0.05,"4-3-2-1":-0.1,"3-3-1-3":-0.15 },
  "3-4-3":  { "4-3-3":-0.05,"4-2-3-1":0.1,"3-5-2":-0.1,"4-4-2":0.15,"3-4-3":0,"4-1-4-1":0.05,"4-3-2-1":0.05,"3-3-1-3":0 },
  "4-1-4-1":{ "4-3-3":-0.1,"4-2-3-1":-0.05,"3-5-2":-0.2,"4-4-2":0.05,"3-4-3":-0.05,"4-1-4-1":0,"4-3-2-1":-0.05,"3-3-1-3":-0.1 },
  "3-3-1-3":{ "4-3-3":0.1,"4-2-3-1":0.05,"3-5-2":-0.1,"4-4-2":0.15,"3-4-3":0,"4-1-4-1":0.1,"4-3-2-1":0.05,"3-3-1-3":0 },
  "4-3-2-1":{ "4-3-3":-0.05,"4-2-3-1":0,"3-5-2":-0.15,"4-4-2":0.1,"3-4-3":-0.05,"4-1-4-1":0.05,"4-3-2-1":0,"3-3-1-3":-0.05 },
};

/** Press style advantage: returns delta for home team */
function pressStyleDelta(homePress: string, awayPress: string): number {
  const map: Record<string, number> = { HIGH: 2, MID: 1, LOW: 0 };
  const h = map[homePress] ?? 1;
  const a = map[awayPress] ?? 1;
  return (h - a) * 0.05; // kecil tapi signifikan
}

/** Playing style clash advantage */
function playingStyleDelta(homeStyle: string, awayStyle: string): number {
  const clashes: [string, string, number][] = [
    ["COUNTER", "POSSESSION", 0.2],
    ["POSSESSION", "COUNTER", -0.2],
    ["DIRECT", "POSSESSION", 0.1],
    ["POSSESSION", "DIRECT", -0.1],
  ];
  for (const [h, a, delta] of clashes) {
    if (homeStyle === h && awayStyle === a) return delta;
  }
  return 0;
}

export interface TacticalMatchupResult {
  homeFormationAdv: number;   // -1 to +1
  homePressAdv: number;
  homeStyleAdv: number;
  homeCoachAdv: number;       // dari win rate
  total: number;              // gabungan
  description: string;
  dominance: "HOME" | "AWAY" | "BALANCED";
}

export function calculateTacticalMatchup(
  homeCoach: Coach | null,
  awayCoach: Coach | null
): TacticalMatchupResult {
  const hForm = homeCoach?.formation ?? "4-3-3";
  const aForm = awayCoach?.formation ?? "4-3-3";

  const homeFormationAdv = FORMATION_ADVANTAGE[hForm]?.[aForm] ?? 0;
  const homePressAdv = pressStyleDelta(homeCoach?.pressStyle ?? "MID", awayCoach?.pressStyle ?? "MID");
  const homeStyleAdv = playingStyleDelta(homeCoach?.playingStyle ?? "HYBRID", awayCoach?.playingStyle ?? "HYBRID");
  const homeCoachAdv = homeCoach && awayCoach
    ? ((homeCoach.winRate - awayCoach.winRate) / 100) * 0.15
    : 0;

  const total = homeFormationAdv + homePressAdv + homeStyleAdv + homeCoachAdv;

  const dominance: "HOME" | "AWAY" | "BALANCED" =
    total > 0.1 ? "HOME" : total < -0.1 ? "AWAY" : "BALANCED";

  const description = dominance === "HOME"
    ? `${hForm} mengeksploitasi ruang di belakang ${aForm}. ${homeCoach?.pressStyle ?? ""} press lebih efektif.`
    : dominance === "AWAY"
    ? `${aForm} mendikte tempo melawan ${hForm}. Press ${awayCoach?.pressStyle ?? ""} mencekik lini tengah.`
    : `Kedua formasi saling mengimbangi. Hasil ditentukan kualitas individu.`;

  return { homeFormationAdv, homePressAdv, homeStyleAdv, homeCoachAdv, total, description, dominance };
}

// ─────────────────────────────────────────────────────────────────────────────
// Current Form Engine — performa nyata dari pertandingan WC 2026 yang sudah selesai
// ─────────────────────────────────────────────────────────────────────────────

let standingsCache: Record<string, StandingRow[]> | null = null;

function findStandingRow(teamId: string): StandingRow | null {
  if (!standingsCache) standingsCache = computeStandings();
  for (const rows of Object.values(standingsCache)) {
    const row = rows.find((r) => r.teamId === teamId);
    if (row) return row;
  }
  return null;
}

/**
 * Form factor dari hasil pertandingan nyata yang sudah dimainkan: -1 to +1.
 * Menggabungkan poin per laga (vs rata-rata 1.5) dan selisih gol per laga.
 * Tim yang belum bertanding (played === 0) mengembalikan 0 (netral).
 */
function currentFormFactor(teamId: string): number {
  const row = findStandingRow(teamId);
  if (!row || row.played === 0) return 0;
  const ppgDelta = (row.pts / row.played - 1.5) / 1.5; // -1 (selalu kalah) to +1 (selalu menang)
  const gdPerGame = row.gd / row.played;
  const gdDelta = Math.tanh(gdPerGame / 2); // selisih gol 2/laga ~ tanh(1)
  return Math.max(-1, Math.min(1, ppgDelta * 0.6 + gdDelta * 0.4));
}

// ─────────────────────────────────────────────────────────────────────────────
// Prediction Score Engine — Poisson model berbasis 6 faktor
// ─────────────────────────────────────────────────────────────────────────────

/** Poisson probability: P(X=k) */
function poissonP(lambda: number, k: number): number {
  if (lambda <= 0) lambda = 0.01;
  let logP = -lambda + k * Math.log(lambda);
  for (let i = 1; i <= k; i++) logP -= Math.log(i);
  return Math.exp(logP);
}

/** Most likely score from expected goals via Poisson */
function mostLikelyScore(lambdaH: number, lambdaA: number): { home: number; away: number } {
  let bestP = -1, bH = 0, bA = 0;
  for (let h = 0; h <= 6; h++) {
    for (let a = 0; a <= 6; a++) {
      const p = poissonP(lambdaH, h) * poissonP(lambdaA, a);
      if (p > bestP) { bestP = p; bH = h; bA = a; }
    }
  }
  return { home: bH, away: bA };
}

/** Compute win/draw/lose probabilities from Poisson */
function matchProbabilities(lambdaH: number, lambdaA: number): {
  homeWin: number; draw: number; awayWin: number;
} {
  let hw = 0, dr = 0, aw = 0;
  for (let h = 0; h <= 9; h++) {
    for (let a = 0; a <= 9; a++) {
      const p = poissonP(lambdaH, h) * poissonP(lambdaA, a);
      if (h > a) hw += p;
      else if (h === a) dr += p;
      else aw += p;
    }
  }
  return { homeWin: hw, draw: dr, awayWin: aw };
}

export interface PredictionResult {
  homeScore: number;
  awayScore: number;
  altHomeScore: number;
  altAwayScore: number;
  expectedGoalsHome: number;
  expectedGoalsAway: number;
  probHomeWin: number;
  probDraw: number;
  probAwayWin: number;
  confidence: number;  // 0-100
  factors: {
    ranking: number;
    tactical: number;
    h2h: number;
    lineup: number;
    coach: number;
    form: number;
  };
  explanation: string;
}

export function calculatePrediction(
  homeId: string,
  awayId: string,
  homeCoach: Coach | null,
  awayCoach: Coach | null,
  lineups?: MatchLineups | null
): PredictionResult {
  const BASE_LAMBDA = 1.35; // rata-rata gol per tim di WC

  // Faktor 1: FIFA Ranking (bobot 25%)
  const rankAdv = rankingFactor(homeId, awayId); // -1 to +1

  // Faktor 2: Tactical matchup (bobot 20%)
  const tactical = calculateTacticalMatchup(homeCoach, awayCoach);
  const tactAdv = tactical.total; // -1 to +1 (biasanya -0.5 to +0.5)

  // Faktor 3: H2H historical (bobot 10%)
  const h2h = h2hFactor(homeId, awayId); // -1 to +1

  // Faktor 4: Lineup strength dari key players + skuad lengkap (bobot 15%)
  // Jika lineup (resmi/perkiraan) tersedia, pemain kunci yang absen dari starting XI
  // mengurangi lineup strength tim tersebut.
  const homeStarters = lineups?.home.starters.map((p) => p.short ?? p.name);
  const awayStarters = lineups?.away.starters.map((p) => p.short ?? p.name);
  const homeStr = getLineupStrength(homeId, homeStarters) / 100; // 0-1
  const awayStr = getLineupStrength(awayId, awayStarters) / 100;
  const lineupAdv = (homeStr - awayStr) * 0.8; // -0.8 to +0.8

  // Faktor 5: Coach quality — win rate (bobot 5%)
  const coachAdv = homeCoach && awayCoach
    ? ((homeCoach.winRate - awayCoach.winRate) / 100) * 0.5
    : 0;

  // Faktor 6: Form turnamen saat ini — hasil pertandingan WC 2026 yang sudah selesai (bobot 25%)
  // Tim yang menang besar/produktif di laga sebelumnya diprediksi lebih kuat di laga berikutnya.
  const homeForm = currentFormFactor(homeId); // -1 to +1
  const awayForm = currentFormFactor(awayId);
  const formAdv = (homeForm - awayForm) / 2; // -1 to +1

  // Gabungkan — lambda home = BASE + keuntungan home
  // Lambda = expected goals, harus positif
  const deltaHome = rankAdv * 0.4 + tactAdv * 0.2 + h2h * 0.1 + lineupAdv * 0.15 + coachAdv * 0.05 + formAdv * 0.2;
  // Amplifikasi non-linear: selisih kecil (tim setara) tetap halus, tapi gap besar
  // (favorit jauh lebih kuat) diperkuat supaya skor prediksi mencerminkan dominasi nyata
  // (mis. tim top-10 vs tim peringkat 80+ tidak boleh berakhir 1-1).
  const ampDelta = Math.sign(deltaHome) * (Math.abs(deltaHome) + Math.pow(Math.abs(deltaHome), 2.5) * 3);
  const lambdaHome = Math.max(0.25, BASE_LAMBDA + ampDelta);
  const lambdaAway = Math.max(0.25, BASE_LAMBDA - ampDelta);

  const bestScore = mostLikelyScore(lambdaHome, lambdaAway);
  const probs = matchProbabilities(lambdaHome, lambdaAway);

  // Alternative score: ±1 gol di sisi yang lebih lemah
  const altH = lambdaHome > lambdaAway ? bestScore.home : Math.max(0, bestScore.home + 1);
  const altA = lambdaAway > lambdaHome ? bestScore.away : Math.max(0, bestScore.away + 1);

  // Confidence dari ketersediaan data
  let confidence = 35; // base
  if (FIFA_RANKING_AVAILABLE(homeId, awayId)) confidence += 15;
  if (homeCoach?.winRate && awayCoach?.winRate) confidence += 10;
  if (h2hFactor(homeId, awayId) !== 0) confidence += 10;
  if (getLineupStrength(homeId, homeStarters) !== 50) confidence += 15;
  if (homeForm !== 0 || awayForm !== 0) confidence += 15; // sudah ada data hasil pertandingan nyata

  const winner = probs.homeWin > probs.awayWin ? homeId : probs.awayWin > probs.homeWin ? awayId : null;
  const formNote = homeForm !== 0 || awayForm !== 0
    ? ` Form turnamen: ${homeId.toUpperCase()} ${homeForm >= 0 ? "+" : ""}${homeForm.toFixed(2)}, ${awayId.toUpperCase()} ${awayForm >= 0 ? "+" : ""}${awayForm.toFixed(2)} (dari hasil pertandingan WC 2026 yang sudah selesai).`
    : "";
  const explanation = [
    `Expected goals: ${lambdaHome.toFixed(2)} – ${lambdaAway.toFixed(2)}.`,
    winner
      ? `${winner.toUpperCase()} difavoritkan (${Math.round(Math.max(probs.homeWin, probs.awayWin) * 100)}% prob menang).`
      : `Pertandingan sangat seimbang — imbang punya probabilitas ${Math.round(probs.draw * 100)}%.`,
    tactical.description + formNote,
  ].join(" ");

  return {
    homeScore: bestScore.home,
    awayScore: bestScore.away,
    altHomeScore: altH,
    altAwayScore: altA,
    expectedGoalsHome: Math.round(lambdaHome * 100) / 100,
    expectedGoalsAway: Math.round(lambdaAway * 100) / 100,
    probHomeWin: Math.round(probs.homeWin * 100),
    probDraw: Math.round(probs.draw * 100),
    probAwayWin: Math.round(probs.awayWin * 100),
    confidence: Math.min(95, confidence),
    factors: {
      ranking: Math.round(rankAdv * 100) / 100,
      tactical: Math.round(tactAdv * 100) / 100,
      h2h: Math.round(h2h * 100) / 100,
      lineup: Math.round(lineupAdv * 100) / 100,
      coach: Math.round(coachAdv * 100) / 100,
      form: Math.round(formAdv * 100) / 100,
    },
    explanation,
  };
}

function FIFA_RANKING_AVAILABLE(a: string, b: string): boolean {
  return !!(FIFA_RANKING[a] && FIFA_RANKING[b]);
}
