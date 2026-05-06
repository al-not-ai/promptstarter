# deal-reviver — stress test results

**Run:** 2026-05-04-cycle2b  
**Cases:** 9 (9 OK)  
**Tokens:** 29,320 in / 7,369 out  
**Engine cost (this tool):** $0.0529  

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

**Status:** OK | **Time:** 10819ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3207 | **Out:** 858 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Rachel at Meridian Analytics after our conversation stalled when she said she needed to loop in her VP of Sales — then went silent. I need a three-touch revival sequence (email, LinkedIn DM, voicemail) that reads as a genuine re-contact, not a cold opener. Each touch must anchor to our prior conversation or surface a new signal that gives Rachel a real reason to pick this back up with her VP.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that's specific to Velara Revenue OS or Meridian's pipeline, not generic ("just checking in")
   - Opener explicitly references the moment Rachel mentioned looping in her VP — not "I wanted to follow up" but the actual exchange or concern she raised
   - Body: 3 short paragraphs max. Para 1 = shared history anchor. Para 2 = new signal or insight tied to the revival angle. Para 3 = low-friction ask (reply, 15-min slot, or simple yes/no)
   - Close: professional, no desperation — avoid "circle back," "just circling," time-shaming, or any language a stranger could send
   - **If the rep's input doesn't supply a specific moment or concern from the original call, ask me for one before drafting.**

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences, distinct hook from the email opener
   - Still reads as re-contact (Rachel will recognize context), not first-time outreach
   - No links, no attachment asks, no forwarded email energy
   - Human, conversational — something Rachel would see and think "oh, this is the Velara person"

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label as voicemail; write as spoken script, ~20–30 seconds when read aloud
   - First 5 words must anchor to the revival angle or shared history — real reason for the call, not "hey Rachel, just touching base"
   - Body: brief, single observation or signal tied to why now
   - Close: one question Rachel sits with — no explicit callback demand or "call me back ASAP"
   - Avoid: restating the email, "just wanted to touch base," generic voicemail energy

## GROUNDING

- Rachel's blocker was her VP of Sales — the revival sequence assumes she either hasn't looped them in yet, OR looping them in is the actual reason to re-reach. Frame the new signal as something that makes that conversation easier or more urgent for her to have.
- "New Data or Signal" is the revival angle — this means a genuine insight tied to Velara Revenue OS (forecast accuracy, pipeline visibility, in-call coaching, CRM automation) that Meridian Analytics could benefit from, not a made-up trigger. If the rep has specific context about Meridian's pipeline challenges or the VP's priorities, anchor to that; if thin, use standard patterns for why pipeline intelligence matters to a sales leader with manual CRM problems.
- Meridian Analytics is the named company — use it, verify tone fits an analytics/data-forward buyer, but do not fabricate details about their revenue, size, or stack.
- Rachel raised a legitimate objection (VP loop-in); this sequence respects that blocker and makes looping the VP in *easier*, not harder.
- Avoid: generic sales language ("synergy," "leverage," "circle back," "touching base"), time-shaming, self-pity, or any signal that screams "you ghosted me." Tone is matter-of-fact peer — Rachel went quiet, and I have a real reason to reach back.

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

