# cold-hook — stress test results

**Run:** cycle-7  
**Cases:** 9 (9 OK)  
**Tokens:** 28,833 in / 3,636 out  
**Engine cost (this tool):** $0.0376  

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

**Status:** OK | **Time:** 5652ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3156 (read=0, write=0) | **Out:** 337 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm sending a cold DM to Marcus Reid, VP RevOps, who just posted on pipeline efficiency. Write me a hook under 100 words that earns 90 seconds of attention — treat the LinkedIn trigger as permission to land in his inbox without sounding like I'm chasing clout.

## STRUCTURE

1. Hook — Short enough to scan in one breath. The trigger (his pipeline efficiency post) is the door opener; the value play anchors to either time savings or cost reduction (his headline value preference). No "just saw your post" throat-clearing — jump to why I'm writing.

2. Close — Single, low-friction next step. Not a meeting request; something he can say yes to right now or in reply.

## GROUNDING

- Marcus is a RevOps leader — his oxygen is forecast accuracy and pipeline visibility. Speak his language (data integrity, CRM friction, deal risk), not features.
- Velara Revenue OS auto-captures deal activity and eliminates manual CRM updates — this is the core friction we solve for ops leaders. Anchor to that, not to coaching or implementation speed.
- LinkedIn DM voice: direct, no corporate softness. Assume he's skeptical of unsolicited DMs; earn credibility by being specific about why his post matters and why we're relevant.
- Avoid: product demo language, "let's connect," multi-step asks, anything that feels like spam.

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

**Status:** OK | **Time:** 5894ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3164 (read=0, write=0) | **Out:** 394 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing Priya Nair, Head of GTM, on the back of a publicized security incident with her current outreach vendor. I need a short-form hook (under 100 words) that lands in a casual inbox — no formal tone — and earns 90 seconds of her attention by anchoring to the immediate trigger without sounding opportunistic. Headline value is time savings and cost relief.

## STRUCTURE
1. Subject line — positions the trigger as the opener without being salesy; casual register
2. Salutation — natural, conversational tone
3. Body — under 100 words total
   - Trigger must be concrete and immediate (the security incident, not abstract "pipeline issues")
   - Velara Revenue OS and what it does (auto-capture + live coaching) are present; anchor to time savings
   - No pitch; pure signal of relevance
   - Casual energy throughout — reads like a peer, not a vendor
4. Signature — first name only

## GROUNDING
- Priya is Head of GTM; she owns pipeline velocity and team enablement — time recapture is her language
- The security incident is the open door; lean on it as the reason to explore alternatives, not as schadenfreude
- Velara auto-captures activity and surfaces coaching live — these solve the "manual CRM overhead + team friction" problem that vendors like Outreach.io demand
- Avoid: product jargon, superlatives, multi-touch sequences disguised as "one email," formal sales cadence language
- Casual = conversational, direct, no "As we discussed" or "I noticed your company" filler

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

**Status:** OK | **Time:** 7480ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3161 (read=0, write=0) | **Out:** 500 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to David Kowalski, a CRO who just missed Q3 ARR target by 18%. Write me a short-form hook under 100 words that earns 90 seconds of attention and positions the real problem — not as a past miss, but as a live forecast and pipeline visibility gap that's fixable now.

## STRUCTURE
1. Subject line
   - Triggers on the miss without sounding opportunistic or presumptuous
   - Value-forward (growth, forecast clarity, or pipeline control)

2. Salutation & Opening
   - Assume no prior relationship; respect his role and time
   - Land the trigger concretely — the miss is real, the pattern is addressable

3. Body (under 100 words)
   - The core insight: forecast breakdowns and pipeline visibility gaps are how Q misses happen
   - My product: Velara Revenue OS — what it does without feature-dump (real-time pipeline intelligence, zero manual CRM updates, forecast accuracy)
   - Single strongest lever for a CRO in this moment: he can see deal risk before it's fatal and close the forecast gap
   - Close with a low-friction ask (15 min, specific day/time optional, not "let's sync")

4. Signoff
   - Professional, no over-friendliness or artificial warmth

## GROUNDING
- The miss is his pain; the forecast gap is the root. Don't pitch retrospectively ("you missed Q3") — pitch forward ("this is how you close the gap before Q4").
- Velara Revenue OS is the product name. Lead with the outcome (forecast accuracy, pipeline visibility) not the feature set.
- CROs care about: forecast reliability, rep productivity, pipeline health, and board credibility. Ladder the message to one of these.
- Avoid: generic "let's talk growth", "I know you're busy", "we help companies like yours", product jargon (SLA, bidirectional sync, data rot).
- Keep email tone direct and specific — he's resource-constrained and skeptical of cold reach. Respect that.

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

