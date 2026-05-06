# cold-hook — stress test results

**Run:** 2026-05-04-cycle11  
**Cases:** 9 (9 OK)  
**Tokens:** 24,711 in / 3,794 out  
**Engine cost (this tool):** $0.0349  

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

**Status:** OK | **Time:** 5462ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2698 (read=0, write=0) | **Out:** 339 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching Marcus Reid (VP RevOps) cold on LinkedIn DM. He just posted on pipeline efficiency and earned significant traction. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of his attention — something he'll want to reply to, not swipe away.

## STRUCTURE

1. **Hook — one tight paragraph**
   - Open with the trigger (his post landed); make it specific to what he wrote about, not generic praise
   - Anchor to pipeline efficiency as the bridge to my product's core strength
   - Surface the value prop in plain terms (time savings or cost reduction, your pick)
   - Close with a single, low-friction ask (not a meeting; a reply or a 30-second question)
   - No CTA buttons, no formal sign-off; DM voice throughout

## GROUNDING

- Marcus is RevOps — he owns pipeline data, forecast accuracy, and rep efficiency; he feels the tax of bad CRM hygiene and forecast misses every day
- Velara Revenue OS auto-captures activity and surfaces deal risk in real time; lean on the efficiency and time-recapture angle
- No stats, guarantees, or specificity I haven't given you; avoid "industry standard" claims
- Assume he's skeptical of vendor noise; be direct and conversational
- LinkedIn DM tone: colleague-to-colleague, not salesy

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

**Status:** OK | **Time:** 5471ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2706 (read=0, write=0) | **Out:** 399 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm reaching out via email to Priya Nair, Head of GTM, cold. She's just dealt with a publicized security incident from her current vendor. My posture is casual and direct — not alarmist, not fake-urgent, just a straightforward reason to open the email. Your job: write a short-form hook (under 100 words) that lands hard enough to earn 90 seconds of her attention. Lead with the trigger, not with me.

## STRUCTURE
1. Subject line + salutation — casual email framing, no false urgency or gimmicks
2. Hook (under 100 words) — The security incident is the real wedge here; use it as the entry point. The value prop sits downstream (not in this hook), but anchor the hook to what matters to a GTM leader right now: confidence in their tooling. Don't pitch Revenue OS by name; let the hook earn permission to talk about it next.
3. Signoff — casual, one-liner, no CTA pressure

## GROUNDING
- Priya is GTM-focused, not ops-focused — she cares about revenue impact and team velocity, not CRM admin burden. The incident is real friction; don't downplay it.
- Casual tone means no corporate stiffness, no "ecosystem partner" language, no compliance jargon.
- The trigger (security incident) is the only leverage you have cold; deploy it cleanly, not as a scare tactic.
- Avoid naming her current vendor or any other competitor; reference "your current vendor" or "recent incident" if needed.
- This is a wedge, not a close — your only job is the 90-second open.

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

**Status:** OK | **Time:** 7164ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2703 (read=0, write=0) | **Out:** 485 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm emailing David Kowalski, a CRO who just disclosed a missed Q3 ARR target. My goal is to earn 90 seconds of attention with a short-form hook (under 100 words) that positions me as someone who understands the specific cost of that miss and has a concrete lever to prevent the next one. I'm early-stage here — not pitching yet, just cutting through noise with relevance.

## STRUCTURE

1. **Subject line** — Anchor to the missed target as the trigger; signal that what follows is about preventing recurrence, not diagnosing what happened.

2. **Hook (under 100 words)** — Open with the miss as shared context. Surface the operational reality behind forecast misses (pipeline visibility, deal velocity, rep alignment). Position Velara Revenue OS as the real-time mechanism that surfaces deal risk before it becomes a number — not as a tool, but as a safeguard. Avoid generic "revenue growth" language; ground in the specific problem of *knowing* where deals stand when it matters. End with a soft ask (brief conversation, specific question posed to him).

3. **Signature** — Your name, title, company, and a single direct channel (email or phone).

## GROUNDING

- David is a CRO — he owns both the miss and the recovery plan. Speak to accountability and actionability, not blame or excuses.
- The 18% miss is public and fresh. He's already fielded board questions. Your hook should assume he knows the problem exists; focus on the forward-looking mechanism to prevent recurrence.
- "Revenue growth" is noise at C-suite. Reframe around *forecast precision* and *deal visibility* — the operational levers he actually controls.
- Avoid "pipeline" jargon, percentages, or product feature lists. Stay concrete: what does a CRO need to know about deals in real time that he doesn't know now?
- No false urgency, no artificial scarcity, no generic "we helped companies like you." Stick to the trigger and the mechanism.

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

