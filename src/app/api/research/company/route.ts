import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { tavilySearch } from "@/lib/tavily";

/**
 * POST /api/research/company
 *
 * Step 1 of the onboarding wizard — company resolution.
 * User types a company name; we search and return up to 5 candidate matches
 * as "company cards" (name, homepage URL, short description, favicon).
 *
 * Body: { query: string }
 * Response: { results: CompanyCandidate[]; timedOut?: boolean }
 *
 * Target latency: < 2s.
 */

export interface CompanyCandidate {
  name: string;
  url: string; // normalized to root domain (protocol + hostname)
  description: string; // short snippet from Tavily
  faviconUrl: string;
}

// Hard time budget — if Tavily hangs we bail and surface the fallback input
const TIMEOUT_MS = 5000;

export async function POST(req: Request) {
  // Require auth — we don't let anonymous traffic run up Tavily usage
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
    const search = await tavilySearch(`${trimmed} company website`, {
      max_results: 8,
      search_depth: "basic",
      signal: controller.signal,
    });

    // Map, filter, dedupe by root domain
    const candidates: CompanyCandidate[] = [];
    const seenDomains = new Set<string>();

    for (const result of search.results) {
      const candidate = toCandidate(result);
      if (!candidate) continue;

      const domain = safeHostname(candidate.url);
      if (!domain || seenDomains.has(domain)) continue;
      seenDomains.add(domain);

      candidates.push(candidate);
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

function toCandidate(result: {
  title: string;
  url: string;
  content: string;
}): CompanyCandidate | null {
  try {
    const parsed = new URL(result.url);
    const path = parsed.pathname.replace(/\/$/, "");

    // Skip obvious article/blog/news URLs — we want homepages, not coverage
    if (path && /\/(blog|news|article|post|stories|category|tag|20\d\d)\b/i.test(path)) {
      return null;
    }

    const rootUrl = `${parsed.protocol}//${parsed.hostname}`;

    // Title cleanup: "Acme Corp | Industrial Sensors" → "Acme Corp"
    const rawTitle = (result.title ?? "").trim();
    const name = rawTitle.split(/\s+[|—–-]\s+/)[0]?.trim() || parsed.hostname;

    const description = (result.content ?? "").replace(/\s+/g, " ").trim().slice(0, 180);

    // Free favicon service — 128px is enough for our card size
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${parsed.hostname}&sz=128`;

    return { name, url: rootUrl, description, faviconUrl };
  } catch {
    return null;
  }
}

function safeHostname(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}
