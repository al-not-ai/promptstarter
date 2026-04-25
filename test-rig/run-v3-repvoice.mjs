#!/usr/bin/env node
/**
 * V3-repvoice harness — 14 cases. Mirrors the V3-repvoice architecture in
 * src/app/api/generate/route.ts and src/lib/prompt-templates.ts:
 *   - Engine writes MISSION + STRUCTURE + GROUNDING in REP'S first-person
 *     voice ("I" = rep, "you" = downstream assistant)
 *   - STANDARD RULES + DRILL-DOWN OFFER appended in same rep voice
 *   - Profile XML skipped for pre-call-recon
 *   - Recon gets a three-state research instruction (use tools if available,
 *     fall back to flagged pattern, never assert sourceless specifics)
 *   - System message marked cache_control: ephemeral 5m
 *
 * Same 14 test cases as run-v2-templated.mjs so we can diff outputs.
 */

import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";

// Resolve all paths relative to this script's directory, so the harness
// works whether you run it from inside the sandbox or from your own
// machine. The script lives at <repo>/test-rig/run-v3-repvoice.mjs;
// .env.local lives one level up at <repo>/.env.local.
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(SCRIPT_DIR, "..", ".env.local");
const envRaw = fs.readFileSync(envPath, "utf8");
for (const line of envRaw.split("\n")) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) throw new Error("ANTHROPIC_API_KEY missing from .env.local");

const MODEL = "claude-haiku-4-5-20251001";

