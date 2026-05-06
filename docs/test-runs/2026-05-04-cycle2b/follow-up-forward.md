# follow-up-forward — stress test results

**Run:** 2026-05-04-cycle2b  
**Cases:** 9 (9 OK)  
**Tokens:** 27,785 in / 5,852 out  
**Engine cost (this tool):** $0.0456  

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

**Status:** OK | **Time:** 7932ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3025 | **Out:** 601 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with a prospect whose ops team burns 8 hours a week on manual pipeline updates, and they're skeptical but engaged. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens with their ops pain, anchors to a specific call moment, and lands one clean next step — and a forward-ready recap they can drop into an email to their decision-maker without editing a word, written in their voice, not mine.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Opens with the ops burden they surfaced — 8 hours a week on manual updates — as the core problem worth solving
   - References one specific moment from the call: their question about HubSpot integration or the dashboard interaction
   - One paragraph on how Velara Revenue OS eliminates that manual work (auto-capture from email and calendar, native HubSpot sync — no middleware, no implementation overhead)
   - Closes with a single concrete next step (e.g., a brief follow-up call with their ops lead, a pilot scope, a time to reconnect)
   - Tone: direct, no fluff, respect their skepticism

2. **Forward-Ready Recap (prospect → their internal stakeholders)**
   - Five to seven bullets, one sentence each
   - Order: their pipeline update burden in their own words → what they saw in the demo → how it maps to their stated priority → two proof points (Velara eliminates manual CRM updates via auto-capture; native HubSpot bidirectional sync, live in 14 days) → proposed next step
   - Write as if the prospect authored it — no rep name, no "Velara told us," no vendor language, no dollar amounts
   - Tone: business-clear, peer-to-peer, fact-based

## GROUNDING

- Anchor the ops pain (8 hours weekly) as the throughline; it's the hook and the ROI driver
- The HubSpot integration is the unspoken objection to "another tool" — lead with native bidirectional sync and zero middleware as the answer
- Their skepticism is healthy; don't oversell. Stick to what they saw and heard on the call
- For the forward-ready recap: strip all rep energy. Imagine the prospect re-telling this to their manager — what would they actually say?
- Do not invent call moments beyond the HubSpot question and the dashboard demo walkthrough
- Do not include implementation timelines, pricing, or other specifics unless I supplied them above

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

**Status:** OK | **Time:** 7371ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3045 | **Out:** 622 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just had a discovery call with a prospect (VP / Director level) who surfaced a forecast accuracy problem — their pipeline data is stale by the time it reaches leadership, and they're missing targets as a result. They want a pilot in April and came out of the call bought-in. Be my post-meeting strategist and produce two assets: a follow-up email I send them today that anchors to the biggest aha from the call, and a forward-ready recap they can send to their internal stakeholders without touching a word.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)**
   - Open with the forecast accuracy problem they named — the stale data issue, in their words. Lead with this, not pleasantries.
   - Reference one specific moment from the call (they shared their Q2 forecast on screen; use that or another concrete detail from my notes).
   - Middle: one tight paragraph on why real-time pipeline visibility shifts forecast confidence (no feature list; tie to their pain).
   - Close with one next step — April pilot framing, grounded in what they said they wanted.
   - Avoid: "Great chatting," "per our conversation," feature-benefit lists, marketing language.

2. **FORWARD-READY RECAP (prospect → their internal stakeholders)**
   - Write as if the prospect authored it — their voice, their framing, no vendor language or rep name.
   - Five to seven bullets, one sentence each, in this order: (1) the forecast accuracy problem in their own words, (2) what they observed during the call that resonated, (3) how the solution fits their stated priority, (4) first proof point, (5) second proof point, (6) proposed next step.
   - Avoid: product name ("Velara Revenue OS"), rep branding, any dollar amounts not in my inputs, feature-speak.
   - Good looks like: "We observed that real-time pipeline sync eliminates the lag between deal activity and board reporting" — not "Velara auto-captures email and calendar."

## GROUNDING

