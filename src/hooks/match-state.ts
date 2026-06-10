"use client";
import { useEffect, useState } from "react";
import type { RealFixture } from "@/lib/wc2026-data";

// Countdown ke kickoff dengan toast "10 menit lagi" (BA-R04)
export function useCountdown(kickoffISO: string) {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [fired10min, setFired10min] = useState(false);

  useEffect(() => {
    const target = new Date(kickoffISO).getTime();
    const tick = () => {
      const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
      setSecondsLeft(diff);
      if (diff <= 600 && diff > 0 && !fired10min) {
        setFired10min(true);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [kickoffISO, fired10min]);

  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;

  return {
    secondsLeft,
    label: secondsLeft <= 0 ? "Segera dimulai" : h > 0 ? `${h}j ${m}m` : m > 0 ? `${m}m ${s}s` : `${s}s`,
    isUnder10Min: secondsLeft > 0 && secondsLeft <= 600,
    isUnder1Hour: secondsLeft > 0 && secondsLeft <= 3600,
    justReached10min: fired10min,
  };
}

// Match State Machine hook (FR-24) — transisi berdasarkan waktu + status API
export type MatchState =
  | "SCHEDULED"   // > 72 jam sebelum kickoff
  | "UPCOMING"    // ≤ 72 jam sebelum kickoff
  | "PRE_MATCH"   // ≤ 2 jam sebelum kickoff
  | "LIVE"        // status API = LIVE/1H/2H
  | "HALF_TIME"   // status API = HT
  | "EXTRA_TIME"  // status API = ET
  | "PENALTY"     // status API = P
  | "FINISHED"    // status API = FT/AET/PEN
  | "EVALUATED";  // setelah hitung poin selesai

export function useMatchState(fixture: RealFixture, isEvaluated = false): MatchState {
  const [state, setState] = useState<MatchState>("SCHEDULED");

  useEffect(() => {
    // Jika ada status dari API, pakai itu
    const apiState = fixture.status as MatchState;
    if (["LIVE", "HALF_TIME", "EXTRA_TIME", "PENALTY", "FINISHED"].includes(apiState)) {
      if (isEvaluated && apiState === "FINISHED") { setState("EVALUATED"); return; }
      setState(apiState);
      return;
    }

    // Hitung dari waktu kickoff
    const now = Date.now();
    const kickoff = new Date(fixture.kickoff).getTime();
    const diff = kickoff - now; // ms

    if (diff <= 0) {
      setState("LIVE"); // belum ada status API, assume sudah mulai
    } else if (diff <= 2 * 3600 * 1000) {
      setState("PRE_MATCH");
    } else if (diff <= 72 * 3600 * 1000) {
      setState("UPCOMING");
    } else {
      setState("SCHEDULED");
    }

    // Re-check setiap menit
    const id = setInterval(() => {
      const d = new Date(fixture.kickoff).getTime() - Date.now();
      if (d <= 0) setState("LIVE");
      else if (d <= 2 * 3600 * 1000) setState("PRE_MATCH");
      else if (d <= 72 * 3600 * 1000) setState("UPCOMING");
    }, 60_000);
    return () => clearInterval(id);
  }, [fixture.kickoff, fixture.status, isEvaluated]);

  return state;
}

export function canPredict(state: MatchState): boolean {
  return state === "UPCOMING" || state === "PRE_MATCH" || state === "SCHEDULED";
}

export function isLiveState(state: MatchState): boolean {
  return state === "LIVE" || state === "HALF_TIME" || state === "EXTRA_TIME" || state === "PENALTY";
}
