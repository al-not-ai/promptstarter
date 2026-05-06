# Per-tool Opus review prompt — paste into a fresh claude.ai session (Opus model)

Run this **once per tool**. For each run:
1. Open a new claude.ai chat with the **Opus** model selected.
2. Paste everything below the `=== BEGIN PROMPT ===` line.
3. Replace `{{TOOL_ID}}` with the tool you're reviewing (e.g. `pre-call-recon`).
4. After the line that says `[PASTE TOOL RESULTS HERE]`, paste the entire contents of `docs/test-runs/2026-05-04/{{TOOL_ID}}.md`.
5. Send. Save Opus's reply to `docs/test-runs/2026-05-04/_reviews/{{TOOL_ID}}.md`.

Do this for all 7 tools: `pre-call-recon`, `objection-defuser`, `competitor-battlecard`, `cold-hook`, `follow-up-forward`, `deal-reviver`, `cfo-pitch`.

---

=== BEGIN PROMPT ===

You are an independent reviewer evaluating outputs from a product called **PromptStarter.ai**. I am the founder. I want a brutally honest, structural review — not a polite one. You are explicitly authorized to recommend renaming tools, killing inputs, reworking sliders, and flagging tools that should be merged or cut. Don't soften feedback. If something is generic, say it's generic.

## What PromptStarter is, in one paragraph

PromptStarter is a tool for sales professionals. The user picks a tool (e.g. "Cold Hook" or "Objection Defuser"), fills in a few inputs, and gets back a **master prompt** — not an answer, a *prompt* — that they paste into their own ChatGPT or Claude. The downstream AI then produces the actual sales artifact. We sell scaffolding, role assignment, anchor facts, and priming. We do **not** sell the final copy. The rep's downstream AI does that part on the rep's own subscription.

## Three actors — never confuse them in your review

| Actor | Who they are | Voice they should use |
|---|---|---|
| **The Engine** | PromptStarter's Haiku model that writes the master prompt | Writes the master prompt **in the rep's first-person voice**. "I" = rep, "you" = the rep's downstream AI. |
| **The Downstream AI** | The rep's own ChatGPT/Claude that reads the master prompt and produces the sales artifact | Receives the master prompt; addresses the rep as "you" in the final artifact. |
| **The Rep** | The sales professional using PromptStarter | The human who pastes the master prompt and uses the downstream output to do their job. |

**Voice rules the engine must obey** (your review should flag every violation):
- Never refer to the rep in third person ("the rep", "a sales rep", "the user", "they"). It's "I/me/my".
- Never address the rep as "you" — "you" always means the downstream AI.
- The engine writes **instructions to the downstream**, not the artifact itself. It must NOT pre-write exact dialogue, email copy, subject lines, or verbatim opening phrases. It describes the rails; the downstream lays the track.

## Hard anti-patterns (flag these aggressively)

- **Mad Libs feel** — output reads like fill-in-the-blanks the user could've made themselves.
- **Generic templated language** — "industry-leading", "robust", "cutting-edge", buzzword stacking.
- **Fabricated specificity** — invented percentages, dollar figures, headcounts, dates, or events not in the user's inputs.
- **Pre-written final artifact** — engine produces actual subject lines or email body copy instead of a brief.
- **Tool collapse** — output of two different tools is functionally interchangeable.
- **Slider invariance** — the slider position changed but the output didn't visibly change in a way a rep would care about.
- **Profile mismatch** — output reads like SaaS even when the seller profile is hardware or services.

## What you are reviewing right now

You're reviewing the **{{TOOL_ID}}** tool. I am about to paste ~9 generated master prompts from this tool, run across three different seller profiles:
- **Velara** (B2B SaaS — revenue intelligence platform)
- **Northwind** (Hardware — commercial combi ovens)
- **Aldermark** (Services — boutique strategy consulting)

The cases include: sparse inputs, ultra-rich inputs, hostile/awkward inputs, mismatch cases, and a fabrication sentinel. The variety is intentional — your job is to surface where the engine breaks, where it shines, and where it produces forgettable output.

## Review dimensions — answer each one

### 1. Rep utility & differentiation
For each case, ask: would a working sales pro actually paste this into their AI and feel sharper for it? Or would they read it, shrug, and write something themselves? Flag any case where the master prompt feels like generic scaffolding the rep didn't need.

Then: looking across all 9 cases of this tool, is there a single distinct "thing" this tool does well, or does it feel like a generic prompt template wearing a costume?

### 2. Voice & grounding compliance
Walk through every case and flag:
- Voice violations (third-person rep, "you" addressing the rep, etc.)
- Pre-written final artifact (exact email copy, scripted dialogue, verbatim subject lines)
- Fabricated specificity (numbers, dates, events not in inputs)
- Profile-injection failures (when the seller profile is hardware or services, does the engine still talk like SaaS?)

### 3. Input UX — names, sliders, labels
You'll see the tool's name, its variable inputs, and its sliders in the JSON `**Inputs:**` block of each case. Tell me:
- Is the **tool name** clear, descriptive, and distinct from the other six tools? Suggest a better name if you have one.
- Is each **input field label** doing real work? Are any inputs collecting information the engine isn't actually using? Should any be removed or reworded?
- Do the **sliders** actually shift the output meaningfully? If a slider's positions don't visibly change the master prompt's instructions, recommend killing or merging.
- Is there a missing input the engine clearly *wishes it had*?

### 4. Anti-pattern detection
Surface every Mad-Libs moment, every buzzword stack, every place where the master prompt is doing exhaustive research drift instead of crisp instruction-giving, every case where the rep could've written this themselves in 90 seconds. Be specific — quote the offending lines.

## How to format your reply

Output exactly this structure. No preamble, no closing pleasantries.

```
# {{TOOL_ID}} — Review

## Verdict in one paragraph
[Your honest summary — would you use this tool if you were a rep?]

## P0 — must-fix
[Bullets. Each P0 is a structural problem affecting most or all cases. Quote lines, name cases by label.]

## P1 — should-fix
[Bullets. Real issues but narrower scope.]

## P2 — nice-to-have
[Bullets. Polish, edge cases, future improvements.]

## Naming & input UX recommendations
- **Tool name:** [keep / rename to "X" because…]
- **Inputs:** [per-input verdict: keep / reword / cut]
- **Sliders:** [per-slider verdict: keep / reword / merge with another / cut]

## Slider effectiveness check
[For each slider, did the output meaningfully change between extreme positions? Cite specific cases.]

## Profile-sensitivity check
[Looking at the Northwind (hardware) and Aldermark (services) cases: did the engine adapt, or did it default to SaaS-shaped language?]

## Best case in this tool
[Which case label produced the strongest output, and why? This may become the curated sample output for the upgrade flow.]

## Worst case in this tool
[Which case label was weakest, and is the failure structural or input-driven?]
```

---

[PASTE TOOL RESULTS HERE]

=== END PROMPT ===
