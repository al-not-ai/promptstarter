# follow-up-forward — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 31,187 in / 5,390 out  
**Engine cost (this tool):** $0.0465  

---

## [V] Follow-Up — Sarah / Skeptical / Department Manager / basic notes

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Walked through the dashboard demo. Sarah asked about CRM integration. Team uses HubSpot.",
    "biggestAha": "Their ops team spends 8 hours a week on manual pipeline updates"
  },
  "sliderValues": {
    "buying-role": 1,
    "call-mood": 0
  }
}
```

**Status:** OK | **Time:** 7968ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3403 | **Out:** 563 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager, skeptical mood) where their ops team surfaced an 8-hour-per-week manual pipeline-update burden, and they asked about HubSpot integration. I need you to produce two assets: a follow-up email from me to them anchored to that ops pain, and a forward-ready recap they can send internally to their decision-maker — written in their voice, not mine, so they own it without editing.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the ops team's 8-hour weekly manual-update tax as the real lever, not pleasantries
   - References one specific moment from the call (the HubSpot integration question, the dashboard walkthrough, or the ops pain discussion — pick the one that lands hardest)
   - One concrete next step at the close (e.g., a second call, a focused demo, a pilot timeline)
   - Tone: helpful peer, not vendor — skeptical mood means no oversell, no marketing language

2. **Forward-Ready Recap (prospect → their internal stakeholder)**
   - Five to seven bullets, one sentence each — scannable, not prose
   - Order: their stated problem (ops burden in their words) → what they observed in the call → how it maps to their priority → two proof points (what Velara does that matters here: auto-capture from email/calendar, HubSpot native sync) → next step
   - Voice: prospect-authored, not rep-authored — no product names, no "we," no dollar amounts outside my inputs
   - Designed so they can copy-paste internally without redacting

## GROUNDING

- The ops team's 8-hour-per-week manual pipeline tax is the pain anchor — everything threads back to automation, not features
- HubSpot integration is live in my demo; lean on native sync as the friction-killer, not as a feature to explain
- Skeptical mood: no hype, no guarantees, no "game-changer" language — stay concrete and restrained
- For the recap: the prospect is the author, so strip rep voice entirely — no "Velara told us," no "the vendor showed," no product branding beyond necessary context
- Avoid placeholder language; anchor to the actual call moments and pains in my inputs
- No numbers, timelines, or claims not in my inputs or product capabilities

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — James / Bought-In / VP-Director / detailed notes

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Deep discovery. James was nodding throughout. Shared their Q2 forecast problem on screen. Wants a pilot in April.",
    "biggestAha": "Forecast accuracy is down to 60% — they're missing targets because pipeline data is stale by the time it reaches the board"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 2
  }
}
```

**Status:** OK | **Time:** 8139ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3423 | **Out:** 595 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a prospect (James, VP/Director level) who surfaced a forecast accuracy problem — pipeline data reaching the board is stale, causing them to miss targets. He's bought-in and wants a pilot in April. Be my post-meeting strategist and produce two assets: a follow-up email from me to James that opens with the forecast accuracy pain point and anchors to a specific moment from the call, plus a forward-ready recap James can send to his internal stakeholders without editing — written in his voice, not mine, that positions the problem, what he observed, and the fit to his priorities.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with the forecast accuracy / stale data pain he surfaced — the core aha, not pleasantry
   - References one concrete moment from the call (James shared their Q2 forecast problem on screen)
   - One clear next step tied to the April pilot he requested
   - Tone: direct, grounded in his problem; avoid "great chat," feature lists, marketing language

2. **Forward-Ready Recap (Prospect → His Internal Stakeholders)**
   - Five to seven bullets, one sentence each
   - Written so James authored it — no rep name, no vendor branding, no rep language
   - Order: his problem in his words → what he observed during the call → how this fits his stated priority → two concrete proof points from the conversation → proposed next step
   - Avoid dollar amounts not in my inputs, product marketing copy, any vendor voice

## GROUNDING

