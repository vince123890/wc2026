// H2H data dihitung dari 49.000+ hasil pertandingan internasional 1872–2026
// Sumber: github.com/martj42/international_results (public domain)
// Hanya turnamen besar: WC, EURO, Copa América, AFCON, Asian Cup, Nations League
// Key format: '{teamA}-{teamB}' di mana teamA < teamB (alphabetical)

export interface H2HRecord {
  w: number; d: number; l: number;
  gf: number; ga: number;
  wc_w: number; wc_d: number; wc_l: number;
  last5: { date: string; home: string; away: string; score: string; tourn: string }[];
}

export const H2H_DATA: Record<string, H2HRecord> = {
  "arg-bra": {
    "w": 17,
    "d": 9,
    "l": 13,
    "gf": 57,
    "ga": 49,
    "last5": [
      {
        "date": "2004-07-25",
        "home": "arg",
        "away": "bra",
        "score": "2-2",
        "tourn": "Copa América"
      },
      {
        "date": "2005-06-29",
        "home": "bra",
        "away": "arg",
        "score": "4-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2007-07-15",
        "home": "bra",
        "away": "arg",
        "score": "3-0",
        "tourn": "Copa América"
      },
      {
        "date": "2019-07-02",
        "home": "bra",
        "away": "arg",
        "score": "2-0",
        "tourn": "Copa América"
      },
      {
        "date": "2021-07-10",
        "home": "bra",
        "away": "arg",
        "score": "0-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 2
  },
  "bra-uru": {
    "w": 11,
    "d": 9,
    "l": 10,
    "gf": 43,
    "ga": 44,
    "last5": [
      {
        "date": "1999-07-18",
        "home": "bra",
        "away": "uru",
        "score": "3-0",
        "tourn": "Copa América"
      },
      {
        "date": "2004-07-21",
        "home": "uru",
        "away": "bra",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2007-07-10",
        "home": "uru",
        "away": "bra",
        "score": "2-2",
        "tourn": "Copa América"
      },
      {
        "date": "2013-06-26",
        "home": "bra",
        "away": "uru",
        "score": "2-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2024-07-06",
        "home": "uru",
        "away": "bra",
        "score": "0-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "arg-uru": {
    "w": 16,
    "d": 4,
    "l": 14,
    "gf": 46,
    "ga": 40,
    "last5": [
      {
        "date": "1999-07-07",
        "home": "uru",
        "away": "arg",
        "score": "0-2",
        "tourn": "Copa América"
      },
      {
        "date": "2004-07-13",
        "home": "arg",
        "away": "uru",
        "score": "4-2",
        "tourn": "Copa América"
      },
      {
        "date": "2011-07-16",
        "home": "arg",
        "away": "uru",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-16",
        "home": "arg",
        "away": "uru",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2021-06-18",
        "home": "arg",
        "away": "uru",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "par-uru": {
    "w": 6,
    "d": 6,
    "l": 15,
    "gf": 33,
    "ga": 55,
    "last5": [
      {
        "date": "1999-07-10",
        "home": "par",
        "away": "uru",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2004-07-18",
        "home": "par",
        "away": "uru",
        "score": "1-3",
        "tourn": "Copa América"
      },
      {
        "date": "2011-07-24",
        "home": "uru",
        "away": "par",
        "score": "3-0",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-20",
        "home": "uru",
        "away": "par",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2021-06-28",
        "home": "uru",
        "away": "par",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-par": {
    "w": 14,
    "d": 11,
    "l": 7,
    "gf": 65,
    "ga": 31,
    "last5": [
      {
        "date": "2011-07-09",
        "home": "bra",
        "away": "par",
        "score": "2-2",
        "tourn": "Copa América"
      },
      {
        "date": "2011-07-17",
        "home": "bra",
        "away": "par",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-27",
        "home": "bra",
        "away": "par",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2019-06-27",
        "home": "bra",
        "away": "par",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2024-06-28",
        "home": "par",
        "away": "bra",
        "score": "1-4",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-par": {
    "w": 20,
    "d": 6,
    "l": 0,
    "gf": 78,
    "ga": 23,
    "last5": [
      {
        "date": "2007-07-05",
        "home": "arg",
        "away": "par",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-13",
        "home": "arg",
        "away": "par",
        "score": "2-2",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-30",
        "home": "arg",
        "away": "par",
        "score": "6-1",
        "tourn": "Copa América"
      },
      {
        "date": "2019-06-19",
        "home": "arg",
        "away": "par",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2021-06-21",
        "home": "arg",
        "away": "par",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-usa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 4,
    "last5": [
      {
        "date": "1930-07-13",
        "home": "bel",
        "away": "usa",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-07-01",
        "home": "bel",
        "away": "usa",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "fra-mex": {
    "w": 3,
    "d": 1,
    "l": 1,
    "gf": 12,
    "ga": 6,
    "last5": [
      {
        "date": "1930-07-13",
        "home": "fra",
        "away": "mex",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1954-06-19",
        "home": "fra",
        "away": "mex",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1966-07-13",
        "home": "fra",
        "away": "mex",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2001-06-03",
        "home": "fra",
        "away": "mex",
        "score": "4-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2010-06-17",
        "home": "fra",
        "away": "mex",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 1
  },
  "arg-fra": {
    "w": 2,
    "d": 1,
    "l": 1,
    "gf": 9,
    "ga": 8,
    "last5": [
      {
        "date": "1930-07-15",
        "home": "arg",
        "away": "fra",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1978-06-06",
        "home": "arg",
        "away": "fra",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-30",
        "home": "fra",
        "away": "arg",
        "score": "4-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-18",
        "home": "arg",
        "away": "fra",
        "score": "3-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 1
  },
  "par-usa": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 5,
    "last5": [
      {
        "date": "1930-07-17",
        "home": "par",
        "away": "usa",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2007-07-02",
        "home": "usa",
        "away": "par",
        "score": "1-3",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-11",
        "home": "usa",
        "away": "par",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "arg-mex": {
    "w": 6,
    "d": 2,
    "l": 1,
    "gf": 20,
    "ga": 9,
    "last5": [
      {
        "date": "2005-06-26",
        "home": "mex",
        "away": "arg",
        "score": "1-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-24",
        "home": "arg",
        "away": "mex",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2007-07-11",
        "home": "mex",
        "away": "arg",
        "score": "0-3",
        "tourn": "Copa América"
      },
      {
        "date": "2010-06-27",
        "home": "arg",
        "away": "mex",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-26",
        "home": "arg",
        "away": "mex",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 4,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-par": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 2,
    "ga": 3,
    "last5": [
      {
        "date": "1930-07-20",
        "home": "bel",
        "away": "par",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-11",
        "home": "par",
        "away": "bel",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "arg-usa": {
    "w": 3,
    "d": 0,
    "l": 1,
    "gf": 14,
    "ga": 5,
    "last5": [
      {
        "date": "1930-07-26",
        "home": "arg",
        "away": "usa",
        "score": "6-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1995-07-14",
        "home": "arg",
        "away": "usa",
        "score": "0-3",
        "tourn": "Copa América"
      },
      {
        "date": "2007-06-28",
        "home": "arg",
        "away": "usa",
        "score": "4-1",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-21",
        "home": "usa",
        "away": "arg",
        "score": "0-4",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-swe": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 3,
    "ga": 4,
    "last5": [
      {
        "date": "1934-05-27",
        "home": "arg",
        "away": "swe",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-12",
        "home": "swe",
        "away": "arg",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "aut-fra": {
    "w": 1,
    "d": 1,
    "l": 3,
    "gf": 4,
    "ga": 7,
    "last5": [
      {
        "date": "1934-05-27",
        "home": "aut",
        "away": "fra",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1982-06-28",
        "home": "aut",
        "away": "fra",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-06-10",
        "home": "aut",
        "away": "fra",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-22",
        "home": "fra",
        "away": "aut",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-06-17",
        "home": "aut",
        "away": "fra",
        "score": "0-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-ger": {
    "w": 0,
    "d": 0,
    "l": 4,
    "gf": 6,
    "ga": 12,
    "last5": [
      {
        "date": "1934-05-27",
        "home": "bel",
        "away": "ger",
        "score": "2-5",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1972-06-14",
        "home": "bel",
        "away": "ger",
        "score": "1-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1980-06-22",
        "home": "bel",
        "away": "ger",
        "score": "1-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1994-07-02",
        "home": "ger",
        "away": "bel",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "bra-esp": {
    "w": 4,
    "d": 1,
    "l": 1,
    "gf": 13,
    "ga": 5,
    "last5": [
      {
        "date": "1950-07-13",
        "home": "bra",
        "away": "esp",
        "score": "6-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1962-06-06",
        "home": "bra",
        "away": "esp",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1978-06-07",
        "home": "bra",
        "away": "esp",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-01",
        "home": "esp",
        "away": "bra",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2013-06-30",
        "home": "bra",
        "away": "esp",
        "score": "3-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 3,
    "wc_d": 1,
    "wc_l": 1
  },
  "ned-sui": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "1934-05-27",
        "home": "ned",
        "away": "sui",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1996-06-13",
        "home": "sui",
        "away": "ned",
        "score": "0-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ger-swe": {
    "w": 5,
    "d": 0,
    "l": 1,
    "gf": 14,
    "ga": 9,
    "last5": [
      {
        "date": "1958-06-24",
        "home": "swe",
        "away": "ger",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1974-06-30",
        "home": "ger",
        "away": "swe",
        "score": "4-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1992-06-21",
        "home": "swe",
        "away": "ger",
        "score": "2-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2006-06-24",
        "home": "ger",
        "away": "swe",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-23",
        "home": "ger",
        "away": "swe",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 4,
    "wc_d": 0,
    "wc_l": 1
  },
  "aut-ger": {
    "w": 1,
    "d": 0,
    "l": 4,
    "gf": 6,
    "ga": 13,
    "last5": [
      {
        "date": "1934-06-07",
        "home": "aut",
        "away": "ger",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1954-06-30",
        "home": "aut",
        "away": "ger",
        "score": "1-6",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1978-06-21",
        "home": "aut",
        "away": "ger",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1982-06-25",
        "home": "ger",
        "away": "aut",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2008-06-16",
        "home": "aut",
        "away": "ger",
        "score": "0-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 3
  },
  "ger-sui": {
    "w": 2,
    "d": 4,
    "l": 1,
    "gf": 15,
    "ga": 11,
    "last5": [
      {
        "date": "1962-06-03",
        "home": "ger",
        "away": "sui",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1966-07-12",
        "home": "ger",
        "away": "sui",
        "score": "5-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2020-09-06",
        "home": "sui",
        "away": "ger",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-10-13",
        "home": "ger",
        "away": "sui",
        "score": "3-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-06-23",
        "home": "ger",
        "away": "sui",
        "score": "1-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 1
  },
  "bel-fra": {
    "w": 0,
    "d": 0,
    "l": 8,
    "gf": 6,
    "ga": 21,
    "last5": [
      {
        "date": "2018-07-10",
        "home": "fra",
        "away": "bel",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2021-10-07",
        "home": "bel",
        "away": "fra",
        "score": "2-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-07-01",
        "home": "fra",
        "away": "bel",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-09-09",
        "home": "fra",
        "away": "bel",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-10-14",
        "home": "bel",
        "away": "fra",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 3
  },
  "bra-swe": {
    "w": 5,
    "d": 2,
    "l": 0,
    "gf": 21,
    "ga": 8,
    "last5": [
      {
        "date": "1958-06-29",
        "home": "swe",
        "away": "bra",
        "score": "2-5",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1978-06-03",
        "home": "bra",
        "away": "swe",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1990-06-10",
        "home": "bra",
        "away": "swe",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1994-06-28",
        "home": "bra",
        "away": "swe",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1994-07-13",
        "home": "swe",
        "away": "bra",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 5,
    "wc_d": 2,
    "wc_l": 0
  },
  "ecu-uru": {
    "w": 3,
    "d": 1,
    "l": 14,
    "gf": 16,
    "ga": 66,
    "last5": [
      {
        "date": "1991-07-09",
        "home": "ecu",
        "away": "uru",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "1993-06-22",
        "home": "ecu",
        "away": "uru",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "1999-07-04",
        "home": "uru",
        "away": "ecu",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2004-07-10",
        "home": "uru",
        "away": "ecu",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2019-06-16",
        "home": "uru",
        "away": "ecu",
        "score": "4-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-par": {
    "w": 3,
    "d": 3,
    "l": 9,
    "gf": 15,
    "ga": 26,
    "last5": [
      {
        "date": "1979-08-29",
        "home": "ecu",
        "away": "par",
        "score": "1-2",
        "tourn": "Copa América"
      },
      {
        "date": "1979-09-13",
        "home": "par",
        "away": "ecu",
        "score": "2-0",
        "tourn": "Copa América"
      },
      {
        "date": "1993-06-26",
        "home": "ecu",
        "away": "par",
        "score": "3-0",
        "tourn": "Copa América"
      },
      {
        "date": "1997-06-14",
        "home": "par",
        "away": "ecu",
        "score": "0-2",
        "tourn": "Copa América"
      },
      {
        "date": "2011-07-03",
        "home": "par",
        "away": "ecu",
        "score": "0-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-ecu": {
    "w": 11,
    "d": 6,
    "l": 0,
    "gf": 56,
    "ga": 13,
    "last5": [
      {
        "date": "1997-06-11",
        "home": "arg",
        "away": "ecu",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "1999-07-01",
        "home": "arg",
        "away": "ecu",
        "score": "3-1",
        "tourn": "Copa América"
      },
      {
        "date": "2004-07-07",
        "home": "arg",
        "away": "ecu",
        "score": "6-1",
        "tourn": "Copa América"
      },
      {
        "date": "2021-07-03",
        "home": "arg",
        "away": "ecu",
        "score": "3-0",
        "tourn": "Copa América"
      },
      {
        "date": "2024-07-04",
        "home": "arg",
        "away": "ecu",
        "score": "1-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-ecu": {
    "w": 12,
    "d": 3,
    "l": 0,
    "gf": 53,
    "ga": 12,
    "last5": [
      {
        "date": "1995-07-07",
        "home": "bra",
        "away": "ecu",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2007-07-04",
        "home": "bra",
        "away": "ecu",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2011-07-13",
        "home": "bra",
        "away": "ecu",
        "score": "4-2",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-04",
        "home": "bra",
        "away": "ecu",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2021-06-27",
        "home": "bra",
        "away": "ecu",
        "score": "1-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-col": {
    "w": 9,
    "d": 2,
    "l": 2,
    "gf": 34,
    "ga": 7,
    "last5": [
      {
        "date": "1997-06-19",
        "home": "bra",
        "away": "col",
        "score": "2-0",
        "tourn": "Copa América"
      },
      {
        "date": "2014-07-04",
        "home": "bra",
        "away": "col",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2015-06-17",
        "home": "bra",
        "away": "col",
        "score": "0-1",
        "tourn": "Copa América"
      },
      {
        "date": "2021-06-23",
        "home": "bra",
        "away": "col",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2024-07-02",
        "home": "bra",
        "away": "col",
        "score": "1-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-uru": {
    "w": 5,
    "d": 3,
    "l": 7,
    "gf": 13,
    "ga": 20,
    "last5": [
      {
        "date": "1999-07-01",
        "home": "uru",
        "away": "col",
        "score": "0-1",
        "tourn": "Copa América"
      },
      {
        "date": "2004-07-24",
        "home": "col",
        "away": "uru",
        "score": "1-2",
        "tourn": "Copa América"
      },
      {
        "date": "2014-06-28",
        "home": "col",
        "away": "uru",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2021-07-03",
        "home": "uru",
        "away": "col",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2024-07-10",
        "home": "uru",
        "away": "col",
        "score": "0-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "arg-col": {
    "w": 8,
    "d": 5,
    "l": 3,
    "gf": 40,
    "ga": 17,
    "last5": [
      {
        "date": "2011-07-06",
        "home": "arg",
        "away": "col",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-26",
        "home": "arg",
        "away": "col",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2019-06-15",
        "home": "arg",
        "away": "col",
        "score": "0-2",
        "tourn": "Copa América"
      },
      {
        "date": "2021-07-06",
        "home": "arg",
        "away": "col",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2024-07-14",
        "home": "arg",
        "away": "col",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-ecu": {
    "w": 10,
    "d": 1,
    "l": 2,
    "gf": 23,
    "ga": 12,
    "last5": [
      {
        "date": "1993-07-03",
        "home": "ecu",
        "away": "col",
        "score": "0-1",
        "tourn": "Copa América"
      },
      {
        "date": "1995-07-10",
        "home": "col",
        "away": "ecu",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "1999-07-07",
        "home": "col",
        "away": "ecu",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2001-07-14",
        "home": "col",
        "away": "ecu",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2021-06-13",
        "home": "col",
        "away": "ecu",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-par": {
    "w": 6,
    "d": 1,
    "l": 5,
    "gf": 13,
    "ga": 17,
    "last5": [
      {
        "date": "1995-07-16",
        "home": "par",
        "away": "col",
        "score": "1-1",
        "tourn": "Copa América"
      },
      {
        "date": "2007-06-28",
        "home": "par",
        "away": "col",
        "score": "5-0",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-07",
        "home": "col",
        "away": "par",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2019-06-23",
        "home": "col",
        "away": "par",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2024-06-24",
        "home": "col",
        "away": "par",
        "score": "2-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-mex": {
    "w": 10,
    "d": 1,
    "l": 4,
    "gf": 32,
    "ga": 13,
    "last5": [
      {
        "date": "2005-06-19",
        "home": "mex",
        "away": "bra",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2007-06-27",
        "home": "bra",
        "away": "mex",
        "score": "0-2",
        "tourn": "Copa América"
      },
      {
        "date": "2013-06-19",
        "home": "bra",
        "away": "mex",
        "score": "2-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2014-06-17",
        "home": "bra",
        "away": "mex",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-07-02",
        "home": "bra",
        "away": "mex",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 4,
    "wc_d": 1,
    "wc_l": 0
  },
  "esp-usa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "1950-06-25",
        "home": "esp",
        "away": "usa",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2009-06-24",
        "home": "esp",
        "away": "usa",
        "score": "0-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-sui": {
    "w": 1,
    "d": 2,
    "l": 0,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "1950-06-28",
        "home": "bra",
        "away": "sui",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-17",
        "home": "bra",
        "away": "sui",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-28",
        "home": "bra",
        "away": "sui",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 0
  },
  "eng-usa": {
    "w": 0,
    "d": 2,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1950-06-29",
        "home": "eng",
        "away": "usa",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-12",
        "home": "eng",
        "away": "usa",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-25",
        "home": "eng",
        "away": "usa",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 2,
    "wc_l": 1
  },
  "par-swe": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 2,
    "ga": 3,
    "last5": [
      {
        "date": "1950-06-29",
        "home": "par",
        "away": "swe",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2006-06-15",
        "home": "swe",
        "away": "par",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "eng-esp": {
    "w": 2,
    "d": 2,
    "l": 3,
    "gf": 7,
    "ga": 8,
    "last5": [
      {
        "date": "1982-07-05",
        "home": "esp",
        "away": "eng",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1996-06-22",
        "home": "eng",
        "away": "esp",
        "score": "0-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-09-08",
        "home": "eng",
        "away": "esp",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-10-15",
        "home": "esp",
        "away": "eng",
        "score": "2-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-07-14",
        "home": "esp",
        "away": "eng",
        "score": "2-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "mex-sui": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1950-07-02",
        "home": "mex",
        "away": "sui",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "esp-uru": {
    "w": 1,
    "d": 2,
    "l": 0,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "1950-07-09",
        "home": "esp",
        "away": "uru",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1990-06-13",
        "home": "uru",
        "away": "esp",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2013-06-16",
        "home": "esp",
        "away": "uru",
        "score": "2-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 2,
    "wc_l": 0
  },
  "swe-uru": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 6,
    "ga": 3,
    "last5": [
      {
        "date": "1950-07-13",
        "home": "swe",
        "away": "uru",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1970-06-10",
        "home": "swe",
        "away": "uru",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1974-06-23",
        "home": "swe",
        "away": "uru",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "esp-swe": {
    "w": 2,
    "d": 1,
    "l": 1,
    "gf": 4,
    "ga": 4,
    "last5": [
      {
        "date": "1950-07-16",
        "home": "esp",
        "away": "swe",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1978-06-11",
        "home": "esp",
        "away": "swe",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2008-06-14",
        "home": "swe",
        "away": "esp",
        "score": "1-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-06-14",
        "home": "esp",
        "away": "swe",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "aut-sco": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "1954-06-16",
        "home": "aut",
        "away": "sco",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-eng": {
    "w": 3,
    "d": 2,
    "l": 2,
    "gf": 11,
    "ga": 8,
    "last5": [
      {
        "date": "1990-06-26",
        "home": "eng",
        "away": "bel",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-28",
        "home": "eng",
        "away": "bel",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-07-14",
        "home": "bel",
        "away": "eng",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2020-10-11",
        "home": "eng",
        "away": "bel",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-15",
        "home": "bel",
        "away": "eng",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 1
  },
  "ger-tur": {
    "w": 3,
    "d": 0,
    "l": 0,
    "gf": 14,
    "ga": 5,
    "last5": [
      {
        "date": "1954-06-17",
        "home": "ger",
        "away": "tur",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1954-06-23",
        "home": "ger",
        "away": "tur",
        "score": "7-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2008-06-25",
        "home": "ger",
        "away": "tur",
        "score": "3-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "sco-uru": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 0,
    "ga": 7,
    "last5": [
      {
        "date": "1954-06-19",
        "home": "sco",
        "away": "uru",
        "score": "0-7",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-13",
        "home": "sco",
        "away": "uru",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "kor-tur": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 2,
    "ga": 10,
    "last5": [
      {
        "date": "1954-06-20",
        "home": "kor",
        "away": "tur",
        "score": "0-7",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-29",
        "home": "kor",
        "away": "tur",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "eng-sui": {
    "w": 2,
    "d": 3,
    "l": 0,
    "gf": 7,
    "ga": 2,
    "last5": [
      {
        "date": "1954-06-20",
        "home": "sui",
        "away": "eng",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1996-06-08",
        "home": "eng",
        "away": "sui",
        "score": "1-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2004-06-17",
        "home": "eng",
        "away": "sui",
        "score": "3-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2019-06-09",
        "home": "sui",
        "away": "eng",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-07-06",
        "home": "eng",
        "away": "sui",
        "score": "1-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-uru": {
    "w": 0,
    "d": 1,
    "l": 2,
    "gf": 3,
    "ga": 6,
    "last5": [
      {
        "date": "1954-06-26",
        "home": "eng",
        "away": "uru",
        "score": "2-4",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1966-07-11",
        "home": "eng",
        "away": "uru",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-19",
        "home": "uru",
        "away": "eng",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 2
  },
  "aut-sui": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 7,
    "ga": 5,
    "last5": [
      {
        "date": "1954-06-26",
        "home": "sui",
        "away": "aut",
        "score": "5-7",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "aut-uru": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "1954-07-03",
        "home": "aut",
        "away": "uru",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-ger": {
    "w": 1,
    "d": 3,
    "l": 4,
    "gf": 7,
    "ga": 14,
    "last5": [
      {
        "date": "1990-07-08",
        "home": "ger",
        "away": "arg",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2005-06-21",
        "home": "ger",
        "away": "arg",
        "score": "2-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-30",
        "home": "ger",
        "away": "arg",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-07-03",
        "home": "arg",
        "away": "ger",
        "score": "0-4",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-07-13",
        "home": "ger",
        "away": "arg",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 4
  },
  "aut-bra": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 0,
    "ga": 4,
    "last5": [
      {
        "date": "1958-06-08",
        "home": "aut",
        "away": "bra",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1978-06-11",
        "home": "aut",
        "away": "bra",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "fra-par": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 8,
    "ga": 3,
    "last5": [
      {
        "date": "1958-06-08",
        "home": "fra",
        "away": "par",
        "score": "7-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-28",
        "home": "fra",
        "away": "par",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "mex-swe": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 0,
    "ga": 6,
    "last5": [
      {
        "date": "1958-06-08",
        "home": "swe",
        "away": "mex",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-27",
        "home": "mex",
        "away": "swe",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "bra-eng": {
    "w": 3,
    "d": 1,
    "l": 0,
    "gf": 6,
    "ga": 2,
    "last5": [
      {
        "date": "1958-06-11",
        "home": "bra",
        "away": "eng",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1962-06-10",
        "home": "bra",
        "away": "eng",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1970-06-07",
        "home": "bra",
        "away": "eng",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-21",
        "home": "eng",
        "away": "bra",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 3,
    "wc_d": 1,
    "wc_l": 0
  },
  "par-sco": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "1958-06-11",
        "home": "par",
        "away": "sco",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "aut-eng": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1958-06-15",
        "home": "aut",
        "away": "eng",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "fra-sco": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1958-06-15",
        "home": "fra",
        "away": "sco",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-fra": {
    "w": 1,
    "d": 1,
    "l": 3,
    "gf": 7,
    "ga": 9,
    "last5": [
      {
        "date": "1958-06-24",
        "home": "bra",
        "away": "fra",
        "score": "5-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-21",
        "home": "bra",
        "away": "fra",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-07-12",
        "home": "fra",
        "away": "bra",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2001-06-07",
        "home": "fra",
        "away": "bra",
        "score": "2-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-07-01",
        "home": "bra",
        "away": "fra",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 2
  },
  "fra-ger": {
    "w": 5,
    "d": 2,
    "l": 2,
    "gf": 16,
    "ga": 10,
    "last5": [
      {
        "date": "2016-07-07",
        "home": "fra",
        "away": "ger",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-09-06",
        "home": "ger",
        "away": "fra",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-10-16",
        "home": "fra",
        "away": "ger",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2021-06-15",
        "home": "ger",
        "away": "fra",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2025-06-08",
        "home": "ger",
        "away": "fra",
        "score": "0-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 2
  },
  "arg-eng": {
    "w": 1,
    "d": 1,
    "l": 3,
    "gf": 5,
    "ga": 8,
    "last5": [
      {
        "date": "1962-06-02",
        "home": "arg",
        "away": "eng",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1966-07-23",
        "home": "eng",
        "away": "arg",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-22",
        "home": "arg",
        "away": "eng",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-30",
        "home": "arg",
        "away": "eng",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-07",
        "home": "arg",
        "away": "eng",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 3
  },
  "esp-mex": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "1962-06-03",
        "home": "mex",
        "away": "esp",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-esp": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1966-07-13",
        "home": "arg",
        "away": "esp",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-uru": {
    "w": 1,
    "d": 2,
    "l": 1,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "1966-07-15",
        "home": "fra",
        "away": "uru",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-06",
        "home": "fra",
        "away": "uru",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-11",
        "home": "uru",
        "away": "fra",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-07-06",
        "home": "uru",
        "away": "fra",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 1
  },
  "esp-sui": {
    "w": 6,
    "d": 2,
    "l": 2,
    "gf": 17,
    "ga": 9,
    "last5": [
      {
        "date": "2021-07-02",
        "home": "sui",
        "away": "esp",
        "score": "1-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-06-09",
        "home": "sui",
        "away": "esp",
        "score": "0-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-24",
        "home": "esp",
        "away": "sui",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-09-08",
        "home": "sui",
        "away": "esp",
        "score": "1-4",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-11-18",
        "home": "esp",
        "away": "sui",
        "score": "3-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "eng-mex": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1966-07-16",
        "home": "eng",
        "away": "mex",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-sui": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "1966-07-19",
        "home": "arg",
        "away": "sui",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-07-01",
        "home": "arg",
        "away": "sui",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-por": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "1966-07-19",
        "home": "bra",
        "away": "por",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-25",
        "home": "por",
        "away": "bra",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "mex-uru": {
    "w": 3,
    "d": 3,
    "l": 2,
    "gf": 11,
    "ga": 8,
    "last5": [
      {
        "date": "2004-07-07",
        "home": "mex",
        "away": "uru",
        "score": "2-2",
        "tourn": "Copa América"
      },
      {
        "date": "2007-07-14",
        "home": "mex",
        "away": "uru",
        "score": "3-1",
        "tourn": "Copa América"
      },
      {
        "date": "2010-06-22",
        "home": "mex",
        "away": "uru",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2011-07-12",
        "home": "uru",
        "away": "mex",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-05",
        "home": "mex",
        "away": "uru",
        "score": "3-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "eng-fra": {
    "w": 2,
    "d": 2,
    "l": 2,
    "gf": 8,
    "ga": 6,
    "last5": [
      {
        "date": "1982-06-16",
        "home": "eng",
        "away": "fra",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1992-06-14",
        "home": "fra",
        "away": "eng",
        "score": "0-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2004-06-13",
        "home": "fra",
        "away": "eng",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2012-06-11",
        "home": "fra",
        "away": "eng",
        "score": "1-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-12-10",
        "home": "eng",
        "away": "fra",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "esp-ger": {
    "w": 5,
    "d": 3,
    "l": 3,
    "gf": 16,
    "ga": 10,
    "last5": [
      {
        "date": "2010-07-07",
        "home": "ger",
        "away": "esp",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2020-09-03",
        "home": "ger",
        "away": "esp",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-17",
        "home": "esp",
        "away": "ger",
        "score": "6-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-11-27",
        "home": "esp",
        "away": "ger",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2024-07-05",
        "home": "ger",
        "away": "esp",
        "score": "1-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 2
  },
  "ger-uru": {
    "w": 3,
    "d": 1,
    "l": 0,
    "gf": 9,
    "ga": 3,
    "last5": [
      {
        "date": "1966-07-23",
        "home": "ger",
        "away": "uru",
        "score": "4-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1970-06-20",
        "home": "ger",
        "away": "uru",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-04",
        "home": "uru",
        "away": "ger",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-07-10",
        "home": "uru",
        "away": "ger",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 3,
    "wc_d": 1,
    "wc_l": 0
  },
  "eng-por": {
    "w": 1,
    "d": 2,
    "l": 2,
    "gf": 6,
    "ga": 7,
    "last5": [
      {
        "date": "1966-07-26",
        "home": "eng",
        "away": "por",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-03",
        "home": "por",
        "away": "eng",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2000-06-12",
        "home": "por",
        "away": "eng",
        "score": "3-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2004-06-24",
        "home": "por",
        "away": "eng",
        "score": "2-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2006-07-01",
        "home": "eng",
        "away": "por",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 1
  },
  "eng-ger": {
    "w": 3,
    "d": 5,
    "l": 2,
    "gf": 16,
    "ga": 15,
    "last5": [
      {
        "date": "2000-06-17",
        "home": "eng",
        "away": "ger",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2010-06-27",
        "home": "ger",
        "away": "eng",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2021-06-29",
        "home": "eng",
        "away": "ger",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-06-07",
        "home": "ger",
        "away": "eng",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-26",
        "home": "eng",
        "away": "ger",
        "score": "3-3",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 2
  },
  "ger-mar": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "1970-06-03",
        "home": "ger",
        "away": "mar",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-17",
        "home": "mar",
        "away": "ger",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-mex": {
    "w": 0,
    "d": 1,
    "l": 2,
    "gf": 3,
    "ga": 5,
    "last5": [
      {
        "date": "1970-06-11",
        "home": "mex",
        "away": "bel",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-03",
        "home": "mex",
        "away": "bel",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-20",
        "home": "bel",
        "away": "mex",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 2
  },
  "irq-kor": {
    "w": 0,
    "d": 2,
    "l": 1,
    "gf": 0,
    "ga": 2,
    "last5": [
      {
        "date": "1972-05-07",
        "home": "kor",
        "away": "irq",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-25",
        "home": "irq",
        "away": "kor",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-26",
        "home": "kor",
        "away": "irq",
        "score": "2-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-irq": {
    "w": 4,
    "d": 2,
    "l": 1,
    "gf": 12,
    "ga": 6,
    "last5": [
      {
        "date": "1996-12-05",
        "home": "irn",
        "away": "irq",
        "score": "1-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-18",
        "home": "irn",
        "away": "irq",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-11",
        "home": "irq",
        "away": "irn",
        "score": "1-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-23",
        "home": "irn",
        "away": "irq",
        "score": "3-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-16",
        "home": "irn",
        "away": "irq",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-kor": {
    "w": 3,
    "d": 1,
    "l": 3,
    "gf": 13,
    "ga": 12,
    "last5": [
      {
        "date": "1996-12-16",
        "home": "kor",
        "away": "irn",
        "score": "2-6",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-23",
        "home": "irn",
        "away": "kor",
        "score": "1-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2004-07-31",
        "home": "kor",
        "away": "irn",
        "score": "3-4",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-22",
        "home": "irn",
        "away": "kor",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-22",
        "home": "irn",
        "away": "kor",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cod-sco": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 2,
    "last5": [
      {
        "date": "1974-06-14",
        "home": "cod",
        "away": "sco",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ned-uru": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 2,
    "last5": [
      {
        "date": "1974-06-15",
        "home": "uru",
        "away": "ned",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-07-06",
        "home": "uru",
        "away": "ned",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-ger": {
    "w": 0,
    "d": 0,
    "l": 4,
    "gf": 5,
    "ga": 14,
    "last5": [
      {
        "date": "1974-06-18",
        "home": "ger",
        "away": "aus",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2005-06-15",
        "home": "ger",
        "away": "aus",
        "score": "4-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2010-06-13",
        "home": "ger",
        "away": "aus",
        "score": "4-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2017-06-19",
        "home": "aus",
        "away": "ger",
        "score": "2-3",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "bra-sco": {
    "w": 3,
    "d": 1,
    "l": 0,
    "gf": 7,
    "ga": 2,
    "last5": [
      {
        "date": "1974-06-18",
        "home": "sco",
        "away": "bra",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1982-06-18",
        "home": "bra",
        "away": "sco",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1990-06-20",
        "home": "bra",
        "away": "sco",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-10",
        "home": "bra",
        "away": "sco",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 3,
    "wc_d": 1,
    "wc_l": 0
  },
  "ned-swe": {
    "w": 0,
    "d": 2,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "1974-06-19",
        "home": "ned",
        "away": "swe",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2004-06-26",
        "home": "swe",
        "away": "ned",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "bra-cod": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "1974-06-22",
        "home": "cod",
        "away": "bra",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-hai": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 1,
    "last5": [
      {
        "date": "1974-06-23",
        "home": "arg",
        "away": "hai",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-ned": {
    "w": 1,
    "d": 3,
    "l": 2,
    "gf": 6,
    "ga": 9,
    "last5": [
      {
        "date": "1978-06-25",
        "home": "arg",
        "away": "ned",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-07-04",
        "home": "ned",
        "away": "arg",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2006-06-21",
        "home": "ned",
        "away": "arg",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-07-09",
        "home": "ned",
        "away": "arg",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-09",
        "home": "ned",
        "away": "arg",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 3,
    "wc_l": 2
  },
  "bra-ned": {
    "w": 1,
    "d": 1,
    "l": 3,
    "gf": 5,
    "ga": 10,
    "last5": [
      {
        "date": "1974-07-03",
        "home": "ned",
        "away": "bra",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1994-07-09",
        "home": "ned",
        "away": "bra",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-07-07",
        "home": "bra",
        "away": "ned",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-07-02",
        "home": "ned",
        "away": "bra",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-07-12",
        "home": "bra",
        "away": "ned",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 3
  },
  "ger-ned": {
    "w": 5,
    "d": 4,
    "l": 3,
    "gf": 19,
    "ga": 20,
    "last5": [
      {
        "date": "2012-06-13",
        "home": "ned",
        "away": "ger",
        "score": "1-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-10-13",
        "home": "ned",
        "away": "ger",
        "score": "3-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-19",
        "home": "ger",
        "away": "ned",
        "score": "2-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-09-10",
        "home": "ned",
        "away": "ger",
        "score": "2-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-10-14",
        "home": "ger",
        "away": "ned",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 0
  },
  "mex-tun": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "1978-06-02",
        "home": "mex",
        "away": "tun",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "aut-esp": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1978-06-03",
        "home": "aut",
        "away": "esp",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 3,
    "last5": [
      {
        "date": "1978-06-03",
        "home": "irn",
        "away": "ned",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ger-mex": {
    "w": 4,
    "d": 1,
    "l": 1,
    "gf": 16,
    "ga": 6,
    "last5": [
      {
        "date": "1986-06-21",
        "home": "mex",
        "away": "ger",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-29",
        "home": "ger",
        "away": "mex",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2005-06-29",
        "home": "ger",
        "away": "mex",
        "score": "4-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2017-06-29",
        "home": "ger",
        "away": "mex",
        "score": "4-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2018-06-17",
        "home": "ger",
        "away": "mex",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 1
  },
  "aut-swe": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "1978-06-07",
        "home": "aut",
        "away": "swe",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-sco": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "1978-06-07",
        "home": "irn",
        "away": "sco",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "ger-tun": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "1978-06-10",
        "home": "ger",
        "away": "tun",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2005-06-18",
        "home": "ger",
        "away": "tun",
        "score": "3-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "ned-sco": {
    "w": 1,
    "d": 1,
    "l": 1,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "1978-06-11",
        "home": "ned",
        "away": "sco",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1992-06-12",
        "home": "ned",
        "away": "sco",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1996-06-10",
        "home": "ned",
        "away": "sco",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "aut-ned": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 4,
    "ga": 9,
    "last5": [
      {
        "date": "1978-06-14",
        "home": "aut",
        "away": "ned",
        "score": "1-5",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2021-06-17",
        "home": "ned",
        "away": "aut",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-06-25",
        "home": "ned",
        "away": "aut",
        "score": "2-3",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-esp": {
    "w": 1,
    "d": 1,
    "l": 1,
    "gf": 4,
    "ga": 4,
    "last5": [
      {
        "date": "1980-06-15",
        "home": "bel",
        "away": "esp",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1986-06-22",
        "home": "esp",
        "away": "bel",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1990-06-21",
        "home": "bel",
        "away": "esp",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "kor-qat": {
    "w": 2,
    "d": 0,
    "l": 2,
    "gf": 5,
    "ga": 4,
    "last5": [
      {
        "date": "1980-09-19",
        "home": "qat",
        "away": "kor",
        "score": "0-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1984-12-10",
        "home": "kor",
        "away": "qat",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1988-12-09",
        "home": "qat",
        "away": "kor",
        "score": "2-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-25",
        "home": "kor",
        "away": "qat",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-bel": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "1982-06-13",
        "home": "arg",
        "away": "bel",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1986-06-25",
        "home": "arg",
        "away": "bel",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-07-05",
        "home": "arg",
        "away": "bel",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "nzl-sco": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 5,
    "last5": [
      {
        "date": "1982-06-15",
        "home": "sco",
        "away": "nzl",
        "score": "5-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bra-nzl": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 0,
    "last5": [
      {
        "date": "1982-06-23",
        "home": "bra",
        "away": "nzl",
        "score": "4-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1999-07-30",
        "home": "nzl",
        "away": "bra",
        "score": "0-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-por": {
    "w": 5,
    "d": 1,
    "l": 2,
    "gf": 16,
    "ga": 10,
    "last5": [
      {
        "date": "2008-06-19",
        "home": "por",
        "away": "ger",
        "score": "2-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2012-06-09",
        "home": "ger",
        "away": "por",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2014-06-16",
        "home": "ger",
        "away": "por",
        "score": "4-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2021-06-19",
        "home": "ger",
        "away": "por",
        "score": "4-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2025-06-04",
        "home": "ger",
        "away": "por",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-por": {
    "w": 2,
    "d": 5,
    "l": 1,
    "gf": 9,
    "ga": 8,
    "last5": [
      {
        "date": "2012-06-27",
        "home": "por",
        "away": "esp",
        "score": "0-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-06-15",
        "home": "por",
        "away": "esp",
        "score": "3-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-06-02",
        "home": "esp",
        "away": "por",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-27",
        "home": "por",
        "away": "esp",
        "score": "0-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2025-06-08",
        "home": "por",
        "away": "esp",
        "score": "2-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "fra-por": {
    "w": 4,
    "d": 3,
    "l": 1,
    "gf": 9,
    "ga": 6,
    "last5": [
      {
        "date": "2016-07-10",
        "home": "fra",
        "away": "por",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2020-10-11",
        "home": "fra",
        "away": "por",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-14",
        "home": "por",
        "away": "fra",
        "score": "0-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2021-06-23",
        "home": "por",
        "away": "fra",
        "score": "2-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-07-05",
        "home": "por",
        "away": "fra",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-fra": {
    "w": 3,
    "d": 1,
    "l": 4,
    "gf": 13,
    "ga": 15,
    "last5": [
      {
        "date": "2006-06-27",
        "home": "esp",
        "away": "fra",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2012-06-23",
        "home": "esp",
        "away": "fra",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-10-10",
        "home": "esp",
        "away": "fra",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-07-09",
        "home": "esp",
        "away": "fra",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2025-06-05",
        "home": "esp",
        "away": "fra",
        "score": "5-4",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "kor-ksa": {
    "w": 0,
    "d": 4,
    "l": 1,
    "gf": 4,
    "ga": 5,
    "last5": [
      {
        "date": "1984-12-02",
        "home": "ksa",
        "away": "kor",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1988-12-18",
        "home": "kor",
        "away": "ksa",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-26",
        "home": "kor",
        "away": "ksa",
        "score": "1-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-11",
        "home": "kor",
        "away": "ksa",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-01-30",
        "home": "ksa",
        "away": "kor",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ksa-qat": {
    "w": 0,
    "d": 3,
    "l": 1,
    "gf": 2,
    "ga": 4,
    "last5": [
      {
        "date": "1984-12-08",
        "home": "qat",
        "away": "ksa",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1992-10-31",
        "home": "ksa",
        "away": "qat",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-17",
        "home": "ksa",
        "away": "qat",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-17",
        "home": "ksa",
        "away": "qat",
        "score": "0-2",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-ksa": {
    "w": 1,
    "d": 2,
    "l": 1,
    "gf": 4,
    "ga": 2,
    "last5": [
      {
        "date": "1984-12-13",
        "home": "ksa",
        "away": "irn",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1988-12-15",
        "home": "ksa",
        "away": "irn",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1996-12-11",
        "home": "ksa",
        "away": "irn",
        "score": "0-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1996-12-19",
        "home": "irn",
        "away": "ksa",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "can-fra": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1986-06-01",
        "home": "can",
        "away": "fra",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "arg-kor": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 7,
    "ga": 2,
    "last5": [
      {
        "date": "1986-06-02",
        "home": "arg",
        "away": "kor",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-17",
        "home": "arg",
        "away": "kor",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-par": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1986-06-04",
        "home": "par",
        "away": "irq",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "eng-mar": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "1986-06-06",
        "home": "eng",
        "away": "mar",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "mex-par": {
    "w": 1,
    "d": 2,
    "l": 1,
    "gf": 8,
    "ga": 3,
    "last5": [
      {
        "date": "1986-06-07",
        "home": "mex",
        "away": "par",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1995-07-06",
        "home": "mex",
        "away": "par",
        "score": "1-2",
        "tourn": "Copa América"
      },
      {
        "date": "2001-07-15",
        "home": "par",
        "away": "mex",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "2007-07-08",
        "home": "mex",
        "away": "par",
        "score": "6-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "ger-sco": {
    "w": 3,
    "d": 0,
    "l": 0,
    "gf": 9,
    "ga": 2,
    "last5": [
      {
        "date": "1986-06-08",
        "home": "ger",
        "away": "sco",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1992-06-15",
        "home": "sco",
        "away": "ger",
        "score": "0-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-06-14",
        "home": "ger",
        "away": "sco",
        "score": "5-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-irq": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1986-06-08",
        "home": "irq",
        "away": "bel",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-mex": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1986-06-11",
        "home": "mex",
        "away": "irq",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "mar-por": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 2,
    "last5": [
      {
        "date": "1986-06-11",
        "home": "por",
        "away": "mar",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-20",
        "home": "por",
        "away": "mar",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-10",
        "home": "mar",
        "away": "por",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "eng-par": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 0,
    "last5": [
      {
        "date": "1986-06-18",
        "home": "eng",
        "away": "par",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2006-06-10",
        "home": "eng",
        "away": "par",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-ned": {
    "w": 2,
    "d": 1,
    "l": 2,
    "gf": 8,
    "ga": 8,
    "last5": [
      {
        "date": "1988-06-15",
        "home": "eng",
        "away": "ned",
        "score": "1-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1990-06-16",
        "home": "eng",
        "away": "ned",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1996-06-18",
        "home": "eng",
        "away": "ned",
        "score": "4-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2019-06-06",
        "home": "eng",
        "away": "ned",
        "score": "1-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-07-10",
        "home": "ned",
        "away": "eng",
        "score": "1-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "irn-qat": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 5,
    "ga": 3,
    "last5": [
      {
        "date": "1988-12-02",
        "home": "qat",
        "away": "irn",
        "score": "0-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-15",
        "home": "qat",
        "away": "irn",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-02-07",
        "home": "qat",
        "away": "irn",
        "score": "3-2",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-jpn": {
    "w": 1,
    "d": 2,
    "l": 2,
    "gf": 2,
    "ga": 5,
    "last5": [
      {
        "date": "1988-12-04",
        "home": "jpn",
        "away": "irn",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "1992-11-03",
        "home": "jpn",
        "away": "irn",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2004-07-28",
        "home": "jpn",
        "away": "irn",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-28",
        "home": "irn",
        "away": "jpn",
        "score": "0-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-02-03",
        "home": "irn",
        "away": "jpn",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-kor": {
    "w": 0,
    "d": 2,
    "l": 1,
    "gf": 2,
    "ga": 4,
    "last5": [
      {
        "date": "1988-12-06",
        "home": "kor",
        "away": "jpn",
        "score": "2-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-28",
        "home": "kor",
        "away": "jpn",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-25",
        "home": "jpn",
        "away": "kor",
        "score": "2-2",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-qat": {
    "w": 1,
    "d": 2,
    "l": 2,
    "gf": 6,
    "ga": 10,
    "last5": [
      {
        "date": "1988-12-12",
        "home": "qat",
        "away": "jpn",
        "score": "3-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-20",
        "home": "jpn",
        "away": "qat",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-09",
        "home": "jpn",
        "away": "qat",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-21",
        "home": "qat",
        "away": "jpn",
        "score": "2-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-02-01",
        "home": "jpn",
        "away": "qat",
        "score": "1-3",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-kor": {
    "w": 2,
    "d": 1,
    "l": 0,
    "gf": 4,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-12",
        "home": "bel",
        "away": "kor",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-25",
        "home": "bel",
        "away": "kor",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-26",
        "home": "kor",
        "away": "bel",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 0
  },
  "egy-ned": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-12",
        "home": "ned",
        "away": "egy",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "sco-swe": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-16",
        "home": "swe",
        "away": "sco",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-uru": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-17",
        "home": "bel",
        "away": "uru",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-kor": {
    "w": 1,
    "d": 2,
    "l": 0,
    "gf": 5,
    "ga": 3,
    "last5": [
      {
        "date": "1990-06-17",
        "home": "kor",
        "away": "esp",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1994-06-17",
        "home": "esp",
        "away": "kor",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-22",
        "home": "kor",
        "away": "esp",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 0
  },
  "aut-usa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-19",
        "home": "aut",
        "away": "usa",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-ger": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-19",
        "home": "ger",
        "away": "col",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "egy-eng": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1990-06-21",
        "home": "eng",
        "away": "egy",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "kor-uru": {
    "w": 0,
    "d": 1,
    "l": 2,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "1990-06-21",
        "home": "kor",
        "away": "uru",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-26",
        "home": "uru",
        "away": "kor",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-24",
        "home": "uru",
        "away": "kor",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 2
  },
  "fra-swe": {
    "w": 2,
    "d": 1,
    "l": 1,
    "gf": 6,
    "ga": 5,
    "last5": [
      {
        "date": "1992-06-10",
        "home": "swe",
        "away": "fra",
        "score": "1-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2012-06-19",
        "home": "swe",
        "away": "fra",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2020-09-05",
        "home": "swe",
        "away": "fra",
        "score": "0-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-17",
        "home": "fra",
        "away": "swe",
        "score": "4-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-swe": {
    "w": 2,
    "d": 2,
    "l": 1,
    "gf": 9,
    "ga": 7,
    "last5": [
      {
        "date": "1992-06-17",
        "home": "swe",
        "away": "eng",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2002-06-02",
        "home": "eng",
        "away": "swe",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2006-06-20",
        "home": "swe",
        "away": "eng",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2012-06-15",
        "home": "swe",
        "away": "eng",
        "score": "2-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-07-07",
        "home": "swe",
        "away": "eng",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 0
  },
  "ksa-usa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "1992-10-15",
        "home": "ksa",
        "away": "usa",
        "score": "3-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1999-08-03",
        "home": "usa",
        "away": "ksa",
        "score": "2-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-civ": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 1,
    "last5": [
      {
        "date": "1992-10-16",
        "home": "arg",
        "away": "civ",
        "score": "4-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-10",
        "home": "arg",
        "away": "civ",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "civ-usa": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 5,
    "last5": [
      {
        "date": "1992-10-19",
        "home": "usa",
        "away": "civ",
        "score": "5-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-ksa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "1992-10-20",
        "home": "ksa",
        "away": "arg",
        "score": "1-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2022-11-22",
        "home": "arg",
        "away": "ksa",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "jpn-ksa": {
    "w": 5,
    "d": 0,
    "l": 1,
    "gf": 14,
    "ga": 4,
    "last5": [
      {
        "date": "2000-10-14",
        "home": "ksa",
        "away": "jpn",
        "score": "1-4",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-29",
        "home": "jpn",
        "away": "ksa",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-25",
        "home": "jpn",
        "away": "ksa",
        "score": "2-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-17",
        "home": "ksa",
        "away": "jpn",
        "score": "0-5",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-21",
        "home": "jpn",
        "away": "ksa",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-mex": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "1993-06-16",
        "home": "col",
        "away": "mex",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "1997-06-13",
        "home": "mex",
        "away": "col",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2001-07-29",
        "home": "col",
        "away": "mex",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "uru-usa": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1993-06-16",
        "home": "uru",
        "away": "usa",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2024-07-01",
        "home": "usa",
        "away": "uru",
        "score": "0-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-usa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "1993-06-19",
        "home": "ecu",
        "away": "usa",
        "score": "2-0",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-16",
        "home": "usa",
        "away": "ecu",
        "score": "2-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-mex": {
    "w": 1,
    "d": 2,
    "l": 4,
    "gf": 6,
    "ga": 10,
    "last5": [
      {
        "date": "2002-06-09",
        "home": "mex",
        "away": "ecu",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2004-07-13",
        "home": "mex",
        "away": "ecu",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2007-07-01",
        "home": "mex",
        "away": "ecu",
        "score": "2-1",
        "tourn": "Copa América"
      },
      {
        "date": "2015-06-19",
        "home": "mex",
        "away": "ecu",
        "score": "1-2",
        "tourn": "Copa América"
      },
      {
        "date": "2024-06-30",
        "home": "mex",
        "away": "ecu",
        "score": "0-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "sui-usa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "1994-06-18",
        "home": "usa",
        "away": "sui",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "bel-mar": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1994-06-19",
        "home": "bel",
        "away": "mar",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-27",
        "home": "bel",
        "away": "mar",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "mex-nor": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1994-06-19",
        "home": "nor",
        "away": "mex",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ksa-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1994-06-20",
        "home": "ned",
        "away": "ksa",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "col-usa": {
    "w": 4,
    "d": 0,
    "l": 1,
    "gf": 9,
    "ga": 3,
    "last5": [
      {
        "date": "1994-06-22",
        "home": "usa",
        "away": "col",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1995-07-22",
        "home": "col",
        "away": "usa",
        "score": "4-1",
        "tourn": "Copa América"
      },
      {
        "date": "2007-07-05",
        "home": "col",
        "away": "usa",
        "score": "1-0",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-03",
        "home": "usa",
        "away": "col",
        "score": "0-2",
        "tourn": "Copa América"
      },
      {
        "date": "2016-06-25",
        "home": "usa",
        "away": "col",
        "score": "0-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-ned": {
    "w": 1,
    "d": 1,
    "l": 2,
    "gf": 2,
    "ga": 5,
    "last5": [
      {
        "date": "1994-06-25",
        "home": "bel",
        "away": "ned",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1998-06-13",
        "home": "ned",
        "away": "bel",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-06-03",
        "home": "bel",
        "away": "ned",
        "score": "1-4",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-25",
        "home": "ned",
        "away": "bel",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "ksa-mar": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1994-06-25",
        "home": "ksa",
        "away": "mar",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-sui": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1994-06-26",
        "home": "sui",
        "away": "col",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-kor": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 4,
    "last5": [
      {
        "date": "1994-06-27",
        "home": "ger",
        "away": "kor",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-25",
        "home": "kor",
        "away": "ger",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-27",
        "home": "kor",
        "away": "ger",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-ksa": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1994-06-29",
        "home": "bel",
        "away": "ksa",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "mar-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1994-06-29",
        "home": "mar",
        "away": "ned",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ksa-swe": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "1994-07-03",
        "home": "ksa",
        "away": "swe",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bra-usa": {
    "w": 6,
    "d": 0,
    "l": 0,
    "gf": 10,
    "ga": 2,
    "last5": [
      {
        "date": "1995-07-20",
        "home": "usa",
        "away": "bra",
        "score": "0-1",
        "tourn": "Copa América"
      },
      {
        "date": "1999-07-28",
        "home": "bra",
        "away": "usa",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2003-06-21",
        "home": "bra",
        "away": "usa",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2009-06-18",
        "home": "usa",
        "away": "bra",
        "score": "0-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2009-06-28",
        "home": "usa",
        "away": "bra",
        "score": "2-3",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ksa-mex": {
    "w": 0,
    "d": 0,
    "l": 4,
    "gf": 2,
    "ga": 14,
    "last5": [
      {
        "date": "1995-01-06",
        "home": "ksa",
        "away": "mex",
        "score": "0-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1997-12-14",
        "home": "ksa",
        "away": "mex",
        "score": "0-5",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1999-07-25",
        "home": "mex",
        "away": "ksa",
        "score": "5-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2022-11-30",
        "home": "ksa",
        "away": "mex",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "arg-jpn": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 1,
    "last5": [
      {
        "date": "1995-01-08",
        "home": "jpn",
        "away": "arg",
        "score": "1-5",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1998-06-14",
        "home": "arg",
        "away": "jpn",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "mex-usa": {
    "w": 1,
    "d": 1,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1995-07-17",
        "home": "usa",
        "away": "mex",
        "score": "0-0",
        "tourn": "Copa América"
      },
      {
        "date": "1999-08-01",
        "home": "mex",
        "away": "usa",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2002-06-17",
        "home": "mex",
        "away": "usa",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "cze-ger": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 5,
    "last5": [
      {
        "date": "1996-06-09",
        "home": "ger",
        "away": "cze",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1996-06-30",
        "home": "cze",
        "away": "ger",
        "score": "1-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2004-06-23",
        "home": "ger",
        "away": "cze",
        "score": "1-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-tur": {
    "w": 2,
    "d": 1,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "1996-06-11",
        "home": "tur",
        "away": "cro",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2008-06-20",
        "home": "cro",
        "away": "tur",
        "score": "1-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2016-06-12",
        "home": "tur",
        "away": "cro",
        "score": "0-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "por-tur": {
    "w": 4,
    "d": 0,
    "l": 0,
    "gf": 8,
    "ga": 0,
    "last5": [
      {
        "date": "1996-06-14",
        "home": "por",
        "away": "tur",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2000-06-24",
        "home": "tur",
        "away": "por",
        "score": "0-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2008-06-07",
        "home": "por",
        "away": "tur",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-06-22",
        "home": "tur",
        "away": "por",
        "score": "0-3",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-sco": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1996-06-15",
        "home": "eng",
        "away": "sco",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-06-18",
        "home": "eng",
        "away": "sco",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "sco-sui": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1996-06-18",
        "home": "sco",
        "away": "sui",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-06-19",
        "home": "sco",
        "away": "sui",
        "score": "1-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-por": {
    "w": 0,
    "d": 1,
    "l": 5,
    "gf": 5,
    "ga": 14,
    "last5": [
      {
        "date": "2016-06-25",
        "home": "cro",
        "away": "por",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2020-09-05",
        "home": "por",
        "away": "cro",
        "score": "4-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-17",
        "home": "cro",
        "away": "por",
        "score": "2-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-09-05",
        "home": "por",
        "away": "cro",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-11-18",
        "home": "cro",
        "away": "por",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-ned": {
    "w": 1,
    "d": 2,
    "l": 3,
    "gf": 5,
    "ga": 10,
    "last5": [
      {
        "date": "2000-06-21",
        "home": "ned",
        "away": "fra",
        "score": "3-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2008-06-13",
        "home": "ned",
        "away": "fra",
        "score": "4-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-09-09",
        "home": "fra",
        "away": "ned",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-16",
        "home": "ned",
        "away": "fra",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-06-21",
        "home": "ned",
        "away": "fra",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-por": {
    "w": 1,
    "d": 0,
    "l": 5,
    "gf": 3,
    "ga": 12,
    "last5": [
      {
        "date": "2008-06-11",
        "home": "cze",
        "away": "por",
        "score": "1-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2012-06-21",
        "home": "cze",
        "away": "por",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-06-09",
        "home": "por",
        "away": "cze",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-24",
        "home": "cze",
        "away": "por",
        "score": "0-4",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-06-18",
        "home": "por",
        "away": "cze",
        "score": "2-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-ger": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 6,
    "ga": 3,
    "last5": [
      {
        "date": "1996-06-23",
        "home": "ger",
        "away": "cro",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "1998-07-04",
        "home": "ger",
        "away": "cro",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2008-06-12",
        "home": "cro",
        "away": "ger",
        "score": "2-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-fra": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1996-06-26",
        "home": "fra",
        "away": "cze",
        "score": "0-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2000-06-16",
        "home": "cze",
        "away": "fra",
        "score": "1-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-ksa": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "1996-12-08",
        "home": "ksa",
        "away": "irq",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2004-07-26",
        "home": "ksa",
        "away": "irq",
        "score": "1-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-29",
        "home": "irq",
        "away": "ksa",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-uzb": {
    "w": 3,
    "d": 0,
    "l": 0,
    "gf": 14,
    "ga": 2,
    "last5": [
      {
        "date": "1996-12-09",
        "home": "jpn",
        "away": "uzb",
        "score": "4-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2000-10-17",
        "home": "jpn",
        "away": "uzb",
        "score": "8-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-17",
        "home": "jpn",
        "away": "uzb",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-mex": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 1,
    "last5": [
      {
        "date": "1997-12-12",
        "home": "mex",
        "away": "aus",
        "score": "1-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2001-05-30",
        "home": "mex",
        "away": "aus",
        "score": "0-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-ksa": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 11,
    "ga": 2,
    "last5": [
      {
        "date": "1997-12-12",
        "home": "ksa",
        "away": "bra",
        "score": "0-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1999-08-01",
        "home": "bra",
        "away": "ksa",
        "score": "8-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-rsa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1997-12-13",
        "home": "rsa",
        "away": "cze",
        "score": "2-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-bra": {
    "w": 1,
    "d": 1,
    "l": 2,
    "gf": 1,
    "ga": 8,
    "last5": [
      {
        "date": "1997-12-14",
        "home": "aus",
        "away": "bra",
        "score": "0-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1997-12-21",
        "home": "bra",
        "away": "aus",
        "score": "6-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2001-06-09",
        "home": "aus",
        "away": "bra",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-18",
        "home": "bra",
        "away": "aus",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "cze-uru": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1997-12-15",
        "home": "cze",
        "away": "uru",
        "score": "1-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "1997-12-21",
        "home": "cze",
        "away": "uru",
        "score": "1-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-ksa": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "1997-12-16",
        "home": "ksa",
        "away": "aus",
        "score": "1-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "rsa-uru": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 7,
    "last5": [
      {
        "date": "1997-12-17",
        "home": "uru",
        "away": "rsa",
        "score": "4-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2010-06-16",
        "home": "rsa",
        "away": "uru",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bra-cze": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1997-12-19",
        "home": "bra",
        "away": "cze",
        "score": "2-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-uru": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "1997-12-19",
        "home": "uru",
        "away": "aus",
        "score": "0-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "mar-nor": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1998-06-10",
        "home": "mar",
        "away": "nor",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "fra-rsa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 2,
    "last5": [
      {
        "date": "1998-06-12",
        "home": "fra",
        "away": "rsa",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-22",
        "home": "rsa",
        "away": "fra",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "kor-mex": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 4,
    "ga": 6,
    "last5": [
      {
        "date": "1998-06-13",
        "home": "kor",
        "away": "mex",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2001-06-01",
        "home": "kor",
        "away": "mex",
        "score": "2-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2018-06-23",
        "home": "kor",
        "away": "mex",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "eng-tun": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 1,
    "last5": [
      {
        "date": "1998-06-15",
        "home": "eng",
        "away": "tun",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-18",
        "home": "tun",
        "away": "eng",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-usa": {
    "w": 3,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 2,
    "last5": [
      {
        "date": "1998-06-15",
        "home": "ger",
        "away": "usa",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "1999-07-30",
        "home": "usa",
        "away": "ger",
        "score": "2-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2002-06-21",
        "home": "ger",
        "away": "usa",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-26",
        "home": "usa",
        "away": "ger",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 3,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-mar": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "1998-06-16",
        "home": "bra",
        "away": "mar",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "nor-sco": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "1998-06-16",
        "home": "sco",
        "away": "nor",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "fra-ksa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 0,
    "last5": [
      {
        "date": "1998-06-18",
        "home": "fra",
        "away": "ksa",
        "score": "4-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-par": {
    "w": 2,
    "d": 1,
    "l": 0,
    "gf": 4,
    "ga": 1,
    "last5": [
      {
        "date": "1998-06-19",
        "home": "esp",
        "away": "par",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-07",
        "home": "esp",
        "away": "par",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-07-03",
        "home": "par",
        "away": "esp",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 0
  },
  "cro-jpn": {
    "w": 1,
    "d": 2,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "1998-06-20",
        "home": "jpn",
        "away": "cro",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2006-06-18",
        "home": "jpn",
        "away": "cro",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-05",
        "home": "jpn",
        "away": "cro",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 2,
    "wc_l": 0
  },
  "kor-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 5,
    "last5": [
      {
        "date": "1998-06-20",
        "home": "ned",
        "away": "kor",
        "score": "5-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "irn-usa": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1998-06-21",
        "home": "usa",
        "away": "irn",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-29",
        "home": "irn",
        "away": "usa",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "col-tun": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "1998-06-22",
        "home": "col",
        "away": "tun",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-nor": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1998-06-23",
        "home": "bra",
        "away": "nor",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "mar-sco": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "1998-06-23",
        "home": "sco",
        "away": "mar",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ksa-rsa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1998-06-24",
        "home": "rsa",
        "away": "ksa",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "ger-irn": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1998-06-25",
        "home": "ger",
        "away": "irn",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "mex-ned": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 3,
    "ga": 4,
    "last5": [
      {
        "date": "1998-06-25",
        "home": "ned",
        "away": "mex",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-29",
        "home": "ned",
        "away": "mex",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "arg-cro": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "1998-06-26",
        "home": "arg",
        "away": "cro",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-21",
        "home": "arg",
        "away": "cro",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-13",
        "home": "arg",
        "away": "cro",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "col-eng": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "1998-06-26",
        "home": "col",
        "away": "eng",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-07-03",
        "home": "col",
        "away": "eng",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "cro-fra": {
    "w": 2,
    "d": 2,
    "l": 5,
    "gf": 12,
    "ga": 17,
    "last5": [
      {
        "date": "2020-10-14",
        "home": "cro",
        "away": "fra",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-06-06",
        "home": "cro",
        "away": "fra",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-06-13",
        "home": "fra",
        "away": "cro",
        "score": "0-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2025-03-20",
        "home": "cro",
        "away": "fra",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2025-03-23",
        "home": "fra",
        "away": "cro",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "cro-ned": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 3,
    "last5": [
      {
        "date": "1998-07-11",
        "home": "ned",
        "away": "cro",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2023-06-14",
        "home": "ned",
        "away": "cro",
        "score": "2-4",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-par": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 0,
    "ga": 4,
    "last5": [
      {
        "date": "1999-07-02",
        "home": "par",
        "away": "jpn",
        "score": "4-0",
        "tourn": "Copa América"
      },
      {
        "date": "2010-06-29",
        "home": "par",
        "away": "jpn",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "bra-ger": {
    "w": 3,
    "d": 0,
    "l": 1,
    "gf": 10,
    "ga": 9,
    "last5": [
      {
        "date": "1999-07-24",
        "home": "bra",
        "away": "ger",
        "score": "4-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2002-06-30",
        "home": "ger",
        "away": "bra",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2005-06-25",
        "home": "ger",
        "away": "bra",
        "score": "2-3",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2014-07-08",
        "home": "bra",
        "away": "ger",
        "score": "1-7",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "nzl-usa": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "1999-07-24",
        "home": "nzl",
        "away": "usa",
        "score": "1-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "egy-mex": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "1999-07-27",
        "home": "mex",
        "away": "egy",
        "score": "2-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-nzl": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "1999-07-28",
        "home": "ger",
        "away": "nzl",
        "score": "2-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "egy-ksa": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 2,
    "ga": 7,
    "last5": [
      {
        "date": "1999-07-29",
        "home": "egy",
        "away": "ksa",
        "score": "1-5",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2018-06-25",
        "home": "ksa",
        "away": "egy",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-swe": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2000-06-10",
        "home": "bel",
        "away": "swe",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2016-06-22",
        "home": "swe",
        "away": "bel",
        "score": "0-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-ned": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 5,
    "ga": 3,
    "last5": [
      {
        "date": "2000-06-11",
        "home": "ned",
        "away": "cze",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2004-06-19",
        "home": "ned",
        "away": "cze",
        "score": "2-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-06-27",
        "home": "ned",
        "away": "cze",
        "score": "0-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-nor": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2000-06-13",
        "home": "esp",
        "away": "nor",
        "score": "0-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "swe-tur": {
    "w": 1,
    "d": 1,
    "l": 1,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "2000-06-15",
        "home": "swe",
        "away": "tur",
        "score": "0-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-09-10",
        "home": "swe",
        "away": "tur",
        "score": "2-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-17",
        "home": "tur",
        "away": "swe",
        "score": "0-1",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-tur": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 2,
    "last5": [
      {
        "date": "2000-06-19",
        "home": "bel",
        "away": "tur",
        "score": "0-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "qat-uzb": {
    "w": 0,
    "d": 2,
    "l": 1,
    "gf": 2,
    "ga": 4,
    "last5": [
      {
        "date": "2000-10-14",
        "home": "qat",
        "away": "uzb",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-07",
        "home": "qat",
        "away": "uzb",
        "score": "0-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-02-03",
        "home": "qat",
        "away": "uzb",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ksa-uzb": {
    "w": 2,
    "d": 0,
    "l": 2,
    "gf": 8,
    "ga": 5,
    "last5": [
      {
        "date": "2000-10-20",
        "home": "ksa",
        "away": "uzb",
        "score": "5-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2004-07-22",
        "home": "uzb",
        "away": "ksa",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2007-07-22",
        "home": "ksa",
        "away": "uzb",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-18",
        "home": "uzb",
        "away": "ksa",
        "score": "3-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-jpn": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 6,
    "last5": [
      {
        "date": "2000-10-24",
        "home": "jpn",
        "away": "irq",
        "score": "4-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-16",
        "home": "irq",
        "away": "jpn",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-01-19",
        "home": "irq",
        "away": "jpn",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-kor": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 6,
    "ga": 1,
    "last5": [
      {
        "date": "2001-05-30",
        "home": "kor",
        "away": "fra",
        "score": "0-5",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-18",
        "home": "fra",
        "away": "kor",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "can-jpn": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 3,
    "last5": [
      {
        "date": "2001-05-31",
        "home": "jpn",
        "away": "can",
        "score": "3-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-fra": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 6,
    "last5": [
      {
        "date": "2001-06-01",
        "home": "aus",
        "away": "fra",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2018-06-16",
        "home": "fra",
        "away": "aus",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-22",
        "home": "fra",
        "away": "aus",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "bra-can": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2001-06-02",
        "home": "can",
        "away": "bra",
        "score": "0-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-kor": {
    "w": 1,
    "d": 1,
    "l": 3,
    "gf": 4,
    "ga": 6,
    "last5": [
      {
        "date": "2001-06-03",
        "home": "kor",
        "away": "aus",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2011-01-14",
        "home": "aus",
        "away": "kor",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-17",
        "home": "aus",
        "away": "kor",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-31",
        "home": "aus",
        "away": "kor",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-02-02",
        "home": "aus",
        "away": "kor",
        "score": "1-2",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-jpn": {
    "w": 2,
    "d": 2,
    "l": 0,
    "gf": 9,
    "ga": 3,
    "last5": [
      {
        "date": "2001-06-04",
        "home": "jpn",
        "away": "bra",
        "score": "0-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2005-06-22",
        "home": "jpn",
        "away": "bra",
        "score": "2-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-22",
        "home": "jpn",
        "away": "bra",
        "score": "1-4",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2013-06-15",
        "home": "bra",
        "away": "jpn",
        "score": "3-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-jpn": {
    "w": 1,
    "d": 1,
    "l": 2,
    "gf": 4,
    "ga": 4,
    "last5": [
      {
        "date": "2001-06-07",
        "home": "jpn",
        "away": "aus",
        "score": "1-0",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2006-06-12",
        "home": "aus",
        "away": "jpn",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2007-07-21",
        "home": "jpn",
        "away": "aus",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-29",
        "home": "aus",
        "away": "jpn",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-jpn": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2001-06-10",
        "home": "jpn",
        "away": "fra",
        "score": "0-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2003-06-20",
        "home": "fra",
        "away": "jpn",
        "score": "2-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-sen": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2002-05-31",
        "home": "fra",
        "away": "sen",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ger-ksa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 8,
    "ga": 0,
    "last5": [
      {
        "date": "2002-06-01",
        "home": "ger",
        "away": "ksa",
        "score": "8-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "par-rsa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2002-06-02",
        "home": "par",
        "away": "rsa",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "bra-tur": {
    "w": 2,
    "d": 1,
    "l": 0,
    "gf": 5,
    "ga": 3,
    "last5": [
      {
        "date": "2002-06-03",
        "home": "bra",
        "away": "tur",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2002-06-26",
        "home": "bra",
        "away": "tur",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2003-06-23",
        "home": "bra",
        "away": "tur",
        "score": "2-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-mex": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 1,
    "ga": 4,
    "last5": [
      {
        "date": "2002-06-03",
        "home": "cro",
        "away": "mex",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-23",
        "home": "cro",
        "away": "mex",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "bel-jpn": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 5,
    "ga": 4,
    "last5": [
      {
        "date": "2002-06-04",
        "home": "jpn",
        "away": "bel",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-07-02",
        "home": "bel",
        "away": "jpn",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "por-usa": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 4,
    "ga": 5,
    "last5": [
      {
        "date": "2002-06-05",
        "home": "usa",
        "away": "por",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-22",
        "home": "usa",
        "away": "por",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "kor-usa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "2002-06-10",
        "home": "kor",
        "away": "usa",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "bel-tun": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 6,
    "ga": 3,
    "last5": [
      {
        "date": "2002-06-10",
        "home": "tun",
        "away": "bel",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-23",
        "home": "bel",
        "away": "tun",
        "score": "5-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "sen-uru": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "2002-06-11",
        "home": "sen",
        "away": "uru",
        "score": "3-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "esp-rsa": {
    "w": 3,
    "d": 0,
    "l": 0,
    "gf": 8,
    "ga": 4,
    "last5": [
      {
        "date": "2002-06-12",
        "home": "rsa",
        "away": "esp",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2009-06-20",
        "home": "rsa",
        "away": "esp",
        "score": "0-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2009-06-28",
        "home": "rsa",
        "away": "esp",
        "score": "2-3",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-ecu": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2002-06-13",
        "home": "ecu",
        "away": "cro",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "jpn-tun": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "2002-06-14",
        "home": "jpn",
        "away": "tun",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "kor-por": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2002-06-14",
        "home": "kor",
        "away": "por",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-02",
        "home": "kor",
        "away": "por",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-par": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2002-06-15",
        "home": "ger",
        "away": "par",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "sen-swe": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2002-06-16",
        "home": "swe",
        "away": "sen",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-bra": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 3,
    "last5": [
      {
        "date": "2002-06-17",
        "home": "bra",
        "away": "bel",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-07-06",
        "home": "bra",
        "away": "bel",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "jpn-tur": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2002-06-18",
        "home": "jpn",
        "away": "tur",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "sen-tur": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2002-06-22",
        "home": "sen",
        "away": "tur",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "col-fra": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2003-06-18",
        "home": "fra",
        "away": "col",
        "score": "1-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-nzl": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "2003-06-18",
        "home": "nzl",
        "away": "jpn",
        "score": "0-3",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "tur-usa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2003-06-19",
        "home": "tur",
        "away": "usa",
        "score": "2-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-nzl": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2003-06-20",
        "home": "col",
        "away": "nzl",
        "score": "3-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-nzl": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 0,
    "last5": [
      {
        "date": "2003-06-22",
        "home": "fra",
        "away": "nzl",
        "score": "5-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-jpn": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 6,
    "ga": 3,
    "last5": [
      {
        "date": "2003-06-22",
        "home": "jpn",
        "away": "col",
        "score": "0-1",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2014-06-24",
        "home": "jpn",
        "away": "col",
        "score": "1-4",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-19",
        "home": "col",
        "away": "jpn",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "fra-tur": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "2003-06-26",
        "home": "fra",
        "away": "tur",
        "score": "3-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-tur": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2003-06-28",
        "home": "col",
        "away": "tur",
        "score": "1-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-sui": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2004-06-13",
        "home": "sui",
        "away": "cro",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-eng": {
    "w": 1,
    "d": 1,
    "l": 3,
    "gf": 5,
    "ga": 8,
    "last5": [
      {
        "date": "2004-06-21",
        "home": "cro",
        "away": "eng",
        "score": "2-4",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2018-07-11",
        "home": "cro",
        "away": "eng",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-10-12",
        "home": "cro",
        "away": "eng",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-18",
        "home": "eng",
        "away": "cro",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2021-06-13",
        "home": "eng",
        "away": "cro",
        "score": "1-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-sui": {
    "w": 2,
    "d": 3,
    "l": 0,
    "gf": 11,
    "ga": 6,
    "last5": [
      {
        "date": "2004-06-21",
        "home": "sui",
        "away": "fra",
        "score": "1-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2006-06-13",
        "home": "fra",
        "away": "sui",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-20",
        "home": "sui",
        "away": "fra",
        "score": "2-5",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2016-06-19",
        "home": "fra",
        "away": "sui",
        "score": "0-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-06-28",
        "home": "fra",
        "away": "sui",
        "score": "3-3",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "ned-por": {
    "w": 0,
    "d": 0,
    "l": 4,
    "gf": 2,
    "ga": 6,
    "last5": [
      {
        "date": "2004-06-30",
        "home": "por",
        "away": "ned",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2006-06-25",
        "home": "por",
        "away": "ned",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2012-06-17",
        "home": "por",
        "away": "ned",
        "score": "2-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2019-06-09",
        "home": "por",
        "away": "ned",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "irq-uzb": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2004-07-18",
        "home": "irq",
        "away": "uzb",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jor-kor": {
    "w": 1,
    "d": 2,
    "l": 0,
    "gf": 4,
    "ga": 2,
    "last5": [
      {
        "date": "2004-07-19",
        "home": "kor",
        "away": "jor",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-01-20",
        "home": "jor",
        "away": "kor",
        "score": "2-2",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-02-06",
        "home": "jor",
        "away": "kor",
        "score": "2-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jor-jpn": {
    "w": 0,
    "d": 2,
    "l": 1,
    "gf": 2,
    "ga": 4,
    "last5": [
      {
        "date": "2004-07-31",
        "home": "jpn",
        "away": "jor",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-09",
        "home": "jpn",
        "away": "jor",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-20",
        "home": "jpn",
        "away": "jor",
        "score": "2-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-tun": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2005-06-15",
        "home": "arg",
        "away": "tun",
        "score": "2-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-mex": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 2,
    "ga": 4,
    "last5": [
      {
        "date": "2005-06-16",
        "home": "jpn",
        "away": "mex",
        "score": "1-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2013-06-22",
        "home": "jpn",
        "away": "mex",
        "score": "1-2",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-aus": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 3,
    "last5": [
      {
        "date": "2005-06-18",
        "home": "aus",
        "away": "arg",
        "score": "2-4",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2022-12-03",
        "home": "arg",
        "away": "aus",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-tun": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2005-06-21",
        "home": "aus",
        "away": "tun",
        "score": "0-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2022-11-26",
        "home": "tun",
        "away": "aus",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-mex": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "2006-06-11",
        "home": "mex",
        "away": "irn",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "cze-usa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "2006-06-12",
        "home": "usa",
        "away": "cze",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-cro": {
    "w": 2,
    "d": 1,
    "l": 0,
    "gf": 5,
    "ga": 2,
    "last5": [
      {
        "date": "2006-06-13",
        "home": "bra",
        "away": "cro",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-12",
        "home": "bra",
        "away": "cro",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-09",
        "home": "cro",
        "away": "bra",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 1,
    "wc_l": 0
  },
  "ksa-tun": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2006-06-14",
        "home": "tun",
        "away": "ksa",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "civ-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2006-06-16",
        "home": "ned",
        "away": "civ",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "cze-gha": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 2,
    "last5": [
      {
        "date": "2006-06-17",
        "home": "cze",
        "away": "gha",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "irn-por": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "2006-06-17",
        "home": "por",
        "away": "irn",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2018-06-25",
        "home": "irn",
        "away": "por",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "esp-tun": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2006-06-19",
        "home": "esp",
        "away": "tun",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-ger": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 3,
    "last5": [
      {
        "date": "2006-06-20",
        "home": "ger",
        "away": "ecu",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "mex-por": {
    "w": 0,
    "d": 1,
    "l": 2,
    "gf": 4,
    "ga": 6,
    "last5": [
      {
        "date": "2006-06-21",
        "home": "por",
        "away": "mex",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2017-06-18",
        "home": "por",
        "away": "mex",
        "score": "2-2",
        "tourn": "Confederations Cup"
      },
      {
        "date": "2017-07-02",
        "home": "por",
        "away": "mex",
        "score": "2-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "aus-cro": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2006-06-22",
        "home": "cro",
        "away": "aus",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "gha-usa": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 5,
    "ga": 4,
    "last5": [
      {
        "date": "2006-06-22",
        "home": "gha",
        "away": "usa",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2010-06-26",
        "home": "usa",
        "away": "gha",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-16",
        "home": "gha",
        "away": "usa",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 2,
    "wc_d": 0,
    "wc_l": 1
  },
  "esp-ksa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2006-06-23",
        "home": "ksa",
        "away": "esp",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "kor-sui": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 2,
    "last5": [
      {
        "date": "2006-06-23",
        "home": "sui",
        "away": "kor",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ecu-eng": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2006-06-25",
        "home": "eng",
        "away": "ecu",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bra-gha": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "2006-06-27",
        "home": "bra",
        "away": "gha",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "irn-uzb": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2007-07-11",
        "home": "irn",
        "away": "uzb",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-irq": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 3,
    "last5": [
      {
        "date": "2007-07-13",
        "home": "irq",
        "away": "aus",
        "score": "3-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2011-01-22",
        "home": "aus",
        "away": "irq",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-sui": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "2008-06-07",
        "home": "sui",
        "away": "cze",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-06-02",
        "home": "cze",
        "away": "sui",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-27",
        "home": "sui",
        "away": "cze",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aut-cro": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 4,
    "ga": 4,
    "last5": [
      {
        "date": "2008-06-08",
        "home": "aut",
        "away": "cro",
        "score": "0-1",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-06-03",
        "home": "cro",
        "away": "aut",
        "score": "0-3",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-09-25",
        "home": "aut",
        "away": "cro",
        "score": "1-3",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "sui-tur": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "2008-06-11",
        "home": "sui",
        "away": "tur",
        "score": "1-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-06-20",
        "home": "sui",
        "away": "tur",
        "score": "3-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "por-sui": {
    "w": 3,
    "d": 0,
    "l": 2,
    "gf": 13,
    "ga": 5,
    "last5": [
      {
        "date": "2008-06-15",
        "home": "sui",
        "away": "por",
        "score": "2-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2019-06-05",
        "home": "por",
        "away": "sui",
        "score": "3-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-06-05",
        "home": "por",
        "away": "sui",
        "score": "4-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-06-12",
        "home": "sui",
        "away": "por",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-12-06",
        "home": "por",
        "away": "sui",
        "score": "6-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-tur": {
    "w": 0,
    "d": 0,
    "l": 3,
    "gf": 3,
    "ga": 7,
    "last5": [
      {
        "date": "2008-06-15",
        "home": "tur",
        "away": "cze",
        "score": "3-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2016-06-21",
        "home": "cze",
        "away": "tur",
        "score": "0-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-06-26",
        "home": "cze",
        "away": "tur",
        "score": "1-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-nzl": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 0,
    "last5": [
      {
        "date": "2009-06-14",
        "home": "nzl",
        "away": "esp",
        "score": "0-5",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-rsa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2009-06-14",
        "home": "rsa",
        "away": "irq",
        "score": "0-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-egy": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 3,
    "last5": [
      {
        "date": "2009-06-15",
        "home": "bra",
        "away": "egy",
        "score": "4-3",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "nzl-rsa": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 2,
    "last5": [
      {
        "date": "2009-06-17",
        "home": "rsa",
        "away": "nzl",
        "score": "2-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-irq": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2009-06-17",
        "home": "esp",
        "away": "irq",
        "score": "1-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-nzl": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2009-06-20",
        "home": "irq",
        "away": "nzl",
        "score": "0-0",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "egy-usa": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 3,
    "last5": [
      {
        "date": "2009-06-21",
        "home": "egy",
        "away": "usa",
        "score": "0-3",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-rsa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2009-06-25",
        "home": "rsa",
        "away": "bra",
        "score": "0-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "mex-rsa": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "2010-06-11",
        "home": "rsa",
        "away": "mex",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "civ-por": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2010-06-15",
        "home": "civ",
        "away": "por",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "aus-gha": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "2010-06-19",
        "home": "gha",
        "away": "aus",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "jpn-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2010-06-19",
        "home": "ned",
        "away": "jpn",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bra-civ": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2010-06-20",
        "home": "bra",
        "away": "civ",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-gha": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "2010-06-23",
        "home": "gha",
        "away": "ger",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-21",
        "home": "ger",
        "away": "gha",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "nzl-par": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2010-06-24",
        "home": "par",
        "away": "nzl",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "gha-uru": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "2010-07-02",
        "home": "uru",
        "away": "gha",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-02",
        "home": "gha",
        "away": "uru",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 1
  },
  "esp-ned": {
    "w": 1,
    "d": 2,
    "l": 1,
    "gf": 7,
    "ga": 10,
    "last5": [
      {
        "date": "2010-07-11",
        "home": "ned",
        "away": "esp",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2014-06-13",
        "home": "esp",
        "away": "ned",
        "score": "1-5",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2025-03-20",
        "home": "ned",
        "away": "esp",
        "score": "2-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2025-03-23",
        "home": "esp",
        "away": "ned",
        "score": "3-3",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "jor-ksa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2011-01-13",
        "home": "jor",
        "away": "ksa",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jor-uzb": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2011-01-21",
        "home": "uzb",
        "away": "jor",
        "score": "2-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-uzb": {
    "w": 1,
    "d": 2,
    "l": 0,
    "gf": 7,
    "ga": 1,
    "last5": [
      {
        "date": "2011-01-25",
        "home": "uzb",
        "away": "aus",
        "score": "0-6",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2019-01-21",
        "home": "aus",
        "away": "uzb",
        "score": "0-0",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-01-23",
        "home": "aus",
        "away": "uzb",
        "score": "1-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "kor-uzb": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 2,
    "last5": [
      {
        "date": "2011-01-28",
        "home": "uzb",
        "away": "kor",
        "score": "2-3",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2015-01-22",
        "home": "kor",
        "away": "uzb",
        "score": "2-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-esp": {
    "w": 2,
    "d": 1,
    "l": 4,
    "gf": 8,
    "ga": 18,
    "last5": [
      {
        "date": "2018-09-11",
        "home": "esp",
        "away": "cro",
        "score": "6-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-15",
        "home": "cro",
        "away": "esp",
        "score": "3-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2021-06-28",
        "home": "cro",
        "away": "esp",
        "score": "3-5",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2023-06-18",
        "home": "cro",
        "away": "esp",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-06-15",
        "home": "esp",
        "away": "cro",
        "score": "3-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "civ-jpn": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2014-06-14",
        "home": "civ",
        "away": "jpn",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-bih": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2014-06-15",
        "home": "arg",
        "away": "bih",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-sui": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2014-06-15",
        "home": "sui",
        "away": "ecu",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "aus-ned": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 2,
    "ga": 3,
    "last5": [
      {
        "date": "2014-06-18",
        "home": "aus",
        "away": "ned",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "civ-col": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2014-06-19",
        "home": "col",
        "away": "civ",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "arg-irn": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2014-06-21",
        "home": "arg",
        "away": "irn",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-esp": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 3,
    "last5": [
      {
        "date": "2014-06-23",
        "home": "aus",
        "away": "esp",
        "score": "0-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bih-irn": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2014-06-25",
        "home": "bih",
        "away": "irn",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-fra": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2014-06-25",
        "home": "ecu",
        "away": "fra",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "gha-por": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 5,
    "last5": [
      {
        "date": "2014-06-26",
        "home": "por",
        "away": "gha",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-24",
        "home": "por",
        "away": "gha",
        "score": "3-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 2
  },
  "irq-jor": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "2015-01-12",
        "home": "jor",
        "away": "irq",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      },
      {
        "date": "2024-01-29",
        "home": "irq",
        "away": "jor",
        "score": "2-3",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-hai": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 7,
    "ga": 1,
    "last5": [
      {
        "date": "2016-06-08",
        "home": "bra",
        "away": "hai",
        "score": "7-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-pan": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 0,
    "last5": [
      {
        "date": "2016-06-10",
        "home": "arg",
        "away": "pan",
        "score": "5-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-hai": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 0,
    "last5": [
      {
        "date": "2016-06-12",
        "home": "ecu",
        "away": "hai",
        "score": "4-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-esp": {
    "w": 0,
    "d": 1,
    "l": 2,
    "gf": 2,
    "ga": 5,
    "last5": [
      {
        "date": "2016-06-13",
        "home": "esp",
        "away": "cze",
        "score": "1-0",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2022-06-05",
        "home": "cze",
        "away": "esp",
        "score": "2-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-06-12",
        "home": "esp",
        "away": "cze",
        "score": "2-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-cze": {
    "w": 0,
    "d": 2,
    "l": 0,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "2016-06-17",
        "home": "cze",
        "away": "cro",
        "score": "2-2",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2021-06-18",
        "home": "cro",
        "away": "cze",
        "score": "1-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "esp-tur": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "2016-06-17",
        "home": "esp",
        "away": "tur",
        "score": "3-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aut-por": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2016-06-18",
        "home": "por",
        "away": "aut",
        "score": "0-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "mex-nzl": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2017-06-21",
        "home": "mex",
        "away": "nzl",
        "score": "2-1",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "nzl-por": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 4,
    "last5": [
      {
        "date": "2017-06-24",
        "home": "nzl",
        "away": "por",
        "score": "0-4",
        "tourn": "Confederations Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "egy-uru": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2018-06-15",
        "home": "egy",
        "away": "uru",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "irn-mar": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2018-06-15",
        "home": "mar",
        "away": "irn",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "kor-swe": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2018-06-18",
        "home": "swe",
        "away": "kor",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-pan": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "2018-06-18",
        "home": "bel",
        "away": "pan",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ksa-uru": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2018-06-20",
        "home": "uru",
        "away": "ksa",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "esp-irn": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2018-06-20",
        "home": "irn",
        "away": "esp",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-pan": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 1,
    "last5": [
      {
        "date": "2018-06-24",
        "home": "eng",
        "away": "pan",
        "score": "6-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-sen": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2018-06-24",
        "home": "jpn",
        "away": "sen",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "esp-mar": {
    "w": 0,
    "d": 2,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2018-06-25",
        "home": "esp",
        "away": "mar",
        "score": "2-2",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-06",
        "home": "mar",
        "away": "esp",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 2,
    "wc_l": 0
  },
  "col-sen": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2018-06-28",
        "home": "sen",
        "away": "col",
        "score": "0-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "pan-tun": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2018-06-28",
        "home": "pan",
        "away": "tun",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "por-uru": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "2018-06-30",
        "home": "uru",
        "away": "por",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-11-28",
        "home": "por",
        "away": "uru",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 1
  },
  "sui-swe": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2018-07-03",
        "home": "swe",
        "away": "sui",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "aut-bih": {
    "w": 0,
    "d": 1,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2018-09-11",
        "home": "bih",
        "away": "aut",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-15",
        "home": "aut",
        "away": "bih",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-sui": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 4,
    "ga": 6,
    "last5": [
      {
        "date": "2018-10-12",
        "home": "bel",
        "away": "sui",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2018-11-18",
        "home": "sui",
        "away": "bel",
        "score": "5-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aus-jor": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2019-01-06",
        "home": "aus",
        "away": "jor",
        "score": "0-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "irq-qat": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2019-01-22",
        "home": "qat",
        "away": "irq",
        "score": "1-0",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "par-qat": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2019-06-16",
        "home": "par",
        "away": "qat",
        "score": "2-2",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-qat": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2019-06-19",
        "home": "col",
        "away": "qat",
        "score": "1-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "jpn-uru": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2019-06-20",
        "home": "uru",
        "away": "jpn",
        "score": "2-2",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-qat": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "2019-06-23",
        "home": "qat",
        "away": "arg",
        "score": "0-2",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-jpn": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "2019-06-24",
        "home": "ecu",
        "away": "jpn",
        "score": "1-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aut-nor": {
    "w": 2,
    "d": 1,
    "l": 1,
    "gf": 9,
    "ga": 5,
    "last5": [
      {
        "date": "2020-09-04",
        "home": "nor",
        "away": "aut",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-18",
        "home": "aut",
        "away": "nor",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-09-09",
        "home": "nor",
        "away": "aut",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-10-13",
        "home": "aut",
        "away": "nor",
        "score": "5-1",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-sco": {
    "w": 1,
    "d": 0,
    "l": 2,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "2020-09-07",
        "home": "cze",
        "away": "sco",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-10-14",
        "home": "sco",
        "away": "cze",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2021-06-14",
        "home": "sco",
        "away": "cze",
        "score": "0-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "por-swe": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 0,
    "last5": [
      {
        "date": "2020-09-08",
        "home": "swe",
        "away": "por",
        "score": "0-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-10-14",
        "home": "por",
        "away": "swe",
        "score": "3-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bih-ned": {
    "w": 0,
    "d": 2,
    "l": 2,
    "gf": 4,
    "ga": 9,
    "last5": [
      {
        "date": "2020-10-11",
        "home": "bih",
        "away": "ned",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-15",
        "home": "ned",
        "away": "bih",
        "score": "3-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-09-07",
        "home": "ned",
        "away": "bih",
        "score": "5-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-11-19",
        "home": "bih",
        "away": "ned",
        "score": "1-1",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-swe": {
    "w": 1,
    "d": 0,
    "l": 1,
    "gf": 3,
    "ga": 3,
    "last5": [
      {
        "date": "2020-10-11",
        "home": "cro",
        "away": "swe",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2020-11-14",
        "home": "swe",
        "away": "cro",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cro-sco": {
    "w": 2,
    "d": 0,
    "l": 1,
    "gf": 5,
    "ga": 3,
    "last5": [
      {
        "date": "2021-06-22",
        "home": "sco",
        "away": "cro",
        "score": "1-3",
        "tourn": "UEFA Euro"
      },
      {
        "date": "2024-10-12",
        "home": "cro",
        "away": "sco",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-11-15",
        "home": "sco",
        "away": "cro",
        "score": "1-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "cze-eng": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2021-06-22",
        "home": "eng",
        "away": "cze",
        "score": "1-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bel-por": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2021-06-27",
        "home": "bel",
        "away": "por",
        "score": "1-0",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "nor-swe": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 3,
    "last5": [
      {
        "date": "2022-06-05",
        "home": "swe",
        "away": "nor",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2022-06-12",
        "home": "nor",
        "away": "swe",
        "score": "3-2",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-qat": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "2022-11-20",
        "home": "qat",
        "away": "ecu",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ned-sen": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "2022-11-21",
        "home": "sen",
        "away": "ned",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-irn": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 6,
    "ga": 2,
    "last5": [
      {
        "date": "2022-11-21",
        "home": "eng",
        "away": "irn",
        "score": "6-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ger-jpn": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2022-11-23",
        "home": "ger",
        "away": "jpn",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "cro-mar": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2022-11-23",
        "home": "mar",
        "away": "cro",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      },
      {
        "date": "2022-12-17",
        "home": "cro",
        "away": "mar",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 1,
    "wc_l": 0
  },
  "bel-can": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 1,
    "ga": 0,
    "last5": [
      {
        "date": "2022-11-23",
        "home": "bel",
        "away": "can",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "qat-sen": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "2022-11-25",
        "home": "qat",
        "away": "sen",
        "score": "1-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ecu-ned": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 1,
    "ga": 1,
    "last5": [
      {
        "date": "2022-11-25",
        "home": "ned",
        "away": "ecu",
        "score": "1-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "can-cro": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 4,
    "last5": [
      {
        "date": "2022-11-27",
        "home": "cro",
        "away": "can",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "gha-kor": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 2,
    "last5": [
      {
        "date": "2022-11-28",
        "home": "kor",
        "away": "gha",
        "score": "2-3",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "ecu-sen": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2022-11-29",
        "home": "ecu",
        "away": "sen",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ned-qat": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "2022-11-29",
        "home": "qat",
        "away": "ned",
        "score": "0-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-tun": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 0,
    "ga": 1,
    "last5": [
      {
        "date": "2022-11-30",
        "home": "tun",
        "away": "fra",
        "score": "1-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "esp-jpn": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2022-12-01",
        "home": "jpn",
        "away": "esp",
        "score": "2-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "bel-cro": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "last5": [
      {
        "date": "2022-12-01",
        "home": "cro",
        "away": "bel",
        "score": "0-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 1,
    "wc_l": 0
  },
  "can-mar": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2022-12-01",
        "home": "can",
        "away": "mar",
        "score": "1-2",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 1
  },
  "ned-usa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 1,
    "last5": [
      {
        "date": "2022-12-03",
        "home": "ned",
        "away": "usa",
        "score": "3-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "eng-sen": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 3,
    "ga": 0,
    "last5": [
      {
        "date": "2022-12-04",
        "home": "eng",
        "away": "sen",
        "score": "3-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "bra-kor": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 1,
    "last5": [
      {
        "date": "2022-12-05",
        "home": "bra",
        "away": "kor",
        "score": "4-1",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "fra-mar": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 0,
    "last5": [
      {
        "date": "2022-12-14",
        "home": "fra",
        "away": "mar",
        "score": "2-0",
        "tourn": "FIFA World Cup"
      }
    ],
    "wc_w": 1,
    "wc_d": 0,
    "wc_l": 0
  },
  "jor-qat": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "2024-02-10",
        "home": "qat",
        "away": "jor",
        "score": "3-1",
        "tourn": "AFC Asian Cup"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "arg-can": {
    "w": 2,
    "d": 0,
    "l": 0,
    "gf": 4,
    "ga": 0,
    "last5": [
      {
        "date": "2024-06-20",
        "home": "arg",
        "away": "can",
        "score": "2-0",
        "tourn": "Copa América"
      },
      {
        "date": "2024-07-09",
        "home": "arg",
        "away": "can",
        "score": "2-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "pan-uru": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 3,
    "last5": [
      {
        "date": "2024-06-23",
        "home": "uru",
        "away": "pan",
        "score": "3-1",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "pan-usa": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2024-06-27",
        "home": "usa",
        "away": "pan",
        "score": "1-2",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "aut-tur": {
    "w": 0,
    "d": 0,
    "l": 1,
    "gf": 1,
    "ga": 2,
    "last5": [
      {
        "date": "2024-07-02",
        "home": "aut",
        "away": "tur",
        "score": "1-2",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "ned-tur": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2024-07-06",
        "home": "ned",
        "away": "tur",
        "score": "2-1",
        "tourn": "UEFA Euro"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "col-pan": {
    "w": 1,
    "d": 0,
    "l": 0,
    "gf": 5,
    "ga": 0,
    "last5": [
      {
        "date": "2024-07-06",
        "home": "col",
        "away": "pan",
        "score": "5-0",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "can-uru": {
    "w": 0,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 2,
    "last5": [
      {
        "date": "2024-07-13",
        "home": "can",
        "away": "uru",
        "score": "2-2",
        "tourn": "Copa América"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "por-sco": {
    "w": 1,
    "d": 1,
    "l": 0,
    "gf": 2,
    "ga": 1,
    "last5": [
      {
        "date": "2024-09-08",
        "home": "por",
        "away": "sco",
        "score": "2-1",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-10-15",
        "home": "sco",
        "away": "por",
        "score": "0-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  },
  "bih-ger": {
    "w": 0,
    "d": 0,
    "l": 2,
    "gf": 1,
    "ga": 9,
    "last5": [
      {
        "date": "2024-10-11",
        "home": "bih",
        "away": "ger",
        "score": "1-2",
        "tourn": "UEFA Nations League"
      },
      {
        "date": "2024-11-16",
        "home": "ger",
        "away": "bih",
        "score": "7-0",
        "tourn": "UEFA Nations League"
      }
    ],
    "wc_w": 0,
    "wc_d": 0,
    "wc_l": 0
  }
};

export function getH2H(teamA: string, teamB: string): H2HRecord | null {
  const key = [teamA, teamB].sort().join('-');
  return H2H_DATA[key] ?? null;
}

/** Returns advantage factor for teamA vs teamB: positive = teamA better historically */
export function h2hFactor(teamA: string, teamB: string): number {
  const r = getH2H(teamA, teamB);
  if (!r) return 0;
  const total = r.w + r.d + r.l;
  if (total < 3) return 0;
  const key = [teamA, teamB].sort().join('-');
  const aIsFirst = key.startsWith(teamA);
  // aIsFirst → r.w = teamA wins
  const aWins = aIsFirst ? r.w : r.l;
  const aLoss = aIsFirst ? r.l : r.w;
  return (aWins - aLoss) / total; // range approx -1 to +1
}