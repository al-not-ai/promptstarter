import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";
import { tavilyExtract } from "@/lib/tavily";

/**
 * POST /api/research/products
 *
 * Step 2 of the onboarding wizard — product group detection.
 * Given a company homepage URL, extract the content and ask Haiku to list
 * the top-level product lines / product groups the company sells.
 *
 * Body: { companyUrl: string }
 * Response: { productGroups: ProductGroup[]; timedOut?: boolean }
 *
 * Target latency: 3-5s.
 *
 * If we can't detect clean groups (generic homepage, single-product company,
 * timeout), we return an empty array and the UI falls back to a URL-paste
 * input for the product page.
 */

export interface ProductGroup {
  name: string;
  description?: string;
}

const TIMEOUT_MS = 12_000;
const anthropic = new Anthropic();

const SYSTEM_PROMPT = `You extract the top-level product lines (or product groups) a company sells, from their homepage content. This is for a B2B sales tool where a rep needs to pick which of their company's products they sell.

Guidelines:
- Return at most 8 product groups.
- Prefer product CATEGORIES over individual SKUs (e.g. "Laser Sensors" not "IV3 Vision System").
- Each name is 1–4 words, how the company itself brands it.
- Do NOT invent products — only list what's actually visible on the page.
- If the page is a generic marketing / about page with no clear product structure, return an empty list.
- Description is a 1-sentence (<= 15 words) summary of what that product line does, if clear from the page. Omit if unclear.

Output strict JSON, no preamble, no code fences:
{"productGroups": [{"name": "...", "description": "..."}]}`;

export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { companyUrl } = (await req.json()) as { companyUrl?: string };
  const trimmed = companyUrl?.trim() ?? "";
  if (!trimmed) return NextResponse.json({ productGroups: [] });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const extract = await tavilyExtract(trimmed, {
      extract_depth: "basic",
      signal: controller.signal,
    });

    const first = extract.results[0];
    if (!first?.raw_content) {
      return NextResponse.json({ productGroups: [] });
    }

    // Cap content to keep the Haiku call cheap/fast
    const content = first.raw_content.slice(0, 8_000);

    const response = await anthropic.messages.create(
      {
        model: "claude-haiku-4-5",
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: `Company URL: ${trimmed}\n\nHomepage content:\n\n${content}`,
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

    try {
      const parsed = JSON.parse(cleaned) as {
        productGroups?: ProductGroup[];
      };
      const groups = (parsed.productGroups ?? [])
        .filter((g) => g && typeof g.name === "string" && g.name.trim())
        .slice(0, 8);
      return NextResponse.json({ productGroups: groups });
    } catch {
      // Haiku returned non-JSON (or empty) — treat as "no groups detected"
      return NextResponse.json({ productGroups: [] });
    }
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      return NextResponse.json({ productGroups: [], timedOut: true });
    }
    console.error("Product groups error:", err);
    return NextResponse.json(
      { productGroups: [], error: "Detection failed" },
      { status: 500 }
    );
  } finally {
    clearTimeout(timer);
  }
}
