// REAL FIFA World Cup 2026 data — sumber: openfootball/worldcup.json (publik, gratis).
// 48 tim, 12 grup (A-L), 104 pertandingan. Turnamen kickoff 11 Juni 2026.
// Dipakai sebagai data dasar + fallback. Statistik/rating tim diisi netral
// karena openfootball tidak menyediakannya (bukan data mock skor palsu).

export interface RealTeam {
  id: string;
  name: string;
  flag: string;
  fifaCode: string;
  group: string;
  confed: string;
}

export interface RealFixture {
  id: string;
  round: string;
  homeId: string | null;
  homeName: string;
  awayId: string | null;
  awayName: string;
  kickoff: string;
  group: string;
  venue: string;
  status: string;
  homeScore?: number | null;
  awayScore?: number | null;
}

export const WC2026_TEAMS: Record<string, RealTeam> = {
  "mex": {
    "id": "mex",
    "name": "Mexico",
    "flag": "🇲🇽",
    "fifaCode": "MEX",
    "group": "Group A",
    "confed": "CONCACAF"
  },
  "rsa": {
    "id": "rsa",
    "name": "South Africa",
    "flag": "🇿🇦",
    "fifaCode": "RSA",
    "group": "Group A",
    "confed": "CAF"
  },
  "kor": {
    "id": "kor",
    "name": "South Korea",
    "flag": "🇰🇷",
    "fifaCode": "KOR",
    "group": "Group A",
    "confed": "AFC"
  },
  "cze": {
    "id": "cze",
    "name": "Czech Republic",
    "flag": "🇨🇿",
    "fifaCode": "CZE",
    "group": "Group A",
    "confed": "UEFA"
  },
  "can": {
    "id": "can",
    "name": "Canada",
    "flag": "🇨🇦",
    "fifaCode": "CAN",
    "group": "Group B",
    "confed": "CONCACAF"
  },
  "bih": {
    "id": "bih",
    "name": "Bosnia & Herzegovina",
    "flag": "🇧🇦",
    "fifaCode": "BIH",
    "group": "Group B",
    "confed": "UEFA"
  },
  "qat": {
    "id": "qat",
    "name": "Qatar",
    "flag": "🇶🇦",
    "fifaCode": "QAT",
    "group": "Group B",
    "confed": "AFC"
  },
  "sui": {
    "id": "sui",
    "name": "Switzerland",
    "flag": "🇨🇭",
    "fifaCode": "SUI",
    "group": "Group B",
    "confed": "UEFA"
  },
  "bra": {
    "id": "bra",
    "name": "Brazil",
    "flag": "🇧🇷",
    "fifaCode": "BRA",
    "group": "Group C",
    "confed": "CONMEBOL"
  },
  "mar": {
    "id": "mar",
    "name": "Morocco",
    "flag": "🇲🇦",
    "fifaCode": "MAR",
    "group": "Group C",
    "confed": "CAF"
  },
  "hai": {
    "id": "hai",
    "name": "Haiti",
    "flag": "🇭🇹",
    "fifaCode": "HAI",
    "group": "Group C",
    "confed": "CONCACAF"
  },
  "sco": {
    "id": "sco",
    "name": "Scotland",
    "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "fifaCode": "SCO",
    "group": "Group C",
    "confed": "UEFA"
  },
  "usa": {
    "id": "usa",
    "name": "USA",
    "flag": "🇺🇸",
    "fifaCode": "USA",
    "group": "Group D",
    "confed": "CONCACAF"
  },
  "par": {
    "id": "par",
    "name": "Paraguay",
    "flag": "🇵🇾",
    "fifaCode": "PAR",
    "group": "Group D",
    "confed": "CONMEBOL"
  },
  "aus": {
    "id": "aus",
    "name": "Australia",
    "flag": "🇦🇺",
    "fifaCode": "AUS",
    "group": "Group D",
    "confed": "AFC"
  },
  "tur": {
    "id": "tur",
    "name": "Turkey",
    "flag": "🇹🇷",
    "fifaCode": "TUR",
    "group": "Group D",
    "confed": "UEFA"
  },
  "ger": {
    "id": "ger",
    "name": "Germany",
    "flag": "🇩🇪",
    "fifaCode": "GER",
    "group": "Group E",
    "confed": "UEFA"
  },
  "cuw": {
    "id": "cuw",
    "name": "Curaçao",
    "flag": "🇨🇼",
    "fifaCode": "CUW",
    "group": "Group E",
    "confed": "CONCACAF"
  },
  "civ": {
    "id": "civ",
    "name": "Ivory Coast",
    "flag": "🇨🇮",
    "fifaCode": "CIV",
    "group": "Group E",
    "confed": "CAF"
  },
  "ecu": {
    "id": "ecu",
    "name": "Ecuador",
    "flag": "🇪🇨",
    "fifaCode": "ECU",
    "group": "Group E",
    "confed": "CONMEBOL"
  },
  "ned": {
    "id": "ned",
    "name": "Netherlands",
    "flag": "🇳🇱",
    "fifaCode": "NED",
    "group": "Group F",
    "confed": "UEFA"
  },
  "jpn": {
    "id": "jpn",
    "name": "Japan",
    "flag": "🇯🇵",
    "fifaCode": "JPN",
    "group": "Group F",
    "confed": "AFC"
  },
  "swe": {
    "id": "swe",
    "name": "Sweden",
    "flag": "🇸🇪",
    "fifaCode": "SWE",
    "group": "Group F",
    "confed": "UEFA"
  },
  "tun": {
    "id": "tun",
    "name": "Tunisia",
    "flag": "🇹🇳",
    "fifaCode": "TUN",
    "group": "Group F",
    "confed": "CAF"
  },
  "bel": {
    "id": "bel",
    "name": "Belgium",
    "flag": "🇧🇪",
    "fifaCode": "BEL",
    "group": "Group G",
    "confed": "UEFA"
  },
  "egy": {
    "id": "egy",
    "name": "Egypt",
    "flag": "🇪🇬",
    "fifaCode": "EGY",
    "group": "Group G",
    "confed": "CAF"
  },
  "irn": {
    "id": "irn",
    "name": "Iran",
    "flag": "🇮🇷",
    "fifaCode": "IRN",
    "group": "Group G",
    "confed": "AFC"
  },
  "nzl": {
    "id": "nzl",
    "name": "New Zealand",
    "flag": "🇳🇿",
    "fifaCode": "NZL",
    "group": "Group G",
    "confed": "OFC"
  },
  "esp": {
    "id": "esp",
    "name": "Spain",
    "flag": "🇪🇸",
    "fifaCode": "ESP",
    "group": "Group H",
    "confed": "UEFA"
  },
  "cpv": {
    "id": "cpv",
    "name": "Cape Verde",
    "flag": "🇨🇻",
    "fifaCode": "CPV",
    "group": "Group H",
    "confed": "CAF"
  },
  "ksa": {
    "id": "ksa",
    "name": "Saudi Arabia",
    "flag": "🇸🇦",
    "fifaCode": "KSA",
    "group": "Group H",
    "confed": "AFC"
  },
  "uru": {
    "id": "uru",
    "name": "Uruguay",
    "flag": "🇺🇾",
    "fifaCode": "URU",
    "group": "Group H",
    "confed": "CONMEBOL"
  },
  "fra": {
    "id": "fra",
    "name": "France",
    "flag": "🇫🇷",
    "fifaCode": "FRA",
    "group": "Group I",
    "confed": "UEFA"
  },
  "sen": {
    "id": "sen",
    "name": "Senegal",
    "flag": "🇸🇳",
    "fifaCode": "SEN",
    "group": "Group I",
    "confed": "CAF"
  },
  "irq": {
    "id": "irq",
    "name": "Iraq",
    "flag": "🇮🇶",
    "fifaCode": "IRQ",
    "group": "Group I",
    "confed": "AFC"
  },
  "nor": {
    "id": "nor",
    "name": "Norway",
    "flag": "🇳🇴",
    "fifaCode": "NOR",
    "group": "Group I",
    "confed": "UEFA"
  },
  "arg": {
    "id": "arg",
    "name": "Argentina",
    "flag": "🇦🇷",
    "fifaCode": "ARG",
    "group": "Group J",
    "confed": "CONMEBOL"
  },
  "alg": {
    "id": "alg",
    "name": "Algeria",
    "flag": "🇩🇿",
    "fifaCode": "ALG",
    "group": "Group J",
    "confed": "CAF"
  },
  "aut": {
    "id": "aut",
    "name": "Austria",
    "flag": "🇦🇹",
    "fifaCode": "AUT",
    "group": "Group J",
    "confed": "UEFA"
  },
  "jor": {
    "id": "jor",
    "name": "Jordan",
    "flag": "🇯🇴",
    "fifaCode": "JOR",
    "group": "Group J",
    "confed": "AFC"
  },
  "por": {
    "id": "por",
    "name": "Portugal",
    "flag": "🇵🇹",
    "fifaCode": "POR",
    "group": "Group K",
    "confed": "UEFA"
  },
  "cod": {
    "id": "cod",
    "name": "DR Congo",
    "flag": "🇨🇩",
    "fifaCode": "COD",
    "group": "Group K",
    "confed": "CAF"
  },
  "uzb": {
    "id": "uzb",
    "name": "Uzbekistan",
    "flag": "🇺🇿",
    "fifaCode": "UZB",
    "group": "Group K",
    "confed": "AFC"
  },
  "col": {
    "id": "col",
    "name": "Colombia",
    "flag": "🇨🇴",
    "fifaCode": "COL",
    "group": "Group K",
    "confed": "CONMEBOL"
  },
  "eng": {
    "id": "eng",
    "name": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "fifaCode": "ENG",
    "group": "Group L",
    "confed": "UEFA"
  },
  "cro": {
    "id": "cro",
    "name": "Croatia",
    "flag": "🇭🇷",
    "fifaCode": "CRO",
    "group": "Group L",
    "confed": "UEFA"
  },
  "gha": {
    "id": "gha",
    "name": "Ghana",
    "flag": "🇬🇭",
    "fifaCode": "GHA",
    "group": "Group L",
    "confed": "CAF"
  },
  "pan": {
    "id": "pan",
    "name": "Panama",
    "flag": "🇵🇦",
    "fifaCode": "PAN",
    "group": "Group L",
    "confed": "CONCACAF"
  }
};

