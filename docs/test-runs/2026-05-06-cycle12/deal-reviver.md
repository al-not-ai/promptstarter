# deal-reviver — stress test results

**Run:** 2026-05-06-cycle12  
**Cases:** 9 (9 OK)  
**Tokens:** 28,272 in / 6,907 out  
**Engine cost (this tool):** $0.0502  

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

**Status:** OK | **Time:** 8006ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3093 (read=0, write=0) | **Out:** 712 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed her VP of Sales involved. Be my cold revival specialist and craft a three-touch sequence that gives me a real reason to come back — anchored to a new signal or development that makes this worth her attention again. Each touch should feel like it's from someone who's already talked with her, not a stranger. I need the sequence labeled by touch (Email, LinkedIn DM, Voicemail) so I can deploy them strategically.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Anchor to a specific moment, topic, or concern Rachel raised in our original conversation — NOT "I wanted to follow up" or generic re-engagement language
   - **If my input doesn't supply enough prior-conversation detail, ask me for one concrete moment or concern from the call before you draft.** This is the wedge; without it, the email reads cold.
   - Close with a low-friction ask (a quick reply, a 15-minute call, or a simple yes/no question)
   - Avoid "circle back," "just checking in," desperation, timeline complaints ("I haven't heard from you"), or language a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook and angle from the email — don't repackage the email message
   - Reads human and conversational; still feels like a re-contact, not a first DM to someone you've never spoken with
   - No links, no attachment requests

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - Ground in the revival angle or shared history — make the reason for the call concrete and immediate, not "just calling to follow up" filler
   - Leave one open question for her to sit with; don't demand a callback
   - Avoid restating the email or "just wanted to touch base"

## GROUNDING

- Rachel needs her VP of Sales looped in before she can move; the revival angle is a new signal or data point that gives her a reason to re-engage him — frame it as useful intel for that conversation, not pressure on her
- The sequence spans a few days of silence, so the tone is supportive and genuine, not aggressive or "checking up"
- Velara Revenue OS auto-captures deal activity and surfaces forecast accuracy — these are the engines of value, but the *angle* (what makes the revival work) is anchored to your new signal, not a generic re-pitch
- Rachel is the buyer — she's the decision-maker at her level; the VP is the stakeholder she's looping in. Keep the message sized for her agency, not the VP's
- Avoid: "Wanted to circle back," "just following up," "haven't heard from you in a while," "wanted to make sure you didn't forget," or any language that treats the silence as a problem

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

**Status:** OK | **Time:** 7709ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3098 (read=0, write=0) | **Out:** 653 | **Cost:** $0.0051

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS, and I'm reviving a stalled deal with Ben at Cascade Logistics. We've talked before — integration complexity around their ERP was the reason the conversation stalled. I have a real reason to reach back out: a product or feature update that directly addresses that concern. Be my cold revival specialist and craft me a three-touch re-engagement sequence that reads as continuity, not a restart. Every touch must land as if I know what stopped us and why I'm back.

## STRUCTURE

1. **Touch 1 — Email**
   - Subject line + 3 short paragraphs
   - Open by naming the specific concern they raised (ERP integration complexity) — this is the wedge that makes it a re-contact, not a cold opener
   - Pivot to the product or feature update that changes the math on that concern
   - Close with a single low-friction ask (reply, 15-min call, or simple yes/no)
   - Avoid generic stalls ("circle back," "just checking in," timing references, desperation signals)

2. **Touch 2 — LinkedIn DM**
   - 2–3 sentences max
   - Different angle from the email, but still grounded in shared history (the integration blocker)
   - No link, no ask for attachment or document download
   - Reads conversational — not a forwarded email

3. **Touch 3 — Voicemail Script** *(if applicable)*
   - 20–30 seconds when spoken aloud
   - Anchor to the revival reason (the update or feature shift on ERP sync) — not filler like "just wanted to touch base"
   - Leave one question or thought for Ben to sit with; no explicit callback demand
   - Avoid restating the email or generic voicemail patterns

## GROUNDING

- **Anchor to shared history.** Ben raised a real technical concern (ERP integration) — that's your credibility. Lead with it, not around it.
- **The update is real and specific to him.** Don't say "we've shipped updates" — anchor to what changes about the ERP integration story for Cascade specifically. If you don't have a concrete product change to point to, ask me before drafting.
- **No timing apologies.** Don't reference how long they've been quiet or apologize for the gap. Your reason for reaching out is the update, not the silence.
- **Re-contact, not cold.** All three touches must read as if I've already talked to Ben. A stranger wouldn't reference the ERP blocker; I would.
- **Forecast-accuracy SLA is the play if integration complexity resurfaces.** If Ben worries the ERP sync will degrade forecasting reliability, anchor to our contractual accuracy guarantee — that's a hard differentiator tied to data integrity.

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

