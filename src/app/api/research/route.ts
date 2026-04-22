import { NextResponse } from "next/server";

/**
 * POST /api/research  — DEPRECATED.
 *
 * The old single-shot SSE agentic research endpoint (Claude Sonnet +
 * web_search, 2–5min per run) has been replaced by the 3-step guided wizard:
 *
 *   POST /api/research/company    — company typeahead (Tavily search)
 *   POST /api/research/products   — product-group detection (Tavily + Haiku)
 *   POST /api/research/extract    — build profile from product page (Tavily + Haiku)
 *
 * This route remains as a 410 Gone so any stale client that still points
 * at it gets a clear error instead of a silent failure.
 *
 * TODO(delete): safe to delete this file once we're confident nothing stale
 * is calling it — check server logs, then remove the file.
 */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "This endpoint has been removed. The new onboarding wizard uses /api/research/{company,products,extract}.",
    },
    { status: 410 }
  );
}
