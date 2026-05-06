# Consolidated Opus review — single-chat version

Run this **once** in claude.ai with Opus 4.6 selected. One session does all 7 per-tool reviews AND the cross-tool synthesis.

## How to run it

1. Open a fresh claude.ai chat. Select the **Opus** model in the model picker.
2. **Attach all 7 tool result files** to the chat by dragging them in or using the paperclip:
   - `docs/test-runs/2026-05-04/pre-call-recon.md`
   - `docs/test-runs/2026-05-04/objection-defuser.md`
   - `docs/test-runs/2026-05-04/competitor-battlecard.md`
   - `docs/test-runs/2026-05-04/cold-hook.md`
   - `docs/test-runs/2026-05-04/follow-up-forward.md`
   - `docs/test-runs/2026-05-04/deal-reviver.md`
   - `docs/test-runs/2026-05-04/cfo-pitch.md`
3. In the message box, paste **everything** below the `=== BEGIN PROMPT ===` line (do not include the `=== BEGIN ===` line itself).
4. Send. Opus will produce a long structured response — let it finish.
5. Save the entire reply to `docs/test-runs/2026-05-04/_reviews/_consolidated.md`.

If Opus stops mid-output (rare, but possible at this length), reply with **"continue from where you left off"** and it'll pick up.

---

=== BEGIN PROMPT ===

You are an independent reviewer evaluating outputs from a product called **PromptStarter.ai**. I am the founder. I want a brutally honest, structural review across all 7 of our tools — not a polite one. You are explicitly authorized to recommend renaming tools, killing inputs, reworking sliders, and flagging tools that should be merged or cut. Don't soften feedback. If something is generic, say so. If two tools collapse into each other, say so.

You have access to 7 attached files in this chat — one per tool. Each file contains ~9 generated outputs from that tool, run across three different seller profiles to expose profile-sensitivity:

- **Velara** — B2B SaaS, revenue intelligence platform (5 cases per tool, includes sparse / ultra-rich / hostile / mismatch edge cases)
- **Northwind** — Hardware, commercial combi ovens (2 cases per tool)
- **Aldermark** — Services, boutique strategy consulting (2 cases per tool)

The 7 tools, in the order I want you to review them:

1. **Pre-Call Recon Brief** (Core tier) — pre-call intel + openers + first-5-min questions
2. **Objection Defuser** (Pro) — in-the-moment objection response + follow-up question
3. **Competitor Battlecard** (Pro) — 5 discovery questions vs. a competitor + coaching notes
4. **Cold Hook** (Pro) — short-form cold outreach (DM or email)
5. **Follow-Up Forward** (Pro) — post-call email + forward-ready internal recap
6. **Deal Reviver** (Pro) — 3-touch revival sequence (email + DM + voicemail)
7. **CFO Pitch** (Pro) — 1-page financial brief for the prospect's champion to forward to their CFO

## What PromptStarter is, in one paragraph

PromptStarter is for sales professionals. The user picks a tool, fills in a few inputs, and gets back a **master prompt** — not an answer, a *prompt* — that they paste into their own ChatGPT or Claude. The downstream AI then produces the actual sales artifact. We sell scaffolding, role assignment, anchor facts, and priming. We do **not** sell the final copy. The rep's downstream AI does that part on the rep's own subscription.

## Three actors — never confuse them in your review

| Actor | Who they are | Voice they should use |
|---|---|---|
| **The Engine** | PromptStarter's Haiku model that writes the master prompt | Writes the master prompt **in the rep's first-person voice**. "I" = rep, "you" = the rep's downstream AI. |
| **The Downstream AI** | The rep's own ChatGPT/Claude that reads the master prompt and produces the sales artifact | Receives the master prompt; addresses the rep as "you" in the final artifact. |
| **The Rep** | The sales professional using PromptStarter | The human who pastes the master prompt and uses the downstream output to do their job. |

**Voice rules the engine must obey** (flag every violation):
- Never refer to the rep in third person ("the rep", "a sales rep", "the user", "they"). It's "I/me/my".
- Never address the rep as "you" — "you" always means the downstream AI.
- The engine writes **instructions to the downstream**, not the artifact itself. It must NOT pre-write exact dialogue, email copy, subject lines, or verbatim opening phrases. It describes the rails; the downstream lays the track.

