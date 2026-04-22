import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";
import { tavilyExtract } from "@/lib/tavily";
import type { ProductProfile } from "@/lib/types/profile";

/**
 * POST /api/research/extract
 *
 * Step 3 of the onboarding wizard — the profile build.
 * Given a product (or product-group) page URL + company context, fetches
 * the page with Tavily and has Haiku extract the four user-facing fields.
 * Persists the new profile row to Supabase and returns it to the client.
 *
 * Body: {
 *   productUrl: string;
 *   companyName: string;
 *   companyUrl?: string;
 *   productGroupName?: string;  // hint from Step 2 picker
 * }
 * Response: { profile: ProductProfile }  on success
 *           { error: string }            on failure
 *
 * Target latency: 4-6s.
 */

// Generous overall timeout — Tavily extract can take a moment on large pages
const TIMEOUT_MS = 15_000;

const anthropic = new Anthropic();

interface ExtractInput {
  productUrl: string;
  companyName: string;
  companyUrl?: string;
  productGroupName?: string;
}

interface ExtractedFields {
  product_name: string;
  product_summary: string;
  key_differentiators: string[];
}

const SYSTEM_PROMPT = `You extract a lean Product Profile from a product (or product-group) page for PromptStarter.ai, a B2B sales tool. A sales rep will use this profile to generate tactical sales prompts (cold emails, objection handlers, battlecards) which they will paste into a downstream AI (ChatGPT/Claude). Your job is to capture the *constant* anchor facts about what the rep sells — not live competitive intel, not per-call specifics like tone or target buyer.

Produce EXACTLY three fields:

1. "product_name" — the specific product or product-line name as the vendor brands it (1–6 words, no company prefix unless branded that way, e.g. "IV3 Vision System" or "Laser Sensors"). If a user-selected product group name was provided, prefer matching it.

2. "product_summary" — ONE sentence (max 25 words) stating what the product does and who it's for. Fact-dense, no fluff. Example: "A no-code vision sensor that inspects part presence, position, and appearance on manufacturing lines without a PC."

3. "key_differentiators" — 2 to 3 short phrases (each 3–10 words) on what makes this product stand out. Extract from the page; do not invent. Prefer concrete technical/functional advantages over vague marketing claims. Example: ["Setup in under 10 minutes", "No PC required", "Built-in AI defect detection"].

Rules:
- Ground everything in the page content. Do NOT add claims the page doesn't support.
- Keep product_name free of the company name unless the brand does (e.g. "Salesforce CRM" is fine because that's how they brand it; "Apple iPhone" is fine; "Acme's widget maker" is not).
- Output strict JSON, no preamble, no code fences.

Output schema: {"product_name": "...", "product_summary": "...", "key_differentiators": ["...", "...", "..."]}`;

export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const body = (await req.json()) as ExtractInput;
  const productUrl = body.productUrl?.trim();
  const companyName = body.companyName?.trim();
  const companyUrl = body.companyUrl?.trim();
  const productGroupName = body.productGroupName?.trim();

  if (!productUrl || !companyName) {
    return NextResponse.json(
      { error: "productUrl and companyName are required" },
      { status: 400 }
    );
  }

  // Is this the rep's first profile? If so, it becomes default.
  const { count } = await supabase
    .from("product_profiles")
    .select("id", { count: "exact", head: true })
    .is("deleted_at", null)
    .eq("user_id", user.id);
  const isFirst = (count ?? 0) === 0;

  // Insert placeholder row in "researching" state so we always have a row
  // even if the extract call later fails (easier to surface + retry from UI).
  const { data: placeholder, error: insertErr } = await supabase
    .from("product_profiles")
    .insert({
      user_id: user.id,
      company_name: companyName,
      company_url: companyUrl ?? null,
      product_name: productGroupName || companyName, // overwritten below
      product_url: productUrl,
      research_status: "researching",
      is_default: isFirst,
    })
    .select()
    .single();

  if (insertErr || !placeholder) {
    console.error("Profile insert error:", insertErr);
    return NextResponse.json(
      { error: "Failed to create profile" },
      { status: 500 }
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    // ── Tavily: pull clean content from the product page ────────────────────
    const extract = await tavilyExtract(productUrl, {
      extract_depth: "basic",
      signal: controller.signal,
    });

    const first = extract.results[0];
    if (!first?.raw_content) {
      await markFailed(supabase, placeholder.id);
      return NextResponse.json(
        { error: "Could not read the product page" },
        { status: 502 }
      );
    }

    const content = first.raw_content.slice(0, 8_000);

    // ── Haiku: structured extraction ────────────────────────────────────────
    const response = await anthropic.messages.create(
      {
        model: "claude-haiku-4-5",
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: [
              `Company: ${companyName}`,
              companyUrl ? `Company URL: ${companyUrl}` : null,
              productGroupName
                ? `User-selected product group: ${productGroupName}`
                : null,
              `Product page URL: ${productUrl}`,
              "",
              "Product page content:",
              "",
              content,
            ]
              .filter(Boolean)
              .join("\n"),
          },
        ],
      },
      { signal: controller.signal }
    );

    const text = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    const cleaned = text
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();

    let fields: ExtractedFields;
    try {
      const parsed = JSON.parse(cleaned) as Partial<ExtractedFields>;
      fields = {
        product_name:
          (typeof parsed.product_name === "string" && parsed.product_name.trim()) ||
          productGroupName ||
          companyName,
        product_summary:
          typeof parsed.product_summary === "string"
            ? parsed.product_summary.trim()
            : "",
        key_differentiators: Array.isArray(parsed.key_differentiators)
          ? parsed.key_differentiators
              .filter((d): d is string => typeof d === "string" && d.trim().length > 0)
              .slice(0, 3)
          : [],
      };
    } catch {
      await markFailed(supabase, placeholder.id);
      return NextResponse.json(
        { error: "Failed to parse extraction output" },
        { status: 502 }
      );
    }

    // ── Persist the fields ──────────────────────────────────────────────────
    const { data: updated, error: updateErr } = await supabase
      .from("product_profiles")
      .update({
        product_name: fields.product_name,
        product_summary: fields.product_summary || null,
        key_differentiators: fields.key_differentiators,
        research_status: "ready",
      })
      .eq("id", placeholder.id)
      .select()
      .single();

    if (updateErr || !updated) {
      console.error("Profile update error:", updateErr);
      return NextResponse.json(
        { error: "Failed to save profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile: updated as ProductProfile });
  } catch (err) {
    await markFailed(supabase, placeholder.id);
    if ((err as Error).name === "AbortError") {
      return NextResponse.json(
        { error: "Research timed out — please try again" },
        { status: 504 }
      );
    }
    console.error("Extract error:", err);
    return NextResponse.json(
      { error: "Research failed" },
      { status: 500 }
    );
  } finally {
    clearTimeout(timer);
  }
}

async function markFailed(
  supabase: Awaited<ReturnType<typeof createClient>>,
  profileId: string
) {
  await supabase
    .from("product_profiles")
    .update({ research_status: "failed" })
    .eq("id", profileId);
}
