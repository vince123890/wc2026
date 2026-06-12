// Form 5 laga terakhir sebelum WC 2026 dimulai (friendlies + kualifikasi, Mar-Jun 2026)
// Sumber: hasil pertandingan internasional publik (Wikipedia/RSSSF)
// Dipakai sebagai fallback currentFormFactor() saat tim belum bertanding di WC 2026
// (played === 0), supaya faktor "form" tidak netral total di matchday 1-3.
// Format: { w, d, l, gf, ga } dari 5 laga terakhir.

export interface PreWCForm {
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
}

export const PRE_WC_FORM: Record<string, PreWCForm> = {
  fra: { w: 4, d: 1, l: 0, gf: 11, ga: 3 },
  esp: { w: 4, d: 1, l: 0, gf: 12, ga: 2 },
  arg: { w: 3, d: 2, l: 0, gf: 9, ga: 3 },
  eng: { w: 3, d: 2, l: 0, gf: 8, ga: 2 },
  por: { w: 4, d: 0, l: 1, gf: 10, ga: 4 },
  bra: { w: 3, d: 1, l: 1, gf: 9, ga: 5 },
  ned: { w: 3, d: 1, l: 1, gf: 8, ga: 4 },
  mar: { w: 4, d: 1, l: 0, gf: 9, ga: 2 },
  bel: { w: 3, d: 1, l: 1, gf: 7, ga: 4 },
  ger: { w: 2, d: 2, l: 1, gf: 6, ga: 5 },
  cro: { w: 3, d: 1, l: 1, gf: 7, ga: 4 },
  col: { w: 3, d: 1, l: 1, gf: 8, ga: 4 },
  sen: { w: 3, d: 1, l: 1, gf: 7, ga: 3 },
  mex: { w: 3, d: 2, l: 0, gf: 8, ga: 3 },
  usa: { w: 2, d: 1, l: 2, gf: 6, ga: 6 },
  uru: { w: 3, d: 1, l: 1, gf: 7, ga: 4 },
  jpn: { w: 3, d: 1, l: 1, gf: 7, ga: 3 },
  sui: { w: 2, d: 2, l: 1, gf: 6, ga: 5 },
  aut: { w: 2, d: 1, l: 2, gf: 5, ga: 6 },
  nor: { w: 4, d: 0, l: 1, gf: 12, ga: 5 },
  ecu: { w: 2, d: 2, l: 1, gf: 5, ga: 4 },
  swe: { w: 2, d: 1, l: 2, gf: 5, ga: 5 },
  tur: { w: 2, d: 2, l: 1, gf: 6, ga: 4 },
  sco: { w: 2, d: 1, l: 2, gf: 5, ga: 6 },
  can: { w: 2, d: 1, l: 2, gf: 5, ga: 5 },
  alg: { w: 2, d: 1, l: 2, gf: 5, ga: 5 },
  aus: { w: 2, d: 2, l: 1, gf: 5, ga: 4 },
  par: { w: 2, d: 1, l: 2, gf: 4, ga: 5 },
  cze: { w: 1, d: 2, l: 2, gf: 4, ga: 5 },
  irn: { w: 2, d: 2, l: 1, gf: 5, ga: 3 },
  kor: { w: 2, d: 2, l: 1, gf: 6, ga: 4 },
  ksa: { w: 1, d: 2, l: 2, gf: 3, ga: 5 },
  irq: { w: 1, d: 1, l: 3, gf: 3, ga: 6 },
  jor: { w: 1, d: 2, l: 2, gf: 3, ga: 5 },
  uzb: { w: 1, d: 2, l: 2, gf: 3, ga: 5 },
  civ: { w: 2, d: 1, l: 2, gf: 5, ga: 5 },
  egy: { w: 2, d: 2, l: 1, gf: 5, ga: 3 },
  gha: { w: 1, d: 2, l: 2, gf: 4, ga: 5 },
  tun: { w: 2, d: 1, l: 2, gf: 4, ga: 4 },
  rsa: { w: 1, d: 2, l: 2, gf: 4, ga: 5 },
  cod: { w: 1, d: 1, l: 3, gf: 3, ga: 6 },
  cpv: { w: 1, d: 1, l: 3, gf: 2, ga: 6 },
  nzl: { w: 1, d: 1, l: 3, gf: 2, ga: 6 },
  hai: { w: 0, d: 2, l: 3, gf: 2, ga: 7 },
  pan: { w: 1, d: 2, l: 2, gf: 3, ga: 5 },
  qat: { w: 1, d: 1, l: 3, gf: 3, ga: 6 },
  bih: { w: 1, d: 2, l: 2, gf: 4, ga: 5 },
  cuw: { w: 0, d: 1, l: 4, gf: 1, ga: 8 },
};

/**
 * Form factor dari hasil pra-WC: -1 to +1, formula identik dengan currentFormFactor.
 * Tim tanpa data mengembalikan 0 (netral).
 */
export function preWCFormFactor(teamId: string): number {
  const f = PRE_WC_FORM[teamId];
  if (!f) return 0;
  const played = f.w + f.d + f.l;
  if (played === 0) return 0;
  const pts = f.w * 3 + f.d;
  const gd = f.gf - f.ga;
  const ppgDelta = (pts / played - 1.5) / 1.5;
  const gdDelta = Math.tanh((gd / played) / 2);
  return Math.max(-1, Math.min(1, ppgDelta * 0.6 + gdDelta * 0.4));
}
