# deal-reviver — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 28,272 in / 6,651 out  
**Engine cost (this tool):** $0.0492  

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

**Status:** OK | **Time:** 11912ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3093 (read=0, write=0) | **Out:** 709 | **Cost:** $0.0053

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed her VP of Sales in the loop. Be my cold revival specialist and craft a three-touch re-engagement sequence — email, LinkedIn DM, and optional voicemail — that gives me a real, concrete reason to reach back out. Each touch must land as a re-contact (we've talked before), not a cold opener. The wedge is a new signal or data point tied to our original conversation, not just time passing.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by naming a *specific moment or concern* from our prior call — the thing that made her say she needed to loop in her VP. This is the wedge; without it, the email reads cold
   - If you lack that detail from my inputs, ask me for one concrete moment before drafting
   - The new angle (data, signal, insight) lands in paragraph 2 — tied directly to what she surfaced in our conversation, not generic
   - Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no — nothing that demands labor
   - Avoid: "circle back," "just checking in," "I know you've been quiet," or any phrasing a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct hook from the email — different angle, different tone
   - Still reads as a re-contact (you and I have talked), not a new DM thread
   - No link, no document request
   - Human voice — not a copy-paste from the email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when read aloud
   - The reason for calling must be concrete and immediate — anchored to the revival angle or shared history, not "just wanted to follow up" filler
   - Leave one question for Rachel to sit with; don't demand a callback
   - Avoid: "just touching base," restating the email, generic pleasantries

## GROUNDING

- Rachel's blocker was explicit: she needed VP buy-in. The revival angle must respect that — position the new data or signal as *useful for her VP conversation*, not as pressure on her
- "A few days" quiet is short; this isn't a stale deal. The tone should feel natural, not urgent or desperate
- Velara Revenue OS solves forecast accuracy and deal risk visibility — anchor the new signal to one of these if it sharpens the angle (e.g., "pipeline volatility data" ties to risk, "forecast confidence" ties to accuracy)
- She hasn't said no — she's waiting. Treat her as an active prospect in a natural hold pattern, not a cold suspect
- Avoid: "reconnecting," "circling back," "wanted to reach out," "just following up," any language that acknowledges the silence as a problem

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

**Status:** OK | **Time:** 7745ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3098 (read=0, write=0) | **Out:** 669 | **Cost:** $0.0052

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Ben at Cascade Logistics went quiet after we hit a wall on integration — he wasn't confident the platform would sync cleanly with their ERP. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that gives me a real, concrete reason to reach back out. Every touch must feel like it's from someone who's already talked to Ben — not a stranger sliding into his inbox. The revival angle is a product or feature update that directly addresses the integration concern he raised.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + three short paragraphs
   - Open by explicitly referencing the ERP integration concern Ben raised — the specific friction point from your conversation, not a generic "I wanted to follow up"
   - Paragraph 1: anchor to the shared history and the blocker; Paragraph 2: introduce the update or capability that unblocks it; Paragraph 3: low-friction ask (reply, 15-min call, or simple yes/no)
   - Close without urgency language, desperation, or "checking in" phrasing
   - If my input doesn't give you enough detail about what Ben said on that call, ask me for one specific moment or concern before you draft

2. **TOUCH 2 — LINKEDIN DM**
   - Two to three sentences max
   - Different hook and angle than the email — don't forward the email logic into a DM
   - Still reads as a re-contact to someone you've already spoken with, not a cold first message
   - No link, no attachment ask; human voice throughout

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Twenty to thirty seconds when spoken aloud
   - Anchor to the revival angle or the shared history — the real reason for the call must be concrete and immediate, not "just wanted to touch base"
   - Leave one question or thought for Ben to sit with; no explicit callback demand
   - Avoid restating the email or using stale "following up" phrasing

## GROUNDING
- Ben's core friction was ERP sync — keep this front and center across all three touches; the update or feature must speak directly to that doubt
- This is re-engagement, not cold outreach. Every touch assumes prior context and prior conversation; Ben should never feel like he's hearing from a stranger
- Velara Revenue OS must be named in at least one touch
- Avoid: "circling back," "just checking in," "wanted to reconnect," references to how long he's been quiet, or any tone that reads as desperation
- If the product or feature update detail isn't in my inputs, anchor to standard capability patterns (e.g., native sync, simplified setup) and flag it to confirm with me before you draft
- The ask in each touch should be low-friction and clear — don't bury it or make it ambiguous

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

**Status:** OK | **Time:** 8800ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3091 (read=0, write=0) | **Out:** 760 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze stopped our conversation in January. Be my cold revival specialist and craft a THREE-TOUCH RE-ENGAGEMENT SEQUENCE that treats Nina as someone I've already talked with — not a cold prospect. Each touch must earn its existence by referencing genuine shared history (the budget-freeze conversation, a specific concern she raised, or a moment from our prior call) and give her a concrete reason to re-engage now. This is my last real attempt, so the sequence should feel respectful, specific, and built on what we actually discussed — not generic follow-up noise.

## STRUCTURE

1. **Touch 1: Email** — Subject line + 3 short paragraphs
   - Open by naming a specific moment, concern, or thing Nina said in our January conversation — the wedge that proves this isn't a cold email
   - State the real reason you're reaching out now (not "checking in" — something concrete that changed or something we should revisit given the freeze context)
   - Close with a low-friction ask: a reply, a 15-min call, or a simple yes/no question
   - Avoid: "circle back," "just wanted to follow up," desperation, references to time elapsed, or generic re-contact language

2. **Touch 2: LinkedIn DM** — 2–3 sentences max
   - A distinct angle from the email — don't forward the email to LinkedIn
   - Still reads as a re-contact (not a first-time DM), anchored to shared history or the revival angle
   - No links, no attachment requests
   - Human tone — conversational, not corporate

3. **Touch 3: Voicemail Script (if applicable)** — 20–30 seconds spoken
   - The real reason for the call must be concrete and grounded in the revival angle or shared history (not "just calling to follow up")
   - Leave one question for her to sit with — don't demand a callback
   - Avoid: "just wanted to touch base," re-stating the email, generic filler

## GROUNDING

- **Shared history is the anchor.** If my input doesn't give you enough detail from the January conversation (the specific budget concern, a question she asked, a pain point she named), ask me for one concrete moment before you draft Touch 1. Don't fabricate prior context.
- **Budget freeze is the context, not the hook.** Nina cited a freeze in January — that's why she went quiet, not why she should re-engage now. The revival angle must be *something else* that makes reaching back out make sense (a new trigger, a change in her world, a reason the conversation matters now).
- **Velara Revenue OS is the product.** When the real reason for re-engagement touches on forecast accuracy, pipeline visibility, or deal risk — lean on those capabilities. Don't force the product into every touch; it earns its mention through the reason for the call.
- **This is the last try.** Tone should be confident and specific — not desperate, not overly casual. Respect her silence; don't reference "3 months" or apologize for reaching out.
- Avoid buzzwords like "synergy," "circle back," "touch base," "reach out," "value-add," "best practices."

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

**Status:** OK | **Time:** 6683ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3076 (read=0, write=0) | **Out:** 633 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. Tom went quiet on me 2–4 weeks ago after an initial conversation—he got busy. I'm reaching back in with a concrete reason to re-engage tied to a new data signal or capability insight relevant to what we discussed. Be my cold revival specialist and craft me a three-touch re-engagement sequence where each touch feels like I'm picking up a real thread from our first call, not treating him like a stranger.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Open by anchoring to a specific moment, topic, or concern Tom raised in our first conversation — the shared-history reference is what makes this a re-engagement, not a cold email
   - If you lack that detail from my inputs, stop and ask me for one concrete example from our call before drafting
   - Introduce the new data signal or capability insight that prompted the outreach — this is the real reason for the re-contact
   - Close with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," desperation signals, references to how long he's been silent, or anything a stranger could plausibly send

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct from the email — a different hook, different angle, but still unmistakably a re-contact
   - No links, no attachment asks
   - Reads human and conversational — not a forwarded version of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Anchor to the revival angle or a concrete detail from our first call
   - Leave one genuine question for Tom to sit with — no explicit callback demand
   - Avoid: "just wanted to touch base," generic follow-up filler, or restating the email

## GROUNDING

- Tom got busy after a real first conversation; I'm not cold. Every touch must feel like I have context and a reason, not generic outreach.
- The new data signal or capability insight is my real re-engagement lever — it's the reason I'm worth Tom's time to respond to.
- Re-engagement is highest-signal when it acknowledges shared history. Without that thread, this collapses into cold outreach.
- Velara Revenue OS auto-captures deal activity, surfaces deal risk in real time, and delivers in-call coaching signals — anchor to whichever resonates most with Tom's original concern.
- Keep all three touches distinct in tone and angle. Don't repeat the same hook three times.

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

**Status:** OK | **Time:** 10683ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3112 (read=0, write=0) | **Out:** 829 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, RevOps lead at Stellaris, who went quiet after initial interest — his manager was on PTO and blocking any move forward. I need a three-touch revival sequence that feels like a genuine re-contact (not a cold opener), anchored to a concrete product or feature update that gives him a real reason to revisit the conversation now. Each touch should read as if we've already talked; the revival angle is the wedge that earns a second look.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals a concrete update or development, not "checking in"
   - Lead paragraph explicitly references the prior conversation — the PTO blocker, the "looks great" signal, or the decision dynamic we discussed — as your toehold back in. Without this shared-history anchor, the email reads cold
   - Second paragraph: the real reason to re-engage now (the product or feature update relevant to his RevOps world). Avoid vague "thought you'd want to know"; be specific about why this matters to *his* situation or the blocker that existed
   - Third paragraph: low-friction ask (reply with a quick yes/no, 15-minute call, or specific next step). No urgency language, no "just want to touch base," no reference to the length of silence
   - Optional closer that feels natural — not desperate

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences maximum. Completely different hook from the email — don't parrot the message
   - Still reads as a re-contact (reference the prior conversation or the original blocker), but lighter, more casual, more "hey, remembered you were evaluating this"
   - No link ask, no attachment, no CTA pressure. Just human-to-human re-entry

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - 20–30 seconds when read aloud
   - Open with the concrete reason for the call — the update, the new angle, the thing that changed — anchored to the revival dynamic or shared history. Not "just calling to follow up"
   - Leave him with one real question or thought to sit with; don't demand a callback
   - Avoid restating the email, avoid generic "wanted to touch base," avoid any I'm-checking-on-your-silence tone

## GROUNDING

- Devon's actual blocker was his manager's PTO — that's the shared history. Lead Touch 1 with that; it signals you listened and remember the real friction, not a generic follow-up
- The revival angle is a **product or feature update** — keep it concrete and tied to RevOps workflows. Velara Revenue OS's real-time pipeline intelligence and auto-capture of deal activity matter to RevOps leaders; anchor the update to one of those capabilities or a workflow gap he likely cares about
- Avoid: "circling back," "just wanted to follow up," "haven't heard from you," "it's been a few weeks," "just checking in," desperation. This is a re-contact with a reason, not a Hail Mary
- Devon is a RevOps lead — he cares about data quality, forecasting reliability, and operational efficiency. The update should speak to one of those worlds, not generic "thought you'd want to know"
- If the assistant needs more specificity about which Velara capability or product update anchors the revival, it should ask you before drafting. Don't let it invent an update; anchor to what's actually true in your world right now

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

**Status:** OK | **Time:** 8789ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 771 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara, VP F&B at Stratton Hotel Group, went quiet on a kitchen renovation project that shifted from Q1 to Q3 — timing was the only objection. I'm re-engaging her now with a concrete reason to circle back (new data or signal). Be my cold revival specialist and craft a three-touch sequence that reads as written by someone who's already talked to her — every touch anchored to our prior conversation or a fresh trigger that justifies reaching out now, not a cold restart.

## STRUCTURE

**1. EMAIL — Touch 1**
- Subject line + 3 short paragraphs. Must explicitly reference a specific moment, topic, or concern Sara raised in our original call — the shared history is what separates this from a cold email. Do not draft this touch until you have that detail from me; ask me for one concrete memory from the conversation if my input doesn't supply it.
- Body must make clear why I'm reaching out *now* (what changed, what I learned, what matters to her timeline) — not "I wanted to follow up."
- Close with a low-friction ask: a reply, a 15-min call, or a simple yes/no question.
- Avoid: "circle back," "just checking in," "haven't heard from you," desperation signals, or anything a stranger could send.

**2. LINKEDIN DM — Touch 2**
- 2–3 sentences max. Distinct hook from the email — different angle, different entry point.
- Still reads as re-contact, not a first DM to a stranger. No links, no attachment asks.
- Tone: conversational and human, not a forwarded version of the email.

**3. VOICEMAIL SCRIPT — Touch 3 (if applicable)**
- 20–30 seconds when spoken aloud. Anchor to the revival angle or a moment from our prior talk — concrete and immediate.
- Leave one question for Sara to sit with; do not demand a callback.
- Avoid: "just wanted to touch base," generic follow-up language, or rephrasing the email.

## GROUNDING

- Sara's objection was timing, not fit or product — the Q3 push reopens the door when that timeline approaches or if project momentum shifts earlier.
- The Northwind XR-Series replaces four pieces of equipment and recovers kitchen line space; for a multi-property group managing renovation budgets, this footprint and capex efficiency are material to phasing decisions.
- "New data or signal" should anchor to something concrete and timely: a case study from a similar hospitality operator, a shift in her budget cycle, an industry report on kitchen ROI, a competitor's move, or a new constraint (staffing, energy costs, code changes) that affects her timeline — not a generic "I just wanted to check in." If my input doesn't specify the signal, ask me what has changed or what you've learned that justifies reaching out now.
- Multi-property operators care about consistency, training burden, and service reliability across locations. The nationwide same-day service and line-staff training advantage (no culinary background required) matter to her scale.
- Avoid: buzzwords ("circle back," "synergy," "touch base"), generic hospitality clichés, and any implication that she should feel bad for going quiet.

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

**Status:** OK | **Time:** 9194ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 714 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reviving a stalled deal with Diego, an executive chef at a Bay Area restaurant group who chose a competitor six months ago but flagged a service frustration off-the-record. Be my cold revival specialist and craft me a three-touch re-engagement sequence — each touch as its own labeled section — where every piece reads like it's coming from someone who's already talked to Diego, not a stranger. The shared history (his service complaint) is my wedge. Each touch needs a distinct hook and a low-friction ask, all grounded in the real reason I'm reaching back out: his pain point with the competitor's support network, not generic follow-up filler.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Must explicitly reference the service-response frustration Diego mentioned — that specific pain point is the reason I'm writing now, not "just following up"
   - Close with one low-friction ask: a reply, a 15-minute call, or a simple yes/no question
   - Avoid: "circle back," "just checking in," "wanted to touch base," any reference to how long they've been quiet, or desperation-signaling language

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Distinct from the email — different angle, different hook, but still reads as re-contact (he knows me)
   - No link, no attachment ask
   - Conversational and human — not a forwarded version of the email

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud
   - The real reason for the call is concrete and tied to his service experience or the revival angle — not generic "just calling to follow up"
   - Ends with one question or thought for him to sit with
   - Avoid: "just wanted to touch base," restating the email, or any explicit callback demand

## GROUNDING

- Diego's off-the-record service complaint is the only lever I have; it's genuine and specific, so it anchors every touch — if I lose it, the sequence feels cold
- My product's same-day on-site service nationwide is the differentiator that directly counters his frustration; make sure the revival angle connects his pain to that capability, not just "we're different"
- He chose Rational six months ago, so he's bought and installed — I'm not asking him to rip and replace; I'm planting a seed for future conversation or a use-case where a second unit makes sense
- No made-up timeline details (e.g., "last Tuesday," "next quarter") — anchor only to what I've given you
- Avoid vendor-comparison jargon or defensive positioning ("unlike other brands") — let his frustration speak for itself
- The "Last Try" calibration means this is my final touch before I let him go; tone should be respectful and genuine, not desperate or aggressive

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

**Status:** OK | **Time:** 8162ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 (read=0, write=0) | **Out:** 711 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I have a prospect, Greg at Helmsdale Foundry, who was nearly closed but went silent when his PE sponsor reprioritized. Be my cold revival specialist and craft a three-touch re-engagement sequence that reads as a real conversation resuming — not a cold outreach. Each touch must anchor to our prior talk and the reason things stalled; Touch 1 is an email with subject line and three short paragraphs; Touch 2 is a LinkedIn DM distinct from the email; Touch 3 is a 20–30 second voicemail script if applicable. The sequence should land the revival angle (a product or feature update relevant to his situation) without sounding manufactured.

## STRUCTURE

**1. EMAIL — Touch 1**
- Subject line + three short paragraphs
- Must explicitly call back a specific moment or concern from your conversation with Greg — not a generic "following up." If you lack that detail, ask me for one before drafting.
- The body should reference why things stalled (PE sponsor bandwidth) and how it shifts the math now — treat this as connective tissue, not apology
- Close with a low-friction ask: a one-line reply, a 15-minute call, or a simple yes/no
- Avoid: "circle back," "just checking in," "haven't heard from you," desperation signals, or anything a stranger could plausibly send

**2. LINKEDIN DM — Touch 2**
- 2–3 sentences max
- Different hook and angle than the email — don't forward the email as a DM
- Still reads as a re-contact, not a first-time message
- No links, no attachment requests
- Human tone: conversational, not templated

**3. VOICEMAIL SCRIPT — Touch 3**
- 20–30 seconds when read aloud
- Label as "if applicable"
- The real reason for the call must be concrete and tied to the revival angle or shared history — no "just calling to touch base"
- Leaves one open question for Greg to sit with; no explicit callback demand
- Avoid restating the email or generic filler

## GROUNDING

- Greg and Helmsdale Foundry are PE-backed industrial — our core market
- The stall is real and specific: PE sponsor pulled Q1 bandwidth, not disinterest
- The revival angle is a product or feature update — anchor it to how it addresses the bandwidth constraint or shortens the path to margin recovery
- No timeline claims ("we've updated the process since we last spoke"), no statistics or percentages not in my inputs, no invented details about what the sponsor prioritized
- The Aldermark 12-Week Operations Reset delivers working fixes in 12 weeks, not recommendations — use that as the credibility anchor if it sharpens the angle
- Avoid corporate-speak buzzwords ("synergize," "leverage," "touch base," "circle back," "world-class"); keep it direct and operational
- Greg was warm and nearly signed — assume intent; don't re-pitch from cold

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

**Status:** OK | **Time:** 9466ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 (read=0, write=0) | **Out:** 855 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. Linda, the COO of a $40M family-owned services business, went cold on us 3+ months ago when their new CFO started reviewing outside engagements. I'm reviving this deal with a multi-touch sequence that leans on a product or feature update as the real reason to re-engage. Each touch must read as if I've already talked to Linda — anchored to our prior conversation, not cold outreach. I need three distinct touches (email, LinkedIn DM, voicemail) that feel like legitimate re-contact, not desperation.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals re-contact (not "checking in" or generic follow-up language)
   - Three short paragraphs. Paragraph 1: call back one specific moment, concern, or insight from our prior conversation — this is the wedge that proves we talked before
   - Paragraph 2: introduce the product or feature update as the real reason we're surfacing now — tie it directly to the problem or opportunity Linda cared about
   - Paragraph 3: low-friction close (reply, 15-min call, yes/no question). Avoid "circle back," "just wanted to touch base," timing complaints, or desperation signals
   - If the rep's input doesn't supply a specific moment or concern from the original call, pause and ask the rep for one concrete detail before drafting

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Completely different angle and hook from the email — not a copy-paste
   - Must still feel like re-contact (reference something from our history or the update), not a first DM to a stranger
   - No link, no attachment ask. Human tone — conversational, not forwarded corporate language

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Real reason for the call is concrete and immediate — anchored to the revival angle or our shared history, not filler ("just calling to follow up," "wanted to touch base")
   - Leave one question for Linda to sit with; don't demand a callback or close hard
   - Avoid restating the email or generic voicemail clichés

## GROUNDING

- **Prior conversation is the asset.** Without a specific moment or concern from the original call, the email collapses into cold outreach. Anchor Touch 1 to something Linda said, not to how long she's been quiet.
- **The CFO is the gating factor.** This isn't about Linda forgetting us — it's about a new stakeholder locking down spend. The revival angle must feel like it earns the CFO's attention too (or at least doesn't trigger a "we're locked down" reflex).
- **"Product or feature update" is the wedge.** Frame the update as new information that changes the equation for their specific situation, not as a generic feature drop. Tie it to the margin or operations challenge Linda originally cared about.
- **Family-owned, $40M services business.** These tend to be lean and cash-conscious. Avoid enterprise-consultant language; speak to real operational bleeding, not transformation theater.
- **Senior-only delivery and working fixes by week 12** are our strongest differentiators — anchor if relevant, but don't oversell; the update itself is the hook.
- **Avoid:** "It's been a while," "wanted to circle back," "just checking in," "I know you've been busy," generic "excited to reconnect," or anything that sounds like it could be sent to a prospect you've never talked to.

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

