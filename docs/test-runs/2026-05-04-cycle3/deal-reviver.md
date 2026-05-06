# deal-reviver — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 30,517 in / 6,863 out  
**Engine cost (this tool):** $0.0519  

---

## [V] Deal Reviver — Rachel / A Few Days quiet / New Data

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Rachel at Meridian Analytics",
    "wentCold": "She said she needed to loop in her VP of Sales before moving forward, then went quiet"
  },
  "sliderValues": {
    "silence-duration": 0,
    "revival-angle": 0
  }
}
```

**Status:** OK | **Time:** 9782ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3340 | **Out:** 787 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales — and now I have a fresh reason to reach out. Write me a three-touch revival sequence (email, LinkedIn DM, voicemail) that reads like I've talked to her before, anchors to the signal that prompted this outreach, and lands a low-friction next step without sounding desperate.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals fresh context (new data point, recent insight, product update) — not "Following Up" or "Quick Check-In"
   - Opening paragraph explicitly references the specific moment from our prior call where she mentioned looping in her VP — use her exact words or the situation as your anchor
   - If you don't have enough detail from my input to ground this reference authentically, ask me for one specific thing she raised or a concern she flagged before drafting
   - Middle section ties the revival angle (new signal, new data) to the reason the VP conversation matters now — make it clear why NOW is different from when we last spoke
   - Close with a single, frictionless ask: reply, 15-min call, or simple yes/no question
   - Avoid: "circle back," "just checking in," how long she's been quiet, any opener that could work on a stranger

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Hook must be visibly distinct from the email opener — different angle, different detail
   - Still reads as re-contact, not a cold first DM
   - No links, no attachment asks, no forwarded email energy
   - Human tone — feels like a quick aside, not a broadcast

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - Open with a specific reason for the call in the first 5 words — anchored to the revival angle or something from your prior conversation
   - Leave one question hanging for her to sit with
   - Close without an explicit callback demand
   - Avoid: "just wanted to touch base," recapping the email, generic follow-up phrasing

## GROUNDING

- **Prior conversation anchor:** She flagged needing her VP's buy-in before progressing. That's the wedge for Touch 1's opener — reference it directly so this reads as continuation, not restart.
- **Revival signal:** You're reaching out because something has shifted (new data, a relevant insight, a product capability that directly addresses the VP-alignment concern). If I haven't supplied a concrete reason for the outreach, ask me what changed or what insight prompted the re-engagement now.
- **Meridian Analytics context:** No company-specific intel is in my inputs. Anchor to the conversation Rachel and I had, not assumptions about her industry or role.
- **Velara Revenue OS angle:** The revival case should hint at why Velara matters to the VP conversation — real-time pipeline visibility, forecast accuracy, or live CRM data can all ease stakeholder alignment. Pick the angle that fits the signal I'm using to re-engage.
- **Tone guardrails:** These touches assume prior rapport. No apologies for the silence, no "I know you're busy," no scarcity language. Confidence that the signal justifies the outreach.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — Ben / 1-3 Months quiet / Product Update

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Ben at Cascade Logistics",
    "wentCold": "Integration complexity was the blocker — they weren't sure the platform would sync with their ERP"
  },
  "sliderValues": {
    "silence-duration": 2,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 7870ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3345 | **Out:** 686 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Ben at Cascade Logistics after we stalled on integration concerns. Write me a three-touch revival sequence — email, LinkedIn DM, voicemail — each touch grounded in our prior conversation about ERP sync complexity. Every piece must read as a genuine re-contact from someone who's already talked to this prospect, not a cold opener. The wedge is that we've shipped native ERP connectivity since we last spoke.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Opens by naming the specific integration blocker Ben raised (ERP sync concern) — this is the shared-history anchor, not "I wanted to follow up"
   - Paragraph 2: brief product update on ERP connectivity (what changed, why it matters to his use case)
   - Paragraph 3: low-friction close — reply, 15-min call, or simple yes/no ask
   - Avoid: "circle back," "just checking in," "it's been a while," desperation signals, generic re-engagement language

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Hook distinct from the email — don't restate the integration news
   - Still reads as a re-contact (shared context, not cold)
   - No link, no attachment ask, no forwarded email tone
   - Human voice

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds spoken aloud
   - Lead with a real, specific reason for the call in the first 5 words (anchored to the ERP sync update or the revival angle)
   - Leaves one open question for Ben to sit with — no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email, generic voicemail patterns

## GROUNDING

- Ben's blocker was ERP integration complexity — that's the wedge. The update must address it directly, not bury it.
- This is re-engagement, not a first cold touch. Ben and I have a prior conversation. Every piece assumes shared context.
- Cascade Logistics context: logistics company, ERP system is central to ops — frame the integration win in operational terms (pipeline accuracy feeding into ERP workflows, no manual syncs).
- Revival angle is product/feature update — the ERP connectivity is the news hook. Don't soften it; it's the reason to re-engage.
- If the assistant needs more specifics about what ERP platform Cascade uses or what exactly Ben said about the integration, instruct it to ask me. Don't hallucinate ERP details.
- Avoid: generic re-engagement buzzwords ("reaching out again," "following up on our conversation," "syncing"), product jargon that doesn't map to his concern, or overstating the integration scope if I haven't supplied it.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — Nina / 3+ Months Cold / Last Try Email

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Nina at Thornfield Capital",
    "wentCold": "Budget freeze was cited in January — no response since"
  },
  "sliderValues": {
    "silence-duration": 3,
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 9016ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3338 | **Out:** 778 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reviving a stalled deal with Nina at Thornfield Capital — budget constraints froze the conversation in January, and I haven't heard from her since. I need a three-touch re-engagement sequence that reads as genuine follow-up from someone who's already been in the room, not a cold restart. Each touch must land a real reason to reconnect tied to the revival angle, and the sequence should feel like a natural progression, not three identical asks.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs. Open by naming the budget freeze or the January conversation specifically — this is the wedge that proves I've talked to her before. Don't hedge with "just wanted to follow up" or generic openers.
   - Para 1: Acknowledge the budget constraint and why I'm reaching out now (what's changed or why now makes sense). Keep it brief.
   - Para 2: One concrete reason tied to her world — a pattern I've seen with forecasting accuracy or pipeline visibility issues when budgets tighten. Make it about her, not my product.
   - Para 3: Low-friction close — a reply, a 15-min call, or a simple yes/no question. Nothing heavy.
   - Avoid: "circle back," "just checking in," references to how long she's been silent, desperation language, or anything a stranger could send.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Hook must feel different from the email — not a forwarded summary. Still reads as re-contact, not a first cold DM.
   - No links, no attachment asks. Human voice.

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud. Lead with a specific reason for the call in the first 5 words — tied to the revival angle or what we discussed in January.
   - One open question the prospect can sit with; no explicit callback demand or "call me back" language.
   - Avoid: "just wanted to touch base," echoing the email, or restating the ask.

## GROUNDING

- **Prior conversation anchor:** The budget freeze in January is the only shared history I have. If I need more specific detail from that January conversation (a concern Nina raised, a metric she mentioned, a problem she was solving for), I'll ask you for it before drafting Touch 1.
- **Revival angle:** This is the "last try" — frame it as a reason to reconnect, not desperation. The tone is professional respect for her silence, not awkwardness about it.
- **Velara Revenue OS positioning:** If it fits naturally in the email body, anchor to forecast accuracy or pipeline visibility as the capability that matters when budgets tighten — not the product itself. The reason to reconnect comes first; the product is context.
- **Nina's role and company:** Thornfield Capital — assume decision-maker or budget-influencer context unless I tell you otherwise. Tailor language to capital/investment-side pressures, not generic "sales team" challenges.
- **Avoid:** Generic multi-touch templates, "circle back" energy, any opener that doesn't prove prior contact, countdown language ("it's been 3 months"), or references to her non-response.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — SPARSE — minimal cold context

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Tom",
    "wentCold": "got busy"
  },
  "sliderValues": {
    "silence-duration": 1,
    "revival-angle": 0
  }
}
```

