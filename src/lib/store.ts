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

interface AppState {
  profile: UserProfile;
  predictions: Record<string, Prediction | EvaluatedPrediction>;
  apiKey: string | null;
  apiProvider: "claude" | "gemini";
  apifKey: string | null;
  hydrated: boolean;
  onboardingDone: boolean;

  hydrate: () => void;
  setProfile: (p: Partial<UserProfile>) => void;
  savePrediction: (p: Prediction) => void;
  evaluatePrediction: (matchId: string, breakdown: ScoreBreakdown, finalHome: number, finalAway: number) => void;
  setApiKey: (key: string | null, provider: "claude" | "gemini") => void;
  setApifKey: (key: string | null) => void;
  setOnboardingDone: () => void;
}

const LS_KEY = "wc2026:state:v2";

function persist(state: Pick<AppState, "profile" | "predictions" | "apiKey" | "apiProvider" | "apifKey" | "onboardingDone">) {
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
  hydrated: false,
  onboardingDone: false,

  hydrate: () => {
    if (get().hydrated) return;
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) { set({ ...JSON.parse(raw), hydrated: true }); return; }
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

  setOnboardingDone: () => {
    set({ onboardingDone: true });
    persist({ ...get(), onboardingDone: true });
  },
}));