- The call was a discovery — James was nodding and engaged. Treat the email and recap as confidence-builders, not closers.
- The core insight is stale pipeline data → forecast misses. Everything anchors here.
- Q2 pilot is their timeline. Keep the next step concrete and April-aligned.
- For the recap: the prospect is writing to their internal stakeholder, likely their peer or boss. Write for a busy decision-maker who cares about pipeline accuracy and board credibility, not product specs.
- The prospect came out bought-in. The email and recap should feel like momentum, not persuasion.

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

**Status:** OK | **Time:** 6980ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3041 | **Out:** 522 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just closed a 30-min call with a CEO who's already selling internally to his CFO — he wants to forward something that reads like his own thinking, not a vendor pitch. I'm coming out hot; he loved the speed-to-value story. Be my post-meeting strategist and give me two assets: a follow-up email from me that anchors to the deal-risk lesson from last quarter, and a prospect-authored recap he can send to his CFO without editing.

## STRUCTURE
1. **Follow-Up Email (Rep → CEO)**
   - Open with the deal-risk miss from last quarter — the aha that moved him.
   - Land one specific moment or comment from the call that proved the point.
   - Close with the concrete next step (flag what it is based on your read of the call notes).
   - Tone: peer, not vendor. No marketing language or pleasantries.

2. **Forward-Ready Recap (CEO → CFO)**
   - 5–7 bullets, one sentence each, written so the CEO could have authored it.
   - Sequence: (1) The problem they named, (2) What they observed or realized on the call, (3) How Velara Revenue OS fits their stated priority, (4–5) Two concrete proof points or differentiators relevant to them, (6) Proposed next step.
   - Anchor to the speed-to-value angle — he's already sold on that.
   - Avoid: my name, vendor branding, marketing copy, dollar amounts he didn't mention.

## GROUNDING
- The deal-risk miss is the emotional core — the CFO email lives or dies on that resonance.
- "Speed to value" and "14-day implementation" are his language; lean into those, not abstract product claims.
- C-suite to C-suite: the recap should sound like CEO-to-CFO peer talk, not a sales artifact.
- He's already selling — don't write defense or objection-handling into either asset. Write conviction.
- If the call notes don't specify the exact next step, anchor to what makes sense given the momentum (e.g., CFO intro, technical evaluation, pilot scope) — ask me if unclear.

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

**Status:** OK | **Time:** 7412ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3005 | **Out:** 641 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with an operational user who showed genuine interest in the demo. Be my post-meeting strategist and produce two assets: a follow-up email from me to the prospect that opens with their biggest takeaway and anchors to a specific moment from our call, and a forward-ready recap they can send internally to their decision-maker — written in their voice, not mine, so it reads like they authored it themselves.

## STRUCTURE

1. **Follow-Up Email (Rep → Prospect)**
   - Open with the single biggest aha or pain they surfaced during the demo — not a generic thank-you or pleasantry.
   - Reference one specific moment from the call (pull from my notes); make it concrete.
   - Close with one clear, concrete next step (not "let's sync" or open-ended).
   - 3–4 short paragraphs. Avoid feature lists, marketing language, "per our conversation" phrasing.

2. **Forward-Ready Recap (Prospect → Their Internal Decision-Maker)**
   - Write in the prospect's voice — no rep language, no vendor branding, no product names used as a selling point.
   - 5–7 bullets, one sentence each, scannable and direct.
   - Structure in this exact order: (a) their stated problem, (b) what they observed during the demo, (c) how this fits their stated priority, (d) two concrete proof points from the call, (e) your proposed next step.
   - Avoid: my name, Velara branding, dollar amounts not explicitly in my inputs, anything that reads like a pitch.

## GROUNDING

- **Anchor to my inputs.** I gave you the call notes, the aha moment, and the prospect's role and mood. Build from that — nothing fabricated.
- **Operational users care about workflow efficiency and tooling friction.** Anchor the recap to what *they* can control and improve, not executive outcomes.
- **"Mildly interested" is real but unresolved.** The follow-up should lower friction to next step — not oversell, not under-deliver on momentum.
- **The forward-ready recap is their document.** It must read like they're briefing their boss, not like I'm briefing them. Strip rep voice completely.
- **Specificity in the email comes from my call notes only.** If I didn't flag a specific moment or objection, don't invent one. Reference the demo moment generically if needed ("when we walked through the live pipeline view").
- **Flag missing inputs.** If you need more detail from my notes to make either asset land (a specific objection they raised, a named competitor they mentioned, their exact priority), ask me for it rather than guessing.

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