- James is bought-in and moving fast (April pilot). The email and recap should reflect momentum, not re-pitch.
- The forecast accuracy problem is the anchor — 60% accuracy and stale pipeline data to the board. This is the lens for both assets.
- The call moment you're anchoring to: James shared their Q2 forecast problem on screen. Use that specificity in the email; let it ground the recap's "what he observed."
- The recap is his artifact. He owns it internally. No Velara branding, no mention of me, no "the vendor told us." If he references a capability (e.g., real-time pipeline visibility, no manual data entry), frame it as what he'd say he learned or observed.
- Bought-in mood means confidence is high; don't over-sell or hedge. Move toward April pilot logistics.
- Avoid "per our conversation," "as discussed," pleasantry opens in the email, or any CRM/product jargon in the recap.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — CEO / Already Selling Internally / C-Suite / champion-ready

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "30-min call with the CEO. He wants to send something to his CFO. Loves the 14-day implementation story.",
    "biggestAha": "They lost a deal last quarter because the rep didn't flag deal risk — CEO blamed the CRM"
  },
  "sliderValues": {
    "buying-role": 3,
    "call-mood": 3
  }
}
```

**Status:** OK | **Time:** 7304ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3419 | **Out:** 576 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just closed a 30-min call with a CEO who wants to send something to his CFO. Be my post-meeting strategist and produce two assets: a follow-up email from me to him, and a forward-ready recap he can send internally to his CFO without editing. The CEO is already selling internally — he's primed. Anchor everything to the single biggest aha: they lost a deal last quarter because the rep didn't flag deal risk early, and the CRM didn't catch it. He loves the 14-day live story. Make both assets sharp, specific to what surfaced on the call, and ready to move the conversation forward.

## STRUCTURE
1. **Follow-Up Email (Rep → CEO)**
   - Open with the deal-risk miss they surfaced — the real cost of the blind spot, stated in their own frustration.
   - Reference one specific moment from the call (the lost deal context, the CRM failure, or the 14-day speed).
   - One concrete next step — what happens from here, owned by you or by them.
   - No pleasantries, no feature lists, no vendor voice.

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, one sentence each. Write so the CEO could have written it — his language, his problem, his lens.
   - Order: their problem in their words → what they observed on the call → how Velara Revenue OS fits their stated priority → two proof points (the 14-day speed and deal-risk surfacing capability) → the next step they should take.
   - No rep name, no "Velara Revenue OS" in marketing cadence, no dollar amounts unless I supplied them, no vendor branding.

## GROUNDING
- Anchor to the call notes: CEO, CFO audience, the lost deal last quarter, the 14-day implementation speed, deal-risk blind spots in their current CRM.
- The deal-risk miss is the emotional core — that's what makes this real for both the CEO and CFO. Lean there.
- The CFO recap is a decision-maker document, not a sales artifact. It should read like internal analysis, not a vendor brief.
- Avoid: "per our conversation," "as discussed," "great to connect," soft openers, feature breakdowns, pricing, product naming that sounds like marketing.
- The CEO already trusts you. Both assets should feel like you're removing friction from his internal sell, not selling him again.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — SPARSE notes / Mildly Interested / Operational User

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Showed demo. Was on the call.",
    "biggestAha": "They liked it"
  },
  "sliderValues": {
    "buying-role": 0,
    "call-mood": 1
  }
}
```

**Status:** OK | **Time:** 7942ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3383 | **Out:** 615 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who was mildly interested—they saw the demo and liked what they saw. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to them (grounded in a specific moment from my call notes), and a forward-ready recap they can paste into a message to their internal stakeholders without editing or attribution.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the specific moment or capability they responded to — this is the hook, not a pleasantry
   - References one concrete call moment from my notes (the demo moment they engaged with)
   - Closes with one clear, low-friction next step (no "let's sync" — name what happens)
   - Tone: conversational, peer-to-peer, no feature dumps or "per our conversation" language

2. **Forward-Ready Recap (prospect → their stakeholders)**
   - Five to seven bullets, one sentence each, written in *their* voice — language they'd use, not vendor language
   - **Order:** Their operational pain (as they named it) → what they observed in the demo → how it maps to their stated priority → two proof points (capability or SLA, not marketing claims) → one concrete next step
   - Tone: internal memo, matter-of-fact, no rep name or Velara branding, no dollar amounts unless I provided them
   - Style: scannable, decision-ready — their CFO or VP ops should read this and know why the tool matters

## GROUNDING

