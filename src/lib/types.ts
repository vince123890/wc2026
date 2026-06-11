// Domain types — mengikuti ERD di SYSTEM-ANALYSIS v3.0

export type MatchStatus =
  | "SCHEDULED"
  | "UPCOMING"
  | "PRE_MATCH"
  | "LIVE"
  | "HALF_TIME"
  | "EXTRA_TIME"
  | "PENALTY"
  | "FINISHED"
  | "EVALUATED";

export interface Team {
  id: string;
  name: string;
  flag: string;
  color: string;
  bg: string;
  rating: number;
  attack: number;
  defense: number;
  possession: number;
  form: string[]; // W/D/L
  gf: number;
  ga: number;
}

export interface Coach {
  id: string;
  teamId: string;
  name: string;
  nationality: string;
  age: number;
  formation: string;
  winRate: number;
  drawRate: number;
  lossRate: number;
  philosophy: string;
  pressStyle: "HIGH" | "MID" | "LOW";
  playingStyle: "POSSESSION" | "COUNTER" | "DIRECT" | "HYBRID";
  wcExp: number;
  titles: string;
  traits: string[];
}

export interface Fixture {
  id: string;
  homeId: string;
  awayId: string;
  kickoff: string;
  status: MatchStatus;
  minute: number | null;
  homeScore: number | null;
  awayScore: number | null;
  stage: string;
  group: string;
  venue: string;
  city: string;
}

export interface LineupPlayer {
  id: string;
  name: string;
  short?: string;
  pos: string;
  jersey: number;
  x?: number;
  y?: number;
  captain?: boolean;
}

export interface TeamLineup {
  formation: string;
  confirmed: boolean;
  starters: LineupPlayer[];
  bench: LineupPlayer[];
}

export interface MatchLineups {
  home: TeamLineup;
  away: TeamLineup;
}

export interface MatchEvent {
  id: string;
  min: number;
  type: string;
  teamId: string | null;
  playerId: string | null;
  desc: string;
  aiComment?: string;
}

export interface StandingRow {
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  pts: number;
}

export interface Prediction {
  matchId: string;
  homeScore: number;
  awayScore: number;
  createdAt: string;
  pointsEarned?: number;
  evaluated?: boolean;
  bonusUpset?: boolean;
  bonusCleanSheet?: boolean;
}

export interface UserProfile {
  nickname: string;
  totalPoints: number;
  totalPredictions: number;
  exactScores: number;
  correctOutcomes: number;
}

export type ConfidenceTier = 1 | 2 | 3 | 4;

export interface ConfidenceResult {
  tier: ConfidenceTier;
  score: number; // 0–100
  components: { label: string; available: boolean; weight: number }[];
}

// Skema JSON output AI — AI-R01
export interface AIAnalysisResponse {
  tacticalMatchup: string | null;
  coachPhilosophy: string | null;
  keyPlayers: { team: string; name: string; position: string; reason: string }[];
  prediction: {
    homeScore: number;
    awayScore: number;
    alternativeScenario: string;
    reasoning: string;
  };
  userPredictionEval: string | null;
  postMatchSummary?: string | null;
  _provider?: "claude" | "gemini" | "static";
  _debug?: string;
}

export interface ServiceHealth {
  service: string;
  status: "ok" | "degraded" | "down" | "unconfigured";
  detail: string;
  latencyMs?: number;
}
