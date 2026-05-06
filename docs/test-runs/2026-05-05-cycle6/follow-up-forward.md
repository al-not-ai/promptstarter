# follow-up-forward — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 30,823 in / 5,709 out  
**Engine cost (this tool):** $0.0475  

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

**Status:** OK | **Time:** 10214ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3365 | **Out:** 781 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (Department Manager, skeptical coming out of it) where they surfaced that their ops team spends 8 hours a week on manual pipeline updates. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to them anchored to that pain, and a forward-ready recap they can send internally to their decision-maker without editing — both tight, specific, and calibrated to move skepticism toward concrete next steps.

## STRUCTURE
1. **Follow-Up Email (rep → prospect)**
   - Opens with their 8-hour weekly pain as the concrete hook — this is the aha, not pleasantry
   - References one specific moment from the call (the HubSpot integration question or the dashboard walkthrough) that ties to that pain
   - One sentence that signals how Velara eliminates that work (auto-capture, zero manual updates) without feature-dumping
   - Closes with a single, concrete next step — no vague "let's sync" language
   - 3–4 short paragraphs; no "Great chatting today," no "per our conversation," no marketing copy

2. **Forward-Ready Recap (prospect → their internal decision-maker)**
   - Five to seven bullets, one sentence each; each line must feel like it came from the prospect's mouth, not the vendor
   - Order: their problem (8 hours/week) → what they observed on the call (HubSpot integration capability) → how it fits their priority (ops efficiency, CRM alignment) → two proof points (real-time capture, no implementation friction) → proposed next step (concrete action, no "explore further")
   - Zero rep names, zero product marketing ("Velara Revenue OS," "real-time intelligence," "pipeline visibility" — avoid vendor-speak); no dollar amounts
   - Tone: internal memo, not sales recap; prospect voice throughout

