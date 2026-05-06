# follow-up-forward — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 20,630 in / 5,699 out  
**Engine cost (this tool):** $0.0393  

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

**Status:** OK | **Time:** 6644ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2230 | **Out:** 541 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I just finished a call with a prospect (department manager, HubSpot shop, skeptical mood) where they surfaced a major pain: their ops team burns 8 hours a week on manual pipeline updates. I need you to produce two assets that lock in the aha without needing my follow-up spin — a crisp email I send to them, then a forward-ready recap they can send to their internal stakeholder with zero editing.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the 8-hour ops tax they named — that's the hook, not pleasantries
   - Reference the HubSpot integration question they asked; anchor to what they'll get (auto-capture, zero manual CRM updates)
   - One concrete next step only (no list of options)
   - 3–4 short paragraphs; close with their move, not mine

2. **Forward-Ready Recap (prospect → their decision-maker)**
   - Five to seven bullets, one sentence each, written in their voice — no rep language, no vendor branding
   - Flow: their pain in their words → what they saw in the demo → how it maps to their priority → two proof points (auto-capture + native HubSpot sync) → one next step
   - Strip all rep framing, product marketing copy, dollar figures not in my notes
   - Make it read like they wrote it

## GROUNDING

- Anchor both assets to the ops time tax (8 hours/week) — that's the aha; don't soften it
- The HubSpot integration they asked about is the single proof point; lean on native bidirectional sync (no middleware) as the differentiator that solves their manual update problem
- Mood is skeptical — understate, don't oversell; let the time savings speak
- No product marketing language ("eliminates CRM data rot," "real-time intelligence," etc.) in either asset
- Don't invent call moments beyond what's in my notes; reference only: dashboard demo, HubSpot integration question, ops time burn
- Avoid: "per our conversation," feature lists, dollar amounts, timelines, implementation details I didn't mention
- The forward-ready recap must sound like a manager wrote it, not a vendor

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

**Status:** OK | **Time:** 7520ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2250 | **Out:** 626 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just had a discovery call with James (VP / Director level), he's bought-in, and I need you to produce two assets: a follow-up email from me to him that opens with his biggest pain and lands one next step, and a forward-ready recap he can send to his internal stakeholders without editing — something that sounds like *his* words, not vendor copy. Both anchor to the Q2 forecast accuracy problem (60% vs. what they need) and his stale pipeline data. James wants a pilot in April.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with forecast accuracy as the core pain, grounded in the 60% number he shared
   - Reference one specific moment from the call (his screen share of the forecast problem)
   - One sentence on what Velara Revenue OS does to solve it (real-time pipeline visibility, auto-captured activity — no manual CRM rot)
   - Close with the April pilot as the concrete next step; no vague "let's sync"

2. **Forward-Ready Recap (prospect → his internal stakeholders)**
   - Bullet 1: The problem in *his* language (60% forecast accuracy, pipeline data arriving stale)
   - Bullet 2: What he observed during our call (reference the screen share, what struck him)
   - Bullet 3: Fit to his stated priority (April pilot proves out the approach)
   - Bullets 4–5: Two concrete proof points — anchor to real-time data capture eliminating manual CRM updates and forecast accuracy within 4% guaranteed (SLA-backed)
   - Bullet 6: Proposed next step (pilot scope and timeline)
   - Tone: internal stakeholder memo, no vendor branding, no rep name, no dollar figures

## GROUNDING

- Anchor everything to the call notes and the 60% forecast accuracy number — that's the through-line for both assets
- The pain is *stale pipeline data*; the solution is real-time activity capture with zero manual CRM updates
- "April pilot" is the only timeline commitment — use it, don't invent other dates
- For the recap: James is the author, so write it as if *he's* the expert and observer — use first-person plural ("we observed", "we want to pilot")
- Avoid: product feature-speak, "Velara" or company branding in the recap, dollar amounts, marketing qualifiers like "cutting-edge" or "industry-leading," post-call pleasantries ("Thanks for your time")
- The recap must be scannable and stakeholder-ready — bullets are short, one thought per line, no jargon only James would know

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

