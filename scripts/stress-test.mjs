#!/usr/bin/env node
/**
 * Arsenal Stress Test — 12 cases (3 per tool)
 * Usage: node scripts/stress-test.mjs <BASE_URL>
 * Example: node scripts/stress-test.mjs https://promptstarter-ai.vercel.app
 *          node scripts/stress-test.mjs http://localhost:3000
 */

import fs from "fs";

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
    label: "Pre-Call Recon #1 — HubSpot / Warm inbound / Soft discovery",
    body: {
      toolId: "pre-call-recon",
      variableValues: { targetCompany: "HubSpot", targetPersona: "VP of Revenue Operations" },
      sliderValues: { "call-objective": 0, "prospect-posture": 0 },
    },
  },
  {
    label: "Pre-Call Recon #2 — Stripe / Skeptical CFO / Authority hunt",
    body: {
      toolId: "pre-call-recon",
      variableValues: { targetCompany: "Stripe", targetPersona: "CFO" },
      sliderValues: { "call-objective": 2, "prospect-posture": 2 },
    },
  },
  {
    label: "Pre-Call Recon #3 — Series A startup / Hostile founder / Hypothesis pitch",
    body: {
      toolId: "pre-call-recon",
      variableValues: { targetCompany: "Verdn (Series A fintech)", targetPersona: "Co-Founder & CEO" },
      sliderValues: { "call-objective": 3, "prospect-posture": 3 },
    },
  },

  // ─── OBJECTION DEFUSER (3 cases) ───────────────────────────────────────────
  {
    label: "Objection Defuser #1 — Too expensive / Empathic / No ask",
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
    label: "Objection Defuser #2 — Bad timing / ROI-focused / Alternative choice close",
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
    label: "Objection Defuser #3 — Needs committee approval / Direct / Hard close",
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
    label: "Battlecard #1 — vs Salesforce / Subtle trap-setting / Early discovery",
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
    label: "Battlecard #2 — vs Gong / Strategic differentiation / Business case",
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
    label: "Battlecard #3 — vs HubSpot / Direct head-to-head / Final selection",
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
    label: "Cold Hook #1 — LinkedIn DM / Ego angle / Just posted a thought leadership piece",
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
    label: "Cold Hook #2 — Casual email / Efficiency angle / Competitor just had a data breach",
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
    label: "Cold Hook #3 — Executive multi-thread / Revenue angle / Missed quarterly target",
    body: {
      toolId: "cold-hook",
      variableValues: {
        prospectName: "David Kowalski",
        triggerEvent: "Company missed Q3 ARR target by 18% — disclosed in earnings call",
      },
      sliderValues: { "outreach-channel": 3, "value-angle": 3 },
    },
  },
];

async function streamToString(response) {
  // response.text() is more reliable than manual ReadableStream consumption
  // on Node.js v24+ where undici's stream handling can terminate early.
  return response.text();
}

async function runCase(testCase, index) {
  const pad = String(index + 1).padStart(2, "0");
  process.stdout.write(`  [${pad}/12] ${testCase.label} ... `);

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
      return { label: testCase.label, status: "FAILED", error: text, output: null, ms: Date.now() - start };
    }

    const output = await streamToString(response);
    const ms = Date.now() - start;
    const hasKickoff = output.includes("INTERACTIVE KICKOFF");
    const hasProfile = output.includes("Velara");
    process.stdout.write(`OK (${ms}ms, kickoff=${hasKickoff ? "✓" : "✗"}, profile=${hasProfile ? "✓" : "✗"})\n`);
    return { label: testCase.label, status: "OK", output, ms, hasKickoff, hasProfile };
  } catch (err) {
    process.stdout.write(`ERROR\n`);
    return { label: testCase.label, status: "ERROR", error: String(err), output: null, ms: Date.now() - start };
  }
}

function buildMarkdown(results) {
  const timestamp = new Date().toISOString();
  const passed = results.filter((r) => r.status === "OK").length;
  const kickoffs = results.filter((r) => r.hasKickoff).length;
  const profileHits = results.filter((r) => r.hasProfile).length;

  let md = `# Arsenal Stress Test Results\n\n`;
  md += `**Run:** ${timestamp}  \n`;
  md += `**Endpoint:** ${ENDPOINT}  \n`;
  md += `**Passed:** ${passed}/12  \n`;
  md += `**Interactive Kickoff present:** ${kickoffs}/12  \n`;
  md += `**Profile injected (Velara present):** ${profileHits}/12  \n\n`;
  md += `---\n\n`;

  for (const [i, r] of results.entries()) {
    const pad = String(i + 1).padStart(2, "0");
    md += `## Case ${pad}: ${r.label}\n\n`;
    md += `**Status:** ${r.status} | **Time:** ${r.ms}ms`;
    if (r.status === "OK") md += ` | **Kickoff:** ${r.hasKickoff ? "✓ Present" : "✗ Missing"} | **Profile:** ${r.hasProfile ? "✓ Present" : "✗ Missing"}`;
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
  console.log(`\nArsenal Stress Test — 12 cases`);
  console.log(`Target: ${ENDPOINT}\n`);

  const results = [];
  for (const [i, testCase] of TEST_CASES.entries()) {
    const result = await runCase(testCase, i);
    results.push(result);
  }

  const outPath = new URL("../arsenal-test-results.md", import.meta.url).pathname;
  fs.writeFileSync(outPath, buildMarkdown(results), "utf8");

  const passed = results.filter((r) => r.status === "OK").length;
  const kickoffs = results.filter((r) => r.hasKickoff).length;
  const profileHits = results.filter((r) => r.hasProfile).length;
  console.log(`\nDone. ${passed}/12 passed, ${kickoffs}/12 with kickoff section, ${profileHits}/12 with profile injection.`);
  console.log(`Results written to: arsenal-test-results.md`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
