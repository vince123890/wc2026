// Stats proxy — standings & teams
import { NextRequest, NextResponse } from "next/server";
import { wc26Groups, apifStandings, bdlGroupStandings, firstAvailable } from "@/lib/api-clients";
import { mapBDLGroupStandings } from "@/lib/data-mappers";
import { FALLBACK_TEAMS, FALLBACK_STANDINGS } from "@/lib/fallback-data";
import { computeStandings } from "@/lib/standings";

export const maxDuration = 30;

export async function GET(req: NextRequest) {
  const kind = req.nextUrl.searchParams.get("kind") ?? "teams";
  const apifKey = req.nextUrl.searchParams.get("apifKey") ?? undefined;

  if (kind === "standings") {
    // BALLDONTLIE group_standings (ALL-STAR) — klasemen resmi WC2026, prioritas utama
    try {
      const raw = (await bdlGroupStandings()) as { data?: Record<string, unknown>[] };
      const mapped = mapBDLGroupStandings(raw);
      if (Object.keys(mapped).length > 0) {
        return NextResponse.json({ source: "balldontlie", data: mapped });
      }
    } catch { /* fallback ke sumber lain */ }

    const result = await firstAvailable([
      { source: "worldcup26.ir", run: () => wc26Groups() },
      { source: "api-football",  run: () => apifStandings(apifKey) },
    ]);
    if (result) return NextResponse.json({ source: result.source, data: result.data });
    // Hitung dari data embedded WC2026 (paling akurat untuk klasemen)
    const computed = computeStandings();
    return NextResponse.json({ source: "computed-embedded", data: computed });
  }

  return NextResponse.json({ source: "static-embed", data: FALLBACK_TEAMS });
}
