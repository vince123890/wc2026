// Embedded fallback data — Risk R-02/R-03 mitigation (System Analysis v3.0)
// Sumber: prototype wc-data.js. Dipakai jika worldcup26.ir & BALLDONTLIE tidak tersedia.
import type { Team, Coach, Fixture, MatchLineups, MatchEvent, StandingRow } from "./types";

export const FALLBACK_TEAMS: Record<string, Team> = {
  "bra": {
    "id": "bra",
    "name": "Brazil",
    "flag": "🇧🇷",
    "color": "#009C3B",
    "bg": "#004d1d",
    "rating": 90,
    "attack": 92,
    "defense": 87,
    "possession": 62,
    "form": [
      "W",
      "W",
      "D",
      "W",
      "W"
    ],
    "gf": 8,
    "ga": 2
  },
  "arg": {
    "id": "arg",
    "name": "Argentina",
    "flag": "🇦🇷",
    "color": "#6BABDF",
    "bg": "#1a4a7a",
    "rating": 92,
    "attack": 94,
    "defense": 89,
    "possession": 58,
    "form": [
      "W",
      "W",
      "W",
      "D",
      "W"
    ],
    "gf": 10,
    "ga": 3
  },
  "fra": {
    "id": "fra",
    "name": "France",
    "flag": "🇫🇷",
    "color": "#4A7FD4",
    "bg": "#0d2d6b",
    "rating": 91,
    "attack": 93,
    "defense": 91,
    "possession": 59,
    "form": [
      "W",
      "D",
      "W",
      "W",
      "W"
    ],
    "gf": 9,
    "ga": 4
  },
  "ger": {
    "id": "ger",
    "name": "Germany",
    "flag": "🇩🇪",
    "color": "#C0C0C0",
    "bg": "#2a2a2a",
    "rating": 87,
    "attack": 86,
    "defense": 85,
    "possession": 61,
    "form": [
      "W",
      "W",
      "D",
      "L",
      "W"
    ],
    "gf": 7,
    "ga": 5
  },
  "esp": {
    "id": "esp",
    "name": "Spain",
    "flag": "🇪🇸",
    "color": "#D4183A",
    "bg": "#5a0010",
    "rating": 88,
    "attack": 88,
    "defense": 86,
    "possession": 65,
    "form": [
      "W",
      "W",
      "W",
      "W",
      "D"
    ],
    "gf": 11,
    "ga": 3
  },
  "eng": {
    "id": "eng",
    "name": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "color": "#CF111A",
    "bg": "#6b0008",
    "rating": 85,
    "attack": 84,
    "defense": 83,
    "possession": 55,
    "form": [
      "D",
      "W",
      "W",
      "L",
      "W"
    ],
    "gf": 6,
    "ga": 4
  },
  "por": {
    "id": "por",
    "name": "Portugal",
    "flag": "🇵🇹",
    "color": "#FF3B3B",
    "bg": "#6b0000",
    "rating": 85,
    "attack": 87,
    "defense": 80,
    "possession": 57,
    "form": [
      "W",
      "W",
      "D",
      "W",
      "D"
    ],
    "gf": 8,
    "ga": 5
  },
  "ned": {
    "id": "ned",
    "name": "Netherlands",
    "flag": "🇳🇱",
    "color": "#FF6600",
    "bg": "#7a2e00",
    "rating": 84,
    "attack": 83,
    "defense": 83,
    "possession": 53,
    "form": [
      "W",
      "D",
      "W",
      "W",
      "D"
    ],
    "gf": 7,
    "ga": 4
  },
  "usa": {
    "id": "usa",
    "name": "USA",
    "flag": "🇺🇸",
    "color": "#4A7FD4",
    "bg": "#0d2d6b",
    "rating": 78,
    "attack": 76,
    "defense": 79,
    "possession": 48,
    "form": [
      "D",
      "W",
      "W",
      "D",
      "L"
    ],
    "gf": 5,
    "ga": 6
  },
  "mex": {
    "id": "mex",
    "name": "Mexico",
    "flag": "🇲🇽",
    "color": "#006847",
    "bg": "#002a1c",
    "rating": 76,
    "attack": 75,
    "defense": 76,
    "possession": 52,
    "form": [
      "W",
      "D",
      "L",
      "W",
      "D"
    ],
    "gf": 4,
    "ga": 5
  },
  "mar": {
    "id": "mar",
    "name": "Morocco",
    "flag": "🇲🇦",
    "color": "#C1272D",
    "bg": "#5a0005",
    "rating": 82,
    "attack": 80,
    "defense": 85,
    "possession": 50,
    "form": [
      "W",
      "W",
      "D",
      "W",
      "W"
    ],
    "gf": 6,
    "ga": 2
  },
  "jpn": {
    "id": "jpn",
    "name": "Japan",
    "flag": "🇯🇵",
    "color": "#BC002D",
    "bg": "#5a0010",
    "rating": 80,
    "attack": 79,
    "defense": 81,
    "possession": 54,
    "form": [
      "W",
      "D",
      "W",
      "W",
      "L"
    ],
    "gf": 7,
    "ga": 4
  },
  "sen": {
    "id": "sen",
    "name": "Senegal",
    "flag": "🇸🇳",
    "color": "#00853F",
    "bg": "#002d15",
    "rating": 79,
    "attack": 78,
    "defense": 80,
    "possession": 49,
    "form": [
      "W",
      "D",
      "L",
      "W",
      "W"
    ],
    "gf": 5,
    "ga": 4
  },
  "kor": {
    "id": "kor",
    "name": "South Korea",
    "flag": "🇰🇷",
    "color": "#C60C30",
    "bg": "#5a0010",
    "rating": 78,
    "attack": 77,
    "defense": 79,
    "possession": 51,
    "form": [
      "D",
      "W",
      "W",
      "L",
      "W"
    ],
    "gf": 6,
    "ga": 5
  },
  "cro": {
    "id": "cro",
    "name": "Croatia",
    "flag": "🇭🇷",
    "color": "#FF3B3B",
    "bg": "#6b0000",
    "rating": 82,
    "attack": 81,
    "defense": 83,
    "possession": 55,
    "form": [
      "W",
      "W",
      "D",
      "W",
      "D"
    ],
    "gf": 7,
    "ga": 3
  },
  "uru": {
    "id": "uru",
    "name": "Uruguay",
    "flag": "🇺🇾",
    "color": "#5EB6E4",
    "bg": "#0d4a6b",
    "rating": 81,
    "attack": 82,
    "defense": 82,
    "possession": 52,
    "form": [
      "W",
      "D",
      "W",
      "W",
      "W"
    ],
    "gf": 8,
    "ga": 3
  }
};

