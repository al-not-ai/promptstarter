# follow-up-forward — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 28,991 in / 5,520 out  
**Engine cost (this tool):** $0.0453  

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

**Status:** OK | **Time:** 7387ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3159 | **Out:** 569 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect — they're skeptical, and their ops team is burning 8 hours a week on manual pipeline updates. Be my post-meeting strategist and produce two assets: a follow-up email from me to them that anchors to the single biggest aha from the call, and a forward-ready recap they can send internally without editing — written in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the manual pipeline work they surfaced — the real cost they named — not a generic thank-you.
   - References one specific moment from the call (the HubSpot integration discussion or the dashboard walkthrough, whichever felt like the turn).
   - Closes with one concrete next step — not "let's sync" or "happy to answer questions."
   - Avoid pleasantry openers, feature lists, marketing language, and "per our conversation" phrasing.

2. **Forward-Ready Recap (prospect → their internal decision-maker)**
   - Five to seven bullets, one sentence each. Reads like the prospect wrote it.
   - Structure in order: problem they named → what they saw in the demo → how it fits their stated priority → two concrete proof points → proposed next step.
   - No rep name, no product marketing copy, no dollar amounts unless I supplied them in my inputs.
   - Proof points should land as *their* observations, not my claims.

## GROUNDING

- The ops team's 8 hours/week on manual CRM updates is their language and the true pain — anchor everything there.
- They use HubSpot; Velara syncs bidirectionally with HubSpot with no middleware. This is the fit signal.
- Skeptical mood means they need proof of *elimination* of manual work, not promises. The recap should reflect what they saw in the demo, not what we claim.
- The forward-ready recap is written for an internal decision-maker (likely a leader above the prospect). Assume that person cares about time ROI and operational friction, not feature depth.
- Avoid vendor language ("real-time intelligence," "pipeline visibility," "Velara Revenue OS"). Use their operational language — "updates," "manual work," "staying current," "accuracy."
- If the call notes don't give me a specific dashboard moment to reference in the email, anchor to the HubSpot integration discussion as the inflection point.

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

**Status:** OK | **Time:** 7959ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3179 | **Out:** 607 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a prospect (VP / Director level) who surfaced a forecast accuracy problem and wants to explore a pilot in April. I'm bought-in on momentum. Be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens with their biggest aha (forecast accuracy crisis), anchors to one specific call moment, and closes with a concrete next step; and a forward-ready recap they can send internally to their decision-maker without editing — written in their voice, not ours, structured as problem → observation → fit → proof → next step.

## STRUCTURE

