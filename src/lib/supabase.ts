// Supabase leaderboard global — BA-R03. Graceful: jika env kosong, fitur global dimatikan
// dan leaderboard memakai data lokal/fallback (R-10).
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  client = url && key ? createClient(url, key) : null;
  return client;
}

export interface LeaderboardEntry {
  nickname: string;
  total_points: number;
  total_predictions: number;
  updated_at?: string;
}

export async function fetchGlobalLeaderboard(limit = 50): Promise<LeaderboardEntry[] | null> {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from("leaderboard_entries")
    .select("nickname,total_points,total_predictions,updated_at")
    .order("total_points", { ascending: false })
    .limit(limit);
  if (error) return null;
  return data as LeaderboardEntry[];
}

export async function upsertLeaderboard(entry: LeaderboardEntry): Promise<boolean> {
  const sb = getSupabase();
  if (!sb) return false;
  const { error } = await sb
    .from("leaderboard_entries")
    .upsert({ ...entry, updated_at: new Date().toISOString() }, { onConflict: "nickname" });
  return !error;
}

/*
SQL setup (jalankan sekali di Supabase SQL editor):

create table if not exists leaderboard_entries (
  nickname text primary key,
  total_points int not null default 0,
  total_predictions int not null default 0,
  updated_at timestamptz default now()
);
alter table leaderboard_entries enable row level security;
create policy "read all" on leaderboard_entries for select using (true);
create policy "upsert own" on leaderboard_entries for insert with check (true);
create policy "update own" on leaderboard_entries for update using (true);
*/
