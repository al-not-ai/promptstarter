# Product Profiles: an opinionated architectural spec

PromptStarter.ai lives or dies on one illusion: that the prompts it generates feel **pre-researched by a colleague, not assembled by a bot**. Product Profiles are the load-bearing wall of that illusion. They are the persistent substrate that lets a cold email or outbound prompt reference the prospect's Series B, the rep's own product's real differentiator, and a named proof point — without the rep touching a single form field.

This spec is written for a developer who wants to ship in a week. Every decision is picked, not listed. Where the research surfaced a genuine tradeoff, the losing option is named and buried.

---

## 1. Database schema

### Design philosophy

A Product Profile is **mostly-stable background context about one product a seller sells**. The signal-to-noise ratio of what to persist is governed by one question: *"Will this be the same across 100 generations?"* If yes, Constant. If it changes per email, Variable (and belongs in the tool invocation, not the profile).

The most common schema mistake here is to make the profile a kitchen sink — dumping persona, industry, and deal context into it because the onboarding wizard asked for them. **Personas, industries, and deal contexts are Variables.** They change every time the rep writes something. What stays constant is the product itself, its positioning, and the handful of sales-enablement artifacts a rep would normally keep in a Notion doc they never open.

### Constants vs. Variables, decided

| Field | Constant or Variable | Why |
|---|---|---|
| `company_name`, `company_url` | **Constant** | Identity. Used to seed research and appear in signatures. |
| `product_name`, `one_liner` | **Constant** | The two strings that appear in nearly every asset. |
| `core_value_prop` | **Constant** | Command of the Message's "Positive Business Outcome" — rarely changes. |
| `key_differentiators` (array) | **Constant** | The 3–5 things that separate you from competitors. Stable for quarters. |
| `proof_points` (JSONB array) | **Constant** | Case studies, logos, metrics. Add cadence is monthly, not per-email. |
| `primary_use_cases` (array) | **Constant** | The 2–4 named use cases. Stable. |
| `target_market_segments` (array) | **Constant** | "Series B–D fintech," "mid-market manufacturing." Persona is Variable, *segment* is Constant — this is a subtle but crucial distinction. A segment is who your product is built for; a persona is who you're writing to today. |
| `competitors` (array) | **Constant** | Named competitors for Challenger-style disarming. |
| `objection_handlers` (JSONB) | **Constant** | `{objection: response}` map. Updates at the quarterly-review cadence. |
| `tone_of_voice` | **Constant** | "direct, dry, senior-engineer" vs. "warm, empathetic, educational." |
| `founder_story` / `origin` | **Constant** | Used sparingly but high-trust when it appears. |
| `integrations` (array) | **Constant** | Often referenced in emails ("native Salesforce sync"). |
| `technical_category` | **Constant** | "Revenue intelligence platform." Orients buyers. |
| `pricing_model` (nullable, public only) | **Constant** | Only if public — many won't fill this. |
| *Target persona* | **Variable** | Changes per email. Passed at tool-invocation time. |
| *Target industry* | **Variable** | Varies per prospect. |
| *Deal context, trigger event, prior outreach* | **Variable** | Per-generation. |

### SQL DDL

This is the full schema. It's opinionated: JSONB for the two fields where structure genuinely varies (`proof_points`, `objection_handlers`), discrete columns for everything else, RLS on every table, partial unique index for the "one default per user" invariant, soft-delete via `deleted_at`, `updated_at` via the `moddatetime` extension, and a separate `profile_sources` table to make AI research transparent.

