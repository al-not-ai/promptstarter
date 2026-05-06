# follow-up-forward — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 30,823 in / 5,739 out  
**Engine cost (this tool):** $0.0476  

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

**Status:** OK | **Time:** 7687ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3365 | **Out:** 579 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect who runs ops and is skeptical but surfaced a real pain — their team burns 8 hours a week on manual CRM updates. Be my post-meeting strategist and produce two assets: a follow-up email I'll send to the prospect that anchors to their biggest aha and lands one concrete next step, and a forward-ready recap they can send internally to their decision-maker without editing a word.

## STRUCTURE

1. **Follow-up Email (Rep → Prospect)**
   - Opens with their manual-update burden as the entry point — this is the pain that matters to them right now, not a demo recap
   - References one specific moment from the call (Sarah's HubSpot integration question) that signals we understand their setup
   - Closes with one concrete, frictionless next step — no "let's sync again" vagueness
   - Tone: direct, peer-level, no sales-speak or pleasantries

2. **Forward-Ready Recap (Prospect → Their Stakeholder)**
   - Authored in the prospect's voice — reads like an ops leader summarizing a vendor call, not like vendor copy
   - Structure: problem they face → what they learned on the call → how it maps to their priority → two concrete proof points from the demo or conversation → one proposed next step
   - One sentence per bullet; five to seven bullets total
   - Exclude: my name, product marketing language, any dollar amounts, Velara branding beyond the product name where natural
   - This is a document they could hand to their CFO or VP without it reading like a sales pitch

## GROUNDING

- Their pain is operational (8 hours/week manual work), not strategic — keep the language concrete and time-focused, not visionary
- Skepticism is the baseline; earn credit by staying specific to *their* setup (HubSpot, ops team workload) and avoiding overstatement
- The aha isn't the dashboard — it's the elimination of manual CRM toil. Anchor both assets to that lever
- HubSpot is their platform; native sync is relevant context but don't oversell it as a feature
- The recap asset must read as *their* summary of the call, not a handoff from me — no "we discussed," no "the vendor showed us," no vendor-first framing
- Avoid: marketing adjectives (powerful, transformative, game-changing), platitudes (excited to explore, looking forward to the next step), generic closes

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

**Status:** OK | **Time:** 8956ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3385 | **Out:** 686 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a discovery call with a prospect (James, VP/Director level) who surfaced a forecast accuracy problem — their pipeline data is stale by the time it reaches the board — and wants to pilot in April. He's bought-in and engaged. Be my post-meeting strategist and produce two assets: a follow-up email from me to James that opens with the forecast accuracy pain, anchors to a specific moment from the call, and closes with a concrete next step; and a forward-ready recap James can send to his internal decision-maker without editing, written in his voice, that walks through the problem, what he observed, the fit, proof points, and the proposed pilot.

## STRUCTURE

1. **Follow-Up Email (Rep to James)**
   - Open with the forecast accuracy problem as stated by James — the real sting, not pleasantry.
   - Reference one specific moment from the call (his screen share of Q2 forecast, his nods during discovery, his interest in April pilot).
   - One concrete next step — no vague "let's stay in touch" or "I'll send resources."
   - Tone: Direct, respectful, no marketing language or feature lists. Close with signoff (name, title, company).

2. **Forward-Ready Recap (James → His Decision-Maker)**
   - Five to seven bullets, one sentence each, in this order: problem statement (James's words, not vendor framing) → what he observed during the call → fit to his stated priority (April pilot window, forecast accuracy as the lever) → two concrete proof points (real-time pipeline capture eliminates stale data, forecast accuracy delivered in 14 days with no implementation required) → proposed next step (pilot scope, timeline).
   - Written entirely in James's voice — no rep presence, no Velara branding, no percentages or dollar figures unless I supplied them. He should be able to copy-paste this and his boss has no reason to ask "who wrote this?"
   - Scannable structure — bullets, no paragraph prose.

## GROUNDING

- The forecast accuracy problem (60% baseline, stale pipeline data by board time) is the single spine of both assets — anchor both to it.
- James is bought-in and nodding; he's not the skeptic here. Email and recap both assume forward momentum, not objection-handling.
- Avoid: "per our conversation," "as discussed," "great chatting with you," feature-benefit lists, Velara marketing copy, the word "solution," rep name or company branding in the recap, assumed timelines or scopes not in my inputs (April pilot is confirmed; no other dates assumed).
- Specific call moments anchor credibility: use the screen share and his engagement signals if they sharpen the email, but don't invent call details I didn't give you.
- The recap is James's internal brief, not my sales artifact — it should read like he's briefing his boss on what he learned and why the April pilot makes sense.

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

**Status:** OK | **Time:** 7515ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3381 | **Out:** 592 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a 30-minute call with the CEO who's already primed to sell internally — he wants to send something to his CFO about what we discussed. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that anchors to the biggest aha from our call, and a forward-ready recap he can send to his CFO without touching a word — both positioned to keep momentum moving toward the next step.

## STRUCTURE

1. **Follow-Up Email (Rep → CEO)**
   - Opens with the deal-risk miss he surfaced (the lost deal last quarter, the CRM failure) — that's the aha that matters to him
   - References one specific moment from the call where he expressed this pain
   - One concrete next step — what happens between now and when we talk again
   - Tone: Direct, brief, no pleasantries or feature recaps
   - Avoid: "Great chatting," "per our conversation," marketing copy, feature-benefit lists

2. **Forward-Ready Recap (CEO → CFO)**
   - Five to seven bullets, one sentence each
   - Written in the CEO's voice — a peer flagging what he heard, not a vendor pitch
   - Sequence: His problem (deal risk blindness) → what he observed in our call → how it maps to his stated priority → two concrete proof points → proposed next step
   - Anchor to the 14-day implementation story — he loves this, it's his leverage with the CFO
   - Tone: Business-to-business peer language; no "Velara," no "Revenue OS," no dollar amounts beyond what he already knows
   - Avoid: Rep branding, product marketing copy, my name, numbers he didn't mention

## GROUNDING

- His pain is specific and recent: a lost deal traced to rep-level deal-risk blindness in the CRM. This is the filter for every sentence.
- The 14-day speed is a credibility anchor — he called it out for a reason. It's his answer to the CFO's "Can we actually do this?" question.
- He's already selling internally. The CFO is the real audience here — the email preps him to land the recap. Don't write for the CEO; write for the CFO through him.
- The CEO is C-Suite and impatient. No warm-up, no recap of features. Lead with the wound and the fix.
- "Forward-ready" means he reads it once and sends it. If a bullet needs editing, it's not ready.

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

**Status:** OK | **Time:** 7517ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3345 | **Out:** 568 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed mildly interested energy. Be my post-meeting strategist and produce two assets: a follow-up email I send to them anchored to what genuinely resonated in our demo, and a forward-ready recap they can drop into an internal note to their decision-maker — written entirely in their voice, not mine, so they'd feel comfortable sending it as-is.

## STRUCTURE

1. FOLLOW-UP EMAIL (rep → prospect)
   - Opens with the single biggest aha or pain they surfaced in the call — concrete, not generic gratitude
   - References one specific moment from the demo or conversation that landed
   - Closes with one clear next step (not "let's chat again" or "I'll send something")
   - Tone: direct peer, not salesy; no feature-benefit inventory, no "per our conversation"

2. FORWARD-READY RECAP (prospect → their stakeholders)
   - Five to seven bullets, one sentence each — structured so the prospect authored it
   - Order: problem as they stated it → what they observed in the demo → how it maps to their priority → two concrete proof points from the call → one proposed next step
   - Voice: operator, not vendor — no rep name, no Velara branding, no dollar amounts unless I provided them in my inputs
   - Avoids: marketing copy, jargon, anything that reads like sales collateral

## GROUNDING

- Their biggest aha is "liked it" — stay concrete to what specifically moved them in the demo (the auto-capture, the forecast confidence, the speed to live, the in-call coaching). If my notes don't isolate which moment clicked, anchor the email to the feature most relevant to their operational role and flag the ambiguity.
- They're mildly interested, not hot — don't oversell the next step or assume urgency. Make it low-friction and easy to say yes to.
- The forward-ready recap must sound like them talking to their boss, not me pitching. No "Velara Revenue OS" in the bullets; refer to capability (pipeline clarity, real-time signals, live deployment speed) in their language.
- Anchor to their stated priority. If my notes don't name one explicitly, ask me for it — better to ask than guess their lever.
- No unsourced numbers in the recap. If dollar figures or percentages would strengthen the proof points, ask me for them.

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

**Status:** OK | **Time:** 8415ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3396 | **Out:** 628 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP / Director level) who pushed back hard on my accuracy claims and won't move without peer references. I'm skeptical about where we stand. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me that anchors to his core concern (peer validation, not vendor claims) and a forward-ready recap he can send his decision-maker — written in his voice, not mine — that positions what he heard as a business problem and next step without sounding like a sales recap.

## STRUCTURE

1. **Follow-Up Email (rep → James)**
   - Opens with acknowledgment of his core skepticism (vendor claims aren't enough; peer references matter)
   - References one specific moment from the call where he pushed back or took notes
   - One concrete next step: connecting him with a peer reference — not a "let's schedule" placeholder
   - Tone: respectful of his rigor, not defensive about the pushback

2. **Forward-Ready Recap (James → his decision-maker)**
   - Five to seven bullets, each one sentence — scannable
   - Order: problem as James stated it → what he observed in the call → how it connects to his stated priority → two concrete proof points (anchored only to what he heard, not to my claims) → proposed next step
   - Voice: James could have written this; no vendor language, no product name, no rep branding
   - Exclude: my name, product marketing copy, any dollar amounts

## GROUNDING

- James is skeptical and rigorous — he *took notes*. Treat that as a signal he's engaged, not dismissive. The recap should feel like a working document, not a close attempt.
- His core objection is about *trust in the source*, not the capability itself. Peer validation is the rail; don't try to out-argue the skepticism.
- The follow-up email must feel like I'm listening to his concern, not circling back with more of the same metrics. Specificity about *which* peer reference and *how* we'll connect him matters more than reassurance.
- The forward-ready recap is his internal brief. It should be credible enough that his decision-maker sees him as thoughtful, not as someone who got pitched. Anchor bullets to what he *observed or heard*, not to my claims.
- Avoid vendor-speak in the recap: no "Velara Revenue OS," no "forecast accuracy guarantees," no "real-time pipeline intelligence." Use his language: pipeline visibility, data trust, decision confidence, whatever mapped to his stated priority.
- If the recap needs a specific customer name or reference detail to feel concrete, ask me for it — don't fabricate.

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

**Status:** OK | **Time:** 8402ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3512 | **Out:** 667 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Northwind Commercial Kitchen. I just closed a kitchen demo with a prospect who's bought-in on the Northwind XR-Series Combi Oven — specifically on the bottleneck it solves in their morning prep workflow. I need you to produce two assets: a follow-up email from me to the prospect that anchors to the biggest aha they surfaced during the call, and a forward-ready recap they can paste into an internal message to their decision-maker without editing. Both must feel authored by them (or in my case, by a peer who listened), not by a vendor.

## STRUCTURE

1. **FOLLOW-UP EMAIL** (rep → prospect)
   - Opens with the single biggest aha: the proofer bottleneck and how the XR-Series collapses prep into one station
   - References one concrete call moment (chef Diego's reaction to the one-touch programmability, or the back-to-back cooking demo, or the energy meter reading — pick the moment that felt like the turn)
   - Closes with one concrete next step (no vague "let's sync"; something they can act on)
   - Tone: peer-to-peer, no pleasantries or feature lists

2. **FORWARD-READY RECAP** (prospect → their decision-maker)
   - 5–7 bullets, one sentence each, in this order: their stated problem → what they observed during the demo → how it maps to their priority → two proof points (concrete moments or data from the call) → one proposed next step
   - Written as if the prospect authored it — no rep name, no "Northwind" branding in the bullets, no marketing language
   - Scannable and neutral in tone (neither oversold nor hesitant)

## GROUNDING

- Anchor both assets to the call notes I gave you — the demo flow, Chef Diego's reaction, the energy meter reading (28% below their Rational), the proofer-bottleneck insight. These are your only sources of specificity.
- The follow-up email is from me, the rep, to the prospect — so it can name the product and reference the demo. The recap is from the prospect outbound — so it should avoid vendor language and let the proof points (what they saw, what they measured) speak.
- Avoid any energy claim, efficiency metric, or capability detail not in my call notes or the demo observations. Do not invent ROI, payback, or cost savings not explicitly mentioned.
- The mood coming out is "bought-in" — so the prospect is already leaning yes. The follow-up email should feel like momentum (not a pitch), and the recap should sound like an internal champion building a case (not uncertain).
- For the recap: if a decision-maker would need context that isn't in my notes, the prospect can fill that gap themselves when they send it. Your job is to make the bullets clear and ready, not to complete their internal story.

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

**Status:** OK | **Time:** 7440ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3481 | **Out:** 612 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen, a VP/Director who's mildly interested but circling back to service coverage in secondary markets as her real concern. I need you to produce two assets: a follow-up email from me to her that opens with the service-network angle (not specs), anchors to a specific moment from my call notes, and lands one concrete next step; and a forward-ready recap she can paste into an internal message to her decision-maker—written in her voice, no vendor language, structured to show the problem, what she observed, the fit, proof points, and the path forward.

## STRUCTURE

1. **Follow-up Email (rep to Karen)**
   - Open with the service-network concern she surfaced, not equipment specs or pleasantries
   - Reference the specific moment from my notes: her two questions about tertiary-market response times
   - Keep it three to four short paragraphs; close with one concrete next step (no vague "let's sync"—name the step)
   - Tone: direct, respectful of her real priority, not salesy

2. **Forward-Ready Recap (Karen's internal brief)**
   - Five to seven bullets, one sentence each, scannable and in her voice—she could have written this
   - Order: the problem as they stated it → what they observed on the call → how the Northwind XR-Series maps to their stated priority → two concrete proof points → proposed next step
   - Exclude: my name, product marketing language, dollar amounts unless I supplied them in my inputs
   - Tone: peer-to-peer, factual, no vendor branding

## GROUNDING

- The call revealed service coverage is the unspoken deal-maker, not price or feature parity. Anchor both assets there.
- She compared line-by-line to Convotherm; don't re-litigate specs in the follow-up. She already knows the numbers.
- Karen's mood is mildly interested—she's still evaluating. Position both assets to move her from "comparing quotes" to "evaluating service risk."
- The recap should read as if she's arming her internal stakeholder with the real reason the Northwind XR-Series matters to *their* operation, not to us.
- Use specific call-moment details (her two questions about tertiary markets) to anchor credibility; avoid generic "per our conversation" language.
- No dollar figures in the recap unless I explicitly stated them in my inputs.
- For the email: one concrete next step means a named action with a frame, not "let me know your thoughts."

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

**Status:** OK | **Time:** 9429ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3484 | **Out:** 714 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just wrapped a 60-minute strategy call with a CEO who's already selling internally — he wants to take this to his board next month and asked for a one-pager for the pre-read. I need you to be my post-meeting strategist and produce two assets: a follow-up email I'll send to him, and a forward-ready recap he can drop into his board materials without editing. Both anchor to the single biggest aha from the call — margin compression is rooted in legacy SOPs his team lacks the political capital to kill — and assume he's already convinced and now needs air cover for internal stakeholders.

## STRUCTURE

1. **Follow-Up Email (rep → CEO)**
   - Opens with the margin-compression insight (legacy SOP lock, not procurement) — this is the headline, not a pleasantry
   - Anchors to one specific moment from the call that made this real for him
   - One concrete next step: the one-pager for his board pre-read, timeline for delivery, and what it covers
   - Closing tone: you've got this internally; we're here to unblock the political friction

2. **Forward-Ready Recap (CEO → Board)**
   - Five to seven bullets, one sentence each; written in his voice, not vendor voice
   - Order: his margin-compression problem (in his words) → what he observed on the call → fit to his board priorities → two proof points (our senior-only delivery + fixes by week 12, not recommendations) → proposed next step (engagement timeline and board discussion)
   - Exclude: rep name, Aldermark branding, any dollar amounts, feature-benefit sales language
   - Tone: board-ready, crisp, no jargon — what a CEO would naturally write after a diagnostic call

## GROUNDING

- **The insight is his unlock:** He's already bought the *why* (legacy SOPs are strangling margin). The recap is his air cover for the board — it removes the "why are we hiring consultants?" objection by making the political/structural problem visible and the fix concrete.
- **Anchor to senior-only delivery and working fixes:** These two differentiators are his board's only real concerns — "Will real operators actually show up, or am I paying for slide decks?" and "Will anything actually change by month 12?" Both questions land hard in board rooms. Make both visible and non-negotiable in the recap.
- **His board is skeptical of consultants, not of fixing margin:** Don't sell the Reset. Sell the thing that makes the Reset necessary — the structural problem nobody inside has the standing to fix alone.
- **One-pager specificity:** He wants it for the pre-read. This means 1 page max, dense, board-tempo, scannable. The recap bullets are the payload; shape them for a one-pager format (he'll likely copy/paste them into his own template).
- **Avoid:** "Per our conversation," case studies, ROI math, competitor comparisons, anything that sounds like vendor cheerleading. He's already past that.

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

**Status:** OK | **Time:** 9159ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3474 | **Out:** 693 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just finished a call with a prospect (Anna, VP/Director level) who surfaced a deep trust gap rooted in a prior bad consulting experience — she's skeptical of claims that we're different and wants proof in her specific industry (industrial fabrication). I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to Anna that leads with the trust issue (not pleasantries) and anchors to a moment from my call notes, and a forward-ready recap she can send internally to her decision-maker without editing — written entirely in her voice, not mine, that reframes her skepticism as a smart buying posture and positions next steps as her idea.

## STRUCTURE

1. **Follow-up Email (Rep → Prospect)**
   - Open with acknowledgment of the trust gap — not "Great call." Anchor to her specific concern about consultant claims and prior experience.
   - One concrete reference to a moment from my call notes (her challenge on the success-aligned fee or her mention of the prior engagement).
   - Single next step that directly addresses her ask (case studies in industrial fabrication, intro call with a past client, etc.) — concrete, not vague.
   - Close with clarity on what happens next and when.

2. **Forward-Ready Recap (Prospect → Their Internal Stakeholder)**
   - Written entirely in Anna's voice — as if she authored it; no rep language, no "Aldermark" branding, no vendor jargon.
   - Five to seven bullets, one sentence each, in this order:
     - Problem as she stated it
     - What she observed in our conversation (her words, her framing)
     - How this fits her stated priority or business driver
     - Two concrete proof points (specifics from the call, her data, industry context — NOT rep claims)
     - Proposed next step (her next move, not mine)
   - Avoid: my name, product name, dollar amounts she didn't mention, marketing language.

## GROUNDING

- The trust gap is the blocker, not the fee. Treat her skepticism as intelligent — she's been burned before. Lead there, not around it.
- Industrial fabrication context: anchor case-study language and proof points to her sector; don't generic-ize.
- Success-aligned fee structure is a differentiator only if it addresses her specific fear (prior consultant took money and disappeared). Position it as skin-in-the-game, not a discount.
- The "we turn down work" and "senior-only delivery" differentiators are trust signals here — use them only if they naturally address her prior experience or fit the recap narrative.
- In the recap, Anna is writing to her internal stakeholder; assume that person is a peer or boss, not yet convinced. The recap should read as her doing due diligence, not selling.
- No unsourced claims about what other consultants do or don't do. Stick to what happened in our call.

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

