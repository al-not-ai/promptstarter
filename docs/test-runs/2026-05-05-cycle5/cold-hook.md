# cold-hook — stress test results

**Run:** 2026-05-05-cycle5  
**Cases:** 9 (9 OK)  
**Tokens:** 28,833 in / 3,782 out  
**Engine cost (this tool):** $0.0382  

---

## [V] Cold Hook — Marcus Reid / LinkedIn DM / Save Time / thought leadership trigger

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Marcus Reid, VP RevOps",
    "triggerEvent": "Just posted a LinkedIn article on pipeline efficiency that hit 8K reactions"
  },
  "sliderValues": {
    "outreach-channel": 0,
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 5752ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3156 | **Out:** 355 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Marcus Reid (VP RevOps) via LinkedIn DM — he just published on pipeline efficiency and got traction. I need a hook short enough to read in 90 seconds that earns a reply. My angle is time and cost savings. Write it tight, no fluff, anchor to his signal.

## STRUCTURE
1. Hook — Under 100 words. Open with the trigger (his post got real attention), land the real reason for the reach (we solve the data rot and forecast accuracy gaps his article points toward), close with a micro-commitment (one call, no pressure). Tone is peer-to-peer, not salesy.

2. Tone anchors — Direct, specific, no generic "I saw your post" energy. Show you read *what* he posted and *why* it matters. Avoid "Let's connect" or soft CTAs; ask for something concrete.

## GROUNDING
- Marcus is VP RevOps — he lives in pipeline risk and rep productivity. Time and cost are both live pain points for him.
- His post on pipeline efficiency is the only context I have; don't invent details about his company, headcount, or stack.
- The hook lands on LinkedIn DM, so keep it conversational and skimmable — short paragraphs or single lines work better than dense blocks.
- Avoid jargon; "pipeline efficiency" is his language, not ours. Speak to what his article implies: manual work, forecast drift, reps flying blind.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — Priya Nair / Email Casual / Save Time-Cut Cost /competitor breach trigger

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Priya Nair, Head of GTM",
    "triggerEvent": "Their current vendor (Outreach.io) just had a publicized security incident"
  },
  "sliderValues": {
    "outreach-channel": 1,
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 6982ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3164 | **Out:** 472 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing Priya Nair, Head of GTM, off the back of a security incident with their current vendor. Be my cold outreach specialist and write me a short-form hook under 100 words — casual tone, email-appropriate — that earns 90 seconds of attention by anchoring to the real reason I'm reaching out: the incident creates an opening to talk about a better alternative.

## STRUCTURE

1. Subject line
   - Short, curiosity-forward, no hype. The incident is the hook; don't bury it.

2. Salutation + body (under 100 words)
   - Acknowledge the incident plainly — no schadenfreude or corporate-speak.
   - Land the real value: what Velara does that matters right now (auto-capture, real-time signals, zero manual busywork).
   - Casual, direct tone. Skip "I know your challenges" softness; assume Priya is busy and skeptical.
   - Clear next step (short call, quick conversation — not vague).

3. Signoff
   - Warm, brief. Match the casual tone.

## GROUNDING

- Priya is Head of GTM — assume she owns pipeline health and rep productivity. The security incident is noise; the real lever is: *your current vendor is down, and Velara eliminates the manual CRM work that drains your reps.*
- Avoid: "I saw your company had a rough week" / corporate sympathy / "we're here to help" platitudes / multi-sentence openers.
- One sharp reason to reply: Velara auto-captures deal activity (email, calendar) so reps don't hand-jam CRM entries. That's the time-saver in a GTM context where security incidents often spike operational friction.
- Casual email = short sentences, no jargon, one clear ask.
- Skip product feature laundry. Focus on the outcome: less busywork, cleaner pipeline.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — David Kowalski / Email C-Suite / Grow Revenue / missed Q3 by 18%

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "David Kowalski, Chief Revenue Officer",
    "triggerEvent": "Company missed Q3 ARR target by 18% — disclosed in earnings call"
  },
  "sliderValues": {
    "outreach-channel": 3,
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 6283ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3161 | **Out:** 416 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to David Kowalski, a CRO who just missed Q3 ARR target by 18%. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that earns 90 seconds of attention by naming the missed target as the trigger and anchoring to real-time pipeline visibility as the lever to prevent the next miss.

## STRUCTURE

1. Subject line
   - Specific to the trigger (missed target); no generic "quick question" energy

2. Salutation & body
   - Acknowledge the miss without sounding like you're reading earnings transcripts
   - The core problem: pipeline opacity cost visibility when it mattered most
   - One concrete outcome Velara Revenue OS delivers: real-time deal signals that surface risk before it's fatal
   - No product name-drop required; the capability is the hook

3. Signoff
   - Keep it short; no CTA pressure

## GROUNDING

- David's a CRO; he owns miss accountability and next-quarter recovery. Speak to his urgency, not his curiosity.
- The 18% miss is your only sourced detail — it's the wound and the reason he'll open. Use it.
- "Pipeline visibility" and "forecast accuracy" are table stakes for CROs; real-time signals that *surface risk before it's fatal* — signals he can act on mid-deal, not post-mortem — is the wedge.
- Avoid: generic RevOps jargon, implementation complexity, "synergy," "optimize," or anything that sounds like work for David's team.
- Tone: peer to peer, not vendor. You're naming a problem he already knows exists; you're not explaining it to him.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — D1 SENTINEL — Jordan Mehta / sparse trigger / DM / Grow Revenue

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Jordan Mehta",
    "triggerEvent": "Missed their last quarter"
  },
  "sliderValues": {
    "outreach-channel": 0,
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 4312ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3142 | **Out:** 256 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn after they missed last quarter. Write me a short-form hook under 100 words that earns 90 seconds of attention — no follow-up required, just a clean entry to a conversation.

## STRUCTURE
1. Hook (under 100 words)
   - Trigger is their miss — make it concrete and non-accusatory
   - Value angle: pipeline visibility and forecast confidence prevent this pattern
   - No ask beyond a response; no scheduling language; no CTA button energy
   - Tone is peer-to-peer, not "I saw your LinkedIn" or salesy

## GROUNDING
- Jordan is likely under pressure post-miss; empathy without pity
- Avoid generic "let's connect" or "I help sales teams" language
- Pipeline visibility and forecast accuracy are the leverage here — not speed-to-implementation or feature lists
- No numbers, percentages, or case studies; anchor to the pain only
- Keep it scannable on mobile; DM brevity is a feature

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [V] Cold Hook — RICH — Erin Park (Rampcheck) / Email Formal / Grow Revenue / specific All-Hands AMA trigger

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Erin Park, VP of GTM Operations",
    "triggerEvent": "At Rampcheck's most recent All-Hands AMA she said forecast accuracy at quarter-end was the team's biggest credibility hit with the board"
  },
  "sliderValues": {
    "outreach-channel": 2,
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 6638ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3177 | **Out:** 438 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing Erin Park, VP of GTM Operations at Rampcheck, off a public trigger: she flagged forecast accuracy at quarter-end as the team's biggest credibility hit with the board. Write me a short-form cold hook under 100 words that earns 90 seconds of her attention — formal email tone, no cutesy subject lines or gimmicks. The headline value is revenue growth.

## STRUCTURE
1. Subject line — one-line, formal, no emojis or clickbait. Names the problem or the opportunity, not hype.
2. Salutation — professional (use her first name and title context if natural).
3. Hook — under 100 words total. Must anchor to the forecast-accuracy trigger she surfaced publicly. The core insight: real-time pipeline intelligence eliminates the gap between what the CRM says and what's actually true. No product name-drop required; let the problem do the work. The ask is a 15-minute conversation, not a demo.
4. Signoff — professional, single-name close.

## GROUNDING
- Erin is a ops leader, not a builder — speak to business outcomes and board credibility, not feature depth.
- Forecast accuracy at quarter-end is her stated pain; anchor hard to that, not generic "pipeline visibility."
- Avoid "I saw your LinkedIn" or "I was listening to your all-hands" — reference the trigger as a natural insight into her world, not stalking.
- No ROI math, no "we guarantee 4% accuracy" — that specificity is earned in conversation, not in a cold email.
- Formal tone means no enthusiasm exhaust, no "exciting opportunity," no "I'd love to" — direct and respectful.
- Under 100 words is the hard wall; if you hit it, you're done.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Cold Hook — Mark Vidal (Ascend Hotel Group) / Email Formal / Save Time-Cut Cost /14 new locations

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Mark Vidal, Director of Culinary Operations, Ascend Hotel Group",
    "triggerEvent": "Press release: opening 14 new locations across the US over the next 18 months"
  },
  "sliderValues": {
    "outreach-channel": 2,
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 7514ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3256 | **Out:** 532 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, on the back of their expansion into 14 new locations. Be my cold outreach specialist and write me a short-form hook under 100 words — formal tone, email channel — that lands as a time and cost lever tied to their build-out pace. The goal is 90 seconds of attention; no ask beyond that.

## STRUCTURE
1. Subject line — Short, no hype, anchored to the expansion trigger. Formal tone for a culinary director.

2. Salutation and opening — Acknowledge the expansion as context (not "just reaching out"); make the reason for the message concrete and immediate.

3. Core hook — One tight paragraph covering what the Northwind XR-Series does operationally (equipment consolidation, footprint recovery, throughput readiness) and why it matters to a multi-unit rollout. Tie to the headline value (time and cost). Do not pitch features; pitch the problem it solves at scale.

4. Signoff — Minimal. Professional close with a soft next step (call, brief conversation, calendar link — your choice on format).

5. Word count guardrail — Stay under 100 words for the body (salutation + opening + hook + signoff).

## GROUNDING
- Expansion trigger is the sole anchor: 14 new locations in 18 months = equipment decisions happening now, kitchen design in flight, training timelines compressing.
- Mark Vidal is a culinary operations leader, not a purchaser. Speak to operational readiness and line-staff simplicity, not capex or procurement process.
- The Northwind XR-Series replaces multiple pieces of equipment in one footprint — this is the time-saver and the cost-saver (less capital spend, less floor space, less redundant staffing).
- Avoid category language ("combi oven," "steam generator," "convection"). Speak in his world: equipment consolidation, kitchen efficiency, staff training speed, rollout readiness.
- Formal email voice — no "quick question," no urgency theatre, no "just checking in." Land as a peer flagging something relevant to his timeline.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [N] Cold Hook — Chef Lila Okafor / LinkedIn DM / Save Time-Cut Cost /NYT energy feature

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Chef Lila Okafor, owner-operator of three SoHo restaurants",
    "triggerEvent": "Featured in a NYT piece last week on restaurants cutting energy costs without sacrificing menu"
  },
  "sliderValues": {
    "outreach-channel": 0,
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 5921ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3255 | **Out:** 423 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn after she was featured in a recent NYT piece on restaurants cutting energy costs. I need you to write a short-form hook—under 100 words—that earns 90 seconds of her attention by anchoring to that trigger and the twin value drivers of time savings and cost reduction. This is a DM, so keep it conversational and direct; no subject line or formal signoff needed.

## STRUCTURE
1. **The Hook**
   - Anchors to the NYT feature and her specific angle (energy cuts without menu compromise)
   - Concrete value: the XR-Series replaces four pieces of equipment in one footprint *and* runs on lower energy per cooked pound
   - Tone is peer-to-peer, not vendor-to-buyer; respect her expertise and her time
   - No ask for a call or meeting—just signal that a brief conversation could be worth her while
   - Under 100 words

## GROUNDING
- Chef Lila is an owner-operator running three high-volume locations—she owns the P&L and the kitchen constraints; speak to *her* problems, not a procurement team's
- The trigger is the NYT feature on energy efficiency *without sacrifice*—she's already public on this priority, so lead there, not on features
- Energy cost and floor space recovery are the leverage points for a multi-unit operator; time savings (one-touch recipes, faster training) compounds across three kitchens
- Avoid foodie jargon, technical spec-speak, and generic "let's grab coffee" phrasing
- Keep the tone confident but not salesy; she's been featured in the Times—she doesn't need convincing that efficiency matters

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Cold Hook — Rachel Mendez (PE-backed CEO) / Email C-Suite / Save Time-Cut Cost /Q4 margin compression earnings call

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Rachel Mendez, CEO of Ridgeway Industrial (PE-backed, ~$80M rev)",
    "triggerEvent": "Disclosed Q4 margin compression on the most recent quarterly call to investors"
  },
  "sliderValues": {
    "outreach-channel": 3,
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 6407ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3263 | **Out:** 455 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Rachel Mendez, the CEO of a PE-backed industrial company that just disclosed margin compression on their latest investor call. Write me a hook under 100 words that earns 90 seconds of her attention — no ask, just enough specificity to make her curious about a conversation.

## STRUCTURE
1. Subject line
   - Anchor to the margin compression trigger without naming it directly
   - No spam energy, no urgency fake-outs

2. Body copy
   - Open with a single concrete observation tied to the margin pressure she disclosed
   - One sharp reason why her leadership team should care (PE backing + margin = pressure on exits)
   - One proof point that we don't hand off to junior staff — senior partners only
   - Close with permission to talk, no call-to-action pressure

3. Signature
   - Name, title, direct contact

## GROUNDING
- Rachel is PE-backed and margin-conscious; she's already fielding cost-cutting advice. Don't sound like the noise — be specific about *who* fixes this (senior partners embedding, not a task force) and *how fast* (12 weeks, working fixes shipped).
- Margin compression is the sting; PE ownership is the urgency. Avoid generic "operational efficiency" speak.
- Don't mention our fee structure, our rejection rate, or success-alignment language — that's premature and reads defensive at cold stage.
- No false specificity: I haven't given you details about Ridgeway's actual operations, cash leaks, or margin targets. Stay with the trigger (disclosed compression) and the credibility play (senior-only delivery).
- Avoid: "We've helped companies like yours," "proven ROI," "industry-standard benchmarks," buzzwords about "transformation."
- The hook must make her think "This person knows what margin pressure feels like" — not "This is another consulting pitch."

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

## [A] Cold Hook — Tomas Becker (succession) / Email Casual / Reduce Risk

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "cold-hook",
  "variableValues": {
    "prospectName": "Tomas Becker, COO of Becker Logistics (family-owned, ~250 employees)",
    "triggerEvent": "Recently took over operations from his father, who founded the company"
  },
  "sliderValues": {
    "outreach-channel": 1,
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 6696ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3259 | **Out:** 435 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO at Becker Logistics, who recently inherited operations leadership from his father. Write me a short-form email hook (under 100 words) that lands in a casual inbox and earns 90 seconds of attention by anchoring to the risk that comes with operational transition — not the upside, the exposure he's walking into. No pitch; just enough specificity to make him think "how do they know this about my situation?"

## STRUCTURE
1. **Subject line** — Casual tone. Signal the risk angle without sounding ominous; make him open it.
2. **Body** — Under 100 words. Open with the transition-specific risk (taking over from a founder-built operation carries blind spots and margin leaks the previous operator absorbed or didn't see). Land the insight that a fresh set of senior eyes in those first 12 weeks can surface cash leaks before they compound. Close with a soft ask to grab 15 minutes.
3. **Signature** — Keep it simple; casual alignment with the email tone.

## GROUNDING
- Tomas is newly in the COO seat at a family business — he owns the transition risk personally. Don't sound like you're selling; sound like you've seen this movie before.
- Founder-to-next-generation handoffs often surface margin issues the founder had workarounds for (or didn't see). That's the real insight here.
- No stats, no Aldermark flexing, no "we help companies like yours" — just the risk he's actually facing.
- Casual email means short sentences, no corporate formality, conversational without being sloppy.
- Avoid: "operational efficiency," "optimize," "process improvement," "best practices" — buzzwords that sound like every other consultant.

## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.

## DRILL-DOWN OFFER

After delivering the outreach hook, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.

```

---