export const WC2026_GROUPS: Record<string, string[]> = {
  "Group A": [
    "mex",
    "rsa",
    "kor",
    "cze"
  ],
  "Group B": [
    "can",
    "bih",
    "qat",
    "sui"
  ],
  "Group C": [
    "bra",
    "mar",
    "hai",
    "sco"
  ],
  "Group D": [
    "usa",
    "par",
    "aus",
    "tur"
  ],
  "Group E": [
    "ger",
    "cuw",
    "civ",
    "ecu"
  ],
  "Group F": [
    "ned",
    "jpn",
    "swe",
    "tun"
  ],
  "Group G": [
    "bel",
    "egy",
    "irn",
    "nzl"
  ],
  "Group H": [
    "esp",
    "cpv",
    "ksa",
    "uru"
  ],
  "Group I": [
    "fra",
    "sen",
    "irq",
    "nor"
  ],
  "Group J": [
    "arg",
    "alg",
    "aut",
    "jor"
  ],
  "Group K": [
    "por",
    "cod",
    "uzb",
    "col"
  ],
  "Group L": [
    "eng",
    "cro",
    "gha",
    "pan"
  ]
};

export const WC2026_FIXTURES: RealFixture[] = [
  {
    "id": "wc001",
    "round": "Matchday 1",
    "homeId": "mex",
    "homeName": "Mexico",
    "awayId": "rsa",
    "awayName": "South Africa",
    "kickoff": "2026-06-11T19:00:00Z",
    "group": "Group A",
    "venue": "Mexico City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc002",
    "round": "Matchday 1",
    "homeId": "kor",
    "homeName": "South Korea",
    "awayId": "cze",
    "awayName": "Czech Republic",
    "kickoff": "2026-06-12T02:00:00Z",
    "group": "Group A",
    "venue": "Guadalajara (Zapopan)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc003",
    "round": "Matchday 8",
    "homeId": "cze",
    "homeName": "Czech Republic",
    "awayId": "rsa",
    "awayName": "South Africa",
    "kickoff": "2026-06-18T16:00:00Z",
    "group": "Group A",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc004",
    "round": "Matchday 8",
    "homeId": "mex",
    "homeName": "Mexico",
    "awayId": "kor",
    "awayName": "South Korea",
    "kickoff": "2026-06-19T01:00:00Z",
    "group": "Group A",
    "venue": "Guadalajara (Zapopan)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc005",
    "round": "Matchday 14",
    "homeId": "cze",
    "homeName": "Czech Republic",
    "awayId": "mex",
    "awayName": "Mexico",
    "kickoff": "2026-06-25T01:00:00Z",
    "group": "Group A",
    "venue": "Mexico City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc006",
    "round": "Matchday 14",
    "homeId": "rsa",
    "homeName": "South Africa",
    "awayId": "kor",
    "awayName": "South Korea",
    "kickoff": "2026-06-25T01:00:00Z",
    "group": "Group A",
    "venue": "Monterrey (Guadalupe)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc007",
    "round": "Matchday 2",
    "homeId": "can",
    "homeName": "Canada",
    "awayId": "bih",
    "awayName": "Bosnia & Herzegovina",
    "kickoff": "2026-06-12T19:00:00Z",
    "group": "Group B",
    "venue": "Toronto",
    "status": "SCHEDULED"
  },
  {
    "id": "wc008",
    "round": "Matchday 3",
    "homeId": "qat",
    "homeName": "Qatar",
    "awayId": "sui",
    "awayName": "Switzerland",
    "kickoff": "2026-06-13T19:00:00Z",
    "group": "Group B",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc009",
    "round": "Matchday 8",
    "homeId": "sui",
    "homeName": "Switzerland",
    "awayId": "bih",
    "awayName": "Bosnia & Herzegovina",
    "kickoff": "2026-06-18T19:00:00Z",
    "group": "Group B",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc010",
    "round": "Matchday 8",
    "homeId": "can",
    "homeName": "Canada",
    "awayId": "qat",
    "awayName": "Qatar",
    "kickoff": "2026-06-18T22:00:00Z",
    "group": "Group B",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc011",
    "round": "Matchday 14",
    "homeId": "sui",
    "homeName": "Switzerland",
    "awayId": "can",
    "awayName": "Canada",
    "kickoff": "2026-06-24T19:00:00Z",
    "group": "Group B",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc012",
    "round": "Matchday 14",
    "homeId": "bih",
    "homeName": "Bosnia & Herzegovina",
    "awayId": "qat",
    "awayName": "Qatar",
    "kickoff": "2026-06-24T19:00:00Z",
    "group": "Group B",
    "venue": "Seattle",
    "status": "SCHEDULED"
  },
  {
    "id": "wc013",
    "round": "Matchday 3",
    "homeId": "bra",
    "homeName": "Brazil",
    "awayId": "mar",
    "awayName": "Morocco",
    "kickoff": "2026-06-13T22:00:00Z",
    "group": "Group C",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc014",
    "round": "Matchday 3",
    "homeId": "hai",
    "homeName": "Haiti",
    "awayId": "sco",
    "awayName": "Scotland",
    "kickoff": "2026-06-14T01:00:00Z",
    "group": "Group C",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc015",
    "round": "Matchday 9",
    "homeId": "sco",
    "homeName": "Scotland",
    "awayId": "mar",
    "awayName": "Morocco",
    "kickoff": "2026-06-19T22:00:00Z",
    "group": "Group C",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc016",
    "round": "Matchday 9",
    "homeId": "bra",
    "homeName": "Brazil",
    "awayId": "hai",
    "awayName": "Haiti",
    "kickoff": "2026-06-20T00:30:00Z",
    "group": "Group C",
    "venue": "Philadelphia",
    "status": "SCHEDULED"
  },
  {
    "id": "wc017",
    "round": "Matchday 14",
    "homeId": "sco",
    "homeName": "Scotland",
    "awayId": "bra",
    "awayName": "Brazil",
    "kickoff": "2026-06-24T22:00:00Z",
    "group": "Group C",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc018",
    "round": "Matchday 14",
    "homeId": "mar",
    "homeName": "Morocco",
    "awayId": "hai",
    "awayName": "Haiti",
    "kickoff": "2026-06-24T22:00:00Z",
    "group": "Group C",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc019",
    "round": "Matchday 2",
    "homeId": "usa",
    "homeName": "USA",
    "awayId": "par",
    "awayName": "Paraguay",
    "kickoff": "2026-06-13T01:00:00Z",
    "group": "Group D",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc020",
    "round": "Matchday 3",
    "homeId": "aus",
    "homeName": "Australia",
    "awayId": "tur",
    "awayName": "Turkey",
    "kickoff": "2026-06-14T04:00:00Z",
    "group": "Group D",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc021",
    "round": "Matchday 9",
    "homeId": "usa",
    "homeName": "USA",
    "awayId": "aus",
    "awayName": "Australia",
    "kickoff": "2026-06-19T19:00:00Z",
    "group": "Group D",
    "venue": "Seattle",
    "status": "SCHEDULED"
  },
  {
    "id": "wc022",
    "round": "Matchday 9",
    "homeId": "tur",
    "homeName": "Turkey",
    "awayId": "par",
    "awayName": "Paraguay",
    "kickoff": "2026-06-20T03:00:00Z",
    "group": "Group D",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc023",
    "round": "Matchday 15",
    "homeId": "tur",
    "homeName": "Turkey",
    "awayId": "usa",
    "awayName": "USA",
    "kickoff": "2026-06-26T02:00:00Z",
    "group": "Group D",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc024",
    "round": "Matchday 15",
    "homeId": "par",
    "homeName": "Paraguay",
    "awayId": "aus",
    "awayName": "Australia",
    "kickoff": "2026-06-26T02:00:00Z",
    "group": "Group D",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc025",
    "round": "Matchday 4",
    "homeId": "ger",
    "homeName": "Germany",
    "awayId": "cuw",
    "awayName": "Curaçao",
    "kickoff": "2026-06-14T17:00:00Z",
    "group": "Group E",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc026",
    "round": "Matchday 4",
    "homeId": "civ",
    "homeName": "Ivory Coast",
    "awayId": "ecu",
    "awayName": "Ecuador",
    "kickoff": "2026-06-14T23:00:00Z",
    "group": "Group E",
    "venue": "Philadelphia",
    "status": "SCHEDULED"
  },
  {
    "id": "wc027",
    "round": "Matchday 10",
    "homeId": "ger",
    "homeName": "Germany",
    "awayId": "civ",
    "awayName": "Ivory Coast",
    "kickoff": "2026-06-20T20:00:00Z",
    "group": "Group E",
    "venue": "Toronto",
    "status": "SCHEDULED"
  },
  {
    "id": "wc028",
    "round": "Matchday 10",
    "homeId": "ecu",
    "homeName": "Ecuador",
    "awayId": "cuw",
    "awayName": "Curaçao",
    "kickoff": "2026-06-21T00:00:00Z",
    "group": "Group E",
    "venue": "Kansas City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc029",
    "round": "Matchday 15",
    "homeId": "cuw",
    "homeName": "Curaçao",
    "awayId": "civ",
    "awayName": "Ivory Coast",
    "kickoff": "2026-06-25T20:00:00Z",
    "group": "Group E",
    "venue": "Philadelphia",
    "status": "SCHEDULED"
  },
  {
    "id": "wc030",
    "round": "Matchday 15",
    "homeId": "ecu",
    "homeName": "Ecuador",
    "awayId": "ger",
    "awayName": "Germany",
    "kickoff": "2026-06-25T20:00:00Z",
    "group": "Group E",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc031",
    "round": "Matchday 4",
    "homeId": "ned",
    "homeName": "Netherlands",
    "awayId": "jpn",
    "awayName": "Japan",
    "kickoff": "2026-06-14T20:00:00Z",
    "group": "Group F",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc032",
    "round": "Matchday 4",
    "homeId": "swe",
    "homeName": "Sweden",
    "awayId": "tun",
    "awayName": "Tunisia",
    "kickoff": "2026-06-15T02:00:00Z",
    "group": "Group F",
    "venue": "Monterrey (Guadalupe)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc033",
    "round": "Matchday 10",
    "homeId": "ned",
    "homeName": "Netherlands",
    "awayId": "swe",
    "awayName": "Sweden",
    "kickoff": "2026-06-20T17:00:00Z",
    "group": "Group F",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc034",
    "round": "Matchday 10",
    "homeId": "tun",
    "homeName": "Tunisia",
    "awayId": "jpn",
    "awayName": "Japan",
    "kickoff": "2026-06-21T04:00:00Z",
    "group": "Group F",
    "venue": "Monterrey (Guadalupe)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc035",
    "round": "Matchday 15",
    "homeId": "jpn",
    "homeName": "Japan",
    "awayId": "swe",
    "awayName": "Sweden",
    "kickoff": "2026-06-25T23:00:00Z",
    "group": "Group F",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc036",
    "round": "Matchday 15",
    "homeId": "tun",
    "homeName": "Tunisia",
    "awayId": "ned",
    "awayName": "Netherlands",
    "kickoff": "2026-06-25T23:00:00Z",
    "group": "Group F",
    "venue": "Kansas City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc037",
    "round": "Matchday 5",
    "homeId": "bel",
    "homeName": "Belgium",
    "awayId": "egy",
    "awayName": "Egypt",
    "kickoff": "2026-06-15T19:00:00Z",
    "group": "Group G",
    "venue": "Seattle",
    "status": "SCHEDULED"
  },
  {
    "id": "wc038",
    "round": "Matchday 5",
    "homeId": "irn",
    "homeName": "Iran",
    "awayId": "nzl",
    "awayName": "New Zealand",
    "kickoff": "2026-06-16T01:00:00Z",
    "group": "Group G",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc039",
    "round": "Matchday 11",
    "homeId": "bel",
    "homeName": "Belgium",
    "awayId": "irn",
    "awayName": "Iran",
    "kickoff": "2026-06-21T19:00:00Z",
    "group": "Group G",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc040",
    "round": "Matchday 11",
    "homeId": "nzl",
    "homeName": "New Zealand",
    "awayId": "egy",
    "awayName": "Egypt",
    "kickoff": "2026-06-22T01:00:00Z",
    "group": "Group G",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc041",
    "round": "Matchday 16",
    "homeId": "egy",
    "homeName": "Egypt",
    "awayId": "irn",
    "awayName": "Iran",
    "kickoff": "2026-06-27T03:00:00Z",
    "group": "Group G",
    "venue": "Seattle",
    "status": "SCHEDULED"
  },
  {
    "id": "wc042",
    "round": "Matchday 16",
    "homeId": "nzl",
    "homeName": "New Zealand",
    "awayId": "bel",
    "awayName": "Belgium",
    "kickoff": "2026-06-27T03:00:00Z",
    "group": "Group G",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc043",
    "round": "Matchday 5",
    "homeId": "esp",
    "homeName": "Spain",
    "awayId": "cpv",
    "awayName": "Cape Verde",
    "kickoff": "2026-06-15T16:00:00Z",
    "group": "Group H",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc044",
    "round": "Matchday 5",
    "homeId": "ksa",
    "homeName": "Saudi Arabia",
    "awayId": "uru",
    "awayName": "Uruguay",
    "kickoff": "2026-06-15T22:00:00Z",
    "group": "Group H",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc045",
    "round": "Matchday 11",
    "homeId": "esp",
    "homeName": "Spain",
    "awayId": "ksa",
    "awayName": "Saudi Arabia",
    "kickoff": "2026-06-21T16:00:00Z",
    "group": "Group H",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc046",
    "round": "Matchday 11",
    "homeId": "uru",
    "homeName": "Uruguay",
    "awayId": "cpv",
    "awayName": "Cape Verde",
    "kickoff": "2026-06-21T22:00:00Z",
    "group": "Group H",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc047",
    "round": "Matchday 16",
    "homeId": "cpv",
    "homeName": "Cape Verde",
    "awayId": "ksa",
    "awayName": "Saudi Arabia",
    "kickoff": "2026-06-27T00:00:00Z",
    "group": "Group H",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc048",
    "round": "Matchday 16",
    "homeId": "uru",
    "homeName": "Uruguay",
    "awayId": "esp",
    "awayName": "Spain",
    "kickoff": "2026-06-27T00:00:00Z",
    "group": "Group H",
    "venue": "Guadalajara (Zapopan)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc049",
    "round": "Matchday 6",
    "homeId": "fra",
    "homeName": "France",
    "awayId": "sen",
    "awayName": "Senegal",
    "kickoff": "2026-06-16T19:00:00Z",
    "group": "Group I",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc050",
    "round": "Matchday 6",
    "homeId": "irq",
    "homeName": "Iraq",
    "awayId": "nor",
    "awayName": "Norway",
    "kickoff": "2026-06-16T22:00:00Z",
    "group": "Group I",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc051",
    "round": "Matchday 12",
    "homeId": "fra",
    "homeName": "France",
    "awayId": "irq",
    "awayName": "Iraq",
    "kickoff": "2026-06-22T21:00:00Z",
    "group": "Group I",
    "venue": "Philadelphia",
    "status": "SCHEDULED"
  },
  {
    "id": "wc052",
    "round": "Matchday 12",
    "homeId": "nor",
    "homeName": "Norway",
    "awayId": "sen",
    "awayName": "Senegal",
    "kickoff": "2026-06-23T00:00:00Z",
    "group": "Group I",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc053",
    "round": "Matchday 16",
    "homeId": "nor",
    "homeName": "Norway",
    "awayId": "fra",
    "awayName": "France",
    "kickoff": "2026-06-26T19:00:00Z",
    "group": "Group I",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc054",
    "round": "Matchday 16",
    "homeId": "sen",
    "homeName": "Senegal",
    "awayId": "irq",
    "awayName": "Iraq",
    "kickoff": "2026-06-26T19:00:00Z",
    "group": "Group I",
    "venue": "Toronto",
    "status": "SCHEDULED"
  },
  {
    "id": "wc055",
    "round": "Matchday 6",
    "homeId": "arg",
    "homeName": "Argentina",
    "awayId": "alg",
    "awayName": "Algeria",
    "kickoff": "2026-06-17T01:00:00Z",
    "group": "Group J",
    "venue": "Kansas City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc056",
    "round": "Matchday 6",
    "homeId": "aut",
    "homeName": "Austria",
    "awayId": "jor",
    "awayName": "Jordan",
    "kickoff": "2026-06-17T04:00:00Z",
    "group": "Group J",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc057",
    "round": "Matchday 12",
    "homeId": "arg",
    "homeName": "Argentina",
    "awayId": "aut",
    "awayName": "Austria",
    "kickoff": "2026-06-22T17:00:00Z",
    "group": "Group J",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc058",
    "round": "Matchday 12",
    "homeId": "jor",
    "homeName": "Jordan",
    "awayId": "alg",
    "awayName": "Algeria",
    "kickoff": "2026-06-23T03:00:00Z",
    "group": "Group J",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc059",
    "round": "Matchday 17",
    "homeId": "alg",
    "homeName": "Algeria",
    "awayId": "aut",
    "awayName": "Austria",
    "kickoff": "2026-06-28T02:00:00Z",
    "group": "Group J",
    "venue": "Kansas City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc060",
    "round": "Matchday 17",
    "homeId": "jor",
    "homeName": "Jordan",
    "awayId": "arg",
    "awayName": "Argentina",
    "kickoff": "2026-06-28T02:00:00Z",
    "group": "Group J",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc061",
    "round": "Matchday 7",
    "homeId": "por",
    "homeName": "Portugal",
    "awayId": "cod",
    "awayName": "DR Congo",
    "kickoff": "2026-06-17T17:00:00Z",
    "group": "Group K",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc062",
    "round": "Matchday 7",
    "homeId": "uzb",
    "homeName": "Uzbekistan",
    "awayId": "col",
    "awayName": "Colombia",
    "kickoff": "2026-06-18T02:00:00Z",
    "group": "Group K",
    "venue": "Mexico City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc063",
    "round": "Matchday 13",
    "homeId": "por",
    "homeName": "Portugal",
    "awayId": "uzb",
    "awayName": "Uzbekistan",
    "kickoff": "2026-06-23T17:00:00Z",
    "group": "Group K",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc064",
    "round": "Matchday 13",
    "homeId": "col",
    "homeName": "Colombia",
    "awayId": "cod",
    "awayName": "DR Congo",
    "kickoff": "2026-06-24T02:00:00Z",
    "group": "Group K",
    "venue": "Guadalajara (Zapopan)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc065",
    "round": "Matchday 17",
    "homeId": "col",
    "homeName": "Colombia",
    "awayId": "por",
    "awayName": "Portugal",
    "kickoff": "2026-06-27T23:30:00Z",
    "group": "Group K",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc066",
    "round": "Matchday 17",
    "homeId": "cod",
    "homeName": "DR Congo",
    "awayId": "uzb",
    "awayName": "Uzbekistan",
    "kickoff": "2026-06-27T23:30:00Z",
    "group": "Group K",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc067",
    "round": "Matchday 7",
    "homeId": "eng",
    "homeName": "England",
    "awayId": "cro",
    "awayName": "Croatia",
    "kickoff": "2026-06-17T20:00:00Z",
    "group": "Group L",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc068",
    "round": "Matchday 7",
    "homeId": "gha",
    "homeName": "Ghana",
    "awayId": "pan",
    "awayName": "Panama",
    "kickoff": "2026-06-17T23:00:00Z",
    "group": "Group L",
    "venue": "Toronto",
    "status": "SCHEDULED"
  },
  {
    "id": "wc069",
    "round": "Matchday 13",
    "homeId": "eng",
    "homeName": "England",
    "awayId": "gha",
    "awayName": "Ghana",
    "kickoff": "2026-06-23T20:00:00Z",
    "group": "Group L",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc070",
    "round": "Matchday 13",
    "homeId": "pan",
    "homeName": "Panama",
    "awayId": "cro",
    "awayName": "Croatia",
    "kickoff": "2026-06-23T23:00:00Z",
    "group": "Group L",
    "venue": "Toronto",
    "status": "SCHEDULED"
  },
  {
    "id": "wc071",
    "round": "Matchday 17",
    "homeId": "pan",
    "homeName": "Panama",
    "awayId": "eng",
    "awayName": "England",
    "kickoff": "2026-06-27T21:00:00Z",
    "group": "Group L",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc072",
    "round": "Matchday 17",
    "homeId": "cro",
    "homeName": "Croatia",
    "awayId": "gha",
    "awayName": "Ghana",
    "kickoff": "2026-06-27T21:00:00Z",
    "group": "Group L",
    "venue": "Philadelphia",
    "status": "SCHEDULED"
  },
  {
    "id": "wc073",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "2A",
    "awayId": null,
    "awayName": "2B",
    "kickoff": "2026-06-28T19:00:00Z",
    "group": "",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc074",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1E",
    "awayId": null,
    "awayName": "3A/B/C/D/F",
    "kickoff": "2026-06-29T20:30:00Z",
    "group": "",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc075",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1F",
    "awayId": null,
    "awayName": "2C",
    "kickoff": "2026-06-30T01:00:00Z",
    "group": "",
    "venue": "Monterrey (Guadalupe)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc076",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1C",
    "awayId": null,
    "awayName": "2F",
    "kickoff": "2026-06-29T17:00:00Z",
    "group": "",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc077",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1I",
    "awayId": null,
    "awayName": "3C/D/F/G/H",
    "kickoff": "2026-06-30T21:00:00Z",
    "group": "",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc078",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "2E",
    "awayId": null,
    "awayName": "2I",
    "kickoff": "2026-06-30T17:00:00Z",
    "group": "",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc079",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1A",
    "awayId": null,
    "awayName": "3C/E/F/H/I",
    "kickoff": "2026-07-01T01:00:00Z",
    "group": "",
    "venue": "Mexico City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc080",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1L",
    "awayId": null,
    "awayName": "3E/H/I/J/K",
    "kickoff": "2026-07-01T16:00:00Z",
    "group": "",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc081",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1D",
    "awayId": null,
    "awayName": "3B/E/F/I/J",
    "kickoff": "2026-07-02T00:00:00Z",
    "group": "",
    "venue": "San Francisco Bay Area (Santa Clara)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc082",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1G",
    "awayId": null,
    "awayName": "3A/E/H/I/J",
    "kickoff": "2026-07-01T20:00:00Z",
    "group": "",
    "venue": "Seattle",
    "status": "SCHEDULED"
  },
  {
    "id": "wc083",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "2K",
    "awayId": null,
    "awayName": "2L",
    "kickoff": "2026-07-02T23:00:00Z",
    "group": "",
    "venue": "Toronto",
    "status": "SCHEDULED"
  },
  {
    "id": "wc084",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1H",
    "awayId": null,
    "awayName": "2J",
    "kickoff": "2026-07-02T19:00:00Z",
    "group": "",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc085",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1B",
    "awayId": null,
    "awayName": "3E/F/G/I/J",
    "kickoff": "2026-07-03T03:00:00Z",
    "group": "",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc086",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1J",
    "awayId": null,
    "awayName": "2H",
    "kickoff": "2026-07-03T22:00:00Z",
    "group": "",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc087",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "1K",
    "awayId": null,
    "awayName": "3D/E/I/J/L",
    "kickoff": "2026-07-04T01:30:00Z",
    "group": "",
    "venue": "Kansas City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc088",
    "round": "Round of 32",
    "homeId": null,
    "homeName": "2D",
    "awayId": null,
    "awayName": "2G",
    "kickoff": "2026-07-03T18:00:00Z",
    "group": "",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc089",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W74",
    "awayId": null,
    "awayName": "W77",
    "kickoff": "2026-07-04T21:00:00Z",
    "group": "",
    "venue": "Philadelphia",
    "status": "SCHEDULED"
  },
  {
    "id": "wc090",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W73",
    "awayId": null,
    "awayName": "W75",
    "kickoff": "2026-07-04T17:00:00Z",
    "group": "",
    "venue": "Houston",
    "status": "SCHEDULED"
  },
  {
    "id": "wc091",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W76",
    "awayId": null,
    "awayName": "W78",
    "kickoff": "2026-07-05T20:00:00Z",
    "group": "",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc092",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W79",
    "awayId": null,
    "awayName": "W80",
    "kickoff": "2026-07-06T00:00:00Z",
    "group": "",
    "venue": "Mexico City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc093",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W83",
    "awayId": null,
    "awayName": "W84",
    "kickoff": "2026-07-06T19:00:00Z",
    "group": "",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc094",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W81",
    "awayId": null,
    "awayName": "W82",
    "kickoff": "2026-07-07T00:00:00Z",
    "group": "",
    "venue": "Seattle",
    "status": "SCHEDULED"
  },
  {
    "id": "wc095",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W86",
    "awayId": null,
    "awayName": "W88",
    "kickoff": "2026-07-07T16:00:00Z",
    "group": "",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc096",
    "round": "Round of 16",
    "homeId": null,
    "homeName": "W85",
    "awayId": null,
    "awayName": "W87",
    "kickoff": "2026-07-07T20:00:00Z",
    "group": "",
    "venue": "Vancouver",
    "status": "SCHEDULED"
  },
  {
    "id": "wc097",
    "round": "Quarter-final",
    "homeId": null,
    "homeName": "W89",
    "awayId": null,
    "awayName": "W90",
    "kickoff": "2026-07-09T20:00:00Z",
    "group": "",
    "venue": "Boston (Foxborough)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc098",
    "round": "Quarter-final",
    "homeId": null,
    "homeName": "W93",
    "awayId": null,
    "awayName": "W94",
    "kickoff": "2026-07-10T19:00:00Z",
    "group": "",
    "venue": "Los Angeles (Inglewood)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc099",
    "round": "Quarter-final",
    "homeId": null,
    "homeName": "W91",
    "awayId": null,
    "awayName": "W92",
    "kickoff": "2026-07-11T21:00:00Z",
    "group": "",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc100",
    "round": "Quarter-final",
    "homeId": null,
    "homeName": "W95",
    "awayId": null,
    "awayName": "W96",
    "kickoff": "2026-07-12T01:00:00Z",
    "group": "",
    "venue": "Kansas City",
    "status": "SCHEDULED"
  },
  {
    "id": "wc101",
    "round": "Semi-final",
    "homeId": null,
    "homeName": "W97",
    "awayId": null,
    "awayName": "W98",
    "kickoff": "2026-07-14T19:00:00Z",
    "group": "",
    "venue": "Dallas (Arlington)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc102",
    "round": "Semi-final",
    "homeId": null,
    "homeName": "W99",
    "awayId": null,
    "awayName": "W100",
    "kickoff": "2026-07-15T19:00:00Z",
    "group": "",
    "venue": "Atlanta",
    "status": "SCHEDULED"
  },
  {
    "id": "wc103",
    "round": "Match for third place",
    "homeId": null,
    "homeName": "L101",
    "awayId": null,
    "awayName": "L102",
    "kickoff": "2026-07-18T21:00:00Z",
    "group": "",
    "venue": "Miami (Miami Gardens)",
    "status": "SCHEDULED"
  },
  {
    "id": "wc104",
    "round": "Final",
    "homeId": null,
    "homeName": "W101",
    "awayId": null,
    "awayName": "W102",
    "kickoff": "2026-07-19T19:00:00Z",
    "group": "",
    "venue": "New York/New Jersey (East Rutherford)",
    "status": "SCHEDULED"
  }
];