**Status:** OK | **Time:** 8606ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3091 (read=0, write=0) | **Out:** 701 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze halted our conversation in January — it's been 3+ months silent. Be my cold revival specialist and craft a three-touch re-engagement sequence that reads as genuine reconnection, not desperation. Each touch must anchor to our prior conversation and give Nina a real reason to respond now. This is my last credible attempt, so make it count.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals genuine re-entry (references January context, not generic "following up")
   - Open by naming the specific budget-freeze concern Nina raised — this is the wedge that proves we talked before
   - Body: 3 short paragraphs. First grounds the conversation in what we discussed. Second pivots to why conditions may have shifted since January (no invented details — use industry pattern: budget cycles reset, new priorities emerge). Third makes the ask low-friction (reply confirmation, 15-min call, or simple yes/no). 
   - Avoid: "circle back," "just wanted to check in," "it's been a while," desperation signals, or text a cold stranger could send
   - Closes with a single, specific next step

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences. Completely different hook and angle from the email — don't recycle the same premise
   - Reads human and conversational, not forwarded or template-adjacent
   - Still feels like a re-contact (references the relationship or prior context), not a first outreach
   - No links, no attachment asks, no calls to action embedded in copy

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Lead with concrete reason for the call — anchored to the revival angle or what Nina told us in January, never generic "just calling to follow up"
   - End by leaving one open question for Nina to sit with (not a callback demand or pressure close)
   - Avoid: "just wanted to touch base," repeating the email premise, or restating what we already said

## GROUNDING

- Nina cited a budget freeze in January — anchor Touch 1's reopener to that specific moment or concern; if you need more detail on what else she raised in that call, ask me before drafting
- 3+ months silent is deep cold; this is the last credible outreach, so every touch must earn permission to reach out again
- Velara Revenue OS auto-captures deal activity and surfaces forecast accuracy backed by SLA — reference these as the *reason* for re-engagement if a new fiscal cycle or budget thaw is a plausible trigger in capital management, but don't invent Q1/Q2 budget timing
- Thornfield Capital is institutional — tone is professional, not overly casual; avoid startup/tech speak
- Revival angle is "last try" — that's the mental posture; don't signal desperation in the copy itself

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

**Status:** OK | **Time:** 6775ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3076 (read=0, write=0) | **Out:** 623 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Tom, who got busy and went quiet 2–4 weeks ago. Be my cold revival specialist and craft a three-touch re-engagement sequence that feels like we've already talked — each touch anchored to our prior conversation and giving Tom a real, concrete reason to respond now. Every touch must read as a re-contact, not a first cold reach.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by naming a specific moment, topic, or concern Tom raised in our prior conversation — this is your wedge that separates re-engagement from cold outreach. If my input doesn't supply that detail, ask me for one specific thing Tom mentioned before you draft.
   - Body anchors to the revival angle: new data or signal that makes reaching out now concrete and timely, not generic
   - Close with a low-friction ask: reply, a 15-min call, or a straightforward yes/no question
   - Avoid: "circle back," "just checking in," "I wanted to follow up," references to how long he's been silent, or any line a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct from the email — different hook, different angle, but still a re-contact
   - No link, no attachment ask
   - Reads human; don't forward the email tone into Slack/DM voice

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Ground the real reason for the call in the revival angle or shared history — concrete and immediate, not "just calling to follow up" filler
   - Leave one question for Tom to sit with; don't demand a callback
   - Avoid: "just wanted to touch base," echoing the email, generic pleasantries

## GROUNDING
- Tom went quiet after we'd already connected — treat every touch as a continuation, not an introduction
- The revival angle is new data or signal; anchor each touch to why *now* is the moment to re-engage, not just "I haven't heard from you"
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time — the "new signal" can be industry-relevant or Tom-specific if you need to anchor it, but don't invent specifics I haven't supplied
- Tone across all three: respect his time and busyness; confidence without pressure
- If you need more context on what Tom originally said to build Touch 1's wedge, ask me before drafting

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

**Status:** OK | **Time:** 9470ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3112 (read=0, write=0) | **Out:** 765 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Devon Patel at Stellaris stalled on us 2–4 weeks ago — their manager was out and they needed sign-off to move forward. I'm reviving this deal with a multi-touch sequence anchored to a genuine product update or new capability that resharpens the case for them. Write me a THREE-TOUCH REVIVAL SEQUENCE where each touch reads like I've already talked to Devon, not like I'm starting cold. Every touch must land differently and feel like a real reason to resurface, not a "just checking in" replay.

