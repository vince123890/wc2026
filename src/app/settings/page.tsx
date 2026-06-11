"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { useHealth } from "@/hooks";
import { OnboardingWizard } from "@/components/OnboardingWizard";

const STATUS_STYLE: Record<string, string> = {
  ok: "bg-win/15 text-win",
  degraded: "bg-gold/15 text-gold",
  unconfigured: "bg-pitch-700 text-ink-mid",
  down: "bg-live/15 text-live",
};

export default function SettingsPage() {
  const { apiKey, apiProvider, setApiKey, apifKey, setApifKey, profile, setProfile, hydrate, predictions } = useStore();
  const [keyInput, setKeyInput]   = useState("");
  const [apifKeyInput, setApifKeyInput] = useState("");
  const [nick, setNick]           = useState("");
  const [provider, setProvider]   = useState<"claude" | "gemini">("claude");
  const [showWizard, setShowWizard] = useState(false);
  const [exportMsg, setExportMsg] = useState("");
  const health = useHealth();

  useEffect(() => { hydrate(); }, [hydrate]);
  useEffect(() => {
    setKeyInput(apiKey ?? "");
    setProvider(apiProvider);
    setNick(profile.nickname);
    setApifKeyInput(apifKey ?? "");
  }, [apiKey, apiProvider, profile.nickname, apifKey]);

  // FR-22 — Export tebakan JSON
  function exportPredictions() {
    const data = JSON.stringify({ profile, predictions, exportedAt: new Date().toISOString() }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = `wc2026-tebakan-${profile.nickname}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportMsg("✓ File berhasil diunduh");
    setTimeout(() => setExportMsg(""), 3000);
  }

  // FR-22 — Import tebakan JSON
  function importPredictions(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string);
        if (data.profile) setProfile(data.profile);
        setExportMsg("✓ Data berhasil diimpor");
        setTimeout(() => setExportMsg(""), 3000);
      } catch { setExportMsg("✗ File tidak valid"); }
    };
    reader.readAsText(file);
  }

  const predCount = Object.keys(predictions).length;
  const points    = profile.totalPoints;

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="font-display text-2xl font-bold text-ink-hi">Pengaturan</h1>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Tebakan", value: predCount },
          { label: "Total Poin", value: points },
          { label: "Skor Tepat", value: profile.exactScores },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-3 text-center">
            <div className="tabular text-xl font-bold text-gold">{s.value}</div>
            <div className="text-[11px] text-ink-low">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Nickname */}
      <section className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
        <h2 className="mb-2 text-sm font-semibold text-ink-hi">Nama tampilan (leaderboard)</h2>
        <div className="flex gap-2">
          <input value={nick} onChange={(e) => setNick(e.target.value)}
            className="flex-1 rounded-lg border border-pitch-700 bg-pitch-950 px-3 py-2 text-sm text-ink-hi outline-none focus:border-gold/50"
            placeholder="Nickname kamu" />
          <button onClick={() => setProfile({ nickname: nick.trim() || "TamuWC2026" })}
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-pitch-950">
            Simpan
          </button>
        </div>
      </section>

      {/* API Key (BYOK) */}
      <section className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink-hi">API Key AI</h2>
          <button onClick={() => setShowWizard(true)}
            className="text-[11px] text-gold underline decoration-dotted hover:text-gold/80">
            Panduan 3-langkah ↗
          </button>
        </div>
        <p className="mb-3 text-xs text-ink-mid">
          {apiKey ? `Key ${provider} aktif — analisis AI penuh tersedia.` : "Belum ada key — AI memakai analisis statistik."}
        </p>
        <div className="mb-2 flex gap-2">
          {(["claude", "gemini"] as const).map((p) => (
            <button key={p} onClick={() => setProvider(p)}
              className={`rounded-lg px-3 py-1.5 text-xs ${provider === p ? "bg-gold text-pitch-950" : "border border-pitch-700 text-ink-mid"}`}>
              {p === "claude" ? "Claude" : "Gemini"}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input type="password" value={keyInput} onChange={(e) => setKeyInput(e.target.value)}
            placeholder={provider === "claude" ? "sk-ant-…" : "AIza…"}
            className="flex-1 rounded-lg border border-pitch-700 bg-pitch-950 px-3 py-2 text-sm text-ink-hi outline-none focus:border-gold/50" />
          <button onClick={() => setApiKey(keyInput.trim() || null, provider)}
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-pitch-950">
            Simpan
          </button>
        </div>
      </section>

      {/* API-Football Key (BYOK) — lineup, events, standings, skuad lengkap */}
      <section className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
        <h2 className="mb-2 text-sm font-semibold text-ink-hi">API Key API-Football</h2>
        <p className="mb-3 text-xs text-ink-mid">
          {apifKey
            ? "Key API-Football aktif di perangkat ini — lineup, events, standings & skuad lengkap tersedia."
            : "Belum ada key — fitur lineup, skuad lengkap, dan prediksi pembanding nonaktif kecuali server sudah diisi APIF_KEY."}
        </p>
        <div className="flex gap-2">
          <input type="password" value={apifKeyInput} onChange={(e) => setApifKeyInput(e.target.value)}
            placeholder="API-Football key…"
            className="flex-1 rounded-lg border border-pitch-700 bg-pitch-950 px-3 py-2 text-sm text-ink-hi outline-none focus:border-gold/50" />
          <button onClick={() => setApifKey(apifKeyInput.trim() || null)}
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-pitch-950">
            Simpan
          </button>
        </div>
        <p className="mt-2 text-[11px] text-ink-low">
          Daftar gratis di <a href="https://api-football.com" target="_blank" rel="noreferrer" className="text-gold underline">api-football.com</a> → Dashboard → API Key (100 req/hari). Disimpan di perangkat ini saja.
        </p>
      </section>

      {/* Export / Import (FR-22) */}
      <section className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
        <h2 className="mb-2 text-sm font-semibold text-ink-hi">Export & Import Tebakan</h2>
        <p className="mb-3 text-xs text-ink-mid">
          {predCount > 0 ? `${predCount} tebakan tersimpan di perangkat ini.` : "Belum ada tebakan tersimpan."}
        </p>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportPredictions} disabled={predCount === 0}
            className="rounded-lg border border-pitch-700 px-4 py-2 text-sm text-ink-hi hover:border-gold/40 disabled:opacity-40">
            ⬇ Export JSON
          </button>
          <label className="cursor-pointer rounded-lg border border-pitch-700 px-4 py-2 text-sm text-ink-hi hover:border-gold/40">
            ⬆ Import JSON
            <input type="file" accept=".json" onChange={importPredictions} className="hidden" />
          </label>
        </div>
        {exportMsg && <p className="mt-2 text-xs text-win">{exportMsg}</p>}
      </section>

      {/* Setup guide */}
      <section className="rounded-xl border border-gold/20 bg-gold/5 p-4">
        <h2 className="mb-2 text-sm font-semibold text-gold">Setup API Keys — Panduan Cepat</h2>
        <div className="space-y-2 text-xs text-ink-mid">
          <p><span className="text-ink-hi font-medium">WC26_JWT</span> — Daftar gratis di <a href="https://worldcup26.ir" target="_blank" rel="noreferrer" className="text-gold underline">worldcup26.ir</a> → Login → salin JWT token (berlaku 84 hari) → isi di <code className="text-gold">.env.local</code></p>
          <p><span className="text-ink-hi font-medium">APIF_KEY</span> — Daftar gratis di <a href="https://api-football.com" target="_blank" rel="noreferrer" className="text-gold underline">api-football.com</a> → Dashboard → API Key (100 req/hari, cukup untuk lineup & events). Bisa diisi di <code className="text-gold">.env.local</code> (server) atau langsung di bagian &quot;API Key API-Football&quot; di atas (BYOK, per perangkat).</p>
          <p><span className="text-ink-hi font-medium">ANTHROPIC_API_KEY</span> — <a href="https://console.anthropic.com" target="_blank" rel="noreferrer" className="text-gold underline">console.anthropic.com</a> → API Keys. Atau input di atas (BYOK, disimpan di perangkat).</p>
          <p><span className="text-ink-hi font-medium">Supabase</span> — Buat project gratis di <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-gold underline">supabase.com</a> → Settings → API → salin URL & anon key. Jalankan SQL di README.</p>
        </div>
      </section>

      {/* Service health */}
      <section className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink-hi">Status Layanan API</h2>
          <button onClick={() => health.refetch()} className="text-[11px] text-ink-mid underline hover:text-gold">
            Cek ulang
          </button>
        </div>
        {health.isLoading && <p className="text-xs text-ink-low">Mengecek layanan…</p>}
        {health.data && (
          <>
            <div className="mb-3 rounded-lg bg-pitch-950 px-3 py-2 text-xs text-ink-mid">{health.data.summary.message}</div>
            <ul className="space-y-1.5">
              {health.data.services.map((s) => (
                <li key={s.service} className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-ink-hi">{s.service}</span>
                  <span className="flex items-center gap-2">
                    {s.latencyMs !== undefined && <span className="tabular text-ink-low">{s.latencyMs}ms</span>}
                    <span className={`rounded px-2 py-0.5 text-[10px] ${STATUS_STYLE[s.status] ?? "bg-pitch-700"}`}>
                      {s.status}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {showWizard && (
        <OnboardingWizard
          onClose={() => setShowWizard(false)}
          onDone={(_key, prov) => { setProvider(prov); setShowWizard(false); }}
        />
      )}
    </div>
  );
}