// ─── V3-repvoice system prompt (mirrors src/app/api/generate/route.ts) ───────
const BASE_SYSTEM_PROMPT = `You are writing a Master Prompt the rep will paste into their own AI assistant (ChatGPT, Claude, etc.). The Master Prompt is the rep's brief to their assistant — sharper than they'd write it themselves, but in their voice. Their assistant uses your brief to produce the actual sales artifact (recon brief, defuser, hook, etc.). Your output is the brief, not the artifact.

VOICE — the single most-violated rule, get this right:
The Master Prompt is written from the rep's first-person perspective, addressing their downstream assistant. Hold this voice across MISSION, STRUCTURE, and GROUNDING — never break it.
- "I" / "me" / "my" = the rep
- "you" / "your" = the downstream assistant
- NEVER refer to the rep in third person ("the rep", "a sales rep", "the user", "they"). NEVER address the rep directly with "you" — your "you" always means the assistant.

VOICE EXAMPLES — patterns to mimic:
GOOD: "I'm a sales rep at Acme selling [product]. I'm calling [prospect]. Be my call-prep strategist and give me..."
GOOD: "Anchor everything to my inputs and the profile below. If you need more context to sharpen this, ask me."
GOOD: "Give me three openers I can choose from."
BAD:  "You are a call-prep strategist. Your role is to arm the rep..."  ← talks about the rep in third person
BAD:  "The rep should ask the prospect about..."  ← third-person rep
BAD:  "You'll want to think about your discovery questions"  ← addresses rep as "you"; "you" must mean the assistant

The STANDARD RULES, RESEARCH PROTOCOL (recon only), and DRILL-DOWN blocks at the end of the Master Prompt are appended automatically — you do not write them. They're written in the same rep voice so the full prompt reads as one continuous brief. Don't try to pre-write them or address them.

CORE RULES:
1. No scripting. Don't write exact dialogue, email copy, subject lines, or verbatim opening phrases. Describe the rails; let the assistant lay the track.
2. Anti-hallucination is the only hard wall. Every other rule bends in service of it. If the assistant lacks specific knowledge, tell it to anchor to standard industry patterns and flag them as patterns. Never demand specificity that forces fabrication.
3. Ambition with fallback. Every quality rule you impose must give a graceful path when information is thin.
4. No fabricated specificity. Don't invent details I haven't given you — no "tomorrow", "last quarter", "as we discussed", or any time / place / relational detail not present in my inputs. Specificity comes from my inputs only; everything else stays general or pattern-flagged.
5. Compress. Each line earns its place. Cut hedge clauses, redundant qualifiers, and connective tissue. If a clause can be removed without changing the instruction's meaning, remove it. Trust the assistant — it doesn't need over-explanation.
6. Format for scan. The rep glances at this before pasting. Use bullets where they sharpen. Reserve prose for MISSION (where rep voice needs flow). Avoid wall-of-text paragraphs in STRUCTURE and GROUNDING.

COMPRESSION EXAMPLES — write tight:
LOOSE: "If account-specific intel would sharpen this signal meaningfully, name what data point would help most and ask the rep for it."
TIGHT: "If account-specific intel would sharpen this, ask me for it."

LOOSE: "Provide three distinct ways the rep can kick off the call. Each should acknowledge the warm inbound context and avoid cold-call phrasing."
TIGHT: "Three openers. Each acknowledges the warm inbound — no cold-call energy."

LOOSE (paragraph in GROUNDING): "Avoid jargon tied to Tesla's proprietary roadmap, speculation about market position, or buzzwords that assume familiarity with internal org structure. Ground everything in what an engineer role typically owns."
TIGHT (bullets):
- Avoid: insider-only jargon, market speculation, buzzwords assuming org-chart knowledge.
- Anchor to: what the role typically owns, warm-inbound posture.

OUTPUT STRUCTURE — 3 sections, in this order, nothing else:
## MISSION — 2-3 short sentences, prose. Open with who I am and what I'm doing (use the role hint, my product if relevant, the prospect/situation in one tight breath). Then state the deliverable and my posture/stage calibration woven in. If my calibration includes a channel (email, DM, etc.), note STRUCTURE must scaffold channel-appropriate elements.
## STRUCTURE — Numbered sections you'll produce. ONE-LINE LEDE per item, then optional 2-3 sub-bullets only when they sharpen substance (what to include, what to exclude, what good looks like). No paragraph-form items. For channels: scaffold subject + salutation + signoff for emails, hook only for DMs, per-persona variants for exec multi-threading.
## GROUNDING — Bulleted list. Anchor to my inputs and the profile, fallback when thin, buzzwords to avoid for THIS audience. No long paragraphs. Tie to the actual call. Do NOT restate the no-unsourced-numbers rule, the drill-down rule, or (for recon) the research protocol — those are appended.

Output ends at the last line of GROUNDING. Nothing before ## MISSION. Nothing after ## GROUNDING.`;

// ─── Templated post-processing blocks (mirrors src/lib/prompt-templates.ts) ──
const STANDARD_RULES_BLOCK = `## STANDARD RULES

- **No unsourced numbers.** Don't cite a statistic, percentage, dollar figure, timeline, headcount, or revenue number unless it appears in my inputs or the profile, or you flag it explicitly as a category pattern ("most orgs of this size typically report..."). Confident fabricated stats are the single biggest failure mode.
- **Deliver first, probe second.** Produce the complete deliverable before asking me anything. Don't ask me questions before delivering — that defeats the point.`;

const RECON_RESEARCH_BLOCK = `## RESEARCH PROTOCOL

- If you have live research tools (web search, browsing, retrieval) AND they return real, retrievable content about this prospect, use it. Cite each claim with a one-line source so I can verify.
- If you have no live tools, OR your tools return nothing usable for this prospect: open the brief by saying so plainly ("I don't have live research access in this session"), then fall back to role + industry pattern and flag everything as "pattern, not fact."
- A "source" means content you actually retrieved via a tool call in THIS session. Your training data is months old and may be wrong — never cite specific articles, earnings calls, reports, filings, or quotes from training data as sources you can stand behind.`;