1. **Follow-Up Email (Rep to Prospect)**
   - Open with the forecast accuracy pain they named — their 60% accuracy problem and what it means operationally
   - Reference one specific moment from the call (the screen share of their Q2 forecast) to anchor credibility
   - One paragraph on what they observed during the call (their appetite, the problem's urgency)
   - Close with one concrete next step tied to their April pilot timeline — no vague "let's keep talking"
   - Tone: conversational, no vendor-speak, no feature rattle

2. **Forward-Ready Recap (Prospect to Internal Stakeholder)**
   - Structure as five to seven bullets, one sentence each, in this order
   - Problem: forecast accuracy gap in their words (not ours)
   - Observation: what they heard on the call that resonated
   - Fit: how Velara Revenue OS maps to their stated April pilot priority
   - Proof: two concrete proof points (e.g., auto-capture eliminates manual CRM updates; real-time coaching surfaces risk before it's fatal) — anchor to capability, not numbers
   - Next Step: proposed pilot approach
   - Voice: internal memo tone — reads like they authored it, no rep name or product marketing copy, no dollar amounts

## GROUNDING

- The 60% forecast accuracy is their stated problem — anchor everything to that, not to generic forecast risk
- James's nod-through and the screen share are your credibility anchors in the email; use them to build momentum, not to over-sell
- The April pilot is the north star for both assets — next steps ladder toward April, not beyond it
- For the forward-ready recap: write so an internal stakeholder sees business problem → observed fit → clear path, no rep voice bleeding through
- Avoid: "per our conversation," "great chatting," feature stacking, any product marketing language in the recap, dollar amounts not in my inputs, rep name or company branding in the prospect-facing recap

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

**Status:** OK | **Time:** 8438ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3175 | **Out:** 642 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just wrapped a 30-min call with a CEO who wants to send something to his CFO — he's already selling internally. My biggest lever is the 14-day implementation story and the fact that a missed deal last quarter happened because deal risk wasn't surfaced in time. I need you to be my post-meeting strategist and produce two assets: a follow-up email I send to the CEO, and a forward-ready recap he can send to his CFO without editing — both positioned to keep momentum and anchor to what he cares about.

## STRUCTURE

1. **Follow-Up Email (CEO-facing)**
   - Opens with the deal-risk miss from last quarter — the single biggest aha from the call, not a pleasantry.
   - References one specific moment from the call (the 14-day implementation appetite) to show I listened.
   - Closes with one concrete next step — no vague "let's sync."
   - Three to four short paragraphs. No feature lists, no "per our conversation," no marketing copy.

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, one sentence each. Scannable, internal-memo voice — reads like the CEO wrote it, not a vendor.
   - Sequence: their problem in their words → what they saw on the call → how it fits their stated priority → two proof points (tie one to speed of deployment, one to risk prevention) → proposed next step.
   - No rep name, no Velara branding, no dollar amounts. The CFO should believe the CEO authored this.

## GROUNDING

- **Anchor to the deal-risk miss.** That's the pain they own. The 14-day story is the momentum lever — speed removes friction when CFOs are skeptical of new tooling.
- **CEO is already selling.** Assume he's pitching internally; give him ammo that lands with a finance operator, not more discovery questions.
- **"Proof points" = live examples, not marketing claims.** One should touch speed of deployment (14 days, no implementation, no professional services baggage). One should be a forward-looking guard against the scenario that cost them last quarter.
- **Prospect's stated priority:** Fast deployment that doesn't bog down ops, plus deal visibility that catches risk before deals crater.
- **Avoid:** Hedging language ("might," "could"), feature-benefit cadence, vendor jargon, any number not in my inputs (no "4%," no "zero manual updates" as a stat — only use what I said or what's plainly true of the call).
- **Voice calibration:** CEO-to-CFO recap should read like a peer note, not a sales artifact. Follow-up email should feel earned, not templated.

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

**Status:** OK | **Time:** 6346ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3139 | **Out:** 481 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just wrapped a call with an operational user who came out mildly interested after a demo. Be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens with what genuinely resonated in our conversation, and a forward-ready recap they can send to their internal stakeholders without editing—written entirely in their voice, not mine.

## STRUCTURE

1. **FOLLOW-UP EMAIL (Rep → Prospect)**
   - Opens with the single most-resonant moment from the call—not a generic "great conversation" opener
   - Grounds one specific demo moment or observation they reacted to; anchor to my call notes
   - One concrete next step (no vague "let's stay in touch")
   - Avoid pleasantries, feature-benefit ladders, marketing copy, "per our conversation" phrasing

2. **FORWARD-READY RECAP (Prospect → Their Internal Stakeholders)**
   - Five to seven bullets, one sentence each, written as if the prospect authored it themselves
   - Order: problem statement (their words) → what they observed in the demo → how it maps to their stated priority → two concrete proof points from the call → proposed next step
   - No rep name, no vendor branding, no dollar amounts unless I supplied them in my inputs
   - Scannable; each bullet stands alone

## GROUNDING

- **Anchor to call notes only.** No invented moments, reactions, or specifics—only what I documented in my notes.
- **Mildly interested calibration:** the recap should feel like a natural next conversation, not a hard close. Prospect should read it and think "yeah, that's worth exploring with leadership."
- **Operational user ear:** they care about workflow, data hygiene, and day-to-day adoption friction—not executive vision. Keep language practical.
- **Prospect voice means prospect voice.** No "Velara showed us," no product marketing, no vendor-speak. If it wouldn't sound natural from a practitioner typing an internal email, rewrite it.

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

**Status:** OK | **Time:** 9657ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3190 | **Out:** 700 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just had a call with James (VP/Director level, skeptical on metrics) where he pushed back hard on accuracy claims and made clear he'll only move forward with peer references. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to James that opens with his core concern (peer validation, not marketing claims) and references a specific moment from the call, then a forward-ready recap he can send to his internal stakeholders that reads like his own synthesis — not vendor copy — and makes the case for next steps without my name or product branding in it.

## STRUCTURE

1. **Follow-Up Email (rep → James)**
   - Opens with acknowledgment of his peer-reference requirement — frame it as smart skepticism, not an objection
   - Reference the specific moment: he took notes the whole time (signal he's thinking); he pushed back on every metric (signal he's rigorous)
   - One concrete next step: peer reference introduction or call setup — your call
   - Tone: respectful of his rigor, no defensiveness on the accuracy claim, short and direct
   - Close with a low-friction ask (what day works for a brief call, or "I'll send you a customer you can reach directly")

2. **Forward-Ready Recap (James → his stakeholders)**
   - Written entirely in James's voice and perspective — as if he synthesized the call himself
   - Five to seven bullets, one sentence each, in this order:
     - His problem (in his words from the call, not vendor framing)
     - What he observed or learned about Velara on the call
     - How it connects to a priority he stated
     - Two proof points (customer outcomes, capability he saw, or both — anchor to what came up in the call)
     - Proposed next step (peer reference, follow-up call, whatever is natural)
   - Avoid: my name, Velara product marketing language, specific dollar amounts, vendor jargon
   - Format for quick internal scan (bullets, short lines, no paragraph prose)

## GROUNDING

- James is skeptical of vendor metrics — peer references are his credibility filter. Anchor the follow-up and recap to *how* we'll satisfy that, not to *why* our claims are true.
- He took notes the whole time: that's a positive signal he's engaged and thinking. Reflect that in the follow-up tone (not apology, just respect for his diligence).
- No unsourced numbers in the recap. If a customer outcome comes up naturally from call context, use it; if not, leave it out. Never invent a percentage or metric for this asset.
- The recap must read as *his* perspective, not a sales artifact. Strip vendor voice entirely — no "Velara Revenue OS enables," no "we deliver," no company branding. Simple, direct, business language.
- Don't assume his next step. Ask me what makes sense (peer intro, call scheduling, reference call logistics) and scaffold the follow-up around that.

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

**Status:** OK | **Time:** 7838ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3313 | **Out:** 654 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just ran an on-site demo with a department manager who's bought-in. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens with the bottleneck insight and anchors to a specific moment from the demo, and a forward-ready recap the prospect can send internally to their decision-maker without editing — written in their voice, no vendor language, proof-driven.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the proofer bottleneck insight — frame it as the unlock, not a feature pitch
   - Reference one specific moment from the demo (chef reaction, energy meter reading, or the back-to-back cooking sequence) as proof it's real
   - One concrete next step — no vague "let's reconnect"; something they can act on
   - Avoid pleasantries ("Great chatting"), feature-benefit lists, marketing copy, "per our conversation" phrasing
   - 3–4 tight paragraphs, rep voice throughout

2. **Forward-Ready Recap (Prospect → Their Internal Decision-Maker)**
   - Five to seven bullets, one sentence each — scannable and authored-by-prospect tone
   - Order: their problem (proofer bottleneck) → what they observed during demo → fit to their stated priority → two concrete proof points (chef feedback + energy data) → proposed next step
   - Write it so they could have written it — no rep name, no product marketing language, no dollar amounts
   - Prospect voice, internal tone, decision-maker ready

## GROUNDING

- The proofer bottleneck is the single strongest lever — it's the pain they named. Everything else (space recovery, energy, chef buy-in) is proof it's solvable.
- Concrete moments anchor credibility: Chef Diego's reaction to one-touch programmability, the 28% energy meter reading during the demo, the back-to-back cooking sequence itself. Use specifics from my notes, not generalizations.
- For the internal recap, strip all vendor branding and rep identity. "Northwind" and my name don't appear. The prospect is the subject; the decision-maker is the audience.
- Energy savings data: The 28% reading from the demo is specific to their Rational unit in that moment. Don't extrapolate or annualize unless I give you the math.
- No dollar amounts, no ROI claims, no timeline assumptions not in my inputs. If the recap needs a next-step date or financial impact, ask me for it.
- Avoid hedging ("could," "might," "potentially") in the follow-up — they're bought-in; be direct. Same for the recap — decision-makers read confidence.

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

**Status:** OK | **Time:** 8019ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3282 | **Out:** 592 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with a prospect (VP/Director level, mildly interested) who surfaced service coverage in secondary markets as their real concern beneath the equipment comparison. Be my post-meeting strategist and produce two assets: a follow-up email from me to them anchored to that service-network insight, and a forward-ready recap they can send to their internal stakeholders without editing — both grounded in what they actually said on the call, neither soft-selling.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the service-network insight as the real differentiator, not equipment specs — tie it to the specific moment they asked about tertiary-market coverage
   - Single reference to a concrete call moment (their comparison question, their location concern, their timeline question — pick one from my notes)
   - One concrete next step (call, follow-up conversation, site visit, introductory conversation with their operations team — your choice, but make it unambiguous)
   - Body is 3–4 short paragraphs; no pleasantries, no "great chatting with you," no feature-benefit lists, no vendor copy

2. **Forward-Ready Recap (prospect → internal stakeholder)**
   - Five to seven bullets, one sentence each
   - Sequence: their stated problem → what they observed/learned on the call → how the XR-Series fits their priority → two proof points (from my notes or from product reality, not invented) → proposed next step
   - Written in prospect voice — no rep name, no vendor branding, no dollar amounts I didn't supply
   - Scannable bullets; each stands alone; language sounds like an operator, not a salesperson

## GROUNDING

- Anchor the follow-up email to the service-network question they asked twice — that's the lever, not the energy or the footprint
- The forward-ready recap should feel like the prospect is briefing their boss or procurement on a vendor conversation they think has legs; it should NOT sound like something I wrote
- Avoid "per our conversation," "as discussed," feature-dump language, and marketing superlatives in both assets
- If my notes don't contain a specific next-step detail, ask me what commitment or conversation makes sense given their mildly-interested posture and their operational concern
- No dollar amounts, payback claims, or specifications not in my call notes or the product profile
- The recap is their internal brief — no mention of competing quotes or other vendors, just their problem and what they learned about fit

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

**Status:** OK | **Time:** 6727ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3282 | **Out:** 510 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory. I just finished a 60-minute strategy call with a CEO who's ready to take this forward and pitch his board next month. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to him that anchors to the aha we surfaced on the call, and a forward-ready internal recap he can drop into his board pre-read without editing. The prospect is already selling internally — the recap should read like his thinking, not ours.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the single aha: margin compression is a legacy-SOP problem, not a procurement fix — make this the anchor, not small talk
   - Reference one specific moment from the call that proved this point
   - Close with one concrete next step (the board pre-read asset)
   - Avoid pleasantries, feature lists, and "per our conversation" phrasing

2. **Forward-Ready Recap (Prospect → Internal Decision-Makers)**
   - Five to seven bullets, one sentence each, scannable and authored-by-prospect in tone
   - Sequence: problem statement in his words → what he observed on our call → how this connects to his stated priority → two concrete proof points → proposed next step
   - Strip rep language, vendor branding, and any dollar amounts
   - Do not include the rep's name or Aldermark marketing copy

## GROUNDING

- The aha is the load-bearing truth here: legacy SOPs, not vendor or cost issues. Build both assets around that — it's what made the call land.
- CEO is C-suite and already mobilizing internally. The recap should feel like his own strategic insight, not a sales summary. Crisp, boardroom-ready, no jargon.
- The next step in both assets is the board pre-read — stay aligned to that single outcome.
- Avoid vendor-forward language ("our 12-week engagement," "Aldermark delivers," "we embed"). The recap especially should sound like the CEO thinking through his own operations problem.
- If you need specifics on the three legacy SOPs he named, ask me for them — don't invent operational details.

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

**Status:** OK | **Time:** 10429ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3272 | **Out:** 765 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just called Anna, a VP/Director prospect who's skeptical coming out of the call — she's been burned by prior consulting work and doesn't trust consultants yet, even though she surfaced real operational bleeding. Be my post-meeting strategist and produce two assets: a follow-up email from me that opens with the trust gap (not pleasantries), anchors to a specific moment from my call notes, and proposes one concrete next step; and a forward-ready recap she can send internally to her decision-maker without editing, written entirely in her voice and framed around her stated priorities and proof, not our product.

## STRUCTURE

1. **Follow-Up Email (rep → Anna)**
   - Opens with acknowledgment of her trust gap — the real blocker, not the fee structure.
   - Anchors to one specific moment from my call notes (her comment about prior consulting delivering nothing).
   - References the success-aligned fee structure only as the answer to that gap, not as a feature pitch.
   - One concrete next step: propose what moves forward the trust verification (case study, reference call, small proof engagement — your call based on what feels earned).
   - Tone: straight, no reassurance language, no marketing cadence.

2. **Forward-Ready Recap (Anna → her decision-maker)**
   - Framed entirely in her words and her priorities — no Aldermark branding, no rep voice.
   - Five to seven bullets in strict order: (a) the operational problem she named, (b) what she observed or learned on the call that matters, (c) how this ties to her stated priority, (d) two concrete proof points (could be approach detail, client proof, structural accountability — anchor to my notes), (e) the proposed next step.
   - One sentence per bullet. Scannable and plain.
   - Avoid: my name, product marketing copy, dollar amounts unless you source them from my inputs.
   - Write it so she authored it herself — no vendor language, no "Aldermark told us" framing.

## GROUNDING

- **The trust gap is the lever.** She's been burned; the fee structure is her proxy for risk. Don't defend the fee — use it as proof we back our work when others won't. The anchor is her prior bad experience, not our cleverness.
- **Specificity from my notes only.** The moment she mentioned prior consulting failure — that's real and earnable. Don't invent case study details, client names, or ROI numbers. If the recap needs proof and my notes don't supply it, ask me for it.
- **Forward-ready means she reads it cold.** No jargon, no vendor assumptions, no "as discussed." She should recognize her own words and her own logic chain.
- **Next step must be concrete and small.** Not "let's schedule phase two." Could be a reference conversation, a single-client case outline (anonymized), a structured 90-minute diagnostic call with clear outputs — something that proves we deliver working fixes, not process.
- **Industrial fabrication context.** She asked for proof in her exact sector. If my notes surface any sector-specific detail (margin structure, typical cash leaks, operational cadence), weave it into the recap so it feels native to her world, not consultant-speak.

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

