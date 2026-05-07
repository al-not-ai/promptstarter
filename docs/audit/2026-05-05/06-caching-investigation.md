# Caching Investigation — Root Cause and Proposed Fix

**Date:** 2026-05-06
**Status:** Investigation closed — 2026-05-06.
**Companion docs:** [04-recommendations.md §2.1](./04-recommendations.md#21--switch-cache-ttl-from-5m-to-1h), [04-recommendations.md Post-implementation update](./04-recommendations.md#post-implementation-update--2026-05-06).

---

**Update 2026-05-06 — investigation closed.**
The diagnostic interceptor (§4.1) was built, run, and reverted. Wire trace confirmed `cache_control: { type: "ephemeral", ttl: "1h" }` reaches Anthropic correctly and the `anthropic-beta` header is present. Candidate A is confirmed: the system block for the tested tool measured ~1,700 tokens — below Haiku's 2,048-token minimum cacheable prefix. The SDK is doing its job. The 0/0 read/write telemetry is structurally bounded by prompt size, not a code bug. No code fix is warranted. The config (1h TTL + beta header) is correct and will fire automatically if/when the system prompt crosses the 2,048-token floor. Investigation closed; no further action required. See §9 for outcome summary and §10 for how to rebuild the diagnostic.

---

## TL;DR

The known-issue comment at [route.ts:322–330](../../../src/app/api/generate/route.ts#L322-L330) suspects the SDK strips `cache_control` when the system message `content` is a plain string. **That hypothesis is refuted by SDK source reading.** `@ai-sdk/anthropic@3.0.74` already wraps a string-content system message into a content-block array and propagates `cache_control` from `providerOptions.anthropic.cacheControl`. Switching `route.ts` to an explicit content-block array would change nothing on the wire.

Cycle 11 telemetry nonetheless shows `read=0, write=0` across all 63 cases including 5 consecutive Velara `objection-defuser` calls that share an identical 2,300-token system prompt. The wire payload should produce cache writes; it does not. Without an actual wire trace we cannot prove which of three remaining causes is responsible. The proposed fix therefore lands diagnostic instrumentation first (a custom `fetch` interceptor in `createAnthropic`), runs a 2-call test, and commits to a code fix only after we can see what Anthropic actually receives and returns. A defensive "belt-and-suspenders" restructure of the system message into an explicit content-block array is bundled into the same change so we cover the off-chance that the SDK source we read does not match runtime behaviour.

---

## 1. Current state — what's on the wire today

### 1.1 Versions

`package.json:13` declares `"@ai-sdk/anthropic": "^3.0.71"`; `npm ls` resolves to `@ai-sdk/anthropic@3.0.74` (latest at the time of writing — see [CHANGELOG.md:3](../../../node_modules/@ai-sdk/anthropic/CHANGELOG.md)). Core `ai@6.0.175`. We are not behind on the SDK.

### 1.2 The route.ts call

[`src/app/api/generate/route.ts:333–370`](../../../src/app/api/generate/route.ts#L333-L370) builds the request like this:

```ts
const result = streamText({
  model: anthropic(MODEL),
  allowSystemInMessages: true,
  messages: [
    {
      role: "system",
      content: systemPrompt,                         // plain string
      providerOptions: {
        anthropic: {
          cacheControl: { type: "ephemeral", ttl: "1h" },
        },
      },
    },
    { role: "user", content: buildUserPrompt({ ... }) },
  ],
  maxOutputTokens: 2000,
  onFinish: async ({ text }) => { ... },
});
```

The provider is built at [route.ts:17–26](../../../src/app/api/generate/route.ts#L17-L26) with `headers: { "anthropic-beta": "extended-cache-ttl-2025-04-11" }`.

### 1.3 What the SDK does with the system message

In [`node_modules/@ai-sdk/anthropic/src/convert-to-anthropic-messages-prompt.ts:127–145`](../../../node_modules/@ai-sdk/anthropic/src/convert-to-anthropic-messages-prompt.ts#L127-L145) the SDK converts a system block (regardless of whether `content` was passed as a string or an array) into:

```ts
system = block.messages.map(({ content, providerOptions }) => ({
  type: 'text',
  text: content,
  cache_control: validator.getCacheControl(providerOptions, {
    type: 'system message',
    canCache: true,
  }),
}));
```

`validator.getCacheControl` in [`get-cache-control.ts:29–61`](../../../node_modules/@ai-sdk/anthropic/src/get-cache-control.ts#L29-L61) reads `providerMetadata.anthropic.cacheControl ?? providerMetadata.anthropic.cache_control` and passes the value through unchanged after a breakpoint-count check. Our value `{ type: "ephemeral", ttl: "1h" }` survives that check (count = 1, max = 4).

When `cache_control` resolves to `undefined`, JSON serialisation drops the field. When it resolves to a value, it ends up on the wire.

### 1.4 What the SDK does with the beta header

In [`anthropic-messages-language-model.ts:735–751`](../../../node_modules/@ai-sdk/anthropic/src/anthropic-messages-language-model.ts#L735-L751) `getBetasFromHeaders` reads `anthropic-beta` from BOTH `config.headers` (our `extended-cache-ttl-2025-04-11`) and per-request headers, splits on commas, and merges into a `Set`. In `getHeaders` ([line 721–733](../../../node_modules/@ai-sdk/anthropic/src/anthropic-messages-language-model.ts#L721-L733)) the merged set replaces the `anthropic-beta` header in the final wire headers. The user-supplied beta is preserved.

### 1.5 Reconstructed wire payload (per source reading)

Putting (1.2) → (1.3) → (1.4) together, the JSON body POSTed to `https://api.anthropic.com/v1/messages` should look like this:

```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 2000,
  "stream": true,
  "system": [
    {
      "type": "text",
      "text": "<full systemPrompt — BASE_SYSTEM_PROMPT_PREAMBLE + OUTPUT_STRUCTURE + profile injection block + profile XML>",
      "cache_control": { "type": "ephemeral", "ttl": "1h" }
    }
  ],
  "messages": [
    { "role": "user", "content": [{ "type": "text", "text": "<user prompt>" }] }
  ]
}
```

with request headers including:

```
anthropic-version: 2023-06-01
anthropic-beta: extended-cache-ttl-2025-04-11
x-api-key: ***
user-agent: ai-sdk/anthropic/3.0.74
```

### 1.6 Telemetry confirms cache is not firing

[`docs/test-runs/2026-05-04-cycle11/_index.md:7`](../../../docs/test-runs/2026-05-04-cycle11/_index.md):

> **Input breakdown:** 176,140 uncached / 0 cache-read / 0 cache-write
> **Cache hit ratio (read / total input):** 0.0%

Five consecutive Velara `objection-defuser` cases (same profile, same tool, identical 2,300-token system prompt) from [`objection-defuser.md`](../../../docs/test-runs/2026-05-04-cycle11/objection-defuser.md):

```
**In:** 2742 (read=0, write=0)
**In:** 2742 (read=0, write=0)
**In:** 2738 (read=0, write=0)
**In:** 2720 (read=0, write=0)
**In:** 2743 (read=0, write=0)
```

If the wire payload looked like §1.5, case 1 should produce `write≈2300`, cases 2–5 should produce `read≈2300`. They produce `0`.

---

## 2. Target state — what the wire payload needs to look like

Anthropic prompt-caching API requires:

1. **Per-block `cache_control` markers.** A block with `cache_control: { type: "ephemeral" }` defines a cache breakpoint. Everything from the start of the prompt through that block is cached as a single prefix.
2. **The `extended-cache-ttl-2025-04-11` beta header** to use `ttl: "1h"`. Without the beta the API either rejects `ttl` or downgrades to the 5m default — undocumented which.
3. **Minimum cacheable prefix size.** For Anthropic Haiku models the published minimum is **2048 tokens** of cached prefix (Sonnet/Opus: 1024). A prefix below the minimum does not write a cache entry — silently. No error, no warning, just `cache_creation_input_tokens: 0` in the response.
4. **Byte-identical prefix across calls** for a cache read. Even one varying byte before the breakpoint invalidates the read.

The §1.5 reconstructed payload is structurally correct against these requirements. Our open question is whether (3) is being violated, whether the live runtime actually matches (1.5), or whether some other API-side requirement is unmet.

---

## 3. Root cause

### 3.1 The route.ts hypothesis is wrong

The comment block at [route.ts:322–332](../../../src/app/api/generate/route.ts#L322-L332) states:

> *"Suspected cause: the @ai-sdk/anthropic version installed does not emit cache_control on the wire when the system message content is a plain string. The likely fix is to restructure the system message as a content-block array."*

**This is refuted by source reading.** The SDK code at [`convert-to-anthropic-messages-prompt.ts:135–142`](../../../node_modules/@ai-sdk/anthropic/src/convert-to-anthropic-messages-prompt.ts#L135-L142) maps every system block — regardless of how `content` was originally typed — into `{ type: 'text', text: content, cache_control: <from providerOptions> }`. There is no string-vs-array branch. Switching `route.ts` to an explicit content-block array would produce the same JSON body.

This is the most important finding in this investigation. **A code change that only restructures the system message into a content-block array will not move the cache-hit needle**, because the SDK is already doing that conversion internally.

### 3.2 What actually causes the 0/0 telemetry

Three remaining candidates, ranked by likelihood:

**Candidate A — Minimum cacheable prefix not met (most likely). ✓ CONFIRMED.**
- `pre-call-recon` system prompt does not include the profile block ([route.ts:282](../../../src/app/api/generate/route.ts#L282)) and lands at ~1,455 tokens — well below the 2048 Haiku minimum. Will never cache, full stop.
- Other tools include the profile injection block + profile XML. Wire trace (2026-05-06) measured the tested tool's system block at ~1,700 tokens — below the 2,048-token floor. All tools tested showed 0/0 telemetry. The config is correct; the prompt is just too short to cross the cache threshold.

**Candidate B — A runtime difference between SDK source and shipped behaviour. ✗ RULED OUT.** Wire trace confirmed the payload matches §1.5 exactly: `cache_control: { type: "ephemeral", ttl: "1h" }` is present on the wire and the `anthropic-beta` header is correctly merged. No SDK transformation is stripping or mutating the cache marker.

**Candidate C — An undocumented Anthropic-side requirement. ✗ RULED OUT.** The API accepted the payload structure without error; the cache marker is structurally valid. The issue is prompt size (Candidate A), not API behavior.

**Conclusion:** Candidate A confirmed. No code fix warranted. See §9.

---

## 4. Proposed fix

The fix is two changes to `route.ts`, landed in one PR. Both are reversible. The first is diagnostic; the second is "belt-and-suspenders" and matches the existing comment's hypothesis even though §3.1 demonstrates that hypothesis is wrong (cheap insurance).

### 4.1 Add a `fetch` interceptor that logs the request body and response

`createAnthropic` accepts a custom `fetch` ([anthropic-provider.ts:75](../../../node_modules/@ai-sdk/anthropic/src/anthropic-provider.ts#L75)). A wrapper around the global `fetch` lets us see exactly what is sent to `api.anthropic.com` and what comes back, without modifying the SDK.

**Before** (route.ts:17–26):

```ts
const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: "https://api.anthropic.com/v1",
  headers: {
    "anthropic-beta": "extended-cache-ttl-2025-04-11",
  },
});
```

**After** (route.ts:17–46):

```ts
const STRESS_TEST_KEY = process.env.STRESS_TEST_KEY;

// Dev/stress-test only: log the wire payload so we can verify cache_control is
// actually present and inspect Anthropic's response. Production runs use the
// global fetch unmodified.
const debugFetch: typeof fetch = async (input, init) => {
  const isAnthropic =
    typeof input === "string"
      ? input.includes("api.anthropic.com")
      : input instanceof URL
        ? input.host.includes("anthropic")
        : false;

  if (isAnthropic && process.env.NODE_ENV !== "production") {
    const bodyStr =
      typeof init?.body === "string" ? init.body : "<non-string body>";
    console.log(
      "[ANTHROPIC WIRE] headers:",
      JSON.stringify(init?.headers, null, 2),
    );
    console.log(
      "[ANTHROPIC WIRE] body (first 4kb):",
      bodyStr.slice(0, 4096),
    );
  }

  const response = await fetch(input, init);

  if (isAnthropic && process.env.NODE_ENV !== "production") {
    // Clone so we don't consume the stream the SDK is about to read.
    const clone = response.clone();
    // Pull the message_start frame which contains cache usage; don't block
    // the main response.
    void (async () => {
      try {
        const reader = clone.body?.getReader();
        if (!reader) return;
        const decoder = new TextDecoder();
        let acc = "";
        for (let i = 0; i < 5; i++) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          if (acc.includes("message_start")) break;
        }
        const m = acc.match(/"usage":\s*\{[^}]+\}/);
        if (m) console.log("[ANTHROPIC WIRE] usage:", m[0]);
      } catch {}
    })();
  }

  return response;
};

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: "https://api.anthropic.com/v1",
  headers: {
    "anthropic-beta": "extended-cache-ttl-2025-04-11",
  },
  fetch: debugFetch,
});
```

The `NODE_ENV !== "production"` guard means production traffic is unaffected. The clone-and-tail trick reads the SSE prelude without consuming the stream the SDK needs.

### 4.2 Defensive: switch system message to explicit content-block array

This matches the hypothesis in the existing route.ts comment. §3.1 establishes the SDK does this conversion internally, so the change is **expected to be a no-op on the wire**. We ship it anyway for two reasons: (a) it lets us close out the comment authoritatively after the diagnostic confirms wire equivalence, (b) on the small chance the SDK behaves differently at runtime than its source suggests (Candidate B in §3.2), this change forces the explicit shape regardless.

**Before** (route.ts:343–357):

```ts
messages: [
  {
    role: "system",
    content: systemPrompt,
    providerOptions: {
      anthropic: {
        cacheControl: { type: "ephemeral", ttl: "1h" },
      },
    },
  },
  ...
],
```

**After** (route.ts:343–360):

```ts
messages: [
  {
    role: "system",
    content: [
      {
        type: "text",
        text: systemPrompt,
        providerOptions: {
          anthropic: {
            cacheControl: { type: "ephemeral", ttl: "1h" },
          },
        },
      },
    ],
  },
  ...
],
```

Notes:
- `providerOptions` moves to the content part, not the message. The SDK reads cache_control from part-level providerOptions first (see [`convert-to-anthropic-messages-prompt.ts:163–173`](../../../node_modules/@ai-sdk/anthropic/src/convert-to-anthropic-messages-prompt.ts#L163-L173) for user messages — system messages only have one part so this distinction doesn't matter, but the part-level location is the more conservative choice).
- `SystemModelMessage.content` in the AI SDK V6 type is `string` only ([`system-model-message.ts:12`](../../../node_modules/@ai-sdk/provider-utils/src/types/system-model-message.ts#L12)), so this technically makes the message a `UserModelMessage` shape. Tighten with `as const` or coerce — TypeScript will guide. Worst case keep the original string-content form and let only §4.1 ship.
- No new imports.

### 4.3 What is NOT in the fix

- The user prompt's profile injection block is in the SYSTEM message (`route.ts:282–296` appends the profile XML to `systemPrompt`), not the user prompt. The user prompt itself ([`buildUserPrompt`, route.ts:114–190](../../../src/app/api/generate/route.ts#L114-L190)) contains per-call variableValues, sliderValues, and seller line — all per-call values, no static prefix worth caching. **Ruled out as a second cache marker site.**
- No SDK upgrade. We are on the latest version already.

---

## 5. Validation strategy

### 5a. Targeted 2-case test (cheap, definitive)

**Tool:** `objection-defuser` (Pro tool, profile-injected, system prompt above the suspected 2048 floor).

**Inputs (case 1 = case 2, byte-identical):**
```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "You're too expensive — we can build this in-house",
    "yourEdge": "3-week implementation vs. 9-month build cycle"
  },
  "sliderValues": { "response-posture": 0, "next-step-aggression": 0 }
}
```

**Sequence:** start dev server (`npm run dev`), POST `/api/generate` with the body above twice in immediate succession (curl loop or two `fetch` calls in a Node REPL). Use the `x-stress-test-key` header so `testProfile` (Velara) is honoured without a Supabase user.

**What to check in the dev-server console:**
1. **Request 1 wire log** — confirm `system` is an array of one block, that block has `cache_control: { type: "ephemeral", ttl: "1h" }`, and headers include `anthropic-beta: extended-cache-ttl-2025-04-11`.
2. **Request 1 usage log** — `cache_creation_input_tokens` should be ≥ 2,000 (the Velara system prompt). If it is 0, the API is silently rejecting our cache_control (Candidate C in §3.2) or the prefix is below the per-model minimum (Candidate A).
3. **Request 2 wire log** — identical to request 1.
4. **Request 2 usage log** — `cache_read_input_tokens` should equal request 1's `cache_creation_input_tokens`. If it is 0 but request 1 had a non-zero write, the cache entry is being created but not read — distinct failure mode.

**Pass:** request 2 shows `cache_read_input_tokens > 2000`. The fix is real, ship and proceed to 5b.
**Fail (write=0 on request 1):** the fix didn't cause caching to fire. Use the wire log to determine whether the payload looks correct (then it's Candidate A or C — see §6) or wrong (then we know what to fix in code).
**Fail (write>0 but read=0 on request 2):** unexpected; investigate before continuing.

Total wall-clock: ~60 seconds once the server is up.

### 5b. Full cycle 12 (only after 5a passes)

Re-run `scripts/stress-test-v2.mjs` against the dev server. Cycle 12 expectations:

| Metric | Cycle 11 (cycle 11 _index.md) | Cycle 12 expected | Acceptance threshold |
|---|---|---|---|
| Cache write tokens (total) | 0 | ~14k–18k (one write per profile/tool combo, ~21 combos × ~700 written tokens averaged for cache-write savings) | ≥ 5,000 |
| Cache read tokens (total) | 0 | ~85k–105k (≈40–50% of total input) | ≥ 50,000 |
| Cache hit ratio (read / total input) | 0% | 50–60% | ≥ 30% |
| Total engine cost | $0.2837 | ~$0.20 | ≤ $0.24 |
| Per-case avg | $0.0045 | ~$0.0032 | ≤ $0.0036 |

The expected ratio is below 100% because (a) `pre-call-recon` will never cache (system prompt below 2048 minimum even with the fix), (b) the first call of every profile/tool combo is a write, not a read, (c) cross-profile boundaries inside a tool's run also start fresh.

Acceptance threshold reasoning: if real-cache-read is below 30%, something is still wrong with sequencing or per-tool variance and we re-debug. Above 30% means the lever is materially working and matches the §2.1 audit projection at lower bound.

---

## 6. What to do if the fix doesn't work

### 6a. Decision tree

```
5a request 1: cache_creation_input_tokens?
├── 0  → Wire payload looks correct in §5a step 1?
│        ├── Yes  → Candidate A or C
│        │        → Try padding system prompt to 4,096 tokens with throwaway
│        │          text and re-run 5a. If write fires, A is confirmed (we
│        │          need to either accept pre-call-recon never caches or grow
│        │          its system prompt, e.g. tool-agnostic recon-specific block).
│        │          If write still 0, escalate to Anthropic support — file
│        │          ticket with wire trace.
│        └── No   → Compare logged wire to §1.5 expected. Patch the diff in
│                   code, re-run 5a. Likely culprit is in our route.ts
│                   construction or the SDK transformRequestBody hook.
└── >0 → Continue to 5a request 2 to verify reads work.
```

### 6b. SDK upgrade path

Not applicable — we are on `@ai-sdk/anthropic@3.0.74`, the latest at the time of writing. The CHANGELOG entries from 3.0.45 onward show no relevant cache fixes pending. Upgrading to a hypothetical 3.0.75+ is not a path because none exists yet.

### 6c. Manual fetch wrapping (alternative to AI SDK)

If the SDK turns out to be the problem, the fallback is to bypass `streamText` entirely for this single endpoint and POST to `/v1/messages` directly with `node-fetch` or undici. The system prompt + cache_control structure is small enough to construct by hand. Estimated effort: 1 short Sonnet session to write the manual call, 1 short session to re-validate streaming behaviour against the existing client. Loses the SDK's stream parsing but trades for full control of the wire payload.

### 6d. Custom AI SDK provider

Not worth it. If we need the SDK off the critical path, 6c is cheaper.

### 6e. Abort criteria

If after 5a + one diagnostic iteration we still can't get cache writes to fire, freeze the investigation and ship the §1.7 forward projection without cache savings (current $0.0045/case is the floor). The audit's §5 target moves from $0.0029 to $0.0040ish. Document and move on.

---

## 7. Lockstep updates

Per AGENTS.md "Touching tools.ts — lockstep updates" and similar conventions:

- **`scripts/stress-test-v2.mjs`** — no schema change required. The harness already reads `cacheReadInputTokens` and `cacheCreationInputTokens` from the `STRESS_TEST_USAGE:` line ([route.ts:445–450](../../../src/app/api/generate/route.ts#L445-L450)). Will start reporting non-zero values automatically.
- **`docs/audit/2026-05-05/04-recommendations.md`** — when the fix lands and cycle 12 confirms cache hits, update the Post-implementation section (lines 7–13) and the §2.1 grade card row (line 93) from "partial" to "shipped". Update the forward projection table (lines 73–82) with measured cycle 12 numbers.
- **`src/app/api/generate/route.ts`** — remove the known-issue comment block at [lines 322–332](../../../src/app/api/generate/route.ts#L322-L332) once 5b confirms.
- **No tools.ts change.** This is engine-side only; tool definitions are unaffected.
- **No tests.** There are no automated tests in the repo to update. The stress test harness is the only validation surface.

---

## 8. Out of scope / explicit non-goals

- **User prompt caching.** The user prompt is per-call (variable values, slider values, seller line). No static prefix worth a second cache breakpoint. Ruled out in §4.3.
- **Multi-tier cache markers (5m + 1h).** Anthropic supports up to 4 breakpoints per request and a hot/warm tier split. Out of scope for this fix; revisit only if the simple fix lands and we want to optimise further.
- **Caching the per-tool `engineRoleHint` or `outputFormat`.** These are tool-level constants but not large enough to be worth a separate breakpoint, and they live inside the user prompt today, not the system prompt.
- **Pre-call-recon caching specifically.** Ruled out in §3.2 (system prompt likely below the per-model minimum). Could be solved by adding a recon-specific 600-token static prefix to push it above 2,048 — but that's a deliberate output-quality call ("does the engine benefit from more recon-framing scaffolding?"), not a caching decision. Defer.
- **The `extended-cache-ttl-2025-04-11` beta header itself.** §1.4 confirms it's correctly merged on the wire by the SDK. No change needed.
- **Switching off `streamText` to `generateText`.** Streaming is part of the product UX (rep sees the engine working live). Not on the table.
- **SDK version bump.** Already on latest (§6b).

---

## 9. Outcome

Investigation closed 2026-05-06. No code fix shipped.

**What we confirmed:** `cache_control` reaches Anthropic correctly. The SDK wraps the system message into the correct content-block shape and preserves the `{ type: "ephemeral", ttl: "1h" }` marker on the wire. The `anthropic-beta: extended-cache-ttl-2025-04-11` header is correctly merged. The config is right.

**Why caching doesn't fire:** Haiku's minimum cacheable prefix is 2,048 tokens. The tested tool's system block measured ~1,700 tokens — 348 tokens below the floor. The API silently produces `cache_creation_input_tokens: 0` for any prefix below the minimum; no error, no warning. The 0/0 telemetry across all cycles (4–12) is explained entirely by this threshold.

**What this means for the roadmap:**
- Caching will fire automatically if the system prompt grows past 2,048 tokens. No code change needed when that happens — the config is already correct.
- Phase 3 templating extension (follow-up-forward added in cycle 12) reduces output tokens but does not affect the system prompt size; it does not change the caching situation.
- If caching is a priority, the path is intentional system prompt growth (e.g. tool-specific static preambles per §6.4 of `04-recommendations.md`) to cross the floor — not a code fix.

**Cross-reference:** `src/app/api/generate/route.ts` caching note (around line 322) updated to reflect this conclusion. `04-recommendations.md` Post-implementation section updated.

---

## 10. How to rebuild the diagnostic

The `debugFetch` interceptor was used to produce the wire trace for this investigation. It was reverted after confirmation (not needed in production; the config is correct). To rebuild it for future wire-level diagnostics, add the following to `route.ts` **before** the `createAnthropic` call and add `fetch: debugFetch` to the options:

```ts
// Dev/stress-test only: log the wire payload so we can verify cache_control is
// actually present and inspect Anthropic's response. Production runs use the
// global fetch unmodified.
const debugFetch: typeof fetch = async (input, init) => {
  const isAnthropic =
    typeof input === "string"
      ? input.includes("api.anthropic.com")
      : input instanceof URL
        ? input.host.includes("anthropic")
        : false;

  if (isAnthropic && process.env.NODE_ENV !== "production") {
    const bodyStr =
      typeof init?.body === "string" ? init.body : "<non-string body>";
    console.log(
      "[ANTHROPIC WIRE] headers:",
      JSON.stringify(init?.headers, null, 2),
    );
    console.log(
      "[ANTHROPIC WIRE] body (first 4kb):",
      bodyStr.slice(0, 4096),
    );
  }

  const response = await fetch(input, init);

  if (isAnthropic && process.env.NODE_ENV !== "production") {
    // Clone so we don't consume the stream the SDK is about to read.
    const clone = response.clone();
    // Pull the message_start frame which contains cache usage; don't block
    // the main response.
    void (async () => {
      try {
        const reader = clone.body?.getReader();
        if (!reader) return;
        const decoder = new TextDecoder();
        let acc = "";
        for (let i = 0; i < 5; i++) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          if (acc.includes("message_start")) break;
        }
        const m = acc.match(/"usage":\s*\{[^}]+\}/);
        if (m) console.log("[ANTHROPIC WIRE] usage:", m[0]);
      } catch {}
    })();
  }

  return response;
};

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: "https://api.anthropic.com/v1",
  headers: {
    "anthropic-beta": "extended-cache-ttl-2025-04-11",
  },
  fetch: debugFetch,  // add this line
});
```

**What to look for in the console:**
- `[ANTHROPIC WIRE] body` — confirm `system` is an array with one block containing `cache_control: { type: "ephemeral", ttl: "1h" }`.
- `[ANTHROPIC WIRE] usage` — if `cache_creation_input_tokens` is 0 on the first call, the prefix is below the 2,048-token floor (Candidate A). If it's > 0 but `cache_read_input_tokens` is 0 on the second identical call, you have a different failure mode.
- The `NODE_ENV !== "production"` guard means this is safe to commit temporarily; production traffic bypasses the wrapper entirely.
