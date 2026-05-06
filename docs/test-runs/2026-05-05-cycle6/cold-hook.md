# cold-hook — stress test results

**Run:** 2026-05-05-cycle6  
**Cases:** 9 (9 OK)  
**Tokens:** 28,833 in / 3,607 out  
**Engine cost (this tool):** $0.0375  

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

**Status:** OK | **Time:** 4277ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3156 | **Out:** 292 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching Marcus Reid, VP RevOps, on LinkedIn DM. He just published on pipeline efficiency and it resonated. I need you to write a hook tight enough to earn 90 seconds of attention — no fluff, no ask, just a signal that lands.

## STRUCTURE
1. Hook (under 100 words)
   - Anchor to his pipeline efficiency article — make it specific to what that signals about his world
   - One concrete reason why Velara matters to him (time or cost savings, pick the sharpest lever)
   - No "I noticed you posted" flattery; make the connection meaningful
   - No CTA; just intrigue

## GROUNDING
- Marcus is RevOps — he owns pipeline health, forecast accuracy, and team productivity. Speak his language.
- Pipeline efficiency is his trigger — lean into what breaks efficiency (CRM data rot, manual entry burden, forecast blind spots)
- LinkedIn DM voice: conversational, direct, no corporate tone
- Avoid: generic "impressed by your post" openers, vague value claims, any product name-drops
- One differentiator anchor: auto-capture (zero manual CRM updates) maps cleanest to his efficiency pain

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

**Status:** OK | **Time:** 6429ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3164 | **Out:** 443 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Priya Nair via email on the back of a publicized security incident at her current vendor. Be my cold outreach specialist and write me a short-form hook — under 100 words, casual email tone — that lands the trigger as the real reason I'm writing and makes the case for a 30-minute conversation without sounding like I'm capitalizing on bad news.

## STRUCTURE
1. **Subject line + salutation**
   - Casual, direct, non-spammy. The trigger is the legitimate reason I'm here — treat it as such, not as crisis-mongering.

2. **Body copy (under 100 words)**
   - Anchor the trigger as the opening move; don't bury it.
   - One concrete reason to talk (what I solve that matters to GTM leaders right now).
   - Close on next step — no vague "let me know if interested" language.

3. **Signoff**
   - Casual, authentic. No "looking forward to connecting" or formal closers.

## GROUNDING
- Priya leads GTM; she cares about pipeline clarity and rep velocity, not technical features. The security incident is the door; the leverage is what it forces her to do now (vendor migration, data re-audit, rep re-training).
- Velara Revenue OS eliminates manual CRM work and surfaces deal risk in real time — both directly serve GTM motion. Don't oversell; let the problem pull the solution.
- Casual email tone: direct, human, zero corporate buzz. This is a peer reaching out, not a sales machine.
- Avoid: "recent news," "I saw," "in light of recent events" — these sound opportunistic. Own the reason plainly.
- No numbers, no guarantees, no specific metrics. Just the real problem and why talking is worth her time.

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

**Status:** OK | **Time:** 5710ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3161 | **Out:** 357 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to David Kowalski, a CRO whose company just missed Q3 ARR target by 18%. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention — something he'd actually read and respond to, not delete.

## STRUCTURE
1. **Hook (email body)**
   Anchor to the missed target as the trigger. The hook must name the real cost of that miss (forecast visibility, pipeline confidence, rep execution) without sounding preachy. Make Velara Revenue OS the natural next move — not a product pitch, but a capability that directly addresses why the miss happened and what's needed to close the gap in Q4. Land on a concrete reason to reply (not "let's chat").

## GROUNDING
- David is a CRO — assume he owns forecast accuracy and pipeline health as personal stakes. He's not shopping for CRM features; he's urgently hunting signal and control.
- The 18% miss is fresh pain. Don't soften it; lean into it as the exact problem we solve.
- C-suite email is speed-reading email. Trim ruthlessly — every word earns its seat.
- Avoid CRM jargon, "synergy," "touch base," or anything that sounds like a template.
- No unsourced numbers, predictions about their business, or invented details beyond what I've given you.
- No claim of guarantee, SLA, or ROI without my explicit input.

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

