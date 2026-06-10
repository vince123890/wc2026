// Stats proxy — standings & teams
import { NextRequest, NextResponse } from "next/server";
import { wc26Groups, apifStandings, firstAvailable } from "@/lib/api-clients";
import { FALLBACK_TEAMS, FALLBACK_STANDINGS } from "@/lib/fallback-data";
import { computeStandings } from "@/lib/standings";

export const maxDuration = 30;

export async function GET(req: NextRequest) {
  const kind = req.nextUrl.searchParams.get("kind") ?? "teams";

  if (kind === "standings") {
    const result = await firstAvailable([
      { source: "worldcup26.ir", run: () => wc26Groups() },
      { source: "api-football",  run: () => apifStandings() },
    ]);
    if (result) return NextResponse.json({ source: result.source, data: result.data });
    // Hitung dari data embedded WC2026 (paling akurat untuk klasemen)
    const computed = computeStandings();
    return NextResponse.json({ source: "computed-embedded", data: computed });
  }

  return NextResponse.json({ source: "static-embed", data: FALLBACK_TEAMS });
}
