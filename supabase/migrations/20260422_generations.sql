-- Migration: prompt generation history
-- Date: 2026-04-22

begin;

create table if not exists public.generations (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  tool_id       text not null,
  variable_values  jsonb not null default '{}',
  slider_values    jsonb not null default '{}',
  output        text not null,
  profile_id    uuid references public.product_profiles(id) on delete set null,
  created_at    timestamptz not null default now()
);

-- Index for fast per-user history lookups
create index if not exists generations_user_created_idx
  on public.generations (user_id, created_at desc);

-- RLS: users see only their own rows
alter table public.generations enable row level security;

create policy "users can insert own generations"
  on public.generations for insert
  with check (auth.uid() = user_id);

create policy "users can select own generations"
  on public.generations for select
  using (auth.uid() = user_id);

commit;
