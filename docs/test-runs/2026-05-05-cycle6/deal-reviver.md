# deal-reviver — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 32,394 in / 6,941 out  
**Engine cost (this tool):** $0.0537  

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

**Status:** OK | **Time:** 8510ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3551 | **Out:** 735 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales. Be my cold revival specialist and write me a three-touch re-engagement sequence — email, LinkedIn DM, and voicemail — each tied to the fact that we've already talked. The revival angle is a new data signal or insight that gives me a real reason to resurface now, not just "checking in." Every touch must read like it's from someone she knows, not a stranger.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + three short paragraphs
   - Opens by referencing a specific moment or concern Rachel raised in our original conversation (the VP-of-Sales loop-in, or a deal risk / forecast concern she mentioned) — this is the wedge that separates re-engagement from cold outreach
   - If my input doesn't give you enough detail about what she said or what concern she flagged, ask me for one concrete moment before you draft
   - Middle paragraph ties new data or a signal to that original context — why it's relevant to her situation now
   - Closes with a low-friction ask: a reply, a 15-minute call, or a yes/no
   - Avoid: "circle back," "just checking in," "haven't heard from you," desperation signals, any language a stranger could send

2. **TOUCH 2 — LINKEDIN DM**
   - Two to three sentences max
   - Distinct angle from the email — different hook, different reason to engage
   - Still reads as re-contact (not a first DM), grounded in shared history
   - No links, no attachment asks
   - Human tone — not a forwarded email in DM wrapper

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - The reason for the call must be concrete and immediate — anchored to the new data signal or the revival angle, not generic stalling
   - Leaves one question or insight for Rachel to sit with; no explicit callback demand
   - Avoid: "just wanted to touch base," "following up," restating the email

## GROUNDING

- Rachel flagged a real gate: VP-of-Sales loop-in. That's credible, not a brush-off. The new signal or data point must be relevant to *that* specific stakeholder's concerns (forecast visibility, pipeline health, rep enablement) — not just a generic reason to dial
- The "few days quiet" is fresh enough that you can reference the original context without it feeling stale; don't apologize for the silence
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time — these are the capabilities that matter to a VP of Sales. Anchor the new signal to one of these (forecast accuracy SLA, live pipeline visibility, in-call coaching) if the revival angle leans that way
- If I didn't supply the specific data signal or insight, ask me for it. Don't invent a trigger
- Tone: conversational, confident she'd want to know this, not desperate to get back on her calendar

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

**Status:** OK | **Time:** 7875ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3556 | **Out:** 641 | **Cost:** $0.0054

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Ben at Cascade Logistics after a stalled conversation — integration complexity was the friction point. Build me a three-touch cold revival sequence (email, LinkedIn DM, voicemail) where each touch reads like I've talked to him before, anchored to the integration concern he raised, and gives him a real reason to respond now.

## STRUCTURE

**1. EMAIL**
Subject line + 3 short paragraphs. Must explicitly reference the integration blocker Ben raised — the ERP sync friction that stalled us. Not "checking in"; this is "I heard your concern, and here's what's changed." Close with a low-friction ask (reply, 15-min call, or simple yes/no). Avoid: "circle back," "just checking in," how long they've been quiet, or anything a stranger could plausibly send.

**2. LINKEDIN DM**
2–3 sentences max. Different angle than the email — don't repurpose the same hook. Still reads like a re-contact (acknowledgment that we've talked), not a first-time DM. No link, no attachment ask. Human tone.

**3. VOICEMAIL SCRIPT (if applicable)**
20–30 seconds when spoken aloud. Concrete reason for the call — tied to the integration update or the shared history of his concern, not generic filler. Leaves him with one question to sit with; no explicit callback demand. Avoid: "just wanted to touch base," restating the email.

## GROUNDING

- The integration blocker is your entry point across all three touches. Ben was worried about ERP sync — use that as the warm thread that ties these together, not as history to bury.
- Velara Revenue OS syncs natively with Salesforce and HubSpot; if Ben's ERP friction was about those platforms or something beyond them, anchor to what's actually true. If you need clarity on whether Velara handles his specific ERP concern, ask me.
- "Product or feature update" is your revival angle — treat this as a genuine reason he should re-engage, not a pretext. If I haven't specified what's new, ask me what update or capability shift makes this the right moment to loop him back in.
- No made-up timelines ("last week we shipped," "just launched"). If the update is real and recent, I'll tell you. Otherwise, describe the capability (e.g., "we've deepened our integration layer") without claiming novelty you can't source.
- Avoid desperation energy. No "I know I haven't heard from you," no "I'd love to reconnect," no "just wanted to see if you're still interested." Ben knows he went quiet; treat it as normal deal rhythm, not a gap to apologize for.

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

