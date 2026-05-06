# cold-hook — stress test results

**Run:** 2026-05-04-cycle10  
**Cases:** 9 (9 OK)  
**Tokens:** 24,711 in / 3,965 out  
**Engine cost (this tool):** $0.0356  

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

**Status:** OK | **Time:** 6660ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2698 (read=0, write=0) | **Out:** 473 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. I'm reaching Marcus Reid, VP RevOps, on LinkedIn DM right after his pipeline efficiency article went viral. Write me a short-form hook (under 100 words) that earns 90 seconds of his attention — the kind that makes him want to hear more, not the kind that asks for a meeting. My angle: he's clearly thinking about pipeline, and my product eliminates the manual CRM work that tanks efficiency at scale.

## STRUCTURE
1. Open with the trigger — his article's resonance signals he's actively solving this problem.
   - Reference the post itself, not generic pipeline talk.
   - Don't ask for a call or meeting; earn the next message.

2. Name the real friction — the gap between what he's writing about and what teams actually do day-to-day.
   - Be specific to RevOps pain, not generic.
   - Land it as an observation, not an accusation.

3. Introduce Velara Revenue OS as the thing that closes that gap.
   - One capability, not a feature dump.
   - Anchor to auto-capture and live visibility — the antidote to the manual work that grinds efficiency.

4. Close with a small next step that respects his time.
   - One sentence, directional, no CTA pressure.

## GROUNDING
- Marcus is RevOps — he owns pipeline health and data quality. Speak to his operational burden, not a CFO's cost concern.
- The LinkedIn DM is casual and short. Anything that smells like a template dies here.
- His article hit 8K reactions — he's confident on this topic. Don't position yourself as the teacher; position yourself as someone who solved the operational problem he's writing about.
- Avoid CRM jargon ("data hygiene", "single source of truth") — he lives it. Use plain language about the time and friction his team bleeds on manual updates.
- No meeting asks, no "let's sync," no urgency language. Just earned relevance.

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

**Status:** OK | **Time:** 6357ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2706 (read=0, write=0) | **Out:** 432 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling the Velara Revenue OS. I'm cold-emailing Priya Nair, Head of GTM, right after their current vendor's public security incident. Be my cold outreach specialist and write me a hook under 100 words — casual email tone — that earns 90 seconds of her attention by anchoring to the immediate pain (security breach) and the value she cares about most (save time, cut cost). No scripts. No manufactured urgency. Just the concrete reason to take a call.

## STRUCTURE
1. **Subject line** — Casual, short. Trigger the incident without naming it (she already knows). Make her curious why I'm writing *now*.
2. **Salutation** — Casual, direct. Her first name is fine.
3. **Hook (3–4 sentences)** — Anchor hard to the security incident as the opening move. Then thread the core value: what she gains by moving off her current stack (time, cost, or both). No product names, no Velara pitch yet. This is about *her* problem and her win, not my product. Make it conversational.
4. **Signoff** — Casual, one-liner. No "looking forward to syncing."

## GROUNDING
- The security incident is real and public — she's thinking about it now. Lead there.
- "Save time / cut cost" is the value frame, not the opening. The opening is the breach and the risk it signals about her vendor choice.
- Avoid: product jargon (Revenue OS, pipeline intelligence, CRM data rot), competitive shade, assumptive closes ("let's grab 15 min"), or anything that sounds like a template.
- Keep it human. One rep to one prospect. Casual email voice means no corporate polish.
- The ask is implicit: a reply or a call. Don't spell it out.

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

**Status:** OK | **Time:** 6306ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2703 (read=0, write=0) | **Out:** 384 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm emailing David Kowalski, a CRO whose company missed Q3 ARR target by 18%. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention — something he'll read because it speaks directly to the miss, not around it.

## STRUCTURE
1. Subject line that signals the trigger without hype — the miss is the story, not a generic revenue angle.
2. Salutation and opening that lands on what I know (the Q3 gap) and why I'm writing (not to pitch, but to surface something relevant to fixing it).
3. Body that positions Velara Revenue OS as the lever behind accurate forecasting and pipeline visibility — what CROs rebuild after a miss like this.
4. Close that invites a brief conversation, not a demo; make it easy to say yes.
5. Signature (professional, no noise).

## GROUNDING
- David is a CRO — precision and accountability matter more than enthusiasm. Tone: direct, unsentimental, grounded in the business problem.
- The 18% miss is the only credible permission I have to reach out; anchor to it throughout. Don't soften it or dance around it.
- Revenue OS is the product name; anchor the hook to forecast accuracy and real-time pipeline visibility — the two things a CRO rebuilds after a miss.
- No invented metrics, no "studies show," no generic "we help companies like yours." Specificity comes from what he disclosed.
- Avoid: cheerleading tone, complexity, feature-list language, anything that reads like a template.

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

