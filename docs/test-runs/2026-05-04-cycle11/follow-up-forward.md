# follow-up-forward — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 26,701 in / 5,494 out  
**Engine cost (this tool):** $0.0433  

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

**Status:** OK | **Time:** 8126ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2907 (read=0, write=0) | **Out:** 592 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect (department manager, using HubSpot, skeptical mood). I need you to act as my post-meeting strategist and produce two assets: a follow-up email from me to them that opens on their biggest pain point and anchors to a specific call moment, and a forward-ready recap they can send to their internal decision-maker without editing — written in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (rep to prospect)**
   - Open on the 8 hours weekly their ops team loses to manual pipeline updates — not a pleasantry. Make it concrete and sting a little.
   - Reference the HubSpot integration question they asked during the demo. Show you heard the real concern underneath.
   - One sentence acknowledging their skepticism; don't dismiss it or over-clarify.
   - Close with one specific, bounded next step (no vague "let's connect soon").
   - Tone: direct, grounded, not salesy. 3–4 tight paragraphs.

2. **Forward-Ready Recap (prospect to their stakeholders)**
   - Five to seven bullets, one sentence each. Structure in this order: problem statement (their words, not ours) → what they saw in the demo → connection to what they said matters most → two concrete proof points (one on the integration side, one on the time-savings side) → proposed next step.
   - Write as if they authored it — no rep names, no "Velara Revenue OS" product marketing, no dollar figures beyond what I gave you.
   - Tone: internal memo. Professional, not pitch. Make the skeptic sound like they're evaluating, not selling.

## GROUNDING

- The 8-hour weekly ops burden is your anchor. That's real friction; everything else serves that.
- HubSpot integration is not a feature to list — it's a signal they care about ease of adoption and no broken workflows. Make the integration feel inevitable given what they just saw.
- Skeptical prospect = don't oversell. Confidence is earned by specificity and constraint, not by adjectives. No "revolutionary," "game-changing," no marketing copy.
- The forward-ready recap must sound like an internal conversation, not a vendor summary. Strip rep language entirely; use their terminology and their priorities.
- No numbers beyond the 8 hours weekly. No timeline claims, no ROI math, no feature counts.
- Their biggest aha is the time waste — not the dashboard polish, not the roadmap. Keep it there.

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

**Status:** OK | **Time:** 7180ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2927 (read=0, write=0) | **Out:** 542 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a prospect — they surfaced a real forecast accuracy problem and signaled strong interest in a pilot. I need you to be my post-meeting strategist and produce two assets: a follow-up email I'll send to James, and a forward-ready recap he can paste directly into a message to his internal stakeholders without editing a word.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the forecast accuracy gap they shared on screen — that's the aha that earned attention and must anchor the message
   - Reference one specific moment from the call (they showed the problem; they nodded; they named April) — this grounds the email in what actually happened, not a generic replay
   - Close with one concrete next step tied to their timeline (pilot in April)
   - Tone: direct, no fluff openers ("Great chatting today"), no feature-benefit lists, no marketing copy, no "per our conversation"

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholders)**
   - Five to seven bullets, one sentence each
   - Written entirely in their voice — they could have authored this; no rep language, no vendor branding, no Velara references
   - Order: their stated problem → what they observed in the call → how this fits their stated priority → two concrete proof points (what you shared, what they acknowledged) → proposed next step
   - Exclude: my name, product marketing language, dollar amounts not in your notes
   - Tone: internal memo, not a sales asset

## GROUNDING

- The forecast accuracy gap (60% vs. what they need) is the single lever — this is what earned their nod and their April timeline
- James is bought-in; the recap is ammunition for internal alignment, not a persuasion document
- "Pilot in April" is their language, not mine — anchor the next step to their stated window
- No product name, no Velara branding, no rep attribution in the recap — they are the author
- The specific call moment (screen-shared forecast, the nod, the April signal) must live in the email; the recap references the call outcome, not the call mechanics
- If I didn't supply a dollar amount, a headcount, a percentage, or a specific date in my notes, it doesn't appear in either asset

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

**Status:** OK | **Time:** 7622ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2923 (read=0, write=0) | **Out:** 551 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-minute call with the CEO, who's already mentally selling internally — he wants to forward something to his CFO. Be my post-meeting strategist and produce two assets: a follow-up email I send him today that anchors to the biggest insight from our call (they lost a deal last quarter because deal risk wasn't surfaced in time), and a forward-ready recap he can send to his CFO without editing — something that reads like it came from him, not from me.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Opens with the deal-risk miss from last quarter — not pleasantries or features, but the concrete problem they named
   - One specific moment from the call (e.g., his frustration with the CRM, his framing of what went wrong, his comment about the CFO)
   - Single next step, concrete and immediate
   - Tone: peer-level, grounded in what we discussed, no marketing language

