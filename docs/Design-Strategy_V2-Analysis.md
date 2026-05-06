# Critical Analysis — Gemini Deep Research Design Strategy V2

**Subject:** Evaluation of `PromptStarter.ai Product Design Deep Dive.md` (Gemini V2) against current code, AGENTS.md rules, and external best-practice considerations. Includes proposed AGENTS.md amendments where the research surfaces patterns worth codifying.

**Bottom line up front.** The V2 report is significantly better than V1 — it engages with the category-creation problem head-on, makes the right structural call on pricing (three columns over a toggle), and produces several genuinely shippable specifications: the sticky bottom action row on mobile, the horizontal snap carousel for pricing, the bind-to-onCopy timing change for the upgrade trigger, and the skeleton-plus-progress-log treatment for the researching state. Three problems are serious and need surfacing before any of it ships. First, **Gemini fabricates metrics and testimonials freely** — "Used by 4,120 reps this week," "84% of Pro users deploy this combo," named-AE quotes about specific dollar amounts ("Brought back a $120k ARR deal"). None of that is real data. The fallback for the trust strip explicitly recommends "randomized client-side incrementation to simulate real-time global usage," which is straight-up deceptive. Treat every number and every named quote in the report as a placeholder, not a recommendation. Second, **the hero headline privileges ChatGPT** over Claude and Gemini, which contradicts the product itself — `src/lib/downstream-ai.ts` ships all three and `settings/page.tsx` lets users pick a default. Third, **the tactical/military vocabulary doubles down to a degree that risks alienating top-of-funnel visitors**. "Deploy Engine →" is the recommended primary CTA in *six different locations*; for a buyer who is encountering the product for the first time, "Deploy" reads as backend infrastructure, not a free signup. The brand voice is genuinely strong at low doses; this version is too dense. Specific recommendations follow.

---

## Cross-cutting concerns

These three issues recur throughout the report and need to be addressed regardless of which sections we ship.

**Fabricated metrics and testimonials must be treated as placeholders.** The report contains at least nine distinct invented data points — bento-grid testimonials with specific dollar amounts and persona attributions, "4,120 reps this week," "84% of Pro users," "Doubled my cold email response rate," "Saved me 4 hours of 10-K reading." None of these reflect actual customer data. Two specific recommendations are worse than placeholders, they are *deceptive patterns*: the fallback trust-strip variant proposes "randomized client-side incrementation" to simulate global prompt counts in real time, and the researching-state log lines are described as "draft text strings" injected sequentially regardless of what the engine is actually doing. Both of those need to be dropped. If we want to display a prompt-count metric, it should be a real server-fed number; if we want to display research progress, it should reflect real backend events emitted from the Tavily/Anthropic pipeline. Anything else is fraud-adjacent and will erode trust if a customer ever notices.

