# Review "Ask the Council" — Prediction Score Engine

Tujuan dokumen ini: menilai apakah `calculatePrediction()` (`src/lib/prediction-engine.ts`) sudah "mendekati sempurna" atau masih ada ruang penggalian lebih lanjut, berdasarkan pembacaan menyeluruh kode saat ini (per commit `228359b`).

**Kesimpulan singkat**: Engine sudah jauh lebih baik setelah kalibrasi terbaru (BASE_LAMBDA 1.35 + amplifikasi non-linear + 7 faktor), dan kasus "Jerman vs Curaçao = 1-1" sudah teratasi. Tapi "mendekati sempurna" — belum. Ada beberapa **bug nyata**, beberapa **bias struktural**, dan beberapa **data gap** yang masih bisa digali. Detail di bawah, diurutkan dari yang paling penting.

---

## 1. Bug / inkonsistensi nyata (perlu diperbaiki)

### 1.1 `coachAdv` bisa melebihi bobotnya sendiri
```ts
const coachAdv = homeCoach && awayCoach
  ? ((homeCoach.winRate - awayCoach.winRate) / 100) * 0.5
  : 0;
```
`winRate` adalah persentase (0-100), jadi `(winRate diff)/100` sudah berada di range -1..1. Dikali `0.5` lagi menghasilkan range **-0.5..+0.5** — padahal komentar bilang faktor ini "bobot 5%" (`* 0.05` di `deltaHome`). Akibatnya kontribusi efektif coach bisa mencapai `0.5 * 0.05 = 0.025` (2.5%) di kasus ekstrem — kecil tapi tidak sesuai dokumentasi "bobot 5%". Bandingkan dengan `tactAdv` (`calculateTacticalMatchup().total`, range realistis -0.5..+0.5) yang juga dikali `0.2`. Ini bukan bug fatal, tapi **inkonsistensi skala** antar faktor: beberapa faktor sudah dinormalisasi ke -1..1 sebelum dikali bobot, yang lain (coach, tactical) punya range internal yang lebih kecil dari -1..1 *sebelum* dikali bobot, sehingga bobot "nominal" di komentar tidak merefleksikan kontribusi aktual.

**Dampak**: faktor `coach` dan `tactical` di breakdown UI (`factors.coach`, `factors.tactical`) menampilkan angka yang sudah di-skala turun (misal max ±0.5), padahal label di `FactorBreakdown` (`PredictionPanel.tsx`) menampilkan `Math.abs(it.val) * 100` sebagai persentase tanpa normalisasi — sehingga "Kualitas pelatih" hampir tidak pernah menunjukkan angka besar dibanding "Ranking FIFA" meskipun secara nominal bobotnya hanya beda 25% vs 5%. Visual breakdown jadi *misleading* — user akan mengira faktor coach/tactical "tidak berpengaruh" padahal itu karena rangenya kecil, bukan bobotnya kecil.

**Saran**: normalisasi semua faktor ke range -1..1 *sebelum* dikalikan bobot di `deltaHome`, supaya angka di `factors.*` benar-benar comparable dan bobot di komentar mencerminkan kontribusi maksimum riil.

### 1.2 `formAdv` punya range lebih kecil dari yang diasumsikan
```ts
const formAdv = (homeForm - awayForm) / 2; // -1 to +1
```
`currentFormFactor()` mengembalikan -1..+1, jadi `(homeForm - awayForm)` punya range **-2..+2**, dibagi 2 → **-1..+1**. Ini sebenarnya benar secara matematis (komentar `-1 to +1` akurat). Tapi *secara praktis*, di awal turnamen (1-2 pertandingan per tim), `currentFormFactor` jarang menyentuh ±1 — biasanya di kisaran ±0.3 — jadi `formAdv` efektif jarang lebih dari ±0.3, padahal bobotnya 0.1 (10%) dari `deltaHome`. Bandingkan dengan `crowdAdv` yang barusan ditambahkan: `crowdPercent` dari API-Football odds-implied bisa dengan mudah mencapai ±0.6-0.8 untuk pertandingan timpang, jadi **faktor crowd punya "daya ungkit" lebih besar dari faktor form** meski bobot nominalnya sama (10%). Ini bukan bug, tapi worth noting saat tuning lebih lanjut.