**Status:** OK | **Time:** 9069ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3549 | **Out:** 736 | **Cost:** $0.0058

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Nina at Thornfield Capital after a budget freeze stalled us in January — three months quiet now. I need a three-touch revival sequence that reads like I know her, not like I'm cold-calling her silence. Each touch has its own voice and channel; together they're a last-try sweep that gives her a real reason to respond without sounding desperate.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - Opens by naming the specific budget-freeze moment or concern she raised in January — the shared history is the only thing that makes this a re-engagement, not a cold email
   - If my input doesn't give you enough detail on what she said or worried about in January, ask me for one specific phrase or concern before you draft
   - Closes with a low-friction ask: a reply, a 15-min call, or a yes/no
   - Avoid: "circle back," "just checking in," "wanted to follow up," desperation, any reference to how long she's been silent, generic stranger-email phrasing

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook and angle than the email — show you've thought about her situation from a new angle, not just repackaged the same ask
   - Reads human and informal; no forwarded-email energy
   - Still feels like a re-contact to someone who knows me (reference to our prior talk or context), not a first DM
   - No links, no attachment asks

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - The real reason for the call is concrete and anchored to the revival angle or our January conversation — not "just calling to follow up"
   - Leaves one question or moment for her to sit with; no explicit "call me back" demand
   - Avoid: "just wanted to touch base," generic stalling language, restating the email

## GROUNDING

- The budget freeze is the frame — January was real. Don't invent a new trigger; work *within* the freeze context (thaw signals, timeline shifts, new priorities under constraint, cost efficiency as budget-friendly angle).
- Velara Revenue OS is the product; anchor to a capability that fits a budget-constrained environment (auto-capture eliminating manual CRM work, forecast precision that saves wasted cycles, rapid deployment with no implementation fees). Pick one — don't scatter.
- Nina at Thornfield Capital: Use her actual role/title if my inputs included it; if not, assume she's a buyer or influencer in the original conversation and keep the language peer-level, not deferential.
- Three months of silence is real. Don't pretend it didn't happen, but also don't flag it as a problem — just reset the conversation as if January's constraint might have shifted.
- "Last try" posture means this sequence should feel definitive (no fourth touch implied), but not pleading. Confidence that the budget environment or her priorities may have changed; no apology for the quiet.

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

**Status:** OK | **Time:** 7621ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3534 | **Out:** 674 | **Cost:** $0.0055

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. Tom went quiet after we talked — he got busy — and I'm reviving him now with a three-touch sequence anchored to new data or a fresh signal. Each touch must read like a re-contact from someone he's already spoken with, not a cold outreach. I need you to be my cold revival specialist and build me three distinct touches (email, LinkedIn DM, voicemail) that feel earned, not pushy — each with its own angle and cadence, each clearly referencing our prior conversation so the wedge is there from the jump.

## STRUCTURE

**1. EMAIL — Touch 1**
Subject line + three short paragraphs. Must explicitly reference a specific moment, topic, or concern Tom raised on our original call — this is the wedge. If you need more detail on what Tom actually said or what we talked about, ask me for one concrete thing he mentioned before you draft. Close with a low-friction ask (reply, 15-min call, or a simple yes/no question). 
- Avoid: "circle back," "just checking in," "wanted to follow up," desperation, references to how long he's been silent, anything a stranger could send.

**2. LINKEDIN DM — Touch 2**
2–3 sentences max. Completely different hook and angle from the email — not a forwarded version of Touch 1. Still reads like a re-contact, not a first DM. No links, no attachment requests. Human voice.

**3. VOICEMAIL SCRIPT — Touch 3 (if applicable)**
20–30 seconds when spoken. The real reason for the call is concrete and immediate — anchored to the revival angle (new data or signal) or the shared history, not generic "just calling to follow up" filler. Leaves one question he can sit with; no explicit callback demand.
- Avoid: "just wanted to touch base," repeating the email, throat-clearing.

## GROUNDING

- Tom went quiet after we talked because he got busy — this is a natural rhythm pause, not a lost deal. Treat the revival as a legitimate re-entry, not a rescue mission.
- The new data or signal angle is your lever. Flag if you need me to name the specific signal or insight that makes this re-contact worth Tom's time — vague revivals die. If I don't name it, ask me what's changed or what we've learned since we last spoke.
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk before it's fatal — anchor the revival to a concrete insight Tom would care about (pipeline visibility, forecast accuracy, deal momentum) if it lands. Don't invent the signal; ask me if it's thin.
- Tone: collaborative, not transactional. Tom knows us. This is "thought of you because X" not "checking in."
- Each touch must assume prior relationship — no cold-email energy, no generic "I've been following your company" moves.

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

