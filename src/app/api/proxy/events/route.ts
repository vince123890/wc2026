// Events proxy — worldcup26.ir → API-Football → embedded static
import { NextRequest, NextResponse } from "next/server";
import { wc26Events, apifEvents, firstAvailable } from "@/lib/api-clients";
import { FALLBACK_EVENTS } from "@/lib/fallback-data";

export const maxDuration = 30;

export async function GET(req: NextRequest) {
  const matchId = req.nextUrl.searchParams.get("matchId") ?? "";
  const since   = req.nextUrl.searchParams.get("since");

  // Coba API eksternal menggunakan matchId. Untuk API-Football kita butuh fixture id numerik.
  const result = await firstAvailable([
    { source: "worldcup26.ir", run: () => wc26Events(matchId) },
    { source: "api-football",  run: () => apifEvents(matchId.replace(/^\D+/, "")) },
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