function buildDrillDownBlock(outputDescriptor) {
  return `## DRILL-DOWN OFFER

After delivering ${outputDescriptor}, pause and:
- Identify 2–3 places where missing data or your own assumptions shaped what you wrote. Be specific about what you guessed versus what you knew from my inputs or the profile. State each gap plainly.
- Close with one targeted request to me. Name the single piece of context that would let you sharpen the most consequential gap. If relevant, suggest concrete forms — prior emails or call notes I have on this account, internal Slack threads about it, files I'm sitting on, notes from a teammate who knows the prospect, or specific intel from a past meeting. Make the ask easy to ignore but valuable to answer — don't require it, but explain what it would unlock.
- If I reply with new context, weave it in and revise. If I don't, what you delivered stands.`;
}

function assembleMasterPrompt(engineOutput, outputDescriptor, toolId) {
  const trimmed = engineOutput.trim();
  const reconResearch =
    toolId === "pre-call-recon" ? `\n\n${RECON_RESEARCH_BLOCK}` : "";
  return `${trimmed}\n\n${STANDARD_RULES_BLOCK}${reconResearch}\n\n${buildDrillDownBlock(outputDescriptor)}\n`;
}

// ─── Two seller profiles ─────────────────────────────────────────────────────
const SELLERS = {
  velara: {
    company_name: "Velara",
    product_name: "Velara Revenue OS",
    product_summary:
      "Velara Revenue OS is a real-time pipeline intelligence platform that eliminates CRM data rot, surfaces deal risk before it's fatal, and delivers in-call coaching signals that keep reps on message without post-call regret.",
    key_differentiators: [
      "Auto-captures deal activity from email and calendar — zero manual CRM updates",
      "Forecast accuracy within 4% guaranteed — backed by contractual SLA",
      "Live in 14 days flat — no implementation fees, no professional services required",
      "In-call coaching signals surfaced in real time, not post-call",
      "Native Salesforce and HubSpot bidirectional sync with no middleware",
    ],
  },
  clearstack: {
    company_name: "ClearStack",
    product_name: "ClearStack CSPM",
    product_summary:
      "ClearStack is a cloud security posture management platform that continuously scans AWS, Azure, and GCP for misconfigurations, surfaces blast-radius for each finding, and routes prioritized fixes to the engineer who owns the affected resource.",
    key_differentiators: [
      "Blast-radius scoring on every finding — engineers fix what matters first, not what's loudest",
      "Direct GitOps remediation — opens a PR with the fix, not just a ticket",
      "Agentless deployment via read-only IAM role — no software to install on workloads",
      "Native multi-cloud (AWS + Azure + GCP) under one policy graph, not three siloed scanners",
      "SOC 2 + ISO 27001 evidence collection runs in the background — auditors get a portal, not a fire drill",
    ],
  },
};

// ─── Tool definitions (mirror src/lib/tools.ts) ──────────────────────────────
const TOOLS = {
  "pre-call-recon": {
    name: "The Pre-Call Recon Brief",
    category: "Account Research",
    outputFormat:
      "Exactly 3 sections: (1) One specific intel signal about this account, (2) Three conversation openers the rep can choose from, (3) Two questions to ask in the first 5 minutes of the call",
    outputDescriptor: "the recon brief",
    engineRoleHint:
      "call-prep strategist briefing me before a cold conversation",
    includesProfile: false,
    variables: ["Target Account", "Prospect Job Title"],
    sliders: ["Primary Call Objective", "Expected Prospect Posture"],
  },
  "objection-defuser": {
    name: "The Objection Defuser",
    category: "Tactical Execution",
    outputFormat:
      "3-5 sentences the rep can say verbatim or riff on, followed by one follow-up question. Conversational tone, not formal. Actual language, not a framework.",
    outputDescriptor: "the defuser response and follow-up question",
    engineRoleHint:
      "sales coach helping me navigate a live objection in-conversation",
    includesProfile: true,
    variables: ["The Objection", "Our Counter-Leverage"],
    sliders: ["Psychological Posture", "Next Step Aggression"],
  },
  "competitor-battlecard": {
    name: "The Competitor Battlecard",
    category: "Account Research",
    outputFormat:
      "5 discovery questions numbered 1-5, each followed by a one-line coaching note on why it works and what signal to listen for in the answer. No scripted dialogue. No fake conversations.",
    outputDescriptor: "the 5 discovery questions and coaching notes",
    engineRoleHint:
      "competitive intelligence specialist arming me to uncover friction without naming the incumbent as the enemy",
    includesProfile: true,
    variables: ["Incumbent / Competitor", "Our Unfair Advantage"],
    sliders: ["Competitive Stance", "Sales Cycle Stage"],
  },
  "cold-hook": {
    name: "The Cold Hook",
    category: "Outreach",
    outputFormat: "Short-form Outreach (Under 100 words)",
    outputDescriptor: "the outreach hook",
    engineRoleHint:
      "cold outreach specialist writing on my behalf to earn 90 seconds of attention",
    includesProfile: true,
    variables: ["Target Persona or Name", "Trigger Event or Core Pain"],
    sliders: ["Delivery Channel", "Primary Value Angle"],
  },
};

