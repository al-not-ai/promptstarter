# cold-hook — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 28,833 in / 3,851 out  
**Engine cost (this tool):** $0.0385  

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

**Status:** OK | **Time:** 5847ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3156 (read=0, write=0) | **Out:** 376 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Marcus Reid, VP RevOps, on LinkedIn via DM after he posted publicly on pipeline efficiency. My goal is to earn 90 seconds of attention and a micro-commitment to a brief conversation. Write me a hook — tight, credible, no pressure.

## STRUCTURE
1. Hook (under 100 words)
   - Anchor to the trigger: his pipeline efficiency post. Don't generic-praise it; signal you read it and spotted a concrete signal.
   - One sharp value prop tied to time/cost savings. Pick the one lever that will land with a RevOps leader, not a scatter of features.
   - Micro-commitment only — a question or soft ask for 15 minutes, not a demo or deep dive.
   - No "I just wanted to reach out" or soft opening. Lead with substance.

## GROUNDING
- RevOps leaders live in pipeline visibility and forecast trust. Anchor to one of those, not broad efficiency.
- Velara auto-captures activity and surfaces deal risk in real time — these are the moves that actually save RevOps time. Pick one for this hook.
- No product name-drop required if the value lands without it. If you do name it, keep it clean.
- Avoid vague efficiency language ("streamline," "optimize," "enhance"). Be specific about what actually changes.
- Tone: peer-level, not supplicant. He's a thought leader; don't treat him as a cold target.
- This is a DM — short is credible. Walls of text fail on LinkedIn.

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

**Status:** OK | **Time:** 7418ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3164 (read=0, write=0) | **Out:** 520 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Priya Nair, Head of GTM, via email in a casual tone. She's just dealt with a security incident involving her current outreach platform — that's my opening wedge. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention, anchored to the headline value of time savings and cost reduction.

