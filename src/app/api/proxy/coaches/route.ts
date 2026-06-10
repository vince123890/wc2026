// /api/proxy/coaches — manual data 12 tim utama + placeholder
import { NextRequest, NextResponse } from "next/server";
import { MANUAL_COACHES, COACH_PLACEHOLDER } from "@/lib/coaches-manual";
import { WC2026_TEAMS } from "@/lib/wc2026-data";
import type { Coach } from "@/lib/types";

export async function GET(req: NextRequest) {
  const teamId = req.nextUrl.searchParams.get("teamId");

  if (teamId) {
    // Coba manual data dulu, lalu fallback ke placeholder informatif
    const coach: Coach = MANUAL_COACHES[teamId] ?? {
      ...COACH_PLACEHOLDER,
      teamId,
      id: `coach-${teamId}`,
      name: `Pelatih ${WC2026_TEAMS[teamId]?.name ?? teamId}`,
    };
    return NextResponse.json({ source: coach.id === "coach-unknown" ? "placeholder" : "manual", data: coach });
  }

  // Return semua coaches yang tersedia
  return NextResponse.json({ source: "manual", data: MANUAL_COACHES });
}
