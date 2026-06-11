// Hooks — TanStack Query (FE-R03: server state). Polling live events (ARCH-R04).
"use client";
import { useQuery } from "@tanstack/react-query";
import type { MatchLineups, MatchEvent, Coach, Team } from "@/lib/types";
import type { RealFixture } from "@/lib/wc2026-data";
import { WC2026_FIXTURES } from "@/lib/wc2026-data";

// Generic fetch — route handlers return { source, data }
async function fetchProxy<T>(url: string): Promise<{ source: string; data: T }> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<{ source: string; data: T }>;
}

// Fixtures: pakai embedded WC2026 sebagai data utama,
// lalu overlay skor live dari API jika tersedia.
export function useFixtures() {
  return useQuery({
    queryKey: ["fixtures"],
    queryFn: async () => {
      try {
        const res = await fetchProxy<RealFixture[]>("/api/proxy/fixtures");
        // Validasi: harus array RealFixture yang valid
        const list = Array.isArray(res.data) && res.data.length > 50
          ? res.data
          : WC2026_FIXTURES;
        return { fixtures: list, source: res.source };
      } catch {
        return { fixtures: WC2026_FIXTURES, source: "wc2026-embedded" };
      }
    },
    staleTime: 30_000,
    retry: 1,
  });
}

export function useLineups(matchId: string, enabled = true) {
  return useQuery({
    queryKey: ["lineups", matchId],
    queryFn: () => fetchProxy<MatchLineups | null>(`/api/proxy/lineups?matchId=${matchId}`),
    enabled: enabled && !!matchId,
  });
}

export function useCoach(teamId: string | undefined) {
  return useQuery({
    queryKey: ["coach", teamId],
    queryFn: () => fetchProxy<Coach | null>(`/api/proxy/coaches?teamId=${teamId}`),
    enabled: !!teamId,
    staleTime: 60 * 60_000, // 1 jam — data pelatih jarang berubah
  });
}

export function useTeams() {
  return useQuery({
    queryKey: ["teams"],
    queryFn: () => fetchProxy<Record<string, Team>>("/api/proxy/stats?kind=teams"),
    staleTime: 5 * 60_000,
  });
}

export function useStandings() {
  return useQuery({
    queryKey: ["standings"],
    queryFn: () => fetchProxy<unknown>("/api/proxy/stats?kind=standings"),
    staleTime: 60_000,
  });
}

// Live events — polling 30s saat LIVE (ARCH-R04), pause saat tab hidden
export function useMatchEvents(matchId: string, isLive: boolean) {
  return useQuery({
    queryKey: ["events", matchId],
    queryFn: () => fetchProxy<MatchEvent[]>(`/api/proxy/events?matchId=${matchId}`),
    refetchInterval: isLive ? 30_000 : false,
    refetchIntervalInBackground: false,
    enabled: !!matchId,
  });
}

// Second-opinion prediction — API-Football /predictions (Tier 2 addendum)
export function useAPIFPrediction(fixtureId: string, enabled = true) {
  return useQuery({
    queryKey: ["apif-prediction", fixtureId],
    queryFn: () => fetchProxy<import("@/app/api/proxy/prediction/route").APIFPredictionData | null>(
      `/api/proxy/prediction?fixtureId=${fixtureId}`
    ),
    enabled: enabled && !!fixtureId,
    staleTime: 60 * 60_000,
    retry: 0,
  });
}

export interface HealthReport {
  summary: { appUsable: boolean; liveDataAvailable: boolean; message: string };
  services: { service: string; status: string; detail: string; latencyMs?: number }[];
  checkedAt: string;
}

export function useHealth() {
  return useQuery({
    queryKey: ["health"],
    queryFn: () => fetch("/api/proxy/health").then((r) => r.json() as Promise<HealthReport>),
    staleTime: 0,
    retry: 0,
  });
}
