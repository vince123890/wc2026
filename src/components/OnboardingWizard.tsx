"use client";
import { useState } from "react";
import { useStore } from "@/lib/store";

interface Props {
  onClose: () => void;
  onDone: (key: string, provider: "claude" | "gemini") => void;
}

const STEPS = ["Apa itu API Key?", "Cara Mendapatkan", "Masukkan Key"] as const;

export function OnboardingWizard({ onClose, onDone }: Props) {
  const [step, setStep] = useState(0);
  const [provider, setProvider] = useState<"claude" | "gemini">("claude");
  const [keyInput, setKeyInput] = useState("");
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState("");
  const setApiKey = useStore((s) => s.setApiKey);
  const setDone   = useStore((s) => s.setOnboardingDone);

  async function validate() {
    setValidating(true);
    setError("");
    try {
      // Test request ringan ke AI
      const res = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          home: { name: "Test", rating: 80, attack: 80, defense: 80, possession: 50, form: [] },
          away: { name: "Test", rating: 80, attack: 80, defense: 80, possession: 50, form: [] },
          tier: 1, apiKey: keyInput.trim(), provider,
        }),
      });
      if (!res.ok) throw new Error("Respons gagal");
      const data = await res.json();
      if (!data.prediction) throw new Error("Format respons tidak valid");
      setApiKey(keyInput.trim(), provider);
      setDone();
      onDone(keyInput.trim(), provider);
    } catch {
      setError("Key tidak valid atau terjadi kesalahan. Pastikan key benar dan coba lagi.");
    } finally {
      setValidating(false);
    }
  }

  function skipWithoutKey() {
    setDone();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-pitch-950/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-pitch-700 bg-pitch-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-pitch-700 px-5 py-4">
          <div>
            <div className="text-sm font-semibold text-ink-hi">Aktifkan Analisis AI</div>
            <div className="text-[11px] text-ink-low">Langkah {step + 1} dari 3 — {STEPS[step]}</div>
          </div>
          <button onClick={onClose} className="text-ink-low hover:text-ink-hi">✕</button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-pitch-700">
          <div className="h-full bg-gold transition-all" style={{ width: `${((step + 1) / 3) * 100}%` }} />
        </div>

        {/* Body */}
        <div className="px-5 py-5">
          {step === 0 && (
            <div className="space-y-3 text-sm text-ink-mid">
              <div className="rounded-lg bg-gold/10 border border-gold/30 p-3 text-xs text-ink-hi">
                🤖 Fitur Analisis AI membutuhkan API Key dari penyedia AI pilihanmu.
              </div>
              <p>API Key adalah token unik yang menghubungkan aplikasi ini ke layanan AI (Claude atau Gemini) menggunakan akunmu sendiri.</p>
              <p>Kamu tetap bisa tebak skor dan melihat jadwal <strong className="text-ink-hi">tanpa API Key</strong> — analisis AI hanya menggunakan analisis statistik berbasis aturan.</p>
              <div className="mt-2 rounded-lg bg-pitch-800 p-3 text-xs">
                <div className="font-semibold text-ink-hi mb-1">Dengan API Key kamu dapat:</div>
                <ul className="space-y-1 text-ink-mid">
                  <li>✅ Analisis taktis mendalam (Tier 1–4)</li>
                  <li>✅ Evaluasi tebakanmu vs prediksi AI</li>
                  <li>✅ Post-match analysis setelah selesai</li>
                </ul>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4 text-sm">
              <p className="text-ink-mid">Pilih provider AI dan dapatkan key gratis (atau pay-as-you-go sangat murah):</p>
              <div className="grid grid-cols-2 gap-3">
                <ProviderCard
                  id="claude"
                  name="Claude (Anthropic)"
                  desc="Analisis taktis terbaik. Haiku sangat hemat — ribuan request per rupiah."
                  link="https://console.anthropic.com"
                  selected={provider === "claude"}
                  onSelect={() => setProvider("claude")}
                />
                <ProviderCard
                  id="gemini"
                  name="Gemini (Google)"
                  desc="Gemini Flash punya kuota gratis harian. Cocok untuk pemula."
                  link="https://aistudio.google.com"
                  selected={provider === "gemini"}
                  onSelect={() => setProvider("gemini")}
                />
              </div>
              <p className="text-[11px] text-ink-low">
                {provider === "claude"
                  ? "Setelah login di console.anthropic.com → API Keys → Create Key"
                  : "Di aistudio.google.com → Get API key → Create API key in new project"}
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <p className="text-sm text-ink-mid">Tempel API Key {provider === "claude" ? "Claude" : "Gemini"} kamu di sini:</p>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => { setKeyInput(e.target.value); setError(""); }}
                placeholder={provider === "claude" ? "sk-ant-api03-…" : "AIzaSy…"}
                className="w-full rounded-lg border border-pitch-700 bg-pitch-950 px-3 py-2.5 text-sm text-ink-hi outline-none focus:border-gold/50"
                autoComplete="off"
              />
              {error && <p className="text-xs text-live">{error}</p>}
              <p className="text-[11px] text-ink-low">Key disimpan di perangkatmu saja, tidak dikirim ke server kami kecuali saat request analisis.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-pitch-700 px-5 py-4">
          {step > 0
            ? <button onClick={() => setStep(s => s - 1)} className="text-sm text-ink-mid hover:text-ink-hi">← Kembali</button>
            : <button onClick={skipWithoutKey} className="text-sm text-ink-low hover:text-ink-hi">Lewati</button>
          }

          {step < 2 ? (
            <button onClick={() => setStep(s => s + 1)} className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-pitch-950 hover:bg-gold/90">
              Lanjut →
            </button>
          ) : (
            <button
              onClick={validate}
              disabled={!keyInput.trim() || validating}
              className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-pitch-950 disabled:opacity-50"
            >
              {validating ? "Memverifikasi…" : "Aktifkan AI ✓"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProviderCard({ id, name, desc, link, selected, onSelect }: {
  id: string; name: string; desc: string; link: string; selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`rounded-xl border p-3 text-left text-xs transition ${selected ? "border-gold bg-gold/10" : "border-pitch-700 bg-pitch-800 hover:border-pitch-line"}`}
    >
      <div className={`mb-1 font-semibold ${selected ? "text-gold" : "text-ink-hi"}`}>{name}</div>
      <div className="text-ink-mid leading-relaxed">{desc}</div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-1.5 block text-[10px] text-ink-low underline hover:text-gold"
      >
        {link.replace("https://", "")} ↗
      </a>
    </button>
  );
}
