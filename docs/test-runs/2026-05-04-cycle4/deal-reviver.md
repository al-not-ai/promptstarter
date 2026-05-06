# deal-reviver — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 32,758 in / 6,697 out  
**Engine cost (this tool):** $0.0530  

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

**Status:** OK | **Time:** 10063ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3589 | **Out:** 847 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed her VP of Sales involved. She's been quiet for a few days, and I'm coming back with a new data signal as the wedge. Create a three-touch revival sequence — email, LinkedIn DM, voicemail — each touch grounded in our prior conversation and this new angle, every piece written as re-contact (not cold outreach). The sequence should feel like I never left; it should remind her why she was interested and give her a concrete reason to move forward now.

## STRUCTURE

**TOUCH 1 — EMAIL**
- Subject line that references our prior conversation (not a generic "follow-up" line) and hints at the new signal without overselling it.
- Paragraph 1: Acknowledge the specific moment she mentioned needing to bring her VP in. Make this a mirror of what she said — show I was listening.
- Paragraph 2: Introduce the new data signal as a reason to move forward now. Anchor it to the pain or opportunity we discussed; avoid vague "wanted to share something" language.
- Paragraph 3: Low-friction close — ask for a reply, a 15-minute call, or a simple yes/no. No pressure, no desperation.
- Avoid: "circle back," "just checking in," references to how long she's been quiet, or anything a stranger could plausibly send.

**TOUCH 2 — LINKEDIN DM**
- 2–3 sentences maximum. Completely distinct angle from the email — don't forward or compress the email into DM form.
- Still reads as re-contact: reference something from our conversation or her world (not "saw your profile").
- No link, no attachment ask, no CTA that demands immediate action. Human tone — conversational.

**TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds when read aloud. Open with a concrete reason for the call — the revival angle or a specific moment from our talk, not "just calling to follow up."
- Leave her with one question or insight to sit with. No explicit callback demand.
- Avoid: "just wanted to touch base," restating the email verbatim, or filler.

## GROUNDING

- **Prior conversation anchor:** She said she needed to loop in her VP before moving. This is the wedge — start from there. If I haven't given you a specific moment or concern from that call, ask me for one before drafting.
- **New data signal:** The revival angle is a fresh data point. Tie it to pipeline health, forecast accuracy, or deal risk — something that would matter to her or her VP. Avoid: "thought you'd want to see this" without context.
- **Re-contact posture:** Every touch is written as if I just hung up with her. No cold-call energy, no "saw you were at Meridian," no stranger-to-stranger phrasing. She knows me; I'm circling back with momentum.
- **Audience calibration:** Rachel is the point of contact, but her VP of Sales is the eventual decision-maker she's deferring to. The sequence should acknowledge that dynamic without sounding like I'm trying to go around her.
- **Tone for this audience:** Meridian Analytics — data-driven, likely skeptical of generic follow-ups. Keep language direct and grounded. Avoid: sales clichés, hyperbole, buzzword stacking.
- **Channel distinction:** Email builds the case; DM is a parallel nudge; voicemail is the voice of someone who cares enough to call. Three textures, one story.

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

**Status:** OK | **Time:** 7285ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3594 | **Out:** 636 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS, and I'm re-engaging Ben at Cascade Logistics after our conversation stalled on integration complexity with their ERP. I need you to craft a three-touch revival sequence that reads as written by someone who's already talked with him—not a cold opener. Each touch has its own angle and channel; together they create a reason to reconnect that feels earned, not desperate.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Lead with the specific integration concern Ben raised (ERP sync complexity) — this is your wedge. If you need the exact friction point from our call, ask me for it
   - Paragraph two: introduce the product or feature update that directly addresses that blocker
   - Paragraph three: low-friction close (a reply, a 15-min call, a simple yes/no)
   - Avoid: "circle back," "just checking in," "I know it's been a while," desperation energy, or anything a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct angle from the email — don't repeat the integration story
   - Still reads as re-contact, not a first-time DM
   - No links, no attachment asks
   - Human, conversational tone

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - Anchor to the revival angle or shared history — not "just calling to follow up" filler
   - Leave one question for him to sit with; don't demand a callback
   - Avoid: "just wanted to touch base" or echoing the email

## GROUNDING