2. **Forward-Ready Recap (Prospect → CFO)**
   - 5–7 bullets, one sentence each, ordered as: their problem (in their words) → what he observed in our conversation → how Velara Revenue OS fits his stated priority → two proof points (either from the call or from standard use-case patterns in similar orgs) → proposed next step
   - Written entirely in his voice — no rep language, no vendor copy, no Velara branding or jargon
   - No dollar amounts, no rep name, no "per our conversation"
   - Scannable and credible enough for a C-suite forward

## GROUNDING

- The CEO's pain is concrete: a lost deal and CRM blindness. Anchor everything there — not to features, not to "peace of mind."
- He flagged the 14-day implementation as a win. That's table stakes for the recap; lean on speed and no friction.
- He's already warm and already selling internally. Don't oversell or hedge. Confidence without pushiness.
- The CFO is the internal audience. Skip product marketing; land on business impact — deal visibility, risk early-warning, rep accountability.
- When you reference "proof points," draw from standard revenue-ops patterns (CRM decay, blind spots at close, forecast misses) — not from invented metrics or differentiator-derived numbers.

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

**Status:** OK | **Time:** 7402ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2887 (read=0, write=0) | **Out:** 569 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed genuine interest — they liked what they saw in the demo. Be my post-meeting strategist and produce two assets: a follow-up email from me to them that anchors to their real reaction and moves us forward with one concrete next step, and a forward-ready recap they can send to their internal decision-maker without touching a word — written entirely in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the single biggest aha or pain they surfaced on the call — anchor to a specific moment from my notes, not a generic pleasantry
   - Keep it 3–4 short paragraphs; one clear next step in the close
   - Tone: conversational, peer-to-peer; avoid feature lists, marketing language, and "per our conversation" phrasing

2. **Forward-Ready Recap (Prospect → Their Internal Decision-Maker)**
   - 5–7 bullets, one sentence each — written so the prospect authored it
   - Flow: their problem in their own words → what they observed in the demo → how it fits their stated priority → two concrete proof points → proposed next step
   - Strip all rep language, product marketing copy, vendor branding, my name, and dollar figures not sourced from my inputs
   - These bullets are for internal circulation; they should sound like peer-to-peer operational insight, not a sales summary

## GROUNDING

- The "single biggest aha or pain" is what I flagged in my inputs: they liked it. Ground Asset 1 in that genuine reaction — not in what I think they *should* care about
- Operational users care about workflow friction, not enterprise roadmaps. Both assets should stay concrete and tactical
- "Mildly interested" means they saw something worth exploring, not a strong signal yet. Don't oversell; let curiosity drive the next step
- The forward-ready recap is *their* memo to *their* stakeholder. No Velara branding, no "Velara Revenue OS" — reference it by problem it solves or capability observed (e.g., "real-time pipeline visibility," "automated deal tracking")
- Anchor the two proof points to what they actually saw or heard — don't invent validation they didn't express
- My notes are thin. If they're too thin to anchor a specific call moment, omit the reference rather than fabricate a detail

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

**Status:** OK | **Time:** 8751ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2938 (read=0, write=0) | **Out:** 666 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James, a VP/Director who's skeptical and pushed back hard on accuracy claims — he wants peer references, not vendor metrics. I need two assets: a follow-up email from me that anchors to the single biggest thing he surfaced (his distrust of public claims and need for peer validation), and a forward-ready recap he can send internally without editing. Both should feel like a natural next step, not a sales close.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the core tension James surfaced: skepticism of vendor claims and the legitimate need for peer validation. Ground it in a specific moment from the call (note: James took notes the whole time; he's serious about this).
   - One short paragraph on what James observed during the call that matters to his decision — pick one concrete moment from my notes that proves we heard him.
   - Close with one concrete next step: connecting him with a peer reference who can speak to the accuracy question directly. Make it easy to say yes — no friction, no pitch embedded in the ask.
   - Tone: direct, respectful of his skepticism, no pleasantries or feature lists.

2. **Forward-Ready Recap (Prospect → Internal Decision-Maker)**
   - Five to seven bullets, one sentence each, scannable.
   - Sentence 1: His stated problem in his own language — the reason he took this call.
   - Sentence 2: What he observed or heard on the call that stuck with him.
   - Sentence 3: How Velara Revenue OS fits his stated priority (anchor to what he cares about, not what we sell).
   - Sentences 4–5: Two concrete proof points — peer validation and one operational reality from the call (e.g., what he noted, what he questioned, what resonated).
   - Sentence 6: Proposed next step — simple, no vendor branding, no dollar amounts, no rep name.
   - Tone: internal memo; James wrote this for his team. No "Velara says" or marketing copy.

## GROUNDING

