# PromptStarter — Consolidated Review

## Part 1 — Per-tool reviews

### 1. pre-call-recon

**Verdict in one paragraph:** This is the strongest tool in the set and the only one that feels genuinely Core-tier valuable. The structure (intel signal + three openers + two questions) is tight, the research protocol is responsible, and the engine consistently respects the rep's voice across all 9 cases. But the tool is doing something that overlaps heavily with what a working AE could draft in five minutes — the differentiated layer is the RESEARCH PROTOCOL block, which is genuinely useful, and the discipline around "give me the rail, not the script." Profile sensitivity is the best of the seven: the Marriott, Lark & Linden, Ridgeway, and Kessler outputs read like they were written by someone who actually thought about hospitality, indie-restaurant, PE-industrial, and family-business contexts respectively. The drill-down offer is real and consistent. Sliders work clearly here — you can see hostile/forced-attendance briefs visibly diverging from warm-inbound briefs.

**P0 — must-fix:**
- The "GROUNDING" block is doing 70% of the work. Most cases would lose meaningful value if you stripped STRUCTURE and kept only GROUNDING + RESEARCH PROTOCOL + DRILL-DOWN OFFER. Consider whether STRUCTURE is real differentiation or just restating "give me what the user asked for."
- The two static rules (RESEARCH PROTOCOL, STANDARD RULES, DRILL-DOWN OFFER) are >40% of every output. They're identical word-for-word across all 9 cases. If a rep paid for this tool and saw the same boilerplate three times in a row, they would notice. Move boilerplate to a footer so the bespoke section feels heavier.

**P1 — should-fix:**
- The Walmart MISMATCH case (a clearly inappropriate enterprise target for a mid-market product) does not flag the size mismatch. The brief just proceeds as if Walmart Connect is a fine target. A real call-prep strategist would say "this is a stretch — here's what would have to be true." The tool misses an obvious chance to add value.
- The SPARSE Acme/Director case is bland on purpose, but the GROUNDING bullets like "Don't use buzzwords like 'synergy,' 'alignment,' 'innovative,' or 'best-in-class'" are filler — every case has some version of this. Compress.

**P2 — nice-to-have:**
- The "drill-down offer" closing paragraph is excellent in concept but verbose in execution — 3 lines could do what 6 are doing.

**Naming & input UX:**
- Tool name: keep. "Pre-Call Recon Brief" is the clearest name in the suite.
- Inputs: `targetCompany` keep, `targetPersona` keep. Good labels.
- Sliders: `call-objective` keep, `prospect-posture` keep — both move output meaningfully.

**Slider effectiveness check:** Yes. Compare HubSpot/Warm/Background (warm inbound, soft openers, neutral discovery) vs Stripe/Skeptical/Test Budget (acknowledged cold call, restraint instructions, BANT-disguised-as-curiosity questions) vs Verdn/Forced/Challenge (challenger framing, status-quo-fragility intel signal). The slider extremes produce visibly different briefs.

**Profile-sensitivity check:** Strong. Northwind Marriott and Lark & Linden read like F&B briefs (kitchen vocabulary, owner-chef respect, no "transformation" language). Aldermark Ridgeway and Kessler hit cash/margin/PE notes and family-business succession dynamics. No SaaS-shape contamination.

**Best case in this tool:** Lark & Linden (Northwind, owner-chef, skeptical, challenge). The grounding bullets are the most context-aware in the entire dataset — "Owner-chef role: Operator, not just decision-maker. Respect kitchen knowledge; don't oversimplify or talk around their expertise" is exactly the calibration a hardware rep would want and could not have written themselves in 90 seconds. Curated sample candidate.

**Worst case in this tool:** Walmart Connect MISMATCH. The engine took the inputs at face value and produced a brief for a deal that probably shouldn't be on the rep's calendar. Missed coaching opportunity.

---

### 2. objection-defuser

**Verdict in one paragraph:** Useful in concept but structurally overlapping with competitor-battlecard whenever the objection is competitor-driven. The engine respects "give me the rail, not the script" mostly, but the STRUCTURE blocks repeatedly creep toward dictating exact framing in a way that pre-writes the dialogue's beats. The bigger issue: the GROUNDING blocks are where all the actual coaching lives, and they routinely reference profile facts the rep didn't include (the "auto-captures deal activity" line shows up in Velara cases that didn't ask for it; "10-year sealed steam-generator" reappears in Northwind cases that didn't supply it). This is profile-leakage masquerading as "anchor facts" — it's helpful when accurate but invisible to the rep when it's wrong. The Northwind/Convotherm case fabricates "NSF-certified field-tested" out of nothing.

