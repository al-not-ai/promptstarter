#!/usr/bin/env node
/**
 * Arsenal Stress Test — V2 (cycle-1 baseline)
 *
 * Expanded matrix: 7 tools × ~9 cases each = ~63 cases per run.
 * Cases are distributed across 3 profiles to expose profile-sensitivity:
 *   - Velara          (B2B SaaS — revenue intelligence)        : 5 cases per tool
 *   - Northwind       (Hardware — commercial combi ovens)       : 2 cases per tool
 *   - Aldermark       (Services — boutique strategy consulting) : 2 cases per tool
 *
 * Per tool the 5 Velara cases are deliberately differentiated:
 *   - 2 mid-range realistic (one across slider extremes)
 *   - 1 sparse / thin input (tests fallback behavior + fabrication discipline)
 *   - 1 ultra-rich input (tests whether engine actually leverages context)
 *   - 1 hostile / mismatch / awkward (tests grace under bad input)
 * Cold Hook keeps the D1 fabrication sentinel as one of its sparse cases.
 *
 * OUTPUTS (per run):
 *   docs/test-runs/<RUN_DIR>/_index.md             — overall pass/cost summary
 *   docs/test-runs/<RUN_DIR>/pre-call-recon.md     — one file per tool
 *   docs/test-runs/<RUN_DIR>/objection-defuser.md
 *   ... etc, one per tool. Each is sized to drop into a single Opus session.
 *
 * USAGE:
 *   node scripts/stress-test-v2.mjs http://localhost:3000
 *   STRESS_TEST_KEY=<key> node scripts/stress-test-v2.mjs http://localhost:3000
 *
 * NOTE: route.ts only honors the stress-test bypass when NODE_ENV !== "production",
 * so this must hit a dev / preview deploy, not the live Vercel project.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ── Pricing constants (claude-haiku-4-5-20251001) ─────────────────────────────
// Source: https://www.anthropic.com/pricing — verify before relying on these.
const INPUT_PRICE_PER_MILLION         = 0.80;  // USD per 1M uncached input tokens
const CACHE_READ_PRICE_PER_MILLION    = 0.08;  // USD per 1M cached read tokens (10% of normal)
const CACHE_WRITE_PRICE_PER_MILLION   = 1.00;  // USD per 1M cache-creation tokens (1.25× normal)
const OUTPUT_PRICE_PER_MILLION        = 4.00;  // USD per 1M output tokens

// Detailed cost: applies per-category pricing when the new fields are present.
// Falls back to the legacy all-input-at-uncached math when the API/route did
// not expose the breakdown (older runs, custom clients, etc.).
function calcCost({ inputTokens, outputTokens, cacheReadInputTokens, cacheCreationInputTokens, uncachedInputTokens }) {
  const out = (outputTokens ?? 0) / 1_000_000 * OUTPUT_PRICE_PER_MILLION;

  const hasBreakdown =
    uncachedInputTokens != null ||
    cacheReadInputTokens != null ||
    cacheCreationInputTokens != null;

  if (!hasBreakdown) {
    // Legacy fallback — treat all input as uncached.
    return (inputTokens ?? 0) / 1_000_000 * INPUT_PRICE_PER_MILLION + out;
  }

  const uncached = (uncachedInputTokens ?? 0) / 1_000_000 * INPUT_PRICE_PER_MILLION;
  const cacheRead = (cacheReadInputTokens ?? 0) / 1_000_000 * CACHE_READ_PRICE_PER_MILLION;
  const cacheWrite = (cacheCreationInputTokens ?? 0) / 1_000_000 * CACHE_WRITE_PRICE_PER_MILLION;
  return uncached + cacheRead + cacheWrite + out;
}

// ── Run directory (bump for cycle 2) ──────────────────────────────────────────
// Cycle 1: "2026-05-04"
// Cycle 2: "2026-05-04-cycle2"
const RUN_DIR = process.env.RUN_DIR ?? "2026-05-04";

// ── BASE_URL ──────────────────────────────────────────────────────────────────
const BASE_URL = process.argv[2];
if (!BASE_URL) {
  console.error("Usage: node scripts/stress-test-v2.mjs <BASE_URL>");
  console.error("Example: node scripts/stress-test-v2.mjs http://localhost:3000");
  process.exit(1);
}
const ENDPOINT = `${BASE_URL}/api/generate`;

// ── Three contrasting test profiles ───────────────────────────────────────────
const PROFILES = {
  velara: {
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
  },

  northwind: {
    company_name: "Northwind Commercial Kitchen",
    product_name: "Northwind XR-Series Combi Oven",
    company_url: "https://northwind-kitchen.com",
    product_url: "https://northwind-kitchen.com/xr-series",
    product_summary:
      "The Northwind XR-Series is a commercial combi oven engineered for high-volume foodservice operations. It combines convection, steam, and combination cooking modes in one unit, replacing up to four pieces of traditional equipment in less floor space, with a service network that delivers same-day on-site response across the continental US.",
    key_differentiators: [
      "30% lower energy draw per cooked pound vs. comparable Rational and Convotherm units — measured in NSF-certified field tests",
      "Replaces convection oven, steamer, holding cabinet, and proofer in one footprint — recovers ~14 sq ft of kitchen line",
      "Same-day on-site service nationwide — no factory-trained-tech bottleneck",
      "One-touch chef-programmable recipes — line staff trained in under 4 hours regardless of culinary background",
      "10-year sealed steam-generator warranty — comparable units warrant 3 years on the same component",
    ],
  },

  aldermark: {
    company_name: "Aldermark Advisory",
    product_name: "Aldermark 12-Week Operations Reset",
    company_url: "https://aldermark.com",
    product_url: "https://aldermark.com/operations-reset",
    product_summary:
      "The Aldermark 12-Week Operations Reset is a hands-on consulting engagement for mid-market companies whose operations are bleeding margin. Two senior partners embed with the client's leadership team, diagnose the three biggest cash leaks, and ship working fixes — not slide decks — by week 12. Every engagement ends with a documented playbook the client's team owns.",
    key_differentiators: [
      "Senior-only delivery — no junior consultants, no offshored work, no analyst-built decks",
      "Working fixes by week 12, not recommendations — every engagement ships at least three live operational changes",
      "Fixed-fee, success-aligned: 50% of fee held back until the client signs off on measurable margin recovery",
      "Sectors: PE-backed industrials, mid-market manufacturing, founder-led services firms — we don't take F500 corporate work",
      "We turn down ~70% of inquiries to maintain partner-level focus on every active client",
    ],
  },
};

// ── Test cases ─────────────────────────────────────────────────────────────────
// Convention: each case has { profile, label, tool, body }. profile is a key
// of PROFILES; the label is short-form for console output and section headers.
const TEST_CASES = [
  // ═════════════════════════════ PRE-CALL RECON ═════════════════════════════
  // Note: includesProfile is false for this tool — profile XML is NOT injected.
  // Profile only contributes the lightweight "Seller's product" line.
  {
    profile: "velara", tool: "pre-call-recon",
    label: "[V] Pre-Call Recon — HubSpot / VP RevOps / Background / Warm",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "HubSpot", targetPersona: "VP of Revenue Operations" },
      sliderValues: { "call-objective": 0, "prospect-posture": 0 } },
  },
  {
    profile: "velara", tool: "pre-call-recon",
    label: "[V] Pre-Call Recon — Stripe / CFO / Test Budget / Skeptical",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "Stripe", targetPersona: "CFO" },
      sliderValues: { "call-objective": 2, "prospect-posture": 2 } },
  },
  {
    profile: "velara", tool: "pre-call-recon",
    label: "[V] Pre-Call Recon — SPARSE — generic Acme/Director",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "Acme Corp", targetPersona: "Director" },
      sliderValues: { "call-objective": 1, "prospect-posture": 1 } },
  },
  {
    profile: "velara", tool: "pre-call-recon",
    label: "[V] Pre-Call Recon — RICH — Verdn (Series A fintech) / Co-Founder & CEO / Challenge / Forced",
    body: { toolId: "pre-call-recon",
      variableValues: {
        targetCompany: "Verdn (Series A fintech, recently raised $14M led by Index)",
        targetPersona: "Co-Founder & CEO",
      },
      sliderValues: { "call-objective": 3, "prospect-posture": 3 } },
  },
  {
    profile: "velara", tool: "pre-call-recon",
    label: "[V] Pre-Call Recon — MISMATCH — F500 enterprise on a mid-market product",
    body: { toolId: "pre-call-recon",
      variableValues: {
        targetCompany: "Walmart Stores Inc.",
        targetPersona: "VP of Sales Operations, Walmart Connect",
      },
      sliderValues: { "call-objective": 2, "prospect-posture": 2 } },
  },
  {
    profile: "northwind", tool: "pre-call-recon",
    label: "[N] Pre-Call Recon — Marriott Hotels / Director F&B / Find Pain / Neutral",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "Marriott International", targetPersona: "Director of F&B Operations, North America" },
      sliderValues: { "call-objective": 1, "prospect-posture": 1 } },
  },
  {
    profile: "northwind", tool: "pre-call-recon",
    label: "[N] Pre-Call Recon — Lark & Linden (3-restaurant indie group) / Owner-Chef / Challenge / Skeptical",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "Lark & Linden Restaurant Group (3 NYC locations)", targetPersona: "Owner-Chef" },
      sliderValues: { "call-objective": 3, "prospect-posture": 2 } },
  },
  {
    profile: "aldermark", tool: "pre-call-recon",
    label: "[A] Pre-Call Recon — Ridgeway Industrial (PE-backed) / CFO / Find Pain / Neutral",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "Ridgeway Industrial (PE-backed, $80M rev mid-market manufacturer)", targetPersona: "CFO" },
      sliderValues: { "call-objective": 1, "prospect-posture": 1 } },
  },
  {
    profile: "aldermark", tool: "pre-call-recon",
    label: "[A] Pre-Call Recon — Kessler Plumbing & HVAC (family-owned) / CEO / Test Budget / Forced",
    body: { toolId: "pre-call-recon",
      variableValues: { targetCompany: "Kessler Plumbing & HVAC (family-owned, ~120 employees)", targetPersona: "CEO (founder's son, recently took over)" },
      sliderValues: { "call-objective": 2, "prospect-posture": 3 } },
  },

  // ═════════════════════════════ OBJECTION DEFUSER ══════════════════════════
  {
    profile: "velara", tool: "objection-defuser",
    label: "[V] Objection — too expensive / build in-house / Empathize & Probe / Buy Time",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "You're too expensive — we can build this in-house",
        yourEdge: "3-week implementation vs. 9-month build cycle",
      },
      sliderValues: { "response-posture": 0, "next-step-aggression": 0 } },
  },
  {
    profile: "velara", tool: "objection-defuser",
    label: "[V] Objection — bad timing post-reorg / Stick to ROI / Two Alternatives",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "Now is not a good time — we just went through a reorg",
        yourEdge: "Cuts rep ramp time by 40%, works faster during transitions",
      },
      sliderValues: { "response-posture": 1, "next-step-aggression": 2 } },
  },
  {
    profile: "velara", tool: "objection-defuser",
    label: "[V] Objection — committee approval / Push Back / Firm Commitment",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "I need to take this to the committee before we can move",
        yourEdge: "We offer a 30-day pilot with a single signature",
      },
      sliderValues: { "response-posture": 2, "next-step-aggression": 3 } },
  },
  {
    profile: "velara", tool: "objection-defuser",
    label: "[V] Objection — SPARSE — \"not now\" / Empathize & Probe / Soft Agreement",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "Not now",
        yourEdge: "saves time",
      },
      sliderValues: { "response-posture": 0, "next-step-aggression": 1 } },
  },
  {
    profile: "velara", tool: "objection-defuser",
    label: "[V] Objection — HOSTILE — \"don't trust your numbers\" / Stick to ROI / Soft Agreement",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "I don't trust your numbers. Show me independent proof or this conversation is over.",
        yourEdge: "Forecast accuracy SLA backed by contract — auditable claims",
      },
      sliderValues: { "response-posture": 1, "next-step-aggression": 1 } },
  },
  {
    profile: "northwind", tool: "objection-defuser",
    label: "[N] Objection — competitor cheaper + longer warranty / Stick to ROI / Two Alternatives",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "Your unit costs almost double Convotherm's and they're offering a longer warranty",
        yourEdge: "30% lower energy bill plus 10-year sealed steam generator warranty pays back the price gap in under 18 months",
      },
      sliderValues: { "response-posture": 1, "next-step-aggression": 2 } },
  },
  {
    profile: "northwind", tool: "objection-defuser",
    label: "[N] Objection — \"already bought 12 Rationals 2yr ago, kitchen is full\" / Empathize & Probe / Buy Time",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "We bought 12 Rationals two years ago. The kitchens are full — there's no room and no budget to replace working equipment.",
        yourEdge: "XR-Series replaces 4 pieces of equipment per unit — frees floor space without replacing the Rationals",
      },
      sliderValues: { "response-posture": 0, "next-step-aggression": 0 } },
  },
  {
    profile: "aldermark", tool: "objection-defuser",
    label: "[A] Objection — \"tried McKinsey, got a deck\" / Push Back / Firm Commitment",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "We tried McKinsey's ops practice last year and got a 90-page deck. Why is this different?",
        yourEdge: "Working fixes shipped by week 12, not recommendations — 50% fee held back until margin recovery is signed off",
      },
      sliderValues: { "response-posture": 2, "next-step-aggression": 3 } },
  },
  {
    profile: "aldermark", tool: "objection-defuser",
    label: "[A] Objection — \"don't have leadership time to give\" / Empathize & Probe / Soft Agreement",
    body: { toolId: "objection-defuser",
      variableValues: {
        statedObjection: "We don't have 12 weeks of leadership time to give you. Everyone here is already underwater.",
        yourEdge: "We embed alongside the leadership team, not on top of them — we do the legwork and only pull leadership in for specific decisions",
      },
      sliderValues: { "response-posture": 0, "next-step-aggression": 1 } },
  },

  // ═════════════════════════════ COMPETITOR BATTLECARD ══════════════════════
  {
    profile: "velara", tool: "competitor-battlecard",
    label: "[V] Battlecard — vs Salesforce / Drop Subtle Doubts / First Convo",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "Salesforce", yourEdge: "No implementation fees, live in 14 days vs. 6-month rollout" },
      sliderValues: { "conversation-stage": 0 } },
  },
  {
    profile: "velara", tool: "competitor-battlecard",
    label: "[V] Battlecard — vs Gong / Hit Feature Gap / Building Business Case",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "Gong", yourEdge: "Real-time in-call coaching vs. post-call analysis" },
      sliderValues: { "conversation-stage": 2 } },
  },
  {
    profile: "velara", tool: "competitor-battlecard",
    label: "[V] Battlecard — vs HubSpot CRM / Go Head-to-Head / Final Selection",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "HubSpot CRM", yourEdge: "Native revenue intelligence — no third-party integrations needed" },
      sliderValues: { "conversation-stage": 3 } },
  },
  {
    profile: "velara", tool: "competitor-battlecard",
    label: "[V] Battlecard — SPARSE — vs \"Excel + HubSpot stack\" / Pivot to Business Value / Solution Discovery",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "Excel + HubSpot stack", yourEdge: "automation" },
      sliderValues: { "conversation-stage": 1 } },
  },
  {
    profile: "velara", tool: "competitor-battlecard",
    label: "[V] Battlecard — INCUMBENT — vs Outreach.io already deployed / Drop Subtle Doubts / Final Selection",
    body: { toolId: "competitor-battlecard",
      variableValues: {
        competitorName: "Outreach.io (already deployed for 18 months)",
        yourEdge: "Deal risk surfaced before it's fatal, not after — shifts from activity tracking to outcome intelligence",
      },
      sliderValues: { "conversation-stage": 3 } },
  },
  {
    profile: "northwind", tool: "competitor-battlecard",
    label: "[N] Battlecard — vs Rational AG / Pivot to Business Value / Building Business Case",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "Rational AG (iCombi Pro)", yourEdge: "30% lower energy draw and same-day nationwide service vs. waiting for a factory-trained tech" },
      sliderValues: { "conversation-stage": 2 } },
  },
  {
    profile: "northwind", tool: "competitor-battlecard",
    label: "[N] Battlecard — vs Convotherm / Hit Feature Gap / Solution Discovery",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "Convotherm", yourEdge: "Replaces 4 pieces of equipment in one footprint — recovers floor space they can't get back" },
      sliderValues: { "conversation-stage": 1 } },
  },
  {
    profile: "aldermark", tool: "competitor-battlecard",
    label: "[A] Battlecard — vs Deloitte / Drop Subtle Doubts / First Convo",
    body: { toolId: "competitor-battlecard",
      variableValues: { competitorName: "Deloitte (Operations Transformation practice)", yourEdge: "Senior-only delivery, working fixes by week 12, no junior analyst staffing" },
      sliderValues: { "conversation-stage": 0 } },
  },
  {
    profile: "aldermark", tool: "competitor-battlecard",
    label: "[A] Battlecard — vs in-house transformation lead / Pivot to Business Value / Building Business Case",
    body: { toolId: "competitor-battlecard",
      variableValues: {
        competitorName: "the client's existing in-house Transformation Lead",
        yourEdge: "Two senior partners with cross-industry pattern recognition the in-house lead can't get, with a 12-week shot clock",
      },
      sliderValues: { "conversation-stage": 2 } },
  },

  // ═════════════════════════════ COLD HOOK ═══════════════════════════════════
  {
    profile: "velara", tool: "cold-hook",
    label: "[V] Cold Hook — Marcus Reid / LinkedIn DM / Save Time / thought leadership trigger",
    body: { toolId: "cold-hook",
      variableValues: { prospectName: "Marcus Reid, VP RevOps", triggerEvent: "Just posted a LinkedIn article on pipeline efficiency that hit 8K reactions" },
      sliderValues: { "outreach-channel": 0, "value-angle": 0 } },
  },
  {
    profile: "velara", tool: "cold-hook",
    label: "[V] Cold Hook — Priya Nair / Email Casual / Save Time-Cut Cost /competitor breach trigger",
    body: { toolId: "cold-hook",
      variableValues: { prospectName: "Priya Nair, Head of GTM", triggerEvent: "Their current vendor (Outreach.io) just had a publicized security incident" },
      sliderValues: { "outreach-channel": 1, "value-angle": 0} },
  },
  {
    profile: "velara", tool: "cold-hook",
    label: "[V] Cold Hook — David Kowalski / Email C-Suite / Grow Revenue / missed Q3 by 18%",
    body: { toolId: "cold-hook",
      variableValues: { prospectName: "David Kowalski, Chief Revenue Officer", triggerEvent: "Company missed Q3 ARR target by 18% — disclosed in earnings call" },
      sliderValues: { "outreach-channel": 3, "value-angle": 2} },
  },
  {
    // D1 fabrication sentinel — deliberately sparse / no concrete numbers.
    // Engine MUST NOT invent percentages, dollar figures, or headcounts.
    profile: "velara", tool: "cold-hook",
    label: "[V] Cold Hook — D1 SENTINEL — Jordan Mehta / sparse trigger / DM / Grow Revenue",
    body: { toolId: "cold-hook",
      variableValues: { prospectName: "Jordan Mehta", triggerEvent: "Missed their last quarter" },
      sliderValues: { "outreach-channel": 0, "value-angle": 2} },
  },
  {
    profile: "velara", tool: "cold-hook",
    label: "[V] Cold Hook — RICH — Erin Park (Rampcheck) / Email Formal / Grow Revenue / specific All-Hands AMA trigger",
    body: { toolId: "cold-hook",
      variableValues: {
        prospectName: "Erin Park, VP of GTM Operations",
        triggerEvent: "At Rampcheck's most recent All-Hands AMA she said forecast accuracy at quarter-end was the team's biggest credibility hit with the board",
      },
      sliderValues: { "outreach-channel": 2, "value-angle": 2} },
  },
  {
    profile: "northwind", tool: "cold-hook",
    label: "[N] Cold Hook — Mark Vidal (Ascend Hotel Group) / Email Formal / Save Time-Cut Cost /14 new locations",
    body: { toolId: "cold-hook",
      variableValues: {
        prospectName: "Mark Vidal, Director of Culinary Operations, Ascend Hotel Group",
        triggerEvent: "Press release: opening 14 new locations across the US over the next 18 months",
      },
      sliderValues: { "outreach-channel": 2, "value-angle": 0} },
  },
  {
    profile: "northwind", tool: "cold-hook",
    label: "[N] Cold Hook — Chef Lila Okafor / LinkedIn DM / Save Time-Cut Cost /NYT energy feature",
    body: { toolId: "cold-hook",
      variableValues: {
        prospectName: "Chef Lila Okafor, owner-operator of three SoHo restaurants",
        triggerEvent: "Featured in a NYT piece last week on restaurants cutting energy costs without sacrificing menu",
      },
      sliderValues: { "outreach-channel": 0, "value-angle": 0} },
  },
  {
    profile: "aldermark", tool: "cold-hook",
    label: "[A] Cold Hook — Rachel Mendez (PE-backed CEO) / Email C-Suite / Save Time-Cut Cost /Q4 margin compression earnings call",
    body: { toolId: "cold-hook",
      variableValues: {
        prospectName: "Rachel Mendez, CEO of Ridgeway Industrial (PE-backed, ~$80M rev)",
        triggerEvent: "Disclosed Q4 margin compression on the most recent quarterly call to investors",
      },
      sliderValues: { "outreach-channel": 3, "value-angle": 0} },
  },
  {
    profile: "aldermark", tool: "cold-hook",
    label: "[A] Cold Hook — Tomas Becker (succession) / Email Casual / Reduce Risk",
    body: { toolId: "cold-hook",
      variableValues: {
        prospectName: "Tomas Becker, COO of Becker Logistics (family-owned, ~250 employees)",
        triggerEvent: "Recently took over operations from his father, who founded the company",
      },
      sliderValues: { "outreach-channel": 1, "value-angle": 1} },
  },

  // ═════════════════════════════ FOLLOW-UP FORWARD ═══════════════════════════
  {
    profile: "velara", tool: "follow-up-forward",
    label: "[V] Follow-Up — Sarah / Skeptical / Department Manager / basic notes",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Walked through the dashboard demo. Sarah asked about CRM integration. Team uses HubSpot.",
        biggestAha: "Their ops team spends 8 hours a week on manual pipeline updates",
      },
      sliderValues: { "buying-role": 1, "call-mood": 0 } },
  },
  {
    profile: "velara", tool: "follow-up-forward",
    label: "[V] Follow-Up — James / Bought-In / VP-Director / detailed notes",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Deep discovery. James was nodding throughout. Shared their Q2 forecast problem on screen. Wants a pilot in April.",
        biggestAha: "Forecast accuracy is down to 60% — they're missing targets because pipeline data is stale by the time it reaches the board",
      },
      sliderValues: { "buying-role": 2, "call-mood": 2 } },
  },
  {
    profile: "velara", tool: "follow-up-forward",
    label: "[V] Follow-Up — CEO / Already Selling Internally / C-Suite / champion-ready",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "30-min call with the CEO. He wants to send something to his CFO. Loves the 14-day implementation story.",
        biggestAha: "They lost a deal last quarter because the rep didn't flag deal risk — CEO blamed the CRM",
      },
      sliderValues: { "buying-role": 3, "call-mood": 3 } },
  },
  {
    profile: "velara", tool: "follow-up-forward",
    label: "[V] Follow-Up — SPARSE notes / Mildly Interested / Operational User",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Showed demo. Was on the call.",
        biggestAha: "They liked it",
      },
      sliderValues: { "buying-role": 0, "call-mood": 1 } },
  },
  {
    profile: "velara", tool: "follow-up-forward",
    label: "[V] Follow-Up — MISMATCH — Skeptical mood with rich notes",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "James was on the call but pushed back on every metric I cited. Said our forecast accuracy claim is 'marketing math' and asked for a customer reference. Took notes the whole time. Did not commit to next steps.",
        biggestAha: "He doesn't believe public-facing accuracy claims from any vendor and will only move forward with peer references",
      },
      sliderValues: { "buying-role": 2, "call-mood": 0 } },
  },
  {
    profile: "northwind", tool: "follow-up-forward",
    label: "[N] Follow-Up — Head Chef / Bought-In / Department Manager / kitchen demo notes",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "On-site kitchen demo. Cooked salmon, beef short rib, and proofed bread back-to-back. Chef Diego loved the one-touch programmability — said his line cooks could run it without him hovering. Energy meter reading was 28% below their current Rational unit during the demo.",
        biggestAha: "His morning prep is bottlenecked because the proofer is across the kitchen — XR-Series collapses the prep line into one station",
      },
      sliderValues: { "buying-role": 1, "call-mood": 2 } },
  },
  {
    profile: "northwind", tool: "follow-up-forward",
    label: "[N] Follow-Up — F&B Director / Mildly Interested / VP-Director",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Walked Karen through the spec sheet and the energy savings model. She was polite but kept comparing line-by-line to Convotherm's quote. Asked twice about service response times in tertiary markets.",
        biggestAha: "Service network coverage in their secondary-city locations is the unspoken risk concern, not equipment cost",
      },
      sliderValues: { "buying-role": 2, "call-mood": 1 } },
  },
  {
    profile: "aldermark", tool: "follow-up-forward",
    label: "[A] Follow-Up — CEO / Already Selling Internally / C-Suite / wants to brief board",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "60-min strategy call with CEO. He wants to take this to his board next month — asked us to put together a one-pager he can drop into the pre-read.",
        biggestAha: "Margin compression isn't a procurement problem — it's three legacy SOPs nobody on his team has the political capital to kill",
      },
      sliderValues: { "buying-role": 3, "call-mood": 3 } },
  },
  {
    profile: "aldermark", tool: "follow-up-forward",
    label: "[A] Follow-Up — COO / Skeptical / VP-Director / pricing pushback",
    body: { toolId: "follow-up-forward",
      variableValues: {
        callNotes: "Anna challenged the success-aligned fee structure. Said \"every consultant claims they're different.\" Asked for case studies in her exact industry (industrial fabrication).",
        biggestAha: "She's been burned by a prior consulting engagement that delivered nothing — the trust gap is the deal blocker, not the fee",
      },
      sliderValues: { "buying-role": 2, "call-mood": 0 } },
  },

  // ═════════════════════════════ DEAL REVIVER ════════════════════════════════
  {
    profile: "velara", tool: "deal-reviver",
    label: "[V] Deal Reviver — Rachel / A Few Days quiet / New Data",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Rachel at Meridian Analytics",
        wentCold: "She said she needed to loop in her VP of Sales before moving forward, then went quiet",
      },
      sliderValues: { "silence-duration": 0, "revival-angle": 0 } },
  },
  {
    profile: "velara", tool: "deal-reviver",
    label: "[V] Deal Reviver — Ben / 1-3 Months quiet / Product Update",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Ben at Cascade Logistics",
        wentCold: "Integration complexity was the blocker — they weren't sure the platform would sync with their ERP",
      },
      sliderValues: { "silence-duration": 2, "revival-angle": 1 } },
  },
  {
    profile: "velara", tool: "deal-reviver",
    label: "[V] Deal Reviver — Nina / 3+ Months Cold / Last Try Email",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Nina at Thornfield Capital",
        wentCold: "Budget freeze was cited in January — no response since",
      },
      sliderValues: { "silence-duration": 3, "revival-angle": 2} },
  },
  {
    profile: "velara", tool: "deal-reviver",
    label: "[V] Deal Reviver — SPARSE — minimal cold context",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Tom",
        wentCold: "got busy",
      },
      sliderValues: { "silence-duration": 1, "revival-angle": 0 } },
  },
  {
    profile: "velara", tool: "deal-reviver",
    label: "[V] Deal Reviver — 2-4 Weeks / Product Update",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Devon Patel, RevOps lead at Stellaris",
        wentCold: "Said the platform looked great but the RevOps lead's manager was on PTO and they couldn't move without sign-off",
      },
      sliderValues: { "silence-duration": 1, "revival-angle": 1} },
  },
  {
    profile: "northwind", tool: "deal-reviver",
    label: "[N] Deal Reviver — Hotel chain / 1-3 Months / New Data",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Sara, VP F&B at Stratton Hotel Group (8 properties)",
        wentCold: "Kitchen renovation project got pushed from Q1 to Q3 — she said timing was the only blocker, not fit",
      },
      sliderValues: { "silence-duration": 2, "revival-angle": 0 } },
  },
  {
    profile: "northwind", tool: "deal-reviver",
    label: "[N] Deal Reviver — Lost to Rational / 3+ Months / Last Try",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Diego, Executive Chef at a 4-restaurant Bay Area group",
        wentCold: "They went with Rational 6 months ago. Diego said off-the-record he was disappointed in the service response on a recent breakdown.",
      },
      sliderValues: { "silence-duration": 3, "revival-angle": 2} },
  },
  {
    profile: "aldermark", tool: "deal-reviver",
    label: "[A] Deal Reviver — Almost-yes / 2-4 Weeks / Product Update",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Greg, CEO of Helmsdale Foundry (PE-backed industrial)",
        wentCold: "We were one signature away. His PE sponsor pushed a portfolio-wide priority that ate his Q1 leadership bandwidth.",
      },
      sliderValues: { "silence-duration": 1, "revival-angle": 1 } },
  },
  {
    profile: "aldermark", tool: "deal-reviver",
    label: "[A] Deal Reviver — New CFO arrived / 3+ Months / Product Update",
    body: { toolId: "deal-reviver",
      variableValues: {
        prospectCompany: "Linda, COO of a $40M family-owned services business",
        wentCold: "The deal stalled when they hired a new CFO who started reviewing all outside engagements 3 months ago",
      },
      sliderValues: { "silence-duration": 3, "revival-angle": 1} },
  },

  // ═════════════════════════════ CFO PITCH ═══════════════════════════════════
  {
    profile: "velara", tool: "cfo-pitch",
    label: "[V] CFO Pitch — generic pain / Save Labor Hours / Champion",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Our team spends too much time on manual data entry",
        annualCost: "$18,000/year",
      },
      sliderValues: { "financial-case": 0, "reader-audience": 0 } },
  },
  {
    profile: "velara", tool: "cfo-pitch",
    label: "[V] CFO Pitch — specific pain w/ numbers / Cut Hard Costs / CFO Directly",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "4 ops analysts each spending 15 hours per week reconciling CRM data manually — roughly $200K in fully-loaded annual labor",
        annualCost: "$24,000/year",
      },
      sliderValues: { "financial-case": 2, "reader-audience": 1 } },
  },
  {
    profile: "velara", tool: "cfo-pitch",
    label: "[V] CFO Pitch — risk angle / Reduce Risk / CEO/COO",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Inaccurate pipeline forecasts caused us to miss board commitments — off by over 30% last quarter",
        annualCost: "$36,000/year",
      },
      sliderValues: { "financial-case": 3, "reader-audience": 2 } },
  },
  {
    profile: "velara", tool: "cfo-pitch",
    label: "[V] CFO Pitch — SPARSE — pain with no numbers / Save Labor Hours / Champion",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Manual stuff is killing us",
        annualCost: "$20,000/year",
      },
      sliderValues: { "financial-case": 0, "reader-audience": 0 } },
  },
  {
    profile: "velara", tool: "cfo-pitch",
    label: "[V] CFO Pitch — Speed Up Revenue / CFO Directly / SLA-tied deal",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "We just won an 18-month enterprise deal that requires us to commit to a forecast accuracy SLA in our master agreement — current process can't hit that bar",
        annualCost: "$48,000/year",
      },
      sliderValues: { "financial-case": 1, "reader-audience": 1 } },
  },
  {
    profile: "northwind", tool: "cfo-pitch",
    label: "[N] CFO Pitch — energy savings / Cut Hard Costs / CFO Directly",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Our four highest-volume kitchens are running 14-year-old convection ovens and steamers with utility bills averaging $14K/month per location",
        annualCost: "$22,000/unit one-time + $1,800/unit/yr service",
      },
      sliderValues: { "financial-case": 2, "reader-audience": 1 } },
  },
  {
    profile: "northwind", tool: "cfo-pitch",
    label: "[N] CFO Pitch — downtime risk / Reduce Risk / CEO-COO",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "We had 3 unplanned kitchen closures last year because our incumbent vendor's service tech took 4-6 days to dispatch — each closure cost us roughly $40K in lost revenue per location",
        annualCost: "$22,000/unit one-time + $1,800/unit/yr service",
      },
      sliderValues: { "financial-case": 3, "reader-audience": 2} },
  },
  {
    profile: "aldermark", tool: "cfo-pitch",
    label: "[A] CFO Pitch — leadership-time framing / Save Labor Hours / Champion",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Our SLT has spent 18 months trying to fix our procurement-to-payment cycle internally with no measurable progress",
        annualCost: "$280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)",
      },
      sliderValues: { "financial-case": 0, "reader-audience": 0 } },
  },
  {
    profile: "aldermark", tool: "cfo-pitch",
    label: "[A] CFO Pitch — margin recovery time-to-value / Speed Up Revenue / CEO/COO",
    body: { toolId: "cfo-pitch",
      variableValues: {
        painPoint: "Gross margin has compressed 6 points over 24 months and we don't know where the leak is",
        annualCost: "$280,000 (12-week engagement, fixed-fee, 50% success-aligned holdback)",
      },
      sliderValues: { "financial-case": 1, "reader-audience": 2 } },
  },
];

const TOTAL = TEST_CASES.length;

// ── HTTP runner ────────────────────────────────────────────────────────────────
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
      body: JSON.stringify({ ...testCase.body, testProfile: PROFILES[testCase.profile] }),
    });

    if (!response.ok) {
      const text = await response.text();
      process.stdout.write(`FAILED (HTTP ${response.status})\n`);
      return {
        ...testCase, status: "FAILED", error: text, output: null, ms: Date.now() - start,
        inputTokens: null, outputTokens: null, cost: null,
      };
    }

    const rawOutput = await response.text();
    const ms = Date.now() - start;

    let inputTokens = null, outputTokens = null, cost = null;
    let cacheReadInputTokens = null, cacheCreationInputTokens = null, uncachedInputTokens = null;
    let output = rawOutput;
    const usageMatch = rawOutput.match(/\[STRESS_TEST_USAGE:(\{[^}]+\})\]/);
    if (usageMatch) {
      try {
        const usage = JSON.parse(usageMatch[1]);
        inputTokens = usage.inputTokens ?? null;
        outputTokens = usage.outputTokens ?? null;
        cacheReadInputTokens = usage.cacheReadInputTokens ?? null;
        cacheCreationInputTokens = usage.cacheCreationInputTokens ?? null;
        uncachedInputTokens = usage.uncachedInputTokens ?? null;
        if (inputTokens != null && outputTokens != null) {
          cost = calcCost({
            inputTokens, outputTokens,
            cacheReadInputTokens, cacheCreationInputTokens, uncachedInputTokens,
          });
        }
      } catch { /* ignore */ }
      output = rawOutput.replace(/\n\[STRESS_TEST_USAGE:[^\]]+\]/, "");
    }

    const profileMarker = PROFILES[testCase.profile].company_name;
    const hasDrillDown = output.includes("## DRILL-DOWN OFFER");
    const hasGrounding = output.includes("## GROUNDING");
    const hasProfile   = output.includes(profileMarker);

    const cacheStr = cacheReadInputTokens != null
      ? ` (cache r=${cacheReadInputTokens} w=${cacheCreationInputTokens ?? 0})`
      : "";
    const tokenStr = inputTokens != null ? `, in=${inputTokens}${cacheStr} out=${outputTokens} $${cost.toFixed(4)}` : "";
    process.stdout.write(`OK (${ms}ms${tokenStr})\n`);

    return {
      ...testCase, status: "OK",
      output, ms, hasDrillDown, hasGrounding, hasProfile,
      inputTokens, outputTokens, cost,
      cacheReadInputTokens, cacheCreationInputTokens, uncachedInputTokens,
    };
  } catch (err) {
    process.stdout.write(`ERROR\n`);
    return {
      ...testCase, status: "ERROR", error: String(err), output: null, ms: Date.now() - start,
      inputTokens: null, outputTokens: null, cost: null,
    };
  }
}

