# Follow-Up Gemini Deep Research Prompt — V2

The block below is a single self-contained prompt. Copy everything between the triple-backticks into a fresh Gemini Deep Research session.

```
You are acting as a world-class B2B SaaS product designer and UX strategist. Your specialization is high-conversion, high-velocity tools for non-technical operators in competitive professional markets — sales, finance, ops. You have deep working knowledge of 2026 SaaS design conventions, conversion-rate optimization for individual-contributor B2B products, and the design vocabulary of Linear, Superhuman, Vercel, Stripe, and Klue.

This is your second pass on PromptStarter.ai. Your first pass produced general direction across logged-out landing, logged-in dashboard, aesthetic, and design system. This second pass needs to be specific, actionable, and grounded in what already exists. Do not re-research what you covered well — the team has already affirmed those findings (dual-font system with Sans for chrome and Mono for output, elevated-gray dark mode replacing pure black, semantic color split, Linear/Superhuman/Klue as references, peer-AE testimonials over enterprise logos, bento grid for use-case showcase, military/tactical vocabulary kept). Build on that foundation.

PRODUCT IN ONE PARAGRAPH

PromptStarter.ai is a "meta-AI" for sales reps. The deliverable is a prompt, not content. The user fills in two text variables (e.g., a target account, an objection's exact wording) and picks 2–4 segmented-control choices, then clicks Generate. A backend engine (Claude Haiku) composes a master prompt. The user clicks Copy, pastes the master prompt into their own ChatGPT or Claude session, and the downstream AI produces the actual deliverable — a recon brief, an objection response, a discovery-question battlecard, a follow-up email, a CFO-ready business case, etc. Three actors, never to be confused: the Engine (PromptStarter), the Downstream AI (ChatGPT/Claude), and the Rep (the human user). The product's commercial moat is in the prompt engineering itself — role assignment, anchor facts, perspective rules, drill-down probes — not in any content the system generates directly.

This category framing is unique. No competitor positions itself as "the prompt is the product." Most users have to be re-oriented at first contact. A landing page that does not communicate this in three seconds will lose the visitor.

CURRENT PRODUCT STATE — WHAT EXISTS

There are 7 tools, organized into four categories:

  Call Prep        — Pre-Call Recon Brief (Free), Competitor Battlecard (Pro)
  Active Deals     — Objection Defuser (Pro), Follow-Up Forward (Pro), CFO Pitch (Pro)
  Outreach         — Cold Hook (Pro)
  Pipeline         — Deal Reviver (Pro)

Each tool has 2 text-input variables (free text), 2 segmented-control "sliders" (each a 4-step choice), and an optional "Add Context / Prospect Notes" textarea that gets appended to the master prompt. The output is a master prompt the rep copies and pastes into ChatGPT or Claude.

Logged-in app shell:
  - TopBar: brand wordmark + product/company switcher + user-avatar menu (Settings, Manage Profiles, Sign Out). 56px height. Background #070707 with backdrop-blur.
  - AppRail: collapsible left sidebar, 16px collapsed (icon-only) → 60px expanded (icon + label + categories). Hover-to-expand with 150ms delay; pin-to-stay-open. Below the tools list there is a "Recent" generations section (max 5 items, expandable). Pin state persists in localStorage. Uses lucide-react icons (Phone, ShieldCheck, BarChart2, Zap, MessageSquare, RotateCcw, DollarSign).
  - Main content: ControlPanel — single Card with the active tool's title, two text inputs side-by-side, two segmented-control rows, an action row with the Generate CTA and a collapsible Add-Context toggle, and below the card a TerminalOutput component showing the generated master prompt with a copy button. Output is `font-mono`; everything above it is currently `font-mono` but will move to `font-sans` per your prior recommendation.
  - UpgradeTrigger: a slim borderL-2 banner that appears below the Generate flow on Core tools, with a context-aware nudge ("After the call, the Follow-Up Forward writes the follow-up email…") and an "Upgrade to Pro →" link. This is the single highest-conversion surface in the app for Core-to-Pro upgrades.
  - For locked Pro tools (when a Core user clicks one in the rail), the form pre-fills with curated example inputs at 60% opacity and shows two CTAs in the action row: "See a Sample Output" (renders a placeholder demo output) and "Upgrade to Pro →".

Logged-in entry behavior:
  - Auth-gated: every unauthed visitor is redirected to /login. There is currently NO public marketing route.
  - On login, the user lands directly on the active tool (defaults to Pre-Call Recon for first-time users; otherwise restores the last-used tool's form/output from sessionStorage). This is "direct-to-tool" — there is no Launchpad / dashboard / welcome screen.
  - First-time users go through /onboarding to create a product profile (the rep's product, positioning, ICP — researched in the background by Tavily + Anthropic and stored as XML for the engine to inject).

Pricing (live in /upgrade):
  - Free / Core: $0, no credit card. Pre-Call Recon Brief only.
  - Pro Monthly: $29/mo, billed monthly. All 7 tools.
  - Pro Annual: $16/mo billed $199/year (save $149). All 7 tools. "Best Value" chip, FF3300 border, glow shadow — visually anchored.
  - Money-back guarantee: full refund if the user has generated fewer than 16 prompts. Currently surfaced inside /upgrade in a prominent FF3300-tinted block above the pricing columns.

Aesthetic baseline (current):
  - Dark mode only (no light theme). `--background: #0a0a0a`, body uses a radial gradient from `#141414` to `#0a0a0a`.
  - A subtle CSS grid overlay (`grid-bg`) draws 48px lines at `rgba(255, 51, 0, 0.05)` across the whole app — keep this.
  - Brand color `#FF3300` for primary CTAs, active states, focus rings, and box-shadow glows.
  - Typography: Geist Sans (`font-sans`) is the registered global default, Geist Mono (`font-mono`) for the prompt output and code-feel surfaces, Space Grotesk (`font-tech`) for the wordmark only. Currently `font-mono` is overused on UI chrome — that sweep is coming.
  - Glassmorphism: `bg-white/[0.02] backdrop-blur-md` on primary Cards. Will dial back per your prior recommendation.