## GROUNDING
- **Anchor to the ops pain:** 8 hours/week on manual updates is the only specificity I've supplied. Use it as the lens; this prospect is operationally burdened, not philosophically skeptical. The skepticism is likely "we've heard this before" — your email and recap must prove the friction actually goes away.
- **HubSpot is their CRM:** They asked about integration. Velara's bidirectional sync with HubSpot is the fit signal. Reference it as seamless integration or native sync capability, not as "30-day deployment" or any timeline I didn't supply.
- **Skeptical posture calibration:** This prospect came out of the call unconvinced. The email must disarm that skepticism by naming the exact pain they told you, not by re-selling the demo. The recap must be credible enough to survive internal forwarding — which means it sounds like their analysis, not your pitch.
- **Avoid:** Feature lists, marketing adjectives ("powerful," "intuitive," "cutting-edge"), any implementation timelines, dollar figures, guarantees (even the forecast accuracy SLA — that's for later conversation), false specificity about how the integration works, and any details not in my inputs.
- **If you need context:** Ask me for it. If the next step I should propose isn't obvious from the pain and the call moment, ask what outcome I'm chasing (pilot, technical deep-dive, stakeholder meeting, etc.).

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

**Status:** OK | **Time:** 7128ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3385 | **Out:** 553 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just had a discovery call with James (VP / Director level) and he's bought-in on exploring a pilot in April. Write me two clean assets: a follow-up email from me to him that anchors to the forecast accuracy problem he surfaced, and a forward-ready recap he can send to his internal stakeholders — something he'd actually send without editing, written in his voice, not mine.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with the forecast accuracy gap he shared — 60% accuracy is the aha, not a thank-you
   - References the specific moment he showed you the Q2 forecast problem on screen
   - Closes with April pilot as the concrete next step; no "let's circle back" or vague handwake
   - Tone: direct, specific to him, no pleasantries or feature lists

2. **Forward-Ready Recap (Prospect → Internal Decision-Maker)**
   - Five to seven bullets, one sentence each, in this order: his forecast accuracy problem → what he observed in the call → how it maps to his stated priority → two concrete proof points (one from the call, one from how my product works) → proposed next step
   - Written entirely in his voice; prospect should be able to copy/paste internally without anyone knowing a vendor authored it
   - No mention of me, Velara, or product marketing language
   - No dollar amounts unless I supplied them in my inputs (I didn't)
   - Scan-friendly bullets; no paragraphs

## GROUNDING

- James is bought-in and ready to move; don't over-sell or hedge. Confidence is earned.
- The 60% forecast accuracy is the real pain — anchor both assets there. It's concrete and his.
- The April pilot timeline is his ask, not mine; treat it as a done deal in motion.
- Keep the forward-ready recap short enough he'll actually send it; longer than seven bullets and it becomes a document, not a brief.
- "Forecast accuracy" is the differentiator that matters here — lean on that, not features. The prospect doesn't care how we capture data; he cares that his board sees clean numbers.
- Avoid: generic call-recap language, "per our conversation," feature-benefit phrasing, soft closes, anything that sounds like vendor copy when he reads it to his boss.

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

**Status:** OK | **Time:** 8086ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3381 | **Out:** 619 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-min call with the CEO who's ready to sell internally to his CFO. He surfaced a specific pain — a lost deal last quarter because deal risk wasn't flagged in time — and he's already leaning hard on the speed of implementation. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to him that opens with the deal-risk pain, grounds it in a moment from our call, and closes with one concrete next step; and a forward-ready recap he can send to his CFO without editing — written in his voice, not mine, that walks his CFO through the problem, what we discussed, why it fits his priority, and what comes next.

## STRUCTURE

**1. Follow-up Email (rep → CEO)**
Opens with the deal-risk miss and its cost to his business — not pleasantries. Reference the specific moment from the call where he surfaced the lost deal. The body connects that pain to what Velara does (surface risk in real time, not post-mortem). Close with one concrete next step — e.g., sharing a brief overview of the 14-day timeline, scheduling a CFO conversation, or naming the first action if he moves forward. Avoid marketing language, "per our conversation," feature lists, and generic recap phrasing.

**2. Forward-Ready Recap (CEO → CFO)**
Five to seven bullets, one sentence each. Written so the CEO could have authored it — his vocabulary, his framing, no vendor language or Velara branding. Order: their problem in his words → what we discussed that matters → why it fits his stated priority → two proof points (speed of implementation and real-time risk surfacing are both anchors here; do not invent proof points not in my inputs) → proposed next step. Exclude rep name, product marketing copy, and any dollar figures I haven't supplied. This reads as his internal synthesis, not a vendor summary.

## GROUNDING

- The deal-risk miss is the anchor — it's specific to his experience and the proof point that matters most to him right now.
- The 14-day implementation story is his signal that speed is a constraint he's optimizing for; lean on that without overstating.
- The CEO is already a believer and has a CFO he needs to convince. The recap is his internal sales tool — it should feel like he's arming his CFO with the reasoning, not passing along a sales deck.
- Avoid: product feature lists, comparative claims, timeline guarantees beyond what I've confirmed, ROI math or savings estimates, "industry best practice" language.
- This is C-Suite tempo — tight, specific, no filler.

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

**Status:** OK | **Time:** 6849ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3345 | **Out:** 495 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed mildly interested energy coming out. Be my post-meeting strategist and produce two assets: a follow-up email I'll send them, and a forward-ready recap they can send internally to their stakeholders without editing. Both anchor to the specific moment from my call notes where real engagement landed.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the concrete moment or insight that genuinely landed — the aha or the pain they named
   - References one specific call detail from my notes (not generic recap language)
   - Closes with one clear, immediate next step — no vague "let's stay in touch"
   - Tone: direct, peer-level, no pleasantries or feature lists

2. **Forward-Ready Recap (prospect → their stakeholders)**
   - Five to seven bullets, one sentence each
   - Reads as if the prospect authored it — no rep language, no vendor branding, no product name
   - Sequence: their stated problem → what they observed in the demo → how it connects to their priority → two concrete proof points → proposed next step
   - Avoids: my name, product marketing, dollar amounts I didn't supply

## GROUNDING

- My call notes are sparse ("Showed demo. Was on the call. They liked it"). Anchor the follow-up email to that moment—what about the demo earned the "liked it" signal? If my notes don't surface a specific aha, ask me what moment felt like real engagement.
- For the prospect's internal recap, they're selling upward or laterally to someone who wasn't on the call. Write it in plain operational language—assume the reader cares about friction, not features.
- Operational users think about adoption, workflow fit, and team enablement. Keep that lens in both assets.
- "Mildly interested" means no assumptive close—next step should feel natural, low-friction, not urgent.
- If I didn't supply a specific pain point or priority from the call, ask me what problem they were trying to solve when they took the meeting.

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

**Status:** OK | **Time:** 8613ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3396 | **Out:** 665 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just closed a call with a skeptical prospect (James, VP/Director level) who pushed back hard on accuracy claims and demanded peer references before he'll consider next steps. Be my post-meeting strategist and produce two assets: a follow-up email I send to James anchoring to his skepticism as a strength (not a problem to overcome), and a forward-ready recap he can send to his internal stakeholders without editing — written in his voice, not mine, that positions what we discussed as a peer-validated business case, not a vendor pitch.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)**
   - Opens with acknowledgment of his skepticism as the right instinct — not dismissal of it
   - References one specific moment from the call (his push-back on metrics or his note-taking)
   - Positions peer references as the logical next step (not a concession, a validation method)
   - Closes with one concrete ask: intro to a peer, timeline, or next call to discuss reference criteria
   - Tone: respect his rigor; no softening language like "great conversation" or "happy to discuss further"

2. **FORWARD-READY RECAP (prospect → internal stakeholders)**
   - **Problem statement** (one sentence in his words, not ours): what business pain or CRM challenge he described during the call
   - **What we observed** (one sentence): the specific issue or gap he flagged (e.g. forecast accuracy erosion, manual CRM burden)
   - **Fit to his priority** (one sentence): how Velara Revenue OS maps to what he said matters most
   - **Proof point 1** (one sentence): peer reference or customer outcome he can validate independently
   - **Proof point 2** (one sentence): second peer reference or customer validation point
   - **Next step** (one sentence): specific ask (peer intro, reference call, second meeting)
   - Avoid: my name, "Velara Revenue OS" marketing taglines, any dollar amounts, vendor-speak like "eliminates data rot" or "real-time intelligence"

## GROUNDING

- James's skepticism is his operating standard — treat it as due diligence, not objection. He takes notes and demands proof. Mirror that rigor back.
- The peer reference is his unlock. Don't position it as something to earn; position it as the validation method that fits how he makes decisions.
- The recap is written *for* his stakeholders, not *about* Velara. It should read like an internal strategy memo, not a vendor summary. Strip vendor language entirely.
- Anchor both assets to what *he* said and observed — his words, his priority, his skepticism — not our positioning.
- No marketing claims, no feature lists, no accuracy percentages or numbers he didn't supply. Specificity comes from the call notes only.

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

**Status:** OK | **Time:** 9250ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3512 | **Out:** 726 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished an on-site demo with a department manager who's bought-in on solving his prep bottleneck. I need you to produce two assets: a follow-up email from me to him that anchors to the biggest aha (collapsing his distributed prep line into one station), and a forward-ready recap he can send to his decision-maker without touching a word — written in his voice, not mine.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the prep bottleneck aha, not a pleasantry. Ground it in one specific moment from the demo (Chef Diego's reaction to one-touch programmability, or the energy meter reading, or the back-to-back cooking sequence — pick the moment that felt most resonant to him).
   - One paragraph on what he observed during the demo that validated the solution.
   - One paragraph closing with a single, concrete next step (no vague "let's stay in touch").
   - Tone: Direct, brief, anchored to his language about the bottleneck. No feature lists, no "per our conversation," no marketing copy.

2. **Forward-Ready Recap (prospect → internal stakeholder)**
   - Five to seven bullets, one sentence each.
   - Order: (1) his morning prep bottleneck in his own words, (2) what the XR-Series actually did during the demo that he saw, (3) how it solves his stated priority, (4–5) two concrete proof points from the demo, (6) proposed next step.
   - Written as if he authored it — no rep names, no product taglines, no dollar amounts, no vendor branding. Use his language.
   - Tone: Professional, factual, internal-memo energy.

## GROUNDING

- **Anchor to the bottleneck aha.** The morning prep line is fragmented; the XR-Series consolidates it. This is the thread both assets follow. Don't dilute with secondary benefits.
- **The energy meter reading (28% below their current Rational) is a proof point.** Use it in both assets — it's concrete and he witnessed it live.
- **Chef Diego's buy-in on programmability is the human credibility signal.** He observed his line staff capability directly. Use it.
- **The demo sequence matters.** Salmon, short rib, bread proofed back-to-back in one unit — this is the tangible proof that prep consolidation works.
- **For the recap, he is the author.** Strip rep voice entirely. No "Northwind rep showed us," no product marketing language. He observed; he's reporting.
- **Avoid:** pleasantries ("great meeting"), feature-benefit phrasing, dollar amounts, timelines you don't have, "synergy" or vendor buzzwords, references to Rational as a competitor by name in the recap (his internal audience won't care; they care about what he saw).
- **Department managers are pragmatists.** He cares about line efficiency, staff capability, and operational proof — not innovation theater. Keep it operational.

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

