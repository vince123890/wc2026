"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useFixtures, useLineups, useCoach, useMatchEvents } from "@/hooks";
import { useMatchState, useCountdown, canPredict, isLiveState } from "@/hooks/match-state";
import { WC2026_TEAMS } from "@/lib/wc2026-data";
import { calculateSystemConfidence } from "@/lib/confidence";
import { calculatePrediction, calculateTacticalMatchup } from "@/lib/prediction-engine";
import { FormationPitch } from "@/components/FormationPitch";
import { ConfidenceMeter } from "@/components/ConfidenceMeter";
import { AIAnalysisPanel } from "@/components/AIAnalysisPanel";
import { CoachComparison } from "@/components/CoachComparison";
import { CommentaryFeed } from "@/components/MatchPanels";
import { ScoreEvaluation, PostMatchPanel } from "@/components/EvaluationPanels";
import { PredictionPanel, SecondOpinionPanel } from "@/components/PredictionPanel";
import { PlayersPanel } from "@/components/PlayersPanel";
import { H2HPanel } from "@/components/H2HPanel";
import { StatRadarChart } from "@/components/StatChart";
import { StatusBadge, Crest } from "@/components/MatchCard";
import { useStore } from "@/lib/store";
import { getKeyPlayers } from "@/lib/key-players";
import { FIFA_RANKING } from "@/lib/fifa-ranking";
import type { Team } from "@/lib/types";

const TABS = ["Overview", "Taktis", "Pemain", "Lineup", "AI & Prediksi"] as const;
type Tab = (typeof TABS)[number];

function asTeam(id: string | null, name: string): Team {
  const t = id ? WC2026_TEAMS[id] : undefined;
  const r = id ? FIFA_RANKING[id] : undefined;
  const kp = id ? getKeyPlayers(id) : [];
  const avgForm = kp.length ? Math.round(kp.reduce((s,p)=>s+p.form,0)/kp.length*10) : 50;
  return {
    id: id ?? "", name, flag: t?.flag ?? "🏳️",
    color: "#e8b54a", bg: "#0f2417",
    rating: r?.strength ?? 50,
    attack: Math.round((r?.strength ?? 50) * 1.1),
    defense: Math.round((r?.strength ?? 50) * 0.95),
    possession: 50,
    form: kp.slice(0,3).map(p => p.form >= 7 ? "W" : p.form >= 5 ? "D" : "L"),
    gf: 0, ga: 0,
  };
}

