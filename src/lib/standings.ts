// Hitung klasemen dari hasil pertandingan nyata. Sebelum turnamen mulai,
// semua tim 0 main / 0 poin (akurat — WC 2026 baru kickoff 11 Juni 2026).
import { WC2026_GROUPS, WC2026_FIXTURES, WC2026_TEAMS, type RealFixture } from "./wc2026-data";

export interface StandingRow {
  teamId: string;
  name: string;
  flag: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
}

function emptyRow(teamId: string): StandingRow {
  const t = WC2026_TEAMS[teamId];
  return {
    teamId,
    name: t?.name ?? teamId,
    flag: t?.flag ?? "🏳️",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 0,
  };
}

export function computeStandings(fixtures: RealFixture[] = WC2026_FIXTURES): Record<string, StandingRow[]> {
  const table: Record<string, Record<string, StandingRow>> = {};

  // Inisialisasi semua tim per grup
  for (const [group, teamIds] of Object.entries(WC2026_GROUPS)) {
    table[group] = {};
    for (const id of teamIds) table[group][id] = emptyRow(id);
  }

  // Terapkan hasil pertandingan yang sudah selesai
  for (const f of fixtures) {
    if (f.homeScore == null || f.awayScore == null) continue;
    if (!f.group || !f.homeId || !f.awayId) continue;
    const g = table[f.group];
    if (!g || !g[f.homeId] || !g[f.awayId]) continue;

    const h = g[f.homeId];
    const a = g[f.awayId];
    h.played++;
    a.played++;
    h.gf += f.homeScore;
    h.ga += f.awayScore;
    a.gf += f.awayScore;
    a.ga += f.homeScore;

    if (f.homeScore > f.awayScore) {
      h.won++;
      h.pts += 3;
      a.lost++;
    } else if (f.homeScore < f.awayScore) {
      a.won++;
      a.pts += 3;
      h.lost++;
    } else {
      h.drawn++;
      a.drawn++;
      h.pts++;
      a.pts++;
    }
  }

  // Urutkan: poin → selisih gol → gol memasukkan
  const out: Record<string, StandingRow[]> = {};
  for (const [group, rows] of Object.entries(table)) {
    out[group] = Object.values(rows)
      .map((r) => ({ ...r, gd: r.gf - r.ga }))
      .sort((x, y) => y.pts - x.pts || y.gd - x.gd || y.gf - x.gf);
  }
  return out;
}