- James's single biggest lever is peer credibility. Everything hinges on connecting him with a reference he can trust — not a case study, not a webinar, a real peer.
- He took notes throughout the call. He's not dismissing us; he's building a case. Respect that posture.
- Do not repeat vendor claims (forecast accuracy, speed to live, etc.) in either asset. He already heard them and rejected them as marketing. Let the peer reference carry that weight.
- The forward-ready recap must read like an internal memo James wrote for his team — no product name prominence, no "Velara says," no dollar figures, no rep attribution.
- Do not invent details about the call, peer references, or next steps. Anchor everything to my notes above.

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

**Status:** OK | **Time:** 8626ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3054 (read=0, write=0) | **Out:** 636 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen. I just walked a department manager through an on-site demo of the Northwind XR-Series Combi Oven — he's bought-in and ready to move. I need you to produce two assets: a follow-up email from me that anchors to the single biggest insight from our call, and a forward-ready recap he can send to his internal decision-maker without editing. Both must feel like natural next-steps, not sales collateral.

## STRUCTURE

1. **FOLLOW-UP EMAIL (Rep → Prospect)**
   - Open with the specific bottleneck he named: morning prep scattered across the kitchen because the proofer lives elsewhere
   - Reference one concrete moment from the demo — the back-to-back cook sequence (salmon, short rib, proofed bread) or his comment about line cooks running the unit without supervision
   - Include the energy reading as proof the unit delivers
   - Close with one clear next step (site survey, proposal review, timeline conversation — your choice based on natural momentum)

2. **FORWARD-READY RECAP (Prospect → Internal Decision-Maker)**
   - Written in first person (his voice), scannable bullets, one sentence each
   - **Line 1:** The bottleneck in his words — morning prep workload spread across stations
   - **Line 2:** What he observed during the demo that proved the XR-Series solves it (one-touch operation, collapsing multiple pieces into one footprint)
   - **Line 3:** How this ties to his stated priority (e.g., faster throughput, freeing up floor space, reducing prep-line friction)
   - **Line 4–5:** Two proof points — line-staff trainability and the energy-draw observation from the meter
   - **Line 6:** The proposed next step, written as a decision point (not a vendor request)

## GROUNDING

- Anchor everything to the demo moments I witnessed: the three-course cook sequence, the energy meter reading, his explicit comment about line-cook capability. These are the only facts you have.
- The energy reading was 28% below his current Rational — use "significantly outperformed" or similar language, not a percentage or "30%."
- Department managers care about line-staff adoption and operational simplicity — lean there, not features.
- The recap must read as though he authored it; strip rep language, product names beyond "combi oven," and any vendor positioning.
- No dollar amounts, warranty lengths, or comparative timelines in the recap unless I provided them in my inputs.
- Avoid pleasantry openers ("Great to chat," "Thanks for your time") in either email.
- The email is me to him; the recap is him to his boss — two distinct voices, two distinct purposes.

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

**Status:** OK | **Time:** 9205ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3023 (read=0, write=0) | **Out:** 706 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen (VP / Director level) who surfaced service coverage in secondary-city locations as her real concern, though she spent most of the call comparing specs and energy models against Convotherm. She's mildly interested but not yet sold on moving forward. I need you to act as my post-meeting strategist and produce two assets: a follow-up email I send to Karen that leads with the service concern she actually cares about (not the features we discussed), and a forward-ready recap she can send to her internal stakeholders without editing — one that frames the opportunity in her words, not mine.

## STRUCTURE

1. **Follow-Up Email (rep → Karen)**
   - Open with acknowledgment of her service-coverage concern — the real issue underneath the spec comparison — grounded in something specific she said on the call about secondary-city locations
   - Reference one concrete moment from the call that illustrates why this matters to her operation
   - Anchor to our same-day, nationwide on-site service capability as the differentiator that removes that risk
   - Close with one clear next step (e.g., a specific call or materials review); no vague "let's stay in touch"
   - Tone: direct and prospect-focused; avoid marketing copy, pleasantry openers, or "per our conversation" framing

2. **Forward-Ready Recap (prospect → her internal decision-makers)**
   - Bullet 1: The operational problem in her own words (service reliability / coverage gap in secondary markets)
   - Bullet 2: What she observed or learned on the call that connects to that problem
   - Bullet 3: How this maps to her stated buying priority (e.g., reducing equipment risk, ensuring uptime)
   - Bullets 4–5: Two concrete proof points — one on service (no factory-tech bottleneck), one on operational fit (e.g., equipment consolidation, speed of staff adoption). No marketing claims; anchor to what we discussed or what is broadly known
   - Bullet 6: Proposed next step in plain language
   - Tone: as if Karen authored it; no rep name, no product branding, no dollar figures, no vendor voice

## GROUNDING

