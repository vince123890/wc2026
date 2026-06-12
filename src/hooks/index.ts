// Hooks — TanStack Query (FE-R03: server state). Polling live events (ARCH-R04).
"use client";
import { useQuery } from "@tanstack/react-query";
import type { MatchLineups, MatchEvent, Coach, Team, NewsItem } from "@/lib/types";
import type { RealFixture } from "@/lib/wc2026-data";
import { WC2026_FIXTURES } from "@/lib/wc2026-data";
import { useStore } from "@/lib/store";

// Generic fetch — route handlers return { source, data }
async function fetchProxy<T>(url: string): Promise<{ source: string; data: T }> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<{ source: string; data: T }>;
}

// Tambahkan apifKey BYOK (Settings) ke query string jika diisi user
function withApifKey(url: string, apifKey: string | null): string {
  if (!apifKey) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}apifKey=${encodeURIComponent(apifKey)}`;
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

// Polling: lineup resmi biasanya rilis ~1 jam sebelum kickoff. Selama belum ada
// data resmi (source !== "api-football"/"balldontlie"), cek ulang tiap 60 detik
// supaya panel otomatis berganti dari "perkiraan" ke lineup resmi begitu dirilis.
export function useLineups(matchId: string, enabled = true) {
  const apifKey = useStore((s) => s.apifKey);
  return useQuery({
    queryKey: ["lineups", matchId, apifKey],
    queryFn: () => fetchProxy<MatchLineups | null>(withApifKey(`/api/proxy/lineups?matchId=${matchId}`, apifKey)),
    enabled: enabled && !!matchId,
    refetchInterval: (query) => {
      const source = query.state.data?.source;
      const isOfficial = source === "api-football" || source === "balldontlie" || source === "static-embed";
      return isOfficial ? false : 60_000;
    },
    refetchIntervalInBackground: false,
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

// Skuad lengkap (26 pemain) — enrichment dari API-Football, opsional (Tier 2 addendum)
export function useSquad(teamId: string | undefined) {
  const apifKey = useStore((s) => s.apifKey);
  return useQuery({
    queryKey: ["squad", teamId, apifKey],
    queryFn: () => fetchProxy<import("@/app/api/proxy/squads/route").SquadPlayer[] | null>(
      withApifKey(`/api/proxy/squads?teamId=${teamId}`, apifKey)
    ),
    enabled: !!teamId,
    staleTime: 24 * 60 * 60_000, // 24 jam — skuad jarang berubah
    retry: 0,
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
  const apifKey = useStore((s) => s.apifKey);
  return useQuery({
    queryKey: ["standings", apifKey],
    queryFn: () => fetchProxy<unknown>(withApifKey("/api/proxy/stats?kind=standings", apifKey)),
    staleTime: 60_000,
  });
}

// Live events — polling 30s saat LIVE (ARCH-R04), pause saat tab hidden
export function useMatchEvents(matchId: string, isLive: boolean) {
  const apifKey = useStore((s) => s.apifKey);
  return useQuery({
    queryKey: ["events", matchId, apifKey],
    queryFn: () => fetchProxy<MatchEvent[]>(withApifKey(`/api/proxy/events?matchId=${matchId}`, apifKey)),
    refetchInterval: isLive ? 30_000 : false,
    refetchIntervalInBackground: false,
    enabled: !!matchId,
  });
}

// Pre-match news — Google News RSS (gratis, tanpa API key), hanya sebelum kickoff
export function useMatchNews(homeName: string, awayName: string, enabled = true) {
  return useQuery({
    queryKey: ["match-news", homeName, awayName],
    queryFn: () => fetchProxy<{ home: NewsItem[]; away: NewsItem[] }>(
      `/api/proxy/news?home=${encodeURIComponent(homeName)}&away=${encodeURIComponent(awayName)}`
    ),
    enabled: enabled && !!homeName && !!awayName,
    staleTime: 30 * 60_000,
    retry: 0,
  });
}

// Second-opinion prediction — API-Football /predictions (Tier 2 addendum)
export function useAPIFPrediction(fixtureId: string, enabled = true) {
  const apifKey = useStore((s) => s.apifKey);
  return useQuery({
    queryKey: ["apif-prediction", fixtureId, apifKey],
    queryFn: () => fetchProxy<import("@/app/api/proxy/prediction/route").APIFPredictionData | null>(
      withApifKey(`/api/proxy/prediction?fixtureId=${fixtureId}`, apifKey)
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
