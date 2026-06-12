// Events proxy — worldcup26.ir → API-Football → embedded static
import { NextRequest, NextResponse } from "next/server";
import { wc26Events, apifEvents, firstAvailable } from "@/lib/api-clients";
import { mapWC26Events, mapAPIFootballEvents } from "@/lib/data-mappers";
import { FALLBACK_EVENTS } from "@/lib/fallback-data";

export const maxDuration = 30;

export async function GET(req: NextRequest) {
  const matchId = req.nextUrl.searchParams.get("matchId") ?? "";
  const since   = req.nextUrl.searchParams.get("since");
  const apifKey = req.nextUrl.searchParams.get("apifKey") ?? undefined;

  // Coba API eksternal menggunakan matchId. Untuk API-Football kita butuh fixture id numerik.
  const result = await firstAvailable([
    {
      source: "worldcup26.ir",
      run: async () => {
        const data = await wc26Events(matchId);
        const mapped = mapWC26Events(data, matchId);
        if (mapped.length === 0) throw new Error("no event data");
        return mapped;
      },
    },
    {
      source: "api-football",
      run: async () => {
        const data = await apifEvents(matchId.replace(/^\D+/, ""), apifKey);
        const mapped = mapAPIFootballEvents(data, matchId);
        if (mapped.length === 0) throw new Error("no event data");
        return mapped;
      },
    },
  ]);

  if (result) return NextResponse.json({ source: result.source, data: result.data });

  // embedded fallback
  let events = FALLBACK_EVENTS[matchId] ?? [];
  if (since) {
    const idx = events.findIndex((e) => e.id === since);
    if (idx >= 0) events = events.slice(idx + 1);
  }
  return NextResponse.json({ source: "static-embed", data: events });
}