**Status:** OK | **Time:** 4052ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3142 | **Out:** 257 | **Cost:** $0.0035

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Jordan Mehta on LinkedIn after they missed last quarter. Write me a short-form hook — under 100 words — that earns 90 seconds of attention on the platform without sounding salesy or presumptuous.

## STRUCTURE
1. Hook (under 100 words)
   - Anchor to the missed quarter as the trigger, not as accusation — as context for why now matters
   - The real value must be concrete: what changes when reps stop losing visibility into deals that slip
   - No product name, no feature spray, no ask for a call — just signal that you see the gap and know the fix exists

## GROUNDING
- LinkedIn DM voice: direct, peer-level, no "Hey there" or corporate warmth
- Avoid: generic "let's connect" energy, anything that reads like a template
- Missed quarter is the only intel I have — don't invent details about their process, team size, or why it happened
- Trigger is real and immediate: when forecasts break, visibility breaks first

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

**Status:** OK | **Time:** 6018ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3177 | **Out:** 433 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park at Rampcheck with a specific trigger: her public statement on forecast accuracy credibility at quarter-end. Write me a short-form email hook under 100 words that earns 90 seconds of attention. Formal tone, professional channel. The hook must feel earned — rooted in the trigger, not generic — and position the real value without sounding like outreach.

## STRUCTURE
1. Subject line
   - Tight, specific to Erin's stated problem (forecast accuracy + board credibility)
   - No hype, no urgency language

2. Salutation
   - Professional, direct

3. Body (under 100 words)
   - Open with the trigger — the forecast accuracy credibility challenge she named
   - One concrete lever: what Velara Revenue OS does that directly solves forecast visibility (not the full feature set, just the one that lands hardest here)
   - Close with a soft ask — curiosity hook, not a meeting demand

4. Signoff
   - Professional, single name

## GROUNDING
- Anchor hard to the trigger: Erin's public statement on forecast accuracy and board credibility. This is earned attention, not cold noise.
- The lever is forecast accuracy and pipeline visibility — that's the tension she owns. Don't pivot to implementation speed, data capture, or coaching signals; none of those solve her stated problem.
- Formal channel means no casual phrasing, no emoji, no manufactured urgency ("quick call this week?").
- Avoid industry buzzwords like "synergy," "unlock," "game-changer," "transformation." Rampcheck's GTM ops team speaks problem language, not vendor language.
- No unsourced stats, no assumptions about her team size, budget, or CRM stack. Stick to what she said.

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

**Status:** OK | **Time:** 8903ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3256 | **Out:** 604 | **Cost:** $0.0050

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal (Director of Culinary Operations, Ascend Hotel Group) on the back of a press release announcing 14 new hotel openings over 18 months. Be my cold outreach specialist and write me a formal email hook — under 100 words — that lands in his inbox as urgent and concrete, not generic. The trigger (new locations) is my only lever; treat it as earned permission to interrupt. Anchor to operational efficiency and cost control as the headline value.

## STRUCTURE

1. **Subject line**
   - Specific to Ascend's expansion context; avoid generic "partnership" or "collaboration" framing
   - Should spark curiosity about the 14-location rollout (not about Northwind)

2. **Salutation**
   - Professional and direct

3. **Body copy**
   - Lead with the trigger (expansion). One sentence.
   - Plant the operational problem: equipping 14 kitchens at speed and cost is a real pinch during expansion.
   - Name what I solve (Northwind XR-Series Combi Oven) and anchor to one capability that matters most in a multi-site rollout: reduces equipment footprint, cuts energy per location, or accelerates staff onboarding.
   - Close with a soft call to a brief conversation. No aggressive CTA.
   - Tone: direct peer-to-peer, not salesy. Mark is busy; make him believe this is worth 15 minutes.

4. **Signoff**
   - Professional, no title inflation

## GROUNDING

- **Anchor:** The press release is real permission to reach out right now — use it as the "why today" and drop it immediately if it feels forced.
- **Avoid:** "I noticed you're expanding" (too obvious), "we help companies like you" (generic), "game-changer" or "industry-leading" (buzzwords that kill credibility with ops leaders).
- **Ops-leader calibration:** Mark runs culinary. He cares about speed to kitchen readiness, staff capability, and keeping capex sane across 14 builds. Not about innovation theater.
- **One strong lever:** Pick the single differentiator (footprint recovery, energy efficiency, or staff ramp speed) that is most relevant to opening 14 locations fast. Don't scatter across three features.
- **Informal channel norm:** Email is formal here, but keep the voice conversational — Mark gets 200 emails; read like one human to another, not corporate template.

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