```sql
-- Extensions
create extension if not exists pgcrypto;
create extension if not exists moddatetime schema extensions;

-- =========================================================
-- product_profiles
-- =========================================================
create table public.product_profiles (
  id                       uuid primary key default gen_random_uuid(),
  user_id                  uuid not null references auth.users(id) on delete cascade,

  -- Identity
  company_name             text not null,
  company_url              text,
  product_name             text not null,
  technical_category       text,                -- "Revenue intelligence platform"

  -- Positioning (the Command-of-the-Message layer)
  one_liner                text,                -- <=140 chars; hard-capped in the app layer
  core_value_prop          text,                -- The PBO, in prose
  tone_of_voice            text,                -- "direct, dry, senior-engineer"
  founder_story            text,

  -- Arrays — discrete because we ALWAYS iterate the whole list in prompts
  key_differentiators      text[] not null default '{}',
  primary_use_cases        text[] not null default '{}',
  target_market_segments   text[] not null default '{}',
  competitors              text[] not null default '{}',
  integrations             text[] not null default '{}',

  -- JSONB where shape is genuinely variable
  proof_points             jsonb not null default '[]'::jsonb,
      -- [{ "type": "case_study"|"logo"|"metric",
      --    "label": "Acme saved 30% on CAC",
      --    "detail": "...", "url": "https://..." }]
  objection_handlers       jsonb not null default '[]'::jsonb,
      -- [{ "objection": "too expensive",
      --    "response": "...the ROI math..." }]

  pricing_model            text,                -- nullable; often not public

  -- UX / multiplicity
  is_default               boolean not null default false,

  -- Research provenance
  research_status          text not null default 'draft'
      check (research_status in ('draft','researching','ready','failed','user_edited')),
  research_confidence      numeric(3,2)         -- 0.00–1.00, null if never researched
      check (research_confidence is null
             or (research_confidence >= 0 and research_confidence <= 1)),

  -- Versioning & timestamps
  version                  int not null default 1,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now(),
  deleted_at               timestamptz
);

-- Auto-touch updated_at
create trigger product_profiles_moddatetime
  before update on public.product_profiles
  for each row execute procedure extensions.moddatetime(updated_at);

-- One default profile per user (partial unique index — the idiomatic pattern)
create unique index product_profiles_one_default_per_user
  on public.product_profiles (user_id)
  where is_default = true and deleted_at is null;

-- Hot-path indexes
create index product_profiles_user_active_idx
  on public.product_profiles (user_id)
  where deleted_at is null;

create index product_profiles_user_updated_idx
  on public.product_profiles (user_id, updated_at desc)
  where deleted_at is null;

-- Optional GIN for proof_points search (cheap; enables "find a proof point by keyword")
create index product_profiles_proof_points_gin
  on public.product_profiles using gin (proof_points jsonb_path_ops);

-- =========================================================
-- profile_sources — research citations for transparency
-- =========================================================
create table public.profile_sources (
  id              uuid primary key default gen_random_uuid(),
  profile_id      uuid not null references public.product_profiles(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  url             text not null,
  title           text,
  source_type     text not null check (source_type in
                    ('homepage','g2','capterra','linkedin','press','funding',
                     'competitor_compare','case_study','pricing','other')),
  excerpt         text,                          -- the ~200-char snippet that backed a claim
  fields_derived  text[] not null default '{}',  -- which profile fields this cite backs
  fetched_at      timestamptz not null default now(),
  created_at      timestamptz not null default now()
);

create index profile_sources_profile_idx
  on public.profile_sources (profile_id);

-- =========================================================
-- RLS
-- =========================================================
alter table public.product_profiles enable row level security;
alter table public.profile_sources  enable row level security;

-- product_profiles: four explicit policies, all scoped TO authenticated,
-- all wrap auth.uid() in a subselect for initPlan caching.
create policy "profiles_select_own_active"
  on public.product_profiles for select to authenticated
  using ( (select auth.uid()) = user_id and deleted_at is null );

create policy "profiles_insert_own"
  on public.product_profiles for insert to authenticated
  with check ( (select auth.uid()) = user_id );

create policy "profiles_update_own"
  on public.product_profiles for update to authenticated
  using  ( (select auth.uid()) = user_id )
  with check ( (select auth.uid()) = user_id );

-- DELETE policy exists only for hard-delete paths (admin). Everyday delete
-- is a soft-delete via UPDATE deleted_at.
create policy "profiles_delete_own"
  on public.product_profiles for delete to authenticated
  using ( (select auth.uid()) = user_id );

-- profile_sources: piggyback on user_id (denormalized for RLS perf — no join needed)
create policy "sources_select_own" on public.profile_sources for select to authenticated
  using ( (select auth.uid()) = user_id );
create policy "sources_insert_own" on public.profile_sources for insert to authenticated
  with check ( (select auth.uid()) = user_id );
create policy "sources_delete_own" on public.profile_sources for delete to authenticated
  using ( (select auth.uid()) = user_id );
```

### Justifications for the non-obvious choices

**JSONB only where structure genuinely varies.** `proof_points` and `objection_handlers` have real shape variance (different proof types, different fields) and benefit from GIN indexing if we ever search them. Everything else — differentiators, use cases, competitors, integrations — is a flat list of strings that the prompt layer iterates linearly. Using `text[]` keeps the schema readable, typed, and trivially queryable without `->`/`->>` gymnastics. Hybrid beats pure JSONB here; the JSON-blob-as-schema pattern is what you reach for when you *don't know* the shape, and we do.

**Denormalized `user_id` on `profile_sources`.** The alternative is enforcing RLS via a join back to `product_profiles`. That join runs once per row on every SELECT, and Postgres's planner will not reliably hoist it. Denormalizing `user_id` lets RLS use the same cached `(select auth.uid())` initPlan as the parent table and adds ~16 bytes per row.

**Soft delete via `deleted_at` embedded in RLS.** The SELECT policy filters `deleted_at is null`, which means every standard query is automatically scoped to active rows without app code remembering the predicate. The partial unique index on `is_default` also carries `deleted_at is null` so a soft-deleted default doesn't block a new one.

**`is_default` not `is_primary`.** "Default" is the correct word: it communicates *"what we'll use if you don't pick"*, which is exactly the semantic for the single-product seller. "Primary" implies a hierarchy, which doesn't exist.

**Version as a simple integer, no history table in v1.** Profiles change at the cadence of product-marketing updates (weeks to months). An audit trail is tempting but premature; when a user asks "what changed?", they want a diff, not a timeline. Ship the integer, add a `product_profile_versions` history table via trigger if and when a user actually asks.

**`research_confidence` as numeric(3,2), not a JSONB blob of per-field confidences.** A single overall score is what the UI renders ("High confidence" / "Needs review"). Per-field confidence is a nice-to-have that lives in `profile_sources.excerpt` implicitly — if a field has sources, it's confident; if not, it's not.

---

## 2. AI-agent research logic

### The two architectures, head-to-head

**(A) Simple sequential pipeline:** a fixed chain — `search → fetch top N → extract per source → synthesize JSON → persist`. No model-in-the-loop routing. Each step is a code path, not a decision.

**(B) Agentic loop:** one Claude call with `web_search`, `web_fetch`, and a structured `submit_profile` tool. Claude decides what to search, when to fetch, when to stop, and emits the profile as a final tool call. Adaptive thinking enabled; server-side tools mean no client-side loop for search/fetch.