## STRUCTURE
1. **Subject line** — Casual, short, no "urgent" energy; the security incident is the implicit frame (don't name it directly; imply the context shift).
2. **Body** — Hook that lands the trigger (they're evaluating alternatives now), surfaces one concrete friction point (CRM data rot, missed forecast accuracy, or rep coaching gaps — pick the one that lands hardest for a GTM leader), and closes with a single, low-friction next step (15-min call, one question answered, etc.). Tone: peer-to-peer, no hard sell. Under 100 words.
3. **Signature** — Casual; include my name and a single way to reach me (email or LinkedIn, your call).

## GROUNDING
- Priya is GTM-minded, so the hook must speak to rep productivity and forecast visibility — not IT security jargon or vendor whiplash. She cares about enablement and pipeline health, not compliance theater.
- The security incident is the *reason* she's listening, not the *message*. Don't lead with "I saw your vendor had a breach" or sound like a vulture. Lead with the opportunity (she's reviewing alternatives) and land on what Velara solves that her old vendor didn't.
- Velara Revenue OS eliminates manual CRM updates and surfaces real-time coaching signals — those are the muscle for a GTM leader under pressure. Don't bury them; make them the anchor.
- Avoid: buzzwords like "innovative," "best-in-class," "synergy," "modern." Avoid: assuming she wants a demo or a meeting — she doesn't yet. Avoid: mentioning the incident name or tone of crisis.
- Keep it casual — Priya is pragmatic, not formal. One sentence, no run-ons.

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

**Status:** OK | **Time:** 6889ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3161 (read=0, write=0) | **Out:** 505 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to David Kowalski, a CRO whose company just missed Q3 ARR target by 18%. Be my cold outreach specialist and write me a short-form hook — under 100 words — that lands in his inbox and earns 90 seconds of attention without sounding like a pitch.

## STRUCTURE
1. Single subject line
   - Signals relevance to a missed target and revenue recovery, not a generic "check in" or "quick question"
   - No hyperbole, no clickbait, no urgency language ("URGENT", "TODAY")

2. Short-form hook (under 100 words)
   - Opens with the specific trigger: the missed Q3 target
   - Frames Velara Revenue OS as the connective tissue between forecast accuracy and execution — the real-time visibility that catches misses before they're fatal
   - Anchor to our auto-capture and live coaching; don't bury CRM drift as the problem (he knows that), lead with the business outcome
   - One clear next step (call, brief conversation, response) — specific and low-friction
   - No generic value prop, no "we help companies like you", no data claims he can't verify

3. Sign-off
   - Professional, concise, includes your name and direct contact (email or phone — your choice)

## GROUNDING
- David's a CRO — he owns the miss. He's not looking for blame; he's looking for the gap between forecast and reality. That's your thread.
- Missed target by 18% means visibility, pipeline hygiene, or deal execution broke down (or all three). Point to the real-time signals that would have flagged it, not the tool.
- Avoid: "predictive", "AI-powered", "transform", "unlock", "maximize", "proven results" — these bounce off CROs who've heard them a thousand times.
- Avoid: any stat, metric, or claim not in my inputs. The miss is real; everything else is assumption.
- Keep it tight and assumptive — he's busy and skeptical. Respect that by not overselling.

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

**Status:** OK | **Time:** 4918ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3142 (read=0, write=0) | **Out:** 320 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Jordan Mehta on LinkedIn to grab 90 seconds of attention around a miss in their last quarter. Write me a short-form hook under 100 words that lands clean on DM — no subject line needed, just the message itself.

## STRUCTURE
1. Hook — lands the trigger (missed quarter) as real, concrete, and fixable; surfaces the core reason for reaching out without sounding like a sales pitch
2. Value frame — ties the miss to forecast visibility and pipeline intelligence (what Velara does); anchor to the idea that the miss often signals a data problem, not just a sales problem
3. Micro-ask — specific and low-friction; no ask to "grab coffee" or "jump on a call"; something they can say yes to in-thread

## GROUNDING
- Jordan's miss is the only signal you have; treat it as the real entry point — it's not a cold intro, it's a response to a visible event
- Pipeline intelligence and forecast accuracy are your leverage, not product features; stay outcome-focused
- Avoid generic "let's connect" energy; the hook earns attention by naming the problem they're likely facing
- Keep tone direct and peer-level; no cheerleading, no false warmth
- LinkedIn DM norms: shorter is sharper; under 100 words is a hard ceiling

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

**Status:** OK | **Time:** 5503ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3177 (read=0, write=0) | **Out:** 406 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park, VP of GTM Operations at Rampcheck, off a recent public trigger about forecast accuracy credibility. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that earns 90 seconds of attention on the basis of the trigger, lands the revenue-growth headline, and feels natural in a formal email channel.

## STRUCTURE
1. Subject line
   - Credibility-forward, not cute; signal relevance to her specific credibility gap with the board

2. Salutation and body
   - Opens with the trigger (forecast accuracy miss) as the anchor — name it directly, no softening
   - Positions Velara Revenue OS as the resolution: auto-capture eliminates the manual CRM work that tanks accuracy
   - Closes with a soft next step (no hard ask; just permission to grab 15 minutes)
   - Tone: peer-level, direct, no spray-and-pray

3. Signoff
   - Professional, consistent with formal email channel

## GROUNDING
- Anchor hard to the trigger: board credibility tied to forecast accuracy. This is her stated pain, not a guess.
- Velara Revenue OS auto-captures deal activity from email and calendar — zero manual CRM updates. This is the lever: manual work is what kills forecast accuracy.
- No product jargon; speak to the outcome (accuracy, credibility restored).
- Avoid: generic "improve your forecast" messaging, multi-feature laundry lists, anything that sounds like a mass template.
- Formal channel means no emoji, no casual tone, no first-name-only openers unless she's used that in public comms.

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

**Status:** OK | **Time:** 7167ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3256 (read=0, write=0) | **Out:** 474 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal at Ascend Hotel Group via formal email off the back of their expansion announcement. Write me a short-form hook — under 100 words — that lands in his inbox with enough pull to earn 90 seconds of attention. Calibrate to his role (culinary ops lead scaling 14 new locations) and the immediate operational reality: equipping new kitchens fast, staying on budget, and keeping line staff ramp-up simple.

## STRUCTURE
1. **Subject line.** Trigger-aware (expansion context), value-forward (time or cost savings), specific to his role. No clickbait or false urgency.

2. **Body (under 100 words).** Open with a concrete reason you reached out — the expansion is the hook. Lead with the headline value (save time or cut cost, your choice based on what lands harder for his situation). Anchor to one capability of my product that solves a real friction point in equipping new locations or training line staff at scale. End with a clear, soft ask (5-minute call, brief conversation — something low-friction he can say yes to).

3. **Signature.** Professional, rep name + title + company + phone.

## GROUNDING
- Mark is operationally focused — he cares about execution, timeline, and staff readiness. Skip product specs; focus on what his expansion problem actually is.
- The expansion is the only reason I'm emailing. Anchor the entire hook to that trigger.
- Kitchen equipment buyers at his level are skeptical of "save money" claims that don't land on concrete tradeoffs (energy, space, training complexity). Pick one real pain point from the expansion and tie the value claim to it.
- No competitor names, no percentages or numbers I haven't given you. If you need a specific cost or time saving to make the case crisp, ask me for it.
- Formal email tone — respect his time and role; no buddy language or hype.

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

**Status:** OK | **Time:** 6077ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3255 (read=0, write=0) | **Out:** 408 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn via DM. She was just featured in a NYT piece on restaurants cutting energy costs without sacrificing menu — that's my hook. Write me a short-form hook under 100 words that earns 90 seconds of her attention. I want to lead on time and cost savings together (no energy-only pitch). Make it feel like I noticed her specifically; don't sound like I'm blasting.

## STRUCTURE

1. Hook message (LinkedIn DM format)
   - Acknowledge the NYT piece and her restaurant operation by name
   - Land the core insight: one oven replaces four pieces of equipment *and* cuts energy spend — stack both wins
   - End on a concrete next step (conversation, 15 min, etc.) — not a vague CTA
   - Tone: Direct, respect her time, no hype

## GROUNDING

- Prospect is an owner-operator of three restaurants — she owns the P&L and cares about both floor space and operating margin
- The trigger is real and recent (NYT feature last week) — use it as permission to reach out, not as proof of a problem she's already solving
- Energy savings alone won't move her; stack it with the space recovery (14 sq ft per unit) and training efficiency (line staff trained fast)
- Avoid: generic "we help restaurants save energy" framing, competitor name-drops, or assumptions about her current equipment
- Keep it tight — LinkedIn DMs reward brevity; under 100 words means every line earns its place
- No false familiarity or "I read your interview" overtures that sound mass-produced

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

**Status:** OK | **Time:** 7506ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3263 (read=0, write=0) | **Out:** 501 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Rachel Mendez, CEO of a PE-backed industrial company that just disclosed margin compression. Be my cold outreach specialist and write me a hook under 100 words that lands in her inbox as urgent and credible — something that makes her want 90 seconds on the phone to hear what we've seen in similar situations. She's a busy CEO; the trigger is real and recent. Treat that margin problem as the only reason this email exists.

## STRUCTURE

1. **Subject line** — Sharp, specific to her disclosed margin issue. No generic "quick call" energy.

2. **Email body** — Under 100 words. Open with the trigger (margin compression is real; we see it constantly in PE industrial shops). The body must name the type of work we do (hands-on operational fixes, not recommendations) and hint at speed (12 weeks is the frame). Close with a single, low-friction ask — 15 minutes, phone, this week ideally. No "let me know your availability" softness.

3. **Signature** — Your name, title, and a single direct line or email.

## GROUNDING

- Rachel is a CEO of a real, PE-backed shop at $80M revenue — she's drowning in operator work and investor pressure. Speed and concrete outcomes matter more than methodology. Avoid consulting jargon ("stakeholder alignment," "transformation roadmap," "synergy").
- The margin compression disclosure is her pain point — anchor hard to that exact problem. Don't generalize to "operational inefficiency" or "growth challenges." She named the wound publicly.
- PE-backed industrial CEOs are skeptical of consultant theater. Emphasize that we ship actual fixes (not decks) and that we work embedded with leadership — it's credible exactly because it's unglamorous.
- No invented specifics. The trigger is margin compression on her recent call. Don't invent a percentage, timeline, or business unit affected unless she disclosed it.
- Avoid: "best practices," "transformation," "world-class," "game-changing," buzzwords. Speak like an operator, not a vendor.

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

**Status:** OK | **Time:** 5253ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3259 (read=0, write=0) | **Out:** 341 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO at Becker Logistics, who recently took over operations from the founder. Write me a short-form email hook (under 100 words) that lands in a casual tone and earns 90 seconds of attention by anchoring to the risk he's carrying in a transition like this.

## STRUCTURE
1. Subject line — casual, risk-forward, not salesy. Name the real thing he's managing, not a generic pain.
2. Hook (under 100 words) — one concrete observation about the operational risk that comes with inheriting a founder-led operation. Ground it in what typically breaks in that transition. Close with a single, low-friction next step (short call, brief conversation). No pitch. No mention of Aldermark, consulting, or process.

## GROUNDING
- Trigger is the transition itself — he's navigating a leadership handoff. Risk is your anchor, not "opportunity."
- Family businesses often run on founder knowledge, relationships, and informal systems. The operational fragility is real in that context.
- Casual tone means conversational, no corporate polish. Skip jargon.
- Don't invent specifics about Becker Logistics operations, margin pressure, or any unnamed problem. Stick to what a transition like this universally surfaces.
- Keep the ask small. You're earning attention, not closing anything.

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

