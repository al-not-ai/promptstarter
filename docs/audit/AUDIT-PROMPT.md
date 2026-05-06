# Engine Architecture & Token Economy Audit — Cowork session prompt

Paste everything below the `=== BEGIN PROMPT ===` line into a fresh Cowork session in the same project folder.

---

=== BEGIN PROMPT ===

I want a hard, skeptical audit of how my engine spends API tokens and whether the current architecture is adding value commensurate with cost. Be ruthless. Don't validate the existing approach reflexively — find what's wasteful and call it out specifically with data. Every Haiku token has to earn its place in user-perceived value; if it doesn't, it should be cut, templated, or replaced.

## Project context (read these first)

I'm building **PromptStarter.ai** in `/Users/al/Desktop/promptstarter-ai/`. The product is a tool for sales reps: they pick a tool, fill in a few inputs, and get back a **master prompt** they paste into their own ChatGPT/Claude. The downstream AI produces the actual sales artifact. We sell scaffolding, not final copy.

**Read in this order:**
1. `AGENTS.md` — the constitution. Note especially: three-actor rules (Engine / Downstream AI / Rep), engine-cost-only accounting, lockstep update rules, and pre-launch sample-output checklist.
2. `src/app/api/generate/route.ts` — the engine. ~390 lines. Read all of it.
3. `src/lib/tools.ts` — the 7 tools (1 Core "pre-call-recon" + 6 Pro). Each has variables, sliders, outputFormat, engineRoleHint, includesProfile flag, and a sampleOutput placeholder.
4. `src/lib/prompt-templates.ts` — the templated tail (STANDARD_RULES_BLOCK, RECON_RESEARCH_BLOCK, buildDrillDownBlock).
5. `src/lib/profile-xml.ts` — how seller profiles are rendered as XML for the engine.

## Recent test history (your starting data)

Over five test cycles I ran 63 cases per cycle through the engine (5 Velara SaaS + 2 Northwind hardware + 2 Aldermark services profiles × 7 tools, plus a D1 fabrication sentinel). Results live in:

- `docs/test-runs/2026-05-04/` — cycle 1 baseline + Opus consolidated review at `_reviews/_consolidated.md` + changelog at `_changelog.md`
- `docs/test-runs/2026-05-04-cycle2/`, `2026-05-04-cycle2b/`, `2026-05-04-cycle3/`, `2026-05-04-cycle4/` — fix cycles

Each cycle wrote 7 per-tool result files (one per tool, ~9 cases each with full master prompts and per-case token usage) plus an `_index.md` with totals. Read all 5 `_index.md` files for the cost trajectory data, plus at least 2–3 cycle-4 per-tool result files (e.g., `cold-hook.md`, `cfo-pitch.md`, `competitor-battlecard.md`) so you understand what the engine actually produces.

For reference, my measured cost trajectory:

| Cycle | Total cost | Input tokens | Output tokens | $/case |
|---|---|---|---|---|
| 1 | $0.2554 | 134,491 | 36,943 | $0.0041 |
| 2 | $0.2797 | 168,169 | 36,282 | $0.0044 |
| 2b | $0.2933 | 180,913 | 37,142 | $0.0047 |
| 3 | $0.2994 | 191,824 | 36,493 | $0.0048 |
| 4 | $0.3077 | 207,241 | 35,469 | $0.0049 |

Pricing: `claude-haiku-4-5-20251001` at $0.80/1M input, $4.00/1M output. Don't trust my numbers — verify against the `_index.md` files.

## The audit — four parts

### Part 1 — Token economy breakdown (data-heavy, I love this part)

Save findings to `docs/audit/<today>/01-token-economy.md`.

**1.1 Input token decomposition.** For a representative cycle-4 case, decompose where input tokens actually go. The full system prompt is `BASE_SYSTEM_PROMPT` (defined in route.ts) + the optional profile XML block (rendered via `renderProfileAsXML()` for tools where `includesProfile: true`). The user prompt comes from `buildUserPrompt()`. Anthropic prompt caching gives a 10× discount on input tokens within a 5-minute TTL — only the *system message* is marked `cacheControl: { type: "ephemeral" }`, so user prompt is never cached.

Build a table per tool showing roughly what % of input tokens are:
- BASE_SYSTEM_PROMPT (cacheable, repeats every call)
- Profile XML (cacheable when profile unchanged, but only injected for `includesProfile: true` tools)
- Per-call user prompt (never cached — varies every request)
- Tool-specific reminders (e.g., recon framing rule)