**Status:** OK | **Time:** 7598ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2246 | **Out:** 621 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just closed a 30-minute call with a CEO who wants to send something to his CFO — he's already selling internally. My biggest leverage is the 14-day implementation story and the fact that they lost a deal last quarter because deal risk went unflagged. I need you to produce two assets: a follow-up email from me to the CEO that opens with that deal-loss pain and references a specific moment from the call, and a forward-ready recap he can send to his CFO without editing — written in his voice, not mine, that builds the case for moving fast.

## STRUCTURE

1. **Follow-Up Email (Rep → CEO)**
   - Open with the deal they lost last quarter and the unflagged risk that cost them — tie it directly to what they shared on the call
   - Reference one specific moment or insight from our 30-min conversation that showed you listened
   - Close with one concrete next step (not "let's schedule"; something that moves the ball)
   - 3–4 short paragraphs; no pleasantries, no feature lists, no "per our conversation"

2. **Forward-Ready Recap (CEO → CFO)**
   - Written entirely in the CEO's voice — no vendor language, no rep names, no Velara branding
   - Five to seven bullets, one sentence each, in this order:
     - Their problem (in their words, from the call)
     - What they observed on the demo or discussion
     - How this fits their stated priority
     - Two concrete proof points (the 14-day deployment + forecast accuracy; anchor both to what they care about)
     - Proposed next step (scan-ready, one line)
   - No dollar amounts unless I gave them to you; no product marketing copy; no hedging

## GROUNDING

- The deal they lost last quarter is real and specific — anchor to it hard. This is the emotional keystone for both assets.
- The 14-day implementation is the single biggest lever with this buyer. Lead with speed, not features.
- The CEO is already selling to the CFO — your recap makes his job easier, not harder. Write it so he could have written it himself.
- C-Suite buyers at this stage don't need education; they need proof. Forecast accuracy matters because it prevents deal surprise. Keep it tight.
- Avoid: product jargon (CRM data rot, pipeline intelligence, etc.), "best-in-class," "industry-leading," any statistic or number I didn't give you, rep voice creeping into the recap.
- The CEO mentioned the CFO explicitly — this is a two-stakeholder play. The email primes him; the recap closes the CFO.

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

**Status:** OK | **Time:** 6871ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2210 | **Out:** 533 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — we just had a call with a prospect in an operational user role who came out mildly interested after seeing the demo. I need you to produce two assets: a follow-up email from me to them that anchors to the specific moment they responded positively, and a forward-ready recap they can send to their internal stakeholders without editing — written in their voice, not mine, so it feels like their own analysis.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the specific demo moment or capability they reacted to — the actual aha they surfaced, not generic praise
   - One tight paragraph referencing a concrete thing from my call notes
   - One paragraph on what that moment means for their stated workflow or pain
   - Close with one concrete next step (timing, format, owner — no vague "let's connect")
   - Tone: direct, earned, zero pleasantries

2. **Forward-Ready Recap (Prospect → Their Decision-Maker)**
   - Five to seven bullets, one sentence each
   - Order: their problem in their own words → what they observed in the demo that mattered → how it maps to their stated priority → two proof points (capability or use case they can own) → proposed next step
   - Write as if the prospect authored it — no "the vendor showed us," no product marketing language, no rep name, no Velara branding unless they named it first
   - Avoid dollar amounts or headcount not in my call notes
   - Scannable, no jargon, executive-ready

## GROUNDING

- Anchor both assets to my call notes — the specific demo moment and what they responded to. If my notes don't name the moment, ask me to clarify what they reacted to.
- "Mildly interested" is honest baseline — don't oversell their energy or invent momentum they didn't show.
- The operational user role means they care about workflow friction and day-to-day enablement — center the aha around that, not executive ROI metrics.
- Avoid: case studies, competitor mentions, timelines or metrics not in my notes, generic CRM language, "as discussed."
- The forward-ready recap is their tool, not our foot in the door — it should sound like their discovery, their words.

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

