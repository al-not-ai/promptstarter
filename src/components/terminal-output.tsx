"use client";

import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PromptHandoff } from "@/components/prompt-handoff";

interface TerminalOutputProps {
  output: string;
  isLoading: boolean;
  error: Error | undefined;
  rawContext?: string;
}

export function TerminalOutput({ output, isLoading, error, rawContext }: TerminalOutputProps) {
  const isEmpty = !output && !isLoading && !error;
  const [hasCopied, setHasCopied] = useState(false);
  const [sweepKey, setSweepKey] = useState<number | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);

  // Reset on new output (re-generation or history restore)
  useEffect(() => {
    setHasCopied(false);
    setSweepKey(null);
  }, [output]);

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
        className="relative px-5 py-5 max-h-[520px] overflow-y-auto"
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
          <p className="font-mono text-xs text-red-400/80">
            Error: {error.message}
          </p>
        )}

        {output && (
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

        {isLoading && !output && (
          <span
            className="inline-block w-[7px] h-[14px] bg-primary animate-pulse"
            style={{ boxShadow: "0 0 8px rgba(255,51,0,0.8)" }}
          />
        )}
      </div>

    </div>
  );
}