**Status:** OK | **Time:** 10875ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3570 | **Out:** 877 | **Cost:** $0.0064

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, a RevOps lead at Stellaris who went quiet after our initial conversation because their manager was out. They liked the platform but couldn't greenlight without approval. I need a three-touch revival sequence that acknowledges our prior conversation, plants a concrete reason to revisit now (anchored to a product or feature update), and earns a second conversation without sounding desperate. Each touch lives on its own channel and reads like it's coming from someone who's talked to them before — never cold.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line: direct and reference-specific (not "Following Up" or time-based)
   - Three short paragraphs. Open with a concrete callback to what Devon said in our last conversation — the manager's PTO block, the thing they liked about the platform, or a specific concern they named. No "I wanted to follow up"; the shared moment IS the opener.
   - Middle paragraph: introduce the actual reason to revisit now (product or feature update). Concrete and relevant to RevOps work — not hype, not "we've been busy shipping stuff." If I haven't supplied the specific update, ask me what update or capability shift I want to anchor to.
   - Close with a low-friction ask: a reply, a 15-min call, or a simple yes/no question. Nothing that demands a meeting.
   - Avoid: "circle back," "just checking in," time-shame ("been a few weeks"), generic urgency, or language a stranger could send.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Distinct angle from the email — different hook, different lens into why now.
   - Reads human and conversational — assumes prior contact, not a forwarded email. No link, no attachment ask, no meeting demand.
   - Anchored to the revival angle (the update or feature, or a shifted business context that matters to Devon).

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when spoken aloud. Not a voicemail reading back the email.
   - The reason for the call must be concrete and immediate — tied to the revival angle, Devon's original context, or the update. Avoid "just wanted to touch base" or generic catch-up language.
   - Leaves one question or observation for Devon to sit with. No explicit callback demand or urgency pressure.

## GROUNDING

- **Devon's context:** RevOps lead, manager on PTO was the blocker, liked the platform but couldn't move unilaterally. This is the wedge — their environment has shifted, manager is back, and you have a real reason to land on their desk again.
- **Revival angle:** product or feature update. If you're anchoring to a specific Velara capability (e.g., auto-capture eliminating manual CRM work, forecast accuracy SLA, speed to live, in-call coaching, native sync), name it clearly so the assistant can make it concrete and relevant to RevOps work. If the update is vague or you haven't specified, the assistant will ask.
- **Tone:** respectful of their time, confident without pushiness. You've talked before; this isn't a stranger cold-calling. No apologies, no "sorry for reaching out again," no time-shaming.
- **What kills re-engagement:** "I wanted to follow up," "It's been a while," "Just checking in," "We're on a mission," any language a cold outreach specialist would use, or retreading the exact same hook from the first conversation.
- **What earns a second look:** a specific callback to their last conversation, a concrete reason why now matters, and a low-friction invitation.

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

**Status:** OK | **Time:** 10437ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 | **Out:** 837 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. Sara's a VP F&B at Stratton Hotel Group and we talked about a kitchen renovation — the project got pushed from Q1 to Q3, but fit was never the issue. I need you to craft a three-touch revival sequence that re-engages her around the new timeline, each touch anchored to our prior conversation and distinct from the last. Every touch reads like it's from someone who already knows her context, not a cold restart.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that references the Q3 timeline or the renovation itself — signals continuity without generic "follow-up" language
   - Lead paragraph: acknowledge the Q3 shift directly (the moment she mentioned timing was the only hold-up), then pivot to a concrete reason to reconnect now (a new capability, an efficiency angle relevant to multi-property operations, or a market signal tied to her footprint). The reason must feel like it's *new information*, not recycled old pitch.
   - Middle paragraph: one sharp point — anchor to the space-recovery or energy/operational angle most relevant to a VP F&B managing 8 properties. Keep it tight; no feature dump.
   - Close: low-friction ask (a reply, a brief call, or a yes/no on timing). Avoid desperation signals, "just wanted to circle back," or any reference to silence.

2. **TOUCH 2 — LINKEDIN DM**
   - A distinct angle from the email — not a repackaged version. Should still signal continuity (reference her role, the properties, or the original project context), but hit a different nerve. Two to three sentences max, human voice, no links or asks for attachments.

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - 20–30 seconds when spoken. One concrete reason tied to the Q3 timeline or the revival angle — something that justifies the call. Leaves one question for her to sit with; never demand a callback or restate the email. Avoid "just calling to touch base" or filler.