export default function MatchPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [tab, setTab] = useState<Tab>("Overview");
  const { data: fxData, isLoading } = useFixtures();
  const fixture = fxData?.fixtures.find((f) => f.id === id);
  const matchState = useMatchState(fixture ?? { id:"",status:"SCHEDULED",kickoff:new Date().toISOString(),round:"",homeName:"",awayName:"",homeId:null,awayId:null,group:"",venue:"" });
  const countdown = useCountdown(fixture?.kickoff ?? new Date().toISOString());
  const { apiKey, apiProvider, predictions } = useStore();
  const live = isLiveState(matchState);
  const isFinished = ["FINISHED","EVALUATED"].includes(fixture?.status ?? "");

  const { data: lineupRes } = useLineups(id, !!fixture);
  const { data: homeCoachRes } = useCoach(fixture?.homeId ?? undefined);
  const { data: awayCoachRes } = useCoach(fixture?.awayId ?? undefined);
  const { data: eventsRes } = useMatchEvents(id, live);

  const lineups = lineupRes?.data ?? null;
  const homeCoach = homeCoachRes?.data ?? null;
  const awayCoach = awayCoachRes?.data ?? null;
  const events = eventsRes?.data ?? [];

  // Compute prediction and tactical matchup from free data sources
  const prediction = useMemo(() => {
    if (!fixture) return null;
    return calculatePrediction(fixture.homeId ?? "", fixture.awayId ?? "", homeCoach, awayCoach);
  }, [fixture?.homeId, fixture?.awayId, homeCoach?.name, awayCoach?.name]);

  const tactical = useMemo(() => {
    return calculateTacticalMatchup(homeCoach, awayCoach);
  }, [homeCoach?.name, awayCoach?.name]);

  const confidence = calculateSystemConfidence({
    hasTeamStats: !!(fixture?.homeId && FIFA_RANKING[fixture.homeId]),
    hasLineup: !!lineups,
    lineupConfirmed: !!lineups?.home.confirmed,
    hasCoachProfiles: !!homeCoach?.winRate && !!awayCoach?.winRate,
    hasH2H: true, // always from embedded dataset
    hasLiveEvents: events.length > 0,
  });

  if (isLoading) return <p className="text-sm text-ink-low">Memuat…</p>;
  if (!fixture) return (
    <div className="space-y-3">
      <p className="text-sm text-ink-mid">Pertandingan tidak ditemukan.</p>
      <Link href="/fixtures" className="text-sm text-gold underline">← Jadwal</Link>
    </div>
  );

  const home = asTeam(fixture.homeId, fixture.homeName);
  const away = asTeam(fixture.awayId, fixture.awayName);

  return (
    <div className="space-y-4">
      {/* Scoreboard */}
      <header className="rounded-2xl border border-pitch-700 bg-pitch-900/60 p-5">
        <div className="mb-3 flex items-center justify-between text-[11px] text-ink-low">
          <span>{fixture.group || fixture.round}</span>
          <StatusBadge status={matchState} />
        </div>
        <div className="flex items-center justify-center gap-6">
          <TeamHead teamId={fixture.homeId} name={fixture.homeName} />
          <div className="tabular text-center">
            {fixture.homeScore != null
              ? <span className="text-3xl font-bold text-ink-hi">{fixture.homeScore} – {fixture.awayScore}</span>
              : prediction
                ? <div>
                    <div className="text-xl font-bold text-gold">{prediction.homeScore} – {prediction.awayScore}</div>
                    <div className="text-[10px] text-ink-low">prediksi sistem</div>
                  </div>
                : <span className="text-xl text-ink-low">vs</span>}
          </div>
          <TeamHead teamId={fixture.awayId} name={fixture.awayName} />
        </div>
        <div className="mt-3 text-center text-[11px] text-ink-low">
          {fixture.venue} · {new Date(fixture.kickoff).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short",timeZone:"Asia/Jakarta"})} WIB
        </div>
        {canPredict(matchState) && countdown.secondsLeft > 0 && (
          <div className={`mt-2 text-center text-xs font-semibold ${countdown.isUnder10Min ? "text-live animate-pulse" : countdown.isUnder1Hour ? "text-gold" : "text-ink-mid"}`}>
            {countdown.isUnder10Min ? "⚠️ " : "⏱ "}Kickoff dalam {countdown.label}
            {countdown.isUnder10Min && " — tebakan segera dikunci!"}
          </div>
        )}
      </header>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-pitch-700 pb-0">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`whitespace-nowrap px-4 py-2 text-sm transition ${
              tab === t ? "border-b-2 border-gold text-ink-hi" : "text-ink-mid hover:text-ink-hi"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ── */}
      {tab === "Overview" && (
        <div className="space-y-4">
          <ConfidenceMeter result={confidence} />
          <StatRadarChart home={home} away={away} />
          <H2HPanel homeId={fixture.homeId ?? ""} awayId={fixture.awayId ?? ""}
            homeName={fixture.homeName} awayName={fixture.awayName} />
          {isFinished && <ScoreEvaluation fixture={fixture} />}
          {live && (
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink-hi">
                <span className="live-dot h-2 w-2 rounded-full bg-live" /> Live Commentary
              </h3>
              <CommentaryFeed events={events} />
            </div>
          )}
          {isFinished && <PostMatchPanel fixture={fixture} apiKey={apiKey} apiProvider={apiProvider} />}
        </div>
      )}

      {/* ── TAKTIS ── */}
      {tab === "Taktis" && (
        <div className="space-y-4">
          {homeCoach && awayCoach ? (
            <>
              <CoachComparison homeCoach={homeCoach} awayCoach={awayCoach}
                homeName={fixture.homeName} awayName={fixture.awayName} />
              <TacticalSummary tactical={tactical} homeName={fixture.homeName} awayName={fixture.awayName} />
            </>
          ) : (
            <EmptyState title="Data pelatih dimuat…" detail="Profil pelatih akan tampil sebentar lagi." />
          )}
        </div>
      )}

      {/* ── PEMAIN ── */}
      {tab === "Pemain" && (
        <PlayersPanel homeId={fixture.homeId ?? ""} awayId={fixture.awayId ?? ""}
          homeName={fixture.homeName} awayName={fixture.awayName} />
      )}

      {/* ── LINEUP ── */}
      {tab === "Lineup" && (
        lineups
          ? <FormationPitch lineups={lineups} homeId={fixture.homeId!} awayId={fixture.awayId!} />
          : <EmptyState
              title="Lineup belum tersedia"
              detail="Lineup biasanya dirilis ~1 jam sebelum kickoff. Butuh API key API-Football (gratis)."
              hint="Isi API Key API-Football di Pengaturan untuk mengaktifkan. Free tier: 100 req/hari." />
      )}

      {/* ── AI & PREDIKSI ── */}
      {tab === "AI & Prediksi" && (
        <div className="space-y-4">
          {prediction && (
            <PredictionPanel fixture={fixture} prediction={prediction} />
          )}
          <SecondOpinionPanel fixture={fixture} />
          <AIAnalysisPanel
            home={home} away={away}
            homeCoach={homeCoach} awayCoach={awayCoach}
            tier={confidence.tier}
            prediction={predictions[fixture.id] ?? null}
          />
        </div>
      )}
    </div>
  );
}

