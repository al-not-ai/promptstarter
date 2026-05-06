# deal-reviver — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 20,725 in / 6,512 out  
**Engine cost (this tool):** $0.0426  

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

**Status:** OK | **Time:** 6709ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2252 | **Out:** 588 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform — and I'm reviving a stalled deal with Rachel at Meridian Analytics after she went quiet waiting to loop in her VP of Sales. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that gives me a genuine reason to come back without desperation. Each touch should feel like new information, not a follow-up. Anchor everything to the one thing that's changed — new data or a signal Rachel or her VP would actually care about — and give me a distinct hook for each channel so I don't sound like a broken record.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line + three short paragraphs
   - Opens with a specific, earned reason tied to pipeline visibility or forecast risk — something Rachel's VP would want to see before signing off
   - Closes with a low-friction ask (reply, 15-min call, or simple yes/no question)
   - Avoid: "circle back," "just checking in," references to silence or timeline

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences max, no links or attachment asks
   - Hook must be distinct from the email opener — don't recycle the same angle
   - Reads human and conversational, not a forwarded email

3. **TOUCH 3 — VOICEMAIL SCRIPT**
   - Label as "if applicable" since it's conditional
   - 20–30 seconds when spoken aloud
   - Lead with the real reason for the call in the first 5 words
   - Leave one question for Rachel to sit with — don't demand a callback
   - Avoid: "touch base," restating the email, or urgency language

## GROUNDING

- Rachel mentioned needing VP buy-in — the new reason to reach out should *help* her case to that VP, not pressure her
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time; the revival angle leans on how that visibility would matter to a VP evaluating sales tooling
- A few days of silence is normal when executive alignment is needed — position the re-engagement as providing *new information for that conversation*, not as a nudge
- Avoid: generic "we've helped similar companies," unsubstantiated claims, product feature dumps, or any statistic or metric not anchored to Meridian's situation
- Tone: consultant, not pest — she wants to move forward; you're removing friction for her to do it

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

**Status:** OK | **Time:** 9910ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2257 | **Out:** 748 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to Ben at Cascade Logistics. Our conversation stalled on integration complexity — he wasn't confident we'd sync cleanly with their ERP. I'm reviving this deal with a three-touch sequence anchored to a real product update that solves his exact concern. I need each touch (email, LinkedIn DM, voicemail) positioned as a genuine reason to re-engage, not a "checking in" resurface.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line: Name the update or capability that addresses ERP sync directly — no generic "reconnect" energy
   - Opening paragraph: Reference his original concern (ERP integration) by name, then introduce what's changed since we last spoke — make it concrete and relevant to *his* blocker, not a broad feature announcement
   - Middle paragraph: One sentence on how this closes the gap for him; one sentence on what it means in practice (less manual work, cleaner data flow, whatever is true)
   - Closing paragraph: Low-friction ask — reply with a yes/no, grab 15 minutes, or simply confirm if this lands differently now
   - Tone: Earned, not apologetic; respectful of the silence without acknowledging it directly

2. **TOUCH 2 — LINKEDIN DM**
   - Hook: Completely different entry point than the email — not a repackaging. Could reference a specific use case, a mutual connection, or a concrete outcome he'd recognize
   - Length: 2–3 sentences max
   - No link, no ask for a document or attachment
   - Read aloud to yourself: Should sound like a human, not a forwarded email

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - First 5 words: Lead with the real reason for the call — the update, the insight, the reason *now*
   - Body: 20–30 seconds when spoken aloud; conversational, no rush
   - Close: Leave one question or observation that invites thinking, not an explicit "call me back" demand
   - Avoid: "Just wanted to touch base," restating the email, or any desperation signal

## GROUNDING

- **ERP sync is his blocker.** Everything here hangs on that. The update or capability you anchor to must address it directly — no generic feature talk.
- **1–3 months quiet.** He's not in active peril; this is a thoughtful re-entry, not a panic save.
- **No fabricated updates.** If I haven't told you what changed in our product since we last spoke, anchor to standard industry patterns (e.g., "expanded native connector," "API depth") and flag it as a pattern for me to confirm.
- **Velara Revenue OS auto-captures deal activity and syncs natively with Salesforce and HubSpot** — but Ben uses an ERP, so his concern is likely around *that* integration. Anchor to what I've given you about his stack; don't invent connector specs.
- **Tone for this segment:** Ben disengaged on a real technical concern, not budget or priority. Treat him as serious and thoughtful — no aggressive urgency, no "just one more chance."

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

