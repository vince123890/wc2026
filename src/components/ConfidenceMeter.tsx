"use client";
import { useState } from "react";
import type { ConfidenceResult } from "@/lib/types";
import { TIER_LABEL } from "@/lib/confidence";

export function ConfidenceMeter({ result }: { result: ConfidenceResult }) {
  const [open, setOpen] = useState(false);
  const color = result.tier >= 4 ? "#4ade80" : result.tier === 3 ? "#e8b54a" : result.tier === 2 ? "#d9a441" : "#b8845a";

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-hi">Confidence Tier {result.tier}</span>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-[11px] text-ink-mid underline decoration-dotted hover:text-gold"
        >
          {open ? "Sembunyikan" : "Rincian"}
        </button>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-pitch-700">
        <div className="h-full rounded-full transition-all" style={{ width: `${result.score}%`, background: color }} />
      </div>
      <div className="tabular mt-1 flex justify-between text-[11px] text-ink-low">
        <span>{TIER_LABEL[result.tier]}</span>
        <span>{result.score}/100</span>
      </div>

      {open && (
        <ul className="mt-3 space-y-1">
          {result.components.map((c) => (
            <li key={c.label} className="flex items-center justify-between text-xs">
              <span className={c.available ? "text-ink-hi" : "text-ink-low line-through"}>{c.label}</span>
              <span className="tabular text-ink-mid">{c.available ? `+${c.weight}` : `0/${c.weight}`}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
