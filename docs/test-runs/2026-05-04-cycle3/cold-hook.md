# cold-hook — stress test results

**Run:** 2026-05-04-cycle3  
**Cases:** 9 (9 OK)  
**Tokens:** 27,001 in / 3,607 out  
**Engine cost (this tool):** $0.0360  

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

**Status:** OK | **Time:** 5673ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2950 | **Out:** 393 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Marcus Reid (VP RevOps) on LinkedIn DM — he just posted on pipeline efficiency and got significant traction. Write me a hook under 100 words that earns 90 seconds of attention and positions my product as a time/cost lever without feeling like a pitch.

## STRUCTURE
1. Hook — short-form DM, under 100 words. Open with the signal (his post, the reaction it got), not my product. Land on one sharp reason why a VP RevOps optimizing pipeline would care about Velara Revenue OS, anchored to auto-captured deal activity eliminating manual CRM work. Close with a soft ask (coffee, quick call) — no pressure, genuine curiosity.

2. Tone — conversational, peer-to-peer. Acknowledge his expertise; position myself as someone who saw the signal and thought of him specifically. No jargon, no hype.

## GROUNDING
- Anchor to the LinkedIn signal: his post resonated, it's fresh. This is why I'm reaching out now.
- Focus on time/cost impact: VP RevOps cares about efficiency gains and team bandwidth. Auto-capture and pipeline clarity directly map to both.
- Do NOT mention forecast accuracy, implementation speed, or Salesforce/HubSpot syncing — those are table-stakes details for a later conversation.
- Avoid "pipeline intelligence" or "AI-powered" buzzwords. Stay concrete: manual CRM updates disappear, deals surface faster, reps stay on track.
- Keep it human. He's an expert; I'm not here to teach him RevOps. I'm here because his signal suggested alignment.

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 6098ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2958 | **Out:** 411 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing Priya Nair, Head of GTM, after their current platform had a publicized security incident. Be my cold outreach specialist and write me a hook under 100 words — casual tone, email-ready — that earns 90 seconds of attention by anchoring to time savings and cost reduction without naming the competitor or sounding opportunistic about their incident.

## STRUCTURE
1. Subject line — casual, curiosity-driven, no product name or vendor reference. Avoid "urgent" or security-specific language; lean on the value angle instead.

2. Body copy — Under 100 words. Open with a genuine nod to their situation (no "I saw your incident" phrasing; imply it naturally). Pivot fast to what we solve (CRM data rot, forecast accuracy, live speed). Close with a micro-ask — 15 min, no pressure.

3. Signature — Keep it warm and brief; include my name and a single link to Velara.

## GROUNDING
- Priya is GTM leadership — she owns pipeline health and forecast credibility. Data rot and forecast accuracy matter to her directly.
- The trigger is real but not the main story. The main story is what we *replace* — manual CRM burden, forecast guesswork. Lead with relief, not their pain.
- Casual tone means conversational, short sentences, no corporate cadence. No "synergy," "streamline," "leverage."
- 100 words is tight. Every sentence earns space. Cut anything that doesn't land with Priya in 90 seconds.
- Security isn't the hook — time and cost are. A platform change is already in motion; we're the smarter choice, not the rescue.

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

**Status:** OK | **Time:** 5347ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2955 | **Out:** 348 | **Cost:** $0.0038

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm cold-emailing David Kowalski, CRO at a company that missed Q3 ARR target. Be my cold outreach specialist and write me a hook — under 100 words — that earns 90 seconds of his attention without sounding like a pitch.

## STRUCTURE
1. **Hook (single paragraph, under 100 words)**
   - Open with the trigger (Q3 miss) — make it clear I did my homework, but don't sound forensic
   - Pivot to what a CRO actually cares about: pipeline visibility and forecast reliability when targets slip
   - Close with a one-liner about Velara Revenue OS that lands as a logical next step, not a product mention
   - No call-to-action; just leave the door open for response

## GROUNDING
- David is CRO — speak to revenue accountability and the cost of pipeline blindness, not feature depth
- Q3 miss is the entry point, not the wound; treat it as context for why forecast accuracy matters now
- Avoid "I noticed you missed target" energy — frame it as "targets slip, which is exactly when pipeline clarity becomes critical"
- Velara Revenue OS eliminates manual CRM updates and surfaces forecast accuracy; anchor to forecast reliability as the lever
- No false specificity about his company's situation, challenges, or metrics beyond what's in the earnings call disclosure
- Short and direct — he gets 50+ emails daily; respect the format

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

