// News proxy — Google News RSS (gratis, tanpa API key), hanya untuk pra-pertandingan
import { NextRequest, NextResponse } from "next/server";
import { googleNewsRSS } from "@/lib/api-clients";
import { parseGoogleNewsRSS } from "@/lib/data-mappers";
import type { NewsItem } from "@/lib/types";

export const maxDuration = 30;

async function fetchTeamNews(teamName: string): Promise<NewsItem[]> {
  try {
    const xml = await googleNewsRSS(`${teamName} World Cup 2026`);
    return parseGoogleNewsRSS(xml);
  } catch {
    return [];
  }
}

export async function GET(req: NextRequest) {
  const home = req.nextUrl.searchParams.get("home") ?? "";
  const away = req.nextUrl.searchParams.get("away") ?? "";

  if (!home || !away) {
    return NextResponse.json({ source: "none", data: { home: [], away: [] } });
  }

  const [homeNews, awayNews] = await Promise.all([fetchTeamNews(home), fetchTeamNews(away)]);
  const source = homeNews.length > 0 || awayNews.length > 0 ? "google-news" : "none";
  return NextResponse.json({ source, data: { home: homeNews, away: awayNews } });
}
