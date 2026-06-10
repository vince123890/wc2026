"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFixtures } from "@/hooks";
import { MatchCard } from "@/components/MatchCard";
import { WC2026_GROUPS, WC2026_TEAMS } from "@/lib/wc2026-data";

const STAGES = ["Fase Grup", "Knockout"] as const;
type Stage = (typeof STAGES)[number];

const GROUP_ORDER = Object.keys(WC2026_GROUPS).sort();

const KNOCKOUT_ROUND_ORDER = [
  "Round of 32","Round of 16","Quarter-final","Semi-final","Match for third place","Final",
];

export default function FixturesPage() {
  const router = useRouter();
  const { data, isLoading } = useFixtures();
  const [stage, setStage] = useState<Stage>("Fase Grup");
  const [activeGroup, setActiveGroup] = useState<string>("Group A");

  const fixtures = data?.fixtures ?? [];

  const isKnockout = (f: (typeof fixtures)[0]) =>
    KNOCKOUT_ROUND_ORDER.includes(f.round);

  const groupFixtures = fixtures.filter((f) => !isKnockout(f) && !!f.group);
  const knockoutFixtures = fixtures.filter(isKnockout);

  const byGroup = GROUP_ORDER.reduce<Record<string, typeof fixtures>>((acc, g) => {
    acc[g] = groupFixtures
      .filter((f) => f.group === g)
      .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime());
    return acc;
  }, {});

  const byKnockoutRound = knockoutFixtures.reduce<Record<string, typeof fixtures>>((acc, f) => {
    (acc[f.round] ??= []).push(f);
    return acc;
  }, {});

  const activeTeams: string[] = WC2026_GROUPS[activeGroup] ?? [];
  const activeFixtures = byGroup[activeGroup] ?? [];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-hi">Jadwal Pertandingan</h1>
        <p className="text-xs text-ink-low">
          FIFA World Cup 2026 · {fixtures.length} pertandingan · {data?.source ?? "memuat…"}
        </p>
      </div>

      {/* Stage toggle */}
      <div className="flex gap-2">
        {STAGES.map((s) => (
          <button key={s} onClick={() => setStage(s)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
              stage === s ? "bg-gold text-pitch-950" : "border border-pitch-700 text-ink-mid hover:border-gold/40"
            }`}>
            {s}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="space-y-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="h-16 rounded-xl bg-pitch-900/60 animate-pulse border border-pitch-700" />
          ))}
        </div>
      )}

      {/* ── FASE GRUP ── */}
      {!isLoading && stage === "Fase Grup" && (
        <div className="space-y-4">
          {/* Group tabs A–L */}
          <div className="flex flex-wrap gap-1.5">
            {GROUP_ORDER.map((g) => {
              const letter = g.replace("Group ", "");
              return (
                <button key={g} onClick={() => setActiveGroup(g)}
                  className={`h-8 w-8 rounded-lg text-xs font-bold transition ${
                    activeGroup === g
                      ? "bg-gold text-pitch-950"
                      : "border border-pitch-700 text-ink-mid hover:border-gold/40"
                  }`}>
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Group header — 4 teams */}
          <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3">
            <div className="mb-2 text-sm font-semibold text-gold">{activeGroup}</div>
            <div className="flex flex-wrap gap-3">
              {activeTeams.map((id) => {
                const t = WC2026_TEAMS[id];
                return (
                  <span key={id} className="flex items-center gap-1.5 text-xs text-ink-hi">
                    <span className="text-base">{t?.flag ?? "🏳️"}</span>
                    <span>{t?.name ?? id}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Fixtures list */}
          <div className="grid gap-2">
            {activeFixtures.length > 0 ? (
              activeFixtures.map((f) => (
                <MatchCard key={f.id} fixture={f} onClick={() => router.push(`/match/${f.id}`)} />
              ))
            ) : (
              <p className="text-sm text-ink-low">Tidak ada pertandingan di grup ini.</p>
            )}
          </div>
        </div>
      )}

      {/* ── KNOCKOUT ── */}
      {!isLoading && stage === "Knockout" && (
        <div className="space-y-6">
          {KNOCKOUT_ROUND_ORDER.filter((r) => byKnockoutRound[r]?.length).map((round) => (
            <section key={round}>
              <h2 className="mb-2 text-sm font-semibold text-gold">{round}</h2>
              <div className="grid gap-2">
                {byKnockoutRound[round].map((f) => (
                  <MatchCard key={f.id} fixture={f} onClick={() => router.push(`/match/${f.id}`)} />
                ))}
              </div>
            </section>
          ))}
          {Object.keys(byKnockoutRound).length === 0 && (
            <p className="text-sm text-ink-low">
              Jadwal knockout akan muncul setelah fase grup selesai.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