**Status:** OK | **Time:** 9790ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2250 | **Out:** 689 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a Velara rep at a stalled opportunity — Nina at Thornfield Capital cited budget freeze in January and we've been radio silent for 3+ months. I'm mounting a final, deliberate re-engagement sequence. I need you as my cold revival specialist to craft three touches (email, LinkedIn DM, voicemail) that feel earned and specific, each with a distinct hook. The angle is concrete: something has shifted — market conditions, their forecast accuracy pressure, or deal velocity risk — that makes NOW a real reason to land one more conversation before I sunset this. No desperation, no "just checking in," no reference to the silence itself.

## STRUCTURE

1. **Email (Touch 1): Subject + body**
   - Subject anchors to a forward-looking business shift (market, quarter-end approach, forecast pressure) — not to the prospect, not to budget, not to time elapsed
   - Three short paragraphs: (1) earned opener tied to the shift; (2) one sentence on how Velara Revenue OS solves the pressure it creates; (3) ask for a yes/no reply or brief 15-min call
   - Close with low friction — no desperation, no "let me know if you have time," no pressure play

2. **LinkedIn DM (Touch 2): Hook-first message**
   - 2–3 sentences max; reads like you're thinking of them, not forwarding the email
   - Hook must be visibly different from the email opener — same angle, different angle of attack
   - No links, no attachment, no meeting-request button; just a reason to reply

3. **Voicemail (Label "if applicable"): 20–30 seconds spoken**
   - First 5 words name the real reason for the call (the shift, the pressure, the timing)
   - Leave one open question they sit with — something that makes them curious enough to call back without you asking for the call
   - Avoid "touching base," repeating the email, or explicit callback demand

## GROUNDING

- **The budget freeze is now 3+ months old.** Don't reference it as a reason to reach out; use it as context for why the market or their forecast risk may have shifted since January. The angle is *change*, not time.
- **Nina is your sole named contact.** No multi-threading here; land this one conversation.
- **Velara Revenue OS** solves pipeline visibility and forecast accuracy — anchor to whichever pressure feels most real for a capital firm in Q2: deal velocity, forecast drift, or forecast accuracy (we guarantee within 4%).
- **For Thornfield specifically,** capital firms live and die by deal velocity and forecast confidence. That's the thread.
- **Avoid:** "circling back," "wanted to check in," "haven't heard from you," any reference to the 3-month silence, desperation language, or vague "synergy" talk.
- **Each touch stands alone.** If Nina responds to any one, the sequence stops. Write as if each is the last one.

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

**Status:** OK | **Time:** 9782ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2235 | **Out:** 812 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. I'm reviving a stalled deal with Tom who went quiet 2–4 weeks ago because he got busy. I need you to be my cold revival specialist and craft a three-touch re-engagement sequence that gives him a real, earned reason to come back — not a "just checking in" desperation play. Each touch should feel like I'm adding value before asking for his time, anchored to the outside helpful resource angle. The sequence should progressively warm him up across email, LinkedIn, and voicemail without sounding repetitive or needy.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that signals a concrete reason to reach out, not a circle-back or generic check-in
   - Three short paragraphs: (a) the earned hook tied to the helpful resource angle, (b) one micro-insight or observation relevant to his world, (c) low-friction ask (reply, 15-min call, or yes/no question)
   - Closes warm but direct — no apologies for the gap, no "busy season" commiseration

2. **TOUCH 2 — LINKEDIN DM**
   - 2–3 sentences maximum
   - Hook must be distinct from the email opener — find a different angle or entry point
   - Human voice, no forwarding energy, no links or attachment asks
   - Feels like a genuine thought, not a broadcast

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - 20–30 seconds when spoken aloud
   - First 5 words lead with the real reason for the call — no "just wanted to touch base"
   - Ends with one open question for him to sit with, not a callback demand
   - Avoids restating the email; gives him something new to chew on

## GROUNDING

- **The revival angle is outside helpful resource:** Lead with something genuinely useful — an insight, a pattern I've noticed in his space, a resource that might matter to him — before mentioning Velara Revenue OS or my agenda. The ask comes *after* the value.
- **Tom went quiet because he got busy, not because he said no.** Treat this as a re-warm, not a win-back. He was engaged enough to pause, not enough to reject. Don't reference the silence directly.
- **Anchor to one real reason to reach out.** If you lack specifics on Tom's company, role, or situation, ask me for them before drafting. If I can't provide them, lean on a broad industry pattern Tom's space likely faces (e.g., "teams managing pipeline forecasting often surface stale CRM data as a bottleneck") — but flag that as a pattern assumption, not a fact about Tom.
- **Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time.** Use one of these as the helpful resource angle if it fits Tom's world — but only if I've confirmed his situation warrants it. If I haven't, ask me what Tom's actual pain point or priority is before you write.
- **Avoid:** "circle back," "just checking in," "just wanted to touch base," "I know you're busy," reference to how long he's been silent, extraneous details I didn't supply, any statistic or metric not in my inputs.
- **Voice:** Direct, curious, grounded in respect for his time. No cutesy subject lines or artificial urgency. Write like I'm genuinely offering something, not fishing for a meeting.

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