- Ben's blocker was ERP integration — that's the tether. Every touch should feel like it responds to something real he said, not a generic re-engagement
- If the product update or feature you're referencing doesn't exist in my inputs, ask me what the actual update is before drafting
- Velara Revenue OS syncs natively with Salesforce and HubSpot; if Ben's ERP concern involves those platforms specifically, lean on that capability. If it's a separate third-party ERP system, flag what integration context I can provide
- The revival angle is a product or feature update — make it the reason to reconnect, not an afterthought
- 1–3 months of silence is enough to warrant a re-engagement, but don't patronize it ("I know you've been busy"). Assume he's still evaluating or got blocked elsewhere
- Tone: credible, not salesy. You're solving a specific problem he named, not chasing him

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

**Status:** OK | **Time:** 9062ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3587 | **Out:** 715 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze halted momentum in January — she's been quiet for 3+ months. Be my cold revival specialist and craft a three-touch re-engagement sequence that breaks through silence with a real reason to reach out, not a generic follow-up. Each touch must read as if I've already talked to her — reference our prior conversation explicitly in Touch 1, shift the angle in Touch 2, and leave a concrete voicemail that sits with her in Touch 3. This is my last try; make it count.

## STRUCTURE

**1. Touch 1 — Email**
Subject line + 3 short paragraphs. Explicitly anchor to the budget freeze conversation or a specific concern she raised in January — that's the wedge that separates this from a cold email. If you need more detail about what we actually discussed (a specific pain point, objection, or moment), ask me for it before drafting. Close with a low-friction ask: a quick reply, a 15-min call, or a simple yes/no. Avoid recycled language ("circle back," "just checking in," "wanted to follow up," time-shame like "haven't heard from you in a while").

**2. Touch 2 — LinkedIn DM**
2–3 sentences max. Same re-contact tone, completely different hook and angle than the email — not a condensed version of it. No links, no attachment asks. Reads like a human thought of her, not a forwarded message.

**3. Touch 3 — Voicemail Script (if applicable)**
20–30 seconds when spoken aloud. The real reason for the call must be concrete and immediate — anchored to the revival angle or what we discussed in January. Leaves her with one question to sit with; no explicit callback demand. Avoid: "just wanted to touch base," generic restatements of the email, or filler.

## GROUNDING