## GROUNDING

- **Prior conversation anchor:** If your inputs don't give me a specific moment or concern from the original call (a question she asked, an objection she raised, a number she cared about), ask me for one before drafting Touch 1. Without it, re-engagement collapses into cold outreach.
- **Multi-property angle:** Sara manages 8 properties. Any efficiency gain (space, energy, training speed) scales across the footprint — emphasize the operational compound, not a single-unit case.
- **Q3 timing:** The project moved to Q3. Use this as the natural re-engagement hook — it's a real date, not invented urgency. If I have intel on Q3 budget windows or planning cycles at Stratton, flag it and I'll feed it in.
- **Revival angle — New Data or Signal:** The reason to reach out must feel like *new* information on my side, not another pitch. If I haven't supplied a concrete signal (industry trend, a peer reference, a capability release, a market shift), ask me what the trigger is. Don't invent one.
- **Tone:** Collaborative, not desperate. She said fit was the issue — timing was. Honor that. You're checking back in because conditions have shifted, not because I'm thirsty.
- **Avoid:** "Circle back," "just checking in," "saw you were quiet," "wanted to reconnect," "get back on your radar," or any language that signals desperation or references her silence.

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

**Status:** OK | **Time:** 8898ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 | **Out:** 766 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an Executive Chef at a Bay Area restaurant group who chose a competitor six months ago but expressed frustration with their service response during a recent breakdown. Build me a three-touch revival sequence that reads as a real re-contact — each touch anchored to that shared frustration, not generic "just checking in" energy. This is my last deliberate outreach before I step back; position it that way.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs
   - MUST open by naming the specific service complaint Diego raised (the breakdown response lag) — this is the wedge that proves we talked
   - Body frames the Northwind service advantage (same-day on-site response nationwide) as the direct answer to what he ran into, not as a feature list
   - Anchor to his world: a 4-restaurant operation where kitchen downtime stacks pressure across locations
   - Close with a low-friction ask — a reply, 15-min call, or simple yes/no question
   - Avoid: "circle back," "just wanted to follow up," "I know it's been a while," desperation signals

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Different hook from the email — don't summarize or forward it
   - Still reads as a re-contact, not a first DM (reference the prior conversation or the pain point, not "I noticed you work at...")
   - No link, no attachment, no meeting request
   - Conversational tone — feels like a human message, not a forwarded email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken
   - Anchor to the revival angle and shared history (the service breakdown frustration), not generic "just following up" filler
   - The real reason for the call must be concrete and immediate
   - Leave one question for Diego to sit with — don't demand a callback
   - Avoid: "just wanted to touch base," restating the email, "I know you're busy"

## GROUNDING

- **Anchor Point:** Diego's off-the-record frustration with the Rational's service response time during a recent breakdown is the ONLY reason this sequence exists. Without it, this is just another cold email. Lead every touch with that shared moment.
- **Northwind's differentiator here:** Same-day on-site service nationwide — the direct inverse of what he just experienced. This is not a feature; it's the solution to his stated problem.
- **4-Restaurant Context:** Kitchen downtime doesn't affect one unit; it cascades. Frame the service guarantee as operational insurance across the group, not just one oven fix.
- **Avoid:** Congratulating him on the Rational choice, passive-aggressive "I know you went another direction," generic combi oven specs, any number or statistic not in my inputs, "last try" language that sounds desperate or conditional.
- **Tone:** Respectful, direct, anchored to what he said — not apologetic, not salesy. You're reminding him of a real conversation and offering a real alternative to the pain he just hit.

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