**Status:** OK | **Time:** 9573ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3212 | **Out:** 768 | **Cost:** $0.0056

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform. I'm reviving a stalled deal with Ben at Cascade Logistics where integration complexity (specifically ERP sync) blocked us before. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that feels like it's coming from someone who knows what we discussed, not a cold restart. Every touch must reference our prior conversation or the specific concern that stalled it — that shared history is what makes this a revival, not a new cold sequence.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals continuity, not a generic re-check-in
   - Opener must explicitly call back the ERP integration concern Ben raised (the actual blocker) — this is the wedge; without it, it reads cold
   - 3 short paragraphs: acknowledge the concern, surface what's changed or how we've thought about it differently, low-friction close (reply, 15-min call, or simple yes/no)
   - Avoid: "circle back," "just checking in," how long he's been silent, generic follow-up energy

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max, distinct hook from the email
   - Still reads as a re-contact (he'll recognize you) — not a first-time DM from a stranger
   - No link, no attachment ask — human tone
   - If the DM hook lands, he'll likely reply or move to email/call

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - Opens in the first 5 words with a real, specific reason for the call — tied to the integration concern or the revival angle
   - Leaves one open question for him to sit with; no callback demand
   - Avoid: "just wanted to touch base," restating the email, sounding robotic

## GROUNDING

- Ben knows we talked about Velara Revenue OS before — he has context. Use that. Don't re-pitch the product; re-engage on the blocker.
- The integration concern was real: ERP sync uncertainty. The refresh angle is *how we've solved or clarified that*, not a generic "we have updates."
- 1–3 months is long enough that he may have forgotten specifics — remind him of the *exact concern* he raised, not just "we talked about integration."
- Revival sequences live or die on specificity. If you lack detail on what Ben said about the ERP concern, ask me for one concrete moment or quote from our prior call before drafting.
- Velara Revenue OS syncs natively with Salesforce and HubSpot; if Ben's ERP question was about *those* platforms, the answer is native bidirectional sync with no middleware. If his concern was about a *different* system or data pipeline, flag that — I may need to clarify his actual integration topology before we draft.
- For all three touches: he's not a stranger, but he's not hot either. Tone is professional, curious, not desperate. No FOMO, no urgency language.
- Avoid: "reconnect," "leverage," "synergy," "best practices," or any jargon that suggests a template sequence.

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
    "revival-angle": 3
  }
}
```

**Status:** OK | **Time:** 10764ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3205 | **Out:** 884 | **Cost:** $0.0061

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS, a real-time pipeline intelligence platform. I'm re-engaging Nina at Thornfield Capital after a budget freeze stopped us in January. I need you to craft a three-touch revival sequence that acknowledges our prior conversation, gives her a real reason to engage (not just "checking in"), and escalates tactfully across email → LinkedIn DM → voicemail. This is my last real attempt — each touch needs to feel earned and genuine, not like I'm chasing ghosts.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals continuity without desperation (not "Following Up" or "One More Thing").
   - Opener must explicitly reference the budget-freeze conversation from January — the specific concern she raised, not a generic "we last spoke." If this detail isn't sharp enough in my inputs, ask me for one concrete moment or objection from that call before you draft.
   - 3 short paragraphs: (1) the shared-history wedge, (2) a reason why *now* matters (market shift, timing, a relevant trigger — anchor to real context, not invented urgency), (3) low-friction ask (reply, 15-min call, or simple yes/no).
   - Close with a signature that feels natural, no hard CTA.
   - Avoid: "circle back," "just wanted to," "noticed you haven't," any cold-email tell.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Hook must be distinct from the email opener — don't forward the email logic.
   - Still reads as re-contact (acknowledgment of prior touch or shared context), not a first DM.
   - Human tone. No link, no attachment ask, no unboxing request.

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label clearly as voicemail; write as a script (20–30 seconds when read aloud).
   - Lead with a real, specific reason for the call in the first 5 words — anchored to the revival angle or the January conversation.
   - Leave one question or thought for her to sit with; don't demand a callback.
   - Avoid: "just touching base," "I know you've been quiet," restatement of the email.

## GROUNDING

- **Anchor to January:** The budget freeze is the only shared context I have. If there's more specificity (who cited it, what was being discussed, a reaction to Velara specifically), ask me for it. Don't invent urgency or urgency triggers.
- **Re-engagement, not revival cold:** Every touch assumes Nina and I have history. If the prior conversation is too thin to anchor to, the sequence collapses. Get clarity from me on what was said, not what I assume was understood.
- **Real reason for now:** Don't use "market has shifted," "new feature," or "thought of you" without tying it to Thornfield's world (capital markets, deal velocity, forecast risk, pipeline management — anchor to what they do). If you don't have a real trigger from my inputs, ask me what's actually changed since January.
- **Velara Revenue OS as the anchor:** Lead with the real value proposition — real-time pipeline intelligence, eliminated CRM data rot, forecast accuracy — not "we'd love to reconnect" or "see if we're a fit." The reason to re-engage is the product solving a real problem she cares about.
- **No false specificity:** Don't reference articles, market research, or competitive moves I didn't supply. Stick to what I've told you and standard capital markets / deal management patterns.
- **Tone:** Professional but warm — respect the silence, don't shame it. Confidence in the value, not desperation about the non-response.

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
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 7156ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3190 | **Out:** 612 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Tom after we've gone quiet for a few weeks — he got busy, but the conversation was live before that. Build me a three-touch revival sequence where each touch feels like it's coming from someone who's already talked to him, anchored to a helpful resource angle that gives him a real reason to circle back without pressure.

## STRUCTURE

1. TOUCH 1 — EMAIL
   - Subject line that signals continuity (not "checking in" or generic follow-up language).
   - Opener must explicitly reference a specific moment, topic, or concern Tom raised in our prior conversation — ask me for the detail if I haven't supplied it clearly enough.
   - Three short paragraphs: acknowledge what he mentioned before, introduce the helpful resource tied to his original need, soft close (reply, brief call, or simple yes/no).
   - Avoid desperation signals, "circle back," time-based guilt ("haven't heard from you in..."), or anything a cold stranger could send.

2. TOUCH 2 — LINKEDIN DM
   - Two to three sentences max.
   - Hook must feel fresh and distinct from the email — not a copy-paste of the same angle.
   - Still reads as a re-contact with shared history, not a first-time DM slide.
   - No links, no attachment requests, no formal tone.

3. TOUCH 3 — VOICEMAIL SCRIPT (if applicable)
   - Twenty to thirty seconds when read aloud.
   - First five words must land the real reason for the call — tie it to the revival angle or what Tom originally cared about.
   - Leave him with one question or thought to sit with; no explicit callback demand.
   - Avoid "just wanted to touch base," email recap, or pressure close.

## GROUNDING

- Tom got busy; the conversation was active before that — treat this as a natural pause, not a dead lead.
- The revival angle is a helpful resource tied to his original need or pain. Ask me for specifics on what Tom originally raised if my input doesn't supply enough texture.
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time. If the helpful resource angle touches on forecasting reliability, pipeline visibility, or reducing manual CRM work, anchor there — but let the resource itself be the hook, not the product pitch.
- Tone: peer-to-peer, helpful, no entitlement. He didn't ghost; life happened.
- If I haven't given you a specific moment from our prior call, ask me for one before drafting Touch 1. One genuine shared reference beats generic re-engagement language every time.

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
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 10528ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3226 | **Out:** 857 | **Cost:** $0.0060

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm re-engaging Devon Patel, RevOps lead at Stellaris, after a stalled conversation where budget/sign-off became the blocker. I need a three-touch revival sequence that feels like a genuine re-contact — grounded in our prior talk, not a cold restart — with each touch offering a real reason to respond. The sequence should assume Devon's manager is back or circumstances have shifted, and position a low-friction next step without desperation.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals continuity without "follow-up" language
   - Opener: Explicitly reference the specific moment from our prior call (the manager's PTO, the platform feedback Devon gave, or a concrete concern they surfaced)
   - Body: 3 short paragraphs — acknowledge the blocker that stalled us, deliver one fresh angle or insight that adds new reason to reconsider, close with a single low-friction ask (reply, 15-min call, or simple yes/no)
   - Avoid: "just checking in," "circle back," "thought of you," references to how long they've been silent, or any language a cold prospect would recognize
   - If the rep's input doesn't supply enough prior-conversation detail to craft an honest opener, ask the rep for one specific moment or concern Devon raised before drafting

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Hook must be distinct from the email opener — lean on the revival angle (Outside Helpful Resource) or a new angle that didn't appear in Touch 1
   - Still reads as re-contact (they know who I am), not first DM to a stranger
   - No link, no attachment ask, no forwarded version of the email
   - Human tone — conversational, not templated

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - First 5 words: Lead with a real, specific reason for the call anchored to the revival angle or our shared history
   - Body: One question or observation that makes them pause — something worth thinking about
   - Close: No explicit callback demand; let the voicemail sit
   - Avoid: "just wanted to touch base," "following up," restating the email verbatim

## GROUNDING

- **Prior context is non-negotiable.** Every touch must acknowledge or reflect the real conversation that happened (manager PTO, Devon's positive feedback on the platform, the stall point). This is the wedge that makes revival different from cold outreach.
- **The revival angle is Outside Helpful Resource.** Anchor to that posture — I'm reaching back with something useful for Devon's world, not because I'm chasing a deal. This softens the re-contact and gives Devon a reason that isn't transactional.
- **Velara Revenue OS solves CRM data rot and forecast accuracy** — if the assist references the platform, anchor to the real problem that mattered to Devon's RevOps reality (pipeline visibility, forecast trust, data capture), not generic features.
- **Each touch is standalone.** Assume Devon may only see one. Don't assume she reads Touch 1 before Touch 2; each should land on its own.
- **No time-based shame.** Never reference the silence ("it's been a few weeks," "we haven't spoken since," "circling back after radio silence"). The blocker was clear; assume it's resolved or shifted.
- **Low friction closes only.** A one-sentence reply, a 15-min call, a yes/no question — nothing that demands a meeting prep or homework.

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

**Status:** OK | **Time:** 12481ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3320 | **Out:** 928 | **Cost:** $0.0064

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reviving Sara, VP F&B at Stratton Hotel Group — she deprioritized a kitchen renovation from Q1 to Q3, but timing was the only blocker; the fit was solid. I need you to build a three-touch re-engagement sequence that feels like a real person picking the thread back up, not a cold prospector trying again. Every touch must anchor to our prior conversation and give her a fresh reason to lean in.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that references the Q3 timeline or the kitchen project specifically — not generic re-engagement language.
   - Opener: Call out the one thing she said that stuck (timing shift, renovation scope, a specific operational pain she named). "When we spoke about [X], you mentioned [Y]" — this is your wedge, not a hedge.
   - Body: Introduce a *new* data point or development relevant to her situation (industry trend, a capability she didn't know we had, a cost shift, a peer precedent). Tie it back to why Q3 timing actually works in her favor or why the blocker may have shifted.
   - Close: One low-friction ask — a reply, a brief call, or a simple yes/no on interest.
   - Avoid: "circle back," "just following up," "checking in," how long she's been quiet, or any language that reads as desperation.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences only. Hook must feel distinct from the email — don't just shrink the email message.
   - Still reads as a re-contact (reference the project or the conversation, but lightly). Not a cold first-touch DM.
   - No link ask, no attachment, no "check this out." Human voice.

3. **TOUCH 3 — VOICEMAIL SCRIPT** (if applicable)
   - 20–30 seconds when read aloud.
   - Opens with the *reason for the call* in the first five words — tied to the revival angle or something she said before. Not "just wanted to touch base."
   - Leave her with one genuine question or insight to sit with.
   - No explicit callback demand. Let the reason for calling do the work.

## GROUNDING

- **Anchor to prior conversation:** Sara said timing was the blocker, not fit. This sequence builds on that — Q3 is now closer, and you're giving her a reason *why* now is smarter than she might have thought.
- **"New data or signal" is your wedge:** Industry trend, a peer win, a cost dynamic, a capability reveal, or an operational shift that makes her situation different than it was. Ask me what signal I have; if I don't have one yet, ask me to name the single biggest operational pain she mentioned in the original call so you can anchor the revival to *that*.
- **Don't invent the renewal:** If I didn't supply a concrete reason (data point, peer win, cost change, timeline reset), tell me to name one. Vague "let's reconnect" sequences don't revive deals — specificity does.
- **For Stratton Hotel Group:** 8 properties, F&B operations. She cares about labor efficiency, margin, guest experience consistency across locations, and capital deployment. Avoid: generic foodservice jargon, energy-cost rhetoric without context, or overtures about "the industry."
- **Northwind XR-Series angle for revival:** If relevant, the space recovery and single-unit consolidation can be a re-opener — especially if her Q1 plan assumed multiple pieces of equipment and Q3 lets her optimize the footprint differently. Do not invent specific cost or energy claims; ask me if you need them.
- **Tone:** Helpful peer, not hungry seller. She deprioritized it once; you're not begging for the meeting. You're sharing something that changes the math or the timing.

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
    "revival-angle": 3
  }
}
```

