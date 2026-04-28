#!/usr/bin/env node
/**
 * Arsenal Stress Test — 22 cases (3 per tool × 7 tools + 1 D1 fabrication sentinel)
 * Usage: node scripts/stress-test.mjs <BASE_URL>
 * Example: node scripts/stress-test.mjs https://promptstarter-ai.vercel.app
 *          node scripts/stress-test.mjs http://localhost:3000
 */

import fs from "fs";

// ── Pricing constants (claude-haiku-4-5-20251001) ─────────────────────────────
// Source: https://www.anthropic.com/pricing — verify before relying on these figures.
const INPUT_PRICE_PER_MILLION  = 0.80;  // USD per 1M input tokens
const OUTPUT_PRICE_PER_MILLION = 4.00;  // USD per 1M output tokens

function calcCost(inputTokens, outputTokens) {
  return (inputTokens / 1_000_000) * INPUT_PRICE_PER_MILLION
       + (outputTokens / 1_000_000) * OUTPUT_PRICE_PER_MILLION;
}

const TEST_PROFILE = {
  company_name: "Velara",
  product_name: "Velara Revenue OS",
  company_url: "https://velara.io",
  product_url: "https://velara.io/product",
  product_summary:
    "Velara Revenue OS is a real-time pipeline intelligence platform that eliminates CRM data rot, surfaces deal risk before it's fatal, and delivers in-call coaching signals that keep reps on message without post-call regret.",
  key_differentiators: [
    "Auto-captures deal activity from email and calendar — zero manual CRM updates",
    "Forecast accuracy within 4% guaranteed — backed by contractual SLA",
    "Live in 14 days flat — no implementation fees, no professional services required",
    "In-call coaching signals surfaced in real time, not post-call",
    "Native Salesforce and HubSpot bidirectional sync with no middleware",
  ],
};

const BASE_URL = process.argv[2];
if (!BASE_URL) {
  console.error("Usage: node scripts/stress-test.mjs <BASE_URL>");
  process.exit(1);
}

const ENDPOINT = `${BASE_URL}/api/generate`;