export const FALLBACK_COACHES: Record<string, Coach> = {
  "bra": {
    "id": "coach-bra",
    "teamId": "bra",
    "name": "Dorival Júnior",
    "nationality": "🇧🇷",
    "age": 62,
    "formation": "4-3-3",
    "winRate": 68,
    "drawRate": 18,
    "lossRate": 14,
    "philosophy": "Futebol bonito berbasis transisi cepat dan kreativitas individu. Mengutamakan tekanan tinggi di sepertiga akhir lawan.",
    "pressStyle": "HIGH",
    "playingStyle": "COUNTER",
    "wcExp": 0,
    "titles": "Série A 2022 (Flamengo), Copa do Brasil 2022",
    "traits": [
      "Rotasi pemain",
      "Blok rendah saat bertahan",
      "Serangan sayap cepat"
    ]
  },
  "arg": {
    "id": "coach-arg",
    "teamId": "arg",
    "name": "Lionel Scaloni",
    "nationality": "🇦🇷",
    "age": 46,
    "formation": "4-3-3",
    "winRate": 72,
    "drawRate": 16,
    "lossRate": 12,
    "philosophy": "Pragmatisme taktis yang mengutamakan solidaritas tim. Messi sebagai pivot kreatif dengan dukungan dua striker mobile.",
    "pressStyle": "MID",
    "playingStyle": "HYBRID",
    "wcExp": 4,
    "titles": "Copa América 2021, Finalissima 2022, World Cup 2022",
    "traits": [
      "Fleksibilitas formasi",
      "Counter-pressing",
      "Set piece terorganisir"
    ]
  },
  "fra": {
    "id": "coach-fra",
    "teamId": "fra",
    "name": "Didier Deschamps",
    "nationality": "🇫🇷",
    "age": 56,
    "formation": "4-3-3",
    "winRate": 65,
    "drawRate": 20,
    "lossRate": 15,
    "philosophy": "Pertahanan terorganisir sebagai fondasi. Memanfaatkan kecepatan Mbappé untuk serangan balik mematikan.",
    "pressStyle": "MID",
    "playingStyle": "COUNTER",
    "wcExp": 8,
    "titles": "World Cup 2018, Euro 2021 (runner-up)",
    "traits": [
      "Pressing kompak",
      "Transisi cepat",
      "Disiplin taktis"
    ]
  },
  "esp": {
    "id": "coach-esp",
    "teamId": "esp",
    "name": "Luis de la Fuente",
    "nationality": "🇪🇸",
    "age": 63,
    "formation": "4-3-3",
    "winRate": 78,
    "drawRate": 14,
    "lossRate": 8,
    "philosophy": "Tiki-taka modern dengan intensitas pressing tinggi. Menguasai bola sebagai senjata utama melalui pergerakan cepat antar lini.",
    "pressStyle": "HIGH",
    "playingStyle": "POSSESSION",
    "wcExp": 0,
    "titles": "Euro 2024, UEFA Nations League 2023",
    "traits": [
      "Penguasaan bola",
      "Pressing tinggi",
      "Tiki-taka modern"
    ]
  },
  "ger": {
    "id": "coach-ger",
    "teamId": "ger",
    "name": "Julian Nagelsmann",
    "nationality": "🇩🇪",
    "age": 39,
    "formation": "4-2-3-1",
    "winRate": 62,
    "drawRate": 19,
    "lossRate": 19,
    "philosophy": "Sepak bola vertikal yang cepat. Memanfaatkan ruang dengan run-behind yang terstruktur dan pressing agresif.",
    "pressStyle": "HIGH",
    "playingStyle": "DIRECT",
    "wcExp": 0,
    "titles": "DFB-Pokal 2022",
    "traits": [
      "Pressing intens",
      "Build-up cepat",
      "Skema set piece"
    ]
  },
  "mar": {
    "id": "coach-mar",
    "teamId": "mar",
    "name": "Walid Regragui",
    "nationality": "🇲🇦",
    "age": 49,
    "formation": "4-1-4-1",
    "winRate": 60,
    "drawRate": 22,
    "lossRate": 18,
    "philosophy": "Pertahanan berlapis yang sangat disiplin. Mengandalkan solidaritas tim dan transisi balik yang eksplosif.",
    "pressStyle": "LOW",
    "playingStyle": "COUNTER",
    "wcExp": 4,
    "titles": "CAF Champions League 2022",
    "traits": [
      "Blok pertahanan",
      "Counter attack",
      "Solidaritas tim"
    ]
  }
};