**Status:** OK | **Time:** 4961ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2936 | **Out:** 337 | **Cost:** $0.0037

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Jordan Mehta on LinkedIn after they missed last quarter. Be my cold outreach specialist and write me a hook — under 100 words — that earns 90 seconds of attention by anchoring to the missed quarter and hinting at the revenue upside without sounding generic or pushy.

## STRUCTURE

1. Hook — LinkedIn DM format
   - Open with a specific, non-generic nod to the missed quarter (avoid "tough quarter" clichés)
   - Signal that pipeline visibility and forecast accuracy directly tie to avoiding repeats
   - Hint at Velara Revenue OS's core capability (real-time pipeline intelligence) without naming it or overselling
   - One clear ask: a short conversation, not a demo or commitment
   - Tone: peer-to-peer, curious, not salesy

## GROUNDING

- Missed last quarter is the only context I have — it's the lever; don't invent other pain points
- Pipeline visibility and forecast accuracy are the threads that connect to a missed quarter; lean there
- Keep it punchy and human — no feature-stack language, no "AI-powered" or "real-time" jargon if it feels forced
- LinkedIn DMs reward brevity and specificity; under 100 words is a hard stop
- Jordan's title suggests decision-making input; respect that by treating this as peer-level, not subordinate outreach

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

**Status:** OK | **Time:** 6504ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 2971 | **Out:** 460 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Velara selling Velara Revenue OS. I'm reaching out cold to Erin Park, VP of GTM Operations at Rampcheck, on email. She's flagged forecast accuracy at quarter-end as a credibility risk with her board. Be my cold outreach specialist and write me a hook under 100 words that threads her stated pain into a reason to take 90 seconds with me — no hard sell, just enough signal that this is worth her time.

## STRUCTURE
1. Subject line
   - Formal tone, no hype. Anchor to the board credibility angle without naming the specific forum.
   - One clean value signal tied to forecast accuracy or pipeline visibility.

2. Salutation + Hook (body)
   - Name her by title and company.
   - Open with the forecast accuracy problem as SHE described it — her words, not invented urgency.
   - Land one reason Velara Revenue OS is worth a conversation: real-time pipeline visibility that stops forecast surprises.
   - Close with a soft ask for 15 minutes, no "let me know" hedge.

3. Signoff
   - Formal. First and last name. No noise.

## GROUNDING
- Erin said forecast accuracy is a credibility hit with the board at quarter-end. Treat that as the entry point — it's real and it's hers.
- Velara Revenue OS auto-captures deal activity and eliminates manual CRM updates; that's the engine. But lead with the outcome she cares about: forecast you can trust.
- No invented stats, no "we help companies like you," no false specificity about Rampcheck's team or process.
- Formal email tone: no exclamation marks, no cutesy subject lines, no "quick question" openers.
- Avoid: generic "improve your forecast" language. Avoid: "according to research" or "best practices." Avoid: questions posed as openers — this is a statement, not a discovery call.

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 5850ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3057 | **Out:** 430 | **Cost:** $0.0042

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out to Mark Vidal (Director of Culinary Operations at Ascend Hotel Group) cold via formal email. He's opening 14 new locations across the US over the next 18 months — a kitchen-equipping moment. Be my cold outreach specialist and write me a hook under 100 words that lands time-saving and cost-reduction as the headline, earns 90 seconds of attention, and avoids neediness.

## STRUCTURE
1. **Subject line** — curiosity-driven, relevant to multi-unit kitchen buildout, no buzzwords.

2. **Hook (under 100 words)** — opens with the expansion trigger, pivots to the operational bottleneck it creates (equipment footprint, training burden, energy cost across sites), positions the Northwind XR-Series as the solve. No product specs; no comparison naming. Close invites a brief conversation, not a demo.

3. **Signoff** — formal, includes my title and company, no soft CTAs ("let me know your thoughts"). Let him move the conversation forward.

## GROUNDING
- Ascend Hotel Group is a multi-unit operator; the expansion is real operational pressure, not a nice-to-have.
- Director of Culinary Operations owns kitchen efficiency and staff readiness — these are his levers.
- Formal tone holds; avoid casual language or exclamation points.
- Do not name specific competitors.
- Do not invent numbers, timelines, or operational details I haven't supplied (no "save $X per location", no "reduce training time by Y days", no facility-specific claims).
- The hook lands only if it speaks to the actual bottleneck the expansion creates: kitchen footprint, staff onboarding, and energy across 14 sites.

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 7424ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3056 | **Out:** 472 | **Cost:** $0.0043

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Northwind Commercial Kitchen selling the Northwind XR-Series Combi Oven. I'm reaching out cold to Chef Lila Okafor via LinkedIn DM after she was featured in a recent NYT piece on restaurants cutting energy costs. Be my cold outreach specialist and write me a hook under 100 words that earns 90 seconds of her attention — anchor to the energy-cost angle she's already thinking about, avoid the hard sell, and keep it tight enough for a DM platform.