**The hero copy presents a single-AI worldview.** The headline "Feed ChatGPT the Strategy. Win the Deal." names one downstream AI. The subhead names two ("ChatGPT or Claude"). The trust strip lists four ("ChatGPT, Claude, Gemini, Copilot"). The product itself ships exactly three (`DOWNSTREAM_AIS` in `downstream-ai.ts` = ChatGPT, Claude, Gemini). The hero needs to be AI-agnostic — something like "Feed Your AI the Strategy" or "Engineer the Prompt. Your AI Closes the Deal." — and the trust strip should drop Copilot (we don't support it) unless we add Copilot as a fourth option. Naming ChatGPT alone in the most-read line of the entire site is also a positioning risk: it implies the product is a ChatGPT accessory, which is exactly the "Generic AI Wrapper" failure mode Gemini itself warns against in A.8.

**Tactical vocabulary needs a gradient, not uniform density.** The report uses "Deploy Engine →" or "Equip Your Arsenal →" or "Upgrade Arsenal →" or "Stop Writing. Start Selling. →" in essentially every CTA slot. The cumulative effect is theme-park military, which may delight some buyers and turn off many. Industry research on B2B copy generally finds that top-of-funnel visitors respond to outcome-and-mechanism-first language ("How it works," "What you get"), and tactical specificity earns its keep mid-funnel and in-product where the buyer has already opted in. The brand voice should follow the same gradient: top-of-funnel = accessible-tactical (one or two military touches, not five); mid-funnel and pricing = tactical-light; in-product = full tactical. Specifically, "Deploy Engine →" reads as a release-engineering action rather than a sign-up — strongly recommend replacing the sticky-header and hero CTA with something that names the actual user benefit ("Build Your First Prompt →" already does this in the hero variant — promote it to be the only primary CTA copy; reserve "Deploy" / "Arsenal" language for second-tier and in-product surfaces).

---

## Section A: Public Landing Page

### A.1 Hero

**Ship:** the structural recommendation (split layout desktop, vertical stack mobile, three-step animation loop showing input → master prompt → simulated paste into a downstream wireframe). The animation idea is the strongest part of the report — it solves the category-creation problem more directly than copy ever could.

**Modify:** the headline. "Feed ChatGPT the Strategy. Win the Deal." names ChatGPT only. Replace with an AI-agnostic variant. Three candidates, ranked: (1) **"Engineer the Prompt. Your AI Closes the Deal."** — names the mechanism, names the outcome, AI-agnostic, parallels the product's actual three-actor model; (2) **"The Prompt is the Product. Your AI Does the Rest."** — punchier, more category-creation-forward, works as a tagline; (3) **"Feed Your AI the Strategy. Win the Deal."** — closest to Gemini's draft, fixes only the AI-naming issue. The subhead should also drop the assumption that ChatGPT is the default; preferred phrasing: "Enter your target account and objection. We generate the master prompt. Paste it into ChatGPT, Claude, or Gemini and your AI writes the CFO-ready business case."

**Modify:** the primary CTA. "Deploy Engine →" reads as backend ops. "Build Your First Prompt →" (Gemini's own hero alternative) is clearer and on-mechanism. Promote it.

**Discard:** the visual treatment specifics around `font-size: 72px` with `tracking: -0.04em`. This is a typographic call that needs to be made against the real wordmark and the real screen at responsive breakpoints, not specified in advance. Keep the principle (Geist Sans, large, tight tracking); discard the absolute pixel numbers.

### A.2 Trust Strip

**Modify with caution:** the destination-AI-logo strip is a good idea conceptually but carries real trademark and positioning risk. Anthropic's brand guidelines, OpenAI's brand guidelines, and Google's Gemini guidelines all restrict the use of their marks in ways that imply endorsement or affiliation. "Engineered to command:" followed by their logos could be read by any of those companies' legal teams as implying an integration or partnership we don't have. Two safer paths: (a) skip the logos and use lowercase text mentions ("Works with ChatGPT, Claude, and Gemini") inside a thin trust strip, which falls under nominative fair use; (b) display the logos but use neutral copy ("Compatible with") that does not imply endorsement, and consult the actual brand guidelines before shipping. Either way, drop Copilot — the product does not support it.

**Discard outright:** the fallback variant — "WebSocket connection or randomized client-side incrementation to simulate real-time global usage" — is a deceptive pattern. If we display a count, it must be a real server-fed number. Until we have one large enough to publish, the trust strip should rely on the compatibility statement, not a fake counter.

### A.3 Bento Grid

**Ship:** the grid concept itself, the principle of one-line outcome plus persona-anchored social proof per cell, and the mobile accordion-collapse strategy.

**Modify:** the cell-size hierarchy. Gemini recommends Pre-Call Recon and CFO Pitch as the largest cells. **Do not give Pre-Call Recon the marquee cell** — it is the only Free tool, and giving it the visual hierarchy of the headline tool teaches visitors that the free version is the product. The largest cells should be the Pro tools that carry the most narrative weight: CFO Pitch (the unique champion-voice fourth-actor capability nobody else does), Follow-Up Forward (forward-ready recap is highly distinctive), and Objection Defuser (the most universally relatable rep pain point). Pre-Call Recon should be a medium cell with a "Free" chip on it — present in the lineup, not headlining it.

**Discard:** every quote and every dollar amount. "Saved me 4 hours of 10-K reading. — Enterprise AE," "Doubled my cold email response rate. — Outbound SDR," "Brought back a $120k ARR deal. — Commercial AE," etc. These are fabricated. Until real testimonials exist, the social-proof slot in each cell should be either empty (the cell stands on the outcome line and the animation alone) or a generic capability hook ("For AEs preparing first-call discovery"). A real testimonial with a real name and a real number is a 10x conversion lever; a fake one is a trust bomb.

### A.4 Pricing

**Ship:** three-column over toggle. Gemini's reasoning here is the strongest in the report — toggles hide the anchor, three columns let the brain compute the delta automatically. This matches our existing in-app `/upgrade` and is the right call.

**Note:** the in-app `/upgrade` currently labels the free tier "Free" while the rest of the codebase (memory rule on tier names, `tools.ts`, API contracts) uses `core`. Gemini's V2 draft labels the column "Core" — which is more consistent with our internal vocabulary. Recommend renaming the column header to "Core" on both the public landing page and the in-app upgrade page to align all surfaces with the tier name.

**Modify:** subhead copy. "Recon Only. Test the engine." for Core uses *Recon* as a category label when it's a specific tool name — same critique we applied to V1 CTA copy. Replace with "Pre-Call Recon Brief only. Try the engine free." "The unfair advantage, year-round" for Pro Annual is a touch corny; replace with "Best value. Save $149 on annual." which keeps the math front and center.

### A.5 Money-Back Guarantee

**Ship:** the dual placement (slim banner under pricing + pre-footer). The "fewer than 16 prompts" framing is unusual and needs both surfaces to land.

**Modify:** the banner copy. "Risk-Free Arsenal" is an arsenal too far. Drop the brand vocab here — guarantee copy should read like a contract, not a CTA. Recommended: "Money-back guarantee. Get a full refund if you generate fewer than 16 master prompts. No time limit. If you don't use it, you don't pay." The literal phrase "money-back guarantee" is the most-searched and most-trusted version of this concept; tactical reframing actively reduces its conversion power.

### A.6 CTA Strategy

**Ship:** the principle of varying CTA copy by location and the implementation detail (separate `<span>` for the arrow, 4px translate on hover with cubic-bezier easing). The directional arrow as a separate animatable element is genuinely good craft.

**Modify:** the actual copy in five of the six slots. Recommendations:

| Location | Recommended | Why |
|---|---|---|
| Sticky Header | **Build Your First Prompt →** | Mechanism-first, no jargon |
| Hero | **Build Your First Prompt →** | Same; cognitive consistency between header and hero |
| Post-Bento | **See All Seven Tools →** | Speaks to the breadth implied by the grid |
| Pricing (Core) | **Start Free** | Keep — already good |
| Pricing (Pro) | **Get Pro Annual →** | Direct, names the column the user is converting on |
| Pre-Footer | **Stop Writing. Start Selling. →** | Keep — this one earns its drama |

The "Arsenal" / "Deploy" vocabulary survives in the in-product surfaces (login, top bar, tool nav) where the user has already converted. On the public landing page, accessible wins.

### A.7 Navigation and Page Structure

**Ship:** the top-to-bottom section order, the sticky header structure (logo + 4 items), the routing logic (CTA → `/login`, no marketing-form lead capture). All correct.

**Modify:** the sticky header label "The Arsenal." This is the link that takes visitors to a section that lists all tools. "Tools" or "What it does" is more legible. "The Arsenal" requires the visitor to already understand the brand voice they don't yet have.

**Note:** this section confirms a meaningful product decision — the public landing page primary CTA does not pre-qualify or capture a lead before authentication. That's correct for our positioning (high-intent ICs, not enterprise sales motion). Worth codifying in AGENTS.md.

### A.8 Three Failure Modes to Avoid

**Ship all three.** The Generic AI Wrapper, Cockpit Dashboard, and Blank Canvas failure modes are well-articulated and worth pasting into our internal design checklist. The Blank Canvas point in particular — that all marketing imagery must show inputs *already populated* with hyper-specific sales data — is a high-leverage rule that should govern every screenshot, animation, and bento cell we produce. Codify this.

---

## Section B: First-Time User Experience Inside Direct-to-Tool

### B.1 Session Count Thresholds

**Ship:** the three-tier session model (Session 1 = max orientation, Session 2 = silent reinforcement, Session 3+ = power user). The reasoning is sound and the boundaries are reasonable.

**Add (Gemini didn't specify):** how we count a session. Recommend tying it to **distinct calendar days the user has logged in**, not raw page-loads or generations. A user who reloads the page 12 times in their first hour should still see Session 1 UI; a user returning the next morning should see Session 2. Implementation: a `last_session_day` and `session_count` columns on the user record, advanced server-side when the day differs. Avoid making this purely client-side — it would reset on cleared localStorage, breaking the threshold semantics for any user who switches browsers.

### B.2 Welcome Treatment

**Ship the recommendation:** transient pinned overlay card on the top-right of the ControlPanel, dismissible in one click.

**Modify the copy:** "Arsenal loaded: Pre-Call Recon. Enter an account to engineer your first master prompt." The "Arsenal loaded" framing is heavy for a first-time user who hasn't yet been acculturated to the brand voice. Recommended: "**Welcome. Enter a target account below to engineer your first master prompt — then check the left rail for six more tools.**" This single sentence accomplishes three things simultaneously: orients the user to the immediate action, communicates that other tools exist, and primes them to expand the rail later. It also avoids requiring the user to know what "Arsenal" means.

### B.3 Rail Orientation for New Users

**Ship:** auto-expand the rail to 60px wide for sessions 1–2.

**Add:** explicit conflict-resolution with the existing `RAIL_PIN_KEY` localStorage value in `app-rail.tsx`. If a returning user has explicitly pinned the rail expanded, that preference must beat any session-count default. Logic: `expanded = userExplicitlyPinned ?? (sessionCount <= 2)`. Document this so the next person who touches `app-rail.tsx` doesn't trip over it.

### B.4 First-Prompt Coaching Moment

**Ship in full.** The contextual tooltip pointing at the Copy button after the first successful generation, with the FF3300 background to break the dark aesthetic, the bounce keyframe to draw the eye, and the localStorage flag (`hasCopiedFirstPrompt`) to permanently retire the tooltip on first copy — all of this is excellent.

**Modify the copy:** "Prompt engineered. Click Copy, then paste this exactly as-is into ChatGPT or Claude to get your final deliverable." Two tweaks. (1) Add Gemini to the listed AIs to match `downstream-ai.ts`. (2) Soften the "exactly as-is" instruction — at this moment, with a Copy button present, the user already understands they are copying a thing. Recommended: "**Prompt engineered. Click Copy, then paste it into ChatGPT, Claude, or Gemini — your AI writes the deliverable.**" This is also a good place to leverage the Settings preferred-AI: if the user has selected one in `getPreferredAI()`, name only that one ("paste it into ChatGPT — your AI writes the deliverable") for tighter coaching.

**Add:** the tooltip must not appear if the user is restoring a generation from history (the `?restore=` flow in `(app)/page.tsx`). The "first generation" flag should fire on first-completed-via-Generate-button, not first-output-shown.

### B.5 Empty / Researching State

**Ship the structural pattern:** skeleton + progress log replacing the static blank ControlPanel during the 30–90s Tavily/Anthropic profile-research window. This is significantly better than current behavior.

**Reject the implementation detail:** Gemini's recommendation to "inject draft text strings sequentially" with hardcoded timestamps regardless of what the engine is actually doing. That's the same fabrication pattern flagged in the cross-cutting concerns. The progress log must reflect **real backend events**, which means the research pipeline needs to emit them — Tavily search complete, ICP extraction complete, profile XML compiled, etc. — and the UI subscribes to those events (server-sent events, polling, or a Supabase Realtime channel against the profile row's status column). If we can't build the real event stream in the time available, the better fallback is a skeleton with a single "Researching your product profile — this takes ~60 seconds" status line, not faked log lines.

**Note:** this recommendation borders on a conflict with the AGENTS.md anti-pattern "multi-minute onboarding terminals." The intent of that rule is to prevent gating the first tool use behind extensive setup. A 30–90s research wait is genuinely shorter and is unblocked work (the engine is doing something useful in the background); a sophisticated waiting state is not the same thing as an onboarding terminal. I read this as compatible with AGENTS.md, but worth surfacing the question.

---

## Section C: Per-Tool Upgrade Trigger Copy

### C.1 Timing change — bind to onCopy

**Ship.** This is the single highest-leverage insight in the report. The user has not realized value at `onGenerate` — they have realized it at `onCopy`. Currently `upgrade-trigger.tsx` renders based on `hasOutput`, which fires on generation. The change is structural: lift the trigger logic into `terminal-output.tsx`'s copy handler, or pass a `hasCopied` boolean from `(app)/page.tsx` down to `UpgradeTrigger`. The conversion difference between "shown immediately after a 4-second generation" and "shown immediately after the user has actually committed to using the output" should be measurable.

### C.2 Suppress on session 1

**Ship.** Gemini's argument — that interrupting the first-session learning loop with an upgrade nudge poisons the moment — is correct. Feed the same `sessionCount` from B.1 into the trigger logic; render only when `sessionCount >= 2`.

### C.3 Copy rewrites

**Reject all three rewrites in their current form.** Every rewrite contains a fabricated metric: "Used by 4,120 reps this week," "84% of Pro users deploy this combo," "Used by [some N] reps this week." We do not have those numbers. If/when we do, paste them in. Until then, recommended rewrites that preserve Gemini's structural improvements (acknowledge success → chronological transition → explicit next-step) without inventing data:

| Tool | Recommended copy |
|---|---|
| pre-call-recon (Core nudge) | "Call prepped. When you hang up, the Follow-Up Forward writes the recap your prospect needs to sell their CFO. **[Unlock Pro →]**" |
| objection-defuser (locked Pro nudge) | "If they go quiet after this, the Deal Reviver builds the 3-touch sequence to bring them back. **[Upgrade to Pro →]**" |
| cold-hook (locked Pro nudge) | "Hooks open conversations. Sequences close them. The Deal Reviver writes the next 3 touches for this exact prospect. **[Upgrade to Pro →]**" |

Two structural improvements from Gemini I am keeping: (1) the "acknowledge what they just did" opener ("Call prepped"); (2) the chronological transition language ("When you hang up," "If they go quiet"). Both are conversion gold and worth preserving without the fake metrics.

### C.4 Visual treatment

**Modify.** Gemini recommends a brief Success-green flash on render before fading to FF3300. This is overdesigned — adds animation cost for a marginal benefit and risks reading as a "saved" toast for users who were not the focus when it appeared. Keep the existing FF3300 left border and surface; the timing change (onCopy) and the copy improvements are doing the real work.

---

## Section D: Mobile

### D.1 Bento accordion

**Ship.** Linearizing to a vertical stack with collapsed cells revealing on tap is the standard pattern and is right for this content density.

### D.2 Sticky bottom action row

**Ship.** This is a real bug fix dressed as a design recommendation. The current `control-panel.tsx` action row sits inside a Card; on mobile, when the user opens the Add-Context textarea, the keyboard shoves the Generate button off-screen. Gemini's solution (`position: fixed`, `bottom: 0`, full-width, backdrop-blur) is industry-standard for forms-with-keyboards and should be implemented. Implementation note: respect `env(safe-area-inset-bottom)` so it doesn't sit under the iOS home indicator.

### D.3 Pricing snap carousel

**Ship.** The horizontal snap carousel auto-scrolled to the Pro Annual card on mount is a clever fix to the vertical-stacking-destroys-the-anchor problem. One implementation note: the snap carousel should be mobile-only (≤640px); on tablet/desktop the three-column grid is correct. Use a CSS media query, not a `useEffect`, to flip behavior — a useEffect-based mode switch causes layout flash on slow connections.

---

## Rule conflicts with AGENTS.md

**1. Tactical/military vocabulary — AGENTS.md silent, codebase loud, V2 doubles down.**
*Status.* Not a hard conflict — AGENTS.md doesn't mandate the vocabulary, but every UI surface uses it. V2 amplifies it. External research suggests B2B top-of-funnel buyers respond best to mechanism-and-outcome language, with tactical specificity earning its keep mid-funnel.
*Recommendation.* Codify the gradient explicitly. Public landing page = accessible-tactical (one or two touches, never more). Pricing = tactical-light. In-product = full tactical. Add to AGENTS.md.

**2. Onboarding velocity — AGENTS.md anti-pattern says "no multi-minute onboarding terminals." V2 proposes a 30–90s research-wait state with a status log.**
*Status.* Not a conflict in spirit. The AGENTS.md rule is about not gating first tool use behind extensive setup. A research-wait state with engaging progress visualization is a different category — the engine is doing genuinely useful work, the user is unblocked the moment it completes, and a sophisticated skeleton is the modern standard.
*Recommendation.* Refine the AGENTS.md rule to clarify the distinction: "no manual onboarding gates that delay first tool use" is the actual intent, not "no waiting states ever." Keep the sub-90-second cap.

**3. Direct-to-tool architecture — currently implicit, V2 confirms it should remain.**
*Status.* No conflict; codification opportunity. Currently `(app)/page.tsx` is direct-to-tool by virtue of how it's coded, not because of an explicit rule. AGENTS.md does not mention it. Multiple Gemini passes have probed it; both times the team's answer is to keep direct-to-tool and refine the first-time-user UI inside it.
*Recommendation.* Add an explicit AGENTS.md rule. "Logged-in entry is direct-to-tool. No Launchpad, no analytics dashboard, no welcome screen as a separate route." This will save future agents from re-litigating the question.

**4. Marketing copy honesty — AGENTS.md has a no-unsourced-numbers rule for engine output. V2 freely fabricates metrics for landing page and upgrade triggers.**
*Status.* The AGENTS.md rule applies to the engine's master prompt (via `STANDARD RULES`). It does not currently extend to marketing copy. V2's behavior demonstrates why this needs codification.
*Recommendation.* Add an AGENTS.md rule: marketing and UI copy are subject to the same no-unsourced-numbers and no-fabricated-testimonials standard as engine output. Specifically prohibit simulated real-time metrics (the random-incrementation trust strip), invented testimonials with attributed personas, and fake progress logs.

**5. Downstream-AI agnosticism — codebase explicitly supports ChatGPT, Claude, and Gemini equally; V2 hero copy privileges ChatGPT.**
*Status.* The settings page (`settings/page.tsx`) explicitly lets users pick a default; `downstream-ai.ts` ships all three. V2 violates this in marketing copy.
*Recommendation.* Add an AGENTS.md rule: top-of-funnel marketing copy must accommodate all supported downstream AIs as a class. In-product copy may name a specific AI when the user has set a preferred one (B.4 contextual coaching is a good example).

**6. Upgrade trigger architecture — memory rule already exists, V2's recommendations honor it.**
*Status.* No conflict. The memory rule "Upgrade triggers: separate UI component only" is fully respected by V2's suggestion to bind to onCopy and modify timing/copy — all of which lives inside `upgrade-trigger.tsx` and its callers, not in the master prompt body or templated tail.

---

## Proposed AGENTS.md amendments

The current AGENTS.md is scoped almost entirely to engine and prompt-construction rules. The work in V1 + V2 has surfaced several UI/marketing/architecture conventions worth codifying so they survive future agent passes. Below is a draft set of additions, organized as new sections that can be appended to the existing file. Each is justified by either current code, the V1/V2 research, or external best-practice grounding.

### Proposed new section: "App architecture — direct-to-tool"

> **Logged-in entry is direct-to-tool.** Authenticated users land in `(app)/page.tsx`, which renders the active tool's ControlPanel directly. There is no Launchpad, no analytics dashboard, and no welcome screen as a separate route. Tool discovery is handled by the AppRail (collapsed by default; expanded on hover or pin; auto-expanded for sessions 1–2 of new users). Do not propose a Launchpad or dashboard pattern; that path has been considered and rejected on the grounds that with seven tools and a fully-categorized rail, the discovery problem dashboards solve does not exist for this product.
>
> **First-session UI is gated by server-tracked session count, not localStorage.** Session 1 = max orientation (welcome card, expanded rail, first-prompt coaching armed). Session 2 = silent reinforcement (rail still expanded, welcome card retired). Session 3+ = power user (all first-time UI suppressed unless the user has explicit overrides via pin). Session count advances on distinct calendar days, not page-loads.

### Proposed new section: "Brand voice gradient"

> **Tactical vocabulary is in-product, accessible at the top of funnel.** The product uses tactical/military framing (Command Center, Arsenal, Recon, Defuser, etc.) deliberately. That voice belongs *inside* the product where the user has already opted in. On the public landing page, copy must lead with mechanism and outcome — what the product does, how it works, what the user gets — and limit tactical touches to one or two per page. Pricing pages are tactical-light. In-product surfaces (TopBar, AppRail, tool names, locked-tool nudges, success states) use full tactical voice.
>
> Specifically: do not put `Deploy`, `Arsenal`, `Recon`, `Defuser`, or other tool/military words in the primary public landing page CTAs. Mechanism-first CTAs ("Build Your First Prompt", "Start Free", "See How It Works") perform better at the top of funnel.

### Proposed new section: "Marketing and UI copy honesty"

> **The no-unsourced-numbers rule applies to marketing copy as well as engine output.** Do not display fabricated metrics ("Used by 4,000 reps this week"), fabricated testimonials, fabricated dollar amounts, or simulated real-time counters. Fake counts driven by client-side incrementation are explicitly prohibited.
>
> If a metric is displayed, it must be a real server-fed number from the database. If a testimonial is displayed, it must be a real customer quote with a real attribution we have permission to use. If progress is displayed (e.g., the profile-research waiting state), the steps must reflect real backend events emitted by the actual pipeline — not draft text injected on a timer.
>
> Placeholder copy in templates must be flagged with a `// PLACEHOLDER:` comment so it is never accidentally shipped. The pre-launch checklist in `tools.ts` for Pro `sampleOutput` strings is the existing model for this.

### Proposed new section: "Downstream-AI agnosticism in copy"

> **The product supports ChatGPT, Claude, and Gemini equally.** `src/lib/downstream-ai.ts` is the source of truth; `settings/page.tsx` lets users pick a default. Top-of-funnel marketing copy must accommodate all three as a class — phrases like "your AI" or "ChatGPT, Claude, or Gemini" — never naming one in the headline or hero subhead.
>
> In-product copy may name a specific AI when the user has expressed a preference via `getPreferredAI()`. Contextual coaching ("paste it into ChatGPT — your AI writes the deliverable") earns precision by personalizing to the user's selected default; absent a preference, fall back to the agnostic phrasing.

### Proposed refinement to existing anti-pattern list

The current AGENTS.md says:

> Anti-patterns. Exhaustive research, heavy form-filling, multi-minute onboarding terminals, generic fill-in-the-blanks prompt templates.

Recommend refining to:

> Anti-patterns. Exhaustive research, heavy form-filling, manual onboarding gates that delay first tool use, generic fill-in-the-blanks prompt templates, fabricated metrics or testimonials in any UI surface.
>
> *Note.* "Manual onboarding gates" is the precise concern, not "any waiting state." A 30–90s background-research progress visualization with a real backend event stream is acceptable and recommended. The prohibited pattern is anything that requires the user to fill in or click through a multi-step setup wizard before reaching a working tool.

### Proposed addition to existing "Adding a new tool" checklist

When adding a new Pro tool that should appear in `upgrade-trigger.tsx` per-tool nudges, the nudge copy must:
- Acknowledge what the user just did ("Call prepped", "Hook generated", etc.)
- Use a chronological transition to the next moment ("When you hang up", "If they go quiet")
- Name the upgrade tool by its product name (not just the category)
- Not contain any usage metrics, percentages, or counts unless those are dynamically fed from real data

---

## Summary of what I'd ship vs. what I'd discard

**Ship (high confidence):**
- Hero animation pattern (input → master prompt → downstream AI wireframe)
- Three-column pricing layout, "Best Value" Pro Annual anchor (already ours; affirm)
- "Core" column rename to align all surfaces with internal tier vocabulary
- Money-back guarantee in two placements (under pricing, in pre-footer)
- Three failure modes (Generic AI Wrapper, Cockpit Dashboard, Blank Canvas) as design checklist
- Session 1 = max orientation, Session 2 = silent reinforcement, Session 3+ = power user
- Auto-expand rail for sessions 1–2 (with pin-preference override)
- First-prompt onCopy coaching tooltip (with reworded copy and history-restore exclusion)
- Skeleton + real-event-driven progress log for the researching state
- Bind upgrade trigger to onCopy (not onGenerate); suppress on session 1
- Mobile sticky bottom action row
- Mobile bento accordion
- Mobile pricing snap carousel auto-scrolled to Pro Annual

**Ship after rewriting:**
- Hero headline (AI-agnostic; replace "Feed ChatGPT…")
- All CTAs (replace "Deploy Engine"; gradient brand voice)
- Welcome card copy (drop "Arsenal loaded")
- Money-back banner copy (drop "Risk-Free Arsenal"; use "Money-back guarantee")
- Per-tool upgrade trigger copy (preserve structure; remove fabricated metrics)
- First-prompt coaching copy (include Gemini; personalize to preferred AI when set)

**Discard outright:**
- Every fabricated testimonial, dollar amount, and persona quote in the bento grid
- The trust strip's "Engineered to command:" framing if logos are used (trademark risk)
- The fallback variant proposing simulated real-time prompt counts
- Fake injected log lines for the researching state — replace with real backend events
- "Deploy Engine" as primary CTA copy in any location
- Pre-Call Recon as the marquee bento cell — demote to medium with a Free chip
- Copilot in the trust strip (we don't support it)

**Open questions for the team:**
- Are we comfortable adopting the AGENTS.md amendments above, or scope-limit AGENTS.md to engine rules and put marketing/UI rules in a separate `MARKETING.md` or `UI-CONVENTIONS.md`?
- Do we have engineering bandwidth to wire real backend events for the profile-research progress log, or do we ship a single status line until then?
- Is the "Core" column rename worth doing immediately, or do we hold the existing "Free" label until the next major copy pass?