**Status:** OK | **Time:** 12084ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3323 | **Out:** 744 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Tom went quiet on me after our initial conversation — busy season, life happens. Now I'm reviving the deal with a real reason to reach out tied to a new data signal or development. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that reads like we've already built rapport, not like I'm starting from scratch. Each touch must explicitly root itself in our prior conversation — a moment we discussed, a concern he raised — so it lands as "I've been thinking about what you told me" rather than "hoping this finds you well."

## STRUCTURE

**1. EMAIL — Touch 1 (The Wedge)**
Subject line + 3 short paragraphs. Open with a specific moment or concern from our prior call — the thing that makes Tom think "oh, he was actually listening." That's your wedge. Then pivot to the new signal or development that gives him a real reason to re-engage now (not "just following up"). Close with a single, low-friction ask: reply, 15-min call, or yes/no question. 
- If I haven't supplied enough detail about what we discussed with Tom, ask me for one specific topic or concern he raised before you draft.
- Avoid: "circle back," "just checking in," "wanted to follow up," how long he's been quiet, any tone that screams desperation or generic persistence.

**2. LINKEDIN DM — Touch 2 (The Alternative Channel)**
2–3 sentences max. Hook must be visibly different from the email opener — don't recycle the same angle. Still reads as re-contact (we know each other), not a cold DM. No link, no attachment ask. Human voice, not a forwarded email.

