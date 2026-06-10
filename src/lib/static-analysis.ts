// Static Analysis — fallback terakhir AI chain (AI-R05). Rule-based, tanpa AI.
import type { AIAnalysisResponse, Coach, Team } from "./types";

export function generateStaticAnalysis(
  home: Team,
  away: Team,
  homeCoach?: Coach | null,
  awayCoach?: Coach | null,
  userPrediction?: { homeScore: number; awayScore: number } | null
): AIAnalysisResponse {
  const attackEdge = home.attack - away.attack;
  const defenseEdge = home.defense - away.defense;
  const overall = home.rating - away.rating;

  // Estimasi skor sederhana berbasis rating attack vs defense lawan
  const est = (atk: number, def: number) => Math.max(0, Math.min(4, Math.round((atk - def + 12) / 9)));
  const homeScore = est(home.attack, away.defense);
  const awayScore = est(away.attack, home.defense);

  const favorit = overall > 2 ? home.name : overall < -2 ? away.name : null;

  const reasoning = [
    `Berdasarkan statistik: ${home.name} (rating ${home.rating}, serangan ${home.attack}, pertahanan ${home.defense}) vs ${away.name} (rating ${away.rating}, serangan ${away.attack}, pertahanan ${away.defense}).`,
    favorit
      ? `${favorit} unggul tipis di atas kertas.`
      : "Kekuatan kedua tim sangat berimbang — hasil imbang sangat mungkin.",
    `Form 5 laga terakhir: ${home.name} ${home.form.join("-")}, ${away.name} ${away.form.join("-")}.`,
  ].join(" ");

  const keyPlayers: AIAnalysisResponse["keyPlayers"] = [];
  if (attackEdge >= 0) keyPlayers.push({ team: home.name, name: "Lini serang", position: "FWD", reason: `Serangan ${home.name} (${home.attack}) di atas pertahanan lawan (${away.defense}).` });
  else keyPlayers.push({ team: away.name, name: "Lini serang", position: "FWD", reason: `Serangan ${away.name} (${away.attack}) di atas pertahanan lawan (${home.defense}).` });
  if (defenseEdge >= 0) keyPlayers.push({ team: home.name, name: "Lini belakang", position: "DEF", reason: `Pertahanan ${home.name} lebih solid (${home.defense} vs ${away.defense}).` });
  else keyPlayers.push({ team: away.name, name: "Lini belakang", position: "DEF", reason: `Pertahanan ${away.name} lebih solid (${away.defense} vs ${home.defense}).` });

  let userEval: string | null = null;
  if (userPrediction) {
    const sameOutcome =
      Math.sign(userPrediction.homeScore - userPrediction.awayScore) === Math.sign(homeScore - awayScore);
    userEval = sameOutcome
      ? `Tebakan kamu ${userPrediction.homeScore}-${userPrediction.awayScore} searah dengan estimasi statistik (${homeScore}-${awayScore}).`
      : `Tebakan kamu ${userPrediction.homeScore}-${userPrediction.awayScore} berbeda arah dari estimasi statistik (${homeScore}-${awayScore}) — bisa jadi kamu melihat faktor non-statistik.`;
  }

  return {
    tacticalMatchup:
      homeCoach && awayCoach
        ? `${homeCoach.formation} (${homeCoach.playingStyle}) vs ${awayCoach.formation} (${awayCoach.playingStyle}). Press ${homeCoach.pressStyle} bertemu press ${awayCoach.pressStyle}.`
        : null,
    coachPhilosophy: null,
    keyPlayers,
    prediction: {
      homeScore,
      awayScore,
      alternativeScenario:
        Math.abs(overall) <= 2
          ? "Laga ketat — skenario alternatif: imbang dengan sedikit gol."
          : `Skenario alternatif: ${favorit} menang dengan margin lebih besar jika gol cepat terjadi.`,
      reasoning,
    },
    userPredictionEval: userEval,
    _provider: "static",
  };
}
