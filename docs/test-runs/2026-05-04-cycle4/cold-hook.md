# cold-hook — stress test results

**Run:** 2026-05-04-cycle4  
**Cases:** 9 (9 OK)  
**Tokens:** 29,197 in / 3,647 out  
**Engine cost (this tool):** $0.0379  

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

**Status:** OK | **Time:** 6001ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3194 | **Out:** 358 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION

I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Marcus Reid, VP RevOps, on LinkedIn DM after he posted about pipeline efficiency — it's a warm signal that he's thinking about exactly what we solve. Write me a hook that earns 90 seconds of his attention and moves him toward a conversation. Keep it under 100 words, conversational, and anchor to the time/cost value he cares about.

## STRUCTURE

1. Hook (single paragraph, under 100 words)
   - Acknowledge his recent post as the reason for reaching out — specific enough to feel genuine, not generic
   - Surface one concrete friction point we solve (CRM data decay, forecast visibility, or rep coaching) that aligns with pipeline efficiency
   - Close with a clear, low-friction ask (quick call, brief conversation) — no ask for a meeting time or calendar link

## GROUNDING

- Marcus is a RevOps leader thinking operationally — lead with efficiency and reliability, not features
- Pipeline efficiency = data accuracy + forecast clarity + rep performance in the moment; pick the one that resonates most with his posted angle
- "Save time / cut cost" is the frame — time (manual CRM work, firefighting bad forecasts) or cost (missed targets, rep churn, implementation overhead) depending on the context
- Avoid: product acronyms, Salesforce/HubSpot mentions (too functional for the hook stage), implementation timelines, technical specs
- Keep the tone peer-to-peer and direct — no sales energy, no superlatives

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

**Status:** OK | **Time:** 4827ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3202 | **Out:** 332 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing Priya Nair, Head of GTM, who just experienced a publicized security incident with their current vendor. Be my cold outreach specialist and write me a hook under 100 words — casual email tone, no formal subject line needed — that earns 90 seconds of attention by anchoring to the immediate trigger and positioning Velara as a fast, low-friction alternative.

## STRUCTURE
1. Hook (under 100 words, casual email tone)
   - Anchor hard to the security incident — make it the reason for reaching out, not a soft opener
   - Position the trigger as creating an opportunity to reset, not a problem to solve
   - Lead with save-time / cut-cost value — these are the rails; the specific angle is yours
   - No hype, no CRM comparisons; keep it conversational and direct

## GROUNDING
- Priya's role (Head of GTM) means she owns forecast accuracy and pipeline visibility — these matter to her, but the security trigger is the door opener
- The incident is public; treat it as a known fact, not gossip
- Casual tone means no formality, no corporate greeting, no lengthy setup — get to the point fast
- Avoid vendor-bashing or competitor name-drops beyond the trigger context
- The hook is the entire deliverable — no follow-up cadence, no secondary CTAs

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

**Status:** OK | **Time:** 7918ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3199 | **Out:** 531 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to David Kowalski, a CRO who just missed Q3 ARR target by 18%. Be my cold outreach specialist and write me a short-form hook under 100 words that earns 90 seconds of attention — no fluff, no ask, just a reason to talk.

## STRUCTURE
1. Subject line
   - Anchors to the missed Q3 target as the trigger; makes him curious without being coy

2. Body (under 100 words)
   - Opens with the miss as a shared reality, not a accusation
   - The real reason for the reach: forecast visibility breaks down in crunch quarters — that's the pattern, not a David-specific failure
   - One concrete lever: my platform surfaces deal risk before it's fatal and auto-captures pipeline data so reps stop leaving forecast accuracy on the table
   - No ask; just "worth a brief conversation?"

3. Signoff
   - Low-friction; rep name and one-line title only

## GROUNDING
- Trigger is earnings-call disclosure of an 18% miss — treat this as public intel, not gossip. The miss is real; the angle is process/visibility, not blame.
- For a CRO at this inflection point, forecast accuracy and deal-risk early-warning are not nice-to-have; they're survival signals. Lead with the tension between "I need to close the gap" and "I can't see into my own pipeline."
- Avoid: generic "improve your sales process" energy, performance-shame language, or anything that sounds like "we help you hit targets" (too transactional). The value is clarity in chaos — not cheerleading.
- One differentiator anchors this: my platform delivers forecast accuracy backed by SLA, auto-captures pipeline data, and surfaces deal risk in real time. Pick forecast accuracy or deal-risk visibility as the spine; don't scatter.
- No numbers from my differentiators (the 4%, the 14 days, etc.) unless you see them in my inputs. The 18% miss is in my inputs — use it.
- Tone: peer-level respect. A CRO knows what went wrong; he's looking for what to do about it. Don't patronize.

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

