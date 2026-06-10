// FIFA World Ranking — April 2026 (terakhir sebelum WC dimulai)
// Sumber: Wikipedia "FIFA Men's World Ranking" + FIFA.com (data publik)
// Update manual: Maret dan Oktober setiap tahun
// Points = FIFA ELO-based points system

export interface FIFARankEntry {
  rank: number;
  points: number;       // FIFA points (ELO-based)
  confederation: string;
  // Turunan untuk Prediction Engine:
  strength: number;     // normalized 0-100 dari points
}

// Top 20 dari Wikipedia April 2026, sisanya dari sumber publik FIFA.com
const RAW: Record<string, { rank: number; points: number; conf: string }> = {
  fra: { rank: 1,  points: 1877, conf: "UEFA" },
  esp: { rank: 2,  points: 1876, conf: "UEFA" },
  arg: { rank: 3,  points: 1875, conf: "CONMEBOL" },
  eng: { rank: 4,  points: 1826, conf: "UEFA" },
  por: { rank: 5,  points: 1764, conf: "UEFA" },
  bra: { rank: 6,  points: 1761, conf: "CONMEBOL" },
  ned: { rank: 7,  points: 1758, conf: "UEFA" },
  mar: { rank: 8,  points: 1756, conf: "CAF" },
  bel: { rank: 9,  points: 1735, conf: "UEFA" },
  ger: { rank: 10, points: 1730, conf: "UEFA" },
  cro: { rank: 11, points: 1717, conf: "UEFA" },
  col: { rank: 13, points: 1693, conf: "CONMEBOL" },
  sen: { rank: 14, points: 1689, conf: "CAF" },
  mex: { rank: 15, points: 1681, conf: "CONCACAF" },
  usa: { rank: 16, points: 1673, conf: "CONCACAF" },
  uru: { rank: 17, points: 1673, conf: "CONMEBOL" },
  jpn: { rank: 18, points: 1660, conf: "AFC" },
  sui: { rank: 19, points: 1649, conf: "UEFA" },
  aut: { rank: 25, points: 1610, conf: "UEFA" },
  nor: { rank: 27, points: 1595, conf: "UEFA" },
  ecu: { rank: 30, points: 1570, conf: "CONMEBOL" },
  swe: { rank: 31, points: 1562, conf: "UEFA" },
  tur: { rank: 33, points: 1548, conf: "UEFA" },
  sco: { rank: 38, points: 1521, conf: "UEFA" },
  can: { rank: 40, points: 1511, conf: "CONCACAF" },
  alg: { rank: 41, points: 1507, conf: "CAF" },
  aus: { rank: 42, points: 1503, conf: "AFC" },
  par: { rank: 45, points: 1490, conf: "CONMEBOL" },
  cze: { rank: 46, points: 1487, conf: "UEFA" },
  irn: { rank: 22, points: 1629, conf: "AFC" },
  kor: { rank: 23, points: 1624, conf: "AFC" },
  ksa: { rank: 56, points: 1448, conf: "AFC" },
  irq: { rank: 58, points: 1440, conf: "AFC" },
  jor: { rank: 63, points: 1420, conf: "AFC" },
  uzb: { rank: 64, points: 1418, conf: "AFC" },
  civ: { rank: 48, points: 1479, conf: "CAF" },
  egy: { rank: 35, points: 1540, conf: "CAF" },
  gha: { rank: 53, points: 1457, conf: "CAF" },
  tun: { rank: 28, points: 1590, conf: "CAF" },
  rsa: { rank: 62, points: 1423, conf: "CAF" },
  cod: { rank: 55, points: 1450, conf: "CAF" },
  cpv: { rank: 72, points: 1390, conf: "CAF" },
  nzl: { rank: 95, points: 1308, conf: "OFC" },
  hai: { rank: 108, points: 1265, conf: "CONCACAF" },
  pan: { rank: 77, points: 1375, conf: "CONCACAF" },
  qat: { rank: 60, points: 1432, conf: "AFC" },
  bih: { rank: 51, points: 1462, conf: "UEFA" },
  cuw: { rank: 82, points: 1358, conf: "CONCACAF" },
};

// Normalize strength ke 0-100 berdasarkan range points 48 tim WC
const allPoints = Object.values(RAW).map(v => v.points);
const minPts = Math.min(...allPoints); // ~1265 (Haiti)
const maxPts = Math.max(...allPoints); // ~1877 (France)

export const FIFA_RANKING: Record<string, FIFARankEntry> = Object.fromEntries(
  Object.entries(RAW).map(([code, v]) => [
    code,
    {
      rank: v.rank,
      points: v.points,
      confederation: v.conf,
      strength: Math.round(((v.points - minPts) / (maxPts - minPts)) * 100),
    },
  ])
);

/** Ranking gap factor: positive = teamA stronger. Range -1 to +1 */
export function rankingFactor(teamACode: string, teamBCode: string): number {
  const a = FIFA_RANKING[teamACode];
  const b = FIFA_RANKING[teamBCode];
  if (!a || !b) return 0;
  // Points diff normalized to [-1, +1]
  return Math.tanh((a.points - b.points) / 300);
}

/** Get strength 0-100 with fallback */
export function getStrength(code: string): number {
  return FIFA_RANKING[code]?.strength ?? 40;
}