**Status:** OK | **Time:** 7870ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3056 | **Out:** 604 | **Cost:** $0.0049

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I just finished a call with James (VP / Director level) where he pushed back hard on my accuracy claims and made clear he only trusts peer references. Be my post-meeting strategist and produce two assets: a follow-up email from me to James that anchors to his skepticism and surfaces one specific moment from our call, and a forward-ready recap he can send internally to his decision-maker without editing—written in his voice, not mine, that reframes the conversation around what he actually cares about and gives him proof points to move forward.

## STRUCTURE

1. FOLLOW-UP EMAIL (rep → James)
   - Lede references the single biggest aha: his need for peer proof, not vendor claims
   - One specific moment from the call (e.g., a pushback he made, a question he asked, notes he took)
   - Concrete next step (customer reference, call, specific ask—your choice based on what moves him)
   - No pleasantries, no feature lists, no "per our conversation"

2. FORWARD-READY RECAP (James → his internal stakeholder)
   - 5–7 bullets, one sentence each, scannable
   - Order: his problem in his words → what he observed on our call → fit to what he said matters → two peer proof points → proposed next step
   - Written as if James authored it—his tone, his priorities, his language
   - Zero rep branding, zero product marketing language, no dollar amounts
   - No mention of my name or Velara by name; reference the category or capability instead

## GROUNDING

- James is skeptical and data-skeptical specifically—he doesn't trust vendor metrics. Anchor peer proof points to how other similar orgs validated our accuracy, not how the product works.
- He took notes the whole time and didn't commit to next steps—he's gathering intel for an internal case. The recap is his tool to build that case upward.
- One specific moment from my call notes: his pushback on "marketing math." Use that exact friction point in the email to show I heard him and am responding to his real concern, not deflecting.
- His stated priority is peer validation, not feature depth. Both assets should honor that.
- The recap should feel like his memo, not my echo. Write it in his voice—confident, internal, skeptical of vendor claims, focused on what peers are doing.
- Avoid: "Great call," "dive deeper," "synergy," "leading-edge," vendor-speak, rep name, product name (use "platform" or reference the capability), any assumed numbers or metrics I didn't provide.

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

**Status:** OK | **Time:** 7558ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3179 | **Out:** 610 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen who just demoed the Northwind XR-Series Combi Oven to a department manager. He's bought-in and needs to loop in his decision-maker. Be my post-meeting strategist and produce two assets: a follow-up email from me to him that anchors to the biggest aha (his bottlenecked morning prep), and a forward-ready recap he can send internally without editing—written in his voice, not mine.

## STRUCTURE

