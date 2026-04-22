/**
 * Tavily API client.
 *
 * Tavily provides two endpoints we use:
 *   - /search   web search with ranked results + snippets (300-800ms typical)
 *   - /extract  URL-to-clean-text extraction, no scraping (1-3s typical)
 *
 * Both are purpose-built for agent/LLM use and dramatically faster + cheaper
 * than running an agentic loop over Anthropic's web_search tool.
 *
 * Auth: Bearer TAVILY_API_KEY (server-side env var, never exposed to client).
 */

const TAVILY_BASE_URL = "https://api.tavily.com";

export interface TavilySearchResult {
  title: string;
  url: string;
  content: string;
  score: number;
  published_date: string | null;
  raw_content: string | null;
}

export interface TavilySearchResponse {
  query: string;
  answer: string | null;
  images: Array<{ url: string; description?: string }>;
  results: TavilySearchResult[];
  response_time: number;
}

export interface TavilyExtractResult {
  url: string;
  raw_content: string;
  images?: string[];
}

export interface TavilyExtractResponse {
  results: TavilyExtractResult[];
  failed_results: Array<{ url: string; error: string }>;
  response_time: number;
}

function authHeaders(): Record<string, string> {
  const key = process.env.TAVILY_API_KEY;
  if (!key) throw new Error("TAVILY_API_KEY is not set");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  };
}

/**
 * Search the web with Tavily.
 *
 * @param query The search query
 * @param opts.max_results Number of results (default 5)
 * @param opts.search_depth "basic" (faster, default) or "advanced"
 * @param opts.include_domains Restrict to these domains
 * @param opts.signal AbortSignal for request-level timeout
 */
export async function tavilySearch(
  query: string,
  opts: {
    max_results?: number;
    search_depth?: "basic" | "advanced";
    include_domains?: string[];
    signal?: AbortSignal;
  } = {}
): Promise<TavilySearchResponse> {
  const res = await fetch(`${TAVILY_BASE_URL}/search`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      query,
      search_depth: opts.search_depth ?? "basic",
      max_results: opts.max_results ?? 5,
      include_answer: false,
      include_images: true,
      include_image_descriptions: false,
      include_raw_content: false,
      include_domains: opts.include_domains,
    }),
    signal: opts.signal,
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Tavily search failed (${res.status}): ${body}`);
  }
  return (await res.json()) as TavilySearchResponse;
}

/**
 * Extract clean content from one or more URLs.
 *
 * @param urls URLs to extract (single string or array)
 * @param opts.extract_depth "basic" (default) or "advanced" (slower, more thorough)
 * @param opts.signal AbortSignal for request-level timeout
 */
export async function tavilyExtract(
  urls: string | string[],
  opts: {
    extract_depth?: "basic" | "advanced";
    signal?: AbortSignal;
  } = {}
): Promise<TavilyExtractResponse> {
  const urlList = Array.isArray(urls) ? urls : [urls];
  const res = await fetch(`${TAVILY_BASE_URL}/extract`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      urls: urlList,
      extract_depth: opts.extract_depth ?? "basic",
    }),
    signal: opts.signal,
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Tavily extract failed (${res.status}): ${body}`);
  }
  return (await res.json()) as TavilyExtractResponse;
}