- The budget freeze in January is the context, not the blocker — use it to show you understand the timing, then pivot to why *now* is relevant (don't dwell on the silence or shame the gap).
- Thornfield Capital context: If I've given you intel on their current state (new hire, fiscal calendar shift, deal activity), anchor Touch 2 and Touch 3 to that. If not, keep the angle general but grounded in the original conversation.
- Velara Revenue OS is the product — anchor Touch 1 and the voicemail to the core value (real-time pipeline intelligence, CRM automation, or forecast accuracy SLA, depending on what resonated in January). If you need clarity on what mattered most to her, ask me.
- "Last try" posture: All three touches assume this is the final sequence before I move on. Write accordingly — no desperation, no apology, just clarity and respect for her time.
- Avoid buzzwords that feel generic for a capital firm (don't lean on "growth" or "efficiency" without tying to her world; avoid "synergy," "transformational," "best-in-class").

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

**Status:** OK | **Time:** 9678ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3572 | **Out:** 787 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Tom after we went quiet — they got busy, and it's been 2–4 weeks. I need a three-touch revival sequence that feels like a genuine re-contact, not a cold restart. Each touch anchors to our prior conversation and gives Tom a real reason to engage now. The sequence should feel natural, earned, and built on shared history — not desperation.

## STRUCTURE

**1. EMAIL — Subject + Body**
- Subject line signals a new development, not a re-check-in. Fresh angle, not "following up."
- Body opens by anchoring to a specific moment or concern Tom raised in our original conversation. If I haven't supplied enough detail from that call, ask me to name one thing Tom cared about or one challenge they surfaced. This shared reference IS the wedge; without it, this reads cold.
- Three short paragraphs: (1) the reference to our prior conversation, (2) the new signal or reason to re-engage now, (3) the ask — low-friction, explicit, and time-bound.
- Closes with one clear option: reply, 15-minute call, or yes/no question. No vague "let's sync."
- Exclude: "circle back," "just checking in," "it's been a minute," time-elapsed framing, or any softness that signals I've been ghosted.

**2. LINKEDIN DM**
- Two to three sentences max. Completely different hook and angle from the email — not a shortened version of it.
- Still reads as re-contact to someone I've talked with. Not a first-time DM energy.
- Human tone. No link, no "check this out," no attachment ask. Just the reason to re-engage in its most direct form.

**3. VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds when spoken aloud. Concrete reason for the call — anchored to the revival angle or something Tom said in our first conversation.
- Leave one open question for them to think about. Not "call me back," not a demand.
- Exclude: "just wanted to touch base," "just following up," generic filler, or echo of the email.

## GROUNDING

- **Prior conversation detail:** You'll need to know what Tom cared about or what challenge they mentioned. If I haven't been specific, ask me for one moment or one thing they said. A real reference beats a generic re-engagement.
- **2–4 week quiet window:** Enough time to justify a reason-to-reach-out, but not enough that Tom's moved on entirely. Treat this as a window, not an excuse.
- **New data or signal as the angle:** Something has changed in their world, their market, or our product that makes now the right time. This is NOT "I haven't heard from you" — it's "here's why now matters."
- **Velara Revenue OS and the value:** Anchor to how my product solves a problem Tom flagged or a capability they'd care about. Don't invent new pain points; use what they already raised.
- **Tone across all three touches:** Professional, direct, human. No sales-speak softness. No apologies for the quiet.
- **Avoid buzzwords:** "synergy," "circle back," "touch base," "just wanted to," "let's connect," "reach out," "at this point in time."

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

## [V] Deal Reviver — 2-4 Weeks / Product Update

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

**Status:** OK | **Time:** 7864ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3608 | **Out:** 662 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, RevOps lead at Stellaris, after our conversation stalled when their manager was unavailable. I'm building a three-touch revival sequence anchored to a product or feature update as the real reason to reach back out. Each touch must read as a re-contact from someone they've already spoken with — never cold, always rooted in our prior conversation. I need the sequence structured so I can choose my channel and timing based on their behavior.

## STRUCTURE

**1. EMAIL (Touch 1 — The Wedge)**
Subject line + three short paragraphs. Open by explicitly referencing a specific moment or concern from our original conversation — the manager's PTO constraint, a capability we discussed, or a problem they named. That shared history is what separates this from a cold email. Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no. Avoid generic language like "circle back," "just checking in," desperation about silence, or anything a stranger could send.
- If my input doesn't give you enough detail on what we discussed, ask me for one specific moment or concern Devon raised before you draft.

**2. LINKEDIN DM (Touch 2 — The Angle)**
Two to three sentences maximum. Completely different hook and angle from the email — not a repurposed version of it. Still reads as re-contact, not a first DM. No links, no attachment asks. Human voice.

**3. VOICEMAIL SCRIPT (Touch 3 — if applicable)**
Twenty to thirty seconds when spoken aloud. Ground the real reason for the call in either the product/feature update angle or the shared history — not generic "just wanted to follow up" filler. Leave one question for them to sit with; don't demand a callback. Avoid echoing the email or "just touching base" language.

## GROUNDING

- Devon said yes to the value of Velara Revenue OS but needed manager sign-off; that manager was on PTO. The revival angle is a product or feature update — make that the concrete reason to re-engage, not a "just checking in" pretense.
- Two to four weeks of silence is normal stall behavior, not rejection. Treat this as a thaw, not a resurrection.
- RevOps leads are time-starved and skeptical of re-contact; respect that by making every touch earn its place. No multi-paragraph emails. No "I'd love to reconnect" softness.
- Anchor to Velara Revenue OS and its real-time intelligence capability — the feature/product update should feel like something Devon would actually want to know about, not a sales pretext.
- Avoid any reference to how long they've been silent, apologies for the delay, or any signal that you're surprised they haven't moved. Treat the re-engagement as natural momentum.

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

**Status:** OK | **Time:** 8430ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3702 | **Out:** 760 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reviving a stalled deal with Sara, VP F&B at Stratton Hotel Group — her kitchen renovation project got pushed from Q1 to Q3, but timing was the only blocker, not fit. I need a three-touch re-engagement sequence (email, LinkedIn DM, voicemail) that reads like I'm circling back to an actual conversation, not cold-calling her. Each touch must reference our prior talk or the context she gave me, and each must have a distinct hook and low-friction ask. The sequence spans a week or two with real spacing between touches.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line: Something that signals we've talked before — reference the renovation timeline or a specific capability we discussed, not generic "following up"
   - Salutation + 3 short paragraphs + signoff
   - **Paragraph 1:** Anchor to the Q3 timeline she mentioned or a specific pain point from the original call — show you remember the context
   - **Paragraph 2:** Introduce the new signal or data that makes this moment worth her attention (not just "time has passed")
   - **Paragraph 3:** Low-friction ask — a brief reply, a 15-min call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," apologies for the delay, or anything that sounds desperate or generic

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook from the email — a distinct angle or insight
   - Must still feel like a re-contact (she'll recognize the name/context), not a first-time DM
   - No links, no attachment asks
   - Human tone — conversational, not a forwarded version of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT** (label "if applicable")
   - 20–30 seconds when spoken aloud
   - Real reason for the call: concrete, immediate, anchored to the revival angle or shared history from the original conversation
   - Leaves one open question for her to sit with — not a callback demand or generic filler
   - Avoid: "just wanted to touch base," restating what's in the email, or any "I know you're busy" hedge

## GROUNDING
- Sara's blocker was timing (Q3 renovation), not product fit — treat this as a greenlight-in-waiting, not a restart-from-zero
- The Northwind XR-Series replaces multiple pieces of equipment in one footprint — relevant to kitchen renovation planning; floor space recovery is a natural re-entry angle
- "New data or signal" is my revival hook — this could be a case study from a comparable hotel group, a seasonal opportunity, an insight tied to her Q3 timeline, or a product update relevant to her use case; if my input doesn't specify what the signal is, instruct the assistant to ask me for it
- Stratton Hotel Group runs 8 properties — consider whether multi-property implications (consistency, procurement leverage) sharpen the angle
- Avoid foodservice jargon creep and brand-name dropping; keep the tone peer-level, not salesy

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

**Status:** OK | **Time:** 8691ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3705 | **Out:** 752 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Diego is an Executive Chef at a 4-restaurant Bay Area group who went with Rational 6 months ago but mentioned off-the-record frustration with their service response after a recent breakdown. I'm running a last-try revival sequence — three touches designed to re-engage him by anchoring to his actual pain point (service lag) and our core advantage (same-day on-site response nationwide). Each touch must feel like it's written by someone who's already talked to him; nothing cold or generic. Help me write the sequence.

## STRUCTURE

**1. EMAIL — Touch 1 (the wedge)**
Subject line + three short paragraphs. Explicitly reference the service frustration Diego mentioned — that's the shared-history wedge that makes this re-engagement, not a cold email. If you need more texture on what happened during the breakdown or exactly what he said, ask me before drafting. Anchor the Northwind XR-Series to same-day on-site response as the direct counter to his pain. Close with a low-friction ask — a reply, a 15-min call, or a simple yes/no question. Avoid desperation signals, "circle back," "just checking in," or mentions of how long he's been quiet.

**2. LINKEDIN DM — Touch 2 (distinct angle)**
Two to three sentences. Different hook than the email — don't forward-paste the email premise. Still reads as re-contact, not a first DM. No links or attachment asks. Human tone.

**3. VOICEMAIL SCRIPT — Touch 3 (if applicable)**
20–30 seconds when spoken aloud. Anchor the real reason for calling to the revival angle or shared history — not generic "just calling to follow up" filler. Leave one question for him to sit with; no explicit callback demand. Avoid "just wanted to touch base" or restating the email.

## GROUNDING

- **The wedge is service frustration.** Diego's pain is real and recent — Rational's response lag on the breakdown. Northwind's same-day on-site response is the lever; lead with the capability, not the comparison.
- **Re-engagement voice, not cold voice.** Every touch must assume prior relationship. "You mentioned..." / "When that breakdown happened..." / "That service delay you were dealing with..." — these are permission structures. Without them, the touch reads as if I'm a stranger.
- **Last-try calibration.** This is the final sequence before a prospect goes fully dormant. No over-apologizing for silence. Tone is respect + confidence, not desperation.
- **Anchor to XR-Series, not just "better service."** The product replaces four units in one footprint and includes the service backbone. If the assistant wants to reference uptime, kitchen productivity, or space recovery as secondary benefits, they can — but same-day response is the primary wedge for Diego.
- **Avoid:** "Let's sync," "just touching base," "I know you went a different direction," "circle back," "it's been a while," "would love to chat," passive openers ("I thought of you"), or any signal that implies Diego ghosted or that I'm desperate to win back his attention.

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

**Status:** OK | **Time:** 9653ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3702 | **Out:** 824 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset to Greg, CEO of Helmsdale Foundry. We were close — nearly signed — but his PE sponsor's Q1 portfolio priority derailed us. Now I'm bringing him back with a real reason to reengage: something new or evolved about the product or our approach. Be my cold revival specialist and build me a three-touch re-engagement sequence where every touch reads like it's from someone who's already talked to Greg — not a stranger trying to get back on his calendar.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals continuity without being a generic "follow-up" callback
   - Three short paragraphs: (1) Anchor to a specific moment, concern, or commitment from our prior conversation — make it clear I remember what we discussed and why it mattered to him. (2) Introduce the real reason for reaching out — the product/approach shift or insight — and tie it *directly* to the bottleneck or margin pressure we talked about before. (3) Close with a low-friction ask: a reply, a 15-min call, or a simple yes/no question
   - Tone: confident, specific, no apology for the silence
   - Avoid: "circle back," "just checking in," "haven't heard from you," desperation, or any language a cold caller could use

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook and angle from the email — don't forward the email to DM; think of a *separate* reason to pop up on LinkedIn
   - Still reads as a re-contact to someone I've already spoken with, not a first DM
   - No link ask, no attachment
   - Human and conversational

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle or our shared history — not "just calling to follow up" filler
   - Leave one open question for him to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," restating the email, generic voicemail energy

## GROUNDING

- **Prior conversation is the spine.** If my input doesn't supply enough detail about what we discussed — the specific concern Greg raised, the commitment he made, or the reason the deal froze — ask me for one concrete moment before drafting. This tool only works if the revival angle feels earned.
- **The PE sponsor context matters.** His bandwidth was eaten by a portfolio-wide push. The revival angle should acknowledge that his world shifted, not that *he* ghosted.
- **"Product/Feature Update" is the trigger.** Make it real and concrete to margin or operational fix — not a generic "we've added features." If I haven't supplied the specific update, ask me what's new or evolved about our approach that would matter to Greg's situation.
- **Quiet for 2–4 weeks is recent.** No apology, no "it's been a minute." Write like we're picking up a thread that was live and worth continuing.
- **Helmsdale Foundry is PE-backed industrial — our core sector.** Greg's problem (margin pressure, operations bleeding cash) is exactly what the Reset solves. Don't soft-pedal that fit; let it show.
- **No cold-call energy.** Every touch must prove I remember who this person is and why we were talking. Shared history is what separates revival from cold prospecting.

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

## [A] Deal Reviver — New CFO arrived / 3+ Months / Product Update

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

**Status:** OK | **Time:** 8321ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3699 | **Out:** 714 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I talked with Linda, COO of a $40M family-owned services business, but the deal stalled when they brought on a new CFO who started vetting all outside engagements. Now I'm reviving this — the angle is a real product/feature update that changes the conversation with her new CFO. Build me a three-touch re-engagement sequence (email, LinkedIn DM, voicemail) where every touch reads as a return to an ongoing thread, not a cold restart. Each touch must anchor to our prior conversation or the new CFO context — never generic follow-up energy.

## STRUCTURE

**1. EMAIL — Touch 1**
Subject line + three short paragraphs. Open by naming a specific moment, concern, or topic from our original conversation — this is the wedge that makes it re-engagement, not a cold email. If you need one concrete detail from that first call (a margin pain point we discussed, a workflow issue Linda flagged, anything specific), ask me for it before you draft. The email closes with a low-friction ask: a reply, a 15-min call, or a simple yes/no. Tone: conversational, not desperate. Avoid: "circle back," "just checking in," "I wanted to follow up," references to silence, or any phrase a stranger could plausibly send.

**2. LINKEDIN DM — Touch 2**
Two to three sentences. Distinct from the email — different hook, different angle, but still reads as a re-contact. No links, no attachment asks. Human voice — not a forwarded version of the email.

**3. VOICEMAIL SCRIPT (if applicable) — Touch 3**
Twenty to thirty seconds when spoken aloud. The reason for the call must be concrete and anchored to the revival angle or shared history — not "just calling to follow up" filler. End with one question for Linda to sit with; no explicit callback demand. Avoid: "just wanted to touch base," restating the email, or generic voicemail patter.

## GROUNDING

- Linda is the COO; the new CFO is the gatekeeper. The revival angle must make sense to a CFO (margin recovery, operational efficiency, risk mitigation) even though Linda is your entry point. Don't ignore the CFO context — fold it in.
- The stall was 3+ months ago. Touch 1 assumes time has passed; use it. A CFO vetting third-party work is standard — frame the reset as aligned with that scrutiny, not as pushback against it.
- The product update is your real reason to reach out. Keep it concrete: what changed, why it matters to *them*, why now. If you need me to clarify what the update is or how it maps to their situation, ask.
- Family-owned, $40M services business. Avoid: big-enterprise language, over-formality, or corporate process fetishism. These are operators.
- Anchor to margin, cash efficiency, or operational fix-rate — the language that landed in the original conversation or that a CFO would respond to.

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