WHAT YOU AFFIRMED LAST PASS, NO NEED TO REVISIT
  - Sans for chrome, Mono for output and variable tags
  - Pure black is wrong; layered #121212 / #1E1E1E / #2A2A2A elevation
  - Reduce primary text to ~90% opacity for halation/astigmatism mitigation
  - Add semantic Success and Error tokens
  - Bento grid for use-case showcase, hero must show product in action, peer testimonials over enterprise logos
  - Linear / Superhuman / Stripe / Klue / Vercel reference set
  - Tactical vocabulary stays

Two areas need a deeper second pass: the public landing page (which does not yet exist and must be designed from scratch) and the logged-in homepage architecture (where you previously recommended a Launchpad, but the team has decided direct-to-tool stays — you now need to design the *first-time user experience inside* the direct-to-tool screen, not replace it).

WHAT I NEED FROM THIS PASS

A — PUBLIC LANDING PAGE — DESIGN FROM SCRATCH

Treat the landing page as a new build. Audience: solo AEs and SDRs at SMB and mid-market B2B SaaS companies, individual-contributor buyers, time-poor and competitive. They are not searching "AI prompt engineering tool" — they are landing on this page from a peer's recommendation, a Twitter/LinkedIn share, or a sales-tool roundup. They have 8–15 seconds to decide whether to keep reading.

For each section below, give: (1) a specific structural recommendation, (2) draft copy, (3) the visual treatment grounded in the existing design system tokens, and (4) a fallback variant for A/B testing.