export const FALLBACK_FIXTURES: Fixture[] = [
  {
    "id": "m001",
    "homeId": "bra",
    "awayId": "arg",
    "kickoff": "2026-06-10T04:09:19.359Z",
    "status": "LIVE",
    "minute": 67,
    "homeScore": 1,
    "awayScore": 1,
    "stage": "Group Stage",
    "group": "Group C",
    "venue": "MetLife Stadium",
    "city": "New York, USA"
  },
  {
    "id": "m002",
    "homeId": "fra",
    "awayId": "ger",
    "kickoff": "2026-06-10T07:16:19.359Z",
    "status": "PRE_MATCH",
    "minute": null,
    "homeScore": null,
    "awayScore": null,
    "stage": "Group Stage",
    "group": "Group A",
    "venue": "SoFi Stadium",
    "city": "Los Angeles, USA"
  },
  {
    "id": "m003",
    "homeId": "esp",
    "awayId": "mar",
    "kickoff": "2026-06-10T10:16:19.359Z",
    "status": "UPCOMING",
    "minute": null,
    "homeScore": null,
    "awayScore": null,
    "stage": "Group Stage",
    "group": "Group B",
    "venue": "AT&T Stadium",
    "city": "Dallas, USA"
  },
  {
    "id": "m004",
    "homeId": "eng",
    "awayId": "ned",
    "kickoff": "2026-06-10T13:16:19.359Z",
    "status": "UPCOMING",
    "minute": null,
    "homeScore": null,
    "awayScore": null,
    "stage": "Group Stage",
    "group": "Group D",
    "venue": "Estadio Azteca",
    "city": "Mexico City, MEX"
  },
  {
    "id": "m005",
    "homeId": "por",
    "awayId": "usa",
    "kickoff": "2026-06-10T02:16:19.359Z",
    "status": "FINISHED",
    "minute": 90,
    "homeScore": 3,
    "awayScore": 1,
    "stage": "Group Stage",
    "group": "Group E",
    "venue": "Levi's Stadium",
    "city": "San Francisco, USA"
  },
  {
    "id": "m006",
    "homeId": "jpn",
    "awayId": "kor",
    "kickoff": "2026-06-09T23:16:19.359Z",
    "status": "FINISHED",
    "minute": 90,
    "homeScore": 2,
    "awayScore": 0,
    "stage": "Group Stage",
    "group": "Group F",
    "venue": "BC Place",
    "city": "Vancouver, CAN"
  },
  {
    "id": "m007",
    "homeId": "uru",
    "awayId": "sen",
    "kickoff": "2026-06-11T07:16:19.359Z",
    "status": "UPCOMING",
    "minute": null,
    "homeScore": null,
    "awayScore": null,
    "stage": "Group Stage",
    "group": "Group G",
    "venue": "Gillette Stadium",
    "city": "Boston, USA"
  },
  {
    "id": "m008",
    "homeId": "cro",
    "awayId": "mex",
    "kickoff": "2026-06-11T09:16:19.359Z",
    "status": "UPCOMING",
    "minute": null,
    "homeScore": null,
    "awayScore": null,
    "stage": "Group Stage",
    "group": "Group H",
    "venue": "NRG Stadium",
    "city": "Houston, USA"
  }
];

