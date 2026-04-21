-- =========================================================
-- Migration: product_profiles + profile_sources
-- Run in Supabase SQL Editor or via supabase db push
-- =========================================================

-- Extensions
create extension if not exists pgcrypto;
create extension if not exists moddatetime schema extensions;

-- =========================================================
-- product_profiles
-- =========================================================
create table public.product_profiles (
  id                       uuid primary key default gen_random_uuid(),
  user_id                  uuid not null references auth.users(id) on delete cascade,

  -- Identity
  company_name             text not null,
  company_url              text,
  product_name             text not null,
  technical_category       text,                -- e.g. "Revenue intelligence platform"

  -- Positioning (Command-of-the-Message layer)
  one_liner                text,                -- <=140 chars; hard-capped in app layer
  core_value_prop          text,                -- The PBO, in prose
  tone_of_voice            text,                -- e.g. "direct, dry, senior-engineer"
  founder_story            text,

  -- Arrays — discrete because we ALWAYS iterate the whole list in prompts
  key_differentiators      text[] not null default '{}',
  primary_use_cases        text[] not null default '{}',
  target_market_segments   text[] not null default '{}',
  competitors              text[] not null default '{}',
  integrations             text[] not null default '{}',

  -- JSONB where shape is genuinely variable
  proof_points             jsonb not null default '[]'::jsonb,
      -- [{ "type": "case_study"|"logo"|"metric",
      --    "label": "Acme saved 30% on CAC",
      --    "detail": "...", "url": "https://..." }]
  objection_handlers       jsonb not null default '[]'::jsonb,
      -- [{ "objection": "too expensive",
      --    "response": "...the ROI math..." }]

  pricing_model            text,                -- nullable; often not public

  -- UX / multiplicity
  is_default               boolean not null default false,

  -- Research provenance
  research_status          text not null default 'draft'
      check (research_status in ('draft','researching','ready','failed','user_edited')),
  research_confidence      numeric(3,2)
      check (research_confidence is null
             or (research_confidence >= 0 and research_confidence <= 1)),

  -- Versioning & timestamps
  version                  int not null default 1,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now(),
  deleted_at               timestamptz
);

-- Auto-touch updated_at on every UPDATE
create trigger product_profiles_moddatetime
  before update on public.product_profiles
  for each row execute procedure extensions.moddatetime(updated_at);

-- One default profile per user (partial unique index — enforced at DB level)
create unique index product_profiles_one_default_per_user
  on public.product_profiles (user_id)
  where is_default = true and deleted_at is null;

-- Hot-path indexes
create index product_profiles_user_active_idx
  on public.product_profiles (user_id)
  where deleted_at is null;

create index product_profiles_user_updated_idx
  on public.product_profiles (user_id, updated_at desc)
  where deleted_at is null;

-- GIN for proof_points keyword search
create index product_profiles_proof_points_gin
  on public.product_profiles using gin (proof_points jsonb_path_ops);

-- =========================================================
-- profile_sources — research citations for transparency
-- =========================================================
create table public.profile_sources (
  id              uuid primary key default gen_random_uuid(),
  profile_id      uuid not null references public.product_profiles(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  url             text not null,
  title           text,
  source_type     text not null check (source_type in
                    ('homepage','g2','capterra','linkedin','press','funding',
                     'competitor_compare','case_study','pricing','other')),
  excerpt         text,                          -- ~200-char snippet that backed a claim
  fields_derived  text[] not null default '{}',  -- which profile fields this cite backs
  fetched_at      timestamptz not null default now(),
  created_at      timestamptz not null default now()
);

create index profile_sources_profile_idx
  on public.profile_sources (profile_id);

-- =========================================================
-- RLS
-- =========================================================
alter table public.product_profiles enable row level security;
alter table public.profile_sources  enable row level security;

-- product_profiles: auth.uid() wrapped in subselect for initPlan caching
create policy "profiles_select_own_active"
  on public.product_profiles for select to authenticated
  using ( (select auth.uid()) = user_id and deleted_at is null );

create policy "profiles_insert_own"
  on public.product_profiles for insert to authenticated
  with check ( (select auth.uid()) = user_id );

create policy "profiles_update_own"
  on public.product_profiles for update to authenticated
  using  ( (select auth.uid()) = user_id )
  with check ( (select auth.uid()) = user_id );

-- Everyday delete is soft (UPDATE deleted_at). Hard delete is admin-only.
create policy "profiles_delete_own"
  on public.product_profiles for delete to authenticated
  using ( (select auth.uid()) = user_id );

-- profile_sources: user_id is denormalized (no join needed in RLS policy)
create policy "sources_select_own"
  on public.profile_sources for select to authenticated
  using ( (select auth.uid()) = user_id );

create policy "sources_insert_own"
  on public.profile_sources for insert to authenticated
  with check ( (select auth.uid()) = user_id );

create policy "sources_delete_own"
  on public.profile_sources for delete to authenticated
  using ( (select auth.uid()) = user_id );
