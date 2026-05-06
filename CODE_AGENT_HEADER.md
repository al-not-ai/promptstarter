# Code Agent Prompt Header

Boilerplate to prepend to every Code Sonnet prompt for PromptStarter.ai.
The implementation spec follows after this header.

(Maintained by the Cowork advisor. Update only when conventions change.)

---

## DO NOT touch

- `housekeeping-2026-04-24` branch
- `.claude/settings.local.json`
- `src/app/api/generate/`, `src/lib/tools.ts` schema, `docs/`, `test-rig/`, `scripts/`
- `docs/archive/`
- Engine itself (`src/app/api/generate/route.ts` body, prompt templates) — UI work only unless explicitly authorized

## CRITICAL TECHNICAL NOTES

- **Next.js 16 + React 19.** `useRef<T>()` with no argument is a type error — always pass an initial value: `useRef<T | null>(null)`.
- **Soft-delete pattern (profiles only).** `product_profiles.deleted_at` timestamp; queries filter `.is("deleted_at", null)`. Generations are HARD-deleted (no `deleted_at` column on that table). When a profile is deleted, its generations are hard-deleted in the same handler.
- **`is_default` partial unique index** on `product_profiles` per user — only one default per user among active rows. PATCH endpoint clears default on others when setting one to true; DELETE endpoint auto-promotes a replacement (most-recently-updated active profile) if the deleted one was default.
- **Tailwind tokens to match exactly:** `#FF3300` accent, `font-mono`, `zinc-*` palette, oklch dark theme variables in `src/app/globals.css`. Cards use `rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md`.
- **Touch targets:** 44px min on mobile, 36px on desktop. `focus-visible` rings preserved on every interactive element.
- **shadcn/ui** is configured (`components.json`). Add components via `npx shadcn@latest add <component>` if missing.
- **localStorage keys in active use:** `promptstarter:rail-pinned`, `promptstarter:downstream-ai`, `rail-history-open`. SessionStorage cache key shape lives in `src/lib/form-cache.ts`.
- **Don't break shipped flows:** history click-to-restore, generation streaming, drill-down rendering, profile switching, sessionStorage caching, pagehide flush, copy moment + handoff popover, snap effects, click-outside/ESC dismissal patterns, profile management (set default, edit, delete with generation cascade).
- **Supabase migrations** can't be applied to production by Code. If a fix requires one, surface it as an action item for the user to apply manually via the Supabase dashboard SQL Editor.

## WORKFLOW

Site is not publicly launched yet — no staged checkpoints, ship the full PR.

1. Branch from `origin/main` with a descriptive name
2. Implement the spec
3. Run `node_modules/.bin/tsc --noEmit` and ensure clean
4. Open PR with descriptive title
5. Wait for Vercel green (~2 min); fix and push again if red
6. Squash-merge
7. Report PR URL + one-paragraph summary

## Always read before implementing

- `AGENTS.md` (product principles, three-actor model, token-cost rule)
- Any files specific to the implementation spec below

---

## Implementation spec

(Replace this section with the spec from the Cowork advisor.)