**Status:** OK | **Time:** 8302ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2684 (read=0, write=0) | **Out:** 405 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn DM with a hook that lands in under 100 words and earns 90 seconds of their attention. My posture is direct and curiosity-driven — not pushy. The trigger is concrete; use it as your anchor.

## STRUCTURE

1. **Hook copy (under 100 words)**
   - Open with the trigger as the real entry point — missed last quarter is the visible signal
   - Frame the real problem beneath it: deals slip, forecasts miss, the pipeline data isn't moving them forward
   - Make it clear and immediate why they'd care to respond (not vague or generic)
   - Close with a simple, low-friction ask — one sentence that invites them to a short conversation
   - Tone: direct peer-to-peer, no corporate polish; conversational rhythm

2. **Channel calibration for DM**
   - No subject line needed
   - Skip formal salutation; open with the hook directly
   - No signoff required; let the ask be the close

## GROUNDING

- Jordan Mehta missed their last quarter — that's visible strain on forecast accuracy and pipeline visibility; lean into that as the real problem, not as a weakness to pity
- Velara Revenue OS eliminates forecast misses by auto-capturing deal activity and surfacing pipeline risk in real time — anchor to the forecast accuracy capability as the core differentiator
- Keep language stripped of jargon: no "revenue intelligence," "pipeline hygiene," "deal velocity," or other buzzwords; speak like someone who sees the problem from inside a sales org
- No numbers, percentages, or assumed specifics — the trigger is "missed last quarter"; that's all you have

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

**Status:** OK | **Time:** 6276ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2719 (read=0, write=0) | **Out:** 462 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Revenue OS. I'm reaching out to Erin Park, VP of GTM Operations at Rampcheck, cold — she flagged forecast accuracy at quarter-end as a board credibility issue in a recent All-Hands. I need you to be my cold outreach specialist and write me a short-form email hook (under 100 words) that lands on her desk formal and tight, earns 90 seconds of attention, and makes her want to take a conversation.

## STRUCTURE

1. **Subject line**
   - Anchor to the board credibility angle and forecast accuracy — not generic "let's talk" framing
   - No buzzwords; sound like a peer who knows the problem

2. **Salutation**
   - Formal; use her name

3. **Body**
   - Open with why you're reaching out: reference the trigger (forecast accuracy at quarter-end) and tie it to her role without sounding like you're reading from a script
   - One clear, concrete reason to take the call — anchor to forecast accuracy improvement and the speed/ease of getting there, not a feature dump
   - Avoid positioning as a pitch; position as a resource who knows this specific pain
   - Stay under 100 words total (subject + body)

4. **Signoff**
   - Professional; include your name and a one-line value hook that reinforces why she should reply

## GROUNDING

- Erin flagged forecast accuracy and board credibility — that's your wedge; don't soften it
- Velara Revenue OS eliminates forecast drift through real-time pipeline intelligence; that's the substance behind the hook
- She's VP of GTM Operations, not a sales ops analyst — speak to the business impact (board confidence, revenue predictability) not the mechanics
- Avoid CRM jargon, AI marketing language, and false urgency
- Formal email tone: no emojis, no "quick question," no filler
- Short means sharp — every word earns its place

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

**Status:** OK | **Time:** 6302ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2798 (read=0, write=0) | **Out:** 444 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, on the back of their press release announcing 14 new locations over the next 18 months. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that lands in his inbox as something worth 90 seconds of his attention. I want the headline value anchored to operational efficiency (the time and cost angle on kitchen buildout at scale), not product specs.

## STRUCTURE
1. **Subject line** — One-line anchor to the trigger (the expansion) and the headline value (time or cost savings in kitchen setup). No generic "Quick question" or "Let's talk" language.

2. **Salutation and body** — Casual-professional tone. Open with specificity to his situation (the expansion scale), then pivot to the concrete operational lever without pitching. The hook must make him curious about what we're doing differently — not sell the Northwind XR-Series by name or list features. Name the product only if it lands naturally; don't force it.

3. **Signoff** — Brief, professional. Include my name and a single, easy call-to-action (no multiple options or links).

## GROUNDING
- Trigger is real and sourced: 14 new locations, 18-month rollout.
- Headline values are time and cost in kitchen equipping — not energy efficiency, warranty length, or space recovery (those are downstream conversations).
- Ascend Hotel Group runs foodservice operations at scale; assume Mark knows kitchen equipment decisions matter to buildout timelines and budgets.
- Avoid combi-oven jargon, competitor callouts, or anything that reads like a spec sheet.
- "Under 100 words" is a hard constraint; economy of language is the point.

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

