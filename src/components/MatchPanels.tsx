"use client";
import { useState } from "react";
import type { MatchEvent } from "@/lib/types";
import type { RealFixture } from "@/lib/wc2026-data";
import { isPredictionLocked } from "@/lib/scoring";
import { useStore } from "@/lib/store";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

export function PredictionForm({ fixture }: { fixture: RealFixture }) {
  const { predictions, savePrediction } = useStore();
  const existing = predictions[fixture.id];
  const [h, setH] = useState(existing?.homeScore ?? 0);
  const [a, setA] = useState(existing?.awayScore ?? 0);
  const [saved, setSaved] = useState(false);
  const locked = isPredictionLocked(fixture.status);

  const home = fixture.homeId ? WC2026_TEAMS[fixture.homeId] : undefined;
  const away = fixture.awayId ? WC2026_TEAMS[fixture.awayId] : undefined;

  function submit() {
    savePrediction({ matchId: fixture.id, homeScore: h, awayScore: a, createdAt: new Date().toISOString() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
      <h3 className="mb-3 text-sm font-semibold text-ink-hi">Tebak Skor</h3>
      {locked ? (
        <p className="text-xs text-ink-mid">
          Tebakan terkunci — pertandingan sudah dimulai.
          {existing && (
            <span className="tabular mt-2 block text-ink-hi">
              Tebakanmu: {existing.homeScore} – {existing.awayScore}
            </span>
          )}
        </p>
      ) : (
        <>
          <div className="flex items-center justify-center gap-3">
            <Stepper label={`${home?.flag} ${home?.name}`} value={h} onChange={setH} />
            <span className="tabular pb-5 text-xl text-ink-low">–</span>
            <Stepper label={`${away?.flag} ${away?.name}`} value={a} onChange={setA} />
          </div>
          <button
            onClick={submit}
            className="mt-4 w-full rounded-lg bg-gold py-2 text-sm font-semibold text-pitch-950"
          >
            {saved ? "Tersimpan ✓" : existing ? "Perbarui tebakan" : "Kunci tebakan"}
          </button>
        </>
      )}
    </div>
  );
}

function Stepper({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() => onChange(Math.min(9, value + 1))}
        className="h-7 w-10 rounded-md bg-pitch-700 text-ink-hi hover:bg-pitch-line"
        aria-label="Tambah"
      >
        ▲
      </button>
      <span className="tabular text-2xl font-bold text-ink-hi">{value}</span>
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="h-7 w-10 rounded-md bg-pitch-700 text-ink-hi hover:bg-pitch-line"
        aria-label="Kurang"
      >
        ▼
      </button>
      <span className="max-w-[90px] truncate text-center text-[10px] text-ink-low">{label}</span>
    </div>
  );
}

export function CommentaryFeed({ events }: { events: MatchEvent[] }) {
  // Max 20 item, terbaru di atas (UX-R05)
  const items = [...events].reverse().slice(0, 20);
  if (items.length === 0) return <p className="text-xs text-ink-low">Belum ada kejadian.</p>;

  return (
    <ul className="max-h-96 space-y-2 overflow-y-auto pr-1">
      {items.map((e) => (
        <li key={e.id} className="rounded-lg border border-pitch-700 bg-pitch-900/60 p-3">
          <div className="flex items-center gap-2">
            <span className="tabular rounded bg-pitch-700 px-1.5 py-0.5 text-[11px] text-gold">{e.min}&apos;</span>
            <span className="text-xs font-semibold text-ink-hi">{e.type.replace(/_/g, " ")}</span>
          </div>
          <p className="mt-1 text-xs text-ink-mid">{e.desc}</p>
          {e.aiComment && <p className="mt-1 text-[11px] italic text-ink-low">💬 {e.aiComment}</p>}
        </li>
      ))}
    </ul>
  );
}