- **Anchor to what they actually said.** If my notes say "they liked it," that's the aha — don't invent enthusiasm beyond that or manufacture regret they didn't surface.
- **Use their language.** For the recap, lift the operational challenge and priority they named verbally; mirror it back in plain terms, not product terminology.
- **Specificity from my inputs only.** No financial models, ROI projections, timeline assumptions, or headcount unless I supplied them.
- **Demo moment is real.** Reference the single point from the call they engaged with; if my notes don't name a specific moment, ask me what they responded to before drafting.
- **Next step must be concrete.** Not "let's explore further" — a real action: a follow-up date, a second conversation with a stakeholder, a pilot scope, etc. If my inputs don't name the next step, ask me.
- **Avoid:** Marketing adjectives ("revolutionary," "cutting-edge"), feature lists, vendor jargon, "looking forward to partnering," implied timeline assumptions.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Follow-Up — MISMATCH — Skeptical mood with rich notes

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "James was on the call but pushed back on every metric I cited. Said our forecast accuracy claim is 'marketing math' and asked for a customer reference. Took notes the whole time. Did not commit to next steps.",
    "biggestAha": "He doesn't believe public-facing accuracy claims from any vendor and will only move forward with peer references"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 0
  }
}
```

**Status:** OK | **Time:** 7985ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3434 | **Out:** 592 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP / Director level) where he pushed back hard on accuracy claims and made clear he'll only move forward with peer references. I'm skeptical about next steps. Be my post-meeting strategist and produce two assets: a follow-up email I send to James that anchors to the one concrete moment of real interest from the call, and a forward-ready recap he can send internally to his decision-maker without editing — both positioned to rebuild credibility through specificity and proof, not pitch.

## STRUCTURE

1. **FOLLOW-UP EMAIL** (rep → James)
   - Opens with the actual moment of engagement from the call — the thing that made him take notes or lean in, not a generic recap
   - References one specific call moment from my notes (e.g., a question he asked, a concern he named, a detail he focused on)
   - One concrete next step — peer reference intro, call with customer, specific deliverable
   - Tone: direct and credible, no pleasantries or feature-benefit slides

2. **FORWARD-READY RECAP** (James → his internal stakeholder)
   - 5–7 single-sentence bullets in this order: problem in his words → what he observed in the call → how Velara fits his stated priority → two concrete proof points (customer examples, reference calls, or capability demonstrations) → proposed next step
   - Written in James's voice — he could have written it, no rep branding or product marketing language
   - Exclude: my name, "Velara Revenue OS" as a product title, any dollar amounts not in my notes
   - Scannable and credible to an internal audience (his boss, procurement, peer)

## GROUNDING

- James's skepticism is the entry point, not the obstacle. His demand for peer proof is specific and actionable — lean into that, not around it.
- The "one concrete moment" from the call is the thread. If I didn't capture what made him engage or take notes, ask me for it.
- For the recap: James is the author. No vendor voice, no "Velara says," no marketing claims. Write as if he's briefing a peer or stakeholder who wasn't on the call.
- Peer references and customer proof points are the credibility currency here. If I don't have named references ready, flag that immediately — don't invent them.
- Avoid: "Great conversation," "per our discussion," "As we talked about," "Let's touch base." His mood is skeptical; pleasantries undermine credibility.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Follow-Up — Head Chef / Bought-In / Department Manager / kitchen demo notes

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "On-site kitchen demo. Cooked salmon, beef short rib, and proofed bread back-to-back. Chef Diego loved the one-touch programmability — said his line cooks could run it without him hovering. Energy meter reading was 28% below their current Rational unit during the demo.",
    "biggestAha": "His morning prep is bottlenecked because the proofer is across the kitchen — XR-Series collapses the prep line into one station"
  },
  "sliderValues": {
    "buying-role": 1,
    "call-mood": 2
  }
}
```

**Status:** OK | **Time:** 7332ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3557 | **Out:** 594 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished an on-site demo with a department manager who's bought-in on solving a real bottleneck in their morning prep workflow. I need you to produce two assets: a follow-up email from me to the prospect that anchors to their biggest aha, and a forward-ready recap they can send to their internal decision-maker without editing — both sharp enough to move the deal forward without sounding like vendor spin.

## STRUCTURE

1. **Follow-up Email (Rep to Prospect)**
   - Opens with their bottleneck and how what they saw addresses it — don't open with pleasantry
   - References one concrete moment from the demo (the one-touch recipe execution, the equipment consolidation, or the energy reading) that proved the point
   - Closes with one specific, unambiguous next step — no "let's stay in touch"
   - Tone: respectful of their expertise, no feature-dumping

