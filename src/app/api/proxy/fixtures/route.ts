// Fixtures proxy — worldcup26.ir (live) → API-Football (free) → embedded WC2026
import { NextResponse } from "next/server";
import { wc26Games, apifFixtures, firstAvailable } from "@/lib/api-clients";
import { mapWC26Game, mapAPIFootballFixture } from "@/lib/data-mappers";
import { WC2026_FIXTURES } from "@/lib/wc2026-data";

export const maxDuration = 30;

export async function GET() {
  const result = await firstAvailable([
    {
      source: "worldcup26.ir",
      run: async () => {
        const data = await wc26Games();
        const arr = Array.isArray(data) ? data : data?.games ?? data?.data ?? [];
        return arr.map(mapWC26Game);
      },
    },
    {
      source: "api-football",
      run: async () => {
        const data = await apifFixtures();
        const arr = data?.response ?? [];
        return arr.map(mapAPIFootballFixture);
      },
    },
  ]);

  if (result && result.data.length > 0) {
    return NextResponse.json(
      { source: result.source, data: result.data },
      { headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=300" } }
    );
  }
  return NextResponse.json({ source: "wc2026-embedded", data: WC2026_FIXTURES });
}