**P0 — must-fix:**
- **Fabricated specificity in GROUNDING blocks.** Northwind/Convotherm output (line 353 in objection-defuser.md): "The 30% energy savings is NSF-certified field-tested—this is your hardest data; lean on it." The "NSF-certified" qualifier is invented — it wasn't in the inputs. Northwind Rationals case: "this recovers ~14 sq ft of kitchen line without touching their existing Rational investment" — the 14 sq ft is fabricated. The engine is consistently augmenting profile facts with invented precision and presenting it as ground truth. This is the single highest-risk failure mode in the product.
- **Voice drift in framing instructions.** The "structure" blocks often dictate the opening beat too tightly: "Lead with the 30% lower energy draw per cooked pound—this is the concrete ROI engine. Don't bury the 18-month payback; lead with it." That's not a rail, that's a script outline. Three sentences in, the downstream AI has been told the order of arguments — that's pre-writing.

**P1 — should-fix:**
- The HOSTILE V case ("don't trust your numbers — show me independent proof or this conversation is over") gets a grounding block that says "Our SLA isn't aspirational — it's contractual and auditable; this is our differentiator." That's overstating what the input said. Input said "Forecast accuracy SLA backed by contract — auditable claims." Engine paraphrased into stronger language. Drift, not fabrication, but pointing in the same direction.
- "Empathize & Pivot" vs "Probe Deeper" vs "Stick to ROI" vs "Push Back" — four posture options is too many. The output differences between Empathize and Probe are subtle in practice.

**P2 — nice-to-have:**
- The DRILL-DOWN OFFER block is identical to pre-call-recon's word-for-word. Refactor as a global postlude, not duplicated per tool.

