-- =========================================================
-- Migration: lean product_profile refactor
-- Date: 2026-04-21
--
-- Collapses the old kitchen-sink profile schema down to a lean,
-- product-scoped anchor that pairs with the new 3-step onboarding
-- wizard (/api/research/{company,products,extract}). Everything
-- that shifts per-generation — tone, target buyer, competitor,
-- specific objection — is now a Tool input, not a profile field.
--
-- Breaking changes, by intent:
--   * Drops: technical_category, core_value_prop, tone_of_voice,
--     founder_story, primary_use_cases, target_market_segments,
--     competitors, integrations, proof_points, objection_handlers,
--     pricing_model, research_confidence, version
--   * Renames: one_liner → product_summary
--   * Adds:   product_url (the page we researched against; source
--             of truth for future re-research)
--   * Drops:  profile_sources table entirely (no longer used)
--
-- WIPE NOTE: we truncate existing profile rows first. This is safe
-- because the lean schema has a different shape; trying to preserve
-- stale kitchen-sink data into the new columns would be worse than
-- asking each user to re-onboard. Alex explicitly asked for this.
--
-- Run in Supabase SQL Editor or via `supabase db push`.
-- =========================================================

begin;

-- 0. Wipe old data — users will re-onboard against the new wizard.
truncate table public.profile_sources;
truncate table public.product_profiles cascade;

-- 1. Drop the profile_sources table outright — no longer used.
drop table if exists public.profile_sources cascade;

-- 2. Drop indexes that reference columns we're about to drop.
drop index if exists public.product_profiles_proof_points_gin;

-- 3. Drop columns that no longer fit the lean model.
alter table public.product_profiles
  drop column if exists technical_category,
  drop column if exists core_value_prop,
  drop column if exists tone_of_voice,
  drop column if exists founder_story,
  drop column if exists primary_use_cases,
  drop column if exists target_market_segments,
  drop column if exists competitors,
  drop column if exists integrations,
  drop column if exists proof_points,
  drop column if exists objection_handlers,
  drop column if exists pricing_model,
  drop column if exists research_confidence,
  drop column if exists version;

-- 4. Rename one_liner → product_summary for clarity.
alter table public.product_profiles
  rename column one_liner to product_summary;

-- 5. Add product_url — the page we researched against.
alter table public.product_profiles
  add column if not exists product_url text;

commit;

-- =========================================================
-- Post-migration sanity: expected column set is
--   id, user_id,
--   company_name, company_url,
--   product_name, product_summary, product_url,
--   key_differentiators,
--   is_default, research_status,
--   created_at, updated_at, deleted_at
-- =========================================================
