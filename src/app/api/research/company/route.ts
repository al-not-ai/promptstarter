import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * POST /api/research/company
 *
 * Step 1 of the onboarding wizard — company resolution.
 * User types a company name; we search and return up to 5 candidate matches
 * as "company cards" (name, homepage URL, favicon).
 *
 * Body: { query: string }
 * Response: { results: CompanyCandidate[]; timedOut?: boolean }
 *
 * Powered by Logo.dev Brand Search — a dedicated brand index that returns
 * clean { name, domain } records without the Wikipedia/news noise of a
 * general web search.
 *
 * Target latency: < 1s.
 */

export interface CompanyCandidate {
  name: string;
  url: string; // normalized to root domain (protocol + hostname)
  description: string; // Logo.dev doesn't return descriptions — always ""
  faviconUrl: string;
}

// Logo.dev API — both keys come from the same Logo.dev account dashboard.
// LOGO_DEV_SECRET_KEY  (sk_...)  — server-side only, used as Bearer token
// NEXT_PUBLIC_LOGO_DEV_TOKEN (pk_...) — public key, safe to expose in CDN URLs
const LOGO_DEV_SEARCH = "https://api.logo.dev/search";
const LOGO_DEV_CDN = "https://img.logo.dev";

// Hard time budget — if Logo.dev hangs we bail and surface the fallback input
const TIMEOUT_MS = 5000;

export async function POST(req: Request) {
  // Require auth — don't let anonymous traffic hit the Logo.dev quota
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { query } = (await req.json()) as { query?: string };
  const trimmed = query?.trim() ?? "";
  if (!trimmed) return NextResponse.json({ results: [] });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(
      `${LOGO_DEV_SEARCH}?q=${encodeURIComponent(trimmed)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.LOGO_DEV_SECRET_KEY}`,
        },
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      console.error("Logo.dev search error:", res.status, await res.text());
      return NextResponse.json(
        { results: [], error: "Brand search failed" },
        { status: 500 }
      );
    }

    const logoDevResults = (await res.json()) as { name: string; domain: string }[];

    // Map, filter, dedupe by root domain (Logo.dev returns bare domains)
    const candidates: CompanyCandidate[] = [];
    const seenDomains = new Set<string>();

    for (const result of logoDevResults) {
      const domain = result.domain?.trim();
      if (!domain) continue;

      const normalized = domain.replace(/^www\./, "");
      if (seenDomains.has(normalized)) continue;
      seenDomains.add(normalized);

      const publicToken = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN ?? "";

      candidates.push({
        name: result.name?.trim() || normalized,
        url: `https://${domain}`,
        description: "", // Logo.dev doesn't return descriptions
        faviconUrl: `${LOGO_DEV_CDN}/${domain}?token=${publicToken}&size=128&format=png`,
      });

      if (candidates.length >= 5) break;
    }

    return NextResponse.json({ results: candidates });
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      return NextResponse.json({ results: [], timedOut: true });
    }
    console.error("Company search error:", err);
    return NextResponse.json(
      { results: [], error: "Search failed" },
      { status: 500 }
    );
  } finally {
    clearTimeout(timer);
  }
}