**3. VOICEMAIL SCRIPT — Touch 3 (If Applicable)**
20–30 seconds when spoken aloud. Lead with the real reason for the call in the first 5 words — anchor to the revival signal or something from our earlier chat. Leave one open question for Tom to sit with. Don't demand a callback or restate the email.

## GROUNDING

- Tom went quiet 2–4 weeks ago — busy season. This isn't a "checking in" revival; it's rooted in a new data signal or development that happened *after* our conversation (something in his world, the market, or our roadmap that changes the picture).
- Prior conversation detail: I need specificity here. If you need me to tell you what Tom cares about, what problem we discussed, or what concern he surfaced, ask me before drafting. One clear touchpoint beats generic rapport signals every time.
- Velara Revenue OS is the product — anchor the revival angle to a real capability or benefit he'd care about given what we discussed, not a generic product pitch.
- Revival angle is "new data or signal" — use that as the permission to reach back out. Make it credible: a capability launch, a market trend, a use case that maps to his world, a data point about his industry or company. No made-up urgency.
- Re-engagement tone: Every touch must read as written by someone in an ongoing conversation, not a stranger. "I was thinking about what you mentioned…" beats "I wanted to reconnect."

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Deal Reviver — 2-4 Weeks / Outside Resource

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Devon Patel, RevOps lead at Stellaris",
    "wentCold": "Said the platform looked great but the RevOps lead's manager was on PTO and they couldn't move without sign-off"
  },
  "sliderValues": {
    "silence-duration": 1,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 8456ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3359 | **Out:** 672 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, RevOps lead at Stellaris, after we talked and the conversation stalled because their manager was on PTO. They're now a warm re-contact, not a cold prospect. Build me a three-touch revival sequence — email, LinkedIn DM, voicemail — each one anchored to the fact that we've already spoken and their blocker (manager sign-off) may have cleared. Every touch must read like it's from someone who knows them, not a stranger trying again.

## STRUCTURE

**1. TOUCH 1 — EMAIL**
Subject line + three short paragraphs. Open by explicitly referencing the manager's PTO blocker or the specific moment they mentioned it — that's your wedge into re-engagement, not a generic "following up." Reframe the delay as time that may have shifted their situation, not time that's passed. Close with a single, low-friction ask: a brief reply, a 15-min call, or a simple yes/no question. Avoid: "circle back," "just checking in," "haven't heard from you," or any phrasing that signals desperation or acknowledges the silence.

**2. TOUCH 2 — LINKEDIN DM**
Two to three sentences. Hook must be completely distinct from the email opener — a different angle on why now matters. Still reads as a re-contact (they'll recognize the context), not a first-time DM. No links, no attachment asks, no forwarded email energy. Human voice.

**3. TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
Twenty to thirty seconds when spoken aloud. Lead with the real reason for the call in the first five words — anchor it to the revival angle or the shared history of the stall. Leave one open question for them to think about; don't demand a callback. Avoid: "just wanted to touch base," "circling back," or restating the email.

## GROUNDING

- The PTO blocker is your only anchor to shared history. Devon knows why they went quiet; use that specificity. Don't invent other details from the original call.
- Revival angle is a product or feature update. If you need a specific update to anchor to, ask me for it. Otherwise, flag the update as "a recent capability that addresses what they were considering" and lean on forward motion, not urgency.
- Two to four weeks is a natural re-contact window — not so long that they've forgotten, not so quick it feels pushy. The manager is likely back.
- Avoid: positioning the silence as a problem, "wanted to catch you before X," "time-sensitive," or any language that treats re-engagement as transaction-heavy. This is "I remembered we were exploring this; thought you'd want to know X" energy.
- DevOps/RevOps buyers value efficiency and clarity. Keep language tight, benefit-forward, no fluff.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Deal Reviver — Hotel chain / 1-3 Months / New Data

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Sara, VP F&B at Stratton Hotel Group (8 properties)",
    "wentCold": "Kitchen renovation project got pushed from Q1 to Q3 — she said timing was the only blocker, not fit"
  },
  "sliderValues": {
    "silence-duration": 2,
    "revival-angle": 0
  }
}
```

**Status:** OK | **Time:** 9151ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3453 | **Out:** 790 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara at Stratton Hotel Group paused her kitchen renovation project — timing was the only friction, not product fit. I'm re-engaging her with a multi-touch sequence that anchors to a real reason to reach out (new data or signal), reads like we've talked before, and lands without desperation. Give me three distinct touches — email, LinkedIn DM, voicemail — each with its own wedge.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that feels like a continuation (not a first pitch)
   - Opener: Explicitly reference the specific moment or concern Sara raised in your original conversation — the renovation timeline slip, the equipment constraints she mentioned, or a particular pain point she flagged. If I haven't supplied enough detail about that conversation, ask me for one concrete moment before you draft.
   - Body: 3 short paragraphs. Para 1 = the shared history + why you're reaching out now (the new signal or data). Para 2 = how the Northwind XR-Series addresses what matters to her (anchor to the single most relevant differentiator for a multi-property hotel — likely the kitchen footprint recovery or energy efficiency). Para 3 = low-friction close (reply, 15-min call, or simple yes/no ask).
   - Avoid: "circle back," "just checking in," "saw you were quiet," desperation energy, or any phrase a stranger could send
   - Tone: Conversational, specific to HER situation, not templated

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Hook must feel distinct from the email — don't just compress the email opener into DM form
   - Still reads as re-contact (acknowledges prior conversation, not a cold DM intro)
   - No link, no attachment ask, no sales language
   - Feels human

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Lead with a real, specific reason for the call in the first 5 words (the revival angle or shared history — tie to the Q3 renovation timeline or the new signal you're anchoring to)
   - End with one open question for her to sit with — not a callback demand or pressure
   - Avoid: "just wanted to touch base," restating the email, generic voicemail filler

## GROUNDING

- Sara said timing was the friction, not fit — treat that as a green light. She's a qualified prospect waiting for a window, not a "maybe never."
- Multi-property context: She manages 8 properties for Stratton. The value case likely centers on consistency across locations, energy footprint at scale, or labor efficiency (staff training time). Pick the one that maps to what she cares about most.
- Northwind XR-Series replaces multiple pieces of equipment in one footprint — this is a natural fit for renovation planning. Lean on that.
- The new signal or data you're anchoring to must be real and specific to her or her industry (Q3 timeline is a real signal; don't invent others). If I haven't supplied it, ask me what triggered this revival.
- She's VP F&B — language should be operational and business-outcome focused, not technical jargon.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Deal Reviver — Lost to Rational / 3+ Months / Last Try

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Diego, Executive Chef at a 4-restaurant Bay Area group",
    "wentCold": "They went with Rational 6 months ago. Diego said off-the-record he was disappointed in the service response on a recent breakdown."
  },
  "sliderValues": {
    "silence-duration": 3,
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 9974ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3456 | **Out:** 833 | **Cost:** $0.0061

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reviving a prospect (Diego, Executive Chef at a 4-restaurant Bay Area group) who chose a competitor 6 months ago but flagged a service pain point off-the-record. I need a three-touch re-engagement sequence that leans on his stated frustration as the wedge — each touch must read as if I've actually talked to him before, never as cold outreach. The sequence is: one email with explicit shared-history callback, one distinct LinkedIn DM, and one voicemail script. No generic "checking in" energy anywhere.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals I'm calling back to something real from our talk, not a generic "follow-up"
   - Opener must reference the specific service frustration Diego raised — the Rational breakdown response time — as the reason I'm reaching out now. This is the wedge; without it, this reads cold.
   - Body develops the pain point he named (service bottleneck on his install) and anchor to how my product's nationwide same-day on-site service addresses it directly — no pitch, just pattern-matching to his stated concern
   - Close with a low-friction ask: a short reply, a 15-minute call, or a simple yes/no on whether this is worth a conversation
   - Avoid: "circle back," "just checking in," "haven't heard from you," any desperation signal, or any opener that could plausibly come from a stranger

2. **TOUCH 2 — LINKEDIN DM**
   - Two to three sentences maximum
   - Hook is distinct from the email — don't rehash the service angle verbatim; find a different re-contact angle (e.g., a product capability angle, a timing angle, or a fresh reason to talk) that still signals we've spoken before
   - No links, no attachment asks, no CTA that demands commitment
   - Reads human and conversational — not a forwarded email or corporate text

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Twenty to thirty seconds when spoken aloud
   - Leads with a real, specific reason for the call in the first five words — tied to the revival angle or the shared history from our conversation
   - Leaves one question for Diego to sit with; don't demand a callback or restate the email
   - Avoid: "just wanted to touch base," "following up," restating email content, or any generic voicemail energy

## GROUNDING

- Diego flagged service response time as a frustration with his current install — that's the only leverage I have. Lead with it; don't bury it.
- He's 6 months into Rational, so this is a "last try" window — he's either committed or buyer's remorse is setting in. Calibrate to that reality; don't pretend we're early.
- Northwind XR-Series same-day on-site service nationwide is the direct counter to his pain. That's the anchor differentiator for this prospect; all three touches should ladder to it.
- Bay Area 4-restaurant group: high operational complexity, pressure on consistency across units. Service reliability is operationally critical to him.
- No invented details about his current Rational experience beyond what he said. No assumptions about his capex timeline, budget, or buyer committee.
- Avoid: industry jargon he didn't use, buzzwords like "cutting-edge," "game-changer," "let's synergize" — he's an executive chef, not a tech buyer.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Deal Reviver — Almost-yes / 2-4 Weeks / Product Update

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Greg, CEO of Helmsdale Foundry (PE-backed industrial)",
    "wentCold": "We were one signature away. His PE sponsor pushed a portfolio-wide priority that ate his Q1 leadership bandwidth."
  },
  "sliderValues": {
    "silence-duration": 1,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 9224ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3453 | **Out:** 789 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I had Greg, CEO of Helmsdale Foundry, nearly signed — we were one signature away before a PE-driven priority pulled his bandwidth in Q1. Now I'm reviving the deal with a real reason to reach back in. Be my cold revival specialist and build me a THREE-TOUCH RE-ENGAGEMENT SEQUENCE (email, LinkedIn DM, voicemail) where every touch reads like it's from someone who already talked to Greg, not a stranger breaking the ice. Each touch anchors to our shared history — the near-close, the PE friction — and gives Greg a concrete reason to pick this back up now without sounding desperate or generic.

## STRUCTURE

1. **TOUCH 1 — EMAIL (Subject + Body)**
   - Subject line is tight, not clever — signals relevance to a prior conversation without urgency phrasing.
   - Opener MUST explicitly reference a specific moment or concern from our original conversation. (If you can't name one, ask me for it before drafting.) This is the wedge; without it, this reads cold.
   - Body: 3 short paragraphs. Paragraph 1 lands the shared-history reference and why I'm reaching back now. Paragraph 2 is the real reason (product/feature update or capability that addresses a gap we discussed). Paragraph 3 is a low-friction ask — reply, 15-min call, or simple yes/no question.
   - Avoid: "circle back," "just checking in," "wanted to follow up," references to how long he's been silent, or desperation signals.

2. **TOUCH 2 — LINKEDIN DM (2–3 sentences max)**
   - Hook is distinct from the email opener — not a forwarded copy.
   - Still reads as re-contact, not first DM. Assume Greg remembers you.
   - No link, no attachment ask. Conversational and human.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud naturally.
   - Opens with a real, specific reason for the call in the first 5 words — tied to the revival angle or shared history.
   - Leaves one open question for Greg to sit with. No explicit "call me back" demand.
   - Avoid: "just wanted to touch base," restating the email, or filler.

## GROUNDING

- Greg is PE-backed industrial, so he'll recognize operational margin pressure and PE timelines. Aldermark's senior-only, hands-on model (no junior consultants, working fixes by week 12, not decks) maps directly to his constraints.
- The near-close is your leverage: he was already sold on the diagnosis. Use that trust, not cold positioning.
- The "real reason" for revival is a product/feature update or a fresh angle tied to operational risk. Ask me if you need to clarify what's genuinely new since we last spoke.
- PE sponsors often deprioritize ops work mid-cycle. The revival angle should feel like a permission structure — a reason for Greg to justify revisiting this without fighting the same sponsor battle.
- Helmsdale Foundry is manufacturing/industrial, so avoid generic SaaS or pure advisory-speak. Ground touches in operational reality — cash leaks, margin recovery, production friction — not stakeholder alignment or digital transformation.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Deal Reviver — New CFO arrived / 3+ Months / Outside Resource

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "deal-reviver",
  "variableValues": {
    "prospectCompany": "Linda, COO of a $40M family-owned services business",
    "wentCold": "The deal stalled when they hired a new CFO who started reviewing all outside engagements 3 months ago"
  },
  "sliderValues": {
    "silence-duration": 3,
    "revival-angle": 1
  }
}
```