export const FALLBACK_LINEUPS: Record<string, MatchLineups> = {
  "m001": {
    "home": {
      "formation": "4-3-3",
      "confirmed": true,
      "starters": [
        {
          "id": "p1",
          "name": "Ederson",
          "short": "Ederson",
          "pos": "GK",
          "jersey": 1,
          "x": 170,
          "y": 470,
          "captain": false
        },
        {
          "id": "p2",
          "name": "Danilo",
          "short": "Danilo",
          "pos": "RB",
          "jersey": 2,
          "x": 295,
          "y": 400,
          "captain": true
        },
        {
          "id": "p3",
          "name": "Marquinhos",
          "short": "Marqui.",
          "pos": "CB",
          "jersey": 4,
          "x": 220,
          "y": 390,
          "captain": false
        },
        {
          "id": "p4",
          "name": "Éder Militão",
          "short": "Militão",
          "pos": "CB",
          "jersey": 3,
          "x": 120,
          "y": 390,
          "captain": false
        },
        {
          "id": "p5",
          "name": "Alex Telles",
          "short": "A.Telles",
          "pos": "LB",
          "jersey": 6,
          "x": 45,
          "y": 400,
          "captain": false
        },
        {
          "id": "p6",
          "name": "Casemiro",
          "short": "Casemiro",
          "pos": "CDM",
          "jersey": 5,
          "x": 170,
          "y": 305,
          "captain": false
        },
        {
          "id": "p7",
          "name": "Lucas Paquetá",
          "short": "Paquetá",
          "pos": "CM",
          "jersey": 10,
          "x": 260,
          "y": 275,
          "captain": false
        },
        {
          "id": "p8",
          "name": "Bruno Guimarães",
          "short": "B.Gui.",
          "pos": "CM",
          "jersey": 15,
          "x": 80,
          "y": 275,
          "captain": false
        },
        {
          "id": "p9",
          "name": "Rodrygo",
          "short": "Rodrygo",
          "pos": "RW",
          "jersey": 11,
          "x": 285,
          "y": 160,
          "captain": false
        },
        {
          "id": "p10",
          "name": "Endrick",
          "short": "Endrick",
          "pos": "ST",
          "jersey": 9,
          "x": 170,
          "y": 135,
          "captain": false
        },
        {
          "id": "p11",
          "name": "Vinícius Jr",
          "short": "Vinícius",
          "pos": "LW",
          "jersey": 7,
          "x": 55,
          "y": 160,
          "captain": false
        }
      ],
      "bench": [
        {
          "id": "p12",
          "name": "Weverton",
          "pos": "GK",
          "jersey": 23
        },
        {
          "id": "p13",
          "name": "Renan Lodi",
          "pos": "LB",
          "jersey": 14
        },
        {
          "id": "p14",
          "name": "Gabriel M.",
          "pos": "CB",
          "jersey": 24
        },
        {
          "id": "p15",
          "name": "Gerson",
          "pos": "CM",
          "jersey": 8
        },
        {
          "id": "p16",
          "name": "Raphinha",
          "pos": "RW",
          "jersey": 19
        },
        {
          "id": "p17",
          "name": "Gabriel Jesus",
          "pos": "ST",
          "jersey": 18
        },
        {
          "id": "p18",
          "name": "Richarlison",
          "pos": "ST",
          "jersey": 16
        }
      ]
    },
    "away": {
      "formation": "4-3-3",
      "confirmed": true,
      "starters": [
        {
          "id": "q1",
          "name": "E. Martínez",
          "short": "E.Martínez",
          "pos": "GK",
          "jersey": 1,
          "x": 170,
          "y": 50,
          "captain": false
        },
        {
          "id": "q2",
          "name": "Nahuel Molina",
          "short": "Molina",
          "pos": "RB",
          "jersey": 26,
          "x": 45,
          "y": 120,
          "captain": false
        },
        {
          "id": "q3",
          "name": "Cristian Romero",
          "short": "C.Romero",
          "pos": "CB",
          "jersey": 13,
          "x": 120,
          "y": 130,
          "captain": false
        },
        {
          "id": "q4",
          "name": "Lisandro Martínez",
          "short": "L.Martínez",
          "pos": "CB",
          "jersey": 14,
          "x": 220,
          "y": 130,
          "captain": false
        },
        {
          "id": "q5",
          "name": "Nico Tagliafico",
          "short": "Tagliaf.",
          "pos": "LB",
          "jersey": 3,
          "x": 295,
          "y": 120,
          "captain": false
        },
        {
          "id": "q6",
          "name": "Rodrigo De Paul",
          "short": "De Paul",
          "pos": "CM",
          "jersey": 7,
          "x": 80,
          "y": 215,
          "captain": false
        },
        {
          "id": "q7",
          "name": "Enzo Fernández",
          "short": "E.Fernández",
          "pos": "CM",
          "jersey": 24,
          "x": 260,
          "y": 215,
          "captain": false
        },
        {
          "id": "q8",
          "name": "Mac Allister",
          "short": "Mac All.",
          "pos": "CDM",
          "jersey": 20,
          "x": 170,
          "y": 235,
          "captain": false
        },
        {
          "id": "q9",
          "name": "Ángel Di María",
          "short": "Di María",
          "pos": "RW",
          "jersey": 11,
          "x": 285,
          "y": 355,
          "captain": false
        },
        {
          "id": "q10",
          "name": "Lautaro Martínez",
          "short": "Lautaro",
          "pos": "ST",
          "jersey": 22,
          "x": 170,
          "y": 380,
          "captain": false
        },
        {
          "id": "q11",
          "name": "Lionel Messi",
          "short": "Messi",
          "pos": "LW",
          "jersey": 10,
          "x": 55,
          "y": 355,
          "captain": true
        }
      ],
      "bench": [
        {
          "id": "q12",
          "name": "Franco Armani",
          "pos": "GK",
          "jersey": 23
        },
        {
          "id": "q13",
          "name": "G. Montiel",
          "pos": "RB",
          "jersey": 4
        },
        {
          "id": "q14",
          "name": "Leandro Paredes",
          "pos": "CM",
          "jersey": 5
        },
        {
          "id": "q15",
          "name": "Thiago Almada",
          "pos": "CAM",
          "jersey": 16
        },
        {
          "id": "q16",
          "name": "Julián Álvarez",
          "pos": "ST",
          "jersey": 9
        },
        {
          "id": "q17",
          "name": "N. González",
          "pos": "RW",
          "jersey": 18
        }
      ]
    }
  },
  "m002": {
    "home": {
      "formation": "4-3-3",
      "confirmed": true,
      "starters": [
        {
          "id": "f1",
          "name": "Mike Maignan",
          "short": "Maignan",
          "pos": "GK",
          "jersey": 1,
          "x": 170,
          "y": 470
        },
        {
          "id": "f2",
          "name": "Jules Koundé",
          "short": "Koundé",
          "pos": "RB",
          "jersey": 5,
          "x": 295,
          "y": 400
        },
        {
          "id": "f3",
          "name": "Raphaël Varane",
          "short": "Varane",
          "pos": "CB",
          "jersey": 4,
          "x": 220,
          "y": 390
        },
        {
          "id": "f4",
          "name": "Dayot Upamecano",
          "short": "Upamec.",
          "pos": "CB",
          "jersey": 15,
          "x": 120,
          "y": 390
        },
        {
          "id": "f5",
          "name": "Théo Hernandez",
          "short": "T.Hernandez",
          "pos": "LB",
          "jersey": 22,
          "x": 45,
          "y": 400
        },
        {
          "id": "f6",
          "name": "Aurélien Tchouaméni",
          "short": "Tchouam.",
          "pos": "CDM",
          "jersey": 8,
          "x": 170,
          "y": 305
        },
        {
          "id": "f7",
          "name": "Adrien Rabiot",
          "short": "Rabiot",
          "pos": "CM",
          "jersey": 14,
          "x": 260,
          "y": 275
        },
        {
          "id": "f8",
          "name": "Antoine Griezmann",
          "short": "Griezm.",
          "pos": "CM",
          "jersey": 7,
          "x": 80,
          "y": 275
        },
        {
          "id": "f9",
          "name": "Ousmane Dembélé",
          "short": "Dembélé",
          "pos": "RW",
          "jersey": 11,
          "x": 285,
          "y": 160
        },
        {
          "id": "f10",
          "name": "Kylian Mbappé",
          "short": "Mbappé",
          "pos": "ST",
          "jersey": 10,
          "x": 170,
          "y": 135
        },
        {
          "id": "f11",
          "name": "Marcus Thuram",
          "short": "Thuram",
          "pos": "LW",
          "jersey": 9,
          "x": 55,
          "y": 160
        }
      ],
      "bench": [
        {
          "id": "f12",
          "name": "A. Lloris",
          "pos": "GK",
          "jersey": 16
        },
        {
          "id": "f13",
          "name": "B. Pavard",
          "pos": "RB",
          "jersey": 2
        },
        {
          "id": "f14",
          "name": "E. Camavinga",
          "pos": "CM",
          "jersey": 20
        },
        {
          "id": "f15",
          "name": "K. Coman",
          "pos": "LW",
          "jersey": 13
        }
      ]
    },
    "away": {
      "formation": "4-2-3-1",
      "confirmed": false,
      "starters": [
        {
          "id": "g1",
          "name": "Manuel Neuer",
          "short": "Neuer",
          "pos": "GK",
          "jersey": 1,
          "x": 170,
          "y": 50
        },
        {
          "id": "g2",
          "name": "Joshua Kimmich",
          "short": "Kimmich",
          "pos": "RB",
          "jersey": 6,
          "x": 45,
          "y": 120
        },
        {
          "id": "g3",
          "name": "Antonio Rüdiger",
          "short": "Rüdiger",
          "pos": "CB",
          "jersey": 2,
          "x": 120,
          "y": 130
        },
        {
          "id": "g4",
          "name": "Nico Schlotterbeck",
          "short": "Schlotter.",
          "pos": "CB",
          "jersey": 15,
          "x": 220,
          "y": 130
        },
        {
          "id": "g5",
          "name": "David Raum",
          "short": "Raum",
          "pos": "LB",
          "jersey": 19,
          "x": 295,
          "y": 120
        },
        {
          "id": "g6",
          "name": "Leon Goretzka",
          "short": "Goretzka",
          "pos": "CDM",
          "jersey": 14,
          "x": 80,
          "y": 215
        },
        {
          "id": "g7",
          "name": "Ilkay Gündogan",
          "short": "Gündogan",
          "pos": "CDM",
          "jersey": 21,
          "x": 260,
          "y": 215
        },
        {
          "id": "g8",
          "name": "Jamal Musiala",
          "short": "Musiala",
          "pos": "CAM",
          "jersey": 10,
          "x": 170,
          "y": 235
        },
        {
          "id": "g9",
          "name": "Leroy Sané",
          "short": "Sané",
          "pos": "RW",
          "jersey": 19,
          "x": 285,
          "y": 355
        },
        {
          "id": "g10",
          "name": "Thomas Müller",
          "short": "Müller",
          "pos": "CF",
          "jersey": 13,
          "x": 170,
          "y": 380
        },
        {
          "id": "g11",
          "name": "Florian Wirtz",
          "short": "Wirtz",
          "pos": "LW",
          "jersey": 17,
          "x": 55,
          "y": 355
        }
      ],
      "bench": [
        {
          "id": "g12",
          "name": "M. ter Stegen",
          "pos": "GK",
          "jersey": 12
        },
        {
          "id": "g13",
          "name": "T. Gnabry",
          "pos": "RW",
          "jersey": 20
        },
        {
          "id": "g14",
          "name": "K. Havertz",
          "pos": "ST",
          "jersey": 29
        }
      ]
    }
  }
};

