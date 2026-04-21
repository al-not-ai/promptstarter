"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Phase = "input" | "researching" | "done";

export default function OnboardingPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [showUrl, setShowUrl] = useState(false);
  const [phase, setPhase] = useState<Phase>("input");
  const [statusLines, setStatusLines] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!companyName.trim()) return;

    setPhase("researching");
    setStatusLines([]);
    setError(null);

    try {
      const response = await fetch("/api/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: companyName.trim(),
          companyUrl: companyUrl.trim() || undefined,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Research request failed.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          try {
            const data = JSON.parse(line.slice(6)) as {
              status?: string;
              profileId?: string;
            };

            if (data.status) {
              setStatusLines((prev) => [...prev, data.status!]);
            }

            if (data.profileId) {
              // Profile is created — give the user a beat to read the last line
              setTimeout(() => {
                setPhase("done");
                setTimeout(() => router.push("/"), 1200);
              }, 500);
            }
          } catch {
            // Malformed SSE line — skip
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setPhase("input");
    }
  }

  return (
    <main className="grid-bg min-h-[100dvh] flex flex-col items-center justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-[480px] space-y-6">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
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

        {/* Card */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 space-y-5">

          {phase === "input" && (
            <>
              <div className="space-y-1">
                <h1 className="font-mono text-sm font-bold text-white">
                  Set Up Your Command Center
                </h1>
                <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                  Tell us your company name. We&apos;ll research your product
                  and build your profile automatically — no form-filling.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-semibold text-zinc-300 block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g., Acme Corp"
                    required
                    autoFocus
                    className="w-full h-11 font-mono text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
                  />
                </div>

                {showUrl ? (
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-semibold text-zinc-300 block">
                      Website URL{" "}
                      <span className="text-zinc-600 font-normal">(optional — helps with accuracy)</span>
                    </label>
                    <input
                      type="url"
                      value={companyUrl}
                      onChange={(e) => setCompanyUrl(e.target.value)}
                      placeholder="https://acmecorp.com"
                      className="w-full h-11 font-mono text-sm bg-zinc-900 border border-white/10 rounded-md px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3300]/40 focus:ring-1 focus:ring-[#FF3300]/15 transition-all duration-150"
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowUrl(true)}
                    className="font-mono text-[11px] text-zinc-600 hover:text-zinc-400 underline transition-colors duration-150"
                  >
                    + Add website URL for better accuracy
                  </button>
                )}

                <button
                  type="submit"
                  disabled={!companyName.trim()}
                  className="w-full h-11 font-mono text-sm font-semibold rounded-md bg-[#FF3300] text-white hover:bg-[#e02d00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
                  style={
                    companyName.trim()
                      ? { boxShadow: "0 0 20px rgba(255,51,0,0.3), 0 0 50px rgba(255,51,0,0.1)" }
                      : {}
                  }
                >
                  Begin Research →
                </button>
              </form>

              {error && (
                <p className="font-mono text-xs text-red-400 text-center">{error}</p>
              )}
            </>
          )}

          {(phase === "researching" || phase === "done") && (
            <>
              <div className="space-y-1">
                <h1 className="font-mono text-sm font-bold text-white">
                  {phase === "done"
                    ? "✓ Profile Ready"
                    : `Researching ${companyName}…`}
                </h1>
                <p className="font-mono text-xs text-zinc-500">
                  {phase === "done"
                    ? "Taking you to the Command Center…"
                    : "The agent is reading public sources. This takes about 30 seconds."}
                </p>
              </div>

              {/* Terminal output */}
              <div className="rounded-lg bg-black/40 border border-white/8 px-4 py-4 space-y-1.5 min-h-[160px]">
                {statusLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 font-mono text-xs leading-relaxed animate-in fade-in duration-300"
                  >
                    <span className="text-[#FF3300] shrink-0 mt-px">›</span>
                    <span className={i === statusLines.length - 1 && phase !== "done"
                      ? "text-zinc-200"
                      : "text-zinc-500"
                    }>
                      {line}
                    </span>
                  </div>
                ))}

                {/* Blinking cursor while researching */}
                {phase === "researching" && (
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#FF3300]">›</span>
                    <span className="inline-block w-1.5 h-3.5 bg-[#FF3300] animate-pulse rounded-sm" />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {phase === "input" && (
          <p className="font-mono text-[10px] text-zinc-700 text-center">
            We research your company from public sources — G2, LinkedIn, your homepage, and press releases.
          </p>
        )}
      </div>
    </main>
  );
}