**Status:** OK | **Time:** 5730ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3255 | **Out:** 409 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn after she was featured in a recent NYT piece on restaurants cutting energy costs without sacrificing menu. I need a short-form hook (under 100 words) that lands in a DM — no subject line, just the message itself — that earns 90 seconds of her attention by connecting her public energy-cost win to a concrete operational lever she likely hasn't considered yet.

## STRUCTURE
1. Hook (DM message only)
   - Open with the trigger: acknowledge the NYT feature and the cost-cut angle she's already thinking about
   - Pivot to an operational angle tied to the energy win (kitchen footprint recovery, line-staff time, or equipment consolidation) — pick the one that feels most natural to her situation
   - Close with a single, low-friction reason to reply (no "let's hop on a call" language; give her a reason that feels conversational)

## GROUNDING
- Chef Okafor is a pragmatist — she runs three locations and made a public bet on energy efficiency. She's not interested in features; she's interested in what works.
- The Northwind XR-Series consolidates four pieces of equipment into one footprint and cuts energy draw significantly. Either the space recovery or the energy story (or both) is her entry point — pick the one that feels like the natural next move in her cost-cut narrative.
- Keep it short and operator-to-operator in tone — no corporate language, no "synergies."
- Avoid positioning this as a product demo or a sales conversation. This is a peer observation: "Hey, I noticed this about your situation; here's a thought."

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

**Status:** OK | **Time:** 5909ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3263 | **Out:** 406 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Rachel Mendez, CEO of a PE-backed industrial company that just disclosed margin compression on an investor call. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of her attention — this is email to a C-suite founder-operator who's just flagged a live operational problem to her board.

## STRUCTURE
1. Subject line
   - Trigger-specific, not generic — land the disclosure as the reason for reaching out
   - Short enough to scan; avoid discount language or soft urgency

2. Salutation + body hook
   - Open with the disclosed problem (margin compression), not a pitch
   - Signal that we work with similar-stage PE-backed industrial operators
   - Name the concrete deliverable (working fixes by week 12, not studies or decks)
   - Close with a single, low-friction ask — no "let's jump on a call" softness

3. Signature
   - Your name, title at Aldermark Advisory, email, phone

## GROUNDING
- Anchor to the Q4 margin compression she disclosed — that's the only real intel I have; don't fabricate other problems or timelines
- PE-backed industrials are our core market; she'll recognize that language
- Avoid consultant-speak: no "strategic review," "deep dive," "optimization," "unlock value," or "stakeholder alignment"
- The hook must read as operator-to-operator, not vendor-to-buyer
- Keep it short — she's not reading long emails right now; tight copy respects her attention
- No statistics, ROI projections, or case studies without explicit approval from me first

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

**Status:** OK | **Time:** 6334ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3259 | **Out:** 406 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Tomas Becker, COO at Becker Logistics, who recently inherited operations from his father. Write me a short-form hook under 100 words — casual email tone — that earns 90 seconds of attention by anchoring to risk reduction in a founder transition moment.

## STRUCTURE
1. Subject line
   - Casual register; signal the transition context without sounding formal or presumptuous

2. Body (under 100 words)
   - The trigger is real: founder transitions are when operational blind spots surface fastest
   - Risk reduction is the dominant frame — not "we optimize"; focus on what can go wrong and the cost of not knowing
   - One concrete signal of what we do (hands-on, working fixes, not recommendations)
   - Tone is peer-level and direct, not salesy; match a COO's operational mindset

3. Signoff
   - Casual, no "looking forward to syncing" or other boilerplate

## GROUNDING
- Tomas inherited operations — this is a vulnerability moment and a credibility moment. He's proving himself. Anchor to the operational risks that trip up founder transitions, not the emotional arc.
- Don't mention Aldermark by name in subject; casual email means low-friction entry.
- Avoid: "We help companies," "best-in-class," "synergy," "let's connect," consulting jargon.
- Avoid: Any margin recovery numbers, cost/savings math, or timeline guarantees — ask me if we need those to sharpen the hook.
- Casual doesn't mean sloppy — Tomas is operational and direct; match that precision.

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