export const FALLBACK_EVENTS: Record<string, MatchEvent[]> = {
  "m001": [
    {
      "id": "e1",
      "min": 12,
      "type": "GOAL",
      "teamId": "arg",
      "playerId": "q11",
      "desc": "GOL! Messi mencetak gol dari titik penalti setelah handball Danilo.",
      "aiComment": "Messi tidak pernah melupakan panggung World Cup! Tendangan penaltinya yang tenang menepi kanan mengecoh Ederson yang hampir menebak arah yang benar."
    },
    {
      "id": "e2",
      "min": 28,
      "type": "YELLOW_CARD",
      "teamId": "bra",
      "playerId": "p6",
      "desc": "Kartu kuning untuk Casemiro atas tekel keras terhadap De Paul.",
      "aiComment": "Casemiro berjalan di garis merah. Tekel dari belakang ini akan memaksanya bermain lebih hati-hati di sisa pertandingan."
    },
    {
      "id": "e3",
      "min": 35,
      "type": "GOAL",
      "teamId": "bra",
      "playerId": "p11",
      "desc": "SAMA! Vinícius Jr menyamakan kedudukan dengan tendangan kaki kiri dari sudut sempit.",
      "aiComment": "Perbedaan kelas Vinícius terlihat jelas. Dari posisi sulit di sisi kiri, kakinya yang kiri menciptakan gol yang tampak mustahil!"
    },
    {
      "id": "e4",
      "min": 43,
      "type": "VAR",
      "teamId": "arg",
      "playerId": "q10",
      "desc": "VAR Review: Offside terhadap Lautaro Martínez — gol dibatalkan.",
      "aiComment": "Momen dramatis di injury time babak pertama! VAR membalikkan kegembiraan Argentina dengan keputusan offside tipis."
    },
    {
      "id": "e5",
      "min": 45,
      "type": "HALF_TIME",
      "teamId": null,
      "playerId": null,
      "desc": "Babak pertama berakhir. Brazil 1-1 Argentina.",
      "aiComment": "Ini adalah 45 menit yang luar biasa! Dua gol, VAR, dan intensitas yang mencerminkan rivalitas terbesar dalam sepak bola dunia."
    },
    {
      "id": "e6",
      "min": 52,
      "type": "SUBSTITUTION",
      "teamId": "bra",
      "playerId": "p8",
      "desc": "Raphinha masuk menggantikan Bruno Guimarães.",
      "aiComment": "Dorival merespons dengan menghadirkan Raphinha. Pergantian ini bisa mengubah dinamika sayap kanan Brazil."
    },
    {
      "id": "e7",
      "min": 58,
      "type": "YELLOW_CARD",
      "teamId": "arg",
      "playerId": "q6",
      "desc": "Kartu kuning untuk De Paul atas protes berlebihan ke wasit.",
      "aiComment": "De Paul kehilangan kendali emosinya. Satu kartu kuning lagi dan Argentina akan bermain dengan 10 orang."
    },
    {
      "id": "e8",
      "min": 64,
      "type": "SHOT_SAVED",
      "teamId": "bra",
      "playerId": "p9",
      "desc": "Tembakan keras Rodrygo dari jarak 20 meter ditepis oleh E. Martínez.",
      "aiComment": "Emiliano Martínez kembali menunjukkan kelasnya! Refleks kanannya yang luar biasa menyelamatkan Argentina dari ketertinggalan."
    }
  ]
};