// ─── 14 test cases (same as v2-templated for direct comparison) ──────────────
const CASES = [
  {
    id: "01-recon-hubspot-warm",
    tool: "pre-call-recon",
    seller: "velara",
    label: "Known entity / VP RevOps / Soft Discovery / Inbound Warm",
    variables: { "Target Account": "HubSpot", "Prospect Job Title": "VP of Revenue Operations" },
    sliders: { "Primary Call Objective": "Soft Discovery (Context)", "Expected Prospect Posture": "Inbound / Warm" },
  },
  {
    id: "02-recon-obscure-hostile",
    tool: "pre-call-recon",
    seller: "clearstack",
    label: "Obscure entity / Director Sec Eng / Challenger / Hostile",
    variables: { "Target Account": "Meridian Logistics Group", "Prospect Job Title": "Director of Cloud Security Engineering" },
    sliders: { "Primary Call Objective": "Challenger Pitch (Provocative)", "Expected Prospect Posture": "Hostile / Forced to attend" },
  },
  {
    id: "03-recon-fictional-guarded",
    tool: "pre-call-recon",
    seller: "clearstack",
    label: "Fully fictional company / Head of Security / Uncover / Guarded",
    variables: { "Target Account": "Quasar Aerospace Holdings", "Prospect Job Title": "Head of Information Security" },
    sliders: { "Primary Call Objective": "Uncover Their Problem", "Expected Prospect Posture": "Guarded / Skeptical" },
  },
  {
    id: "04-recon-known-mid-qualification",
    tool: "pre-call-recon",
    seller: "velara",
    label: "Mid-known entity (Linear) / Head of Sales / Qualification / Neutral",
    variables: { "Target Account": "Linear", "Prospect Job Title": "Head of Sales" },
    sliders: { "Primary Call Objective": "Qualification (Authority/Budget)", "Expected Prospect Posture": "Neutral / Curious" },
  },
  {
    id: "05-objection-build-vs-buy",
    tool: "objection-defuser",
    seller: "velara",
    label: "Build in-house cost objection / Consultative / No Ask",
    variables: { "The Objection": "You're too expensive — we can build this in-house", "Our Counter-Leverage": "3-week implementation vs. 9-month build cycle" },
    sliders: { "Psychological Posture": "Consultative / Soft Pivot", "Next Step Aggression": "No Ask (Just defuse)" },
  },
  {
    id: "06-objection-already-have-vendor",
    tool: "objection-defuser",
    seller: "clearstack",
    label: "Existing vendor lock-in / Direct Challenging / Hard Close",
    variables: { "The Objection": "We just rolled out Wiz six months ago — we're not switching", "Our Counter-Leverage": "Native multi-cloud under one policy graph, not three siloed scanners" },
    sliders: { "Psychological Posture": "Direct / Challenging", "Next Step Aggression": "Hard Presumptive Close" },
  },
  {
    id: "07-objection-budget-freeze-roi",
    tool: "objection-defuser",
    seller: "velara",
    label: "Budget freeze / Analytical ROI-Focused / Soft Permission",
    variables: { "The Objection": "We've got a hiring freeze and a budget freeze — nothing new gets approved this quarter", "Our Counter-Leverage": "Productivity uplift on the existing rep team — no headcount add required" },
    sliders: { "Psychological Posture": "Analytical / ROI-Focused", "Next Step Aggression": "Soft Permission Ask" },
  },
  {
    id: "08-battlecard-salesforce-early",
    tool: "competitor-battlecard",
    seller: "velara",
    label: "vs. Salesforce / Expose Quietly / Early Discovery",
    variables: { "Incumbent / Competitor": "Salesforce", "Our Unfair Advantage": "No implementation fees, live in 14 days" },
    sliders: { "Competitive Stance": "Expose Weaknesses Quietly", "Sales Cycle Stage": "Early Discovery" },
  },
  {
    id: "09-battlecard-wiz-final",
    tool: "competitor-battlecard",
    seller: "clearstack",
    label: "vs. Wiz / Direct Head-to-Head / Final Vendor Selection",
    variables: { "Incumbent / Competitor": "Wiz", "Our Unfair Advantage": "Direct GitOps remediation — opens a PR with the fix, not just a ticket" },
    sliders: { "Competitive Stance": "Direct Head-to-Head", "Sales Cycle Stage": "Final Vendor Selection" },
  },
  {
    id: "10-battlecard-snowflake-mid",
    tool: "competitor-battlecard",
    seller: "velara",
    label: "vs. Outreach / Strategic Differentiation / Solution Mapping",
    variables: { "Incumbent / Competitor": "Outreach.io", "Our Unfair Advantage": "Auto-captures deal activity from email and calendar — zero manual CRM updates" },
    sliders: { "Competitive Stance": "Strategic Differentiation", "Sales Cycle Stage": "Solution Mapping" },
  },
  {
    id: "11-hook-linkedin-trigger",
    tool: "cold-hook",
    seller: "velara",
    label: "LinkedIn DM / Trigger event / Stop Them In Their Tracks",
    variables: { "Target Persona or Name": "Marcus Reid", "Trigger Event or Core Pain": "Just posted a LinkedIn thought-leadership piece on pipeline efficiency (~8k engagement)" },
    sliders: { "Delivery Channel": "LinkedIn DM", "Primary Value Angle": "Stop Them In Their Tracks" },
  },
  {
    id: "12-hook-casual-email-efficiency",
    tool: "cold-hook",
    seller: "clearstack",
    label: "Casual Email / Mid-market CTO / Operational Efficiency",
    variables: { "Target Persona or Name": "CTO at a 400-person Series C fintech", "Trigger Event or Core Pain": "Public job posting for a Cloud Security Engineer — first dedicated cloud sec hire" },
    sliders: { "Delivery Channel": "Casual Email", "Primary Value Angle": "Operational Efficiency" },
  },
  {
    id: "13-hook-formal-cfo-risk",
    tool: "cold-hook",
    seller: "clearstack",
    label: "Formal Email / Fortune 500 CFO / Risk Mitigation",
    variables: { "Target Persona or Name": "CFO at Northrop Grumman", "Trigger Event or Core Pain": "Annual 10-K filed last week flagged 'increased reliance on cloud infrastructure' as material risk factor" },
    sliders: { "Delivery Channel": "Formal Email", "Primary Value Angle": "Risk Mitigation" },
  },
  {
    id: "14-hook-exec-multi-revenue",
    tool: "cold-hook",
    seller: "velara",
    label: "Exec Multi-Threading / CRO + COO / Direct Revenue Growth",
    variables: { "Target Persona or Name": "CRO + COO at a 600-person SaaS scale-up (multi-threaded outreach)", "Trigger Event or Core Pain": "Earnings call last quarter flagged forecast misses two quarters in a row" },
    sliders: { "Delivery Channel": "Executive Multi-Threading", "Primary Value Angle": "Direct Revenue Growth" },
  },
];

