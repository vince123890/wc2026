# ⚽ World Cup 2026 Score Predictor

Aplikasi web prediksi skor FIFA World Cup 2026 dengan analisis taktis AI berlapis. Dibangun dengan Next.js 14 (App Router) sesuai **System Analysis Document v3.0**.

Pengguna menebak skor pertandingan, didukung tiga lapisan data (statistik tim, lineup + formasi taktis, profil pelatih) dan analisis narasi AI berformat JSON terstruktur. Confidence level dikalkulasi oleh sistem, bukan diminta dari AI.

## Data WC 2026 (asli)

Aplikasi memuat **data resmi FIFA World Cup 2026** dari [openfootball](https://github.com/openfootball/worldcup.json) (publik, gratis, tanpa key):

- **48 tim** dalam **12 grup (A–L)** sesuai hasil drawing 5 Desember 2025
- **104 pertandingan** dengan tanggal, jam, dan venue asli (kickoff 11 Juni 2026, Mexico vs South Africa di Estadio Azteca)
- Klasemen dihitung dari hasil pertandingan — sebelum turnamen mulai, semua tim 0 main/0 poin (akurat, bukan skor palsu)

Saat key data provider tersedia, proxy mencoba sumber live (worldcup26.ir / BALLDONTLIE) untuk skor & status terkini, lalu jatuh ke data embedded ini bila gagal.

> Catatan: lineup, formasi, dan profil pelatih membutuhkan tier berbayar BALLDONTLIE (GOAT). Tanpa itu, halaman tersebut menampilkan empty state yang jelas, bukan data palsu.

## Fitur

- Jadwal, skor live, dan hasil pertandingan WC 2026
- Visualisasi formasi taktis di lapangan (SVG responsif + mode list mobile)
- Profil & perbandingan pelatih
- Confidence Tier (4 tingkat, dikalkulasi sistem)
- Tebak skor dengan sistem poin (+5/+3/+1/+0 + bonus upset & clean sheet)
- Analisis AI multi-layer dengan **fallback chain: Claude → Gemini → Analisis Statistik**
- Live commentary saat pertandingan berlangsung (polling 30 detik)
- Leaderboard global via Supabase (degradasi ke lokal jika belum dikonfigurasi)
- Halaman status layanan API yang memverifikasi setiap provider

## Arsitektur

Semua panggilan ke API eksternal melewati **Next.js Route Handler sebagai proxy layer** (`/api/proxy/*`) sehingga API key tersimpan server-side dan tidak pernah terekspos ke browser — sekaligus menyelesaikan CORS.

```
Browser ──fetch──▶ /api/proxy/* (serverless) ──server-side──▶ worldcup26.ir / BALLDONTLIE
                                              └──fallback────▶ openfootball → embedded static
Browser ──POST───▶ /api/ai/analyze ──────────▶ Claude → Gemini → Static Analysis
Browser ◀──anon──▶ Supabase (leaderboard global)
```

### Fallback chain data (selalu fungsional)

Setiap endpoint mencoba sumber berurutan dan berhenti di yang pertama berhasil:

1. **worldcup26.ir** — fixtures, groups, live (demo endpoint tanpa auth; penuh pakai JWT)
2. **BALLDONTLIE FIFA** — lineup, events, stats (perlu tier GOAT — lihat catatan di bawah)
3. **openfootball** — JSON statis publik (teams, groups, stadiums)
4. **Embedded static** — data dari prototype, di-bundle dalam aplikasi → app tidak pernah hard-fail

## Status API Service (penting)

| Service | Status | Catatan |
|---|---|---|
| worldcup26.ir | ✅ Aktif | Endpoint demo gratis. Untuk akses penuh, login & isi `WC26_JWT` |
| BALLDONTLIE — Teams/Stadiums | ✅ Free tier | Cukup untuk daftar tim |
| BALLDONTLIE — Matches/Lineups/Events/Stats | ⚠️ Berbayar | **Hanya di tier GOAT ($39.99/bln, trial 48 jam).** Tanpa ini, app pakai embedded/openfootball |
| openfootball | ✅ Aktif | Fallback statis publik |
| Anthropic Claude | 🔑 Perlu key | Server env `ANTHROPIC_API_KEY` atau BYOK via Settings |
| Google Gemini | 🔑 Perlu key | Fallback AI opsional |
| Static Analysis | ✅ Selalu ada | Fallback AI terakhir, rule-based |
| Supabase | 🔑 Opsional | Leaderboard global; tanpa ini pakai lokal |

> **Verifikasi langsung:** buka `/settings` atau panggil `GET /api/proxy/health` untuk melihat status setiap layanan secara real-time.

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env.local   # isi key yang kamu punya (semua opsional)
npm run dev                  # http://localhost:3000
```

Aplikasi berjalan penuh **tanpa satu key pun** menggunakan data embedded — ideal untuk demo. Tambahkan key untuk data live & AI penuh.

## Skrip

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Mode pengembangan |
| `npm run build` | Build produksi |
| `npm start` | Jalankan hasil build |
| `npm run typecheck` | Cek tipe TypeScript |

## Deploy ke Vercel

1. Push repo ini ke GitHub
2. Import di [vercel.com](https://vercel.com) → otomatis terdeteksi sebagai Next.js
3. Tambahkan environment variables (lihat `.env.example`)
4. Deploy

Route Handler punya `maxDuration: 30` agar tidak kena timeout default 10 detik (Vercel free tier).

## Setup Supabase (opsional)

Jalankan SQL ini sekali di Supabase SQL Editor untuk mengaktifkan leaderboard global:

```sql
create table if not exists leaderboard_entries (
  nickname text primary key,
  total_points int not null default 0,
  total_predictions int not null default 0,
  updated_at timestamptz default now()
);
alter table leaderboard_entries enable row level security;
create policy "read all" on leaderboard_entries for select using (true);
create policy "upsert" on leaderboard_entries for insert with check (true);
create policy "update" on leaderboard_entries for update using (true);
```

## Struktur

```
src/
├── app/
│   ├── api/proxy/*        Proxy layer (fixtures, lineups, coaches, events, stats, health)
│   ├── api/ai/analyze     AI fallback chain
│   ├── match/[id]         Detail match 4-tab (Overview/Lineup/Pelatih/AI)
│   └── (pages)            fixtures, standings, coaches, leaderboard, settings
├── components/            Nav, MatchCard, FormationPitch, ConfidenceMeter, dst
├── hooks/                 TanStack Query hooks
└── lib/                   types, confidence, scoring, api-clients, fallback-data, supabase, store
```

## Tech stack

Next.js 14 · TypeScript · Tailwind CSS · TanStack Query · Zustand · Supabase

---

*Dibangun dari SYSTEM-ANALYSIS_WorldCup2026-Predictor_v3.md*