1. **FOLLOW-UP EMAIL (rep → prospect)**
   - Opens with the morning prep bottleneck aha — his words, not mine
   - One specific call moment (the one-touch programmability observation or the energy reading)
   - One concrete next step (timeline, what I'm sending, what happens next)
   - No "great chatting," no feature lists, no marketing tone

2. **FORWARD-READY RECAP (prospect → internal decision-maker)**
   - His problem statement (bottlenecked morning prep, equipment footprint)
   - What he observed (one-touch operation, energy performance during demo)
   - Why it fits his priority (consolidates the line, reduces handling/timing friction)
   - Two proof points (the chef's line-cook feedback + the energy meter reading from demo)
   - Proposed next step (what comes after, no pricing or rep involvement language)
   - No rep name, no "Northwind XR-Series" product name in the bullets, no dollar amounts

## GROUNDING

- **Anchor to his biggest aha:** The morning prep bottleneck — proofer distance eating time. Everything builds from that one friction point.
- **Call specifics:** The demo is real (salmon, short rib, bread). The energy reading is real (28% below their Rational during demo). The chef Diego feedback is real. Use these, not invented comparable performance.
- **Tone for recap:** Internal, peer-to-peer, no sales language. He's summarizing what he saw and heard for his boss or procurement contact. Write it like he's remembering the demo, not like a vendor is pitching.
- **Avoid:** "Per our conversation," "Northwind," "XR-Series," marketing copy, his first name in the recap, assumptions about decision timeline or approval process, any number not in my inputs (no kitchen size, no cost, no other metrics).
- **One-touch programmability angle:** Frame as practical (line cooks run it, no hovering, faster turnover) — not as a feature.
- **Energy reading:** Reference the 28% result from the live demo as proof, not as a guarantee or spec sheet claim.

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

**Status:** OK | **Time:** 10077ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3148 | **Out:** 765 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I just finished a call with Karen, a VP/Director prospect who's mildly interested but hasn't yet surfaced full confidence in our fit. Be my post-meeting strategist and produce two assets: a follow-up email I send to Karen that anchors to the service network coverage concern she surfaced (the real aha under the line), and a forward-ready recap she can drop into an internal thread to her decision-maker without editing or adding rep language. Both should feel like owned thinking, not vendor cheerleading.

## STRUCTURE
1. Follow-up email (rep to prospect).
   - Opens with the service coverage insight — the concern she surfaced twice, not the features we walked. One sentence, landed as a realization.
   - References one specific moment from the call (the secondary-city question, the Convotherm comparison, the spec walk — pick the one that threads to her real risk).
   - Body acknowledges her priority and restates what we learned about her operation.
   - Closes with one concrete next step (e.g., connecting her to a reference in a similar geography, a deeper dive into our response-time footprint, a timeline for her decision cycle). No vague "let's sync."
   - Tone: peer, not sales. No "per our conversation," no feature recap, no marketing language.

2. Forward-ready recap (prospect to their decision-maker).
   - 5–7 bullets, one sentence each. Scannable, written as if Karen authored it.
   - Bullet 1: Their problem in their words (not our language).
   - Bullet 2: What they observed or learned on the call (a realization, not a pitch).
   - Bullet 3: Why it matters to their stated priority (tie to their operation, not our product).
   - Bullets 4–5: Two concrete proof points (reference calls, competitive data, operational insight — whatever we surfaced that anchored the conversation).
   - Bullet 6: Proposed next step (clear, time-bound if possible).
   - Avoid: rep's name, company name, product name used as branding, pricing, feature lists, vendor copy. Write like an internal memo, not a vendor brief.

## GROUNDING
- Service response time is her unspoken deal-risk. The Convotherm comparison was surface-level; the secondary-city coverage question is where her real doubt lives. Lead with that insight.
- She's mildly interested means she's comparing, not sold. The recap should give her air cover to advocate internally; the email should deepen her confidence in our answer to her actual fear.
- One specific call moment: Use either the service question or the Convotherm comparison — whichever is more vivid in your notes. Avoid generic references like "our discussion."
- Reference calls, case examples, or operational wins we discussed: Only cite if they came up in the call or are in your notes. Do not fabricate customer names, locations, or outcomes.
- Tone split: Email is peer-to-peer, one VP to another. Recap is internal, matter-of-fact, no vendor energy.
- No dollar amounts, no percentages, no "30%" or energy savings numbers unless you explicitly stated them in the call and they're in your notes.

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

**Status:** OK | **Time:** 6814ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3148 | **Out:** 550 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just closed a 60-minute strategy call with a CEO who wants to take this to his board next month and needs a one-pager for the pre-read. He's already selling internally. I need you to be my post-meeting strategist and produce two assets: a follow-up email from me to him that anchors to the biggest aha from the call, and a forward-ready recap he can hand to his board without editing — both sharp enough that he'll actually use them.

## STRUCTURE

1. **Follow-Up Email (rep → prospect)**
   - Open with the single biggest aha: margin compression is a legacy-SOP problem, not a procurement problem — tie directly to his words from the call
   - Land one specific moment from the call that proves the aha
   - Close with one concrete next step (the one-pager for his board pre-read)
   - Tone: sharp and direct, no pleasantries or feature lists; make him feel heard

2. **Forward-Ready Recap (prospect → board)**
   - 5–7 bullets, one sentence each, written as if the CEO authored it — no vendor voice, no Aldermark branding
   - Order: problem in his words → what he observed on the call → fit to his board priority → two concrete proof points → proposed next step
   - Avoid: my name, product marketing copy, dollar amounts
   - Make it board-ready: scannable, credible, actionable

## GROUNDING

- Anchor the aha to his exact framing: legacy SOPs blocking margin recovery, not procurement or headcount issues — this is the frame that makes the Aldermark model land with a board
- The CEO is pre-wired to move fast; both assets should reflect urgency and clarity, not over-explanation
- The forward-ready recap is his internal artifact — he owns the voice. Write it so a board member reading it thinks the CEO wrote it, not a consultant
- One-pager mention: don't produce it here, just acknowledge it as the next-step deliverable in the email close
- Board context: assume they care about margin recovery, execution risk, and speed to fix — not process or methodology
- Flag any specific call detail I didn't supply as a gap; if I haven't given you the exact moment or quote, ask me for it rather than invent

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

**Status:** OK | **Time:** 12320ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3138 | **Out:** 937 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I just got off a call with Anna, a VP/Director, who's skeptical about our model and carrying real trust damage from a prior consulting engagement that failed to deliver. Be my post-meeting strategist and produce two assets: a follow-up email from me that reframes our engagement around *working fixes, not recommendations* and directly addresses her trust gap without being defensive, and a forward-ready recap she can send to her decision-maker — written entirely in her voice and framing, no vendor language or rep branding. Her buying obstacle isn't the fee structure; it's proving we're different from the last firm that burned her.

## STRUCTURE

1. **Follow-Up Email (rep → Anna)**
   - Open with the trust issue she surfaced — prior engagement burned her, consultants all claim differentiation. Name it directly.
   - Reference one specific moment from the call where she expressed skepticism or raised the fee question (anchor to my notes).
   - Pivot to what actually separates our model: we embed senior partners only, we ship three *working* operational changes by week 12 (not slides), and the success-aligned fee structure means we only get paid when she signs off on margin recovery — our incentive is her result, full stop.
   - Close with one concrete next step (e.g., offer to walk her through a case study in industrial fabrication, or propose a brief call with one of our partners who's done similar work).

2. **Forward-Ready Recap (Anna → her internal stakeholder)**
   - **Problem statement** (one bullet): Her words — margin pressure, prior consulting miss, need to prove any new engagement will actually move the needle.
   - **What we observed** (one bullet): What she told us about the operational drag, cash leaks, or trust barrier.
   - **How it maps to her priority** (one bullet): Connect the problem to whatever outcome matters most to her (margin recovery, operational efficiency, de-risked next step).
   - **Proof point 1** (one bullet): Reference one comparable client situation — industrial or similar sector — without naming them or invoicing specifics. Keep it high-level: "firm like ours saw [type of operational fix] in [timeframe]."
   - **Proof point 2** (one bullet): Emphasize the success-aligned fee model — partner incentive is her result, she doesn't pay full fee until margin recovery is signed off.
   - **Next step** (one bullet): Propose a low-friction next action (case study review, partner conversation, etc.) — no pressure, no timeline unless she set one.

## GROUNDING

- **Anchor to her stated trust gap.** The prior engagement failure is the real objection; the fee structure is a smokescreen. Every line should implicitly answer "Why is Aldermark different?" without being defensive or over-explaining.
- **Reference the specific call moment** in the follow-up email. Specificity (her words, her skepticism) builds credibility. Generic recap language kills trust.
- **Industrial fabrication case study.** She explicitly asked for proof in her exact sector. If you have one, reference it. If not, ask me for it — don't hallucinate a case or soften it with "we've worked in similar spaces."
- **No product name or company branding in the recap.** She's selling internally; rep language will flag it as vendor copy. Write as if she authored it, using her framing and her tone.
- **No pricing or ROI math.** She didn't ask for financial models; she asked for trust. The success-aligned fee is a proof point (incentive alignment), not a pitch mechanic.
- **Avoid:** Consultant clichés ("best-in-class," "thought partners," "align on priorities"), defensive language around past engagements, feature lists, timelines or dollar figures not in my inputs, any reference to how many inquiries we turn down.
- **Her tone:** Skeptical, burned, wants proof not promises. Write like someone who's heard this before and needs to be shown, not told.

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