A.1  THE CATEGORY-CREATION HERO. PromptStarter generates a prompt that the rep pastes into their own ChatGPT or Claude. Most visitors will not understand this in three seconds without help. Design a hero that communicates the mechanism — generator → paste → downstream AI does the work — without being condescending or making the visitor feel they're reading a tutorial. Specifically address: should the visual be a literal three-step animation (input → master prompt → ChatGPT screen), or a more abstract metaphor? What headline/subhead structure communicates "we generate the prompt, you keep your existing AI" in a single read?

A.2  TRUST STRIP IMMEDIATELY BELOW HERO. We do not yet have customer logos, but we do have a positioning advantage: this is a tool *for* operators, *built by* operators. Recommend what goes here in pre-customer-logo state — for example, a count of generated prompts to date, a chip strip of the AI tools we feed (ChatGPT, Claude, Gemini), an integration trust message, or something else. Rank 3 candidate treatments and pick one.

A.3  USE-CASE BENTO GRID. We have 7 tools across Call Prep / Active Deals / Outreach / Pipeline. Design a bento grid showcase that does not feel like an enterprise feature matrix. Constraints: each cell must include a one-line outcome (not a feature name), a screenshot or short looped animation of the tool's input → output, and one moment of social proof from a target persona. Specify cell sizes, hover behavior, mobile collapse strategy.

A.4  THE PRICING SECTION. Pricing is settled: Free (Recon only) / Pro Monthly $29 / Pro Annual $16/mo billed $199. Three columns is the current shape and works structurally. Design the *visual treatment* for the public landing page version of these three columns. Critical sub-question: should the public page mirror the in-app /upgrade three-column layout exactly, or use a billing toggle (Monthly / Annual) with a single Pro card, with the toggle defaulting to Annual? Recommend one and justify against conversion psychology specifically — recognize that we cannot A/B test our way to the answer because the question is which one maximizes paid signups, not which one maximizes "Get Pro" clicks.

A.5  MONEY-BACK GUARANTEE PLACEMENT. Where does this go on a public landing page? Hero subhead? Inside each Pro card? A pre-footer trust strip? All three? Recommend the optimal placement(s) and the exact framing of the offer. Account for the specific framing constraint: "fewer than 16 prompts generated" is the trigger, not a time-based window — this is unusual and the copy needs to land it cleanly.

A.6  CTA STRATEGY ACROSS THE PAGE. The current login page uses "Access your Arsenal" and "Send Magic Link." For the public landing page, recommend a primary CTA that appears: in the sticky header, in the hero, immediately after the bento grid, immediately after pricing, and in a final pre-footer push. Each instance can use different copy. Constraints: keep tactical voice; do not put the product name inside the CTA; do not use a specific tool name (e.g., "Recon") as if it were the product category. Also recommend the secondary/ghost CTA copy if any.

A.7  NAVIGATION AND PAGE STRUCTURE. Recommend the sticky header contents (logo + what else?) and the full top-to-bottom section order with rationale. We already have /login as the auth route — recommend whether the primary CTA should be "Start Free →" landing on /login or whether it should land on a more aspirational state (e.g., a one-question "What do you sell?" preview that previews a sample prompt before requiring auth).

A.8  THREE FAILURE MODES TO AVOID. Tell us specifically what to *not* do, given our category-creation challenge. For each, name the failure mode, give a brief example of how it would manifest in copy or layout, and the principle for avoiding it.

B — LOGGED-IN HOMEPAGE: FIRST-TIME USER EXPERIENCE INSIDE DIRECT-TO-TOOL

The team is keeping direct-to-tool. A Launchpad is not the answer. But the underlying need — first-time users may not realize the breadth of the platform — is real. Design a first-session enhancement of the direct-to-tool screen that orients a new user without slowing the returning user.

B.1  SESSION COUNT THRESHOLDS. Recommend exact session-count thresholds for showing/hiding first-time-user UI (e.g., session 1–3 show a welcome treatment; session 4+ hide it entirely). Justify the threshold based on what we know about B2B individual-contributor adoption curves.