**Status:** OK | **Time:** 10261ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3323 | **Out:** 822 | **Cost:** $0.0059

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm re-engaging Diego, an Executive Chef at a 4-restaurant Bay Area group, after 3+ months of silence. He chose a Rational 6 months ago but mentioned off-the-record frustration with their service response on a recent breakdown. I need you to craft a three-touch revival sequence that leads with our shared history (his service frustration) as the real reason to re-engage — not a generic check-in. Each touch stands alone but reads as a continuation, never as a cold contact.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that nods to his service pain without naming Rational or sounding opportunistic
   - Opener references his specific frustration about service response — the moment he mentioned it — as the connective tissue between then and now
   - Body: one paragraph anchoring to what he told you; one paragraph naming the difference my same-day service model makes for a multi-location operator; one short close with a low-friction ask (reply, 15-min call, or simple yes/no)
   - Avoid: "just following up," "circle back," "checking in," references to how long he's been silent, generic "wanted to reconnect" language

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max
   - Hook must feel distinct from the email — not a repackaged version
   - Lead with a detail that signals re-contact, not first outreach (reference something specific from your prior conversation or context)
   - No link, no ask for attachment or calendar access; reads conversational, not templated

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - Label as "if applicable" — for use only if a call attempt lands to voicemail
   - 20–30 seconds when read aloud
   - First 5 words must name the real reason for the call (service reliability, multi-location efficiency, etc.) — anchor to the revival angle
   - Leave one open question for him to sit with; no explicit callback demand or CTA pressure
   - Avoid: "just wanted to touch base," restating the email, desperation tone

