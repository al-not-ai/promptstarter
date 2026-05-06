# Cycle-2 delta-check Opus prompt — single chat

Same one-chat workflow as cycle 1. Run this **once** in a fresh claude.ai Opus session.

## How to run it

1. Fresh claude.ai chat → Opus model selected.
2. Attach **5 cycle-2 tool result files** (the tools where P0 fixes were targeted):
   - `docs/test-runs/2026-05-04-cycle2/cold-hook.md`
   - `docs/test-runs/2026-05-04-cycle2/follow-up-forward.md`
   - `docs/test-runs/2026-05-04-cycle2/deal-reviver.md`
   - `docs/test-runs/2026-05-04-cycle2/cfo-pitch.md`
   - `docs/test-runs/2026-05-04-cycle2/objection-defuser.md`
3. Paste everything below `=== BEGIN PROMPT ===`.
4. Send. Save reply to `docs/test-runs/2026-05-04-cycle2/_reviews/_delta-check.md`.

This is a focused delta-check, not a full review — much shorter response than cycle 1's consolidated review.

---

=== BEGIN PROMPT ===

You're doing a delta-check on PromptStarter.ai. You don't have memory of any prior session — that's fine. I'm going to tell you exactly what was broken in the previous run (cycle 1), what we changed in the engine prompt to fix it, and what you should be looking for in the cycle-2 outputs attached.

This is targeted verification, not a full review. Keep it tight.

## What we changed

Three engine-prompt edits between cycle 1 and cycle 2:

**P0-1. Profile-numbers fabrication fix.** In cycle 1, the engine was treating numerical specifics in the seller profile's `<key_differentiators>` (e.g., "within 4%", "30% lower", "~14 sq ft", "10-year warranty", "50% holdback") as if they were the rep's commitments to *this specific* prospect. The engine concretized these into outputs as hard claims even when the rep's input never mentioned them. We added a rule to the system prompt: **reference the *capability* described by a differentiator, not its specific number — unless the rep's per-call inputs explicitly name that number.** Example shipped: "anchor to my forecast accuracy SLA" (good) vs "anchor to my 4% accuracy guarantee" (bad).

**P0-2. Voice violations on hardware/services profiles.** In cycle 1, six outputs across cold-hook, deal-reviver, and cfo-pitch opened with phrasing like *"I'm a cold outreach specialist writing on behalf of a sales rep at..."* — treating the engine's role hint (the role the rep wants the downstream AI to play) as the rep's identity. We added explicit BAD examples to the system prompt's voice section showing this exact failure pattern.

**P0-3. Deal-reviver Touch 1 must reference prior conversation.** In cycle 1, deal-reviver's Touch 1 email read like a cold-hook email — no anchoring to shared history with the prospect. We added an explicit rule to deal-reviver's `outputFormat`: Touch 1 MUST reference the prior conversation (a moment, topic, or concern they raised) in the opener.

## What you're verifying

You have 5 tool files attached, all from cycle 2 (post-fix). For each, answer concisely:

### Per-tool verification table

For each of the 5 attached tools, fill in this micro-table:

```
Tool: [tool-id]
- P0-1 (no concretized profile numbers): [PASS / RESIDUAL / FAIL] — [if not PASS, quote the offending line and label]
- P0-2 (no "I'm a [role] specialist" voice slips): [PASS / RESIDUAL / FAIL] — [quote if not PASS]
- P0-3 (deal-reviver Touch 1 references prior conversation, only applies to deal-reviver): [PASS / RESIDUAL / FAIL] — [quote if not PASS]
- New problems introduced: [None / list any]
- One-line verdict: [Ship cycle-2 as-is / Needs touch-up because X]
```

### Specific items I want you to check (don't miss these)

- **cold-hook**: Verify the Lila Okafor (Northwind) and Tomas Becker (Aldermark) cases no longer open with "I'm a cold outreach specialist..."
- **deal-reviver**: Verify the Greg and Linda (Aldermark) cases no longer open with "I'm a cold revival specialist..." Also: does the Linda case still echo "50% holdback" as a specific number? My local check found one parenthetical residual ("the success-aligned fee structure (50% holdback)..."). Tell me how serious that is.
- **follow-up-forward**: Verify the James Bought-In case no longer materializes "4% accuracy guarantee" as fact.
- **cfo-pitch**: Verify the V Risk angle case no longer materializes "Forecast stayed within 4%" in the WHAT WE EVALUATED section. Verify the Northwind/Procurement case no longer opens with "I'm a commercial kitchen equipment rep..."
- **objection-defuser**: I noticed "NSF-certified field tests" still appears once in the Northwind/Convotherm output, but it now reads as a source-of-record citation (*"if they ask for the math, point to NSF-certified field tests"*) rather than a fabricated credential. Confirm this is the correct interpretation.

## Final summary section

After the per-tool verification, give me:

```
## Cycle-2 verdict

- P0-1 status across the suite: [Clean / Mostly clean with N residual / Substantive problems remain]
- P0-2 status: [Clean / Mostly clean / Problems]
- P0-3 status: [Clean / Mostly clean / Problems]
- Any regressions introduced by the cycle-2 changes? [Yes — describe / No]
- Recommendation: [Ship and proceed to P1 / Touch-up needed before P1, specifically X]
```

Begin. Be terse. This is a verification pass, not a fresh critique.

=== END PROMPT ===