Use a heuristic if you don't have tiktoken: ~0.75 tokens per English word, or run a quick `node` script via Bash to call `tiktoken` if it's available. The `_index.md` files give you authoritative totals; you only need to estimate the proportions.

**1.2 Output token breakdown.** The engine generates MISSION + STRUCTURE + GROUNDING. Look at how many tokens are being spent on each section in cycle-4 outputs. The templated tail (STANDARD RULES + DRILL-DOWN OFFER + recon-only RESEARCH PROTOCOL) is appended POST-engine in route.ts (see lines ~332–348) — those tokens don't show up in the engine's output count but DO appear in what the user pastes downstream.

Calculate:
- Avg engine output tokens per case per tool
- Avg templated-tail tokens (these are static text — count once per tool)
- The ratio of engine-generated to templated content in what the user actually pastes

**1.3 Cross-case redundancy in engine output (the most important question).** Pick one or two tools — `competitor-battlecard` and `cfo-pitch` are good candidates because they have rich multi-section output. Read all 9 cycle-4 cases for that tool. Count language that appears in 70%+ of cases (boilerplate) vs. language that's truly case-specific (the inputs anchor visibly into the output). Examples of likely boilerplate:
- "Tone: peer-to-peer" / "no marketing language" / "Avoid: industry-leading, robust, cutting-edge"
- The "## STANDARD RULES" section variations
- Generic wrap-up coaching that could appear in any case of that tool

If 50%+ of engine output is boilerplate that doesn't change with rep inputs, **that's the key signal that we're paying Haiku to generate text that could be a static template instead.** Quantify this. Show me 3–5 specific quoted examples of boilerplate that appears verbatim or near-verbatim across cases.

**1.4 Per-tool cost variance.** Build a table: tool × cycle × cost. Identify any tool that's costing 30%+ above the median. Then ask: is the extra spend producing better output, or is the engine just being verbose for that tool? Quote specific cases.

### Part 2 — Architecture critique

Continue in the same file or a new `docs/audit/<today>/02-architecture.md`.

**2.1 Is BASE_SYSTEM_PROMPT bloated?** Read it carefully (in route.ts, the const before line ~91). It contains:
- Voice rules with examples (~6 GOOD/BAD pairs)
- 8 CORE RULES (some original, some added in cycles 2/3/4 to suppress specific failures)
- A long NUMERICAL SPECIFICITY RULE (added in cycle 2b)
- An OUTPUT STRUCTURE spec (MISSION/STRUCTURE/GROUNDING)
- Compression examples