### 1.3 `crowdAdv` tidak membedakan "tidak ada data" vs "odds-implied draw tinggi"
```ts
const crowdAdv = crowdPercent
  ? Math.max(-1, Math.min(1, (parseFloat(crowdPercent.home) - parseFloat(crowdPercent.away)) / 100))
  : 0;
```
Kalau API-Football mengembalikan `percent: { home: "0%", draw: "0%", away: "0%" }` (format string aneh yang kadang terjadi saat API gagal parsing tapi tetap `200 OK` dengan objek kosong), maka `crowdAdv = (0-0)/100 = 0` — **sama dengan kasus "tidak ada data"**. Ini sebenarnya *graceful* (fallback ke netral), tetapi berarti kalau API-Football mengembalikan data kosong/`"0%"` secara konsisten (misal karena quota habis tapi endpoint tetap 200), confidence tidak ikut terkoreksi turun — karena `confidence` tidak menghitung availability `crowdPercent` sama sekali (lihat #2.1).

### 1.4 `parseFloat("45%")` — implicit reliance on JS parsing behavior
`parseFloat("45%")` mengembalikan `45` (parseFloat berhenti di karakter non-numerik pertama) — ini **valid dan disengaja**, tapi tidak ada test/komentar yang menjelaskan asumsi ini. Jika API-Football suatu saat mengubah format ke `"45.5 %"` (dengan spasi) atau `"N/A"`, `parseFloat` akan mengembalikan `NaN` untuk kasus terakhir, dan `NaN - NaN = NaN`, lalu `Math.max(-1, Math.min(1, NaN))` → **`NaN`** (karena `Math.min`/`Math.max` dengan `NaN` selalu `NaN`). `NaN` akan merambat ke `deltaHome` → `ampDelta` → `lambdaHome/Away` → seluruh prediksi jadi `NaN`/`"NaN-NaN"`.

**Ini adalah single point of failure paling berbahaya di seluruh perubahan terbaru** — satu response API-Football yang tidak terduga bisa merusak prediksi pertandingan tersebut secara silent (tidak throw error, hanya menghasilkan `NaN` yang lolos ke UI sebagai `"NaN – NaN"`).

**Saran**: tambahkan guard:
```ts
const homePct = parseFloat(crowdPercent.home);
const awayPct = parseFloat(crowdPercent.away);
const crowdAdv = (crowdPercent && Number.isFinite(homePct) && Number.isFinite(awayPct))
  ? Math.max(-1, Math.min(1, (homePct - awayPct) / 100))
  : 0;
```

---

## 2. Bias struktural / desain yang layak didiskusikan

### 2.1 `confidence` tidak memperhitungkan faktor crowd & lineup officiality
```ts
let confidence = 35; // base
if (FIFA_RANKING_AVAILABLE(homeId, awayId)) confidence += 15;
if (homeCoach?.winRate && awayCoach?.winRate) confidence += 10;
if (h2hFactor(homeId, awayId) !== 0) confidence += 10;
if (getLineupStrength(homeId, homeStarters) !== 50) confidence += 15;
if (homeForm !== 0 || awayForm !== 0) confidence += 15;
```
Total maksimum = 35+15+10+10+15+15 = **100**, tapi di-cap `Math.min(95, confidence)`. Faktor **crowd (faktor ke-7)** baru tidak menambah confidence sama sekali — padahal data crowd dari API-Football (real odds market) seharusnya menjadi salah satu sinyal *paling kredibel* yang tersedia (mencerminakan agregat informasi pasar taruhan dunia). Sebuah pertandingan dengan crowd data tersedia + semua faktor lain tersedia *masih* mentok di confidence yang sama seperti tanpa crowd data — confidence formula tidak "tahu" bahwa faktor ke-7 ada.

**Saran**: tambahkan `if (crowdPercent) confidence += 5-10;` (dan turunkan base/komponen lain sedikit agar cap tetap masuk akal), atau ubah skema confidence menjadi weighted berdasarkan jumlah faktor non-netral / total bobot faktor yang punya data riil.

### 2.2 `getLineupStrength` fallback `=== 50` sebagai proxy "tidak ada data lineup" rapuh
```ts
if (getLineupStrength(homeId, homeStarters) !== 50) confidence += 15;
```
`getLineupStrength` mengembalikan `Math.round(avg * 10)` di mana `avg` adalah rata-rata `form` (1-10) pemain starter. Jika rata-rata form pemain starter sebuah tim **kebetulan persis 5.0** (avg form = 5 dari skala 1-10, `Math.round(5*10) = 50`), maka cek `!== 50` akan **false-negative** — confidence tidak naik 15 meski lineup data sebenarnya tersedia dan valid. Ini edge case yang sangat jarang (butuh avg form pemain starter persis 5.0) tapi tetap merupakan *magic number* yang fragile — nilai `50` dipakai dua peran sekaligus: (a) default value saat `players.length === 0` (lihat `key-players.ts:362 return 50`), dan (b) hasil valid yang mungkin terjadi secara kebetulan.

**Saran**: `getLineupStrength` harus mengembalikan `null`/`undefined` secara eksplisit untuk kasus "tidak ada data pemain", lalu `calculatePrediction` cek `!== null` daripada `!== 50`.

### 2.3 Home advantage tidak dimodelkan secara eksplisit
Tidak ada satupun faktor yang merepresentasikan **keuntungan tim kandang** (home advantage) secara independen — semua delta murni berdasarkan ranking/taktik/form/dll, simetris antara home dan away. Di sepak bola nyata, home advantage tipikal bernilai ~0.2-0.4 gol (meski di turnamen netral seperti World Cup, efeknya jauh lebih kecil daripada liga domestik, tapi tidak nol — terutama untuk negara tuan rumah US/Mexico/Canada yang bermain "kandang" secara de facto). Untuk WC 2026 di mana mayoritas pertandingan dimainkan di stadion netral, dampaknya kecil **kecuali** untuk tim host (USA/MEX/CAN) yang bermain di negaranya sendiri — yang seharusnya punya home advantage signifikan (crowd support, familiarity, less travel fatigue) namun saat ini diperlakukan identik dengan tim away manapun.

**Saran**: tambahkan kecil bonus (`+0.05` hingga `+0.10` delta) untuk tim host yang bermain di negaranya sendiri (cek `fixture.venue`/`fixture.country` vs `homeId ∈ {usa, mex, can}`), terpisah dari status "home" di fixture data (yang di WC seringkali hanya penamaan administratif, bukan indikasi tuan rumah sungguhan).

### 2.4 `FORMATION_ADVANTAGE` matrix bersifat heuristik tetap, tidak adaptif terhadap kualitas skuad
Matrix di baris 16-25 mendefinisikan "keuntungan formasi" secara statis (misal `3-5-2` vs `4-3-3` = `+0.15`), terlepas dari siapa pemainnya. Ini masuk akal sebagai prior umum, tapi berarti **dua tim dengan kualitas skuad sangat berbeda namun formasi sama** akan punya `homeFormationAdv` = 0 — padahal secara taktis, formasi yang "ideal" untuk tim lemah vs tim kuat seringkali justru berbeda (tim lemah sering parkir bus dengan formasi bertahan, yang justru *menguntungkan* mereka melawan tim kuat meski matrix bisa menilainya "merugikan"). Matrix ini sudah cukup baik sebagai heuristik kasar, tapi nilainya hardcoded dan tidak punya sumber/justifikasi yang didokumentasikan (tidak ada referensi statistik nyata di komentar) — agak mirip "magic numbers" yang sulit divalidasi.

### 2.5 `playingStyleDelta` hanya mendefinisikan 4 dari banyak kemungkinan clash
```ts
const clashes: [string, string, number][] = [
  ["COUNTER", "POSSESSION", 0.2],
  ["POSSESSION", "COUNTER", -0.2],
  ["DIRECT", "POSSESSION", 0.1],
  ["POSSESSION", "DIRECT", -0.1],
];
```
Kombinasi `COUNTER vs DIRECT`, `COUNTER vs COUNTER`, `DIRECT vs DIRECT`, dll. semua mengembalikan `0` (netral) — termasuk kombinasi yang melibatkan `HYBRID` (default fallback). Tidak salah secara teknis (netral adalah default yang aman), tapi berarti `homeStyleAdv` kemungkinan besar `0` untuk mayoritas pasangan tim — faktor ini jarang berkontribusi nyata ke `tactAdv`.

### 2.6 `mostLikelyScore` / `matchProbabilities` cap di gol ke-6 / ke-9
```ts
for (let h = 0; h <= 6; h++) {
  for (let a = 0; a <= 6; a++) {
```
dan
```ts
for (let h = 0; h <= 9; h++) {
  for (let a = 0; a <= 9; a++) {
```
Untuk `lambdaHome` yang sangat besar (misal hasil amplifikasi ekstrem `BASE_LAMBDA + ampDelta` > ~4), distribusi Poisson punya massa probabilitas non-trivial di atas gol ke-6/ke-9, sehingga `mostLikelyScore` dan `matchProbabilities` sedikit underestimate / tidak menjumlahkan ke tepat 1.0 (probabilitas hilang di "ekor" distribusi). Dengan `BASE_LAMBDA = 1.35` dan amplifikasi `Math.pow(|delta|, 2.5) * 3`, perlu dicek apakah `lambdaHome` bisa realistis melebihi ~5 untuk matchup paling ekstrem (top-3 FIFA vs tim terlemah + crowd 90% + form positif penuh). Jika ya, cap di 6/9 mulai relevan.

**Cek cepat**: `deltaHome` maksimum teoretis (semua faktor +1, bobot total 1.0) → `deltaHome = 1.0`. `ampDelta = 1 + 1^2.5*3 = 1 + 3 = 4`. `lambdaHome = 1.35 + 4 = 5.35`. Pada `lambda=5.35`, `P(X>9)` ≈ 2.6% — kecil tapi tidak nol, dan `mostLikelyScore` capping di 6 berarti skor seperti 7-0 atau 7-1 (yang mungkin punya probabilitas tertinggi untuk lambda sebesar itu) **tidak akan pernah muncul** sebagai `bestScore`, meski `expectedGoalsHome` (yang ditampilkan terpisah sebagai `5.35`) akan terlihat tidak konsisten dengan `homeScore` yang dibatasi ≤6.

**Saran**: tidak urgent (kasus ekstrem sangat jarang di WC nyata — gap FIFA rank 1 vs rank terakhir + crowd + form semua maksimal bersamaan tidak realistis), tapi kalau ingin presisi, naikkan cap ke 8/12 atau gunakan rumus closed-form untuk `P(home>away)` dst alih-alih double loop terbatas.

---

## 3. Data gap / hal yang "bisa digali kembali" (sesuai pertanyaan user)

### 3.1 Tidak ada faktor cuaca/iklim/venue altitude
WC 2026 dimainkan di 3 negara (AS, Meksiko, Kanada) dengan variasi suhu dan **altitude** signifikan (misal Mexico City ~2,240m — terbukti historis memengaruhi performa tim non-akliматisasi, lihat WC 1970/1986). Tidak ada data venue/altitude yang masuk ke prediksi sama sekali. Ini API gratis yang realistis untuk ditambahkan (OpenWeatherMap free tier, atau dataset statis altitude per venue WC 2026 — sudah publik).

### 3.2 Tidak ada faktor "rest days" / kelelahan jadwal
Tim yang baru main 3 hari lalu vs tim yang istirahat 5 hari punya perbedaan kebugaran nyata, terutama di fase knockout. `fixture` data (dari `WC2026_FIXTURES`/proxy fixtures) seharusnya punya tanggal kickoff tiap tim — bisa dihitung "hari sejak laga terakhir" per tim dan dijadikan faktor kecil (mis. ±0.05).

### 3.3 Tidak ada faktor cedera/suspensi pemain kunci secara terstruktur (selain lineup absence)
Saat ini, absennya pemain kunci dari starting XI sudah tertangkap via `getLineupStrength` (faktor 4: lineup). Tapi *alasan* absen (cedera vs rotasi vs suspensi kartu) tidak dibedakan — padahal cedera pemain kunci jelang big match seringkali jadi headline berita (yang sekarang sudah diambil via `MatchNewsPanel`/Google News, tapi **hanya dikirim ke AI sebagai teks bebas**, bukan diparse jadi sinyal numerik untuk `calculatePrediction`). Ini adalah ruang penggalian paling relevan dengan fitur yang baru saja ditambahkan: **berita pra-pertandingan saat ini hanya memengaruhi AI, belum memengaruhi sistem (faktor numerik)** — sesuai keputusan desain user (news → AI saja, crowd → faktor ke-7 + AI), jadi ini bukan bug, tapi kalau user ingin "menggali lebih dalam", **NLP sentiment sederhana dari headline** (misal keyword "cedera"/"injury"/"absen"/"suspended" + nama pemain bintang dari `KEY_PLAYERS`) bisa jadi faktor ke-8 di masa depan.

### 3.4 `H2H_DATA` terbatas pada subset pasangan tim
`H2H_DATA` (11k+ baris) tampaknya sudah mencakup banyak pasangan top, tapi untuk pasangan tim yang tidak terdaftar, `h2hFactor` mengembalikan `0` (netral) — masuk akal sebagai fallback, tapi berarti pertandingan antar tim "minor" (misal Curaçao vs Cape Verde) kemungkinan besar tidak punya H2H data, sehingga faktor ke-3 (10% bobot) otomatis netral untuk banyak matchup grup yang melibatkan tim non-top. Tidak ada cara mudah untuk "menggali" ini tanpa API H2H eksternal (kebanyakan berbayar), jadi ini *accepted limitation*, bukan bug.

### 3.5 `currentFormFactor` hanya pakai pertandingan WC 2026 — tidak ada "pre-tournament form" (5 laga terakhir sebelum WC)
Sebelum WC dimulai / di laga-laga awal grup, `row.played === 0` → `currentFormFactor` selalu `0` (netral) untuk SEMUA tim di matchday 1. Artinya **faktor form (10%) efektif nonaktif untuk seluruh matchday pertama turnamen** — padahal performa 5-10 pertandingan terakhir tim menjelang WC (friendlies, kualifikasi) adalah sinyal yang sangat relevan dan tersedia gratis (misal dari `football-data.org` atau API-Football fixtures history). Ini adalah **gap paling besar** untuk akurasi matchday 1-3, karena 6 dari 7 faktor lain bersifat "statis pra-turnamen" (ranking, tactical, h2h, lineup, coach) sementara faktor form — yang seharusnya menangkap momentum terkini — kosong sampai tim sudah bermain minimal 1 laga WC.

**Saran konkret**: tambahkan dataset statis "pre-WC form" (5 laga terakhir per tim sebelum Juni 2026, W/D/L + GD) sebagai fallback ketika `row.played === 0` — mirip pola `H2H_DATA`/`FIFA_RANKING` yang sudah ada (data publik, update manual).

---

## 4. Ringkasan rekomendasi, diurutkan berdasarkan effort vs impact

| # | Item | Effort | Impact | Tipe |
|---|------|--------|--------|------|
| 1.4 | Guard `NaN` di `crowdAdv` (parseFloat gagal) | Kecil | **Tinggi** (mencegah prediksi rusak silent) | Bug fix |
| 2.1 | Tambah crowd ke perhitungan `confidence` | Kecil | Sedang | Konsistensi |
| 2.2 | `getLineupStrength` return `null` bukan `50` utk no-data | Kecil | Sedang (edge case) | Bug fix |
| 3.5 | Dataset "pre-WC form" (5 laga terakhir sebelum WC) | Sedang | **Tinggi** (matchday 1-3) | Data gap |
| 1.1 | Normalisasi semua faktor ke -1..1 sebelum bobot | Sedang | Sedang (UI breakdown lebih akurat) | Refactor |
| 2.3 | Home advantage untuk tim host (USA/MEX/CAN) | Kecil | Sedang | Faktor baru |
| 3.1 | Altitude/venue factor | Sedang | Rendah-Sedang | Faktor baru |
| 3.2 | Rest days / jadwal padat | Sedang | Rendah-Sedang | Faktor baru |
| 2.6 | Cap Poisson loop 6/9 → 8/12 | Kecil | Rendah (kasus ekstrem jarang) | Edge case |

**Prioritas tertinggi**: #1.4 (bug NaN — silent failure berbahaya) dan #3.5 (form turnamen kosong di matchday 1-3, yang justru saat ini sedang berlangsung di WC 2026 — fase grup awal).

---

*Dokumen ini dibuat berdasarkan pembacaan kode pada commit `228359b` (12 Juni 2026). Tidak ada perubahan kode yang dilakukan — murni review/analisis.*
