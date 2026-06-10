"use client";
import type { RealFixture } from "@/lib/wc2026-data";
import { WC2026_TEAMS } from "@/lib/wc2026-data";

export function StatusBadge({ status, minute }: { status: string; minute?: number | null }) {
  if (status === "LIVE" || status === "HALF_TIME") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-live/15 px-2 py-0.5 text-[11px] font-bold text-live">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-live" />
        {status === "HALF_TIME" ? "JEDA" : minute ? `${minute}'` : "LIVE"}
      </span>
    );
  }
  if (status === "FINISHED" || status === "EVALUATED")
    return <span className="rounded-full bg-pitch-700 px-2 py-0.5 text-[11px] text-ink-mid">Selesai</span>;
  return <span className="rounded-full bg-pitch-700 px-2 py-0.5 text-[11px] text-ink-mid">Jadwal</span>;
}

export function Crest({ teamId, size = 28 }: { teamId: string; size?: number }) {
  const team = WC2026_TEAMS[teamId];
  return (
    <span className="grid place-items-center" style={{ width: size, height: size, fontSize: size * 0.7 }} title={team?.name}>
      {team?.flag ?? "🏳️"}
    </span>
  );
}

export function kickoffLabel(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("id-ID", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });
}

export function MatchCard({ fixture, onClick }: { fixture: RealFixture; onClick?: () => void }) {
  const showScore = fixture.homeScore != null && fixture.awayScore != null;
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-xl border border-pitch-700 bg-pitch-900/60 p-3 text-left transition hover:border-gold/40 hover:bg-pitch-800"
    >
      <div className="flex w-24 shrink-0 flex-col gap-0.5 text-[10px] text-ink-low">
        <span>{fixture.group || fixture.round}</span>
        <StatusBadge status={fixture.status} />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <Row teamId={fixture.homeId} name={fixture.homeName} score={fixture.homeScore ?? null} />
        <Row teamId={fixture.awayId} name={fixture.awayName} score={fixture.awayScore ?? null} />
      </div>

      {!showScore && (
        <div className="tabular shrink-0 text-right text-[11px] text-ink-mid">{kickoffLabel(fixture.kickoff)} WIB</div>
      )}
    </button>
  );
}

function Row({ teamId, name, score }: { teamId: string | null; name: string; score: number | null }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2">
        {teamId && <Crest teamId={teamId} size={22} />}
        <span className="text-sm text-ink-hi">{name}</span>
      </span>
      {score !== null && <span className="tabular text-sm font-bold text-ink-hi">{score}</span>}
    </div>
  );
}