**Status:** OK | **Time:** 9175ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3481 | **Out:** 686 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with a prospect (Karen, VP/Director level) who surfaced service network coverage in secondary markets as her real concern — more than equipment specs or cost. She's mildly interested. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to her that opens with the service concern, anchors to a specific moment from my call notes, and closes with one concrete next step; and a forward-ready recap she can send internally to her decision-makers that reads like her voice — no vendor branding, no rep language — covering her problem, what she observed, fit to her priority, two proof points, and the proposed next step.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with her service-network concern as the real aha — not pleasantries or a recap of features
   - References one specific moment from my call notes (her questions about tertiary-market response times)
   - Treats service coverage as the lever, not the equipment itself
   - Closes with one concrete, unambiguous next step
   - 3–4 short paragraphs; no feature-benefit lists, no marketing copy, no "per our conversation"

2. **Forward-Ready Recap (prospect → her internal stakeholders)**
   - 5–7 bullets, one sentence each; written in her voice and tone — as if she authored this
   - Leads with the problem as she'd describe it (secondary-market service risk)
   - Second bullet: what she observed during the call that matters
   - Third bullet: how the Northwind XR-Series addresses her stated priority
   - Fourth and fifth bullets: two concrete proof points (no dollar amounts unless in my call notes)
   - Sixth bullet: proposed next step
   - Seventh (optional): any open question or constraint she flagged
   - No rep name, no product marketing language, no vendor branding, no unsourced numbers