2. **Forward-Ready Recap (Prospect to Internal Decision-Maker)**
   - Five to seven bullets, one sentence each — scannable, built to their internal narrative
   - Sequence: state the bottleneck in their own language → what they observed in the demo → how it maps to their stated priority → two concrete proof points (operational ease, energy efficiency, or space recovery — anchor to what they reacted to) → proposed next step
   - Written as if the prospect authored it — no rep name, no Northwind branding language, no pricing or investment figures
   - Tone: peer-to-peer, business-focused, no vendor lingo

## GROUNDING

- The biggest aha is the morning prep bottleneck collapsing into one station — that's your North Star for both assets. Everything hangs on that.
- The demo moments that matter: Diego's reaction to one-touch programmability (line cooks don't need supervision), the 28% energy meter reading, the equipment consolidation.
- Don't invent demo details — stick to what's in my notes. No claims about "zero training," no efficiency percentages beyond the 28% reading from the meter.
- Avoid vendor-ese: "solution," "seamless integration," "cutting-edge," "revolutionize." This prospect just watched it work.
- The recap is their tool for internal alignment — write it so they feel ownership of it, not like you ghostwrote their memo.
- Energy savings are real (28% below their Rational), but the bigger story is the workflow compression — lead with workflow, support with energy.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Follow-Up — F&B Director / Mildly Interested / VP-Director

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Walked Karen through the spec sheet and the energy savings model. She was polite but kept comparing line-by-line to Convotherm's quote. Asked twice about service response times in tertiary markets.",
    "biggestAha": "Service network coverage in their secondary-city locations is the unspoken risk concern, not equipment cost"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 1
  }
}
```

**Status:** OK | **Time:** 8715ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3526 | **Out:** 702 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen, a VP/Director prospect who's mildly interested but circling back to service coverage in secondary markets. Be my post-meeting strategist and produce two assets: a follow-up email from me to Karen that leads with the service-network insight she surfaced, and a forward-ready recap she can send to her internal stakeholders without editing—one that speaks in her voice, not ours, and anchors to the concrete evidence from today's call.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with service-network coverage as the core value driver, tethered to her stated concern about secondary-city locations — not to features or spec sheets
   - Reference one specific moment from the call where she surfaced this (e.g., her question about tertiary-market response times)
   - Single concrete next step at close (e.g., intro to our regional service lead, site visit to a comparable operation, pilot timeline)
   - Tone: direct and conversational; avoid recap platitudes, marketing language, or "per our conversation" phrasing

2. **Forward-Ready Recap (Prospect → Internal Decision-Maker)**
   - Five to seven bullets, one sentence each, scannable
   - Written entirely in her voice and perspective — no rep language, no Northwind branding, no vendor tone
   - Order: (1) problem in her words, (2) what she observed during the call, (3) how this maps to her stated priority, (4) two concrete proof points anchoring to today's discussion, (5) proposed next step
   - Avoid: my name, product marketing copy, dollar amounts she didn't mention, feature stacks
   - Good model: reads as an internal summary she'd naturally write, not a vendor recap she'd need to clean up

## GROUNDING

- **Anchor to her pain, not ours:** Service coverage in secondary markets is the real lever. Equipment cost comparison is noise. Keep service-network reliability front-and-center in both assets.
- **Specificity from the call only:** Reference only moments and concerns she actually surfaced (secondary-city service, the comparison to Convotherm). Don't invent objections or add details she didn't mention.
- **Her voice in the recap:** The forward-ready recap must read as if Karen authored it. No vendor language, no feature calls, no internal rep-speak. Simple business language.
- **Proof points ground in observation:** The two proof points in the recap should anchor to what she saw or heard today — not to general product claims. Examples: "same-day service model eliminates the factory-tech delay we've experienced," "footprint recovery frees space for [her stated need]." If she didn't observe it or we didn't discuss it, it doesn't belong.
- **Tertiary-market specificity:** She asked twice about service response times in secondary cities. That's a signal. Don't bury it; make it the connective tissue between both assets.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Follow-Up — CEO / Already Selling Internally / C-Suite / wants to brief board

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "60-min strategy call with CEO. He wants to take this to his board next month — asked us to put together a one-pager he can drop into the pre-read.",
    "biggestAha": "Margin compression isn't a procurement problem — it's three legacy SOPs nobody on his team has the political capital to kill"
  },
  "sliderValues": {
    "buying-role": 3,
    "call-mood": 3
  }
}
```

