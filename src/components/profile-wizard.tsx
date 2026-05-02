"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProductProfile } from "@/lib/types/profile";
import type { CompanyCandidate } from "@/app/api/research/company/route";
import type { ProductGroup } from "@/app/api/research/products/route";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Step = 1 | 2 | 3;

export interface WizardState {
  step: Step;
  company: { name: string; url: string } | null;
  productUrl: string | null;
  productGroupName: string | null;
  profile: ProductProfile | null;
}

// ─── ProfileWizard — owns the full state machine ──────────────────────────────

interface ProfileWizardProps {
  onComplete: (profile: ProductProfile) => void;
  onCancel?: () => void;
  isReturning: boolean;
}

export function ProfileWizard({ onComplete, onCancel, isReturning }: ProfileWizardProps) {
  const [state, setState] = useState<WizardState>({
    step: 1,
    company: null,
    productUrl: null,
    productGroupName: null,
    profile: null,
  });

  const goTo = useCallback((step: Step) => {
    setState((s) => ({ ...s, step }));
  }, []);

  const onCompanyPicked = useCallback((company: { name: string; url: string }) => {
    setState((s) => ({
      ...s,
      step: 2,
      company,
      productUrl: null,
      productGroupName: null,
      profile: null,
    }));
  }, []);

  const onProductPicked = useCallback(
    (args: { productUrl: string; productGroupName: string | null }) => {
      setState((s) => ({
        ...s,
        step: 3,
        productUrl: args.productUrl,
        productGroupName: args.productGroupName,
        profile: null,
      }));
    },
    []
  );

  const onProfileReady = useCallback(
    (profile: ProductProfile) => {
      setState((s) => ({ ...s, profile }));
      onComplete(profile);
    },
    [onComplete]
  );

  return (
    <div className="rounded-xl border border-white/10 bg-[#1E1E1E] p-6 space-y-5">
      <Header step={state.step} isReturning={isReturning} />
      {state.step === 1 && (
        <StepCompany
          onPick={onCompanyPicked}
          onCancel={onCancel}
        />
      )}
      {state.step === 2 && state.company && (
        <StepProducts
          company={state.company}
          onBack={() => goTo(1)}
          onPick={onProductPicked}
        />
      )}
      {state.step === 3 && state.company && state.productUrl && (
        <StepExtract
          company={state.company}
          productUrl={state.productUrl}
          productGroupName={state.productGroupName}
          onBack={() => goTo(2)}
          onDone={onProfileReady}
          hasExistingProfiles={isReturning}
        />
      )}
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header({ step, isReturning }: { step: Step; isReturning: boolean }) {
  return (
    <div className="space-y-3">
      {!isReturning && (
        <div className="flex items-center justify-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className="w-8 h-8 shrink-0"
            style={{ filter: "drop-shadow(0 0 8px rgba(255,51,0,0.45))" }}
          />
          <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px]">
            <span className="text-white font-extrabold text-xl">PromptStarter</span>
            <span className="text-[#FF3300] font-bold text-xl">.ai</span>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center gap-1.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${
              i <= step ? "bg-[#FF3300]" : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <p className="font-sans text-[10px] text-zinc-600 text-center tracking-wide uppercase">
        Step {step} of 3
      </p>
    </div>
  );
}

// ─── Step 1 — Company typeahead ───────────────────────────────────────────────

export function StepCompany({
  onPick,
  onCancel,
}: {
  onPick: (company: { name: string; url: string }) => void;
  onCancel?: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CompanyCandidate[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [manualMode, setManualMode] = useState(false);
  const [manualName, setManualName] = useState("");
  const [manualUrl, setManualUrl] = useState("");

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults(null);
      setIsSearching(false);
      setTimedOut(false);
      setError(null);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const handle = setTimeout(async () => {
      setIsSearching(true);
      setTimedOut(false);
      setError(null);
      try {
        const res = await fetch("/api/research/company", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: trimmed }),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Search failed");
        const data = (await res.json()) as {
          results: CompanyCandidate[];
          timedOut?: boolean;
        };
        setResults(data.results);
        setTimedOut(!!data.timedOut);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError("Couldn't reach the search service. Enter your URL below.");
      } finally {
        if (!controller.signal.aborted) setIsSearching(false);
      }
    }, 350);

    return () => {
      clearTimeout(handle);
      controller.abort();
    };
  }, [query]);

  function submitManual(e: React.FormEvent) {
    e.preventDefault();
    const name = manualName.trim() || hostFromUrl(manualUrl) || "My Company";
    const url = normalizeUrl(manualUrl);
    if (!url) return;
    onPick({ name, url });
  }

  const showFallbackHint =
    !manualMode &&
    query.trim().length >= 2 &&
    !isSearching &&
    (results?.length === 0 || timedOut || error);

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h1 className="font-sans text-sm font-bold text-white">
          Which company do you rep?
        </h1>
        <p className="font-sans text-xs text-zinc-500 leading-relaxed">
          Start typing — we&apos;ll find it.
        </p>
      </div>

      {!manualMode && (
        <>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Salesforce, Stripe, Snowflake…"
            autoFocus
            className="w-full h-11 font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
          />

          <div className="space-y-2 min-h-[120px]">
            {isSearching && <ShimmerCards count={3} />}

            {!isSearching &&
              results?.map((c) => (
                <CompanyCard key={c.url} candidate={c} onPick={onPick} />
              ))}

            {!isSearching && query.trim().length >= 2 && results?.length === 0 && (
              <EmptyHint>
                No match for &ldquo;{query.trim()}&rdquo;. Enter your URL below.
              </EmptyHint>
            )}

            {showFallbackHint && !results?.length && (
              <button
                type="button"
                onClick={() => {
                  setManualName(query.trim());
                  setManualMode(true);
                }}
                className="w-full h-11 font-sans text-xs font-semibold rounded-md border border-white/10 text-zinc-300 hover:text-white hover:border-[#FF3300]/40 hover:bg-white/[0.02] transition-colors duration-150"
              >
                Enter URL manually →
              </button>
            )}

            {error && (
              <p className="font-sans text-xs text-red-400">{error}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setManualMode(true)}
              className="font-sans text-[11px] text-zinc-600 hover:text-zinc-400 underline transition-colors duration-150"
            >
              Don&apos;t see it? Enter URL manually
            </button>
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="font-sans text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
              >
                ← Cancel
              </button>
            )}
          </div>
        </>
      )}

      {manualMode && (
        <form onSubmit={submitManual} className="space-y-3">
          <div className="space-y-1.5">
            <label className="font-sans text-xs font-semibold text-zinc-300 block">
              Company Name
            </label>
            <input
              type="text"
              value={manualName}
              onChange={(e) => setManualName(e.target.value)}
              placeholder="e.g., Acme Corp"
              autoFocus
              className="w-full h-11 font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
            />
          </div>
          <div className="space-y-1.5">
            <label className="font-sans text-xs font-semibold text-zinc-300 block">
              Company URL
            </label>
            <input
              type="url"
              value={manualUrl}
              onChange={(e) => setManualUrl(e.target.value)}
              placeholder="https://acmecorp.com"
              required
              className="w-full h-11 font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setManualMode(false)}
              className="h-11 px-4 font-sans text-xs font-semibold rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-colors duration-150"
            >
              ← Back to search
            </button>
            <button
              type="submit"
              disabled={!manualUrl.trim()}
              className="flex-1 h-11 font-sans text-sm font-semibold rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
              style={
                manualUrl.trim()
                  ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }
                  : {}
              }
            >
              Continue →
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export function CompanyCard({
  candidate,
  onPick,
}: {
  candidate: CompanyCandidate;
  onPick: (company: { name: string; url: string }) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPick({ name: candidate.name, url: candidate.url })}
      className="group w-full text-left rounded-lg border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#FF3300]/30 p-3 flex items-start gap-3 transition-all duration-150"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={candidate.faviconUrl}
        alt=""
        aria-hidden="true"
        className="w-8 h-8 rounded-md bg-white/5 shrink-0 mt-0.5"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-sm font-semibold text-white truncate">
            {candidate.name}
          </span>
          <span className="font-sans text-[10px] text-zinc-600 truncate">
            {hostFromUrl(candidate.url)}
          </span>
        </div>
        {candidate.description && (
          <p className="font-sans text-[11px] text-zinc-500 leading-snug mt-0.5 line-clamp-2">
            {candidate.description}
          </p>
        )}
      </div>
      <span className="font-sans text-[#FF3300] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 mt-2">
        →
      </span>
    </button>
  );
}

// ─── Step 2 — Product group picker ───────────────────────────────────────────

export function StepProducts({
  company,
  onBack,
  onPick,
}: {
  company: { name: string; url: string };
  onBack: () => void;
  onPick: (args: { productUrl: string; productGroupName: string | null }) => void;
}) {
  const [groups, setGroups] = useState<ProductGroup[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [pasteMode, setPasteMode] = useState(false);
  const [pastedUrl, setPastedUrl] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/research/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ companyUrl: company.url }),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Product detection failed");
        const data = (await res.json()) as { productGroups: ProductGroup[] };
        setGroups(data.productGroups);
        if (!data.productGroups.length) setPasteMode(true);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError("Couldn't read the homepage. Paste the product URL instead.");
        setPasteMode(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    })();
    return () => controller.abort();
  }, [company.url]);

  function submitPaste(e: React.FormEvent) {
    e.preventDefault();
    const url = normalizeUrl(pastedUrl);
    if (!url) return;
    onPick({ productUrl: url, productGroupName: null });
  }

  function useCompanyHomepage() {
    onPick({ productUrl: company.url, productGroupName: null });
  }

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h1 className="font-sans text-sm font-bold text-white">
          Which product do you sell at{" "}
          <span className="text-[#FF3300]">{company.name}</span>?
        </h1>
        <p className="font-sans text-xs text-zinc-500 leading-relaxed">
          Pick the line you sell. If you sell multiple, pick the one you sell
          most — you can add others later.
        </p>
      </div>

      {isLoading && <ShimmerRows count={5} />}

      {!isLoading && !pasteMode && groups && groups.length > 0 && (
        <div className="space-y-2">
          {groups.map((g) => (
            <button
              key={g.name}
              type="button"
              onClick={() =>
                onPick({ productUrl: company.url, productGroupName: g.name })
              }
              className="group w-full text-left rounded-lg border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#FF3300]/30 px-3 py-2.5 flex items-center gap-3 transition-all duration-150"
            >
              <div className="min-w-0 flex-1">
                <div className="font-sans text-sm font-semibold text-white truncate">
                  {g.name}
                </div>
                {g.description && (
                  <div className="font-sans text-[11px] text-zinc-500 leading-snug truncate">
                    {g.description}
                  </div>
                )}
              </div>
              <span className="font-sans text-[#FF3300] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                →
              </span>
            </button>
          ))}
        </div>
      )}

      {!isLoading && pasteMode && (
        <form onSubmit={submitPaste} className="space-y-3">
          {error && (
            <p className="font-sans text-xs text-amber-400/90">{error}</p>
          )}
          <div className="space-y-1.5">
            <label className="font-sans text-xs font-semibold text-zinc-300 block">
              Product Page URL
            </label>
            <input
              type="url"
              value={pastedUrl}
              onChange={(e) => setPastedUrl(e.target.value)}
              placeholder={`${company.url}/products/...`}
              autoFocus
              className="w-full h-11 font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
            />
            <p className="font-sans text-[10px] text-zinc-600 leading-relaxed">
              A product page works best. Homepage is fine if the company only
              sells one thing.
            </p>
          </div>
          <button
            type="submit"
            disabled={!pastedUrl.trim()}
            className="w-full h-11 font-sans text-sm font-semibold rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
            style={
              pastedUrl.trim()
                ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }
                : {}
            }
          >
            Continue →
          </button>
        </form>
      )}

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={onBack}
          className="font-sans text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
        >
          ← Back
        </button>
        {!isLoading && !pasteMode && groups && groups.length > 0 && (
          <button
            type="button"
            onClick={() => setPasteMode(true)}
            className="font-sans text-[11px] text-zinc-500 hover:text-zinc-300 underline transition-colors duration-150"
          >
            Don&apos;t see yours? Paste URL
          </button>
        )}
        {!isLoading && pasteMode && (
          <button
            type="button"
            onClick={useCompanyHomepage}
            className="font-sans text-[11px] text-zinc-500 hover:text-zinc-300 underline transition-colors duration-150"
          >
            Just use the homepage
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Step 3 — Extract + review ────────────────────────────────────────────────

export const NARRATION = [
  "Reading the product page…",
  "Pulling the core positioning…",
  "Finding what makes it different…",
  "Stitching your profile together…",
];

export function StepExtract({
  company,
  productUrl,
  productGroupName,
  onBack,
  onDone,
  hasExistingProfiles,
}: {
  company: { name: string; url: string };
  productUrl: string;
  productGroupName: string | null;
  onBack: () => void;
  onDone: (profile: ProductProfile) => void;
  hasExistingProfiles: boolean;
}) {
  const [status, setStatus] = useState<"loading" | "review" | "error" | "saving">("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [narrationIdx, setNarrationIdx] = useState(0);

  const [profile, setProfile] = useState<ProductProfile | null>(null);
  const [draftName, setDraftName] = useState("");
  const [draftSummary, setDraftSummary] = useState("");
  const [draftDiffs, setDraftDiffs] = useState<string[]>([]);

  useEffect(() => {
    if (status !== "loading") return;
    const timer = setInterval(() => {
      setNarrationIdx((i) => Math.min(i + 1, NARRATION.length - 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setStatus("loading");
      setErrorMsg(null);
      try {
        const res = await fetch("/api/research/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productUrl,
            companyName: company.name,
            companyUrl: company.url,
            productGroupName: productGroupName ?? undefined,
          }),
          signal: controller.signal,
        });
        const data = (await res.json()) as
          | { profile: ProductProfile }
          | { error: string };
        if (!res.ok || !("profile" in data)) {
          throw new Error("error" in data ? data.error : "Research failed");
        }
        setProfile(data.profile);
        setDraftName(data.profile.product_name ?? "");
        setDraftSummary(data.profile.product_summary ?? "");
        setDraftDiffs(
          data.profile.key_differentiators?.length
            ? data.profile.key_differentiators
            : [""]
        );
        setStatus("review");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setErrorMsg((err as Error).message || "Research failed");
        setStatus("error");
      }
    })();
    return () => controller.abort();
  }, [productUrl, company.name, company.url, productGroupName]);

  const diffsTrimmed = useMemo(
    () => draftDiffs.map((d) => d.trim()).filter(Boolean),
    [draftDiffs]
  );

  async function handleSave() {
    if (!profile) return;
    setStatus("saving");
    try {
      const res = await fetch(`/api/profile/${profile.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_name: draftName.trim() || profile.product_name,
          product_summary: draftSummary.trim() || null,
          key_differentiators: diffsTrimmed,
        }),
      });
      const data = (await res.json()) as
        | { profile: ProductProfile }
        | { error: string };
      if (!res.ok || !("profile" in data)) {
        throw new Error("error" in data ? data.error : "Save failed");
      }
      onDone(data.profile);
    } catch (err) {
      setErrorMsg((err as Error).message || "Couldn't save. Try again.");
      setStatus("review");
    }
  }

  if (status === "loading") {
    return (
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="font-sans text-sm font-bold text-white">
            Building your profile…
          </h1>
          <p className="font-sans text-xs text-zinc-500">
            Usually done in 4–6 seconds.
          </p>
        </div>
        <div className="rounded-lg bg-black/40 border border-white/8 px-4 py-4 space-y-2 min-h-[150px]">
          {NARRATION.slice(0, narrationIdx + 1).map((line, i) => (
            <div
              key={i}
              className="flex items-start gap-2 font-sans text-xs leading-relaxed animate-in fade-in duration-300"
            >
              <span className="text-[#FF3300] shrink-0 mt-px">›</span>
              <span className={i === narrationIdx ? "text-zinc-200" : "text-zinc-500"}>
                {line}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 font-sans text-xs">
            <span className="text-[#FF3300]">›</span>
            <span className="inline-block w-1.5 h-3.5 bg-[#FF3300] animate-pulse rounded-sm" />
          </div>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="font-sans text-sm font-bold text-white">
            That didn&apos;t work
          </h1>
          <p className="font-sans text-xs text-zinc-500 leading-relaxed">
            {errorMsg ?? "We couldn't read that page. Try a different product URL."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="h-11 px-4 font-sans text-xs font-semibold rounded-md border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-colors duration-150"
          >
            ← Try a different URL
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h1 className="font-sans text-sm font-bold text-white">
          Here&apos;s what we pulled
        </h1>
        <p className="font-sans text-xs text-zinc-500 leading-relaxed">
          Edit anything that looks off. This anchors every prompt we craft for
          you.
        </p>
      </div>

      <div className="space-y-4">
        <Field label="Product Name">
          <input
            type="text"
            value={draftName}
            onChange={(e) => setDraftName(e.target.value)}
            className="w-full h-11 font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
          />
        </Field>

        <Field label="One-Sentence Summary" hint="What does it do, and who's it for?">
          <textarea
            value={draftSummary}
            onChange={(e) => setDraftSummary(e.target.value)}
            rows={3}
            className="w-full font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150 resize-none"
          />
        </Field>

        <Field
          label="Key Differentiators"
          hint="2–3 short phrases on what makes it stand out."
        >
          <div className="space-y-2">
            {draftDiffs.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-sans text-[#FF3300] text-sm shrink-0">›</span>
                <input
                  type="text"
                  value={d}
                  onChange={(e) => {
                    const next = [...draftDiffs];
                    next[i] = e.target.value;
                    setDraftDiffs(next);
                  }}
                  className="flex-1 h-10 font-sans text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
                />
                {draftDiffs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setDraftDiffs(draftDiffs.filter((_, j) => j !== i))}
                    className="font-sans text-xs text-zinc-600 hover:text-red-400 transition-colors duration-150"
                    aria-label="Remove differentiator"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            {draftDiffs.length < 5 && (
              <button
                type="button"
                onClick={() => setDraftDiffs([...draftDiffs, ""])}
                className="font-sans text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
              >
                + Add another
              </button>
            )}
          </div>
        </Field>
      </div>

      {errorMsg && (
        <p className="font-sans text-xs text-red-400">{errorMsg}</p>
      )}

      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={onBack}
          disabled={status === "saving"}
          className="h-11 px-4 font-sans text-xs font-semibold rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-colors duration-150 disabled:opacity-40"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={status === "saving" || !draftName.trim()}
          className="flex-1 h-11 font-sans text-sm font-semibold rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
          style={
            status !== "saving" && draftName.trim()
              ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }
              : {}
          }
        >
          {status === "saving"
            ? "Saving…"
            : hasExistingProfiles
            ? "Save profile →"
            : "Looks good — take me in →"}
        </button>
      </div>
    </div>
  );
}

// ─── Shared UI primitives ─────────────────────────────────────────────────────

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="font-sans text-xs font-semibold text-zinc-300 block">
        {label}
        {hint && <span className="text-zinc-600 font-normal ml-2">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

export function ShimmerCards({ count }: { count: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-white/10 bg-white/[0.01] p-3 flex items-start gap-3 animate-pulse"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="w-8 h-8 rounded-md bg-white/5 shrink-0" />
          <div className="flex-1 space-y-1.5 py-0.5">
            <div className="h-2.5 w-1/3 bg-white/10 rounded" />
            <div className="h-2 w-2/3 bg-white/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ShimmerRows({ count }: { count: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-white/10 bg-white/[0.01] px-3 py-2.5 animate-pulse"
          style={{ animationDelay: `${i * 70}ms` }}
        >
          <div className="h-2.5 w-1/3 bg-white/10 rounded" />
        </div>
      ))}
    </div>
  );
}

export function EmptyHint({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-white/10 px-3 py-3">
      <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">{children}</p>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function hostFromUrl(url: string): string {
  try {
    return new URL(url.includes("://") ? url : `https://${url}`).hostname.replace(
      /^www\./,
      ""
    );
  } catch {
    return "";
  }
}

export function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    const withProto = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
    const u = new URL(withProto);
    return u.toString();
  } catch {
    return null;
  }
}
