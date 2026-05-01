"use client";

import { useState, useEffect, useRef } from "react";
import { AlertTriangle, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PromptHandoff } from "@/components/prompt-handoff";
import { DOWNSTREAM_AIS, getPreferredAI } from "@/lib/downstream-ai";

const FIRST_COPY_KEY = "promptstarter:has-copied-first-prompt";

interface TerminalOutputProps {
  output: string;
  isLoading: boolean;
  error: Error | undefined;
  rawContext?: string;
  onRetry?: () => void;
  /** Called after a successful clipboard write. Lifted to the dashboard so
   *  upgrade-trigger gating + first-flow tracking can react to copy events. */
  onCopy?: () => void;
  /** True when the visible output is a freshly generated prompt (vs. a
   *  history restore). Gates the one-time coaching tooltip. */
  isFreshGeneration?: boolean;
}

function coachingCopyFor(preferred: ReturnType<typeof getPreferredAI>): string {
  if (!preferred) {
    return "Prompt engineered. Click Copy, then paste it into ChatGPT, Claude, or Gemini — your AI writes the deliverable.";
  }
  const label = DOWNSTREAM_AIS.find((ai) => ai.id === preferred)?.label ?? "your AI";
  return `Prompt engineered. Click Copy, then paste it into ${label} — your AI writes the deliverable.`;
}

function friendlyError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("fetch") || m.includes("network")) return "Connection lost — check your internet and try again.";
  if (m.includes("429") || m.includes("rate limit")) return "Too many requests — wait a moment and try again.";
  if (m.includes("500") || m.includes("server")) return "The generator hit an error on our end. Try again.";
  return "Something went wrong. Try again.";
}