## STRUCTURE
1. Hook — One tight opener that signals you've read about her cost-cutting focus and connect it to something specific about how we solve that problem (without naming numbers or making unsourced claims). Land the value in the first two sentences.
2. Proof flag — One sentence that signals we're not theoretical; make it credible but not pushy. Reference our service advantage or our track record if natural, but let credibility live in restraint, not claims.
3. Micro-close — One clear ask: a conversation, a quick call, a reply — whatever feels lowest friction for a DM context.

## GROUNDING
- Anchor to the NYT angle — she's publicly signaling energy + cost are on her mind; we solve both without sacrifice.
- One differentiator only: our same-day service network or our energy efficiency (not both). Same-day service is harder for competitors to copy and shorter to explain in 100 words; lean there.
- No product name-drop unless it feels organic; focus on the outcome (time back, cost down, equipment footprint recovered).
- Chef Okafor runs three restaurants — multi-unit operator mindset. She thinks about labor, consistency across locations, and capital deployment. Don't pitch features; pitch what she can do with the time and space we return.
- Avoid foodservice jargon she already knows (convection, steamer, etc.) and avoid generic efficiency claims. Stay conversational, owner-level.
- DM energy: brief, direct, one ask. No signature blocks or company boilerplate.

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
    "value-angle": 0
  }
}
```

**Status:** OK | **Time:** 6380ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3061 | **Out:** 385 | **Cost:** $0.0040

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Rachel Mendez, CEO at a PE-backed industrial company, off a disclosed margin compression trigger. Write me a hook under 100 words that earns 90 seconds of attention — no intro fluff, straight to the specificity of her problem and why a senior-led fix matters to a PE partner watching cash bleed.

## STRUCTURE
1. Subject line — one sharp line that signals business problem, not sales noise. Avoid "quick question" energy; anchor to the margin compression signal you have.

2. Hook (under 100 words) — open on the specific pain point (margin compression she disclosed), name the typical root (one cash leak you see in this sector), and close on the outcome only senior-led diagnosis + working fixes can unlock. Don't mention Aldermark by name or pitch the engagement; make her want to know what we'd find. Channel: email, so salutation + hook + clean signoff.

## GROUNDING
- PE-backed industrials is our core vertical; this is credible ground.
- Margin compression is the disclosed wound — use it directly, not softened.
- Senior-only delivery and working fixes by week 12 are the only credibility markers that matter to a PE-backed CEO; don't bury them.
- Avoid consultant-speak ("synergy," "alignment," "leverage," "transform"). Speak like an operator who sees cash leaks.
- Keep it short enough she reads the whole thing; long cold emails die.
- She doesn't know us yet — no familiarity, no "as discussed," no assumed context.

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

**Status:** OK | **Time:** 5191ms | **Drill-down:** ✓ | **Grounding:** ✓ | **Profile:** ✓ | **In:** 3057 | **Out:** 371 | **Cost:** $0.0039

**Generated Master Prompt:**

```markdown
## MISSION
I'm a sales rep at Aldermark Advisory selling the Aldermark 12-Week Operations Reset. I'm cold-emailing Tomas Becker, COO of Becker Logistics, who recently took over operations from the founder. Write me a short-form hook under 100 words that lands in his inbox as casual and human — the goal is 90 seconds of attention. Anchor to risk reduction as the headline value.

## STRUCTURE
1. Subject line
   - Casual tone, no sales-speak
   - Risk reduction is the headline; keep it implicit, not explicit

2. Body (under 100 words)
   - Open with acknowledgment of the founder transition — specific to his situation, not generic
   - One sentence stating the core problem (operations bleeding margin after leadership handoff is common at this stage)
   - Close with a low-friction next step (conversation, not demo; no ask for a call yet)
   - Sign naturally — no corporate signature block

## GROUNDING
- Becker Logistics is family-owned, ~250 employees — mid-market manufacturing/logistics scale is our sweet spot
- Founder transitions create operational drag; the new COO inherits legacy systems and margin leaks he didn't build
- Casual voice means no jargon, no "leverage," no "synergy," no consulting-speak
- Don't mention fixed-fee structure, success-alignment, or any other mechanism detail — too early
- Don't reference Aldermark's name or services; let curiosity pull him in
- Risk reduction frames operational health as a threat to stability — relevant to a new COO proving himself

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