**Status:** OK | **Time:** 9422ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2271 | **Out:** 800 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to Devon Patel, a RevOps lead at Stellaris who went quiet 2–4 weeks ago after showing genuine interest but citing manager sign-off as the blocker. I need you to act as my cold revival specialist and craft a three-touch re-engagement sequence that gives Devon a real, earned reason to reply — anchored to the "outside helpful resource" angle — without sounding desperate or referencing the silence itself.

## STRUCTURE

1. TOUCH 1 — EMAIL
   - Subject line: Sharp, specific hook tied to the revival angle (RevOps friction, forecast accuracy, pipeline visibility) — no "checking in" or time-based openers
   - Body: 3 short paragraphs. First paragraph opens with the earned reason to reach out (tie it to a RevOps challenge or signal relevant to Stellaris' likely situation). Second paragraph bridges to Velara Revenue OS and the one differentiator that matters most to a RevOps lead managing forecast or pipeline risk. Third paragraph closes with a low-friction ask — a single reply, a 15-min call, or a simple yes/no question
   - Tone: Helpful peer, not salesy
   - Avoid: "circle back," "just checking in," "hope you're well," any reference to their silence or manager's PTO

2. TOUCH 2 — LINKEDIN DM
   - Hook: Distinct from the email opener — new angle, new signal, or a different pain point
   - Length: 2–3 sentences max
   - No links, no attachment requests, no forwarded email energy
   - Reads conversational, not templated

3. TOUCH 3 — VOICEMAIL SCRIPT (label "if applicable")
   - Duration: 20–30 seconds when spoken aloud
   - Opening: Lead with the real reason for the call in the first 5 words — specificity counts
   - Closes with one question for Devon to sit with; no explicit callback demand or urgency
   - Avoid: "just wanted to touch base," repeating the email, generic warm-up phrasing

## GROUNDING

- Devon is a RevOps lead — anchor to pipeline hygiene, forecast reliability, or the gap between what CRM says and what's actually happening. RevOps leaders care about data integrity and predictability.
- The blocker was manager sign-off on PTO. The revival angle is "outside helpful resource" — position yourself as someone bringing useful intel or a capability that helps Devon make a stronger case to their manager, not as someone chasing a deal.
- Velara Revenue OS eliminates CRM data rot and surfaces deal risk in real time — this is the differentiator that resonates with RevOps. Lean on forecast accuracy and auto-capture (zero manual CRM updates) as the concrete win.
- Stellaris is likely mid-market or enterprise with pipeline complexity. Assume their RevOps function is stretched managing data quality across multiple stakeholders.
- Do not invent specific company challenges, recent earnings misses, headcount changes, or other firmographic details not in my inputs. Use standard RevOps friction patterns as your anchor.
- Avoid RevOps buzzword bingo: "enablement," "alignment," "best practices," "world-class." Talk specifics — forecast drift, manual CRM work, deal visibility gaps.
- The tone across all three touches should be: peer helping peer unblock a real problem, not a sales rep trying to resurrect a deal.

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

**Status:** OK | **Time:** 7678ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2365 | **Out:** 643 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reviving a stalled deal with Sara, VP F&B at Stratton Hotel Group — her kitchen renovation slid from Q1 to Q3, but fit was never the issue. I need you to craft a three-touch re-engagement sequence with a real reason to reach out (not "checking in"), each touch distinct in voice and medium, designed to land a conversation when timing unlocks. Keep friction low and avoid any signal of desperation.

## STRUCTURE

**1. EMAIL**
- Subject line: Earned angle tied to the Q3 timeline or a legitimate business development reason (not a time reference). No "circling back" phrasing.
- Three short paragraphs: (a) Opening reason to reach out — grounded in a real trigger or insight relevant to multi-property F&B ops. (b) One sentence connecting that trigger to the Northwind XR-Series and its fit for a large operation. (c) Low-friction close — offer a reply, 15-min call, or simple yes/no question.
- Tone: Specific, helpful, no apology for silence.

**2. LINKEDIN DM**
- 2–3 sentences max. Completely different hook from the email opener — don't forward the email logic here.
- No links, no attachment ask.
- Reads like a human message, not templated.

**3. VOICEMAIL SCRIPT (if applicable)**
- 20–30 seconds spoken aloud.
- First 5 words lead with the real reason for the call.
- End with one question for her to sit with — no "call me back" demand.
- Avoid "just touching base" or echoing the email.

## GROUNDING

- Sara's blocker was timing, not product fit — position this sequence as timing-aware and outcome-focused, not desperate.
- Stratton Hotel Group operates 8 properties; anchor the Northwind XR-Series value to multi-site operational efficiency (energy savings, space recovery, staff training speed across locations).
- The "Q3 renovation" is the real trigger — use it as your earned reason to surface, not as an apology.
- Avoid: "circle back," "reconnect," "last time we spoke," or any reference to how long she's been quiet.
- Northwind's 30% energy advantage and space recovery (~14 sq ft per unit) are the sharpest levers for a multi-property operator managing utility and real estate costs.
- If you lack intel on Stratton's specific Q3 timeline or recent kitchen news, anchor to standard patterns for large hospitality groups (energy cost pressures, staffing continuity post-renovation) and flag them as patterns, not facts.

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

**Status:** OK | **Time:** 9874ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✗ | **In:** 2368 | **Out:** 779 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a commercial kitchen equipment rep at Northwind selling the XR-Series Combi Oven. My prospect is Diego, an executive chef at a Bay Area restaurant group who chose a competitor six months ago but signaled frustration with their service response after a recent breakdown. I need you to build me a three-touch revival sequence that gives me a real reason to reach out — anchored to his service pain — without sounding desperate or apologizing for the silence. This is my last try to get back in, so each touch has to earn its place and feel distinct.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line that flags the service angle (not "checking in") — makes him curious why I'm writing now
   - Paragraph 1: Open with the service friction he experienced — name it directly, no hedging. Position it as a pattern I'm seeing with that unit in his market
   - Paragraph 2: Pivot to how my product's service model differs — same-day on-site response, no factory-tech bottleneck. Tie it to kitchen uptime, not features
   - Paragraph 3: Close with a low-friction ask — a 15-min call, a reply, or a simple "curious if this matters to you?" No pressure
   - Avoid: "circle back," "just checking in," "it's been a while," "I know you're busy"

2. **TOUCH 2 — LINKEDIN DM**
   - Hook distinct from the email opener — if the email led with service pain, open here with a kitchen-specific angle (floor space recovered, labor efficiency, energy cost) or a fresh reason tied to his restaurant group's footprint
   - 2–3 sentences max. Conversational tone — reads like a peer, not a follow-up
   - No link, no attachment ask, no "saw your recent post" filler
   - Goal: Spark curiosity, not drive action

3. **TOUCH 3 — VOICEMAIL SCRIPT (if applicable)**
   - First 5 words must land the reason for the call — service reliability, kitchen capacity, operational efficiency. Not "just wanted to touch base"
   - 20–30 seconds when spoken aloud
   - Close with one open question he sits with after you hang up — not a callback demand or explicit ask
   - Tone: Respectful of his time. You're offering something, not chasing

## GROUNDING

- Diego experienced service friction with his current unit; use that as the earned entry point, not the Northwind pitch. Service uptime is his pain language
- The Northwind XR-Series replaces four pieces of equipment in one footprint — relevant to a multi-unit operator managing kitchen labor and space across locations
- Same-day on-site service is my sharpest differentiator here because his frustration was downtime, not features
- He's cold 3+ months — no "sorry we haven't talked" energy, no self-aware apologies. Confidence that this service insight is fresh and worth his time
- Bay Area fine-dining and upscale casual kitchens prioritize consistency and speed-to-recovery; anchor language to those operational values
- Avoid: tech specs, energy percentages, warranty details (save those for the call). Keep it about kitchen reliability and service response
- He's an executive chef, not a purchasing agent — speak to operational pain and uptime, not ROI or procurement process

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

**Status:** OK | **Time:** 9235ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2365 | **Out:** 735 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a cold revival specialist at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm re-engaging Greg, CEO of Helmsdale Foundry, after we stalled one signature away when his PE sponsor's portfolio priorities hijacked his Q1. I need you to build me a three-touch revival sequence — email, LinkedIn DM, voicemail — each with a real, earned reason to reach out tied to what happened (his sponsor's push, not time passing). Every touch should feel like progress, not persistence.

