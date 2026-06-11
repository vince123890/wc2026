"use client";
import { useState } from "react";
import type { PredictionResult } from "@/lib/prediction-engine";
import type { RealFixture } from "@/lib/wc2026-data";
import { WC2026_TEAMS } from "@/lib/wc2026-data";
import { isPredictionLocked } from "@/lib/scoring";
import { useStore } from "@/lib/store";
import { useAPIFPrediction } from "@/hooks";

interface Props {
  fixture: RealFixture;
  prediction: PredictionResult;
  onRequestAI?: () => void;
}

export function PredictionPanel({ fixture, prediction, onRequestAI }: Props) {
  const { predictions, savePrediction } = useStore();
  const existing = predictions[fixture.id];
  const locked = isPredictionLocked(fixture.status);
  const [h, setH] = useState(existing?.homeScore ?? prediction.homeScore);
  const [a, setA] = useState(existing?.awayScore ?? prediction.awayScore);
  const [saved, setSaved] = useState(false);
  const [useSystem, setUseSystem] = useState(false);

  const home = WC2026_TEAMS[fixture.homeId ?? ""];
  const away = WC2026_TEAMS[fixture.awayId ?? ""];

  function acceptSystem() {
    setH(prediction.homeScore);
    setA(prediction.awayScore);
    setUseSystem(true);
  }

  function submit() {
    savePrediction({ matchId: fixture.id, homeScore: h, awayScore: a, createdAt: new Date().toISOString() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const barW = prediction.probHomeWin;
  const barD = prediction.probDraw;

  return (
    <div className="space-y-4">
      {/* System prediction card */}
      <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink-hi">🔮 Prediksi Sistem</h3>
          <span className="tabular rounded bg-gold/20 px-2 py-0.5 text-[10px] text-gold">
            Confidence {prediction.confidence}%
          </span>
        </div>

        {/* Big score display */}
        <div className="mb-3 flex items-center justify-center gap-8">
          <TeamScore flag={home?.flag} name={fixture.homeName} score={prediction.homeScore} />
          <div className="text-center">
            <div className="tabular text-3xl font-bold text-ink-hi">
              {prediction.homeScore} – {prediction.awayScore}
            </div>
            <div className="text-[10px] text-ink-low mt-0.5">
              xG {prediction.expectedGoalsHome.toFixed(2)} – {prediction.expectedGoalsAway.toFixed(2)}
            </div>
          </div>
          <TeamScore flag={away?.flag} name={fixture.awayName} score={prediction.awayScore} />
        </div>

        {/* Probability bar */}
        <div className="mb-3">
          <div className="flex h-5 overflow-hidden rounded-full text-[10px] font-bold">
            <div className="flex items-center justify-center bg-gold/70 text-pitch-950 transition-all"
              style={{ width: `${barW}%` }}>{barW > 12 ? `${barW}%` : ""}</div>
            <div className="flex items-center justify-center bg-pitch-700 text-ink-mid transition-all"
              style={{ width: `${barD}%` }}>{barD > 10 ? `${barD}%` : ""}</div>
            <div className="flex items-center justify-center bg-win/60 text-pitch-950 transition-all"
              style={{ width: `${prediction.probAwayWin}%` }}>
              {prediction.probAwayWin > 12 ? `${prediction.probAwayWin}%` : ""}
            </div>
          </div>
          <div className="tabular mt-0.5 flex justify-between text-[10px] text-ink-low">
            <span>{fixture.homeName} menang</span>
            <span>Seri</span>
            <span>{fixture.awayName} menang</span>
          </div>
        </div>

        {/* Alternative scenario */}
        <p className="text-xs text-ink-mid">{prediction.explanation}</p>
        {(prediction.altHomeScore !== prediction.homeScore || prediction.altAwayScore !== prediction.awayScore) && (
          <p className="mt-1 text-[11px] italic text-ink-low">
            Skenario alternatif: {prediction.altHomeScore}–{prediction.altAwayScore}
          </p>
        )}

        {/* Factor breakdown */}
        <FactorBreakdown factors={prediction.factors} />
      </div>

      {/* User prediction input */}
      {!locked && (
        <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink-hi">⚽ Tebakan Kamu</h3>
            {existing && (
              <span className="tabular text-[11px] text-gold">
                Tersimpan: {existing.homeScore}–{existing.awayScore}
              </span>
            )}
          </div>

          {!useSystem && (
            <button onClick={acceptSystem}
              className="mb-3 w-full rounded-lg border border-gold/30 py-1.5 text-xs text-gold hover:bg-gold/10">
              ✓ Pakai prediksi sistem ({prediction.homeScore}–{prediction.awayScore})
            </button>
          )}

          <div className="flex items-center justify-center gap-3">
            <Stepper label={`${home?.flag} ${fixture.homeName}`} value={h} onChange={setH} />
            <span className="tabular pb-5 text-xl text-ink-low">–</span>
            <Stepper label={`${away?.flag} ${fixture.awayName}`} value={a} onChange={setA} />
          </div>

          {/* Feedback vs system */}
          {(h !== prediction.homeScore || a !== prediction.awayScore) && (
            <p className="mt-2 text-center text-[11px] text-ink-mid">
              Tebakanmu berbeda dari sistem ({prediction.homeScore}–{prediction.awayScore}) —
              kamu punya keyakinan tersendiri!
            </p>
          )}

          <button onClick={submit}
            className="mt-3 w-full rounded-lg bg-gold py-2 text-sm font-semibold text-pitch-950 hover:bg-gold/90">
            {saved ? "✓ Tersimpan" : existing ? "Perbarui tebakan" : "Kunci tebakan"}
          </button>
        </div>
      )}

      {locked && (
        <div className="rounded-xl border border-pitch-700 bg-pitch-900/40 p-3 text-xs text-ink-mid">
          🔒 Tebakan dikunci — pertandingan sudah dimulai.
          {existing && <span className="tabular block mt-1 text-ink-hi">Tebakanmu: {existing.homeScore}–{existing.awayScore}</span>}
        </div>
      )}
    </div>
  );
}

function TeamScore({ flag, name, score }: { flag?: string; name: string; score: number }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-3xl">{flag ?? "🏳️"}</span>
      <span className="max-w-[70px] text-[11px] leading-tight text-ink-mid">{name}</span>
    </div>
  );
}

function Stepper({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button onClick={() => onChange(Math.min(9, value + 1))}
        className="h-7 w-10 rounded-md bg-pitch-700 text-sm text-ink-hi hover:bg-pitch-line">▲</button>
      <span className="tabular text-2xl font-bold text-ink-hi">{value}</span>
      <button onClick={() => onChange(Math.max(0, value - 1))}
        className="h-7 w-10 rounded-md bg-pitch-700 text-sm text-ink-hi hover:bg-pitch-line">▼</button>
      <span className="max-w-[80px] truncate text-center text-[10px] text-ink-low">{label}</span>
    </div>
  );
}

function FactorBreakdown({ factors }: { factors: PredictionResult["factors"] }) {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Ranking FIFA", val: factors.ranking, icon: "🏅" },
    { label: "Taktis + Formasi", val: factors.tactical, icon: "♟️" },
    { label: "Head-to-Head historis", val: factors.h2h, icon: "📜" },
    { label: "Kekuatan lineup", val: factors.lineup, icon: "👕" },
    { label: "Kualitas pelatih", val: factors.coach, icon: "🧠" },
  ];
  return (
    <div className="mt-2">
      <button onClick={() => setOpen(v => !v)}
        className="text-[11px] text-ink-low underline decoration-dotted hover:text-gold">
        {open ? "Sembunyikan faktor" : "Lihat faktor prediksi"}
      </button>
      {open && (
        <div className="mt-2 space-y-1">
          {items.map(it => {
            const pct = Math.round(Math.abs(it.val) * 100);
            const dir = it.val > 0.01 ? "tim kandang" : it.val < -0.01 ? "tim tandang" : "netral";
            return (
              <div key={it.label} className="flex items-center gap-2 text-[11px]">
                <span>{it.icon}</span>
                <span className="flex-1 text-ink-mid">{it.label}</span>
                <span className={`tabular ${it.val > 0.01 ? "text-gold" : it.val < -0.01 ? "text-win" : "text-ink-low"}`}>
                  {it.val > 0.01 ? `+${pct}% → ${dir}` : it.val < -0.01 ? `-${pct}% → ${dir}` : "netral"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Second opinion — API-Football /predictions (Tier 2 addendum, gratis dalam kuota 100 req/hari)
 * Ditampilkan sebagai pembanding terhadap Prediction Score Engine internal.
 */
export function SecondOpinionPanel({ fixture }: { fixture: RealFixture }) {
  const { data, isLoading } = useAPIFPrediction(fixture.id);
  const opinion = data?.data;

  if (isLoading) return null;
  if (!opinion || (!opinion.winner && !opinion.advice)) return null;

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-hi">🆚 Second Opinion — API-Football</h3>
        <span className="rounded bg-pitch-700 px-2 py-0.5 text-[10px] text-ink-low">Gratis</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-lg bg-pitch-950/40 p-2">
          <div className="text-[10px] text-ink-low">{fixture.homeName}</div>
          <div className="tabular text-base font-bold text-gold">{opinion.percent.home}</div>
        </div>
        <div className="rounded-lg bg-pitch-950/40 p-2">
          <div className="text-[10px] text-ink-low">Seri</div>
          <div className="tabular text-base font-bold text-ink-mid">{opinion.percent.draw}</div>
        </div>
        <div className="rounded-lg bg-pitch-950/40 p-2">
          <div className="text-[10px] text-ink-low">{fixture.awayName}</div>
          <div className="tabular text-base font-bold text-win">{opinion.percent.away}</div>
        </div>
      </div>
      {(opinion.goals.home || opinion.goals.away) && (
        <p className="tabular mt-2 text-center text-[11px] text-ink-mid">
          Prediksi gol: {opinion.goals.home ?? "?"} – {opinion.goals.away ?? "?"}
        </p>
      )}
      {opinion.advice && (
        <p className="mt-2 text-center text-[11px] italic text-ink-low">"{opinion.advice}"</p>
      )}
    </div>
  );
}
