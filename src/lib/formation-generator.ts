// Generator lineup perkiraan — dipakai saat lineup resmi API-Football belum dirilis
// (biasanya baru ~1 jam sebelum kickoff). Menggabungkan formasi pelatih (coaches-manual.ts)
// dengan pemain kunci (key-players.ts) ke slot SVG pitch (340x540, lihat FormationPitch).
import type { LineupPlayer, TeamLineup } from "./types";
import type { KeyPlayer } from "./key-players";
import type { SquadPlayer } from "@/app/api/proxy/squads/route";

interface Slot { pos: string; x: number; y: number }

// Koordinat per formasi — tim "home" menyerang ke atas (y kecil = FWD, y besar = GK)
const FORMATION_SLOTS: Record<string, Slot[]> = {
  "4-3-3": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "RB", x: 295, y: 400 }, { pos: "CB", x: 220, y: 390 }, { pos: "CB", x: 120, y: 390 }, { pos: "LB", x: 45, y: 400 },
    { pos: "CDM", x: 170, y: 305 }, { pos: "CM", x: 260, y: 275 }, { pos: "CM", x: 80, y: 275 },
    { pos: "RW", x: 270, y: 150 }, { pos: "ST", x: 170, y: 120 }, { pos: "LW", x: 70, y: 150 },
  ],
  "4-2-3-1": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "RB", x: 295, y: 400 }, { pos: "CB", x: 220, y: 390 }, { pos: "CB", x: 120, y: 390 }, { pos: "LB", x: 45, y: 400 },
    { pos: "CDM", x: 220, y: 320 }, { pos: "CDM", x: 120, y: 320 },
    { pos: "RAM", x: 270, y: 200 }, { pos: "CAM", x: 170, y: 190 }, { pos: "LAM", x: 70, y: 200 },
    { pos: "ST", x: 170, y: 110 },
  ],
  "4-4-2": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "RB", x: 295, y: 400 }, { pos: "CB", x: 220, y: 390 }, { pos: "CB", x: 120, y: 390 }, { pos: "LB", x: 45, y: 400 },
    { pos: "RM", x: 280, y: 270 }, { pos: "CM", x: 200, y: 280 }, { pos: "CM", x: 140, y: 280 }, { pos: "LM", x: 60, y: 270 },
    { pos: "ST", x: 215, y: 120 }, { pos: "ST", x: 125, y: 120 },
  ],
  "4-1-4-1": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "RB", x: 295, y: 400 }, { pos: "CB", x: 220, y: 390 }, { pos: "CB", x: 120, y: 390 }, { pos: "LB", x: 45, y: 400 },
    { pos: "CDM", x: 170, y: 330 },
    { pos: "RM", x: 280, y: 230 }, { pos: "CM", x: 200, y: 240 }, { pos: "CM", x: 140, y: 240 }, { pos: "LM", x: 60, y: 230 },
    { pos: "ST", x: 170, y: 110 },
  ],
  "3-4-2-1": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "CB", x: 250, y: 400 }, { pos: "CB", x: 170, y: 390 }, { pos: "CB", x: 90, y: 400 },
    { pos: "RM", x: 290, y: 280 }, { pos: "CM", x: 200, y: 290 }, { pos: "CM", x: 140, y: 290 }, { pos: "LM", x: 50, y: 280 },
    { pos: "RAM", x: 220, y: 170 }, { pos: "LAM", x: 120, y: 170 },
    { pos: "ST", x: 170, y: 100 },
  ],
  "3-5-2": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "CB", x: 250, y: 400 }, { pos: "CB", x: 170, y: 390 }, { pos: "CB", x: 90, y: 400 },
    { pos: "RWB", x: 305, y: 290 }, { pos: "CM", x: 215, y: 290 }, { pos: "CDM", x: 170, y: 320 }, { pos: "CM", x: 125, y: 290 }, { pos: "LWB", x: 35, y: 290 },
    { pos: "ST", x: 215, y: 120 }, { pos: "ST", x: 125, y: 120 },
  ],
  "5-3-2": [
    { pos: "GK", x: 170, y: 470 },
    { pos: "RWB", x: 305, y: 380 }, { pos: "CB", x: 235, y: 400 }, { pos: "CB", x: 170, y: 390 }, { pos: "CB", x: 105, y: 400 }, { pos: "LWB", x: 35, y: 380 },
    { pos: "CM", x: 220, y: 280 }, { pos: "CM", x: 170, y: 300 }, { pos: "CM", x: 120, y: 280 },
    { pos: "ST", x: 215, y: 120 }, { pos: "ST", x: 125, y: 120 },
  ],
};