**Status:** OK | **Time:** 4063ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3142 (read=0, write=0) | **Out:** 262 | **Cost:** $0.0036

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn after they missed last quarter. Write me a hook — a short-form DM under 100 words that lands in 90 seconds and earns a reply without sounding like a pitch.

## STRUCTURE
1. Hook (under 100 words)
   - Trigger is the missed quarter — make it concrete and immediate
   - Value is tied to revenue growth and what changes when forecast accuracy becomes real-time
   - Tone: peer-to-peer, no spray-and-pray energy
   - Close is a single, specific ask (not "let's grab coffee")

## GROUNDING
- Missed quarter is recent and stung — treat it as urgent context, not a lecture
- Jordan doesn't know Velara yet; assume zero product awareness
- LinkedIn DMs are glance-reading; every word earns its place
- Avoid: CRM jargon, product features as benefits, generic "growth" language
- Anchor to the real lever: when you see pipeline risk before it becomes a miss, decisions change

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

**Status:** OK | **Time:** 6293ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3177 (read=0, write=0) | **Out:** 439 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out to Erin Park, VP of GTM Operations at Rampcheck, via formal email. She's named forecast accuracy at quarter-end as a credibility blocker with the board. Write me a short-form hook—under 100 words—that lands on her desk with enough concrete specificity that she reads past the subject line and considers a 15-minute call.

## STRUCTURE
1. Subject line
   - Anchor to forecast accuracy or board credibility as the tension
   - No clickbait or vague positioning
   - Formal tone; respect her title and urgency

2. Salutation
   - Professional, name-based

3. Body (under 100 words total)
   - Lead with the trigger she named (forecast accuracy gap at quarter-end) — signal that you've done your homework without sounding like a scraper
   - Root the hook in real capability: my product surfaces forecast risk in real time and auto-captures deal activity so the accuracy problem doesn't snowball into a board moment
   - End with a concrete ask (15-minute call) and make it easy to say yes — no "let me know if you're interested" hedging

4. Signoff
   - Professional, name-based

## GROUNDING
- Erin is ops-facing, not sales-facing — speak to operational trust, board credibility, and process reliability, not quota upside
- The trigger is specific and earned; treat it with respect and don't overstate what my product can solve
- Forecast accuracy is the hook; the underlying tension is board credibility, not rep frustration
- Avoid: generic "pain point" language, vague "let's connect," soft CTA phrasing, anything that sounds like a templated blast
- Keep the tone direct and deferential — she's senior ops; brevity and specificity earn time, not enthusiasm

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

**Status:** OK | **Time:** 6194ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3256 (read=0, write=0) | **Out:** 465 | **Cost:** $0.0045

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm cold-emailing Mark Vidal, Director of Culinary Operations at Ascend Hotel Group, off a press release announcing 14 new locations opening over the next 18 months. Write me a short-form hook under 100 words that lands in a formal email — something that earns 90 seconds of attention and makes him curious enough to take a call.

## STRUCTURE
1. **Subject line** — Anchors to the trigger (14 new locations) and one clear value angle: save time or cut cost. Not cute; not clickbait. Feels like it came from inside the industry.

2. **Salutation + Hook** — Opens with his name and title (Director of Culinary Operations). The hook acknowledges the expansion challenge without sounding like a cold call. Must anchor to one concrete operational win — equipment consolidation, speed-to-service, or energy efficiency — tied to rolling out a kitchen at scale across multiple locations.

3. **Signoff** — My name, title, Northwind Commercial Kitchen, one phone number. No LinkedIn URL or social handles.

## GROUNDING
- **Trigger is real:** The expansion is his known problem right now. Lead with that signal, not with my product.
- **Director of Culinary Operations owns kitchen equipment decisions:** He cares about line staff training speed, recipe consistency, and operational standardization across 14 new locations. Speak his language.
- **Anchor to consolidation or standardization:** The XR-Series replaces four pieces of traditional equipment in one footprint. Frame that as reducing complexity and training burden when rolling out kitchens at scale — not as a feature list.
- **Avoid:** Jargon like "combi," "steam-generator warranty," or energy percentages. Avoid "I noticed you're opening" — too generic.
- **Tone:** Confident, specific to his situation, respectful of his time. Not overeager.

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