**Status:** OK | **Time:** 5356ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3180 | **Out:** 319 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn DM after they missed last quarter. Write me a hook that lands in 90 seconds and earns a reply — no fluff, no ask, just enough signal to make them curious.

## STRUCTURE
1. Hook (under 100 words)
   - Concrete reason for the outreach tied to their miss last quarter
   - Single sharp insight about what likely caused the miss (forecast blindness, pipeline risk creeping undetected, deals slipping without early signal)
   - Why Velara Revenue OS matters to them right now
   - Tone: peer-to-peer, not salesy; pattern-recognition, not pity

## GROUNDING
- Jordan likely doesn't know Velara yet — assume zero product familiarity
- A missed quarter surfaces real pain: forecast accuracy broke down or risk surfaced too late. Anchor there, not to "better CRM hygiene"
- LinkedIn DM is casual; skip formality and trust brevity
- Curiosity beats pitch. Leave them wanting the next 90 seconds
- Avoid: "just wanted to reach out," "saw your profile," "quick question" — these waste the slot
- Avoid: product feature depth (auto-capture, Salesforce sync, SLA specifics). This is signal, not spec sheet

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

**Status:** OK | **Time:** 6056ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3215 | **Out:** 405 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park, VP of GTM Operations at Rampcheck, on email. She's flagged forecast accuracy at quarter-end as a credibility hit with the board. Be my cold outreach specialist and write me a hook under 100 words that lands the real reason for my outreach — our forecast accuracy — without sounding like I'm pitching. Formal email tone. The goal is 90 seconds of attention.

## STRUCTURE
1. Subject line
   - Lands the value (forecast accuracy / revenue credibility) without hype
   - No generic openers; must feel specific to her role and the trigger

2. Email body
   - Opens with her context (the board credibility concern) — treat this as the honest reason I'm writing
   - The hook itself: Velara Revenue OS surfaces forecast accuracy by eliminating manual CRM updates; built for ops leaders who own pipeline visibility
   - No ask beyond a reply; position as "worth 15 minutes if you're thinking about this"

3. Signature
   - Name, title, company, direct contact only

## GROUNDING
- Anchor hard to her trigger — the board credibility hit — not to generic GTM pain. This is why she'll open the email.
- Forecast accuracy is the single lever. Don't spread across multiple capabilities.
- Formal email means professional, direct tone — no cutesy subject lines or forced familiarity.
- Avoid: industry jargon ("pipeline health," "data hygiene," "enablement"), soft openers ("I noticed," "I came across"), ask-heavy closings ("Would you be open to...").
- She's ops — respect her time. Short, scannable, specific.

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

**Status:** OK | **Time:** 6446ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3301 | **Out:** 382 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, on the back of their expansion announcement. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that lands the trigger (new locations) and plants one concrete reason he'd want to talk, anchored to the expansion context. Formal tone; assume zero prior relationship.

## STRUCTURE
1. **Subject line** — Signals the trigger or value without hype; makes Mark want to open it.
2. **Salutation** — Formal; use his name.
3. **Hook body** — One tight paragraph. Name the expansion as the reason I'm writing. Land one capability that matters to multi-location rollout (space recovery, energy efficiency, or line-staff training speed — pick the sharpest fit for kitchen operations at scale). No product name-drop unless it feels natural. Close with a soft ask (15-min call, quick question, etc.).
4. **Signoff** — Formal, my name and title.

## GROUNDING
- The expansion is his real context — anchor there, don't open with a cold generic.
- Energy cost and floor space both scale across 14 locations; either is a legitimate lever. Line-staff training speed also matters for rollout velocity.
- Avoid kitchen jargon he won't need to decode; talk operations, not specs.
- No price talk, no "industry-leading," no competitor mentions.
- Formal email channel means no exclamation marks or casual punctuation.

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

**Status:** OK | **Time:** 6370ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3300 | **Out:** 378 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor via LinkedIn DM after she was featured in a recent NYT piece on energy-cost reduction. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of attention — something that feels personal to her situation, not templated.