- Service network depth is the lever; don't bury it or treat it as secondary to energy savings
- Karen defaulted to spec-line comparison because equipment cost feels safer to discuss than operational risk — your recap surfaces the real concern so her stakeholders see it too
- One specific call moment (her question about secondary-city response times, or her worry about uptime in a secondary location) must anchor the follow-up email; if my notes don't specify which question triggered the concern, use the general fact that she asked twice about service response
- Avoid: feature stacking, energy percentages, cost comparisons, "industry-leading," vendor jargon, her rep's name in the forward-ready recap
- Mildly interested means she's not yet convinced the risk is solved — your assets must convince her stakeholders that it is

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

**Status:** OK | **Time:** 6583ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3026 (read=0, write=0) | **Out:** 509 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory who just finished a strategy call with a CEO about the Aldermark 12-Week Operations Reset. He's ready to take this to his board next month and asked for a one-pager for his pre-read. I'm already winning internally — my job now is to make him look sharp when he presents to his team and give him the artifacts he needs to move fast. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that anchors to the aha we surfaced on the call, and a forward-ready recap he can send to his internal stakeholders without touching a word.

## STRUCTURE

1. **Follow-Up Email (Rep → CEO)**
   - Open with the single biggest aha: legacy SOPs are the margin leak, not procurement — anchor to a moment from the call where he made this connection
   - Reference one specific call moment that made this real for him
   - Close with one concrete next step tied to his board timeline
   - Tone: direct, no pleasantries or feature-benefit runs; treat the insight as the substance

2. **Forward-Ready Recap (CEO → Internal Stakeholders)**
   - Five to seven bullets, one sentence each, written in his voice — not vendor language
   - Flow: the margin problem as he named it → what he observed on our call → how this maps to his stated priority → two concrete proof points from the engagement → the proposed next step
   - No rep branding, no product name, no dollar amounts outside your inputs
   - Make it boardroom-ready — something he wrote, not something we wrote

## GROUNDING

- Anchor everything to your call notes: the legacy SOPs insight, the board timeline, any specific moment or phrase from his language
- The CEO is already selling internally — your job is to sharpen his case and remove friction, not re-convince him
- For the recap: write as if the CEO observed this himself on the call; never write "the consultant said" or "Aldermark found"
- Avoid: "great conversation," "per our discussion," marketing copy, feature lists, consultant jargon
- The one-pager he requested is the forward-ready recap — that's what goes to his board pre-read

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

**Status:** OK | **Time:** 9163ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3016 (read=0, write=0) | **Out:** 723 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just called Anna, a VP/Director at an industrial fabrication company, and she surfaced a deep skepticism rooted in a prior bad consulting engagement — trust is the real blocker, not the fee structure itself. Be my post-meeting strategist and produce two assets: a follow-up email from me that reframes the conversation around the trust gap (using one concrete moment from the call), and a forward-ready recap she can send internally without editing, written entirely in her voice and framed around what she observed and what matters to her decision-makers.

## STRUCTURE

**1. FOLLOW-UP EMAIL (rep → Anna)**
Opens with the specific moment from the call where she signaled the trust gap — not a pleasantry or summary. The tone is direct and grounded; you're acknowledging the real objection, not glossing it. Reference the prior engagement she mentioned as the reason she's skeptical, and anchor to what makes our model different (senior-only delivery, working fixes shipped, not recommendations). Close with one concrete, low-friction next step — not "let's set up another call" or "let me send you case studies."

**2. FORWARD-READY RECAP (Anna → her internal decision-makers)**
Write this entirely as if Anna authored it — no vendor language, no rep name, no product marketing. Structure in order: her stated problem (margin leaks, operations bleeding cash) → what she observed in the call that was different from prior engagements (partners embed hands-on, senior-only, no junior consultants or slide decks) → how this maps to her priority (restoring trust + getting working fixes, not recommendations) → two concrete proof points (the success-aligned fee structure that ties our upside to her margin recovery; the 12-week timeframe with delivered operational changes) → proposed next step. Use no dollar amounts or other numbers beyond what's in my inputs.

## GROUNDING

- Anna's core objection is trust, not fee. The prior engagement burned her — she's heard "we're different" before. Anchor everything to the specific ways our model eliminates the consultant-as-overhead trap: we embed, we're senior-only, we ship working fixes, not decks.
- The single biggest aha was that trust gap — that's the thread. The email opens there; the recap reinforces it implicitly through her own language.
- Don't name the product, don't use Aldermark branding in the recap. Anna is the narrator; her decision-makers don't need to know it's called the "12-Week Operations Reset." They need to know what happens: two senior partners embed, they diagnose the three biggest cash leaks, they ship operational fixes.
- The recap should sound like a peer internal note, not a vendor summary. Assume her decision-makers are skeptical too — she's not selling them on Aldermark, she's selling them on the model and the specific thing she heard that made it feel different.
- Avoid: "per our conversation," "as discussed," case studies (don't fabricate them or reference them by name/industry), feature lists, "we believe," "our approach," pleasantries.

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