const TEST_CASES = [
  // ─── PRE-CALL RECON (3 cases) ──────────────────────────────────────────────
  {
    label: "Pre-Call Recon #1 — HubSpot / Warm & Interested / Gather Background Context",
    tool: "pre-call-recon",
    body: {
      toolId: "pre-call-recon",
      variableValues: { targetCompany: "HubSpot", targetPersona: "VP of Revenue Operations" },
      sliderValues: { "call-objective": 0, "prospect-posture": 0 },
    },
  },
  {
    label: "Pre-Call Recon #2 — Stripe / Skeptical & Guarded / Test Budget & Authority",
    tool: "pre-call-recon",
    body: {
      toolId: "pre-call-recon",
      variableValues: { targetCompany: "Stripe", targetPersona: "CFO" },
      sliderValues: { "call-objective": 2, "prospect-posture": 2 },
    },
  },
  {
    label: "Pre-Call Recon #3 — Series A startup / Forced to Attend / Challenge Their Status Quo",
    tool: "pre-call-recon",
    body: {
      toolId: "pre-call-recon",
      variableValues: { targetCompany: "Verdn (Series A fintech)", targetPersona: "Co-Founder & CEO" },
      sliderValues: { "call-objective": 3, "prospect-posture": 3 },
    },
  },

  // ─── OBJECTION DEFUSER (3 cases) ───────────────────────────────────────────
  {
    label: "Objection Defuser #1 — Too expensive / Empathize & Pivot / Buy Time, No Commitment",
    tool: "objection-defuser",
    body: {
      toolId: "objection-defuser",
      variableValues: {
        statedObjection: "You're too expensive — we can build this in-house",
        productValue: "3-week implementation vs. 9-month build cycle",
      },
      sliderValues: { "response-posture": 0, "next-step-aggression": 0 },
    },
  },
  {
    label: "Objection Defuser #2 — Bad timing / Stick to ROI / Offer Two Alternatives",
    tool: "objection-defuser",
    body: {
      toolId: "objection-defuser",
      variableValues: {
        statedObjection: "Now is not a good time — we just went through a reorg",
        productValue: "Cuts rep ramp time by 40%, works faster during transitions",
      },
      sliderValues: { "response-posture": 1, "next-step-aggression": 2 },
    },
  },
  {
    label: "Objection Defuser #3 — Needs committee approval / Push Back Directly / Push for Firm Commitment",
    tool: "objection-defuser",
    body: {
      toolId: "objection-defuser",
      variableValues: {
        statedObjection: "I need to take this to the committee before we can move",
        productValue: "We offer a 30-day pilot with a single signature",
      },
      sliderValues: { "response-posture": 3, "next-step-aggression": 3 },
    },
  },

  // ─── COMPETITOR BATTLECARD (3 cases) ───────────────────────────────────────
  {
    label: "Battlecard #1 — vs Salesforce / Drop Subtle Doubts / First Conversation",
    tool: "competitor-battlecard",
    body: {
      toolId: "competitor-battlecard",
      variableValues: {
        competitorName: "Salesforce",
        ourAdvantage: "No implementation fees, live in 3 weeks",
      },
      sliderValues: { "competitive-stance": 0, "conversation-stage": 0 },
    },
  },
  {
    label: "Battlecard #2 — vs Gong / Hit a Feature Gap / Building the Business Case",
    tool: "competitor-battlecard",
    body: {
      toolId: "competitor-battlecard",
      variableValues: {
        competitorName: "Gong",
        ourAdvantage: "Real-time coaching vs. post-call analysis — catches deals before they die",
      },
      sliderValues: { "competitive-stance": 2, "conversation-stage": 2 },
    },
  },
  {
    label: "Battlecard #3 — vs HubSpot / Go Head-to-Head / Final Vendor Selection",
    tool: "competitor-battlecard",
    body: {
      toolId: "competitor-battlecard",
      variableValues: {
        competitorName: "HubSpot CRM",
        ourAdvantage: "Native revenue intelligence — no third-party integrations needed",
      },
      sliderValues: { "competitive-stance": 3, "conversation-stage": 3 },
    },
  },

  // ─── COLD HOOK (3 cases) ────────────────────────────────────────────────────
  {
    label: "Cold Hook #1 — LinkedIn DM / Save Time / Just posted a thought leadership piece",
    tool: "cold-hook",
    body: {
      toolId: "cold-hook",
      variableValues: {
        prospectName: "Marcus Reid",
        triggerEvent: "Just posted a LinkedIn article on pipeline efficiency getting 8k likes",
      },
      sliderValues: { "outreach-channel": 0, "value-angle": 0 },
    },
  },
  {
    label: "Cold Hook #2 — Email — Casual / Cut Cost / Competitor just had a data breach",
    tool: "cold-hook",
    body: {
      toolId: "cold-hook",
      variableValues: {
        prospectName: "Priya Nair",
        triggerEvent: "Their current vendor (Outreach.io) just had a publicized security incident",
      },
      sliderValues: { "outreach-channel": 1, "value-angle": 1 },
    },
  },
  {
    label: "Cold Hook #3 — Email — C-Suite / Grow Revenue / Missed quarterly target",
    tool: "cold-hook",
    body: {
      toolId: "cold-hook",
      variableValues: {
        prospectName: "David Kowalski",
        triggerEvent: "Company missed Q3 ARR target by 18% — disclosed in earnings call",
      },
      sliderValues: { "outreach-channel": 3, "value-angle": 3 },
    },
  },

  {
    // D1 fabrication sentinel: sparse input with no numbers — the engine must NOT
    // invent a percentage, dollar figure, or headcount to fill the gap.
    label: "Cold Hook #4 — LinkedIn DM / Grow Revenue / Sparse trigger (D1 fabrication sentinel)",
    tool: "cold-hook",
    body: {
      toolId: "cold-hook",
      variableValues: {
        prospectName: "Jordan Mehta",
        triggerEvent: "Missed their last quarter",
      },
      sliderValues: { "outreach-channel": 0, "value-angle": 3 },
    },
  },

  // ─── FOLLOW-UP FORWARD (3 cases) ────────────────────────────────────────────
  {
    label: "Follow-Up Forward #1 — Skeptical / Department Manager / basic call notes",
    tool: "follow-up-forward",
    body: {
      toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Walked through the dashboard demo. Sarah asked about CRM integration. Team uses HubSpot.",
        biggestAha: "Their ops team spends 8 hours a week on manual pipeline updates",
      },
      sliderValues: { "buying-role": 1, "call-mood": 0 },  // Department Manager, Skeptical
    },
  },
  {
    label: "Follow-Up Forward #2 — Bought-In / VP & Director / detailed call notes",
    tool: "follow-up-forward",
    body: {
      toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Deep discovery. James was nodding throughout. Shared their Q2 forecast problem on screen. Wants a pilot in April.",
        biggestAha: "Forecast accuracy is down to 60% — they're missing targets because pipeline data is stale by the time it reaches the board",
      },
      sliderValues: { "buying-role": 2, "call-mood": 2 },  // VP / Director, Bought-In
    },
  },
  {
    label: "Follow-Up Forward #3 — Already Selling Internally / C-Suite / champion context",
    tool: "follow-up-forward",
    body: {
      toolId: "follow-up-forward",
      variableValues: {
        callNotes: "30-min call with CEO. He wants to send something to his CFO. Loves the 14-day implementation story.",
        biggestAha: "They lost a deal last quarter because the rep didn't flag deal risk — CEO blamed the CRM",
      },
      sliderValues: { "buying-role": 3, "call-mood": 3 },  // C-Suite, Already Selling Internally
    },
  },

  // ─── DEAL REVIVER (3 cases) ─────────────────────────────────────────────────
  {
    label: "Deal Reviver #1 — A Few Days quiet / New Data or Signal",
    tool: "deal-reviver",
    body: {
      toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Rachel at Meridian Analytics",
        wentCold: "She said she needed to loop in her VP of Sales before moving forward, then went quiet",
      },
      sliderValues: { "silence-duration": 0, "revival-angle": 0 },  // A Few Days, New Data or Signal
    },
  },
  {
    label: "Deal Reviver #2 — 1–3 Months quiet / Product or Feature Update",
    tool: "deal-reviver",
    body: {
      toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Ben at Cascade Logistics",
        wentCold: "Integration complexity was the blocker — they weren't sure the platform would sync with their ERP",
      },
      sliderValues: { "silence-duration": 2, "revival-angle": 1 },  // 1–3 Months, Product or Feature Update
    },
  },
  {
    label: "Deal Reviver #3 — 3+ Months Cold / The Last Try Email",
    tool: "deal-reviver",
    body: {
      toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Nina at Thornfield Capital",
        wentCold: "Budget freeze was cited in January — no response since",
      },
      sliderValues: { "silence-duration": 3, "revival-angle": 3 },  // 3+ Months / Cold, Last Try Email
    },
  },

  // ─── CFO PITCH (3 cases) ────────────────────────────────────────────────────
  {
    // Generic pain point — tests how engine handles thin input
    label: "CFO Pitch #1 — Generic pain / Save Labor Hours / Champion audience",
    tool: "cfo-pitch",
    body: {
      toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Our team spends too much time on manual data entry",
        annualCost: "$18,000/year",
      },
      sliderValues: { "financial-case": 0, "reader-audience": 0 },  // Save Labor Hours, Champion
    },
  },
  {
    // Specific pain with numbers — tests whether engine echos input numbers without fabricating more
    label: "CFO Pitch #2 — Specific pain with numbers / Cut Hard Costs / CFO Directly",
    tool: "cfo-pitch",
    body: {
      toolId: "cfo-pitch",
      variableValues: {
        painPoint: "4 ops analysts each spending 15 hours per week reconciling CRM data manually — roughly $200K in fully-loaded annual labor",
        annualCost: "$24,000/year",
      },
      sliderValues: { "financial-case": 2, "reader-audience": 1 },  // Cut Hard Costs, CFO Directly
    },
  },
  {
    label: "CFO Pitch #3 — Risk angle / Reduce Risk & Compliance / CEO & COO",
    tool: "cfo-pitch",
    body: {
      toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Inaccurate pipeline forecasts are causing us to miss board commitments — we were off by over 30% last quarter",
        annualCost: "$36,000/year",
      },
      sliderValues: { "financial-case": 3, "reader-audience": 2 },  // Reduce Risk / Compliance, CEO / COO
    },
  },
];

