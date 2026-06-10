// /api/proxy/health — verifikasi semua API service
import { NextResponse } from "next/server";
import type { ServiceHealth } from "@/lib/types";

export const maxDuration = 30;

async function probe(name: string, fn: () => Promise<unknown>): Promise<ServiceHealth> {
  const start = Date.now();
  try {
    await fn();
    return { service: name, status: "ok", detail: "Respons sukses", latencyMs: Date.now() - start };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg.includes("not configured"))
      return { service: name, status: "unconfigured", detail: "Env key belum diisi — fallback aktif" };
    return { service: name, status: "down", detail: msg.slice(0, 120), latencyMs: Date.now() - start };
  }
}

export async function GET() {
  const { wc26Games, apifFixtures, bdlTeams, ofbTeams } = await import("@/lib/api-clients");

  const checks = await Promise.all([
    probe("worldcup26.ir (live scores)", () => wc26Games()),
    probe("api-football (lineups/events)", () => apifFixtures()),
    probe("balldontlie (teams/stadiums)", () => bdlTeams()),
    probe("openfootball (static fallback)", () => ofbTeams()),
  ]);

  const aiClaude: ServiceHealth  = process.env.ANTHROPIC_API_KEY
    ? { service: "anthropic:claude",  status: "ok",           detail: "Server key terkonfigurasi" }
    : { service: "anthropic:claude",  status: "unconfigured", detail: "Isi ANTHROPIC_API_KEY atau pakai BYOK di Settings" };
  const aiGemini: ServiceHealth  = process.env.GEMINI_API_KEY
    ? { service: "google:gemini",     status: "ok",           detail: "Server key terkonfigurasi" }
    : { service: "google:gemini",     status: "unconfigured", detail: "Fallback AI — opsional" };
  const staticAI: ServiceHealth  = { service: "static-analysis", status: "ok", detail: "Selalu tersedia" };
  const apifKey: ServiceHealth   = process.env.APIF_KEY
    ? { service: "api-football:key",  status: "ok",           detail: "Terkonfigurasi (lineup/events gratis 100 req/hari)" }
    : { service: "api-football:key",  status: "unconfigured", detail: "Daftar gratis di api-football.com → isi APIF_KEY" };
  const supa: ServiceHealth      = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? { service: "supabase:leaderboard", status: "ok",           detail: "Terkonfigurasi" }
    : { service: "supabase:leaderboard", status: "unconfigured", detail: "Leaderboard global mati — pakai lokal" };

  const services = [...checks, apifKey, aiClaude, aiGemini, staticAI, supa];
  const liveDataOk = checks.some((c) => c.status === "ok");

  return NextResponse.json({
    summary: {
      appUsable: true,
      liveDataAvailable: liveDataOk,
      message: liveDataOk
        ? "Provider live aktif — skor & events akan update real-time."
        : "Semua provider live tidak terjangkau — app berjalan dengan data embedded (mode demo).",
    },
    services,
    checkedAt: new Date().toISOString(),
  });
}
