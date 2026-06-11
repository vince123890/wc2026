// Mapping kode FIFA (WC2026_TEAMS) → ID numerik tim nasional di API-Football (v3.football.api-sports.io)
// Diverifikasi via /teams?name=... pada 2026-06-11 menggunakan APIF_KEY (free tier).
// Endpoint /players/squads & /players butuh ID numerik, bukan kode FIFA — tabel ini menjembatani keduanya.
//
// 3 tim TIDAK ditemukan di database API-Football (free tier) meski sudah dicoba berbagai
// variasi nama/negara — kemungkinan belum ditambahkan untuk WC2026:
//   - bih (Bosnia & Herzegovina)
//   - cpv (Cape Verde)
//   - cod (DR Congo)
// Proxy /api/proxy/squads menangani ini dengan mengembalikan {source:"none", data:null}.
export const APIF_TEAM_IDS: Record<string, number> = {
  alg: 1532, // Algeria
  arg: 26,   // Argentina
  aus: 20,   // Australia
  aut: 775,  // Austria
  bel: 1,    // Belgium
  bra: 6,    // Brazil
  can: 5529, // Canada
  civ: 1501, // Ivory Coast
  col: 8,    // Colombia
  cro: 3,    // Croatia
  cuw: 5530, // Curaçao
  cze: 770,  // Czech Republic
  ecu: 2382, // Ecuador
  egy: 32,   // Egypt
  eng: 10,   // England
  esp: 9,    // Spain
  fra: 2,    // France
  ger: 25,   // Germany
  gha: 1504, // Ghana
  hai: 2386, // Haiti
  irn: 22,   // Iran
  irq: 1567, // Iraq
  jor: 1548, // Jordan
  jpn: 12,   // Japan
  kor: 17,   // South Korea
  ksa: 23,   // Saudi Arabia
  mar: 31,   // Morocco
  mex: 16,   // Mexico
  ned: 1118, // Netherlands
  nor: 1090, // Norway
  nzl: 4673, // New Zealand
  pan: 11,   // Panama
  par: 2380, // Paraguay
  por: 27,   // Portugal
  qat: 1569, // Qatar
  rsa: 1531, // South Africa
  sco: 1108, // Scotland
  sen: 13,   // Senegal
  sui: 15,   // Switzerland
  swe: 5,    // Sweden
  tun: 28,   // Tunisia
  tur: 777,  // Turkey (Türkiye)
  usa: 2384, // USA
  uru: 7,    // Uruguay
  uzb: 1568, // Uzbekistan
};
