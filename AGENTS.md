# About PromptStarter.ai

**What we ship.** The product's output is a *prompt*, not an answer. Users copy the generated prompt and paste it into their own ChatGPT/Claude session. We craft the prompt; the downstream AI generates the content.

**Three actors — never confuse them.**

| Actor | Who they are | Their perspective in the output |
|---|---|---|
| **The Engine** | PromptStarter / Claude Haiku — generates the master prompt | Writes instructions *to* the Downstream AI. Addresses it in second person: "you", "your recon", "close your response with". Never "the AI", "the Downstream AI", or any third-person label. |
| **The Downstream AI** | ChatGPT or Claude — receives the pasted master prompt and executes it | Addresses the Rep directly. Uses "you" for the rep and "I/me" for itself. Example: "Do you have any prior emails on this account you can share with me?" |
| **The Rep** | The sales professional using PromptStarter | The human audience of the Downstream AI's output. Never addressed by the Engine — only by the Downstream AI. |

**Perspective rules that must never be violated:**

- The Engine writes instructions, not content. It tells the Downstream AI what to generate — it never generates that content itself. If a section instructs the Downstream AI to ask a question, the Engine writes the instruction, not the question.
- Any instruction the Downstream AI must execute verbatim (e.g. the Interactive Kickoff) must be written in the Downstream AI's voice: "you" = the rep, "me/I" = the Downstream AI. Never "the user" — that is third-person and will make the Downstream AI's output read like a spec, not a conversation.
- The Engine never speaks in first person as if it were the Downstream AI.
- Third-person references to "Downstream AI" or "the AI" must never appear in the generated master prompt — only in internal engine rules.

**Profiles are product-scoped, not company-scoped.** A rep at a multi-product company (e.g. KEYENCE) sells one of many products to one of many markets. The profile must match the rep's specific product or product group; company-level facts that don't bear on that product are noise.

**Design balance — hold both at once:**

- Lean toward the downstream AI for *generative* work (final copy, claims about a specific prospect, live competitive intel). It reduces accuracy risk, keeps onboarding fast, and makes us feel cutting-edge rather than exhaustive.
- Never let output feel like Mad Libs. Each generated prompt must feel crafted and hard for the user to produce on their own. Our value is in scaffolding, role assignment, anchor facts, and priming — not in preempting the downstream AI's work.

**Anti-patterns.** Exhaustive research, heavy form-filling, multi-minute onboarding terminals, generic fill-in-the-blanks prompt templates.

# Adding a new tool — checklist

When you add a new tool to `src/lib/tools.ts`, you must set the following
fields. Don't ad-lib them — they encode rules the engine relies on.

**`includesProfile: boolean`** — Controls whether the *full* product profile
XML (positioning, key differentiators, value props, ICP, etc.) is injected
into the engine's system prompt. Set `true` for seller-positioning tools
(objection-defuser, competitor-battlecard, cold-hook). Set `false` for
prospect-situation tools (pre-call-recon). The wrong setting both wastes
input tokens and nudges the engine in the wrong direction (e.g. injecting
the full profile XML into a recon brief turns it into a product pitch).

**What `includesProfile: false` does NOT do.** The lightweight
"Seller's product: ${product} (${company})" line in the user prompt is
**always** passed when profile data exists, regardless of this flag. The
engine always knows who the rep is — it just doesn't get the heavy
positioning block when this flag is false. For recon specifically, a
recon-framing rule is appended to the user prompt instructing the engine
to use rep identity as context only, not as the deliverable's anchor.

When in doubt, run the tool both ways in the test rig and compare outputs.

**`outputDescriptor: string`** — Short noun phrase used inside the templated
DRILL-DOWN OFFER block, e.g. "the recon brief", "the 5 discovery questions",
"the outreach hook". Keep it tight; the templated text reads "After
delivering ${outputDescriptor}, pause." See `src/lib/prompt-templates.ts`.

**`engineRoleHint: string`** — One-line voice/role hint for the engine when
it composes MISSION (e.g. "competitive intelligence specialist", "sales
coach", "cold outreach specialist briefing a rep"). The engine adapts this
per seller + situation, but a strong hint anchors the framing.

**`outputFormat: string`** — Granular spec of what the downstream must
produce. The engine copies the substance of this into STRUCTURE, so be
specific about format, length, and what to exclude.

# Templated tail — what the engine does NOT write

Every master prompt ends with two fixed blocks appended in
`src/app/api/generate/route.ts` after the engine returns:

1. **STANDARD RULES** — no-unsourced-numbers + deliver-first-probe-second.
2. **DRILL-DOWN OFFER** — instructs the downstream to surface 2–3 reasoning
   gaps and make one targeted ask of the rep.

The engine's system prompt forbids it from restating these. If you change
the templated tail, the system prompt must explicitly call out the new
section by name (otherwise the engine may duplicate it). See
`src/lib/prompt-templates.ts` for the source of truth.

# Touching tools.ts — lockstep updates

Changing a tool ID, variable name, or slider ID isn't a single-file edit.
When you rename/add/remove one, update in lockstep:

- `scripts/stress-test.mjs` — `TEST_CASES` hardcodes tool IDs, variable
  names, and slider IDs. Silent drift here turns "12/12 green" into
  "12/12 covering the wrong thing."
- Any review doc in `docs/` that names the tool by ID (e.g.
  `docs/V2_TEMPLATED_REVIEW.md`).

The engine itself (`src/app/api/generate/route.ts`) is tool-agnostic and
reads the schema directly — it does not need to change.

# Token cost accounting

When reporting "cost per click," count engine-side tokens only — the
Haiku call in `src/app/api/generate/route.ts`. The downstream ChatGPT or
Claude session runs on the rep's own subscription; we do not pay for
those tokens. Historical review docs that added engine + downstream
(e.g. the "Total per-call" column in `docs/V2_TEMPLATED_REVIEW.md`) were
decision-support math, not our bill.

# docs/archive/ — do not read by default

`docs/archive/` holds historical snapshots from pre-V2-templated phases
(six-section engine output, Interactive Kickoff, AccessGate, Lemon
Squeezy stubs). They describe state the code no longer matches. Ignore
them unless the user explicitly asks — reading them to answer "how does
X work now?" will mislead.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
