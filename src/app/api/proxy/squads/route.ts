// Squad proxy — API-Football /players/squads (free, dalam kuota 100 req/hari),
// fallback openfootball worldcup.squads.json (gratis, 26 pemain/tim, tanpa API key)
import { NextRequest, NextResponse } from "next/server";
import { apifSquads, ofbSquads } from "@/lib/api-clients";
import { mapOFBSquad } from "@/lib/data-mappers";
import { APIF_TEAM_IDS } from "@/lib/apif-team-ids";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

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
  const apifKey = req.nextUrl.searchParams.get("apifKey") ?? undefined;
  const numericId = APIF_TEAM_IDS[teamId];

  if (numericId) {
    try {
      const data = await apifSquads(String(numericId), apifKey);
      const players = data?.response?.[0]?.players;
      if (players) {
        const result: SquadPlayer[] = players.map((p: Record<string, unknown>) => ({
          id: Number(p.id),
          name: String(p.name ?? ""),
          age: Number(p.age ?? 0),
          number: p.number != null ? Number(p.number) : null,
          position: String(p.position ?? ""),
          photo: String(p.photo ?? ""),
        }));
        return NextResponse.json({ source: "api-football", data: result });
      }
    } catch { /* fallback ke openfootball */ }
  }

  // Fallback: skuad resmi 26 pemain/tim dari openfootball (gratis, tanpa API key)
  const fifaCode = WC2026_TEAMS[teamId]?.fifaCode;
  if (fifaCode) {
    try {
      const raw = (await ofbSquads()) as Record<string, unknown>[];
      const result = mapOFBSquad(raw, fifaCode);
      if (result) return NextResponse.json({ source: "openfootball", data: result });
    } catch { /* none */ }
  }

  return NextResponse.json({ source: "none", data: null });
}