## STRUCTURE

1. **TOUCH 1 — EMAIL**
   - Subject line: Opens with the specific context (PE sponsor's portfolio priority, operational margin pressure in foundries post-crisis) — makes him think "how'd they know?"
   - Body: Paragraph one acknowledges what likely happened (sponsor priorities shifted). Paragraph two plants a real reason to reconnect tied to PE-backed industrial operations right now. Paragraph three closes with a low-friction ask (reply, 15-min call, or a simple yes/no on interest).
   - Tone: Respectful of his reality, not apologetic. Shows you've thought about his world.

2. **TOUCH 2 — LINKEDIN DM**
   - Hook: Entirely different angle from the email — not a recap, not a forwarded summary. Leans into something you'd only say in a DM (a quick observation, a pattern you're seeing, a specific aha).
   - Length: 2–3 sentences max. No links, no attachment asks.
   - Reads: Conversational, like you're thinking of him, not automating him.

3. **TOUCH 3 — VOICEMAIL (if applicable)**
   - Lead: First 5 words must land the real reason for the call — tie it to his situation or the PE sponsor context, not "catching up."
   - Body: 20–30 seconds when spoken. One question you leave him with — something he'll sit with after you hang up.
   - Avoid: "Just wanted to touch base," restating the email, any callback demand. Let the question do the work.

