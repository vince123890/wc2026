// Second-opinion prediction proxy — API-Football /predictions (free, dalam kuota 100 req/hari)
// Dipakai sebagai pembanding terhadap Prediction Score Engine internal kita
import { NextRequest, NextResponse } from "next/server";
import { apifPredictions } from "@/lib/api-clients";

export const maxDuration = 30;

export interface APIFPredictionData {
  winner: { id: number | null; name: string | null; comment: string | null } | null;
  advice: string | null;
  percent: { home: string; draw: string; away: string };
  goals: { home: string | null; away: string | null };
}

export async function GET(req: NextRequest) {
  const fixtureId = req.nextUrl.searchParams.get("fixtureId") ?? "";
  const apifKey = req.nextUrl.searchParams.get("apifKey") ?? undefined;
  const numericId = fixtureId.replace(/^\D+/, "");

  if (!numericId) {
    return NextResponse.json({ source: "none", data: null });
  }

  try {
    const data = await apifPredictions(numericId, apifKey);
    const predictions = data?.response?.[0]?.predictions;
    if (!predictions) return NextResponse.json({ source: "none", data: null });

    const result: APIFPredictionData = {
      winner: predictions.winner ?? null,
      advice: predictions.advice ?? null,
      percent: predictions.percent ?? { home: "0%", draw: "0%", away: "0%" },
      goals: predictions.goals ?? { home: null, away: null },
    };
    return NextResponse.json({ source: "api-football", data: result });
  } catch {
    return NextResponse.json({ source: "none", data: null });
  }
}