Ask:
- Are all 8 CORE RULES doing real work, or are some defensive over-instruction that the engine doesn't need anymore? Some were added to suppress failures that may now be obsolete.
- Is the NUMERICAL SPECIFICITY RULE block (it's long) earning its place? Could it be 1/3 the length and just as effective?
- Are voice GOOD/BAD examples redundant with CORE RULES? Could one set go?

Recommend specific cuts with size estimates.

**2.2 The big question — could half of the engine's output be templated instead?**

The engine produces MISSION/STRUCTURE/GROUNDING. Each section has predictable shape:

- **MISSION**: 2–3 sentences. Pattern: "I'm a sales rep at {company} selling {product}. I'm {doing X}. Be my {role hint} and give me..."
- **STRUCTURE**: numbered list following the tool's `outputFormat` spec — which is ALREADY a static template per tool.
- **GROUNDING**: bulleted list, partially generic ("Avoid buzzwords...") and partially case-specific (anchoring to rep inputs).

Propose a specific architecture: what becomes Haiku-generated, what becomes templated stitching. Quantify expected cost reduction. Be honest about quality risk: if templating MISSION makes outputs feel canned, that's a real cost. The product's promise is that the master prompt feels crafted — losing that defeats us.

A useful frame: which sentences in cycle-4 outputs would a rep *not notice* if they were templated? Which sentences are doing the work that makes them want to use the tool? The first set is candidate for cutting; the second set is what we're paying Haiku for.

**2.3 Profile XML — right shape, right amount?**

Read `src/lib/profile-xml.ts`. The profile is injected as XML when `includesProfile: true`. Is this:
- The right structure (XML vs. JSON vs. natural language)?
- The right level of detail (too verbose? not enough?)?
- Actually being leveraged by the engine, or is it expensive context the engine ignores?

Look at cycle-4 outputs from a profile-injected tool (e.g., cold-hook, cfo-pitch) and ask: does the engine reference profile facts in its output, or does it mostly leverage the per-call inputs? If profile XML is mostly ignored, that's pure waste — it's cached but still tokens we paid to embed once.

### Part 3 — Two specific UX ideas I want you to evaluate

Save to `docs/audit/<today>/03-ux-ideas.md`. **Be objective. If these are bad ideas, say so and explain why.** I'm not married to either.

**3.1 Pre-filling tool fields from the profile.**

Today, when a rep uses Cold Hook, they type the prospect name and trigger event from scratch. What if some fields were pre-filled with smart defaults from the profile?

Examples:
- `yourEdge` (in objection-defuser and competitor-battlecard) → default to one of the rep's `<key_differentiators>` (they pick which one or click to swap)
- `competitorName` → if we tracked common competitors in the profile (we don't today), default to one
- Could leave per-call fields like `prospectName`, `triggerEvent`, `callNotes` empty — those are inherently per-call

Evaluate:
- Does pre-filling make the rep feel the tool is smart, or does it feel like Mad Libs and undermine the "crafted prompt" promise we make?
- What's the right UX pattern — pre-filled value the rep edits, or a clickable chip that inserts into an empty field?
- Which tool fields are good candidates? Which would feel weird?
- What's the engineering cost? (Profile schema change, UI work)

**3.2 Background profile enrichment.**

When a rep creates a product profile (today: company name, product summary, key differentiators), what if we ALSO ran a background job to generate and store additional fields — common objections for that product, ICP snapshot, likely competitor names, common trigger events? The user never sees this raw data; the engine reads it on tool runs.

One-time cost at profile creation (one Haiku or Opus call). Subsequent tool calls would have richer ground truth. Or — alternatively — the per-tool engine call could be smaller because some context is pre-baked into the profile rather than being inferred fresh each call.

Evaluate:
- Would this materially improve output quality, or is it duplicative of `<key_differentiators>`?
- What specifically would we generate? Propose a schema.
- One-time cost per profile vs. per-tool-call savings — run the math. Break-even point?
- Does enriching the profile make the per-call profile XML BIGGER (more cost per call) even if quality goes up?
- Could enrichment INCREASE fabrication risk (the engine drawing on AI-generated profile facts as if they were rep-supplied)?

**3.3 Anything else you'd recommend.** If you see a smarter architecture I haven't thought of, propose it with reasoning. Switching to a cheaper model for some tools? Splitting the engine call into two stages (fast structural pass + slow substance pass)? Caching common substructures across requests? Anything goes.

### Part 4 — Recommendations document

Save to `docs/audit/<today>/04-recommendations.md`.

1. **Top 3 wasteful patterns** in current architecture with token-cost data and quoted evidence.
2. **Top 3 high-leverage simplifications** — what changes, expected cost reduction (in $/case), quality risk per change.
3. **Verdict on pre-fill (3.1):** yes/no/partial, which fields, why.
4. **Verdict on background enrichment (3.2):** yes/no/maybe, what to generate, cost math.
5. **Concrete cost projection:** if we ship the top recommendations, $/case goes from $0.0049 to $X. Show the math.
6. **Anything I haven't asked about that you think matters.**

## Hard constraints — read these

- **Do NOT run new test cycles** or call the API. This is pure analysis on existing data.
- **Do NOT modify any code.** Don't even draft Edit tool calls. Final output is markdown only.
- **Do NOT validate my current approach reflexively.** Be skeptical. The whole point is to find waste.
- **DO ground every claim in actual files and test data.** No speculation without citation. Quote specific lines and case labels.
- **DO use tables and numbers liberally.** I love data — show your work.
- **DO push back on my ideas** if they're bad. "This is dumb because X" is more valuable than agreement.
- **Save outputs as markdown** in `docs/audit/<today's-date>/`.
- **Reference the user's auto-memory** at `~/Library/Application Support/Claude/local-agent-mode-sessions/.../memory/` if any of those facts are relevant — especially the engine-cost-only and Core/Pro tier conventions.

Begin by reading AGENTS.md, then route.ts, then a cycle-4 _index.md and one per-tool file. Then start writing. Take your time — I'd rather get a thorough analysis than a fast one.

=== END PROMPT ===