**Status:** OK | **Time:** 7654ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3255 (read=0, write=0) | **Out:** 508 | **Cost:** $0.0046

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor on LinkedIn after she was featured in a recent NYT piece on restaurants cutting energy costs without sacrificing menu. Write me a short-form hook (under 100 words) that lands in her DM and earns 90 seconds of attention. The hook must feel like a peer observation, not a pitch — anchor to the trigger and position the time/cost value, but let her curiosity do the work.

## STRUCTURE

1. **Hook message** — Under 100 words. Acknowledge the NYT feature without overstating it. Anchor to the energy-cost insight from the article and reference the time-savings angle (one oven replacing multiple pieces of equipment). No ask yet; just a credible signal that you saw her work and have something relevant to say.

2. **Tone and energy** — Conversational, specific to her context (multi-unit operator), no generic "I'd love to chat" language. Sound like someone in the business who noticed her move, not a vendor working a list.

3. **Salutation and signoff** — Keep both tight. Close with a soft path forward (not a calendar link or hard CTA). LinkedIn DM brevity is the channel discipline here.

## GROUNDING

- She's a multi-unit owner-operator, not a single-location GM — her time and energy costs matter across three locations. The equipment footprint and operational simplicity will resonate.
- The NYT feature is your only sourced trigger. Use it as your antenna — don't invent other details about her energy baseline, cost targets, or kitchen pain.
- Energy-cost reduction and time-savings (shorter prep, fewer handoffs across equipment) are the two levers here. Either one or both can anchor the message.
- Avoid: generic "congrats on the press," energy-industry jargon, any claim about equipment efficiency or warranty specifics not grounded in her stated problem.
- She's a chef-owner with editorial credibility — respect that. Don't sound like you're selling her a box; sound like you're connecting a relevant idea to work she's already thinking about.

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

**Status:** OK | **Time:** 5312ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3263 (read=0, write=0) | **Out:** 370 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm reaching out cold to Rachel Mendez, CEO of a PE-backed industrial company that just disclosed margin compression on their latest earnings call. Be my cold outreach specialist and write me a short-form email hook—under 100 words—that earns 90 seconds of her attention by anchoring to the concrete problem she just surfaced publicly, without sounding like I'm reading a script or fishing for a meeting.

## STRUCTURE
1. **Email hook (under 100 words)**
   - Subject line that signals specificity, not generic urgency
   - Salutation and body that treat margin compression as the real issue (not a pitch for consulting)
   - One sharp reason why a 12-week engagement with embedded senior partners matters for a PE-backed industrial operator facing margin pressure
   - Signoff (first name only, no title inflation)

## GROUNDING
- Rachel disclosed the margin hit herself—she knows it's a problem. Don't sell the problem back to her. Anchor to the fact pattern she already named.
- PE ownership creates pressure to recover margin fast; a 12-week timeline with working fixes (not recommendations) is the relevant edge here.
- No jargon, no consultant-speak. She's heard pitches. Sound like someone who understands margin compression in industrials.
- Avoid: generic "operational excellence," "synergies," "transformational," long lists of services, anything that reads like boilerplate.
- This is under 100 words total—tight and specific beats polished and long.

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

**Status:** OK | **Time:** 9047ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3259 (read=0, write=0) | **Out:** 361 | **Cost:** $0.0041

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Tomas Becker, COO at Becker Logistics, who recently stepped into the role after his father founded the company. Write me a hook under 100 words — casual, email-friendly, anchored to risk reduction — that lands the real reason for the outreach and earns 90 seconds of his attention.

## STRUCTURE
1. **Subject line**
   - Casual tone, no "urgency" spam language
   - The trigger (new COO, inherited ops) is the implied context, not the headline

2. **Body copy**
   - Concrete, immediate reason for reaching out — not "I thought of you" or "great things happening"
   - Risk reduction is the frame; anchor to the specific risk a newly-minted COO inherits from transition
   - One clear ask (nothing beyond a brief conversation)

## GROUNDING
- Becker Logistics is family-owned, ~250 employees — mid-market industrials, which is our sweet spot
- Tomas inherited operations from his founder-father; transition risk and margin leaks are real and common in this scenario
- Email is casual; match that tone — no "partnership" language, no consultant formality
- Senior-only delivery is a trust signal, but don't lead with credentials; let the specificity of the problem statement prove we understand his world
- Avoid: generic "operations improvement" language, "synergy," "strategic alignment," anything that sounds like standard consulting pitch

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

