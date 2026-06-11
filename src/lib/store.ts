// Zustand — client UI state + persisted predictions/apiKey (FE-R03)
"use client";
import { create } from "zustand";
import type { Prediction, UserProfile } from "./types";
import type { ScoreBreakdown } from "./scoring";

export interface EvaluatedPrediction extends Prediction {
  breakdown: ScoreBreakdown;
  evaluated: true;
  finalHome: number;
  finalAway: number;
}

export interface CustomLineupSide {
  formation?: string;
  positions?: Record<string, { x: number; y: number }>;
  swaps?: [string, string][]; // pasangan [starterId, benchId] yang ditukar
}

export interface CustomLineup {
  home?: CustomLineupSide;
  away?: CustomLineupSide;
}

interface AppState {
  profile: UserProfile;
  predictions: Record<string, Prediction | EvaluatedPrediction>;
  apiKey: string | null;
  apiProvider: "claude" | "gemini";
  apifKey: string | null;
  customLineups: Record<string, CustomLineup>;
  hydrated: boolean;
  onboardingDone: boolean;

  hydrate: () => void;
  setProfile: (p: Partial<UserProfile>) => void;
  savePrediction: (p: Prediction) => void;
  evaluatePrediction: (matchId: string, breakdown: ScoreBreakdown, finalHome: number, finalAway: number) => void;
  setApiKey: (key: string | null, provider: "claude" | "gemini") => void;
  setApifKey: (key: string | null) => void;
  setCustomFormation: (matchId: string, side: "home" | "away", formation: string) => void;
  setCustomPlayerPos: (matchId: string, side: "home" | "away", playerId: string, x: number, y: number) => void;
  swapLineupPlayer: (matchId: string, side: "home" | "away", starterId: string, benchId: string) => void;
  resetCustomLineup: (matchId: string, side?: "home" | "away") => void;
  setOnboardingDone: () => void;
}

const LS_KEY = "wc2026:state:v2";

function persist(state: Pick<AppState, "profile" | "predictions" | "apiKey" | "apiProvider" | "apifKey" | "customLineups" | "onboardingDone">) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch { /* incognito */ }
}

const DEFAULT_PROFILE: UserProfile = {
  nickname: "TamuWC2026",
  totalPoints: 0,
  totalPredictions: 0,
  exactScores: 0,
  correctOutcomes: 0,
};

export const useStore = create<AppState>((set, get) => ({
  profile: DEFAULT_PROFILE,
  predictions: {},
  apiKey: null,
  apiProvider: "claude",
  apifKey: null,
  customLineups: {},
  hydrated: false,
  onboardingDone: false,

  hydrate: () => {
    if (get().hydrated) return;
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) { set({ customLineups: {}, ...JSON.parse(raw), hydrated: true }); return; }
    } catch { /* ignore */ }
    set({ hydrated: true });
  },

  setProfile: (p) => {
    const profile = { ...get().profile, ...p };
    set({ profile });
    persist({ ...get(), profile });
  },

  savePrediction: (pred) => {
    const predictions = { ...get().predictions, [pred.matchId]: pred };
    set({ predictions });
    persist({ ...get(), predictions });
  },

  evaluatePrediction: (matchId, breakdown, finalHome, finalAway) => {
    const existing = get().predictions[matchId];
    if (!existing || (existing as EvaluatedPrediction).evaluated) return;

    const evaluated: EvaluatedPrediction = {
      ...existing, breakdown, evaluated: true, finalHome, finalAway,
      pointsEarned: breakdown.total,
    };
    const predictions = { ...get().predictions, [matchId]: evaluated };

    // Update profile aggregates
    const profile = { ...get().profile };
    profile.totalPoints += breakdown.total;
    profile.totalPredictions += 1;
    if (breakdown.base === 5) profile.exactScores += 1;
    if (breakdown.base >= 1) profile.correctOutcomes += 1;

    set({ predictions, profile });
    persist({ ...get(), predictions, profile });
  },

  setApiKey: (apiKey, apiProvider) => {
    set({ apiKey, apiProvider });
    persist({ ...get(), apiKey, apiProvider });
  },

  setApifKey: (apifKey) => {
    set({ apifKey });
    persist({ ...get(), apifKey });
  },

  setCustomFormation: (matchId, side, formation) => {
    const existing = get().customLineups[matchId] ?? {};
    const customLineups = {
      ...get().customLineups,
      [matchId]: { ...existing, [side]: { ...existing[side], formation } },
    };
    set({ customLineups });
    persist({ ...get(), customLineups });
  },

  setCustomPlayerPos: (matchId, side, playerId, x, y) => {
    const existing = get().customLineups[matchId] ?? {};
    const sideState = existing[side] ?? {};
    const positions = { ...sideState.positions, [playerId]: { x, y } };
    const customLineups = {
      ...get().customLineups,
      [matchId]: { ...existing, [side]: { ...sideState, positions } },
    };
    set({ customLineups });
    persist({ ...get(), customLineups });
  },

  swapLineupPlayer: (matchId, side, starterId, benchId) => {
    const existing = get().customLineups[matchId] ?? {};
    const sideState = existing[side] ?? {};
    const swaps = sideState.swaps ?? [];
    // Jika pasangan ini sudah pernah ditukar, batalkan (toggle kembali)
    const idx = swaps.findIndex(([a, b]) => (a === starterId && b === benchId) || (a === benchId && b === starterId));
    const nextSwaps = idx >= 0 ? swaps.filter((_, i) => i !== idx) : [...swaps, [starterId, benchId] as [string, string]];
    const customLineups = {
      ...get().customLineups,
      [matchId]: { ...existing, [side]: { ...sideState, swaps: nextSwaps } },
    };
    set({ customLineups });
    persist({ ...get(), customLineups });
  },

  resetCustomLineup: (matchId, side) => {
    const customLineups = { ...get().customLineups };
    if (!side) {
      delete customLineups[matchId];
    } else if (customLineups[matchId]) {
      const updated = { ...customLineups[matchId] };
      delete updated[side];
      if (updated.home || updated.away) customLineups[matchId] = updated;
      else delete customLineups[matchId];
    }
    set({ customLineups });
    persist({ ...get(), customLineups });
  },

  setOnboardingDone: () => {
    set({ onboardingDone: true });
    persist({ ...get(), onboardingDone: true });
  },
}));