// ── Markdown writers ───────────────────────────────────────────────────────────
function buildToolFile(toolId, results, runDir) {
  const toolResults = results.filter((r) => r.tool === toolId);
  const ok = toolResults.filter((r) => r.status === "OK");
  const totalCost = ok.reduce((s, r) => s + (r.cost ?? 0), 0);
  const totalIn = ok.reduce((s, r) => s + (r.inputTokens ?? 0), 0);
  const totalOut = ok.reduce((s, r) => s + (r.outputTokens ?? 0), 0);

  let md = `# ${toolId} — stress test results\n\n`;
  md += `**Run:** ${runDir}  \n`;
  md += `**Cases:** ${toolResults.length} (${ok.length} OK)  \n`;
  md += `**Tokens:** ${totalIn.toLocaleString()} in / ${totalOut.toLocaleString()} out  \n`;
  md += `**Engine cost (this tool):** $${totalCost.toFixed(4)}  \n\n`;
  md += `---\n\n`;

  for (const r of toolResults) {
    const profileName = PROFILES[r.profile].product_name;
    md += `## ${r.label}\n\n`;
    md += `**Profile:** ${profileName}  \n`;
    md += `**Inputs:**\n\n`;
    md += "```json\n" + JSON.stringify(r.body, null, 2) + "\n```\n\n";
    md += `**Status:** ${r.status} | **Time:** ${r.ms}ms`;
    if (r.status === "OK") {
      md += ` | **Drill-down:** ${r.hasDrillDown ? "✓" : "✗"} | **Grounding:** ${r.hasGrounding ? "✓" : "✗"} | **Profile:** ${r.hasProfile ? "✓" : "✗"}`;
    }
    if (r.inputTokens != null) {
      const cacheDetail = r.cacheReadInputTokens != null
        ? ` (read=${r.cacheReadInputTokens}, write=${r.cacheCreationInputTokens ?? 0})`
        : "";
      md += ` | **In:** ${r.inputTokens}${cacheDetail} | **Out:** ${r.outputTokens} | **Cost:** $${r.cost.toFixed(4)}`;
    }
    md += `\n\n`;

    if (r.status === "OK") {
      md += `**Generated Master Prompt:**\n\n`;
      md += "```markdown\n" + r.output + "\n```\n\n";
    } else {
      md += `**Error:** ${r.error}\n\n`;
    }
    md += `---\n\n`;
  }
  return md;
}