export const FALLBACK_STANDINGS: Record<string, StandingRow[]> = {
  "Group A": [
    {
      "teamId": "fra",
      "played": 2,
      "won": 2,
      "drawn": 0,
      "lost": 0,
      "gf": 5,
      "ga": 1,
      "pts": 6
    },
    {
      "teamId": "ger",
      "played": 2,
      "won": 1,
      "drawn": 0,
      "lost": 1,
      "gf": 3,
      "ga": 3,
      "pts": 3
    },
    {
      "teamId": "kor",
      "played": 2,
      "won": 0,
      "drawn": 1,
      "lost": 1,
      "gf": 2,
      "ga": 4,
      "pts": 1
    },
    {
      "teamId": "sen",
      "played": 2,
      "won": 0,
      "drawn": 1,
      "lost": 1,
      "gf": 1,
      "ga": 3,
      "pts": 1
    }
  ],
  "Group B": [
    {
      "teamId": "esp",
      "played": 2,
      "won": 2,
      "drawn": 0,
      "lost": 0,
      "gf": 6,
      "ga": 1,
      "pts": 6
    },
    {
      "teamId": "mar",
      "played": 2,
      "won": 1,
      "drawn": 1,
      "lost": 0,
      "gf": 3,
      "ga": 2,
      "pts": 4
    },
    {
      "teamId": "cro",
      "played": 2,
      "won": 0,
      "drawn": 1,
      "lost": 1,
      "gf": 2,
      "ga": 4,
      "pts": 1
    },
    {
      "teamId": "jpn",
      "played": 2,
      "won": 0,
      "drawn": 0,
      "lost": 2,
      "gf": 1,
      "ga": 5,
      "pts": 0
    }
  ],
  "Group C": [
    {
      "teamId": "arg",
      "played": 2,
      "won": 1,
      "drawn": 1,
      "lost": 0,
      "gf": 4,
      "ga": 2,
      "pts": 4
    },
    {
      "teamId": "bra",
      "played": 2,
      "won": 1,
      "drawn": 1,
      "lost": 0,
      "gf": 3,
      "ga": 2,
      "pts": 4
    },
    {
      "teamId": "uru",
      "played": 2,
      "won": 0,
      "drawn": 1,
      "lost": 1,
      "gf": 2,
      "ga": 3,
      "pts": 1
    },
    {
      "teamId": "mex",
      "played": 2,
      "won": 0,
      "drawn": 1,
      "lost": 1,
      "gf": 1,
      "ga": 3,
      "pts": 1
    }
  ],
  "Group D": [
    {
      "teamId": "eng",
      "played": 2,
      "won": 1,
      "drawn": 1,
      "lost": 0,
      "gf": 4,
      "ga": 2,
      "pts": 4
    },
    {
      "teamId": "ned",
      "played": 2,
      "won": 1,
      "drawn": 0,
      "lost": 1,
      "gf": 3,
      "ga": 3,
      "pts": 3
    },
    {
      "teamId": "por",
      "played": 2,
      "won": 1,
      "drawn": 0,
      "lost": 1,
      "gf": 4,
      "ga": 3,
      "pts": 3
    },
    {
      "teamId": "usa",
      "played": 2,
      "won": 0,
      "drawn": 1,
      "lost": 1,
      "gf": 2,
      "ga": 5,
      "pts": 1
    }
  ]
};