## GROUNDING

- Her real concern is operational risk in secondary markets, not cost or spec comparison — anchor everything there
- Service network coverage (nationwide same-day response) is the single differentiator that matters to her; lead with it
- She asked about tertiary markets twice — that's permission to treat this as central to the deal; don't bury it
- VP/Director level expects conciseness and internal-facing clarity; avoid jargon, avoid hedging
- The forward-ready recap should read like a peer brief, not a vendor summary — she's briefing her boss or team, not being sold to
- "Polite but comparing line-by-line" signals she's evaluating; use the email to elevate away from spec-to-spec and toward the risk she actually cares about
- Avoid: percentage claims, cost math, or service-response-time specifics not in my call notes; if I need to quantify coverage or response guarantees, ask me

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

**Status:** OK | **Time:** 8021ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3484 | **Out:** 605 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just closed a 60-minute strategy call with a CEO who's already selling internally — he wants to take this to his board next month. Be my post-meeting strategist and produce two assets: a follow-up email from me that opens with the margin-compression insight and references a specific moment from the call, plus a forward-ready recap the prospect can drop into his board pre-read without editing. Both pieces anchor to his words and the concrete pain he surfaced — no marketing language, no product branding in the recap.

## STRUCTURE

1. **Follow-Up Email (Rep to CEO)**
   - Opens with the insight that margin compression is rooted in legacy SOPs, not procurement — ties directly to what he surfaced on the call
   - References one specific moment or exchange from the call that grounded this realization
   - One concrete next step: the one-pager for his board pre-read
   - Tone: peer, not vendor; closing is brief and clear