// ─── Build user prompt (mirrors route.ts) ────────────────────────────────────
function buildUserPrompt(testCase) {
  const tool = TOOLS[testCase.tool];
  const seller = SELLERS[testCase.seller];

  const varLines = tool.variables
    .map((label) => `- ${label}: ${testCase.variables[label] || "(not provided)"}`)
    .join("\n");
  const slideLines = tool.sliders
    .map((label) => `- ${label}: ${testCase.sliders[label] || "(not provided)"}`)
    .join("\n");

  const sellerLine = tool.includesProfile
    ? `\n**Seller's product:** ${seller.product_name} (${seller.company_name})`
    : "";

  const reconReminder =
    testCase.tool === "pre-call-recon"
      ? `\n\n**RECON-SPECIFIC NOTE:** A RESEARCH PROTOCOL block is appended automatically after this prompt with tool-vs-training-data sourcing rules. Do NOT write research instructions inside GROUNDING. In STRUCTURE for the intel signal, you can reference it implicitly (e.g., "follow the research protocol below").`
      : "";

  return `Generate the Master Prompt for this tool run. Follow the 3-section structure (MISSION / STRUCTURE / GROUNDING). Write it in the rep's first-person voice per your VOICE rules. Do not write DRILL-DOWN or STANDARD RULES — those are appended.

**Tool:** ${tool.name} (${tool.category})
**Role hint for MISSION (the role I'm asking my assistant to play):** ${tool.engineRoleHint}
**What my assistant must produce:** ${tool.outputFormat}${sellerLine}

**My inputs:**
${varLines}

**My calibration:**
${slideLines}${reconReminder}

Write the Master Prompt now. Output ends at the last line of GROUNDING.`;
}