function buildIndex(results, runDir) {
  const ok = results.filter((r) => r.status === "OK");
  const totalCost = ok.reduce((s, r) => s + (r.cost ?? 0), 0);
  const totalIn = ok.reduce((s, r) => s + (r.inputTokens ?? 0), 0);
  const totalOut = ok.reduce((s, r) => s + (r.outputTokens ?? 0), 0);
  const totalCacheRead   = ok.reduce((s, r) => s + (r.cacheReadInputTokens ?? 0), 0);
  const totalCacheWrite  = ok.reduce((s, r) => s + (r.cacheCreationInputTokens ?? 0), 0);
  const totalUncachedIn  = ok.reduce((s, r) => s + (r.uncachedInputTokens ?? 0), 0);
  const hasCacheBreakdown = ok.some(
    (r) => r.cacheReadInputTokens != null || r.cacheCreationInputTokens != null || r.uncachedInputTokens != null
  );
  const cacheHitRatio = totalIn > 0 ? totalCacheRead / totalIn : 0;

  const toolIds = [...new Set(TEST_CASES.map((t) => t.tool))];
  const profileKeys = [...new Set(TEST_CASES.map((t) => t.profile))];

  let md = `# Arsenal Stress Test — ${runDir}\n\n`;
  md += `**Run:** ${new Date().toISOString()}  \n`;
  md += `**Endpoint:** ${ENDPOINT}  \n`;
  md += `**Cases:** ${ok.length}/${TOTAL} OK  \n`;
  md += `**Tokens:** ${totalIn.toLocaleString()} in / ${totalOut.toLocaleString()} out  \n`;
  if (hasCacheBreakdown) {
    md += `**Input breakdown:** ${totalUncachedIn.toLocaleString()} uncached / ${totalCacheRead.toLocaleString()} cache-read / ${totalCacheWrite.toLocaleString()} cache-write  \n`;
    md += `**Cache hit ratio (read / total input):** ${(cacheHitRatio * 100).toFixed(1)}%  \n`;
  }
  md += `**Engine cost:** $${totalCost.toFixed(4)}  \n`;
  if (ok.length > 0) {
    md += `**Cost per case (avg):** $${(totalCost / ok.length).toFixed(4)}  \n`;
  }
  md += `\n*Pricing: claude-haiku-4-5-20251001 — $${INPUT_PRICE_PER_MILLION}/1M uncached, $${CACHE_READ_PRICE_PER_MILLION}/1M cache-read, $${CACHE_WRITE_PRICE_PER_MILLION}/1M cache-write, $${OUTPUT_PRICE_PER_MILLION}/1M out*\n\n`;
  md += `---\n\n`;

  md += `## Per-tool breakdown\n\n`;
  md += `| Tool | Cases | Tokens (in/out) | Cost | File |\n|---|---|---|---|---|\n`;
  for (const tid of toolIds) {
    const tr = ok.filter((r) => r.tool === tid);
    const tIn = tr.reduce((s, r) => s + (r.inputTokens ?? 0), 0);
    const tOut = tr.reduce((s, r) => s + (r.outputTokens ?? 0), 0);
    const tCost = tr.reduce((s, r) => s + (r.cost ?? 0), 0);
    md += `| ${tid} | ${tr.length} | ${tIn.toLocaleString()} / ${tOut.toLocaleString()} | $${tCost.toFixed(4)} | [open](./${tid}.md) |\n`;
  }
  md += `| **Total** | **${ok.length}** | **${totalIn.toLocaleString()} / ${totalOut.toLocaleString()}** | **$${totalCost.toFixed(4)}** |  |\n\n`;

  md += `## Per-profile breakdown\n\n`;
  md += `| Profile | Cases | Tokens (in/out) | Cost |\n|---|---|---|---|\n`;
  for (const pk of profileKeys) {
    const pr = ok.filter((r) => r.profile === pk);
    const pIn = pr.reduce((s, r) => s + (r.inputTokens ?? 0), 0);
    const pOut = pr.reduce((s, r) => s + (r.outputTokens ?? 0), 0);
    const pCost = pr.reduce((s, r) => s + (r.cost ?? 0), 0);
    md += `| ${PROFILES[pk].product_name} | ${pr.length} | ${pIn.toLocaleString()} / ${pOut.toLocaleString()} | $${pCost.toFixed(4)} |\n`;
  }
  md += `\n`;

  md += `## Compliance scoreboard\n\n`;
  const drill = ok.filter((r) => r.hasDrillDown).length;
  const ground = ok.filter((r) => r.hasGrounding).length;
  const prof = ok.filter((r) => r.hasProfile).length;
  md += `- DRILL-DOWN OFFER present: **${drill}/${ok.length}**\n`;
  md += `- GROUNDING present: **${ground}/${ok.length}**\n`;
  md += `- Profile name surfaced in output: **${prof}/${ok.length}**\n\n`;

  const failed = results.filter((r) => r.status !== "OK");
  if (failed.length) {
    md += `## Failures\n\n`;
    for (const f of failed) md += `- **${f.label}** — ${f.status} — ${f.error?.slice(0, 200)}\n`;
    md += `\n`;
  }

  return md;
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nArsenal Stress Test V2 — ${TOTAL} cases`);
  console.log(`Target:  ${ENDPOINT}`);
  console.log(`Run dir: docs/test-runs/${RUN_DIR}/\n`);

  const results = [];
  for (const [i, tc] of TEST_CASES.entries()) {
    results.push(await runCase(tc, i));
  }

  const __filename = fileURLToPath(import.meta.url);
  const projectRoot = path.dirname(path.dirname(__filename));
  const outDir = path.join(projectRoot, "docs", "test-runs", RUN_DIR);
  fs.mkdirSync(outDir, { recursive: true });

  // Write per-tool files
  const toolIds = [...new Set(TEST_CASES.map((t) => t.tool))];
  for (const tid of toolIds) {
    fs.writeFileSync(path.join(outDir, `${tid}.md`), buildToolFile(tid, results, RUN_DIR), "utf8");
  }

  // Write index
  fs.writeFileSync(path.join(outDir, `_index.md`), buildIndex(results, RUN_DIR), "utf8");

  const ok = results.filter((r) => r.status === "OK");
  const totalCost = ok.reduce((s, r) => s + (r.cost ?? 0), 0);
  console.log(`\nDone. ${ok.length}/${TOTAL} OK. Engine cost: $${totalCost.toFixed(4)}.`);
  console.log(`Wrote ${toolIds.length} per-tool files + _index.md → ${outDir}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