## GROUNDING

- **Anchor to shared history**: The service breakdown and his frustration with response time is the only bridge between his Rational choice and this sequence. Lead every touch with that — it's the reason he'll open the second and third messages.
- **Diego's context**: 4-restaurant operator. Service speed matters because downtime compounds across locations. Same-day on-site response is the differentiator that speaks to his pain; don't just name the feature — name the relief.
- **Revival posture**: "Last try" framing is implicit, not explicit. No "I know it's been a while" or "sorry we lost touch." Act like you're sharing something useful that landed on your desk.
- **Northwind XR-Series anchor**: One touch may reference the footprint recovery or multi-mode consolidation if it threads naturally to service reliability or kitchen workflow — but primary wedge is service response speed, not features.
- **Avoid for this prospect**: Rational name-dropping, "you made the wrong choice" energy, long product pitches, multiple asks across touches, linking service quality to a Northwind pitch (let the connection sit with him).
- **If the assistant needs prior-call specifics**: Ask me for one concrete moment or phrase Diego used when he mentioned the service frustration — a small detail that proves continuity.

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

**Status:** OK | **Time:** 9159ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3320 | **Out:** 770 | **Cost:** $0.0057

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. Greg at Helmsdale Foundry went quiet mid-deal — we were near signature when his PE sponsor's portfolio mandate pulled his focus. I need you to craft a three-touch cold revival sequence that re-engages him by anchoring to our prior conversation and giving him a fresh, credible reason to circle back without sounding desperate or generic.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + three short paragraphs. Open with a specific moment or concern Greg raised in our original conversation — the wedge that proves you're not a stranger sending a cold email.
   - If my input doesn't give you enough detail from that prior call, ask me for one concrete thing he said or worried about before you draft.
   - Body: Acknowledge the PE mandate that sidelined him (don't pretend you don't know), pivot to why the timing might actually be better now, land on the revival angle.
   - Close with a low-friction ask — a reply, a 15-min call, or a simple yes/no. Avoid "circle back," "just checking in," how long he's been quiet, or cold-email energy.