// ─── System prompt with optional profile (mirrors route.ts) ──────────────────
function buildSystemPromptWithProfile(seller, includesProfile) {
  if (!includesProfile) return BASE_SYSTEM_PROMPT;

  const diffXml = seller.key_differentiators
    .map((d) => `    <differentiator>${d}</differentiator>`)
    .join("\n");
  const profileXml =
    `<seller_profile>\n` +
    `  <company_name>${seller.company_name}</company_name>\n` +
    `  <product_name>${seller.product_name}</product_name>\n` +
    `  <product_summary>${seller.product_summary}</product_summary>\n` +
    `  <key_differentiators>\n${diffXml}\n  </key_differentiators>\n` +
    `</seller_profile>`;

  return (
    BASE_SYSTEM_PROMPT +
    `\n\n## REP'S PRODUCT PROFILE\n` +
    `The rep sells the product described below. These are verified anchor facts about their product — use them, do not invent around them.\n\n` +
    `MANDATORY PROFILE USAGE RULES (still in rep voice — write "my product", not "the product"):\n` +
    `- The exact product name (and company name when natural) must appear verbatim at least once in MISSION or STRUCTURE.\n` +
    `- Pick the SINGLE differentiator from <key_differentiators> most relevant to this run and have the assistant anchor to that one. One sharp anchor beats four floating features.\n` +
    `- Treat the profile as the only source of truth for the rep's product. Never invent capabilities, metrics, integrations, or guarantees not present here.\n` +
    `- For per-call specifics (target buyer, named competitor, specific objection, trigger event), use the rep's inputs above — not this profile.\n\n` +
    profileXml
  );
}

