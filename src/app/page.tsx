"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFixtures } from "@/hooks";
import { MatchCard } from "@/components/MatchCard";
import { OnboardingWizard } from "@/components/OnboardingWizard";
import { useStore } from "@/lib/store";

export default function Home() {
  const router   = useRouter();
  const { data, isLoading } = useFixtures();
  const { hydrate, onboardingDone, apiKey, setApiKey, profile } = useStore();
  const [showWizard, setShowWizard] = useState(false);

  useEffect(() => { hydrate(); }, [hydrate]);

  const fixtures = data?.fixtures ?? [];
  const now = Date.now();
  const live     = fixtures.filter((f) => f.status === "LIVE" || f.status === "HALF_TIME");
  const upcoming = fixtures
    .filter((f) => f.status === "SCHEDULED" && new Date(f.kickoff).getTime() >= now)
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime())
    .slice(0, 5);
  const recent = fixtures
    .filter((f) => f.status === "FINISHED" && f.homeScore != null)
    .slice(-3).reverse();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <header className="rounded-2xl border border-pitch-700 bg-pitch-900/50 p-6 md:p-8">
        <div className="text-[11px] uppercase tracking-[0.25em] text-gold">FIFA World Cup 2026 · USA · CAN · MEX · 11 Jun — 19 Jul</div>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink-hi md:text-4xl">
          Tebak skornya.<br />
          <span className="text-gold">Biar AI yang membedah taktiknya.</span>
        </h1>
        <p className="mt-3 max-w-lg text-sm text-ink-mid">
          48 tim, 12 grup, 104 pertandingan — analisis taktis berlapis dari statistik, formasi, hingga profil pelatih.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/fixtures" className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-pitch-950 hover:bg-gold/90">
            Lihat jadwal →
          </Link>
          {!apiKey && (
            <button onClick={() => setShowWizard(true)}
              className="rounded-lg border border-gold/40 px-4 py-2 text-sm text-gold hover:bg-gold/10">
              🤖 Aktifkan AI
            </button>
          )}
        </div>
      </header>

      {/* Onboarding banner — muncul saat belum pernah setup (BA-R06) */}
      {!onboardingDone && !apiKey && (
        <div className="rounded-xl border border-gold/30 bg-gold/5 p-4 flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-gold mb-1">👋 Selamat datang, {profile.nickname}!</div>
            <p className="text-xs text-ink-mid">
              Kamu bisa langsung tebak skor tanpa setup apapun. Tambahkan API Key AI untuk analisis taktis mendalam.
            </p>
          </div>
          <button onClick={() => setShowWizard(true)}
            className="shrink-0 rounded-lg bg-gold px-3 py-1.5 text-xs font-semibold text-pitch-950">
            Setup
          </button>
        </div>
      )}

      {/* Live matches */}
      {live.length > 0 && (
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink-hi">
            <span className="live-dot h-2 w-2 rounded-full bg-live" /> Sedang berlangsung
          </h2>
          <div className="grid gap-2">
            {live.map((f) => <MatchCard key={f.id} fixture={f} onClick={() => router.push(`/match/${f.id}`)} />)}
          </div>
        </section>
      )}

      {/* Upcoming */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-ink-hi">Pertandingan berikutnya</h2>
        {isLoading ? (
          <p className="text-sm text-ink-low">Memuat jadwal…</p>
        ) : (
          <div className="grid gap-2">
            {upcoming.map((f) => <MatchCard key={f.id} fixture={f} onClick={() => router.push(`/match/${f.id}`)} />)}
          </div>
        )}
      </section>

      {/* Recent results */}
      {recent.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-semibold text-ink-hi">Hasil terakhir</h2>
          <div className="grid gap-2">
            {recent.map((f) => <MatchCard key={f.id} fixture={f} onClick={() => router.push(`/match/${f.id}`)} />)}
          </div>
        </section>
      )}

      {showWizard && (
        <OnboardingWizard
          onClose={() => setShowWizard(false)}
          onDone={(key, prov) => { setApiKey(key, prov); setShowWizard(false); }}
        />
      )}
    </div>
  );
}