## GROUNDING

- Greg was *one signature away* — this isn't a cold restart, it's a warm thaw. Every touch should reflect that he knows us and what we do.
- The PE sponsor's portfolio-wide priority is the *real reason* he went quiet — not objection, not disinterest. That's your spine.
- Helmsdale Foundry is a PE-backed industrial — exactly our sector. Our Aldermark 12-Week Operations Reset ships working fixes, not recommendations. That's the difference between a study and a reset.
- Don't invent what the sponsor's priority was or claim to know his current margin pressure directly — anchor to what's reasonable for PE-backed industrials post-crisis.
- No "circle back," "just checking in," or time-based language ("it's been a few weeks"). He knows it's been quiet. Move past it.
- Senior-only delivery and fixed-fee-with-50%-success-holdback are our hard anchors — don't soften them or oversell them, but let them inform confidence in the sequence.

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

**Status:** OK | **Time:** 8433ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2362 | **Out:** 718 | **Cost:** $0.0048

**Generated Master Prompt:**

```markdown
## MISSION
I'm a cold revival specialist at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm re-engaging Linda, COO of a $40M family-owned services business, after three months of silence — the deal stalled when they brought in a new CFO who's now vetting all outside engagements. I need you to craft a three-touch revival sequence that gives me a real, earned reason to resurface (not "just checking in"), positions me as a helpful resource to Linda and her new CFO, and lands a low-friction next step on each touch.

## STRUCTURE

1. **Touch 1 — Email**
   - Subject line anchored to the CFO transition as the opener — this is your earned reason
   - Three short paragraphs: (1) acknowledge the new CFO and what that means for Linda's priorities; (2) one concrete insight about what we've seen in similar transitions that's relevant to a services CFO's first 90 days; (3) low-friction ask — 15-min call or a quick yes/no reply
   - Avoid: "circle back," "checking in," "it's been a while," apology language, any reference to the silence

2. **Touch 2 — LinkedIn DM**
   - Hook must be distinct from the email — don't echo the subject line or opening angle
   - 2–3 sentences max; reads human, not templated or forwarded
   - No link, no ask for attachment or scheduling tool
   - One conversation starter that feels natural, not sales

3. **Touch 3 — Voicemail (if applicable)**
   - 20–30 seconds spoken aloud
   - First 5 words must land the real reason for the call — no "just calling to touch base"
   - Ends with one open question that lets them sit with it; no "call me back" demand
   - Avoid restating the email or sounding like a re-read

## GROUNDING

- **Earned reason to resurface:** The CFO hire is your legitimate hook — Linda's priorities have shifted, and a new CFO's first 100 days are when operational questions surface. Don't invent a news trigger or false urgency.
- **Position for two buyers:** This email works if Linda reads it, but write it so the CFO could read it forwarded and get context too. I'm a resource to both, not just Linda.
- **What a "helpful resource" sounds like:** Acknowledge the real work of integrating a new CFO, hint at what we've seen in similar transitions (operations chaos, cash leaks surfacing post-hire), offer a conversation — not a pitch or a deck.
- **Tone:** Respectful of their time, specific to their situation (family business, services, new CFO), confident but not pushy. They've been quiet for 3+ months — treat that as data, not an apology prompt.
- **Avoid:** "Reconnect," "value-add," buzzword padding, any statistic or metric not from my inputs, urgency language ("limited time," "only slots left"), references to the silence or how long you've been waiting.

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