export const FALLBACK_H2H = {
  "bra-arg": {
    "played": 32,
    "homeWins": 10,
    "draws": 11,
    "awayWins": 11,
    "meetings": [
      {
        "year": 2022,
        "tournament": "WC Final",
        "homeScore": 0,
        "awayScore": 0,
        "result": "ARG wins on penalties"
      },
      {
        "year": 2022,
        "tournament": "Finalissima",
        "homeScore": 0,
        "awayScore": 3,
        "result": "ARG wins"
      },
      {
        "year": 2021,
        "tournament": "Copa América",
        "homeScore": 0,
        "awayScore": 1,
        "result": "ARG wins"
      },
      {
        "year": 2019,
        "tournament": "Copa América",
        "homeScore": 0,
        "awayScore": 2,
        "result": "ARG wins"
      },
      {
        "year": 2017,
        "tournament": "WCQ",
        "homeScore": 3,
        "awayScore": 0,
        "result": "BRA wins"
      }
    ]
  }
} as const;

export const FALLBACK_TOP_SCORERS = [
  {
    "playerId": "ps1",
    "name": "Kylian Mbappé",
    "teamId": "fra",
    "goals": 4,
    "assists": 2,
    "flag": "🇫🇷"
  },
  {
    "playerId": "ps2",
    "name": "Lautaro Martínez",
    "teamId": "arg",
    "goals": 3,
    "assists": 1,
    "flag": "🇦🇷"
  },
  {
    "playerId": "ps3",
    "name": "Vinícius Jr",
    "teamId": "bra",
    "goals": 3,
    "assists": 3,
    "flag": "🇧🇷"
  },
  {
    "playerId": "ps4",
    "name": "Pedri",
    "teamId": "esp",
    "goals": 2,
    "assists": 3,
    "flag": "🇪🇸"
  },
  {
    "playerId": "ps5",
    "name": "Lionel Messi",
    "teamId": "arg",
    "goals": 2,
    "assists": 4,
    "flag": "🇦🇷"
  }
];