**Status:** OK | **Time:** 5918ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2797 (read=0, write=0) | **Out:** 376 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn. You're my cold outreach specialist — write me a short-form hook (under 100 words) that lands in her DM and earns 90 seconds of her attention. She was just featured in a NYT piece on cutting restaurant energy costs without sacrificing menu. Anchor hard to that trigger and the dual value of saved time and saved cost — make her recognize herself in the message.

## STRUCTURE
1. Hook — One tight sentence or short phrase that mirrors her stated win (energy + menu integrity) and signals you've read the article, not sent a template.
2. Proof or Credibility — One sentence that shows why I can back this up (kitchen-specific, not generic).
3. Ask — Crystal clear, low-friction next step (no calendar link, no "let's sync" vagueness).

## GROUNDING
- She's an owner-operator across three units — time and capital efficiency matter more than feature depth; speak to operational leverage and the footprint win, not technical specs.
- The NYT angle is real — anchor to it, not to energy claims I introduce. Let the article be the credibility bridge.
- Avoid energy percentages or efficiency numbers; reference the *capability* (energy savings, not a specific measurement).
- Keep the tone owner-to-owner — peer, not supplier. She's a decision-maker with skin in the game.
- LinkedIn DM voice: direct, concise, no corporate warmth or hedging. She reads fast.

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

**Status:** OK | **Time:** 6914ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2805 (read=0, write=0) | **Out:** 475 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm emailing Rachel Mendez, CEO of Ridgeway Industrial, cold — she disclosed margin compression in Q4 on her most recent investor call. Be my cold outreach specialist and write me a short-form hook (under 100 words) that lands in her inbox as something worth opening and reading through to the close.

## STRUCTURE
1. Subject line — anchor to margin recovery or operational efficiency, not generic "let's talk" language; make it specific enough that it lands differently than spam.

2. Salutation — professional, brief.

3. Body — open with the trigger (Q4 margin compression she disclosed publicly), then name what we do in one sentence (12-week embedded fix, not advisory decks), close with a single, low-friction next step (call, brief conversation, etc.). The dominant tone is peer-to-peer respect — we know what margin pressure looks like in industrial, and we ship working fixes, not recommendations. Avoid disclaimers, apologies, or hedging.

4. Signoff — professional, name and title only.

## GROUNDING
- Rachel is CEO of a PE-backed industrial company at scale; she owns the P&L and cares about cash and speed — not process or methodology.
- Margin compression is her real pain; frame our engagement around the three cash leaks we'd diagnose and fix, not around "operational excellence" or consulting.
- Our core differentiator for this audience: we embed senior partners, ship working fixes by week 12, and tie 50% of our fee to measurable margin recovery — no junior staff, no slides, no delays.
- PE-backed industrials are our bread and butter; assume she knows we know her world.
- Keep it short; under 100 words means every sentence earns its place. Cut any throat-clearing, context-setting, or soft opens.
- Avoid jargon like "optimization," "synergies," "transformation," or "strategic alignment" — these bounce off PE-backed ops leaders.

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

**Status:** OK | **Time:** 6322ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2801 (read=0, write=0) | **Out:** 409 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO of Becker Logistics, who recently took over operations from his founder-father. Be my cold outreach specialist and write me a short-form hook under 100 words that lands in his inbox with enough pull to earn 90 seconds of attention. The tone is casual; the stance is peer-to-peer, not consultant-to-prospect. The headline value is risk reduction.

## STRUCTURE
1. Subject line — Casual, specific to Tomas's situation (recent ops takeover), no clickbait or urgency fabrication.
2. Salutation — First-name basis, match the casual tone.
3. Body — Hook that connects his transition to a concrete operational risk, then hint at the working fix angle (not a study, not a deck). Land the ask small and clear.
4. Signoff — Casual, first name only.

## GROUNDING
- Tomas just inherited ops responsibility from his founder-father — this is the trigger. Lean into the transition, not generic "operations bleeding margin" language.
- Risk reduction is the headline; position this as a way to stabilize the hand-off period, not a rescue project.
- Becker Logistics is founder-led and ~250 people — exactly our sweet spot. You can anchor to that without naming it.
- Avoid consultant-speak (audit, assessment, optimization, strategic review). We embed and ship fixes; hint at that difference without over-explaining.
- No made-up metrics, no "companies like yours," no false specificity about his business.
- Keep it under 100 words. Casual email voice — short sentences, no jargon.

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