// ─── API call via curl ───────────────────────────────────────────────────────
function callAnthropic({ systemBlocks, messages, max_tokens }) {
  const body = { model: MODEL, max_tokens, messages };
  if (systemBlocks) body.system = systemBlocks;
  const bodyFile = path.join(os.tmpdir(), `req-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
  fs.writeFileSync(bodyFile, JSON.stringify(body));
  const out = execFileSync(
    "curl",
    [
      "-sS",
      "--max-time", "180",
      "https://api.anthropic.com/v1/messages",
      "-H", `x-api-key: ${API_KEY}`,
      "-H", "anthropic-version: 2023-06-01",
      "-H", "content-type: application/json",
      "--data-binary", `@${bodyFile}`,
    ],
    { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 },
  );
  fs.unlinkSync(bodyFile);
  let data;
  try {
    data = JSON.parse(out);
  } catch {
    throw new Error(`Bad JSON from API: ${out.slice(0, 500)}`);
  }
  if (data.type === "error") throw new Error(`API error: ${JSON.stringify(data.error)}`);
  const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
  return { text, usage: data.usage };
}

// ─── Run ─────────────────────────────────────────────────────────────────────
// Outputs land next to the script so they're easy to find regardless of
// where you ran it from.
const OUT_DIR = path.resolve(SCRIPT_DIR, "output-v3-repvoice-leaner");
fs.mkdirSync(OUT_DIR, { recursive: true });
console.log(`Outputs will be written to: ${OUT_DIR}\n`);
const summary = [];

for (const testCase of CASES) {
  const tool = TOOLS[testCase.tool];
  const seller = SELLERS[testCase.seller];
  const systemPromptText = buildSystemPromptWithProfile(seller, tool.includesProfile);

  const systemBlocks = [
    {
      type: "text",
      text: systemPromptText,
      cache_control: { type: "ephemeral", ttl: "5m" },
    },
  ];

  const userPrompt = buildUserPrompt(testCase);

  console.log(`[${testCase.id}] engine…`);
  const engineStart = Date.now();
  const engine = callAnthropic({
    systemBlocks,
    messages: [{ role: "user", content: userPrompt }],
    max_tokens: 2000,
  });
  const engineMs = Date.now() - engineStart;

  const masterPrompt = assembleMasterPrompt(engine.text, tool.outputDescriptor, testCase.tool);

  fs.writeFileSync(
    path.join(OUT_DIR, `${testCase.id}.master.md`),
    `# ${testCase.id} — ${testCase.label}\n\n**Tool:** ${testCase.tool}\n**Seller:** ${testCase.seller} (${seller.product_name})\n**Profile included:** ${tool.includesProfile}\n**Engine usage:** ${JSON.stringify(engine.usage)} (${engineMs}ms)\n\n---\n\n${masterPrompt}`,
  );

  console.log(`[${testCase.id}] downstream…`);
  const downStart = Date.now();
  const down = callAnthropic({
    messages: [{ role: "user", content: masterPrompt }],
    max_tokens: 2500,
  });
  const downMs = Date.now() - downStart;

  fs.writeFileSync(
    path.join(OUT_DIR, `${testCase.id}.downstream.md`),
    `# ${testCase.id} — ${testCase.label} — Downstream Output\n\n**Downstream usage:** ${JSON.stringify(down.usage)} (${downMs}ms)\n\n---\n\n${down.text}\n`,
  );

  summary.push({
    id: testCase.id,
    tool: testCase.tool,
    seller: testCase.seller,
    label: testCase.label,
    profileIncluded: tool.includesProfile,
    engineUsage: engine.usage,
    engineMs,
    engineChars: engine.text.length,
    masterPromptChars: masterPrompt.length,
    downstreamUsage: down.usage,
    downstreamMs: downMs,
    downstreamChars: down.text.length,
  });
}

fs.writeFileSync(path.join(OUT_DIR, "summary.json"), JSON.stringify(summary, null, 2));
console.log("\nDone. Output:", OUT_DIR);
