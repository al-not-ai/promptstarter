# Cross-tool synthesis review prompt — paste into a fresh claude.ai Opus session

Run this **once**, after all 7 per-tool reviews are complete.

1. Open a new claude.ai chat with the **Opus** model selected.
2. Paste everything below the `=== BEGIN PROMPT ===` line.
3. After the line that says `[PASTE ALL 7 PER-TOOL REVIEWS HERE]`, paste the contents of every file in `docs/test-runs/2026-05-04/_reviews/` concatenated together (with each clearly headed by the tool name).
4. Send. Save Opus's reply to `docs/test-runs/2026-05-04/_reviews/_synthesis.md`.

This pass is intentionally about the **portfolio**, not individual tools. It looks for overlap, naming inconsistency, and arsenal-level coherence problems.

---

=== BEGIN PROMPT ===

You are doing a cross-tool synthesis review for **PromptStarter.ai**, a product I'm the founder of. You've already (effectively) reviewed each of our 7 tools in isolation — those reviews are pasted below. Now I need you to step back and look at the whole arsenal as a portfolio. Be brutal about overlap, naming, and coherence.

## What PromptStarter is, in one paragraph

PromptStarter is a tool for sales professionals. The user picks a tool (e.g. "Cold Hook" or "Objection Defuser"), fills in inputs, and gets a **master prompt** to paste into their own ChatGPT or Claude. The downstream AI produces the actual sales artifact. We sell the scaffold, not the final copy.

## Our current 7 tools

1. **Pre-Call Recon Brief** (Core tier) — pre-call intel + openers + first-5-min questions
2. **Objection Defuser** (Pro) — in-the-moment objection response + follow-up question
3. **Competitor Battlecard** (Pro) — 5 discovery questions vs. a competitor + coaching notes
4. **Cold Hook** (Pro) — short-form cold outreach (DM or email)
5. **Follow-Up Forward** (Pro) — post-call email + forward-ready internal recap
6. **Deal Reviver** (Pro) — 3-touch revival sequence for cold deals (email + DM + voicemail)
7. **CFO Pitch** (Pro) — 1-page financial brief for the prospect's champion to forward to their CFO

## Synthesis questions — answer each one

### 1. Tool overlap
Looking across the 7 per-tool reviews, where do tools collapse into each other? Specifically:
- Does **Cold Hook** produce something different from **Deal Reviver**'s Touch 1 email? If a rep sees both outputs side-by-side, do they feel distinct?
- Does **Follow-Up Forward**'s email asset overlap meaningfully with **Deal Reviver**'s Touch 1 email?
- Does **Objection Defuser** end up sounding like **Competitor Battlecard** when the objection is competitor-related?
- Are there tools that should be **merged** into one?
- Are there tools that should be **split** because they're trying to do two things at once?

### 2. Naming consistency
Look at the seven names as a set:
- "Pre-Call Recon Brief" / "Objection Defuser" / "Competitor Battlecard" / "Cold Hook" / "Follow-Up Forward" / "Deal Reviver" / "CFO Pitch"
- Do they read as a coherent product family, or a grab-bag?
- Is the verb/noun pattern consistent? Is the tone consistent (all action-oriented, or some sound like artifacts and others like actions)?
- Recommend a renaming pass if the set lacks coherence. Suggest specific replacements.

### 3. Input pattern consistency
Across all 7 tools, you've now seen many input fields. Are similar concepts named consistently? (E.g., is "the prospect" called "Target Account" in one tool, "Prospect & Company" in another, "prospectName" in a third?) Recommend a vocabulary unification pass with a glossary.

### 4. Slider pattern consistency
You've now seen 14 sliders. Are they used consistently as a UI mechanic — i.e., do they always represent meaningful gradients the rep would actually choose between? Or do some sliders feel like decoration?

### 5. The arsenal as a whole
If a rep installed PromptStarter today and tried all 7 tools in a single sales week, would they feel they have a coherent system or a collection of one-off prompt builders? What single change to the arsenal would most increase that coherence?

### 6. The product's mission test
Our stated value is: scaffolding, role assignment, anchor facts, priming. We are explicitly *not* trying to be exhaustive research, multi-minute terminals, or generic Mad-Libs templates. Across the 7 per-tool reviews, where is the engine drifting away from this stated value? Be specific about which tools drift the most.

### 7. The pricing-tier test
Pre-Call Recon is the only Core tool. The other 6 are Pro. Do the Pro tools feel like a meaningful step up in value over Recon? Is Recon a fair "free taste" of the product, or does it overshadow the Pro tools?

## How to format your reply

```
# Cross-tool synthesis — PromptStarter

## One-paragraph verdict on the arsenal
[Honest take on whether this feels like a coherent product or a grab-bag.]

## Tool overlap findings
[Concrete overlap pairs. For each: keep both / merge / re-scope. Cite per-tool review evidence.]

## Naming pass
[Current vs. recommended for each tool that should change. Brief rationale per change.]

## Input vocabulary glossary
[Recommended unified vocabulary for: the prospect's company, the prospect person, the seller's product, the trigger, the objection, the call notes, etc. Show the recommended canonical name + which tools should be updated.]

## Slider audit
[Per-tool: are the two sliders earning their place? Recommend any that should be cut, reworded, or replaced with a different control.]

## The single highest-leverage change
[If I can only do ONE structural change to the arsenal in the next week, what is it and why?]

## Mission-drift score per tool (1–5, 5 = perfectly on-mission)
[One bullet per tool with the score and a sentence explaining where drift exists.]

## Tier signal
[Verdict: does Pro feel meaningfully more valuable than Core? If not, what would fix that?]
```

---

[PASTE ALL 7 PER-TOOL REVIEWS HERE — clearly separated by tool name headers]

=== END PROMPT ===