function TacticalSummary({ tactical, homeName, awayName }: {
  tactical: ReturnType<typeof calculateTacticalMatchup>;
  homeName: string; awayName: string;
}) {
  const adv = tactical.dominance === "HOME" ? homeName : tactical.dominance === "AWAY" ? awayName : "Seimbang";
  const color = tactical.dominance === "HOME" ? "text-gold" : tactical.dominance === "AWAY" ? "text-win" : "text-ink-mid";
  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-hi">Analisis Taktis</h3>
        <span className={`text-sm font-bold ${color}`}>{adv} diuntungkan</span>
      </div>
      <p className="text-xs text-ink-mid leading-relaxed">{tactical.description}</p>
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        {[
          { label: "Formasi", val: tactical.homeFormationAdv },
          { label: "Press style", val: tactical.homePressAdv },
          { label: "Gaya bermain", val: tactical.homeStyleAdv },
          { label: "Kualitas pelatih", val: tactical.homeCoachAdv },
        ].map(f => (
          <div key={f.label} className="flex justify-between border-b border-pitch-800 pb-1">
            <span className="text-ink-low">{f.label}</span>
            <span className={`tabular font-medium ${f.val > 0 ? "text-gold" : f.val < 0 ? "text-win" : "text-ink-mid"}`}>
              {f.val > 0 ? `+${(f.val*100).toFixed(0)}% ${homeName}` : f.val < 0 ? `+${(Math.abs(f.val)*100).toFixed(0)}% ${awayName}` : "Netral"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamHead({ teamId, name }: { teamId: string | null; name: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      {teamId ? <Crest teamId={teamId} size={48} /> : <span className="text-4xl">🏳️</span>}
      <span className="max-w-[80px] text-center text-sm leading-tight text-ink-hi">{name}</span>
    </div>
  );
}

function EmptyState({ title, detail, hint }: { title: string; detail: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-pitch-700 bg-pitch-900/40 p-8 text-center space-y-1">
      <p className="text-sm font-semibold text-ink-mid">{title}</p>
      <p className="text-xs text-ink-low">{detail}</p>
      {hint && <p className="text-[11px] text-gold/70">{hint}</p>}
    </div>
  );
}