const TOTAL = TEST_CASES.length;

async function streamToString(response) {
  return response.text();
}

async function runCase(testCase, index) {
  const pad = String(index + 1).padStart(2, "0");
  process.stdout.write(`  [${pad}/${TOTAL}] ${testCase.label} ... `);

  const start = Date.now();
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-stress-test-key": process.env.STRESS_TEST_KEY ?? "stress-test-local-only",
      },
      body: JSON.stringify({ ...testCase.body, testProfile: TEST_PROFILE }),
    });

    if (!response.ok) {
      const text = await response.text();
      process.stdout.write(`FAILED (HTTP ${response.status})\n`);
      return {
        label: testCase.label, tool: testCase.tool, status: "FAILED",
        error: text, output: null, ms: Date.now() - start,
        inputTokens: null, outputTokens: null, cost: null,
      };
    }

    const rawOutput = await streamToString(response);
    const ms = Date.now() - start;

    // Extract token usage appended by route.ts for stress-test runs, then strip it.
    let inputTokens = null, outputTokens = null, cost = null;
    let output = rawOutput;
    const usageMatch = rawOutput.match(/\[STRESS_TEST_USAGE:(\{[^}]+\})\]/);
    if (usageMatch) {
      try {
        const usage = JSON.parse(usageMatch[1]);
        inputTokens = usage.inputTokens ?? null;
        outputTokens = usage.outputTokens ?? null;
        if (inputTokens != null && outputTokens != null) {
          cost = calcCost(inputTokens, outputTokens);
        }
      } catch { /* ignore parse errors */ }
      output = rawOutput.replace(/\n\[STRESS_TEST_USAGE:[^\]]+\]/, "");
    }

    const hasDrillDown = output.includes("## DRILL-DOWN OFFER");
    const hasGrounding = output.includes("## GROUNDING");
    const hasProfile   = output.includes("Velara");

    const tokenStr = inputTokens != null ? `, in=${inputTokens} out=${outputTokens} cost=$${cost.toFixed(4)}` : "";
    process.stdout.write(
      `OK (${ms}ms, drill-down=${hasDrillDown ? "✓" : "✗"}, grounding=${hasGrounding ? "✓" : "✗"}, profile=${hasProfile ? "✓" : "✗"}${tokenStr})\n`
    );

    return {
      label: testCase.label, tool: testCase.tool, status: "OK",
      output, ms, hasDrillDown, hasGrounding, hasProfile,
      inputTokens, outputTokens, cost,
    };
  } catch (err) {
    process.stdout.write(`ERROR\n`);
    return {
      label: testCase.label, tool: testCase.tool, status: "ERROR",
      error: String(err), output: null, ms: Date.now() - start,
      inputTokens: null, outputTokens: null, cost: null,
    };
  }
}