| Axis | Sequential pipeline | Agentic loop |
|---|---|---|
| Latency | 15–25s, narrow variance | 20–60s, heavy-tailed |
| Cost per profile | ~$0.04–0.08 | ~$0.10–0.25, tail to $0.60 |
| Determinism | Same company → same queries | Different valid paths each run |
| Debuggability | Step logs, easy | Requires full trajectory capture |
| Quality on easy cases | Great | Great (marginally better) |
| Quality on edge cases (ambiguous name, stealth co, rebrand) | **Poor** — can't reroute | **Strong** — reroutes naturally |
| Failure mode | Wrong company silently researched | Runs long, occasionally loops |
| Citations | Hand-wired | Native from `web_search`/`web_fetch` |

**Verdict: ship the agentic loop as the only path.** The sequential pipeline looks appealing for cost/latency but its quality cliff on ambiguous names ("Apollo," "Linear," "Notion" before Notion) is exactly where a sales rep's trust is most fragile. A pipeline that confidently fills a profile for *Apollo GraphQL* when the user meant *Apollo.io* is a worse outcome than a 45-second agent run that asks a clarifying question. Anthropic's own guidance — "agents are the better option when flexibility and model-driven decision-making are needed" — applies here, because the inputs (arbitrary company names from arbitrary B2B segments) are exactly the unpredictable space workflows handle badly.

The pipeline is still a useful **mental model** for the *system prompt we give the agent* (start broad, then narrow, then cross-reference) — but don't build it as code paths.

### Model choice, cost envelope, and server-side tools

- **Model:** `claude-sonnet-4-6` is the default. It's ~$3/$15 per M tokens, handles tool-use loops well, and with adaptive thinking covers 95% of research jobs. Escalate to `claude-opus-4-7` only when a user explicitly hits a "Deep Research" button (paid-tier upsell) or when confidence after the first loop is below 0.5.
- **Server-side tools:** use `web_search_20260209` (dynamic filtering via code execution; $10 per 1,000 searches) plus `web_fetch_20260209` (free when paired with web_search). Citations come back natively — we don't rewrite them.
- **Adaptive thinking:** `thinking: { type: "adaptive", effort: "medium" }`. Research benefits from a scratchpad between tool calls; medium effort is the right cost/quality point for Sonnet.
- **Prompt caching:** the system prompt and tool definitions are identical across every research job. Mark both with `cache_control: { type: "ephemeral", ttl: "1h" }`. Saves ~90% on that slice after the first call of the hour.

### Tool definitions