2. **TOUCH 2 — LINKEDIN DM**
   - Two to three sentences max. Hook must be distinct from the email opener — don't just shrink the email.
   - Still reads as a re-contact, not a first DM from a stranger. Reference something from our prior relationship.
   - No link, no attachment ask. Human tone — conversational, not forwarded.

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - Twenty to thirty seconds when spoken aloud. Lead with a specific reason for the call in the first five words — anchor it to the revival angle or what we discussed before.
   - End with one question for him to sit with. No "just wanted to touch base," no restating the email, no explicit callback demand.

## GROUNDING

- **Prior relationship is the credibility lever.** Greg knows Aldermark exists and remembers our conversation. Use that — don't bury it. The revival angle only lands if it feels like a real reason to reach out *to him specifically*, not a broadcast.
- **PE mandate is the context, not the apology.** He didn't ghost; he got pulled. Acknowledge it matter-of-factly, then pivot forward. Don't dwell on the silence.
- **Helmsdale Foundry is PE-backed industrial.** That's our core sector. Assume he cares about operational margin and cash efficiency — the reason he was close to signing in the first place.
- **"Working fixes, not decks" is the north star.** If the revival angle touches operations, margin recovery, or embedded-partner execution, let that differentiation hum beneath the surface. Don't state it; let it *feel* true from the reason you're reaching out.
- **No invented details.** Don't reference a specific priority, timeline, portfolio company, or PE firm unless I named it. Don't assume what his PE sponsor pushed — just that bandwidth got eaten.
- **Tone: peer, not pest.** He's a CEO running a PE-backed shop. Respect his time and intelligence. Short, direct, earned-re-contact energy.

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
    "revival-angle": 2
  }
}
```

**Status:** OK | **Time:** 10074ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3317 | **Out:** 870 | **Cost:** $0.0061

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reviving a stalled pipeline deal with Linda, a COO at a $40M family-owned services business, where our original conversation froze when her company brought on a new CFO three months ago. Build me a three-touch re-engagement sequence that acknowledges our prior relationship and gives her a real, non-salesy reason to talk — each touch distinct, each one feeling like it comes from someone who's already in the story, not a stranger trying to break in.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + 3 short paragraphs. Open by referencing a specific moment, concern, or topic from our original conversation — not a generic follow-up. This is your anchor; without it, this reads cold.
   - If my input doesn't supply enough prior-conversation detail, ask me for one concrete thing Linda raised or we discussed before the deal stalled.
   - Closes with a low-friction ask: a reply, a 15-minute call, or a simple yes/no question.
   - Avoid: "circle back," "just checking in," "wanted to see if you were still interested," timeline shame ("haven't heard from you in…"), or any phrasing a stranger could copy.

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max. Hook must feel distinct from the email — don't recycle the email's opener.
   - Still reads as re-contact, not first-time outreach. Acknowledges the relationship; doesn't pretend we're meeting for the first time.
   - No links, no attachment requests. Human voice, short and direct.

3. **TOUCH 3 — VOICEMAIL SCRIPT** *(if applicable)*
   - 20–30 seconds when read aloud. Lead with a real, specific reason for the call in the first 5 words — anchor to the revival angle or something concrete from our shared history.
   - Leave one open question for Linda to sit with. No explicit callback demand or voicemail-tag language ("give me a call back when you get a chance").
   - Avoid: "just wanted to touch base," "following up on my email," or repeating the email's substance.

## GROUNDING

- **Prior conversation is the connective tissue.** Every touch must read as though we've spoken before. If you lack specific recall details from the original call, ask me before drafting — one moment or concern Linda raised is enough.
- **New CFO is context, not an objection.** He's why the deal froze, but the revival angle isn't "convince your CFO." It's "here's why this still matters to you, even with a new gatekeeper."
- **"Outside Helpful Resource" means:** position me as someone with no agenda other than helping her see the margin opportunity in her ops — not as a vendor trying to get past the new buyer. The CFO hiring signals scrutiny; lean into the idea that this is exactly when she'd want a trusted outside view.
- **Anchor to margin recovery and operational efficiency.** Family-owned services businesses care about cash and runway. Don't talk about "transformation" or "alignment"; talk about the work that bleeds margin and what clarity looks like.
- **Family-owned + new CFO = sensitivity.** The CFO's review might feel like a threat to Linda's authority or a sign of distrust. Don't amplify that. Position the reset as a tool that makes her look better to the CFO — not an end-run around him.
- **Three months of silence is real, but don't weaponize it.** Treat it as a natural pause, not a rejection. The CFO's arrival is the reason; act like we both know that.

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