## STRUCTURE

1. **TOUCH 1 — EMAIL (Subject + Body)**
   - Subject line must signal newness without hype — flag the specific update or capability as the reason for reaching back
   - Open by referencing the exact moment or concern Devon raised on our original call (the manager sign-off bottleneck is your primary anchor; if you need richer detail on what resonated in that conversation, ask me before drafting)
   - Three short paragraphs: (1) the shared memory + why now is different, (2) the substance of what's new and why it matters to their workflow, (3) low-friction close — ask for a reply, a 15-min call, or a simple yes/no on next steps
   - Avoid: "circle back," "just checking in," references to how long they've been quiet, or anything a stranger could write

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences. Completely different hook from the email — don't just repackage the update
   - Should still feel like re-contact (shared history, not cold outreach)
   - No links, no attachment requests — human tone only
   - Designed to land after email silence, not to replace it

3. **TOUCH 3 — VOICEMAIL (if applicable)**
   - 20–30 seconds spoken aloud
   - Open with the concrete reason for the call (anchored to the revival angle or shared history, not filler)
   - Leave one question for Devon to sit with — no explicit callback demand
   - Avoid: "just wanted to touch base" or repeating the email message

## GROUNDING

- Devon's blocker was manager sign-off during PTO — that's the wedge. The update must make it easier or more urgent for them to loop their manager back in, not add friction.
- Stellaris is a RevOps shop; Devon leads it. Product updates or features that touch pipeline visibility, data capture, or forecast confidence are the strongest levers — anchor to the operational win, not feature coolness.
- The revival angle is a genuine product or feature update. If you don't have one from me, ask me what's new before drafting — don't invent capability claims.
- Two to four weeks of silence is long enough that Devon's probably moved mental bandwidth elsewhere. The update must justify the re-contact; it can't feel obligatory.
- Velara Revenue OS auto-captures activity and surfaces deal risk in real time — both workflows that RevOps teams care about. If the update touches either of these, it sharpens the case for re-engagement.
- Don't mention competitors, timelines you can't verify, or Velara's speed-to-deployment unless the rep's inputs anchor it.

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

**Status:** OK | **Time:** 11098ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 906 | **Cost:** $0.0062

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara, VP F&B at Stratton Hotel Group, got quiet when her kitchen renovation shifted from Q1 to Q3 — she was clear the timing was the only friction, not the fit. Be my cold revival specialist and craft me a three-touch re-engagement sequence that leans on her shifted timeline as the real reason to reach back in. Each touch must read like it's from someone who's already talked to her; use a moment or concern from our prior conversation to reset the dialogue without sounding desperate or generic.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject + three short paragraphs. Open with a specific detail from our conversation — a pain point she named, a question she asked, or a project goal she shared — not a generic "following up" line.
   - Body: Acknowledge the Q3 timeline shift as the catalyst for reaching out now (not as a complaint about her silence). Introduce one concrete reason the timing shift actually *strengthens* the case for the Northwind XR-Series — anchor to kitchen-line space recovery or service reliability if she cited downtime concerns, or energy costs if she owns the utility bill. Keep it tight; one lever, not a feature dump.
   - Close with a low-friction ask: a short reply, a 15-minute call, or a simple yes/no question about whether the Q3 window still makes sense.
   - Avoid: "circle back," "just checking in," "I haven't heard from you," "just wanted to see if," or any hedge that reads like a cold email.

2. **TOUCH 2 — LINKEDIN DM** (if applicable)
   - 2–3 sentences. Different hook from the email — don't echo the same angle. Can reference a detail she cares about that wasn't the main driver in the email, or reframe the timing shift with fresh urgency. Keep it conversational and short; no links or asks for attachments.
   - Must still read as a re-contact, not a first outreach — some echo of prior conversation or context.

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - 20–30 seconds when read aloud. Ground the call reason in something concrete tied to her renovation timeline or the Northwind XR-Series footprint and service advantage — not "just calling to follow up." Leave one open question or observation for her to sit with; no explicit callback demand or urgency.
   - Avoid: Generic filler, restating the email, "just wanted to touch base."

## GROUNDING