**Status:** OK | **Time:** 8177ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3450 | **Out:** 784 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I had a prior conversation with Linda, the COO of a $40M family-owned services business, but the deal stalled when they brought on a new CFO who started reviewing all external engagements. I need a three-touch revival sequence that reads as genuinely re-engaging an existing prospect—not cold outreach. Each touch must anchor to our prior conversation or to a real development that gives Linda a reason to re-open the dialogue now. I'm aiming to get her attention, surface what shifted on their end, and create space for a conversation with both her and the CFO.

## STRUCTURE

1. **Touch 1 — Email**
   - Subject line + 3 short paragraphs.
   - **Opener must explicitly reference a specific moment, concern, or topic from our prior call.** This is the wedge that separates re-engagement from cold outreach. If you need me to supply the specific detail from that conversation, ask me for it before drafting.
   - Body: Acknowledge what's changed (new CFO, re-review of engagements) without sounding like I'm fishing. Anchor to why now matters — tie to the original problem we discussed or to something that would matter to a CFO evaluating us.
   - Close: Low-friction ask — a reply, a brief call, or a simple yes/no. No pressure.
   - Avoid: "circle back," "just checking in," "wanted to follow up," references to how long they've been quiet, desperation signals, or any opener that reads like a stranger could have sent it.

2. **Touch 2 — LinkedIn DM**
   - 2–3 sentences max. Human voice, not a forwarded version of the email.
   - Hook must be distinct from the email opener and still feel like a re-contact.
   - No links, no attachment asks.

3. **Touch 3 — Voicemail Script (if applicable)**
   - 20–30 seconds when spoken aloud.
   - Lead with a real, specific reason for the call in the first 5 words — rooted in the revival angle or our shared history.
   - Leave one question for Linda to sit with; don't demand a callback.
   - Avoid: "just wanted to touch base," restating the email, generic re-engagement phrasing.

## GROUNDING

- Linda stalled the deal when the new CFO started reviewing all external engagements. This is not a cold prospect — she was engaged before the organizational shift. Treat this as a re-entry, not a new sale.
- The CFO review is the real gating event. The revival angle is tied to something that matters to a CFO: operational fixes that deliver measurable margin recovery, or a fee structure that aligns with their success (not a sunk cost).
- Anchor to the Aldermark 12-Week Operations Reset's core differentiator — we ship working fixes, not slide decks. A CFO evaluating us cares about outcomes and accountability, not process.
- Don't invent details about Linda's business or the original conversation. If you need a specific concern or moment from our prior call to anchor Touch 1, ask me for it.
- Avoid buzzwords: "synergy," "let's circle back," "move the needle," "leverage," "touching base." Keep the tone direct and business-minded.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the 3-touch revival sequence, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