## STRUCTURE
1. Hook — under 100 words, LinkedIn DM voice (direct, conversational, no sales-speak). The trigger (NYT piece on energy + menu integrity) is the anchor — it's what makes this *her* moment, not a generic pitch. Land the headline value (time and cost savings) without naming the product yet. End with a concrete next step, not a soft ask.

## GROUNDING
- Chef Okafor runs three restaurants — she's operator-minded, time-starved, and skeptical of "one-size-fits-all" equipment claims. Speak to her kitchen reality, not restaurant tech.
- The NYT piece is your proof point she cares about this intersection (energy efficiency without menu sacrifice). Anchor there; don't invent stats.
- Energy cost is the *permission* to reach out; kitchen space and labor speed are the real levers in her world. Lean on operational win, not just the utility bill.
- Avoid "disruption," "game-changer," "solution," industry jargon, or anything that reads like a template. Tone: peer-curious, not salesy.
- One turn only — no multi-message sequences. Make it count.

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

**Status:** OK | **Time:** 6950ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3305 | **Out:** 505 | **Cost:** $0.0047

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Rachel Mendez (CEO, Ridgeway Industrial) on the back of disclosed Q4 margin compression. Be my cold outreach specialist and write me a short-form email hook — under 100 words — that earns 90 seconds of attention and positions an exploratory call as the next step.

## STRUCTURE

1. **Subject line**
   - No generic "quick question" energy. Anchor to the margin compression trigger — make it impossible to ignore without sounding alarmist.

2. **Body (under 100 words)**
   - Open with what I know: Q4 margin pressure is real and visible. Don't apologize for the cold reach.
   - One sharp reason why I'm calling her specifically (PE-backed industrial ops, her scale, the margin signal) — not generic.
   - Single concrete value: we embed senior partners with her team, diagnose the three biggest cash leaks, and ship working fixes by week 12. No slide decks, no analysts.
   - End with a specific ask: a 15-minute call to explore whether this is worth her time. Make it easy to say yes.

3. **Signature**
   - Professional. Include my name, title, company, and one contact method (email or phone).

## GROUNDING

- Ridgeway is PE-backed at ~$80M revenue — industrial operations context, margin pressure is material to their LP narrative.
- Q4 margin compression was disclosed publicly (investor call) — she chose to surface it, so it's fair game to reference directly.
- The hook competes for inbox attention in a sea of vendor noise — specificity (the trigger, the fix, the timeline) is the only differentiator.
- Avoid: generic consultant language ("synergies", "best practices", "transform"), apologies for cold outreach, multi-step asks (no "I'd love to connect you with a partner"), or any mention of ROI math or savings — that comes after the call earns it.
- The margin compression is the only proof point I have; anchor to it, not to hypothetical wins or case studies.

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

**Status:** OK | **Time:** 5980ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3301 | **Out:** 437 | **Cost:** $0.0044

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Tomas Becker, COO at Becker Logistics, who recently inherited operations leadership from his father. I need you to write me a short-form hook under 100 words that lands in an inbox as casual email—tight enough to earn 90 seconds of attention, anchored to the risk he's carrying in his new role.

## STRUCTURE

1. **Subject line**
   - Casual tone, single-variable focus (the transition risk he's navigating)
   - Avoid buzzwords; sound like someone who knows what new operational leadership feels like

2. **Body (under 100 words)**
   - Lead with the concrete risk: taking over operations from a founder is high-stakes and high-visibility
   - Ground the risk in what we solve—we embed with leadership to ship working fixes fast, not slide decks
   - Reference the transition trigger directly; don't be generic
   - Close with a low-friction ask (15-min call, not a meeting series)

3. **Signature**
   - Casual sign-off; include my direct line

## GROUNDING

- Tomas just took over from his father—this is personal and high-stakes; he's proving himself. Respect that weight without being heavy-handed.
- Family-owned logistics: operations are likely inherited systems, some tight, some fragile. The real risk is margin leaks nobody's mapped yet.
- "Reduce risk" is the lever here—not growth, not transformation. Risk = keeping what works, fixing what bleeds.
- Avoid: consultant jargon, change-management speak, productivity-metrics language. Sound like an operator, not a framework pusher.
- Avoid: any mention of numbers, timelines, or specific outcomes unless I've given them to you. Flag if you need them.

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

