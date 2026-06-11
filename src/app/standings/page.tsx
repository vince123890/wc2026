"use client";
import { computeStandings, type StandingRow } from "@/lib/standings";
import { WC2026_FIXTURES, WC2026_GROUPS } from "@/lib/wc2026-data";
import { useStandings } from "@/hooks";

export default function StandingsPage() {
  const { data } = useStandings();

  const fallback = computeStandings();
  const remote = data?.source === "balldontlie" ? (data.data as Record<string, StandingRow[]>) : null;
  const standings = remote ?? fallback;
  const isOfficial = !!remote;

  const groupOrder = Object.keys(WC2026_GROUPS);
  const orderedStandings = groupOrder
    .filter((g) => standings[g])
    .map((g) => [g, standings[g]] as const);

  const anyPlayed = Object.values(standings).some((rows) => rows.some((r) => r.played > 0));
  const firstKickoff = new Date(WC2026_FIXTURES[0]?.kickoff ?? Date.now());
  const started = Date.now() >= firstKickoff.getTime();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-hi">Klasemen Grup</h1>
        <p className="text-xs text-ink-low">
          FIFA World Cup 2026 · 48 tim · 12 grup (A–L)
          {isOfficial && <span className="ml-2 text-gold">· Data resmi BALLDONTLIE</span>}
        </p>
      </div>

      {!started && !anyPlayed && (
        <div className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-ink-mid">
          Turnamen dimulai{" "}
          <span className="text-gold">
            {firstKickoff.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          . Semua tim belum bermain — klasemen terisi otomatis setelah hasil pertandingan masuk.
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {orderedStandings.map(([group, rows]) => (
          <div key={group} className="overflow-hidden rounded-xl border border-pitch-700">
            <div className="bg-pitch-900 px-3 py-2 text-sm font-semibold text-gold">{group}</div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[11px] uppercase text-ink-low">
                  <th className="px-2 py-1.5 text-center font-medium">#</th>
                  <th className="px-3 py-1.5 text-left font-medium">Tim</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">M</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">W</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">S</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">K</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">GM</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">GK</th>
                  <th className="px-1.5 py-1.5 text-center font-medium">SG</th>
                  <th className="px-2 py-1.5 text-center font-medium">Poin</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.teamId} className={`border-t border-pitch-800 ${i < 2 && anyPlayed ? "bg-win/5" : ""}`}>
                    <td className="tabular px-2 py-2 text-center text-ink-low">{r.position ?? i + 1}</td>
                    <td className="px-3 py-2 text-ink-hi">
                      {r.flag} {r.name}
                      {r.confederation && (
                        <span className="ml-1.5 text-[10px] font-normal text-ink-low">{r.confederation}</span>
                      )}
                    </td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">{r.played}</td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">{r.won}</td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">{r.drawn}</td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">{r.lost}</td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">{r.gf}</td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">{r.ga}</td>
                    <td className="tabular px-1.5 py-2 text-center text-ink-mid">
                      {r.gd > 0 ? "+" : ""}
                      {r.gd}
                    </td>
                    <td className="tabular px-2 py-2 text-center font-bold text-ink-hi">{r.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
