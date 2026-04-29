-- NOTE: The trigger on auth.users requires postgres superuser privileges.
-- This migration runs correctly via `supabase db push` (CLI has those privileges).
-- If applying manually in the Supabase dashboard SQL Editor, use the postgres role.
-- Existing users will not have a user_settings row — the application defaults them
-- to 'core' tier via the null-coalescing fallback in route.ts and the tier API route.

create table public.user_settings (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  tier       text not null default 'core' check (tier in ('core', 'pro')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger user_settings_moddatetime
  before update on public.user_settings
  for each row execute procedure extensions.moddatetime(updated_at);

alter table public.user_settings enable row level security;

create policy "Users can read own settings"
  on public.user_settings for select
  using ((select auth.uid()) = user_id);

create policy "Users can update own settings"
  on public.user_settings for update
  using ((select auth.uid()) = user_id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_settings (user_id, tier)
  values (new.id, 'core');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