function buildCostSummary(results) {
  const okResults = results.filter((r) => r.status === "OK" && r.cost != null);
  if (okResults.length === 0) return "";

  const totalCost = okResults.reduce((s, r) => s + r.cost, 0);
  const totalInput = okResults.reduce((s, r) => s + r.inputTokens, 0);
  const totalOutput = okResults.reduce((s, r) => s + r.outputTokens, 0);

  const sortedCosts = [...okResults].sort((a, b) => a.cost - b.cost);
  const mid = Math.floor(sortedCosts.length / 2);
  const median = sortedCosts.length % 2 === 0
    ? (sortedCosts[mid - 1].cost + sortedCosts[mid].cost) / 2
    : sortedCosts[mid].cost;

  const maxCase = okResults.reduce((m, r) => r.cost > m.cost ? r : m, okResults[0]);
  const minCase = okResults.reduce((m, r) => r.cost < m.cost ? r : m, okResults[0]);

  // Per-tool breakdown
  const toolIds = [...new Set(TEST_CASES.map((t) => t.tool))];
  const toolRows = toolIds.map((toolId) => {
    const toolResults = okResults.filter((r) => r.tool === toolId);
    const tInput  = toolResults.reduce((s, r) => s + r.inputTokens, 0);
    const tOutput = toolResults.reduce((s, r) => s + r.outputTokens, 0);
    const tCost   = toolResults.reduce((s, r) => s + r.cost, 0);
    const name = TEST_CASES.find((t) => t.tool === toolId)?.label.split(" #")[0] ?? toolId;
    return `| ${name} | ${toolResults.length} | ${tInput.toLocaleString()} | ${tOutput.toLocaleString()} | $${tCost.toFixed(4)} |`;
  });

  let md = `## Cost Summary\n\n`;
  md += `*Pricing: \`claude-haiku-4-5-20251001\` — $${INPUT_PRICE_PER_MILLION}/1M input, $${OUTPUT_PRICE_PER_MILLION}/1M output (verify at https://www.anthropic.com/pricing)*\n\n`;
  md += `| Metric | Value |\n|---|---|\n`;
  md += `| Total run cost | $${totalCost.toFixed(4)} |\n`;
  md += `| Total input tokens | ${totalInput.toLocaleString()} |\n`;
  md += `| Total output tokens | ${totalOutput.toLocaleString()} |\n`;
  md += `| Median per-case cost | $${median.toFixed(4)} |\n`;
  md += `| Highest cost case | Case ${String(results.indexOf(maxCase) + 1).padStart(2, "0")} — ${maxCase.label.split(" — ")[0]} ($${maxCase.cost.toFixed(4)}) |\n`;
  md += `| Lowest cost case | Case ${String(results.indexOf(minCase) + 1).padStart(2, "0")} — ${minCase.label.split(" — ")[0]} ($${minCase.cost.toFixed(4)}) |\n\n`;

  md += `### Per-tool breakdown\n\n`;
  md += `| Tool | Cases | Input Tokens | Output Tokens | Total Cost |\n|---|---|---|---|---|\n`;
  md += toolRows.join("\n") + "\n";
  md += `| **Total** | **${okResults.length}** | **${totalInput.toLocaleString()}** | **${totalOutput.toLocaleString()}** | **$${totalCost.toFixed(4)}** |\n\n`;

  md += `---\n\n`;
  return md;
}