export function TerminalOutput({ output, isLoading, error, rawContext, onRetry, onCopy, isFreshGeneration }: TerminalOutputProps) {
  const isEmpty = !output && !isLoading && !error;
  const [hasCopied, setHasCopied] = useState(false);
  const [sweepKey, setSweepKey] = useState<number | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);

  // Coaching tooltip state. Defaults closed so first paint matches SSR; the
  // mount-time effect below opens it for first-time users on a fresh
  // generation.
  const [coachingOpen, setCoachingOpen] = useState(false);
  const [coachingCopy, setCoachingCopy] = useState<string>(() => coachingCopyFor(null));

  // Reset on new output (re-generation or history restore)
  useEffect(() => {
    setHasCopied(false);
    setSweepKey(null);
  }, [output]);

  // Coaching tooltip gate — only shows for users who have never copied a
  // prompt before, and only on freshly generated output (not history restores).
  useEffect(() => {
    if (!output || isLoading || error || !isFreshGeneration) {
      setCoachingOpen(false);
      return;
    }
    try {
      const alreadyCopied = localStorage.getItem(FIRST_COPY_KEY) === "true";
      if (alreadyCopied) {
        setCoachingOpen(false);
        return;
      }
    } catch {
      // localStorage unavailable — best-effort, fall through and show.
    }
    setCoachingCopy(coachingCopyFor(getPreferredAI()));
    setCoachingOpen(true);
  }, [output, isLoading, error, isFreshGeneration]);

  function dismissCoaching() {
    setCoachingOpen(false);
    try {
      localStorage.setItem(FIRST_COPY_KEY, "true");
    } catch {
      // best-effort; tooltip will reappear next session if storage is blocked.
    }
  }

  function handleCopy() {
    if (!output) return;
    const hasContext = Boolean(rawContext?.trim());

    // Append prospect context if present — lands after STANDARD RULES + DRILL-DOWN
    // so the engine's rules apply to the deliverable; prospect notes are additional fuel.
    const intel = hasContext
      ? `\n\n---\n\n## PROSPECT CONTEXT\n\n${rawContext!.trim()}`
      : "";

    navigator.clipboard.writeText(output + intel).then(() => {
      setHasCopied(true);
      setSweepKey(Date.now());
      dismissCoaching();
      onCopy?.();
    });
  }

  /* ── Empty skeleton ── */
  if (isEmpty) {
    return (
      <div className="w-full min-h-[120px] bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center">
        <p className="font-mono text-sm text-zinc-600 select-none">
          Generated prompt will appear here...
        </p>
      </div>
    );
  }

  /* ── Active state (loading / output / error) ── */
  return (
    <div
      key={sweepKey ?? "idle"}
      className={cn(
        "w-full border border-white/10 bg-black/40 backdrop-blur-md rounded-lg",
        sweepKey ? "animate-copy-shutter animate-copy-ring" : ""
      )}
    >
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
        <span
          className="h-1.5 w-1.5 rounded-full bg-primary"
          style={{ boxShadow: "0 0 6px rgba(255,51,0,0.9)" }}
        />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          Generated Prompt
        </span>

        <div className="ml-auto flex items-center gap-3">
          {isLoading && (
            <span className="font-mono text-[10px] text-primary animate-pulse">
              Generating...
            </span>
          )}
          {output && !isLoading && (
            <div className="relative">
              <button
                ref={copyButtonRef}
                key={sweepKey ?? "btn-idle"}
                onClick={handleCopy}
                className={cn(
                  "font-mono text-[10px] uppercase tracking-widest transition-all duration-200 px-3 py-1.5 rounded-sm border flex items-center gap-1.5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50",
                  hasCopied
                    ? "border-[#FF3300]/60 bg-[#FF3300]/10 text-[#FF3300]"
                    : "border-[#FF3300]/40 text-[#FF3300] hover:bg-[#FF3300]/10",
                  sweepKey ? "animate-copy-haptic" : ""
                )}
                style={{ boxShadow: hasCopied ? "0 0 14px rgba(255,51,0,0.3)" : "0 0 8px rgba(255,51,0,0.15)" }}
              >
                {hasCopied && <Check size={12} />}
                <span>{hasCopied ? "Copied — clipboard ready" : (rawContext?.trim() ? "Copy + Context" : "Copy")}</span>
              </button>
              {coachingOpen && (
                <div
                  role="tooltip"
                  className={cn(
                    "absolute z-30 right-0 w-[280px] max-w-[calc(100vw-2rem)]",
                    "bottom-full mb-3 sm:bottom-full sm:mb-3",
                    "max-sm:bottom-auto max-sm:top-full max-sm:mt-3 max-sm:mb-0",
                    "animate-coach-bounce"
                  )}
                >
                  <div className="relative rounded-md bg-[#FF3300] text-white px-3.5 py-2.5 shadow-[0_8px_24px_-8px_rgba(255,51,0,0.5)]">
                    <div className="flex items-start gap-2">
                      <p className="font-sans text-[13px] font-medium leading-snug flex-1">
                        {coachingCopy}
                      </p>
                      <button
                        type="button"
                        onClick={dismissCoaching}
                        className="shrink-0 -mr-1 -mt-0.5 p-1 rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        aria-label="Dismiss tooltip"
                      >
                        <X size={12} />
                      </button>
                    </div>
                    {/* Arrow notch — points down toward the Copy button on desktop, up on mobile */}
                    <div
                      aria-hidden
                      className={cn(
                        "absolute right-6 w-0 h-0",
                        "border-l-[6px] border-l-transparent",
                        "border-r-[6px] border-r-transparent",
                        // Desktop: tooltip is above, arrow points down
                        "top-full border-t-[6px] border-t-[#FF3300]",
                        // Mobile: tooltip below, arrow points up (override desktop borders)
                        "max-sm:top-auto max-sm:bottom-full max-sm:border-t-0 max-sm:border-b-[6px] max-sm:border-b-[#FF3300]"
                      )}
                    />
                  </div>
                </div>
              )}
              <PromptHandoff
                visible={hasCopied}
                onDismiss={() => setHasCopied(false)}
                pulseKey={sweepKey}
                copyButtonRef={copyButtonRef}
              />
            </div>
          )}
        </div>
      </div>

      {/* Body — flash + sweep overlays + content */}
      <div
        className="relative px-5 py-5 md:max-h-[520px] md:overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,51,0,0.15) transparent",
        }}
      >
        {sweepKey && (
          <>
            {/* Brand sweep — beat 2 */}
            <div
              key={`sweep-${sweepKey}`}
              className="absolute inset-0 pointer-events-none animate-sweep z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,51,0,0.32) 45%, rgba(255,51,0,0.5) 50%, rgba(255,51,0,0.32) 55%, transparent 100%)",
              }}
            />
            {/* White flashbulb — beat 1 */}
            <div
              key={`flash-${sweepKey}`}
              className="absolute inset-0 pointer-events-none animate-copy-flash z-20 bg-white"
            />
          </>
        )}

        {error && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-red-400/70 shrink-0" />
              <p className="font-mono text-xs text-red-400/80">
                {friendlyError(error.message)}
              </p>
            </div>
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="self-start font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm border border-red-400/40 text-red-400 hover:bg-red-400/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50"
              >
                Try Again
              </button>
            )}
          </div>
        )}

        {!error && output && (
          <pre className="font-mono text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
            {output}
            {isLoading && (
              <span
                className="inline-block w-[7px] h-[14px] bg-primary ml-0.5 align-middle animate-pulse"
                style={{ boxShadow: "0 0 8px rgba(255,51,0,0.8)" }}
              />
            )}
          </pre>
        )}

        {!error && isLoading && !output && (
          <span
            className="inline-block w-[7px] h-[14px] bg-primary animate-pulse"
            style={{ boxShadow: "0 0 8px rgba(255,51,0,0.8)" }}
          />
        )}
      </div>

    </div>
  );
}
