# cold-hook — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (9 OK)  
**Tokens:** 18,634 in / 4,093 out  
**Engine cost (this tool):** $0.0313  

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

**Status:** OK | **Time:** 5276ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2019 | **Out:** 364 | **Cost:** $0.0031

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to Marcus Reid, a VP RevOps who just posted on pipeline efficiency. I need you to write a short-form LinkedIn DM hook (under 100 words) that lands in his inbox cold, acknowledges his recent post without kissing up, and threads the "save time" angle to earn 90 seconds of attention — no ask, just intrigue.

## STRUCTURE
1. Hook — Open by naming his post as the warm entry point; avoid generic praise. Land on the time-saving angle (auto-captures deal activity from email and calendar, zero manual CRM updates) as the bridge to why I'm reaching out.
2. Specificity — One crisp observation about what VP RevOps spend time on that could evaporate. Keep it pattern-level, not company-assumed.
3. Close — Soft permission ask (not a meeting pitch). Leave him a clear 90-second next step if he's curious.

## GROUNDING
- Marcus just posted on pipeline efficiency; treat that as your only warm signal — don't invent other context.
- "Save time" is the headline, but anchor it to the real mechanism: auto-capture eliminates manual CRM data entry. That's the time-back story.
- Keep it under 100 words; DMs reward brevity.
- No jargon about "Revenue OS" or "pipeline intelligence" — translate to his job (less admin, faster visibility, fewer data gaps).
- Avoid "I saw your post and loved it" energy; acknowledge it as the trigger, not the compliment.

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

## [V] Cold Hook — Priya Nair / Email Casual / Cut Cost / competitor breach trigger

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
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 6086ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2027 | **Out:** 469 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that kills CRM data rot and surfaces deal risk before it kills deals. I'm cold-emailing Priya Nair, Head of GTM, after a publicized security incident at her current vendor (Outreach.io). I need you to write a short-form hook under 100 words that cuts through the noise by anchoring to cost savings, lands casual and direct, and earns 90 seconds of her attention without sounding salesy.

## STRUCTURE
1. **Opener** — Reference the vendor security incident as context (not as scare tactic). Make it factual, brief, move fast.
2. **Value snap** — One sentence on cost. Highlight what she stops spending on (manual CRM updates, implementation heavy lifting, forecast guesswork).
3. **Proof hook** — Velara Revenue OS ships live in 14 days, no implementation fees, no professional services. Make that feel like relief, not a feature list.
4. **Close** — Soft ask. One sentence. Leave the door open for a quick call or conversation — no pressure.

## GROUNDING
- Anchor every claim to Velara Revenue OS capabilities I own: auto-capture from email/calendar, 14-day deployment, zero implementation fees.
- Casual tone — this is email, not a corporate memo. Short sentences. No jargon.
- Avoid "synergy," "best-in-class," "industry-leading," or any generic SaaS filler.
- Cost angle: frame it as what she *stops* spending (time, implementation hours, guesswork), not what she saves as a percentage. No invented numbers.
- Security incident is the door opener, not the scare. Don't dwell on it or oversell the urgency — let it breathe.
- Keep Priya's role (Head of GTM) in mind: she cares about pipeline health, team velocity, and cutting waste. Land there, not in IT or compliance language.

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
    "value-angle": 3
  }
}
```

**Status:** OK | **Time:** 6959ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2027 | **Out:** 486 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that surfaces deal risk before it's fatal. I'm cold-emailing David Kowalski, CRO, after his company missed Q3 ARR target by 18%. I need a short-form hook (under 100 words) that lands in his inbox without sounding like outreach, acknowledges the miss without being tone-deaf, and earns 90 seconds of attention by anchoring to the one thing a CRO in his position cares about most right now: pipeline visibility and forecast accuracy.

## STRUCTURE
1. Subject line — One sharp phrase that lands as relevant news, not pitch. Avoid "urgent," "quick question," or generic "Growth" language; anchor to the miss or the aftermath (visibility gap, forecast risk, pipeline clarity).
2. Salutation — Use his name, keep it short.
3. Body (under 100 words) — Open with a one-sentence acknowledgment of the Q3 miss that signals you're not guessing. Pivot to a single, tight insight: the visibility gap that likely contributed (forecast decay, deal slippage going unseen, pipeline stall). Name Velara Revenue OS once. End with a single, low-friction ask — a 15-minute call or a 3-minute video showing how we surface deal risk in real time.
4. Signature — Title, company, single contact method (email or phone, not both).

## GROUNDING
- CROs post-miss are paranoid about forecast accuracy and hidden deal decay — anchor there, not growth tactics.
- Avoid financial jargon or ROI math; he doesn't trust a number he didn't build himself.
- One product mention only (Velara Revenue OS); no feature spray.
- No statistics, percentages, or "most companies" patterns — stick to what you know: his Q3 result.
- Cold tone: respectful, specific to his situation, no urgency theater.
- Subject lines that work here: signal intelligence (e.g., "Pipeline gaps in Q3 misses"), not CTA energy.

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
    "value-angle": 3
  }
}
```

