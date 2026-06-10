// Lineups proxy — API-Football free (100 req/hari) → BALLDONTLIE → embedded
import { NextRequest, NextResponse } from "next/server";
import { apifLineups, bdlLineups, firstAvailable } from "@/lib/api-clients";
import { mapAPIFootballLineup } from "@/lib/data-mappers";
import { FALLBACK_LINEUPS } from "@/lib/fallback-data";

export const maxDuration = 30;

export async function GET(req: NextRequest) {
  const matchId = req.nextUrl.searchParams.get("matchId") ?? "";
  // Untuk API-Football pakai fixture id numerik
  const numericId = matchId.replace(/^\D+/, "");

  const result = await firstAvailable([
    {
      source: "api-football",
      run: async () => {
        const data = await apifLineups(numericId);
        const mapped = mapAPIFootballLineup(data?.response ?? []);
        if (!mapped) throw new Error("no lineup data");
        return mapped;
      },
    },
    {
      source: "balldontlie",
      run: () => bdlLineups(matchId),
    },
  ]);

  if (result) return NextResponse.json({ source: result.source, data: result.data });

  const staticLineup = FALLBACK_LINEUPS[matchId];
  if (staticLineup) return NextResponse.json({ source: "static-embed", data: staticLineup });
  return NextResponse.json({ source: "none", data: null });
}
