// Confidence Tier — dikalkulasi SISTEM, bukan diminta dari AI (AI-R02)
import type { ConfidenceResult, ConfidenceTier } from "./types";

interface ConfidenceInput {
  hasTeamStats: boolean;
  hasLineup: boolean;
  lineupConfirmed: boolean;
  hasCoachProfiles: boolean;
  hasH2H: boolean;
  hasLiveEvents: boolean;
}

const WEIGHTS = {
  teamStats: 25,
  lineup: 20,
  lineupConfirmed: 10,
  coach: 20,
  h2h: 15,
  live: 10,
} as const;

export function calculateSystemConfidence(input: ConfidenceInput): ConfidenceResult {
  const components = [
    { label: "Statistik tim", available: input.hasTeamStats, weight: WEIGHTS.teamStats },
    { label: "Lineup tersedia", available: input.hasLineup, weight: WEIGHTS.lineup },
    { label: "Lineup terkonfirmasi", available: input.lineupConfirmed, weight: WEIGHTS.lineupConfirmed },
    { label: "Profil pelatih", available: input.hasCoachProfiles, weight: WEIGHTS.coach },
    { label: "Head-to-head", available: input.hasH2H, weight: WEIGHTS.h2h },
    { label: "Data live", available: input.hasLiveEvents, weight: WEIGHTS.live },
  ];

  const score = components.reduce((s, c) => s + (c.available ? c.weight : 0), 0);

  let tier: ConfidenceTier = 1;
  if (score >= 85) tier = 4;
  else if (score >= 60) tier = 3;
  else if (score >= 35) tier = 2;

  return { tier, score, components };
}

export const TIER_LABEL: Record<ConfidenceTier, string> = {
  1: "Dasar — statistik umum",
  2: "Menengah — statistik + sebagian lineup",
  3: "Tinggi — lineup & pelatih lengkap",
  4: "Maksimal — semua lapisan data tersedia",
};