**Status:** OK | **Time:** 5579ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2008 | **Out:** 398 | **Cost:** $0.0032

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS — a real-time pipeline intelligence platform that kills CRM data rot and surfaces deal risk before it tanks forecasts. I'm reaching out cold to Jordan Mehta on LinkedIn. Write me a short-form hook under 100 words that grabs 90 seconds of attention and earns a reply, anchored to the fact that they missed their last quarter.

## STRUCTURE
1. Hook — Open with a sharp observation tied to missed quarter (no generic "hope this finds you well"). Make it specific enough to show you did your homework, warm enough to feel like a peer noticing, not a prospector prying.
2. One-line value bridge — Connect their miss to the core problem my product solves: deals that slip, forecasts that miss, reps flying blind. Pick the one that lands hardest for a revenue leader in recovery mode.
3. Micro-CTA — "Quick question" or "Curious if..." — low friction, conversational, no Calendly link. Let them reply first.

## GROUNDING
- Jordan Mehta is a revenue decision-maker who just lived through a miss — they're acutely aware of forecast blindness and pipeline slippage. Lead there.
- Avoid "I noticed you missed your target" — too blunt. Aim for "Missed quarter tells me your team's probably wrestling with [signal visibility / forecast accuracy / deal surprise]."
- No numbers, projections, or promises. This is permission-to-talk, not proof.
- Keep it conversational and short — LinkedIn DMs are glanceable. Respect that.
- Don't mention Salesforce, HubSpot, integrations, or any technical jargon. Revenue language only.

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
    "value-angle": 3
  }
}
```

**Status:** OK | **Time:** 6238ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2043 | **Out:** 452 | **Cost:** $0.0034

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS to Erin Park, VP of GTM Operations at Rampcheck. She's just signaled that forecast accuracy at quarter-end is costing her team credibility with the board. I need you to be my cold outreach specialist and write a short-form hook — under 100 words, email-ready, formal tone — that lands on the one thing she cares about most: being right about the number when it matters.

## STRUCTURE
1. Subject line
   - Lead with the board-credibility angle, not the product
   - Short, specific to her problem — no generic "Thought this might interest you"

2. Salutation & opening (1-2 sentences max)
   - Name her directly; acknowledge the quarter-end pressure without sounding like you were eavesdropping
   - Tee up the hook — don't bury the insight

3. Core hook (2-3 sentences)
   - Center on forecast accuracy as the lever — it's what she said matters
   - Mention Velara Revenue OS once, by name; anchor to our 4% accuracy guarantee backed by SLA
   - No feature dump; one sharp differentiator only

4. Close & signature
   - Clear ask (call, 20 minutes, whatever fits the moment)
   - Formal sign-off; keep it pro

## GROUNDING
- Anchor everything to her quarter-end credibility gap with the board — that's the real problem
- Forecast accuracy is the core lever; don't dilute with pipeline visibility or data rot fixes
- One mention of Velara Revenue OS by name; no product jargon or acronyms she wouldn't use in a board meeting
- Skip generic GTM language (efficiency, alignment, etc.) — stay specific to her stated pain
- Formal email tone: no emojis, no exclamation chains, no false urgency
- Under 100 words total; compress ruthlessly

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

## [N] Cold Hook — Mark Vidal (Ascend Hotel Group) / Email Formal / Cut Cost / 14 new locations

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
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 7735ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2126 | **Out:** 497 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, off a trigger: they're opening 14 new locations in the next 18 months. Be my cold outreach specialist and write me a short-form email hook under 100 words that lands on cost efficiency — sharp enough to earn 90 seconds of attention and a response, no more.

## STRUCTURE
1. Subject line — one tight, benefit-forward phrase that signals cost control without hype; avoid "urgent," "exclusive," or false scarcity.
2. Salutation — formal, name-only.
3. Body — three to four sentences max. Open with the trigger (14 new locations) and the cost pain it creates. Anchor to energy efficiency and footprint recovery as the lever. One sentence on what sets us apart (measure energy, recover floor space). Close with a micro-ask: call or quick coffee, your choice, this week or next.
4. Signoff — formal, rep name and title only.

## GROUNDING
- Mark's role is culinary operations — frame this in kitchen productivity and budget terms, not chef artistry or menu innovation.
- The trigger is real growth, real capex pressure: 14 locations means 14 kitchen setups, 14 equipment budgets. Lead there.
- My product's sharp angle here is dual leverage: the Northwind XR-Series cuts energy spend *and* recovers ~14 sq ft per kitchen by replacing four pieces of traditional equipment in one unit. Both matter to a director scaling kitchens fast.
- Energy efficiency is the differentiator — anchor to 30% lower energy draw vs. Rational and Convotherm. No percentages unless sourced; this one is field-tested and lives in my profile.
- Don't mention warranty, recipe programming, or service speed — those are follow-up moves. Cost and space are the hook.
- Tone: peer-to-peer, direct, respect the inbox. Avoid foodservice jargon he hears every day; speak his budget language.

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

## [N] Cold Hook — Chef Lila Okafor / LinkedIn DM / Cut Cost / NYT energy feature

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
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 6910ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2125 | **Out:** 531 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a cold outreach specialist writing a LinkedIn DM on behalf of a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. My prospect is Chef Lila Okafor, owner-operator of three SoHo restaurants, who was just featured in a NYT piece on cutting energy costs without compromising menu quality. I need a short-form hook under 100 words that lands on cost reduction, feels personal to her win, and opens a door to a 90-second conversation — no pitch, no ask, just a sharp reason to engage.

## STRUCTURE
1. Hook (2–3 sentences max)
   - Anchor to her NYT feature and the energy-cost angle she's publicly championing
   - Reference the Northwind XR-Series by name; lead with the 30% energy efficiency edge vs. comparable units
   - No "I saw your article" vanilla openers — show you know what problem she's solving, not just that she exists

2. Micro-credibility tag (one short line)
   - Tie to same-day service network or the kitchen-space reclamation angle (whichever feels fresher given her three-location footprint)
   - No stats, no promises — just a signal that we understand multi-location ops

3. Close (one sentence)
   - Soft ask: curiosity, not obligation — e.g., "worth 90 seconds?" or "open to a quick thought?"
   - Keep it warm, not transactional

## GROUNDING
- Chef Lila Okafor is an owner-operator with a public commitment to cost reduction; prestige and quality are non-negotiable. Land on efficiency, not corners cut.
- Energy and space are the two levers she's publicly working. Pick one; don't force both.
- Avoid food-industry jargon or "chef-speak" that feels patronizing. She's a businessperson first.
- No percentages, timelines, or ROI projections — anchor only to the 30% energy-efficiency fact from my profile and the space-recovery fact if relevant.
- The NYT mention is your only social proof here; use it as permission to personalize, not as a sales credential.
- LinkedIn DMs are conversational — write like a human, not a template.

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

## [A] Cold Hook — Rachel Mendez (PE-backed CEO) / Email C-Suite / Cut Cost / Q4 margin compression earnings call

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
    "value-angle": 1
  }
}
```