**Status:** OK | **Time:** 8352ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3526 | **Out:** 512 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a 60-min strategy call with a CEO who wants to take this to his board next month and asked for a one-pager to drop into the pre-read. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that opens with the real aha from our call and closes with one concrete next step, and a forward-ready recap he can send internally to his board without editing — written in his voice, not mine, that surfaces the problem, what we observed, and the fit to his priority.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the margin compression insight from the call — specifically that this is a legacy SOP problem, not procurement
   - Reference one specific moment or observation from the call that anchors this insight
   - Close with one concrete next step tied to his board timeline (the one-pager for pre-read)
   - Avoid: "Great call today," feature recaps, marketing language, "per our conversation"

2. **Forward-Ready Recap (prospect → board)**
   - Five to seven bullets, one sentence each, scannable — written so the CEO authored it
   - Order: problem in his words → what we observed during the call → how this connects to his stated priority → two concrete proof points → proposed next step
   - No rep name, no Aldermark branding, no dollar amounts outside his inputs
   - Tone: internal leadership brief, not vendor summary

## GROUNDING

- The real aha is operational — legacy SOPs with no political owner — not a buying/vendor problem. Anchor both assets to this.
- The CEO is already selling internally ("taking to the board"). The recap is ammunition for that sale; the email is permission to move fast.
- Board-readiness is the constraint. The one-pager must land as strategic, not consultative.
- Avoid vendor language in the recap: no "our engagement," "our team," "proven methodology," "ROI calculator," or process-speak. He's briefing peers.
- The follow-up email is warm but businesslike — he's not in discovery anymore, he's in conviction.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Follow-Up — COO / Skeptical / VP-Director / pricing pushback

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "follow-up-forward",
  "variableValues": {
    "callNotes": "Anna challenged the success-aligned fee structure. Said \"every consultant claims they're different.\" Asked for case studies in her exact industry (industrial fabrication).",
    "biggestAha": "She's been burned by a prior consulting engagement that delivered nothing — the trust gap is the deal blocker, not the fee"
  },
  "sliderValues": {
    "buying-role": 2,
    "call-mood": 0
  }
}
```

**Status:** OK | **Time:** 8612ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3516 | **Out:** 641 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a call with a prospect (Anna, VP/Director level) who surfaced deep skepticism rooted in a prior bad consulting experience — not fee resistance. Be my post-meeting strategist and produce two assets: a follow-up email I send Anna that anchors to her trust gap (not the fee), and a forward-ready recap she can send to her internal stakeholders without editing. Both should feel like they came from her side of the table, not mine.

## STRUCTURE

1. **Follow-Up Email (rep → Anna)**
   - Opens with the trust gap as the real issue — "consultant claims vs. consultant delivery" — not pleasantries
   - Reference one specific moment from the call (her prior engagement burned her; I acknowledge it directly)
   - Reframe the success-aligned fee structure as the mechanic that *solves* her trust problem, not as a sales feature
   - Close with one concrete next step (case study, reference call, proposed timeline — your pick based on what lands)
   - Tone: direct, no marketing language, peer-to-peer

2. **Forward-Ready Recap (prospect → her decision-maker)**
   - Bullet format, five to seven bullets, one sentence each
   - Sequence: her operational pain in her own words → what she observed from us in the call → connection to her stated priority → two proof points (senior-only delivery, working fixes shipped, success-aligned risk alignment — pick the two that matter most to her) → next step
   - Written as if Anna authored it — no vendor branding, no rep name, no product marketing copy
   - Dollar amounts: only if I supplied them in my inputs (I didn't)
   - Tone: internal memo, skeptical-but-intrigued, business-focused

## GROUNDING

- **The real lever:** Trust is the blocker. The fee structure isn't the problem — it's the *solution* to her problem. Don't defend it; reframe it as proof we're willing to bet on outcome.
- **The prior engagement scar:** She was burned. Don't minimize it or pivot away from it. Acknowledge it as the reason we're even talking.
- **Case study specificity:** If I didn't supply case studies in industrial fabrication, don't invent them. Flag what you'd need to source or ask me what's available.
- **Senior-only delivery as proof:** This is the differentiator that matters most to her — it's the anti-junior-consultant guarantee. Lean on it.
- **Avoid:** "I appreciate the opportunity," "we believe," "our methodology," "per our conversation," "synergy," product name in the recap, fee percentages not in my inputs, any stat or number I didn't supply.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the follow-up email and forward-ready recap, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