const DEFAULT_FORMATION = "4-3-3";

// Mapping posisi spesifik (slot) → grup umum (pos di KeyPlayer)
function slotGroup(slotPos: string): "GK" | "DEF" | "MID" | "FWD" {
  if (slotPos === "GK") return "GK";
  if (["CB", "RB", "LB", "RWB", "LWB"].includes(slotPos)) return "DEF";
  if (["CDM", "CM", "RM", "LM", "CAM", "RAM", "LAM"].includes(slotPos)) return "MID";
  return "FWD";
}

// Untuk tim away, mirror koordinat secara vertikal (away menyerang ke bawah)
function mirrorY(slots: Slot[]): Slot[] {
  return slots.map((s) => ({ ...s, y: 540 - s.y }));
}

interface PoolPlayer { name: string; short: string; jersey: number; isStar: boolean; form: number }

const SQUAD_POS_GROUP: Record<string, "GK" | "DEF" | "MID" | "FWD"> = {
  Goalkeeper: "GK", Defender: "DEF", Midfielder: "MID", Attacker: "FWD",
};

// Skuad API-Football (26 pemain, lebih lengkap) — diprioritaskan jika tersedia
function poolFromSquad(squad: SquadPlayer[]): Record<string, PoolPlayer[]> {
  const pool: Record<string, PoolPlayer[]> = { GK: [], DEF: [], MID: [], FWD: [] };
  for (const p of squad) {
    const group = SQUAD_POS_GROUP[p.position];
    if (!group) continue;
    const short = p.name.split(" ").slice(-1)[0];
    pool[group].push({ name: p.name, short, jersey: p.number ?? 0, isStar: false, form: 0 });
  }
  return pool;
}

// Pemain kunci embedded (5-8/tim) — fallback jika skuad API-Football tidak tersedia
function poolFromKeyPlayers(keyPlayers: KeyPlayer[]): Record<string, PoolPlayer[]> {
  const pool: Record<string, PoolPlayer[]> = { GK: [], DEF: [], MID: [], FWD: [] };
  for (const p of keyPlayers) {
    pool[p.pos]?.push({ name: p.name, short: p.short, jersey: p.jersey, isStar: p.isStar, form: p.form });
  }
  return pool;
}

/**
 * Bangun starting XI perkiraan dari formasi pelatih + pemain (skuad API-Football jika ada,
 * fallback ke pemain kunci embedded). Slot yang tidak terisi diberi placeholder generik per posisi.
 */
export function generateProjectedLineup(
  formation: string,
  keyPlayers: KeyPlayer[],
  side: "home" | "away",
  squad?: SquadPlayer[] | null
): TeamLineup {
  const template = FORMATION_SLOTS[formation] ?? FORMATION_SLOTS[DEFAULT_FORMATION];
  const slots = side === "home" ? template : mirrorY(template);

  const pool = squad && squad.length > 0 ? poolFromSquad(squad) : poolFromKeyPlayers(keyPlayers);
  for (const g of Object.values(pool)) g.sort((a, b) => Number(b.isStar) - Number(a.isStar) || b.form - a.form || a.jersey - b.jersey);

  let placeholderId = 0;
  const starters: LineupPlayer[] = slots.map((slot, i) => {
    const group = slotGroup(slot.pos);
    const player = pool[group]?.shift();
    if (player) {
      return {
        id: `proj-${side}-${player.short}`,
        name: player.name,
        short: player.short,
        pos: slot.pos,
        jersey: player.jersey,
        x: slot.x,
        y: slot.y,
        captain: player.isStar && group !== "GK" && i === slots.findIndex((s) => slotGroup(s.pos) === group),
      };
    }
    placeholderId += 1;
    return {
      id: `proj-${side}-ph${placeholderId}`,
      name: slot.pos,
      short: slot.pos,
      pos: slot.pos,
      jersey: 0,
      x: slot.x,
      y: slot.y,
    };
  });

  return { formation, confirmed: false, starters, bench: [] };
}
