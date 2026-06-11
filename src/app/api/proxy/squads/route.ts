// Squad proxy — API-Football /players/squads (free, dalam kuota 100 req/hari)
// Enrichment di atas data KEY_PLAYERS embedded — skuad lengkap 26 pemain per tim
import { NextRequest, NextResponse } from "next/server";
import { apifSquads } from "@/lib/api-clients";
import { APIF_TEAM_IDS } from "@/lib/apif-team-ids";

export const maxDuration = 30;

export interface SquadPlayer {
  id: number;
  name: string;
  age: number;
  number: number | null;
  position: string;
  photo: string;
}

export async function GET(req: NextRequest) {
  const teamId = req.nextUrl.searchParams.get("teamId") ?? "";
  const numericId = APIF_TEAM_IDS[teamId];

  if (!numericId) {
    return NextResponse.json({ source: "none", data: null });
  }

  try {
    const data = await apifSquads(String(numericId));
    const players = data?.response?.[0]?.players;
    if (!players) return NextResponse.json({ source: "none", data: null });

    const result: SquadPlayer[] = players.map((p: Record<string, unknown>) => ({
      id: Number(p.id),
      name: String(p.name ?? ""),
      age: Number(p.age ?? 0),
      number: p.number != null ? Number(p.number) : null,
      position: String(p.position ?? ""),
      photo: String(p.photo ?? ""),
    }));
    return NextResponse.json({ source: "api-football", data: result });
  } catch {
    return NextResponse.json({ source: "none", data: null });
  }
}