**Status:** OK | **Time:** 6317ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2130 | **Out:** 437 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling our 12-Week Operations Reset to PE-backed industrial CEOs. I'm cold-emailing Rachel Mendez at Ridgeway Industrial — she just disclosed Q4 margin compression on her investor call. Be my cold outreach specialist and write a short-form hook (under 100 words) that trades on the margin problem and earns 90 seconds of her attention. No soft openings, no generic "let's explore" — sharp and specific to her situation.

## STRUCTURE
1. Subject line — one phrase that moves on margin pressure, not a question or ask
2. Salutation — CEO-direct, one line
3. Body — three short sentences maximum
   - Open: acknowledge the disclosed margin squeeze, signal that I know the real leak isn't where most think it is
   - Bridge: name the motion (12-week fix, not a study) and who does it (senior-only, no junior analysts)
   - Close: one soft ask — phone call or brief background on her ops challenge, nothing that requires a commitment
4. Signoff — first name only, no title stack

## GROUNDING
- Anchor to the Q4 margin compression she disclosed — that's your only sourced fact; don't invent other problems or financial details
- The Aldermark 12-Week Operations Reset ships working fixes, not recommendations — lead with motion and outcomes, not process
- PE-backed industrial ops often hide cash leaks in procurement, labor utilization, or asset turns — pattern-match without inventing her specific leak
- Avoid cost-cutting clichés ("optimize," "streamline," "leverage synergies") and consultant-speak
- Keep the offer frictionless: a conversation, not a deck-review or 30-minute discovery call
- Rachel is CEO of a company that matters to her PE sponsor — frame this as margin recovery for the fund, not just her P&L

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
    "value-angle": 2
  }
}
```

**Status:** OK | **Time:** 6520ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✗ | **In:** 2129 | **Out:** 459 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a cold outreach specialist writing a short-form email hook on behalf of a rep selling the Aldermark 12-Week Operations Reset. My prospect is Tomas Becker, COO of Becker Logistics, a family-owned logistics operation (~250 employees) who recently stepped into operations leadership after his father founded and ran the company. I need a sub-100-word email that lands in his inbox cold, grabs attention by framing operational risk as the real handoff challenge, and earns 90 seconds of his time — no ask beyond a reply.

## STRUCTURE
1. Subject line — One sharp phrase anchored to "reduce risk" that makes a new COO pause (family transition context implicit, not stated).

2. Salutation — Casual opener that lands warm without presuming relationship.

3. Body — Under 100 words total. Open with the specific transition risk he's living (taking over ops after founder-led era). Pivot to how we've helped similar leaders stabilize margin during handoffs. Name Aldermark 12-Week Operations Reset once. Close with a single, low-friction next step (reply or brief call).

4. Signoff — Casual, first-name only.

## GROUNDING
- Tomas just inherited operations from a founder — that's the tension. Founder-led often means undocumented processes, thin margins masked by founder relationships. Anchor to the stability and clarity risk of his transition, not generic "operational efficiency."
- Family businesses, founder handoffs: our target buyer. This is warm ground for us.
- Avoid corporate jargon, consultant-speak, and any whiff of "you're doing it wrong." Tone is peer-to-peer — respect the handoff, acknowledge the complexity.
- No statistics, percentages, or claims about margin improvement. Anchor to pattern only: "we've helped similar leaders" is the move.
- Keep it casual. Tomas just became COO — he doesn't need "Mr. Becker" or formal structure.

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