**Status:** OK | **Time:** 9105ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2261 | **Out:** 678 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP / Director level) where he pushed back hard on our forecast accuracy claims and made clear he only moves forward on peer references — not vendor marketing. I need you to be my post-meeting strategist and produce two assets: a follow-up email I send to James that opens with his skepticism as the real issue (not a pleasantry) and anchors to a specific moment from the call, plus a forward-ready recap he can send to his internal stakeholders that reads like he wrote it, surfaces his core concern without vendor language, and builds a peer-reference path as the next concrete step.

## STRUCTURE

1. **Follow-up Email (Rep → James)**
   - Open with acknowledgment of his skepticism about vendor claims — name it directly as the insight, not "great call"
   - Reference one specific moment from the call (he took notes the whole time; he rejected the forecast accuracy metric)
   - Pivot to peer-reference as the bridge: position the ask as "here's how we move this forward in a way that fits how you evaluate vendors"
   - Close with one concrete next step (reference call, intro to customer, timeline for you to send names — pick the clearest path)
   - 3–4 short paragraphs; no feature-benefit list, no "per our conversation"

2. **Forward-Ready Recap (James → His Internal Team)**
   - Five to seven bullets, one sentence each, in this order:
     - Their problem as James would state it
     - What he observed on the call that matters (skepticism about vendor metrics is valid; here's why)
     - How this connects to his stated priority
     - Two proof points (peer references are the lever; Velara's model is built on peer validation, not marketing)
     - Proposed next step (timeline, who owns it, what success looks like)
   - Write in James's voice — no rep language, no "Velara Revenue OS" branding, no dollar amounts
   - Scannable, tight, stakeholder-ready

## GROUNDING

- **Anchor to the call**: James's skepticism isn't an objection — it's his evaluation framework. Treat it as clarity, not friction.
- **Peer references as the only move**: Don't rehash the forecast accuracy claim. Let peer validation be the answer.
- **Specific moment**: He took notes the whole time and pushed back on metrics. Use that as evidence he's taking this seriously and will move on proof he trusts.
- **His role**: VP / Director — he's evaluating on behalf of a team. The recap should be a tool he actually uses internally, not marketing material.
- **Avoid**: Vendor cheerleading, dollar figures, my name or title, "Velara" branding in the recap, any claims not backed by the peer-reference ask.
- **Tone in both assets**: Respect his skepticism. Be direct. Move fast.

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

**Status:** OK | **Time:** 6605ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2384 | **Out:** 540 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just ran an on-site kitchen demo with a department manager who's bought in on solving their morning prep bottleneck. I need you to produce two assets — a follow-up email from me to them, and a forward-ready recap they can send to their internal decision-maker without editing — that anchor to what they actually saw and said, not marketing language.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with their bottleneck (proofer across the kitchen) and how the XR-Series collapses it into one station — reference the specific moment from the demo
   - One sentence citing the energy reading (28% below their current Rational unit during the demo)
   - One concrete next step (e.g., spec sheet, timeline to proposal, internal champion intro)
   - Tone: colleague-to-colleague, no pleasantries or feature lists

2. **Forward-Ready Recap (prospect → their internal stakeholder)**
   - Five to seven single-sentence bullets in this order: their bottleneck in their own words → what they observed during the demo → why it solves their stated priority → two concrete proof points (programmability feedback from Chef Diego; energy efficiency number) → proposed next step
   - Write as if they authored it — no rep voice, no vendor branding, no marketing copy
   - Exclude: my name, Northwind branding, any dollar amounts

## GROUNDING

- Anchor both assets strictly to my call notes — the salmon/beef short rib/bread demo, Chef Diego's exact feedback on programmability, the 28% energy reading, the proofer-across-the-kitchen bottleneck
- The energy reading (28% below their Rational) is the single concrete proof point; use it once, in both assets, exactly as I've stated it
- The programmability insight ("line cooks could run it without hovering") is a real operational win — use it, not generic "ease of use" language
- Prospect is a department manager who's bought in — energy and confidence in the copy, no soft-sell hedging
- For the forward-ready recap: the prospect is writing to an internal decision-maker (likely finance or ops lead) — skip jargon, anchor to their business problem, not the oven's features

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

**Status:** OK | **Time:** 9850ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2353 | **Out:** 746 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. I just finished a call with a VP/Director-level prospect (Karen) who surfaced a real but unspoken concern: service coverage in their secondary-city locations. She stayed polite but kept benchmarking us to Convotherm and asked about response times twice. I'm mildly interested but need to move her past equipment-spec comparison into confidence around our nationwide service footprint. Produce two assets: a follow-up email from me that anchors to her service concern (not energy specs) and a forward-ready recap she can send to her internal decision-makers that reads like *she* authored it — no vendor voice, no rep branding.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)**
   - Open with the service-response-time worry she surfaced — name it directly, no small talk
   - Reference one specific moment from the call (e.g., her Convotherm comparison, her question about secondary-market coverage)
   - Weave in one concrete proof point about our same-day nationwide service model (use the fact from my inputs or the profile — no invented stats)
   - Close with one next step: either a call with our service ops lead, a specific secondary market case study she can review, or a commitment to send tertiary-market coverage details
   - Tone: Peer-level, solution-focused; skip "per our conversation," pleasantries, and feature lists

2. **FORWARD-READY RECAP (prospect → their stakeholders)**
   - 5–7 bullets, one sentence each; written in first person from her perspective
   - Sequence: (1) their problem/pain in her words → (2) what they observed/learned on the call → (3) how it maps to their stated priority → (4) two concrete proof points (equipment footprint gain + service reliability; or energy + speed of implementation; your call based on what landed) → (5) proposed next step
   - Strip all rep language, vendor branding, product names where possible; use "the oven" or functional reference instead
   - No rep name, no dollar figures, no marketing copy
   - Tone: Internal, matter-of-fact, decision-ready — something a busy exec would skim in 30 seconds

## GROUNDING

- **Anchor to the call:** Her service concern was implicit (asked twice about response times in secondary markets) — surface it as the real decision lever, not equipment cost or energy efficiency
- **Service proof point:** Use only what's in the profile — same-day on-site response across continental US, no factory-trained-tech bottleneck — and calibrate it to secondary-market confidence
- **Convotherm mention:** I can acknowledge the comparison (don't denigrate it), but pivot to what she actually cares about — can you cover *our* secondary locations reliably?
- **Avoid:** energy-savings percentages unless she brings them back; feature-benefit rundowns; any stat or case-study name not in my inputs; assuming her decision timeline or next meeting date
- **For the recap:** Write it like an internal memo, not a handoff — no "the vendor told us" construction; no quotation marks around our claims; conversational but crisp

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

**Status:** OK | **Time:** 8373ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2353 | **Out:** 619 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory who just finished a 60-minute strategy call with a CEO. He surfaced margin compression rooted in legacy SOPs his team lacks political capital to kill — and he's already thinking board-ready. I need you to be my post-meeting strategist and produce two assets: a follow-up email I send him today that anchors to that aha and clears the path to his one-pager, plus a forward-ready recap he can drop into internal conversation without editing. Both pieces should feel like progress, not pitch.

## STRUCTURE

**1. Follow-Up Email (Rep → Prospect)**
- Open with the margin/SOP insight — the single biggest thing he said that shifted something
- Reference one specific moment or phrase from the call notes that made that insight real
- One paragraph on what we'd dig into in the next phase (diagnosis of the three biggest cash leaks, not features)
- Close with the concrete ask: a one-pager suitable for board pre-read, what we'd need from him to build it, timeline
- Tone: peer, not vendor; actionable, not flowery

**2. Forward-Ready Recap (Prospect → Their Internal Decision-Makers)**
- Written entirely in his voice and thinking — no rep name, no Aldermark branding, no product marketing language
- Five to seven bullets, one sentence each
- Sequence: problem statement (margin compression, root cause in his words) → what he observed on the call → how it fits his stated priority → two concrete proof points from the conversation → next step (the one-pager, the board moment)
- Dollar amounts, headcount, specific percentages only if they came from his mouth in the call notes
- Designed to survive a copy-paste into an internal Slack or email chain

## GROUNDING

- The aha is margin compression tied to legacy SOPs and internal politics — anchor everything there, not to procurement spend or headcount
- He's already selling internally (board mention, one-pager ask) — treat him as an internal champion, not a skeptic; your job is to make him look sharp when he evangelizes
- One-pager is the concrete next step, not a "learning call" or "exploratory phase" — the email moves toward that deliverable
- Senior-only delivery and working fixes by week 12 are our differentiators; if the recap touches next phase, ground it in diagnosis + outcome, not methodology or team size
- Board-ready means crisp, outcome-focused, no vendor jargon — the recap especially should read like internal strategy memo language
- Avoid: "per our conversation," "great chatting," feature lists, Aldermark mentions in the recap, any statistic or figure not in the call notes

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

**Status:** OK | **Time:** 9307ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2343 | **Out:** 795 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just closed a call with Anna (VP / Director level) who's skeptical — she's been burned by a consulting engagement before and doesn't trust the category yet. The trust gap is the real blocker, not the fee. Be my post-meeting strategist and produce two assets: a follow-up email from me that anchors to her skepticism and the specific moment she surfaced the trust issue, and a forward-ready recap she can send to her internal decision-maker without editing — one that proves we're different through action, not claims.

## STRUCTURE

1. **Follow-Up Email (me → Anna)**
   - Open with the trust gap she named, not pleasantries — acknowledge the burned experience and why it matters
   - Reference one specific moment from the call where she tested our difference claim (Anna asking for case studies in her exact industry)
   - One concrete next step that moves her from skepticism to proof (not a meeting, not a deck — something that shows we ship real work)
   - Close with specificity on what we'll show, not what we promise
   - Avoid: "Great chatting today," feature lists, product marketing language, "per our conversation"

2. **Forward-Ready Recap (Anna → her decision-maker)**
   - Scannable bullets, one sentence each, written in her voice — no rep language, no Aldermark branding
   - Problem statement in her exact words (operations bleeding margin, prior engagement failed)
   - What she observed in the call (senior partners embed, fixed-fee success-aligned structure, no junior consultants)
   - Fit to her stated priority (trust through shipping real fixes, not recommendations)
   - Two proof points: the success-aligned fee structure (50% held back until margin recovery signed off), and the industrial fabrication sector focus
   - Proposed next step that's lightweight and non-salesy
   - Exclude: my name, product marketing copy, dollar amounts, headcounts, or any specificity not in my inputs

## GROUNDING

- **The trust blocker is real.** She's skeptical because the last engagement failed. Don't sell the Reset — show that we're different through concrete action (embedded partners, working fixes, sector focus). Claims won't move her.
- **Anchor to the specific moment.** She asked for case studies in industrial fabrication. That's the door. Reference that exact ask and show how we address it (sector-specific expertise, not generic library).
- **Success-aligned fee is the proof.** The 50% holdback isn't a gimmick — it's skin in the game. That's what separates us from every consultant who "claims they're different."
- **No marketing copy in the recap.** She's forwarding this internally. It reads like her memo, not a vendor brief. Use her language (operations, margin, trust) not ours.
- **One next step, one direction.** Not "let's set up a call" — something that proves we move fast and show work (an initial diagnostic window, a sector-specific reference, a one-pager on how we approach her specific leak).
- **Avoid buzzwords for this audience:** "world-class," "solutions," "partnership," "leverage," "synergy" — she's skeptical of consultant-speak.
- **Sector: industrial fabrication.** Keep this specific if it comes up; we focus on PE-backed industrials and mid-market manufacturing — her space is home.

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

