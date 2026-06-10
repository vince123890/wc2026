"use client";
import { getH2H } from "@/lib/h2h-data";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

export function H2HPanel({ homeId, awayId, homeName, awayName }: {
  homeId: string; awayId: string; homeName: string; awayName: string;
}) {
  const data = getH2H(homeId, awayId);
  const homeFlag = WC2026_TEAMS[homeId]?.flag ?? "🏳️";
  const awayFlag = WC2026_TEAMS[awayId]?.flag ?? "🏳️";

  if (!data) {
    return (
      <div className="rounded-xl border border-dashed border-pitch-700 bg-pitch-900/40 p-4 text-center">
        <p className="text-xs text-ink-low">Belum ada riwayat pertemuan di turnamen besar.</p>
      </div>
    );
  }

  // Determine which team is "first" alphabetically to interpret W/D/L
  const homeIsFirst = [homeId, awayId].sort()[0] === homeId;
  const homeW = homeIsFirst ? data.w : data.l;
  const awayW = homeIsFirst ? data.l : data.w;
  const draws = data.d;
  const total = homeW + awayW + draws;

  const homeGoals = homeIsFirst ? data.gf : data.ga;
  const awayGoals = homeIsFirst ? data.ga : data.gf;

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4 space-y-3">
      <h3 className="text-sm font-semibold text-ink-hi">Head to Head — Turnamen Besar</h3>
      <p className="text-[11px] text-ink-low">
        Data dari {total} pertemuan (WC, EURO, Copa América, AFCON, Asian Cup, Nations League)
      </p>

      {/* W-D-L bar */}
      <div className="flex h-6 overflow-hidden rounded-full text-[10px] font-bold">
        {homeW > 0 && (
          <div className="flex items-center justify-center bg-gold/70 text-pitch-950 transition-all"
            style={{ width: `${(homeW / total) * 100}%` }}>
            {homeW > 1 ? homeW : ""}
          </div>
        )}
        {draws > 0 && (
          <div className="flex items-center justify-center bg-pitch-700 text-ink-mid transition-all"
            style={{ width: `${(draws / total) * 100}%` }}>
            {draws}
          </div>
        )}
        {awayW > 0 && (
          <div className="flex items-center justify-center bg-win/60 text-pitch-950 transition-all"
            style={{ width: `${(awayW / total) * 100}%` }}>
            {awayW > 1 ? awayW : ""}
          </div>
        )}
      </div>

      <div className="tabular flex justify-between text-xs">
        <div className="text-center">
          <div className="text-lg font-bold text-gold">{homeW}</div>
          <div className="text-[10px] text-ink-low">{homeFlag} {homeName}</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-ink-mid">{draws}</div>
          <div className="text-[10px] text-ink-low">Seri</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-win">{awayW}</div>
          <div className="text-[10px] text-ink-low">{awayFlag} {awayName}</div>
        </div>
      </div>

      <div className="tabular flex justify-between text-[11px] text-ink-mid">
        <span>Gol: {homeGoals}</span>
        <span>Rata-rata: {(homeGoals / total).toFixed(1)} – {(awayGoals / total).toFixed(1)}/match</span>
        <span>Gol: {awayGoals}</span>
      </div>

      {/* WC only stats */}
      {(data.wc_w + data.wc_d + data.wc_l) > 0 && (
        <div className="rounded-lg bg-pitch-950 px-3 py-2 text-[11px]">
          <span className="text-gold font-semibold">Di Piala Dunia saja: </span>
          <span className="tabular text-ink-mid">
            {homeIsFirst ? data.wc_w : data.wc_l}W–{data.wc_d}D–{homeIsFirst ? data.wc_l : data.wc_w}L
          </span>
        </div>
      )}

      {/* Last 5 */}
      {data.last5?.length > 0 && (
        <div>
          <div className="text-[11px] text-ink-low mb-1">5 pertemuan terakhir:</div>
          <ul className="space-y-1">
            {[...data.last5].reverse().map((m, i) => {
              const homeScore = m.home === homeId ? m.score.split("-")[0] : m.score.split("-")[1];
              const awayScore = m.home === homeId ? m.score.split("-")[1] : m.score.split("-")[0];
              return (
                <li key={i} className="tabular flex items-center justify-between text-[10px] text-ink-mid">
                  <span>{m.date.slice(0, 7)}</span>
                  <span>{homeFlag} {homeScore} – {awayScore} {awayFlag}</span>
                  <span className="max-w-[120px] truncate text-right text-ink-low">{m.tourn}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