**Status:** OK | **Time:** 5906ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2684 (read=0, write=0) | **Out:** 378 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn DM — they missed their last quarter. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention and plants the seed that real-time pipeline visibility (not guesswork or month-end surprises) is the lever that changes the quarter.

## STRUCTURE
1. **Hook (DM-native, under 100 words)**
   - Open on the trigger — missed quarter — as the visible problem; don't bury it
   - Surface the real issue underneath: blind spots in the pipeline that quarter-end reviews can't fix
   - One concrete signal of what "real-time visibility" does (catches risk early, stops surprises, keeps reps on track) — pick the one that resonates most for a rep who just missed
   - Tone: peer-to-peer, no pitch cadence, no "I'd love to chat" softness
   - Close with one crisp reason to engage (not a CTA; a reason they'd want to know more)

## GROUNDING
- Jordan is a rep (or frontline leader) who owns quota — they felt the quarter miss directly
- "Missed quarter" is the only fact I'm giving you; don't invent timeline, margin, or root cause
- Avoid: "Let's schedule a call," "quick conversation," "see if we're a fit," generic "growth" language
- Anchor to real-time pipeline intelligence as the differentiator — that's what stops the next miss
- LinkedIn DM voice: direct, conversational, no corporate polish

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

**Status:** OK | **Time:** 5743ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2719 (read=0, write=0) | **Out:** 380 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Erin Park, VP of GTM Operations at Rampcheck, cold via email on a formal channel. She's flagged forecast accuracy at quarter-end as the team's biggest credibility hit with the board. Write me a short-form hook under 100 words that earns 90 seconds of her attention and makes forecast confidence the obvious next conversation.

## STRUCTURE
1. Subject line — positions forecast accuracy as the immediate business problem without sounding salesy; no generic urgency plays
2. Salutation — formal, direct to Erin by first name
3. Hook (body) — anchor to her specific credibility exposure with the board; surface that forecast accuracy is fixable now, not a quarter-end surprise; make the mechanism clear enough to intrigue (real-time visibility into pipeline health, not manual guesswork); land on a single, specific ask (a brief call or conversation window)
4. Signature — professional, with role and company

## GROUNDING
- Erin said this in a live AMA — it's a real pain point she owns and the board is watching
- Forecast accuracy is what she cares about here; don't pivot to data entry or "CRM health"
- Velara Revenue OS surfaces deal risk before it's fatal and delivers forecast accuracy backed by contractual SLA — this is the core fit
- No statistics, percentages, or "studies" about forecast failures; anchor to her visible problem
- Email is formal; tone is respectful and direct, not aggressive or clever
- 90 seconds means she reads this once and decides in that window — every word counts

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

**Status:** OK | **Time:** 7592ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2798 (read=0, write=0) | **Out:** 554 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out to Mark Vidal cold via email—he's Director of Culinary Operations at Ascend Hotel Group and just announced 14 new locations opening over the next 18 months. Be my cold outreach specialist and write me a short-form hook under 100 words that earns 90 seconds of his attention by anchoring to the operational setup challenge that expansion creates. My headline value is time and cost savings—land that early, make it concrete to his situation, and keep it formal in tone.

## STRUCTURE
1. **Subject line** — One line that signals operational relevance to a hotel culinary ops leader scaling 14 new kitchens; avoid generic sales language.

2. **Salutation & opening** — Formal, direct. Acknowledge the expansion announcement as the reason for the outreach; make the connection to his operational challenge clear immediately.

3. **Core body** — The Northwind XR-Series replaces multiple pieces of traditional kitchen equipment in one footprint. For a culinary operations director opening 14 locations, that means faster kitchen deployment, less line space consumed, and lower operating costs per location. One differentiator must anchor the message—pick the footprint recovery or the energy efficiency; whichever lands hardest for a scaling scenario.

4. **Close & CTA** — Brief, low-friction next step. No pressure.

5. **Signoff** — Formal (name, title, company, contact info).

## GROUNDING
- Ascend Hotel Group is expanding—that's operational execution pressure. The hook lives in the setup burden: 14 new kitchens in 18 months means standardization, speed, and cost control matter. Don't sell features; sell relief from the build-out headache.
- Mark is culinary operations—he owns kitchen performance and consistency across properties. Lead with operational leverage, not kitchen gadgetry.
- Under 100 words is tight. Every sentence pulls weight. No fluff, no "I wanted to reach out," no multi-step reasoning.
- Avoid hospitality jargon that sounds hollow ("elevate the guest experience," "world-class operations"). Speak his language: deployment speed, consistency, cost per location.
- Do not invent details about Ascend's kitchen setup, current equipment, challenges, or timelines beyond what the expansion announcement tells you.

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

**Status:** OK | **Time:** 5546ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2797 (read=0, write=0) | **Out:** 379 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn after she was featured in a recent NYT piece on restaurants cutting energy costs without sacrificing menu. Be my cold outreach specialist and write me a DM hook under 100 words that earns 90 seconds of her attention by connecting her public win to a concrete operational lever she likely hasn't considered yet.

## STRUCTURE
1. Hook that ties her recent press to a specific kitchen problem she probably owns
   - Don't mention the combi oven by name or use generic "efficiency" language
   - The trigger is real (NYT feature); anchor to what that signals about her priorities
   - Make the ask micro: a single question or very brief conversation, not a meeting

2. Signoff that fits DM tone
   - Keep it brief; no formal closing

## GROUNDING
- She's an owner-operator across three locations — assume she's resource-constrained and cares about unit economics, not just one kitchen
- The energy-cost angle is public and recent; don't repeat it back as discovery — assume she knows her own costs
- Energy is the stated headline, but the real lever for her profile is likely the time and kitchen-line real estate her current setup consumes across three sites
- Avoid combi-oven jargon, brand names, or feature lists
- Avoid "I thought of you" or "I saw your article" openers — she's been pitched on it already
- Tone: peer-to-peer, not vendor-to-buyer; respect her time and expertise

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

**Status:** OK | **Time:** 6750ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2805 (read=0, write=0) | **Out:** 490 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Rachel Mendez, CEO of Ridgeway Industrial, who just disclosed Q4 margin compression to investors. Write me a short-form email hook under 100 words that lands in her inbox and earns 90 seconds of attention. I'm anchoring to cost — this is a margin problem, and I solve those in 12 weeks with working fixes, not recommendations.

## STRUCTURE
1. Subject line
   - Anchors to the margin disclosure (no generic "quick question" or time-waste positioning)
   - Makes the cost angle immediate and credible

2. Salutation and opening
   - Direct, specific, no fluff
   - The trigger (Q4 margin compression) is the reason for the email — make it concrete

3. Core hook
   - Names Aldermark 12-Week Operations Reset and what it does (diagnose the three biggest cash leaks, ship working fixes by week 12)
   - Emphasizes working fixes, not recommendations — this is the differentiator that matters to a CEO staring at margin pressure
   - Positions the engagement as a lever to restore margin, not a consulting study

4. Close and signoff
   - Low friction — one clear next step or soft ask for 15 minutes
   - Signature with title and contact

## GROUNDING
- Rachel is PE-backed and investor-facing; margin recovery is not theoretical — it's a number she has to report
- Ridgeway is ~$80M in revenue; this is mid-market, exactly our wheel house
- Avoid big-consultant positioning ("we'll help you optimize") and academic language ("operational excellence")
- No statistics or percentages I haven't given you — no "typically save X%" or "80% of our clients see Y"
- Senior-only delivery is table stakes for her; don't oversell it as a feature — it's the default
- Keep it under 100 words; she scans email; respect that constraint strictly
- Email tone: peer-level, brief, one job (open the conversation)

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

**Status:** OK | **Time:** 7082ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2801 (read=0, write=0) | **Out:** 495 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Tomas Becker, COO at Becker Logistics, via email. He recently stepped into operations leadership after his father founded and ran the company. Be my cold outreach specialist and write me a short-form hook under 100 words that opens on the risk he's inheriting — not the opportunity, not a generic problem statement, but the specific exposure that comes with taking over a founder-built operation. Casual tone. I want to earn 90 seconds of attention and a reply.

## STRUCTURE
1. **Subject line** — One phrase that signals risk without sounding alarmist. Keep it simple and front-loaded.

2. **Hook (body)** — The trigger is his transition into operations; the frame is risk exposure, not a sales pitch. Show you understand what founder-run logistics actually looks like and name one concrete exposure (cash leak, process gap, tribal knowledge sitting with the founder, margin bleed) that founder-successors commonly inherit. Make it specific enough that he recognizes himself, but don't script or invent details. End on a reason to reply — not a demo, not a call, just a genuine reason a new COO would want 10 minutes.

3. **Signoff** — Casual, no formal title stack. Just your name.

## GROUNDING
- Becker Logistics is family-owned, ~250 employees, founder-led for its history — he's now the operations steward of a business built on his father's patterns and relationships.
- Founder transitions are high-risk moments: undocumented processes, margin decay hidden by relationships, scaling pressure, talent retention questions. Any one of these is a credible hook.
- Casual tone means no corporate stiffness, no "innovative solutions" language, no consultant-speak. Talk like someone who has seen this before and isn't trying to sell him yet.
- Avoid buzzwords: "optimize," "streamline," "transformation," "best practices," "efficiency," "synergy."
- The email is 100 words max, including salutation and signoff — compress ruthlessly.

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