**Status:** OK | **Time:** 10294ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3660 | **Out:** 840 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm re-engaging Greg, CEO of Helmsdale Foundry, a deal that stalled when his PE sponsor's portfolio priority pulled his attention in Q1. Be my cold revival specialist and give me a three-touch sequence (email, LinkedIn DM, voicemail) that reads like it's coming from someone who already has history with him — not a stranger circling back. Each touch needs a distinct angle, but all three anchor to our near-close status and the specific reason the deal went quiet.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that references the portfolio priority or timing concern (the thing that actually stalled us), not generic follow-up language.
   - First paragraph: Call back to a concrete moment from our conversation — a specific operational challenge he flagged, a margin leak he mentioned, or the PE's push that hijacked his Q1. This is the wedge that proves we talked before.
   - Middle paragraph: Light acknowledgment that leadership bandwidth tightened; position the revival angle (product update, new capability, or a reason the timing has shifted in his favor) as the actual reason for the reach-out — not an excuse to circle back.
   - Close: Low-friction ask — a reply, a 15-minute call, or a simple yes/no on whether now is worth revisiting.
   - Avoid: "just wanted to check in," "circle back," "just following up," "wanted to touch base," any reference to how long he's been silent, or desperation signals.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Different hook from the email — don't repeat the same angle.
   - Still reads as re-contact, not a first DM to a stranger. Lean on a detail from the prior conversation or a shift in his world that gives the message weight.
   - No link, no attachment, no ask for a meeting. Reads human and conversational.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud. The real reason for the call must be concrete and immediate — anchored to the revival angle or something from our history, not filler like "just calling to follow up."
   - Leave one question or observation for him to sit with; don't demand a callback.
   - Avoid: "just wanted to touch base," restating the email, generic follow-up energy.

## GROUNDING

- **Shared history is the load-bearing wall.** Every touch must reference or evoke the prior conversation — a specific concern he raised, the PE portfolio priority, the near-close status, or a detail from your original call. If your notes don't contain a specific moment, ask me for one before drafting.
- **Revival angle:** You're reaching out because something has shifted (product capability, timing, industry pattern, his world) — not because you want to "see if he's interested again." The angle is the real reason.
- **Helmsdale Foundry is PE-backed industrial.** Anchor to operational margin recovery and leadership bandwidth constraints — these are the world he lives in. Avoid: generic "just checking in," platitudes about "partnership," anything that sounds written to 100 prospects.
- **Two to four weeks is recent enough that "we haven't talked in forever" rings false.** He remembers the conversation. Treat him that way.
- **If you need a specific product update, capability detail, or industry trend to make the revival angle credible, ask me for it.** Don't fabricate the reason he should care.

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

**Status:** OK | **Time:** 9468ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3657 | **Out:** 835 | **Cost:** $0.0063

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I've talked with Linda, the COO at this $40M family-owned services business, before — but the deal went quiet when their new CFO came in three months ago and started vetting outside engagements. I'm reviving this now because I have a legitimate new angle to re-engage her with. Be my cold revival specialist and craft me a three-touch re-engagement sequence where each touch reads like it's coming from someone who knows her and the original conversation — not a stranger sending a cold email. Every touch must anchor to our prior history or the new revival angle to earn her attention again.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals "this is new info, not a repeat"
   - Open by naming a specific moment, concern, or topic from your original conversation with Linda — this is the wedge that separates re-engagement from a cold reach. If you don't have enough detail on that conversation, ask me for one concrete moment before you draft.
   - Body: 3 short paragraphs. First paragraph anchors the shared history. Second paragraph introduces the new angle (what's changed since you last talked). Third paragraph is a low-friction ask — a reply, a 15-minute call, or a simple yes/no question.
   - Avoid: "circle back," "just checking in," "wanted to follow up," how long they've been quiet, desperation signals, or anything a stranger could plausibly send.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Completely different hook and angle than the email — don't forward email logic to Slack.
   - Still reads as a re-contact, not a first DM from someone Linda's never heard of.
   - No links, no attachment asks. Human voice.

3. **TOUCH 3 — VOICEMAIL (if applicable)**
   - 20–30 seconds when read aloud.
   - The real reason for the call must be concrete and immediate — tied to the revival angle or shared history, not "just calling to follow up" filler.
   - Leave one question for Linda to sit with. No explicit callback demand.
   - Avoid: "just wanted to touch base," restating the email, generic pleasantries.

## GROUNDING

- **Prior conversation is the anchor.** Linda knows who you are and what you pitched. The CFO block isn't new to her — she lived it. Your new angle is the permission to re-enter her world.
- **The new CFO is an obstacle, not a selling point.** Don't frame this as "now that your CFO is here, you should talk to us." Frame it as "here's why the conversation we started is more relevant now" — and anchor that to the revival angle you're deploying.
- **Family-owned, $40M services business.** Likely lean on operational efficiency, cash preservation, owner wealth protection — not enterprise scale talk. Keep language tight and operator-focused.
- **Three months is long enough to be a real restart.** Don't pretend no time has passed. The restart needs justification: a new insight, a data point, a capability, or a market shift that makes the original problem sharper.
- **Revival angle is "Product or Feature Update."** This isn't a new competitor threat or an emergency trigger — it's something about what we do that's changed or that Linda didn't know about the first time. Be specific about what's new; don't be vague ("we've evolved," "we've been thinking about this"). Anchor to concrete capability, not sentiment.

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

