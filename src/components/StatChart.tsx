"use client";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";

interface TeamStats {
  name: string;
  flag: string;
  attack: number;
  defense: number;
  possession: number;
  form: string[];
  rating: number;
}

interface Props {
  home: TeamStats;
  away: TeamStats;
}

export function StatRadarChart({ home, away }: Props) {
  const data = [
    { stat: "Serangan", home: home.attack, away: away.attack },
    { stat: "Pertahanan", home: home.defense, away: away.defense },
    { stat: "Penguasaan", home: home.possession, away: away.possession },
    { stat: "Rating", home: home.rating, away: away.rating },
    {
      stat: "Form",
      home: formScore(home.form),
      away: formScore(away.form),
    },
  ];

  // Jika semua 0 (tidak ada data statistik), tampilkan placeholder
  const hasData = data.some((d) => d.home > 0 || d.away > 0);
  if (!hasData) {
    return (
      <div className="rounded-xl border border-dashed border-pitch-700 bg-pitch-900/40 p-4 text-center">
        <p className="text-xs text-ink-low">
          Chart statistik akan tersedia setelah API-Football dikonfigurasi (gratis, 100 req/hari).
        </p>
        <p className="mt-1 text-[11px] text-ink-low">Isi API Key API-Football di Pengaturan, atau <code className="text-gold">APIF_KEY</code> di .env.local</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-ink-mid">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-gold" /> {home.flag} {home.name}
        </span>
        <span className="flex items-center gap-1">
          {away.flag} {away.name} <span className="inline-block h-2 w-2 rounded-full bg-win" />
        </span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <RadarChart data={data}>
          <PolarGrid stroke="#16331f" />
          <PolarAngleAxis dataKey="stat" tick={{ fill: "#6e7f68", fontSize: 11 }} />
          <Radar name={home.name} dataKey="home" stroke="#e8b54a" fill="#e8b54a" fillOpacity={0.2} />
          <Radar name={away.name} dataKey="away" stroke="#4ade80" fill="#4ade80" fillOpacity={0.15} />
          <Tooltip
            contentStyle={{ background: "#0a1a10", border: "1px solid #16331f", borderRadius: 8, fontSize: 11 }}
            labelStyle={{ color: "#b8c4ae" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function formScore(form: string[]): number {
  if (!form.length) return 0;
  const pts = form.slice(-5).reduce((s, r) => s + (r === "W" ? 3 : r === "D" ? 1 : 0), 0);
  return Math.round((pts / 15) * 100);
}