## Hard anti-patterns (flag aggressively wherever you see them)

- **Mad Libs feel** — output reads like fill-in-the-blanks the user could've made themselves.
- **Generic templated language** — "industry-leading", "robust", "cutting-edge", buzzword stacking.
- **Fabricated specificity** — invented percentages, dollar figures, headcounts, dates, or events not in the user's inputs.
- **Pre-written final artifact** — engine produces actual subject lines or email body copy instead of a brief.
- **Tool collapse** — output of two different tools is functionally interchangeable.
- **Slider invariance** — slider position changed but the output didn't visibly change in a way a rep would care about.
- **Profile mismatch** — output reads like SaaS even when the seller profile is hardware (Northwind) or services (Aldermark).

## Review dimensions — apply each one to every tool

1. **Rep utility & differentiation** — would a working sales pro paste this and feel sharper for it, or would they shrug and write something themselves?
2. **Voice & grounding compliance** — third-person rep, "you" addressing the rep, pre-written artifact, fabricated specificity, profile-injection failure.
3. **Input UX** — tool name clarity, input field labels doing real work, sliders that actually change output meaningfully.
4. **Anti-pattern detection** — Mad-Libs, buzzword stacks, exhaustive research drift, output the rep could've written themselves in 90 seconds.

## How to format your reply

Output exactly this structure. No preamble, no closing pleasantries. Each per-tool section is its own block with the same headers.

```
# PromptStarter — Consolidated Review

## Part 1 — Per-tool reviews

### 1. pre-call-recon

**Verdict in one paragraph:** [Honest summary — would a rep use it?]

**P0 — must-fix:**
[Bullets. Structural problems affecting most or all cases. Quote lines, name cases by label.]

**P1 — should-fix:**
[Bullets. Real issues, narrower scope.]

**P2 — nice-to-have:**
[Bullets. Polish, edge cases.]

**Naming & input UX:**
- Tool name: [keep / rename to "X" because…]
- Inputs: [per-input verdict: keep / reword / cut]
- Sliders: [per-slider verdict: keep / reword / merge / cut]

**Slider effectiveness check:** [Did sliders meaningfully change output between extremes? Cite case labels.]

**Profile-sensitivity check:** [Did Northwind / Aldermark cases adapt or default to SaaS-shape?]

**Best case in this tool:** [Case label + why — candidate for curated sample output]

**Worst case in this tool:** [Case label + structural-or-input-driven failure]

---

### 2. objection-defuser
[Same structure]

---

### 3. competitor-battlecard
[Same structure]

---

### 4. cold-hook
[Same structure — pay extra attention to the D1 SENTINEL case for fabrication discipline]

---

### 5. follow-up-forward
[Same structure]

---

### 6. deal-reviver
[Same structure — pay attention to whether Touch 1 email overlaps with cold-hook output]

---

### 7. cfo-pitch
[Same structure]

---

## Part 2 — Cross-tool synthesis

### One-paragraph verdict on the arsenal
[Does this feel like a coherent product or a grab-bag?]

### Tool overlap findings
[Concrete overlap pairs. For each: keep both / merge / re-scope. Especially check: cold-hook vs deal-reviver Touch 1; follow-up-forward email vs deal-reviver Touch 1; objection-defuser vs competitor-battlecard when the objection is competitor-driven.]

### Naming pass
[Current vs. recommended for each tool that should change. Brief rationale.]

### Input vocabulary glossary
[Recommended unified vocabulary for: the prospect's company, the prospect person, the seller's product, the trigger, the objection, the call notes, etc. Show canonical name + which tools should be updated.]

### Slider audit
[Per-tool: are the two sliders earning their place? Recommend cuts / rewords / replacements.]

### The single highest-leverage change
[If I can only do ONE structural change to the arsenal in the next week, what is it and why?]

### Mission-drift score per tool (1–5, 5 = perfectly on-mission)
[One bullet per tool with the score and a sentence explaining where drift exists.]

### Tier signal
[Does Pro feel meaningfully more valuable than Core (Recon)? If not, what would fix that?]
```

Begin your review now. Read the attached files carefully before you start — your review's value depends on actually engaging with the specific outputs, not generic advice.

=== END PROMPT ===
