# Archive — historical snapshots

Files in this directory describe earlier phases of PromptStarter.ai and
**do not match the current code**. Examples of drift:

- Six-section output (`[THE PERSONA]` … `[THE INTERACTIVE KICKOFF]`) — the
  engine now writes three sections (MISSION / STRUCTURE / GROUNDING) and
  two (STANDARD RULES / DRILL-DOWN OFFER) are appended by post-processing.
- `AccessGate` password splash — removed in commit `4735835`, replaced by
  Supabase auth.
- Lemon Squeezy subscription stubs — not in `.env.local`.
- Supabase middleware as "scaffolded, commented out" — `src/proxy.ts` is
  live.

Kept for history, not reference. Do not read these files when trying to
understand current behavior — read `docs/V2_TEMPLATED_REVIEW.md`,
`AGENTS.md`, and the source tree instead.