function buildMarkdown(results) {
  const timestamp = new Date().toISOString();
  const passed      = results.filter((r) => r.status === "OK").length;
  const drillDowns  = results.filter((r) => r.hasDrillDown).length;
  const groundings  = results.filter((r) => r.hasGrounding).length;
  const profileHits = results.filter((r) => r.hasProfile).length;

  let md = `# Arsenal Stress Test Results\n\n`;
  md += `**Run:** ${timestamp}  \n`;
  md += `**Endpoint:** ${ENDPOINT}  \n`;
  md += `**Passed:** ${passed}/${TOTAL}  \n`;
  md += `**DRILL-DOWN OFFER present (templated tail):** ${drillDowns}/${TOTAL}  \n`;
  md += `**GROUNDING present (engine output):** ${groundings}/${TOTAL}  \n`;
  md += `**Profile injected (Velara present):** ${profileHits}/${TOTAL}  \n\n`;
  md += `---\n\n`;

  // Cost summary first
  md += buildCostSummary(results);

  for (const [i, r] of results.entries()) {
    const pad = String(i + 1).padStart(2, "0");
    md += `## Case ${pad}: ${r.label}\n\n`;
    md += `**Status:** ${r.status} | **Time:** ${r.ms}ms`;
    if (r.status === "OK") {
      md += ` | **Drill-down:** ${r.hasDrillDown ? "✓" : "✗"} | **Grounding:** ${r.hasGrounding ? "✓" : "✗"} | **Profile:** ${r.hasProfile ? "✓" : "✗"}`;
    }
    if (r.inputTokens != null) {
      md += ` | **Input tokens:** ${r.inputTokens} | **Output tokens:** ${r.outputTokens} | **Cost:** $${r.cost.toFixed(4)}`;
    }
    md += `\n\n`;

    if (r.status === "OK") {
      md += `<details>\n<summary>Generated Master Prompt</summary>\n\n`;
      md += "```markdown\n" + r.output + "\n```\n\n";
      md += `</details>\n\n`;
    } else {
      md += `**Error:** ${r.error}\n\n`;
    }
    md += `---\n\n`;
  }

  return md;
}

async function main() {
  console.log(`\nArsenal Stress Test — ${TOTAL} cases`);
  console.log(`Target: ${ENDPOINT}\n`);

  const results = [];
  for (const [i, testCase] of TEST_CASES.entries()) {
    const result = await runCase(testCase, i);
    results.push(result);
  }

  const outPath = new URL("../arsenal-test-results.md", import.meta.url).pathname;
  fs.writeFileSync(outPath, buildMarkdown(results), "utf8");

  const passed      = results.filter((r) => r.status === "OK").length;
  const drillDowns  = results.filter((r) => r.hasDrillDown).length;
  const profileHits = results.filter((r) => r.hasProfile).length;
  const okWithCost  = results.filter((r) => r.status === "OK" && r.cost != null);
  const totalCost   = okWithCost.reduce((s, r) => s + r.cost, 0);

  console.log(`\nDone. ${passed}/${TOTAL} passed, ${drillDowns}/${TOTAL} with DRILL-DOWN OFFER, ${profileHits}/${TOTAL} with profile injection.`);
  if (okWithCost.length > 0) {
    console.log(`Total engine cost: $${totalCost.toFixed(4)} across ${okWithCost.length} cases.`);
  }
  console.log(`Results written to: arsenal-test-results.md`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