2. **Board Pre-Read Recap (CEO's Internal Format)**
   - Bullet 1: The margin-compression problem in his language
   - Bullet 2: What he observed during our call that clarified the root cause
   - Bullet 3: How this aligns with his stated priority (board visibility, operational margin recovery, political feasibility — anchor to what he emphasized)
   - Bullets 4–5: Two concrete proof points showing why embedded senior diagnostics work (can be pattern-based; flag if you need specifics from me)
   - Bullet 6: Proposed next step (the 12-week engagement structure and board decision timeline)
   - No rep name, no "Aldermark" branding, no dollar amounts unless I supplied them in my inputs (I didn't)
   - Voice: written as if the CEO authored this himself — internal memo cadence

## GROUNDING

- His pain is structural and political, not tactical. Lean into the fact that this requires outside credibility and embedded seniority to move.
- He's already in selling mode. Skip reassurance and urgency plays — he knows why this matters. Stay on the substance and timeline.
- The board pre-read is his document. Write it so his team hears his voice, not ours. Strip vendor language entirely.
- Margin compression through legacy SOPs is the frame for both pieces — don't dilute it with secondary benefits.
- He asked for a one-pager for board pre-read context. The recap should feel like the distillation of his own call notes, not a sales summary masquerading as internal memo.

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

**Status:** OK | **Time:** 8605ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 | **Out:** 579 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just got off a call with Anna, a VP/Director who's skeptical — she's been burned by consulting before and that trust gap is the real blocker. Be my post-meeting strategist and produce two assets: a follow-up email from me that anchors to the aha moment (her prior bad experience, not the fee structure) and a forward-ready recap she can send to her decision-maker without editing. Both should feel earned and specific to our conversation, not generic.

## STRUCTURE

**1. FOLLOW-UP EMAIL** (rep to prospect)
- Open with the trust issue she named — the consulting burn — as the real reason she's skeptical. One concrete moment from the call that proves we understand what went wrong before.
- Single next step: what we propose to move this forward (not "let's schedule another call"). Make it tangible and low-friction.
- Tone: direct, no cheerleading. She's skeptical; earn it.

**2. FORWARD-READY RECAP** (prospect to internal stakeholders)
- Written entirely in her voice — no "Aldermark," no "the rep said," no vendor language. She authored this.
- Order: what she told us the problem is → what she observed in our conversation (not our pitch) → how this maps to her stated priority → two concrete proof points from the call → the next step we proposed.
- Avoid: my name, product marketing copy, dollar amounts she didn't name, case study references (unless she explicitly asked for a specific one during the call — then name the industry, not the client).

## GROUNDING

- Anna's skepticism isn't about the fee — it's about whether we deliver. The follow-up and recap must prove we listen, not pitch harder.
- The prior consulting engagement is the elephant in the room. The recap should reflect what she actually learned from that failure and why our model feels different to her.
- "Success-aligned fee structure" is jargon. In the recap, describe the working fix model and the measurable outcome she'll own — let her own words carry the credibility.
- She asked for case studies in industrial fabrication. If you need to reference a proof point, anchor to what she observed in our conversation (e.g., "You asked whether we actually deliver working fixes, not decks — here's how"), not a third-party anecdote.
- Keep both assets tight and scannable. Long paragraphs kill skepticism — short, direct lines earn trust.

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