- **Prior conversation anchor:** If my input doesn't spell out a specific moment, objection, or concern Sara raised during our initial talk, ask me for one before drafting. The shared history is what resurrects this thread; without it, every touch reads cold.
- **Q3 timeline is the wedge:** The renovation delay isn't friction — it's the reason to re-engage. Use it as the catalyst, not an apology.
- **One differentiator per sequence:** Pick the single Northwind XR-Series strength most likely to matter to a multi-property F&B VP: kitchen-line space recovery (the ~14 sq ft footprint is gold for tight urban hotels), energy cost savings (she probably owns or monitors utility spend across eight properties), or same-day service reliability (no downtime between properties). Don't spray all four.
- **Prospect context:** Sara's buying signal was always "fit" — she just said "timing." Treat that as literal. Don't re-litigate the product; treat her as already sold on the idea and speak only to the window.
- **Avoid buzzwords for this audience:** "synergy," "circle back," "touch base," "let's jump on a call," "check in," "just wanted to see," "in the spirit of," "take a beat." Stay direct and human.

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

**Status:** OK | **Time:** 11463ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 926 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reviving a stalled deal with Diego, an Executive Chef at a 4-restaurant Bay Area group who chose a competitor six months ago but revealed service frustration off-the-record. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that leans on his service pain and gives me a real reason to resurface — not a generic follow-up. Each touch must read as if I've already talked to Diego; the shared history is what earns the re-contact. Calibration: this is my last meaningful attempt, so the tone is respectful but direct.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals the re-contact is about something specific (his service experience or operational constraint), not just "following up"
   - Salutation + 3 short paragraphs max
   - MUST open by calling back a concrete moment or pain from our prior conversation — the service frustration he mentioned — to establish that I listened and remember. Without this wedge, it reads as cold. If my inputs lack enough detail about what he said, ask me for one specific concern or moment from the original call before you draft.
   - Paragraph 2: The reason I'm reaching out now — tied to his service issue, not arbitrary timing. Mention the Northwind XR-Series by name and anchor to our same-day service capability as the sharp contrast to what he's experiencing.
   - Paragraph 3: Low-friction close — ask for a reply, a 15-minute call, or a yes/no on whether a brief conversation makes sense. No pressure, no desperation language.
   - Avoid: "circle back," "just checking in," "I know you've been quiet," or any phrase a stranger could send.
   - Close with professional signoff (no "Looking forward to hearing from you soon" spam).

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences, max. Standalone hook — different angle than the email, not a forwarded version.
   - Still reads as re-contact: reference the prior conversation or the service pain, not a generic "saw your profile and thought I'd reach out."
   - No links, no attachment requests, no call-to-action demand. Human voice.
   - Tone: warmer and more direct than email; short enough he'll actually read it.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud.
   - The real reason for the call must be concrete and grounded in his service frustration or the revival angle — not filler like "just calling to follow up" or generic catch-up language.
   - Leave him one question to sit with (something he'd want to answer), not an explicit callback demand or desperation pitch.
   - Avoid: restating the email, "just wanted to touch base," or anything that sounds like a generic voicemail.

## GROUNDING

- Diego went with Rational 6 months ago. The service letdown is my only real wedge — that's what makes this a re-contact, not a cold restart. Lean on it hard.
- Northwind's same-day on-site service nationwide is the differentiator that answers his pain directly. Anchor to that capability — don't invent response-time guarantees beyond what the product delivers.
- A 4-restaurant group is heavy-use volume. The operational constraint (space, reliability, staff training) matters more than price. Mention the footprint recovery and ease of staff onboarding only if his prior conversation revealed pain there.
- Bay Area food service is competitive and time-starved. Short, direct, respectful. No fluff, no hype.
- The "Last Try" calibration means I'm not coming back a fourth time. The tone should reflect finality — not desperation, but clarity that this is a genuine opening to reconnect, not a persistence play.

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

**Status:** OK | **Time:** 8685ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 808 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I've been in conversation with Greg, CEO of Helmsdale Foundry, and we stalled just before close — his PE sponsor's portfolio directive pulled his focus in Q1. Now I'm re-engaging him with a concrete reason to reconnect. Be my cold revival specialist and craft a three-touch re-engagement sequence where every message reads as if we've already talked (because we have). Each touch must feel like it's written by someone with shared history, not a stranger sending a cold opener.

## STRUCTURE

1. **TOUCH 1 — EMAIL (Subject + Body)**
   - Subject line must signal re-engagement without being generic ("following up" doesn't work here)
   - Open with a specific reference to our prior conversation — a concrete moment, a concern he raised, or an insight from the call. This is the wedge that separates re-engagement from cold outreach. If you need more detail about what was discussed, ask me for one specific moment or objection from our original conversation before you draft.
   - Body: 3 short paragraphs. First paragraph anchors the shared history and shows you were listening. Second paragraph delivers the reason to re-engage (the trigger or new angle). Third paragraph closes with a low-friction ask — a reply, a 15-minute call, or a simple yes/no question.
   - Avoid: "circle back," "just checking in," "I know you've been busy," desperation language, or any line a cold prospect would recognize.
   - Close with a natural signoff (name only, no title inflation).

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Completely distinct from the email — different angle, different hook.
   - Must still read as a re-contact (shared context evident), not a first DM to a stranger.
   - No links, no attachment requests, no calendar blocks.
   - Tone is human and casual — not a forwarded or compressed version of the email.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud.
   - The real reason for the call must be concrete and tied to the revival angle — anchored to a specific insight, blocker he mentioned, or new context. Not "just calling to follow up" or generic check-in language.
   - Leave one open question for him to sit with. No explicit callback demand or pressure.
   - Avoid: restating the email, "just wanted to touch base," or filler.

## GROUNDING

- Greg stalled one signature away — the PE sponsor's portfolio priority pulled his bandwidth in Q1. This is the shared history I'm anchoring to; it's a legitimate reason to re-engage, not a cold restart.
- The revival angle is a product or feature update. This is my concrete reason to reach out — it must feel real and tied to why now matters for him.
- Helmsdale Foundry is PE-backed industrial. That's my customer profile — this is exactly who the Aldermark 12-Week Operations Reset is built for.
- Greg is the CEO and decision-maker. Treat him as such — no patronizing or over-explaining.
- All three touches must feel written by someone who knows the deal history. A prospect can smell cold outreach disguised as a follow-up.
- Keep language direct and operator-focused. Greg runs an industrial operation; he values specificity and no-BS communication.

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

**Status:** OK | **Time:** 9992ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 813 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled conversation with Linda, a COO at a mid-market services business, where momentum died when their new CFO started reviewing outside engagements. Be my cold revival specialist and craft me a three-touch re-engagement sequence that reads as a natural continuation of our prior relationship — not a fresh cold outreach. Each touch has its own angle and channel; all three anchor to shared history and give Linda a reason to engage that isn't "I wanted to check in."

## STRUCTURE

1. **Touch 1 — Email (Subject + Body)**
   - Subject line must signal a genuine reason to reach out now — not a generic "Following Up" rehash.
   - Body opens by explicitly referencing a specific moment, concern, or insight from your earlier conversation with Linda — a concrete wedge that proves you were actually in the room. No "I wanted to circle back" or vague "I know things have been busy"; anchor to the actual conversation.
   - Three short paragraphs: (1) the shared-history reference and why it's relevant now, (2) what's changed or what you're seeing in her sector that connects to her prior concerns, (3) a low-friction ask — a reply, a 15-minute call, or a simple yes/no question. Avoid desperation, time-shame language ("I see you've been quiet"), or any text a stranger could send.
   - If your input doesn't supply a specific prior-conversation detail, flag that gap and ask me for one moment or concern Linda raised before you draft.

2. **Touch 2 — LinkedIn DM**
   - 2–3 sentences max. Different hook and angle than the email — not a forwarded summary.
   - Still reads as a re-contact, not a first DM. Grounded in our prior work together, not cold-opener energy.
   - No links, no attachment requests, no explicit callback demand. Human tone.

3. **Touch 3 — Voicemail Script (if applicable)**
   - 20–30 seconds when read aloud. One concrete reason for the call rooted in the revival angle or the shared history — never "just calling to follow up" filler.
   - Leave one question for Linda to sit with; don't demand a callback or oversell.
   - Avoid restating the email or generic voicemail language.

## GROUNDING

- Linda is COO, not CFO. The new CFO is the gatekeeper who paused the deal; Linda may be an ally but is not the person reviewing the engagement.
- The stall is 3+ months old and triggered by CFO review, not disinterest. The revival angle is *why things have shifted* (our senior-only delivery model, the margin-focus ops reset, the success-aligned fee structure, or recent momentum in her sector), not apology for silence.
- Aldermark turns down ~70% of inquiries to stay lean. If relevant, the revival angle can subtly reinforce scarcity — not as a threat, but as a marker that we're selective.
- Mid-market services firms care about margin preservation and operational lean-ness. Linda as COO is the natural owner of both. The CFO review is gatekeeping, but Linda's original concern is still real.
- Avoid: "We're back to following up," "Wanted to check in," shame language about their silence, generic "see what's changed," or references to the 3-month gap as if it's the prospect's problem.

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

