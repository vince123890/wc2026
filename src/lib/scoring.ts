// Sistem poin — BA-R02 (diperluas + edge cases)
// +5 skor tepat | +3 outcome + selisih gol benar | +1 outcome benar | +0 salah
// Bonus: +2 upset (menang vs tim rating lebih tinggi ≥5), +1 clean sheet tepat
import type { Prediction, Team } from "./types";

export interface ScoreBreakdown {
  base: number;
  bonusUpset: number;
  bonusCleanSheet: number;
  total: number;
  label: string;
}

function outcome(h: number, a: number): "HOME" | "DRAW" | "AWAY" {
  if (h > a) return "HOME";
  if (h < a) return "AWAY";
  return "DRAW";
}

export function calculatePoints(
  pred: Pick<Prediction, "homeScore" | "awayScore">,
  finalHome: number,
  finalAway: number,
  homeTeam?: Team,
  awayTeam?: Team
): ScoreBreakdown {
  const exact = pred.homeScore === finalHome && pred.awayScore === finalAway;
  const sameOutcome = outcome(pred.homeScore, pred.awayScore) === outcome(finalHome, finalAway);
  const sameDiff = pred.homeScore - pred.awayScore === finalHome - finalAway;

  let base = 0;
  let label = "Meleset";
  if (exact) {
    base = 5;
    label = "Skor tepat!";
  } else if (sameOutcome && sameDiff) {
    base = 3;
    label = "Outcome + selisih gol benar";
  } else if (sameOutcome) {
    base = 1;
    label = "Outcome benar";
  }

  // Bonus upset: prediksi underdog menang dan benar
  let bonusUpset = 0;
  if (base > 0 && homeTeam && awayTeam) {
    const o = outcome(finalHome, finalAway);
    const ratingGap =
      o === "HOME" ? awayTeam.rating - homeTeam.rating : o === "AWAY" ? homeTeam.rating - awayTeam.rating : 0;
    if (o !== "DRAW" && ratingGap >= 5 && sameOutcome) bonusUpset = 2;
  }

  // Bonus clean sheet: menebak tepat salah satu tim nirbobol
  let bonusCleanSheet = 0;
  if (base >= 3 && ((pred.homeScore === 0 && finalHome === 0) || (pred.awayScore === 0 && finalAway === 0))) {
    bonusCleanSheet = 1;
  }

  return { base, bonusUpset, bonusCleanSheet, total: base + bonusUpset + bonusCleanSheet, label };
}

// Deadline tebakan: terkunci saat status berubah ke LIVE (hard deadline, BA-R04)
export function isPredictionLocked(status: string): boolean {
  return !["SCHEDULED", "UPCOMING", "PRE_MATCH"].includes(status);
}