Three tools: the two Anthropic-hosted ones, and one client-side `submit_profile` tool that doubles as the stop condition (via Vercel AI SDK's `hasToolCall` or a manual check on `stop_reason`).

```ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const profileSchema = {
  type: "object",
  properties: {
    resolved_company: {
      type: "object",
      properties: {
        name: { type: "string" },
        url: { type: "string" },
        disambiguation_note: {
          type: "string",
          description:
            "If the input was ambiguous (e.g. 'Apollo'), explain which entity you resolved to and why."
        }
      },
      required: ["name", "url"]
    },
    one_liner: { type: "string", maxLength: 140 },
    core_value_prop: { type: "string" },
    technical_category: { type: "string" },
    key_differentiators: {
      type: "array", items: { type: "string" }, maxItems: 5
    },
    primary_use_cases: {
      type: "array", items: { type: "string" }, maxItems: 4
    },
    target_market_segments: {
      type: "array", items: { type: "string" }, maxItems: 4
    },
    competitors: { type: "array", items: { type: "string" }, maxItems: 5 },
    integrations: { type: "array", items: { type: "string" }, maxItems: 10 },
    proof_points: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: { enum: ["case_study", "logo", "metric"] },
          label: { type: "string" },
          detail: { type: "string" },
          url: { type: "string" }
        },
        required: ["type", "label"]
      },
      maxItems: 6
    },
    objection_handlers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          objection: { type: "string" },
          response: { type: "string" }
        },
        required: ["objection", "response"]
      },
      maxItems: 4
    },
    tone_of_voice: { type: "string" },
    founder_story: { type: "string" },
    pricing_model: { type: ["string", "null"] },
    overall_confidence: { type: "number", minimum: 0, maximum: 1 },
    needs_user_confirmation: {
      type: "boolean",
      description:
        "True if ambiguous name, stealth company, or low-signal result. If true, Company Name resolution is presented to user for approval before persisting."
    },
    notes_for_user: { type: "string" }
  },
  required: [
    "resolved_company", "one_liner", "core_value_prop",
    "overall_confidence", "needs_user_confirmation"
  ]
};

const tools: Anthropic.Tool[] = [
  { type: "web_search_20260209", name: "web_search", max_uses: 12 } as any,
  { type: "web_fetch_20260209",  name: "web_fetch",  max_uses: 8,
    citations: { enabled: true } } as any,
  {
    name: "submit_profile",
    description:
      "Emit the finalized product profile. Call this EXACTLY ONCE when you have " +
      "completed research or when you have determined the company is ambiguous / stealth " +
      "and need user input. Setting needs_user_confirmation=true is valid and expected " +
      "for ambiguous cases.",
    input_schema: profileSchema,
    cache_control: { type: "ephemeral" }
  }
];
```

### System prompt (the research brief)

Claude is a new hire. Treat it like one: explicit objective, bounded search recipe, source-quality heuristics, stop conditions, and an output contract. XML tags because Claude was trained on them.

```ts
const SYSTEM_PROMPT = `
You are a B2B product research analyst for PromptStarter.ai. Your single job
is to build a Product Profile for one company/product given a name and optional URL.

<objective>
Produce a profile that a B2B sales rep can use to generate credible, non-generic
outbound emails. Every field must be defensible from cited sources. Never invent
claims about a company. If you cannot confirm a field, leave it empty rather than
guess.
</objective>

<search_recipe>
Always run these searches in this order. Stop early only if you have high confidence.
1. "{company} homepage"                       -- marketing positioning
2. "{company} site:g2.com" OR "site:capterra.com"  -- customer voice, category
3. "{company} site:linkedin.com/company"      -- category, size, tagline
4. "{company} funding" OR "{company} Series"  -- momentum / credibility
5. "{company} vs" (competitor comparisons)    -- differentiators, competitors
6. "{company} case study" OR "customer story" -- proof points
7. "{company} pricing"                        -- pricing model (only if public)
Fetch: homepage, top 1 G2 page, top 1 case study page, 1 press release. Prefer
fetching to relying on search snippets for core claims.
</search_recipe>

<source_priority>
Homepage = marketing spin (useful for one_liner, positioning).
G2/Capterra reviews = real customer voice (useful for pain points, differentiators).
LinkedIn company page = stable category/segment (useful for technical_category).
Press/funding = momentum and credibility (useful for proof_points).
Competitor compare pages (yours or theirs) = competitors list and differentiators.
When sources disagree, prefer more recent + more specific + higher authority.
Surface unresolved conflicts in notes_for_user rather than collapsing them silently.
</source_priority>

<disambiguation>
If the company name matches more than one plausible entity (e.g. "Apollo" could be
Apollo.io, Apollo GraphQL, or NASA's Apollo program), DO NOT pick arbitrarily.
Run one clarifying web_search ("{name} company B2B SaaS"). If still ambiguous,
set needs_user_confirmation=true, fill resolved_company with the single most
likely match, explain alternatives in disambiguation_note, and submit.
</disambiguation>

<stealth_or_sparse>
If the company has almost no web footprint, fill only what you can confirm
(likely just company_name, maybe company_url, maybe founder_story from a
LinkedIn post), set overall_confidence < 0.4, set needs_user_confirmation=true,
and ask the user to paste their own value prop in notes_for_user.
</stealth_or_sparse>

<rebrand>
If you find press releases announcing a rebrand, use the NEW name everywhere.
Note the old name in disambiguation_note.
</rebrand>

<output_contract>
Call submit_profile exactly once. Do not include preamble text. Do not call
submit_profile more than once. The overall_confidence score must reflect:
  >0.8  multiple independent high-quality sources confirm the key fields
  0.5-0.8 some fields confirmed, some inferred from single sources
  <0.5  sparse footprint, ambiguous name, or contradictory sources
</output_contract>

<efficiency>
Budget: at most 12 searches and 8 fetches. Prefer parallel tool calls when
independent. Stop as soon as you have enough signal to fill the required fields
with overall_confidence >= 0.8, or as soon as you've determined ambiguity/stealth.
</efficiency>
`;
```

### The runner

```ts
import { createClient } from "@/utils/supabase/server";

export async function researchProfile(input: {
  companyName: string;
  companyUrl?: string;
  userId: string;
}) {
  const supabase = await createClient();

  // 1) Create row in 'researching' status so the UI can stream updates.
  const { data: profile } = await supabase
    .from("product_profiles")
    .insert({
      user_id: input.userId,
      company_name: input.companyName,
      company_url: input.companyUrl ?? null,
      product_name: input.companyName,
      research_status: "researching"
    })
    .select()
    .single();

  const userMessage =
    `Research this company and produce a Product Profile.\n\n` +
    `<input>\n  <company_name>${input.companyName}</company_name>\n` +
    (input.companyUrl ? `  <company_url>${input.companyUrl}</company_url>\n` : "") +
    `</input>`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    thinking: { type: "adaptive", effort: "medium" },
    system: [{
      type: "text",
      text: SYSTEM_PROMPT,
      cache_control: { type: "ephemeral", ttl: "1h" }
    }],
    tools,
    tool_choice: { type: "auto" },
    messages: [{ role: "user", content: userMessage }]
  });

  // 2) Find the submit_profile tool call. Because it's a server-tools-heavy
  //    run, the single client-side tool_use we care about will appear in the
  //    final assistant turn — Anthropic's infra has already resolved search/fetch.
  const submit = response.content.find(
    (b) => b.type === "tool_use" && b.name === "submit_profile"
  );

  if (!submit || submit.type !== "tool_use") {
    await supabase.from("product_profiles")
      .update({ research_status: "failed" })
      .eq("id", profile!.id);
    throw new Error("Agent did not submit a profile");
  }

  const p = submit.input as any;

  // 3) Persist citations from any web_search_result / web_fetch_result blocks.
  const sources: any[] = [];
  for (const block of response.content as any[]) {
    if (block.type === "text" && block.citations) {
      for (const c of block.citations) {
        sources.push({
          profile_id: profile!.id,
          user_id: input.userId,
          url: c.url,
          title: c.title,
          excerpt: c.cited_text,
          source_type: inferSourceType(c.url),
          fields_derived: []
        });
      }
    }
  }
  if (sources.length) await supabase.from("profile_sources").insert(sources);

  // 4) Persist the profile fields.
  await supabase.from("product_profiles").update({
    company_name:          p.resolved_company.name,
    company_url:           p.resolved_company.url,
    one_liner:             p.one_liner,
    core_value_prop:       p.core_value_prop,
    technical_category:    p.technical_category,
    key_differentiators:   p.key_differentiators ?? [],
    primary_use_cases:     p.primary_use_cases ?? [],
    target_market_segments:p.target_market_segments ?? [],
    competitors:           p.competitors ?? [],
    integrations:          p.integrations ?? [],
    proof_points:          p.proof_points ?? [],
    objection_handlers:    p.objection_handlers ?? [],
    tone_of_voice:         p.tone_of_voice,
    founder_story:         p.founder_story,
    pricing_model:         p.pricing_model,
    research_confidence:   p.overall_confidence,
    research_status:       p.needs_user_confirmation ? "draft" : "ready"
  }).eq("id", profile!.id);

  return { profileId: profile!.id, needsReview: p.needs_user_confirmation };
}

function inferSourceType(url: string): string {
  if (/g2\.com/.test(url))          return "g2";
  if (/capterra\.com/.test(url))    return "capterra";
  if (/linkedin\.com/.test(url))    return "linkedin";
  if (/\/pricing/.test(url))        return "pricing";
  if (/\/case-stud|customers?\//.test(url)) return "case_study";
  if (/press|news|techcrunch|prnewswire/.test(url)) return "press";
  return "homepage";
}
```

### Edge cases, resolved

**Ambiguous name ("Apollo," "Linear" circa 2018).** The system prompt's `<disambiguation>` block forces one clarifying search, then submission with `needs_user_confirmation=true` if still ambiguous. The UI presents the resolved candidate plus alternatives and asks one click to confirm. This is almost always faster than making the user type a URL upfront.

**Stealth startup.** The `<stealth_or_sparse>` block short-circuits with low confidence. The UI flips to "tell us about your product" mode — a one-screen form for the six most important fields. This is the graceful degradation: the agentic loop becomes a form.

**Recent rebrand.** Press releases show this clearly; the prompt instructs Claude to use the new name and record the old one in `disambiguation_note`. Users hitting this case see a small "known as X until 2025" label.

**Common-word names.** Same path as ambiguous. The `{name} company B2B SaaS` query usually resolves these; if not, user confirms.

**Confidence → UX mapping.** `>= 0.8` auto-persists as `ready`. `0.5–0.8` persists as `ready` but the UI shows a yellow "review these fields" badge. `< 0.5` persists as `draft` and the user must approve before the profile can be used in generation tools.

### Why not a sequential pipeline, one more time

You will be tempted. Don't. The pipeline wins on the happy path by 10–15 seconds and ~$0.05, and loses catastrophically on the 10% of companies where name resolution matters. Sales reps will forgive 45 seconds; they will not forgive a profile about the wrong company. The agent's natural branching on `<disambiguation>` is the feature.

---

## 3. UX/UI strategy: the Command Center

### The 1-vs-N problem, solved

80% of users sell one product. They should never see a profile switcher. Ever. Not collapsed, not grayed out, not "just a dropdown." **The chrome for multi-profile does not render when `count === 1`.**

The 20% who sell multiple products need switching to feel like Linear's workspace switcher: identity in the top-left corner, `⌘K` parity, URL-scoped so links are shareable, state that follows them across generation tools.

This splits into five concrete decisions:

1. **URL-scoped profiles: `/app/[profileId]/...`.** Profile identity lives in the URL, not in a server session or localStorage. Copy-pastable, bookmarkable, and — critically — survives incognito windows and new devices. Every Vercel/Linear/Stripe/Notion-tier product does this.
2. **One synthetic ID: `default`.** For single-profile users, redirect `/app` → `/app/default/...` via middleware. The `default` slug resolves server-side to the user's `is_default = true` profile. The single-product seller never sees a UUID and never picks.
3. **Conditional chrome.** A server component (`<ProfileSwitcher />`) reads `count(*)` from `product_profiles` (cheap, RLS-scoped). If count is 1, it renders nothing. If ≥ 2, it renders a corner chip with the profile's name and product logo, clickable and `⌘K`-accessible.
4. **Last-used persistence is a URL plus a server fallback.** On login with no URL, route to the profile with the latest `updated_at` (which is effectively "last used," since opening a generation tool can bump a `last_used_at` we add later if we care). No localStorage — it breaks cross-device.
5. **Profile chip in every generation tool header.** Small, non-interactive unless `count >= 2`. Shows "Cold Email · *Acme CRM*" as breadcrumb. This is the "am I writing from the right product?" confirmation that Vercel and Stripe both do and every B2B app that skips it creates weekly support tickets about.

### The onboarding magic moment

This is the one screen that earns PromptStarter.ai its first "holy shit" reaction. The flow:

1. User types a company name. Submit.
2. Immediately land on `/app/new/researching` — a streamed page showing Claude's thinking and tool calls rendered as monospace status lines in the Command Center aesthetic: *"Reading acme.com…," "Checking G2 reviews…," "Comparing Acme vs Zenith…," "Drafting profile…"* — one line appears, then the next, at the pace tool calls resolve. This is the terminal-readout moment. Use `streamText` (Vercel AI SDK) or the Anthropic SDK stream and render on step events.
3. After ~20–40 seconds, the page transforms into the **editable profile** — every field prefilled, each with a small source-citation chip that expands to show the URL and excerpt. This is where trust is built: the rep sees *where every claim came from*, can click through, and can edit in place.
4. Below the fold: "Calibration complete. **Generate your first prompt →**." One button. That's the approval gate.

The psychological bet here is that a rep who has just watched an AI read their company's website for 30 seconds — and sees the profile cite specific URLs — will trust the outputs more than a rep who filled out a form. The Anthropic multi-agent research system's key finding applies: citations per claim are the single largest driver of user trust in AI-generated research.

### The "add a second product" moment

The first-product user must never see multi-product UI. When they add a second — via a "+ Add product" item that lives buried in the profile settings menu (not the main nav) — the app transitions gracefully:

- The switcher chrome appears on next navigation, introduced by a one-shot toast: *"You now have 2 products. ⌘K to switch, or click the chip in the top-left."*
- The current URL (`/app/default/...`) resolves to their original profile. Links they've shared still work.
- The `default` slug now becomes a stable alias for "whichever profile they marked `is_default`," settable in profile settings.

### Next.js App Router patterns

```
app/
  layout.tsx                            // root
  (marketing)/…                         // public
  app/
    layout.tsx                          // requires auth; renders <Sidebar/> + <ProfileChip/>
    page.tsx                            // redirects to /app/default or /app/onboarding
    onboarding/page.tsx                 // the "magic moment" page
    [profileId]/
      layout.tsx                        // validates profileId against RLS; resolves 'default'
      page.tsx                          // profile home
      tools/
        cold-email/page.tsx
        linkedin-message/page.tsx
        cold-call-script/page.tsx
      settings/page.tsx
```

Key implementation notes:

- `app/app/[profileId]/layout.tsx` is a **server component**. It resolves `params.profileId === "default"` to the user's default row, 404s if the row doesn't exist under RLS, and passes the resolved profile down via a React context provider wrapped in a client component. This is the single place profile-loading happens.
- `<ProfileChip />` and `<ProfileSwitcher />` are the only client components in the shell. The switcher uses `cmdk` (the same library Vercel and Linear use) behind `⌘K`. It also registers a `<header>` button that opens the same palette.
- Mutations (edit profile, set default, soft-delete) use Next.js server actions. Set-default wraps the demote-old-default + promote-new-default in a single Postgres transaction inside an RPC to respect the partial unique index.
- Optimistic updates on profile edits: `useOptimistic` for field-level tweaks from the settings page; the server action reconciles.

### Minimum viable switcher

Respect for both personas, stripped to essentials:

- **Single profile:** no chrome. URL has `default` in it. Period.
- **Multi-profile:** top-left chip in the sidebar showing current profile name + product icon, click to open a dropdown of profiles + "Add product" + "Settings," `⌘K` opens the same list as searchable commands. Switching navigates to `/app/[newProfileId]/<same-subpath-as-current>` so context is preserved (Vercel's "projects as filters" pattern — the single most-copied thing from their nav redesign and the thing that will most distinguish PromptStarter.ai from Apollo/Outreach's clunky dropdowns).

What to **not** build in v1: workspace colors, profile emojis, drag-reorder, archived profiles, profile sharing. These are the Clay-tier features reps complain about as clutter. Ship the chip + palette + URL scoping and nothing else.

### Psychological notes applied

Sales reps hate UI tax. The profile switcher for single-product users is UI tax. Hiding it is not a stylistic choice; it is a respect gesture. Reps trust drafts that feel "pre-done for them," so the onboarding flow's pre-filled-with-citations moment is not a UI flourish — it is the product's trust-building core loop. Every field they don't have to type is a field they believe the AI actually researched.

---

## 4. Prompt injection blueprint

### Format: XML, always

Markdown is for humans who skim. JSON is for machines that parse. **Claude was trained on XML as the default structuring convention** and Anthropic's docs explicitly recommend it for clarity, accuracy, and parseability. We use XML tags with semantic names, nested where hierarchy matters, and consistent across every generation tool.

### Constants in system, Variables in user message

This separation is not cosmetic. In Claude's training, the system prompt carries the highest instruction-following weight and is the natural home for persona, rules, and stable context. User messages carry the turn's payload. Separating them has three operational benefits:

1. **Prompt caching.** The system prompt is stable per-profile; mark it with `cache_control: { type: "ephemeral", ttl: "1h" }` and get 90% cost reduction after the first call of the hour. Per-invocation Variables in the user message do not invalidate the cache.
2. **Guardrail hierarchy.** When Variables and Constants conflict, Claude's default is to privilege the system. This is exactly the behavior we want ("if the rep picks a persona that contradicts our market segment, flag it, don't silently rewrite the product").
3. **Debugging.** Bugs traceable to *what the rep asked for* live in the user message; bugs traceable to *what the product is* live in the system.

### The Product Profile injection template

Rendered once per generation call. Empty fields are **omitted**, not included-as-empty — empty tags are worse than no tag because they signal to Claude that the field was considered and is truly absent, which it may over-interpret.

```ts
function renderProfileAsXML(p: ProductProfile): string {
  const sections: string[] = [];

  sections.push(`<identity>
  <company_name>${escape(p.company_name)}</company_name>
  <product_name>${escape(p.product_name)}</product_name>${
    p.technical_category ? `\n  <category>${escape(p.technical_category)}</category>` : ""
  }${p.company_url ? `\n  <url>${escape(p.company_url)}</url>` : ""}
</identity>`);

  if (p.one_liner || p.core_value_prop) {
    sections.push(`<positioning>${
      p.one_liner ? `\n  <one_liner>${escape(p.one_liner)}</one_liner>` : ""
    }${
      p.core_value_prop ? `\n  <value_prop>${escape(p.core_value_prop)}</value_prop>` : ""
    }
</positioning>`);
  }

  if (p.key_differentiators?.length) {
    sections.push(`<differentiators>
${p.key_differentiators.map(d => `  <item>${escape(d)}</item>`).join("\n")}
</differentiators>`);
  }

  if (p.primary_use_cases?.length) {
    sections.push(`<use_cases>
${p.primary_use_cases.map(u => `  <item>${escape(u)}</item>`).join("\n")}
</use_cases>`);
  }

  if (p.target_market_segments?.length) {
    sections.push(`<market_segments>
${p.target_market_segments.map(s => `  <item>${escape(s)}</item>`).join("\n")}
</market_segments>`);
  }

  if (p.competitors?.length) {
    sections.push(`<competitors>
${p.competitors.map(c => `  <item>${escape(c)}</item>`).join("\n")}
</competitors>`);
  }

  if (p.integrations?.length) {
    sections.push(`<integrations>
${p.integrations.map(i => `  <item>${escape(i)}</item>`).join("\n")}
</integrations>`);
  }

  if (p.proof_points?.length) {
    sections.push(`<proof_points>
${p.proof_points.map(pp => `  <proof type="${pp.type}">
    <label>${escape(pp.label)}</label>${
      pp.detail ? `\n    <detail>${escape(pp.detail)}</detail>` : ""
    }
  </proof>`).join("\n")}
</proof_points>`);
  }

  if (p.objection_handlers?.length) {
    sections.push(`<objection_handlers>
${p.objection_handlers.map(o => `  <pair>
    <objection>${escape(o.objection)}</objection>
    <response>${escape(o.response)}</response>
  </pair>`).join("\n")}
</objection_handlers>`);
  }

  if (p.tone_of_voice) {
    sections.push(`<tone_of_voice>${escape(p.tone_of_voice)}</tone_of_voice>`);
  }

  if (p.founder_story) {
    sections.push(`<founder_story>${escape(p.founder_story)}</founder_story>`);
  }

  return `<product_profile>\n${sections.join("\n\n")}\n</product_profile>`;
}
```

### Token budget

Target: **≤ 1000 tokens per profile**. Enforce at render time:

- `one_liner`: hard-capped at 140 chars in DB.
- `core_value_prop`: soft-cap at 80 words in the profile editor UI.
- Arrays: max items enforced in schema (5 differentiators, 4 use cases, 5 competitors, 10 integrations, 6 proof points, 4 objection handlers).
- `founder_story`: soft-cap at 60 words.
- `objection_handlers[].response`: soft-cap at 40 words.

A fully populated profile at these limits lands around 700–900 tokens. If it exceeds 1000, truncate objection_handlers first (lowest-hit field), then founder_story.

### The system-prompt wrapper

The injected profile sits inside a larger system prompt that establishes role, grounding rules, and conflict policy. This is tool-agnostic (reused across cold-email / LinkedIn / call-script) except for the final `<task>` block.

```
You are an expert B2B sales copywriter working inside PromptStarter.ai. You
write for inside-sales reps (SDRs, AEs) selling the product described below.

<grounding_rules>
  - The <product_profile> below is the ONLY authoritative source of facts about
    the seller's company and product. Do not invent capabilities, customer names,
    metrics, integrations, or features not present in the profile.
  - If a claim would be useful but is not supported by the profile, OMIT it
    rather than fabricate it.
  - If the user's <variables> contradict the <product_profile> (e.g. user
    specifies a use case that isn't in use_cases), prefer the product_profile
    and add a one-line note at the end titled "NOTE TO REP:" flagging the conflict.
  - Never use phrases like "I hope this email finds you well," "I came across
    your company," or "I was impressed by." These are AI-slop tells.
  - Default to the tone in <tone_of_voice>. If absent, default to direct, short,
    sentence-case, no exclamation points.
</grounding_rules>

<style_frameworks>
  Use these implicitly, do not mention them by name:
  - Command of the Message: Before Scenario → Negative Consequence → Required
    Capability → Proof Point → Low-friction CTA.
  - Challenger: open with a reframe or commercial insight when possible;
    never open with flattery.
  - MEDDPICC Metrics: prefer one specific number over vague superlatives.
</style_frameworks>

{INJECTED_PROFILE_XML_HERE}

<task>
  {TOOL_SPECIFIC_INSTRUCTIONS}
</task>
```

### Example: full assembled prompt for the cold email tool

**System prompt** (with a mid-completeness profile for Acme CRM):

```
You are an expert B2B sales copywriter working inside PromptStarter.ai. You
write for inside-sales reps (SDRs, AEs) selling the product described below.

<grounding_rules>
  - The <product_profile> below is the ONLY authoritative source of facts about
    the seller's company and product. Do not invent capabilities, customer names,
    metrics, integrations, or features not present in the profile.
  - If a claim would be useful but is not supported by the profile, OMIT it
    rather than fabricate it.
  - If the user's <variables> contradict the <product_profile>, prefer the
    product_profile and add a one-line "NOTE TO REP:" flagging the conflict.
  - Never use "I hope this email finds you well," "I came across your company,"
    "I was impressed by." These are AI-slop tells.
  - Default to the tone in <tone_of_voice>. If absent, default to direct, short,
    sentence-case, no exclamation points.
</grounding_rules>

<style_frameworks>
  Use these implicitly, do not mention them by name:
  - Command of the Message: Before Scenario → Negative Consequence → Required
    Capability → Proof Point → Low-friction CTA.
  - Challenger: open with a reframe or commercial insight when possible;
    never open with flattery.
  - MEDDPICC Metrics: prefer one specific number over vague superlatives.
</style_frameworks>

<product_profile>
<identity>
  <company_name>Acme</company_name>
  <product_name>Acme CRM</product_name>
  <category>Revenue intelligence platform for B2B sales teams</category>
  <url>https://acmecrm.com</url>
</identity>

<positioning>
  <one_liner>The CRM that forecasts itself.</one_liner>
  <value_prop>Acme CRM auto-builds pipeline forecasts from rep activity and
  calendar data, eliminating the weekly MEDDPICC data-entry tax and giving
  sales leaders forecast accuracy within 5%.</value_prop>
</positioning>

<differentiators>
  <item>Auto-fills MEDDPICC fields from call transcripts and emails</item>
  <item>Native Salesforce bidirectional sync without a middleware layer</item>
  <item>Forecast accuracy guarantee: 5% or annual credit</item>
</differentiators>

<use_cases>
  <item>Replacing manual pipeline review spreadsheets</item>
  <item>Deal-desk coaching based on call signals</item>
  <item>QBR prep with auto-generated account summaries</item>
</use_cases>

<market_segments>
  <item>Series B–D B2B SaaS with 20–200 reps</item>
  <item>Mid-market SaaS companies migrating off Salesforce Classic</item>
</market_segments>

<competitors>
  <item>Clari</item>
  <item>Gong Forecast</item>
  <item>BoostUp</item>
</competitors>

<integrations>
  <item>Salesforce</item>
  <item>HubSpot</item>
  <item>Gong</item>
  <item>Chorus</item>
  <item>Outreach</item>
  <item>Salesloft</item>
</integrations>

<proof_points>
  <proof type="case_study">
    <label>Linear reduced forecast variance from 22% to 4% in 90 days</label>
    <detail>90-rep SDR+AE team, migrated from Clari, saw $4M in previously-missed
    pipeline surface in quarter one.</detail>
  </proof>
  <proof type="metric">
    <label>Average customer saves 4.2 hours/rep/week on pipeline hygiene</label>
  </proof>
</proof_points>

<objection_handlers>
  <pair>
    <objection>We already use Clari</objection>
    <response>Clari forecasts based on what reps tell it; Acme forecasts from
    what reps actually do. Most teams run both for a quarter and drop Clari.</response>
  </pair>
</objection_handlers>

<tone_of_voice>Direct, dry, senior-operator. Short sentences. No hedging.
Assumes the reader is technical and skeptical.</tone_of_voice>
</product_profile>

<task>
Write ONE cold email, under 90 words, following this structure:
  1. Subject line: under 45 chars, lowercase, no clickbait.
  2. Opening (1 sentence): reference the <trigger_event> from <variables>.
     NEVER open with pleasantries.
  3. Pain/reframe (1–2 sentences): name the specific pain the
     <target_persona> feels at the <company_context.stage>. Use a commercial
     insight or reframe when possible. Mirror their language, not ours.
  4. Bridge (1 sentence): connect pain to one specific <differentiator> or
     <use_case> from <product_profile>. Do not list multiple features.
  5. Proof (1 short sentence or phrase): reference one <proof_point>, ideally
     the one most comparable to the prospect.
  6. CTA (1 sentence): low-friction, interest-based. No calendar invites in
     cold. Permission to reply "not relevant" is ideal.
  7. Optional P.S. (1 sentence): the single most hyper-specific observation.

Output format:
Subject: ...
Body:
<email body here, with line breaks between paragraphs>

Then, on a new line, optionally: "NOTE TO REP: <conflict or caveat>"
</task>
```

**User message (the Variables):**

```
<variables>
  <target_persona>
    <title>VP of Revenue Operations</title>
    <seniority>VP</seniority>
    <function>RevOps</function>
  </target_persona>
  <target_company>
    <name>Vercel</name>
    <stage>Series D</stage>
    <industry>Developer tools / PaaS</industry>
    <employee_count>~600</employee_count>
  </target_company>
  <trigger_event>
    <type>executive_hire</type>
    <description>Just hired a new CRO from Twilio, announced 3 days ago on
    LinkedIn.</description>
  </trigger_event>
  <prior_outreach>none</prior_outreach>
  <rep_signature>— Jamie, Acme</rep_signature>
</variables>
```

### Guardrails, detailed

**Hallucination prevention.** The `<grounding_rules>` block is the single biggest lever and it must be prominent (top of system prompt, not buried). Anthropic's own tool-use guidance is to treat the model like a new employee — tell it, explicitly, that invention is forbidden and omission is preferred. This single sentence ("OMIT rather than fabricate") reduces customer-facing hallucination dramatically because the model has an approved escape hatch.

**Conflict policy: Product Profile wins, with a flag.** If the rep's Variables say "pitch us to enterprise insurance companies" but `<market_segments>` is "Series B–D SaaS," Claude follows the market segment and emits a `NOTE TO REP:` line. This is the right default because the profile was researched and approved; the Variables are a one-off. A silent rewrite would erode trust faster than a visible flag.

**Empty-field handling.** Fields are omitted entirely from the XML when empty, as shown in `renderProfileAsXML`. Empty tags are worse than absent tags — they invite the model to hallucinate a value to fill the container.

**Tool-specific task block.** Each generation tool (cold email, LinkedIn, call script, voicemail) swaps in its own `<task>` block at the bottom of the system prompt. Everything above is shared, cached, and reused. The LinkedIn task block specifies 300-char InMail format; the call-script block specifies a 30-second-opener + discovery-questions scaffold; all read the same profile the same way.

---

## Conclusion

The hardest decisions in this spec are the ones that look like micro-choices and aren't. **Making `target_market_segments` a Constant and `target_persona` a Variable** is the decision that keeps profiles useful past week one. **Hiding the switcher entirely at n=1** is the decision that makes SMB users stop comparing you to Apollo. **Shipping the agentic loop as the only research path** is the decision that keeps you out of the "confidently wrong about which company we just researched" support tier. **XML system prompt with empty-field omission** is the decision that keeps output quality high across the long tail of half-filled profiles.

The thing that makes PromptStarter.ai feel like a Command Center rather than another AI wrapper is not any one of these — it's the compounding effect of a profile that was researched with visible citations, stored with fields sized for prompts rather than forms, injected with guardrails that prefer omission to fabrication, and hidden behind a UI that respects the fact that most reps only ever want to generate one precision prompt, fast, for one product, now.

Build it in exactly that order.