B.2  WELCOME TREATMENT — THREE OPTIONS, RANKED. Design three candidate first-session treatments inside the direct-to-tool screen, ranked best-to-worst with reasoning. The treatments must satisfy: dismissible in one click; visible without scrolling on a 13" laptop; does not require the user to read more than 12 words to act on it; degrades gracefully on mobile. Examples of candidate treatment classes (you may propose others): a slim banner above the ControlPanel; a one-time AppRail pulse highlighting the categories; a transient overlay card pinned to the active tool. Pick one as the recommendation.

B.3  RAIL ORIENTATION FOR NEW USERS. The AppRail is collapsed by default for returning users (icon-only at 16px wide). For first-time users, should it be auto-expanded (60px, icon + label + categories visible) for the first 1–3 sessions? Recommend and justify.

B.4  THE "I'VE NEVER USED A PROMPT GENERATOR" MOMENT. The first time a user clicks Generate and sees a master prompt fill the TerminalOutput, they may not know what to do with it. Recommend the slimmest possible inline coaching that appears after the first successful generation only, explaining "now copy this and paste it into ChatGPT or Claude." Where does it live? When does it disappear? What does it look like? Be specific about copy and visual treatment.

B.5  EMPTY / RESEARCHING STATE. When a brand new user finishes /onboarding, their profile is research_status="researching" for 30–90 seconds before becoming "ready." During this window the rep is dropped into the ControlPanel but the engine cannot yet inject useful product positioning. Design what this screen looks like — specifically the ControlPanel state, not just a global toast — so the rep doesn't try to generate against an empty profile.

C — PER-TOOL UPGRADE TRIGGER COPY (HIGH-LEVERAGE SUB-DELIVERABLE)

The UpgradeTrigger banner appears below the output of three Core-tool generations: pre-call-recon (after a recon brief), objection-defuser, and cold-hook. The current copy lives in `upgrade-trigger.tsx`:

  pre-call-recon → "After the call, the Follow-Up Forward writes the follow-up email plus a recap your prospect can forward to their boss — no editing required."
  objection-defuser → "Most objections that stall go quiet within days. The Deal Reviver builds a 3-touch re-engagement sequence for exactly this moment."
  cold-hook → "Following up on cold outreach is where most replies die. The Deal Reviver builds a multi-touch sequence for this same prospect."

Note: only `pre-call-recon` is a Core tool. The other two are already Pro — those nudges currently target Core users who clicked into the locked tool. Audit and rewrite the nudge copy with the constraint that the visitor has just experienced a successful generation and is in a high-affinity moment. Recommend whether each nudge should also include a one-line social-proof element ("X reps used this last week") and where the timing of these nudges should be moved (e.g., on the second visit, not the first; or after copy, not after generate). Be specific.

D — MOBILE EXPERIENCE

Reps may use this between calls. Recommend three changes specifically for mobile screens (≤640px wide), prioritized by impact: one for the public landing page, one for the logged-in homepage direct-to-tool flow, one for the pricing/upgrade flow. Each should be a concrete component-level change with rationale.

OUTPUT FORMAT

Structure your response as follows:

  Section A: Public Landing Page Design
    A.1 — A.8 each as its own subsection, with the four parts requested per subsection
  Section B: First-Time User Experience Inside Direct-to-Tool
    B.1 — B.5
  Section C: Per-Tool Upgrade Trigger Copy
  Section D: Mobile Experience Recommendations

For every visual recommendation, name the existing design tokens and component file you'd touch (e.g., "in `control-panel.tsx`, replace the action-row CTA's …"). Where a recommendation requires a new token or component, state it explicitly. Do not output general design philosophy — every paragraph should map to something a developer could ship in a sprint.

Two final constraints. First: do not recommend rebuilding the rail, the top bar, or the auth flow. They are working. Second: do not recommend a Launchpad, a traditional analytics dashboard, or a multi-step onboarding terminal. Those have been ruled out by product philosophy and the team's prior decision. Build on the direct-to-tool foundation.
```