**Naming & input UX:**
- Tool name: keep. "Objection Defuser" is clear.
- Inputs: `statedObjection` keep, `productValue` reword to `yourCounter` or `yourBestComeback` — "productValue" undersells what the field is actually for (the rep's specific counter to *this* objection), not generic product value.
- Sliders: `response-posture` keep but reduce from 4 to 3 options (collapse Empathize and Probe Deeper). `next-step-aggression` keep — Buy Time vs Two Alternatives vs Soft Agreement vs Firm Commitment is a real spectrum.

**Slider effectiveness check:** Mixed. `next-step-aggression` works clearly (Firm Commitment outputs push toward dates and decision-makers; Buy Time outputs explicitly avoid the close). `response-posture` is mushier — Empathize-and-Pivot vs Probe Deeper produce outputs that are 80% identical.

**Profile-sensitivity check:** Adequate but with the fabrication caveat above. Northwind cases use kitchen language, Aldermark cases use margin/cash language. No SaaS contamination of hardware/services cases.

**Best case in this tool:** Aldermark "tried McKinsey, got a deck." The engine handled the McKinsey-as-foil-not-competitor instruction beautifully and the fee-structure-as-proof framing is exactly what a senior consulting seller needs. No invented numbers.

**Worst case in this tool:** Northwind Convotherm (price + warranty objection). Engine fabricated "NSF-certified field-tested" as a pseudo-credential. If the rep paraphrases that into a customer call and the customer asks for the certification, the rep is now lying inadvertently.

---

### 3. competitor-battlecard

**Verdict in one paragraph:** This tool is in trouble. Across all 9 cases, the five-question structure is so generic that the same five questions could plausibly be deployed against any competitor, in any vertical, at any deal stage — the only thing that changes between the Salesforce, Gong, HubSpot, and Outreach cases is which two product nouns get substituted in. Discovery questions like "How much time do reps spend on manual CRM hygiene vs. selling?" appear nearly verbatim in three different battlecards. The Aldermark cases (vs Deloitte, vs in-house Transformation Lead) are the strongest because the structure is forced to adapt — but even those lean on the same scaffolding (visibility / pace / diagnostic / blind spots / urgency). The competitor name is doing surprisingly little work.

**P0 — must-fix:**
- **Slider invariance and Mad Libs feel.** Compare the V Salesforce / Drop Subtle Doubts / First Convo case to the V Outreach / Drop Subtle Doubts / Final Selection case. Both have five questions covering "activity vs visibility," "risk detection timing," "forecast confidence," "post-mortem patterns," "tool workflow friction." They are functionally interchangeable. The slider changed but the questions didn't.
- **The five-question structure is the wrong primitive.** A real battlecard isn't five symmetrical discovery questions. It's: where they win, where they lose, the trap question, the proof point that lands, the booby trap to avoid. The current structure is a discovery sheet wearing a battlecard hat.

**P1 — should-fix:**
- "Drop Subtle Doubts" vs "Hit Feature Gap" vs "Pivot to Business Value" vs "Go Head-to-Head" — four positions on `competitive-stance`, but in the outputs they all produce roughly the same questions with slightly different rhetorical packaging. The slider isn't earning its place.
- Significant overlap with **objection-defuser** when the prospect's objection IS the competitor. A rep who runs both tools for "we're already on Salesforce" gets two prompts that produce 70% similar coaching.

**P2 — nice-to-have:**
- The "coaching note per question" sub-bullets are the most useful part of these outputs. Surface them more.

**Naming & input UX:**
- Tool name: keep "Competitor Battlecard" but consider repositioning as "Discovery Questions vs [competitor]" — the current name promises battlecard energy and delivers a discovery worksheet.
- Inputs: `competitorName` keep, `ourAdvantage` keep but reword to `yourEdge` or `yourSharpestWedge` — "advantage" is a flabby word that produces flabby outputs.
- Sliders: `competitive-stance` cut or reduce to 2 options (Subtle vs Direct). `conversation-stage` keep — First Convo / Solution Discovery / Building Business Case / Final Selection actually maps to a real funnel.

**Slider effectiveness check:** Weak. Stance slider barely moves output. Stage slider has some effect (Final Selection cases reference comparing/comparing more explicitly; First Convo cases lean more discovery-broad).

**Profile-sensitivity check:** Strongest in Aldermark Deloitte and Aldermark in-house Transformation Lead — those required real adaptation away from SaaS-shape. Northwind Rational and Convotherm cases adapt vocabulary (energy, footprint, service response) but the underlying question architecture is identical to the V cases.

**Best case in this tool:** Aldermark vs in-house Transformation Lead. The output actually wrestles with "the competitor is internal bandwidth and familiarity bias, not a vendor" — that's a real coaching insight.

**Worst case in this tool:** V Outreach.io / Drop Subtle Doubts / Final Selection. Five questions that are barely distinguishable from the V Salesforce / Drop Subtle Doubts / First Convo questions despite different competitor and different stage. Slider invariance demonstrated.

---

### 4. cold-hook

**Verdict in one paragraph:** This tool produces useful structure but has the worst voice-discipline failures in the suite and the most verifiable fabrication. It's also the tool where "the rep could've written this themselves in 90 seconds" applies most. Two outputs (Lila Okafor, Tomas Becker) open with literal voice violations: "I'm a cold outreach specialist writing... on behalf of a sales rep at..." — the engine wrote a master prompt addressed FROM a specialist TO a downstream AI, with the rep as a third party. That's a category error. The Erin Park RICH case fabricates "anchor to our 4% accuracy guarantee backed by SLA" — the 4% appears nowhere in inputs. The D1 SENTINEL case (sparse trigger "missed their last quarter" / no company / no role) handles fabrication discipline well — the GROUNDING explicitly says "No numbers, projections, or promises" — but then the SENTINEL is the easy case because there's nothing TO fabricate. The harder cases (RICH, RICH-with-named-account) are where fabrication leaks in.

**P0 — must-fix:**
- **Voice violations in the master prompt itself.** Lila Okafor (line 385): "I'm a cold outreach specialist writing a LinkedIn DM **on behalf of a sales rep**..." Tomas Becker (line 510): "I'm a cold outreach specialist writing a short-form email hook **on behalf of a rep**..." Both directly violate the constitution: the engine writes in the rep's first-person voice; "I" must equal the rep, never a stand-in specialist persona. This breaks two outputs out of nine — 22% failure rate on a core voice rule.
- **Fabricated "4% accuracy guarantee."** Erin Park RICH case (line 272): "anchor to our 4% accuracy guarantee backed by SLA." The 4% number is in zero inputs. The Velara profile likely says something like "forecast accuracy SLA" but the engine is consistently materializing this as the specific 4% figure across four different tools (cold-hook, follow-up-forward, deal-reviver, cfo-pitch — see cross-tool synthesis below). This is a recurring profile-hallucination, not a one-off.
- **Mark Vidal Northwind case** (line 339) injects "recovers ~14 sq ft per kitchen" — fabricated.

**P1 — should-fix:**
- "outreach-channel" with values DM / Casual / Formal / C-Suite mixes channel and tone. DM vs Email is a channel decision; Casual vs Formal vs C-Suite is a tone decision. These should be two separate inputs or one cleaner one.
- The "value-angle" slider produces visibly different framing (Save Time vs Cut Cost vs Reduce Risk vs Grow Revenue), but Save Time and Cut Cost outputs are 70% similar.

**P2 — nice-to-have:**
- Under-100-words is mentioned in every output — make it a setting, not a recurring instruction.

**Naming & input UX:**
- Tool name: keep "Cold Hook." It's evocative.
- Inputs: `prospectName` keep, `triggerEvent` keep (this field is doing real work — the trigger drives the hook).
- Sliders: `outreach-channel` reword and split — channel (DM/Email) separate from tone (Casual/Formal). `value-angle` keep but cut Save Time OR Cut Cost (they collapse).

**Slider effectiveness check:** Channel slider moves output meaningfully (DMs are visibly shorter and less formal; C-Suite emails get subject lines and signoffs). Value-angle works at extremes (Reduce Risk vs Grow Revenue produce different frames) but compresses in the middle.

**Profile-sensitivity check:** Mostly good. Northwind cases speak F&B; Aldermark cases speak margin. But the two "I'm a cold outreach specialist on behalf of..." failures both happened on hardware/services cases — there's a profile-correlated voice failure mode where the engine reaches for a "specialist" framing more often when the seller isn't pure SaaS.

**Best case in this tool:** D1 SENTINEL Jordan Mehta. Sparse inputs, and the engine handled it correctly: no fabricated company, no invented persona, GROUNDING explicitly limits invention. This is the case to point at when defending the tool's fabrication discipline.

**Worst case in this tool:** Erin Park RICH (Rampcheck All-Hands AMA). The engine had real input ("forecast accuracy at quarter-end was the team's biggest credibility hit with the board") and instead of riding that, it fabricated a "4% accuracy guarantee backed by SLA" that the rep doesn't actually have. The richest input produced the worst output — a sign the tool over-confabulates when given license to be specific.

---

### 5. follow-up-forward

**Verdict in one paragraph:** This is the second-strongest tool. The two-asset structure (rep-to-prospect email + forward-ready recap in the prospect's voice) is genuinely differentiated — no rep is going to manually scaffold "write this in their voice, no vendor branding, five bullets, internal-memo tone" in a way that gets ChatGPT to actually do it. The forward-ready recap concept alone justifies the tool's existence. Profile sensitivity is strong (the Northwind chef demo and Aldermark CEO board pre-read read like different planets). The fabrication problem reappears though: the James/Bought-In case (line 116) confidently asserts "forecast accuracy within 4% guaranteed (SLA-backed)" as a proof point for the recap. That's the same 4% fabrication migrating in from cold-hook.

**P0 — must-fix:**
- **Recurring 4% fabrication** (line 116, James case). The engine is treating "4% SLA" as profile-given fact when it isn't. Repeat offender across tools.
- **The Anna/COO/Skeptical case** (line 593) materializes a specific number — "the success-aligned fee structure (50% held back until margin recovery signed off)" — that came from the *previous* tool's input (objection-defuser), not from the follow-up-forward inputs. Either the engine is leaking profile facts the rep didn't surface in the call, or the profile contains the 50% holdback as a fact and the engine is sprinkling it into recaps that didn't mention it. Either way, the recap will read as "we discussed the 50% holdback" when the rep's call notes don't say they did.

**P1 — should-fix:**
- The SPARSE case ("Showed demo. Was on the call." / "They liked it") produced an output that sensibly degraded — the engine asks for clarification mid-grounding ("If my notes don't name the moment, ask me to clarify what they reacted to"). Good behavior, but inconsistent: in other tools the SPARSE case was over-confidently filled in. Standardize the degradation pattern.
- "Already Selling Internally" as a buying-role value is doing two things at once (role + state). Consider separating.

**P2 — nice-to-have:**
- The forward-ready recap rules ("no vendor branding, no rep name") are stated 4-5 times per output. Once would do.

**Naming & input UX:**
- Tool name: rename to "Post-Call Wrap" or "Forward-Ready Recap" — "Follow-Up Forward" is opaque to a rep skimming the tool list.
- Inputs: `callNotes` keep, `biggestAha` keep — both are doing real work and the outputs visibly anchor to them.
- Sliders: `buying-role` keep but consolidate (Operational User / Department Manager / VP-Director / C-Suite is a clean 4-step). `call-mood` keep (Skeptical / Mildly Interested / Bought-In / Already Selling Internally — though see P1 above).

**Slider effectiveness check:** Both sliders move output meaningfully. Compare Sarah/Skeptical/Department Manager (brief is restrained, doesn't oversell) vs CEO/Already Selling Internally/C-Suite (recap is openly designed to close the CFO). Real divergence.

**Profile-sensitivity check:** Strong. Chef Diego kitchen demo recap reads as F&B; Anna industrial fabrication services case reads as ops consulting; CEO board pre-read reads as exec memo. No SaaS contamination.

**Best case in this tool:** Aldermark CEO / Already Selling Internally / wants to brief board. The engine correctly identifies that the recap's job is "make him look sharp when he evangelizes" — a real strategic insight, not template language.

**Worst case in this tool:** James/Bought-In/VP-Director. Strong inputs, fabricated 4% number, leaks the recurring Velara profile-hallucination into a stakeholder-forwardable artifact. If the prospect forwards that recap to their CFO and the CFO asks "what's their actual SLA," the champion is now on the hook for a number the rep never gave them.

---

### 6. deal-reviver

**Verdict in one paragraph:** Useful concept (3-touch sequence for a stalled deal), but the Touch 1 email overlaps heavily with cold-hook output, and the Touch 3 voicemail is producing similar coaching across cases (lead with the reason in the first 5 words, leave a question, no callback demand). The voicemail rules in particular are identical word-for-word in 7 of 9 cases — that's not customization, it's a template. Two of the Aldermark cases open the master prompt with "I'm a cold revival specialist at Aldermark" — first-person but the rep would never describe themselves that way to ChatGPT. That's a soft voice-drift, not a hard violation. The Nina V case adds another instance of the 4% fabrication.

**P0 — must-fix:**
- **Touch 1 email overlap with cold-hook.** A rep who runs cold-hook for a "missed quarter" trigger and then runs deal-reviver for a stalled deal where the angle is "new data" gets two emails that share the same DNA: opening line acknowledging context, value bridge, soft ask. The two tools should diverge sharply on the actual revival hook (cold-hook = first contact; deal-reviver = re-engagement with shared history). They don't.
- **4% fabrication recurs** (Nina case, line 201): "we guarantee within 4%." Same problem.
- **"I'm a cold revival specialist at Aldermark"** opener (Greg, Linda cases) is awkward self-titling — not a third-person violation but a tonal break. A rep paraphrasing this prompt to themselves doesn't think "I'm a cold revival specialist," they think "I'm trying to revive a stalled deal."

**P1 — should-fix:**
- The voicemail section's three rules ("first 5 words name the real reason," "20-30 seconds," "leave a question, no callback demand") are identical across nearly every case. This is template, not coaching.
- "Outside Resource" as a revival-angle value is vague compared to "New Data" or "Product Update" — what does "Outside Resource" actually mean as a trigger? The Tom SPARSE case shows the engine struggling with this: it ends up saying "lead with something genuinely useful — an insight, a pattern I've noticed in his space, a resource that might matter to him."

**P2 — nice-to-have:**
- The "if applicable" caveat on voicemail is good, but it's stated identically in every output.

**Naming & input UX:**
- Tool name: keep "Deal Reviver."
- Inputs: `prospectCompany` is a misleading label — most reps put the prospect's NAME there, not company. Rename to `prospectAndCompany` or split into two fields. `wentCold` keep — this field carries the most weight in the output.
- Sliders: `silence-duration` keep — A Few Days vs 2-4 Weeks vs 1-3 Months vs 3+ Months is a real spectrum. `revival-angle` consolidate — "Outside Resource" should be cut or merged into "New Data."

**Slider effectiveness check:** Silence-duration moves output meaningfully (3+ months Last Try cases visibly more deliberate, less hopeful). Revival-angle works at extremes (Product Update vs Outside Resource) but the middle is mushy.

**Profile-sensitivity check:** Adequate. Northwind Sara hotel chain reads as F&B; Diego case reads as kitchen-operator. Aldermark Greg/Linda cases read as PE-industrial / family-services. No bad SaaS leakage.

**Best case in this tool:** Aldermark Linda / 3+ Months / new CFO arrived. The engine correctly identifies the new CFO as a legitimate hook AND correctly positions for two readers (Linda + the CFO who might see the email forwarded). Real strategic awareness.

**Worst case in this tool:** V Nina / Last Try. 4% fabrication, plus the Touch 1 email is barely distinguishable from a cold-hook output for a "budget freeze lifted" trigger.

---

### 7. cfo-pitch

**Verdict in one paragraph:** Genuinely differentiated tool — the "write in champion's voice, no vendor branding, structure for 90-second skim" instruction is doing work that a rep cannot easily do themselves and that a generic ChatGPT prompt would produce poorly. The rules are well-designed: $X is the only dollar figure allowed, all multipliers must be flagged as assumptions explicitly, behavioral observations not feature lists. Northwind cases adapt cleanly to capex/utility/closure-cost language. Aldermark cases adapt to engagement-fee/holdback math. The 4% fabrication appears once (V Risk angle case, line 193, "Forecast stayed within 4% accuracy through the full month") but is correctly hedged as a behavioral observation example rather than a hard claim. Even so — the 4% should not be in the engine's mouth at all.

**P0 — must-fix:**
- **4% fabrication** in V Risk angle case (line 193). Even framed as "example of behavioral observation," it presents as truth. Strip.
- **"Reader-audience: Champion / CFO Directly / CEO/COO / Procurement"** — Procurement is an outlier. The other three are all C-suite or near-C-suite finance approvers. Procurement reads documents differently and the slider currently lumps them into the same scale. Either separate or remove.

**P1 — should-fix:**
- The Northwind/Procurement case (line 470) opens "I'm a commercial kitchen equipment rep at Northwind Commercial Kitchen selling the XR-Series Combi Oven. **My champion is about to forward...**" — this is technically first-person but the "commercial kitchen equipment rep" self-description is awkward; a rep wouldn't describe themselves that way. Same soft voice-drift as deal-reviver Greg/Linda cases.
- The "what we evaluated" section consistently produces solid behavioral-observation language — celebrate this. It's the most defensible block of any tool's output.

**P2 — nice-to-have:**
- Section headers (THE PROBLEM / FINANCIAL CASE / WHAT WE EVALUATED / THE ASK) are sometimes ALL CAPS, sometimes Title Case across cases. Standardize.

**Naming & input UX:**
- Tool name: keep "CFO Pitch" but consider "CFO-Forward Brief" — the current name implies the rep is pitching, when actually it's the champion forwarding to the CFO.
- Inputs: `painPoint` keep, `annualCost` keep — both are doing the heavy work and the outputs anchor to them rigorously.
- Sliders: `financial-case` keep — Save Labor Hours / Cut Hard Costs / Speed Up Revenue / Reduce Risk maps to four real CFO frames. `reader-audience` reduce to 3 by collapsing Procurement or moving it to a separate dimension.

**Slider effectiveness check:** Both sliders work. Save Labor Hours produces hours-times-rate math; Reduce Risk produces cost-of-being-wrong math; Cut Hard Costs produces direct cost displacement math; Speed Up Revenue produces deal-velocity math. Genuine slider differentiation — the only tool where all four positions feel meaningfully different.

**Profile-sensitivity check:** Excellent. Velara cases anchor to labor / forecast accuracy / SLA risk. Northwind cases anchor to utility cost / capex / closure cost. Aldermark cases anchor to engagement fee / margin recovery. No cross-contamination.

**Best case in this tool:** Northwind downtime risk / Reduce Risk / Procurement. The engine correctly identifies that Procurement reads for risk quantification and operational leverage, NOT cooking modes — and the financial-case bullet structure (closure-cost exposure → conservative one-fewer-closure baseline → service advantage as risk lever) is exactly what a procurement officer needs.

**Worst case in this tool:** V Risk angle / Reduce Risk / CEO-COO. Strong overall, marred by the 4% fabrication leaking into "what we evaluated" as if it were a real observed metric.

---

## Part 2 — Cross-tool synthesis

### One-paragraph verdict on the arsenal
This is a coherent product *concept* (PromptStarter sells scaffolding, not copy) but a partially-coherent product *suite*. Three tools earn their place: pre-call-recon, follow-up-forward, and cfo-pitch — each does something a rep cannot easily do themselves and each has clear profile sensitivity. Three tools collapse into adjacent ones: cold-hook and deal-reviver share Touch 1 DNA; objection-defuser and competitor-battlecard overlap whenever the objection is competitor-driven; cold-hook and pre-call-recon's "openers" overlap when the rep is doing first-touch outreach without a call yet booked. One tool (competitor-battlecard) is structurally weak — five symmetrical discovery questions is the wrong primitive for a battlecard. The single biggest cross-tool failure is the recurring "4% accuracy guarantee" fabrication that appears in 4 of 7 tools — this is a profile-hallucination problem, not seven independent bugs.

### Tool overlap findings
- **cold-hook Touch 1 ≈ deal-reviver Touch 1.** Both produce a 3-paragraph email anchored to a recent context-shift, with a low-friction ask, avoiding "circle back" language. **Recommendation: keep both, but force divergence in the engine prompt.** Cold-hook = first impression, no shared history; Deal-reviver Touch 1 = MUST reference the prior conversation explicitly. Right now neither output asserts shared history.
- **follow-up-forward email ≈ deal-reviver Touch 1 when the deal hasn't gone fully cold.** A rep with 5-day silence after a good call could plausibly run either tool. **Recommendation: rescope follow-up-forward as "post-call (within 48h)" and deal-reviver as "post-silence (>1 week)."** Make the temporal scope explicit in the tool descriptions and inputs.
- **objection-defuser ≈ competitor-battlecard when the objection is "we're already on Salesforce."** Both produce coaching about how to handle a competitor-anchored prospect. **Recommendation: merge competitor-battlecard's strongest mode (the "drop subtle doubts" stance) into objection-defuser as a competitor-objection variant. Cut competitor-battlecard's other three stances or repackage the tool entirely as "Discovery Questions vs [Competitor]."**
- **pre-call-recon openers ≈ cold-hook hook.** When a rep is doing first-call outreach (the openers in pre-call-recon are functionally cold-call openers), the output overlaps with cold-hook's DM/email opener. **Recommendation: pre-call-recon stays as-is (it has the research-protocol differentiator); cold-hook should explicitly declare itself as written-channel only (no live-call openers).**

### Naming pass
| Current | Recommended | Rationale |
|---|---|---|
| Pre-Call Recon Brief | keep | Clearest in suite |
| Objection Defuser | keep | Evocative, accurate |
| Competitor Battlecard | **Discovery Questions vs Competitor** | Current name promises battlecard energy, delivers discovery worksheet |
| Cold Hook | keep | Evocative, accurate |
| Follow-Up Forward | **Post-Call Wrap** or **Forward-Ready Recap** | Current name is opaque; recap is the differentiated asset |
| Deal Reviver | keep | Evocative, accurate |
| CFO Pitch | **CFO-Forward Brief** | Current name implies rep is pitching; actually the champion is |

### Input vocabulary glossary
The current arsenal has 4 different names for "the prospect's company" and 3 different names for "the prospect person." Recommended canonical vocabulary:

| Concept | Current names | Canonical | Tools to update |
|---|---|---|---|
| Prospect's company | `targetCompany` (recon), `prospectCompany` (deal-reviver, conflated with name) | **`prospectCompany`** | deal-reviver (split from name) |
| Prospect person | `targetPersona` (recon), `prospectName` (cold-hook) | **`prospectName`** (always include role) | recon |
| Seller's product | implicit / not exposed | **profile fact, no input** | n/a |
| Trigger event | `triggerEvent` | **keep** | — |
| Stated objection | `statedObjection` | **keep** | — |
| Rep's counter / edge | `productValue` (defuser), `ourAdvantage` (battlecard) | **`yourEdge`** | both |
| Call notes | `callNotes` | **keep** | — |
| Biggest takeaway from call | `biggestAha` | **keep** | — |
| Why deal stalled | `wentCold` | **keep** | — |
| Pain point (CFO context) | `painPoint` | **keep** | — |
| Annual cost (CFO context) | `annualCost` | **keep** | — |

### Slider audit

| Tool | Sliders | Verdict |
|---|---|---|
| pre-call-recon | call-objective, prospect-posture | **Both keep** — meaningful divergence at extremes |
| objection-defuser | response-posture, next-step-aggression | Keep next-step-aggression. **Reduce response-posture from 4 to 3 options** (collapse Empathize and Probe). |
| competitor-battlecard | competitive-stance, conversation-stage | **Cut competitive-stance** — slider invariance demonstrated. Keep conversation-stage. |
| cold-hook | outreach-channel, value-angle | **Reword outreach-channel** (mixes channel + tone). **Reduce value-angle from 4 to 3** (collapse Save Time and Cut Cost). |
| follow-up-forward | buying-role, call-mood | **Both keep** — both move output meaningfully. |
| deal-reviver | silence-duration, revival-angle | Keep silence-duration. **Cut "Outside Resource" from revival-angle** — unclear, produces mushy output. |
| cfo-pitch | financial-case, reader-audience | **Both keep** — best slider design in the suite. **Reduce reader-audience from 4 to 3** (cut Procurement or move out). |

Net: 6 sliders cut/reworded, 8 sliders kept. Of the 14 currently shipping, ~half are doing real work.

### The single highest-leverage change
**Fix the profile-hallucination problem — specifically, the recurring "4% accuracy guarantee" and "~14 sq ft" fabrications.** The 4% appears in cold-hook, follow-up-forward, deal-reviver, and cfo-pitch outputs. The 14 sq ft appears in cold-hook, deal-reviver, and objection-defuser. These aren't seven different bugs — they're one bug: the engine is treating profile-derived heuristics ("Velara has an SLA," "XR-Series replaces 4 pieces of equipment") and concretizing them into invented precision ("4% SLA," "14 sq ft"). Whatever your profile-injection mechanism is, audit it: either (a) the profile literally contains these numbers and the prompt should NOT include them as facts unless the rep's input mentions them, or (b) the engine is hallucinating them from pattern-matching, in which case the STANDARD RULES block needs a tool-level injection that names these specific numbers as forbidden unless input-supplied. Fixing this single failure mode raises the ceiling of every Pro-tier tool — because right now any rep who pastes a generated prompt and gets back content with a fabricated 4% SLA is one customer-call-away from looking dishonest.

### Mission-drift score per tool (1–5, 5 = perfectly on-mission)

- **pre-call-recon: 5.** Writes a brief, not the call. Voice clean. Research protocol differentiated. Drift only in the boilerplate-to-bespoke ratio.
- **objection-defuser: 3.** STRUCTURE blocks creep toward dictating dialogue order ("lead with X, then pivot to Y") which is closer to scripting than railing. Profile-fact fabrication ("NSF-certified") is on-mission failure.
- **competitor-battlecard: 2.** Five-question structure is the wrong primitive; outputs are interchangeable across competitors and stages; sliders aren't earning their place.
- **cold-hook: 2.** Two outputs (Lila, Tomas) violate first-person voice rule outright. RICH case fabricates 4% SLA. Most tool-overlap exposure.
- **follow-up-forward: 4.** Forward-ready recap concept is genuinely differentiated and well-executed. 4% fabrication leaks in. Profile leakage of 50% holdback into Anna case is concerning.
- **deal-reviver: 3.** Touch 1 overlaps with cold-hook. Voicemail rules are template, not coaching. "Cold revival specialist" self-titling is awkward voice-drift.
- **cfo-pitch: 4.** Champion-voice rules are the most disciplined in the suite. Behavioral-observation guidance is the strongest single block in any tool. One 4% leak. Procurement reader-audience is misfit.

### Tier signal
**Pro does not currently feel meaningfully more valuable than Core.** Pre-call-recon (Core) is the strongest tool in the suite. The Pro tools that genuinely earn the upgrade are follow-up-forward and cfo-pitch — the rest are either overlapping (cold-hook ≈ deal-reviver Touch 1), structurally weak (competitor-battlecard), or could-have-been-written-by-the-rep (objection-defuser at Pro tier feels like Core energy).

**What would fix the tier signal:**
1. **Move follow-up-forward and cfo-pitch into a clearly-marked "champion-enabling" sub-suite** — these are the tools that produce artifacts the rep gives to the prospect, which is a structurally different value than tools that produce things only the rep sees. Make that distinction the Pro pitch.
2. **Cut or merge competitor-battlecard.** A weak Pro tool drags the perceived value of the whole tier.
3. **Rescope cold-hook and deal-reviver so they don't compete with each other** — temporal scope (first contact vs >1 week silent) should be the wedge.
4. **Add a Pro-only tool that Core conspicuously cannot do** — e.g., a "champion enablement plan" that produces the 3-touch internal advocacy sequence the champion uses inside their own org. That is currently nowhere in the suite, and it's the highest-value thing a sales rep loses sleep over.

The Pro tier currently feels like "more of the same as Core, with sliders." Reps will pay for a different *category* of help, not for more cards in the same category.