export const FALLBACK_LEADERBOARD = [
  {
    "rank": 1,
    "nickname": "PunditUtama",
    "totalPoints": 89,
    "predictions": 14,
    "exact": 7,
    "change": 0
  },
  {
    "rank": 2,
    "nickname": "GoalMachine88",
    "totalPoints": 81,
    "predictions": 13,
    "exact": 5,
    "change": 2
  },
  {
    "rank": 3,
    "nickname": "TacticsBoss",
    "totalPoints": 76,
    "predictions": 14,
    "exact": 4,
    "change": -1
  },
  {
    "rank": 4,
    "nickname": "AnalisKursi",
    "totalPoints": 72,
    "predictions": 12,
    "exact": 4,
    "change": 1
  },
  {
    "rank": 5,
    "nickname": "SupremoFC",
    "totalPoints": 68,
    "predictions": 14,
    "exact": 3,
    "change": -2
  },
  {
    "rank": 6,
    "nickname": "Xaviernaldo",
    "totalPoints": 64,
    "predictions": 11,
    "exact": 4,
    "change": 3
  },
  {
    "rank": 7,
    "nickname": "BallonDor99",
    "totalPoints": 61,
    "predictions": 13,
    "exact": 3,
    "change": 0
  },
  {
    "rank": 8,
    "nickname": "KeeperGloves",
    "totalPoints": 57,
    "predictions": 12,
    "exact": 2,
    "change": -1
  },
  {
    "rank": 9,
    "nickname": "TiqiTaqa",
    "totalPoints": 53,
    "predictions": 14,
    "exact": 3,
    "change": 4
  },
  {
    "rank": 10,
    "nickname": "Pressingball",
    "totalPoints": 50,
    "predictions": 11,
    "exact": 2,
    "change": -2
  },
  {
    "rank": 11,
    "nickname": "WC2026Fan",
    "totalPoints": 48,
    "predictions": 12,
    "exact": 2,
    "change": 1
  },
  {
    "rank": 12,
    "nickname": "FutsalKing99",
    "totalPoints": 47,
    "predictions": 12,
    "exact": 3,
    "change": 2,
    "isUser": true
  },
  {
    "rank": 13,
    "nickname": "ElClasico10",
    "totalPoints": 44,
    "predictions": 11,
    "exact": 2,
    "change": -3
  },
  {
    "rank": 14,
    "nickname": "SambaStar",
    "totalPoints": 40,
    "predictions": 10,
    "exact": 2,
    "change": 0
  },
  {
    "rank": 15,
    "nickname": "VamosMundo",
    "totalPoints": 38,
    "predictions": 12,
    "exact": 1,
    "change": 1
  }
];
