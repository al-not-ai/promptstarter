"use client";

import { useState } from "react";

interface TerminalOutputProps {
  output: string;
  isLoading: boolean;
  error: Error | undefined;
  rawContext?: string;
}

export function TerminalOutput({ output, isLoading, error, rawContext }: TerminalOutputProps) {
  const isEmpty = !output && !isLoading && !error;
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!output) return;
    const hasContext = Boolean(rawContext?.trim());

    const kickoff =
      `\n\n### THE INTERACTIVE KICKOFF\n**Downstream AI:** After you generate the response, analyze it and ask the user ONE punchy, strategic clarifying question to refine the tone or approach.` +
      (hasContext ? "" : " Also, invite the user to provide any recent email threads, LinkedIn profiles, or attached documents for context.");

    const intel = hasContext ? `\n\n### RAW USER INTEL\n${rawContext!.trim()}` : "";

    navigator.clipboard.writeText(output + kickoff + intel).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="w-full max-w-5xl mt-4 md:mt-6 border border-white/10 bg-black/40 backdrop-blur-md rounded-sm overflow-hidden">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
        <span
          className="h-1.5 w-1.5 rounded-full bg-primary"
          style={{ boxShadow: "0 0 6px rgba(255,51,0,0.9)" }}
        />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          Output Terminal
        </span>

        <div className="ml-auto flex items-center gap-3">
          {isLoading && (
            <span className="font-mono text-[10px] text-primary animate-pulse">
              Generating...
            </span>
          )}
          {output && !isLoading && (
            <button
              onClick={handleCopy}
              className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-150 px-2 py-1 rounded-sm border border-white/10 hover:border-primary/40 hover:bg-primary/5"
              style={copied ? { color: "rgb(255,51,0)", borderColor: "rgba(255,51,0,0.4)" } : { color: "rgba(113,113,122,0.7)" }}
            >
              {copied ? "Copied ✓" : rawContext?.trim() ? "Copy + Intel" : "Copy"}
            </button>
          )}
        </div>
      </div>

      {/* Terminal body — scrollable, max height capped */}
      <div
        className="px-5 py-5 min-h-[180px] md:min-h-[220px] max-h-[420px] md:max-h-[520px] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,51,0,0.15) transparent",
        }}
      >
        {isEmpty && (
          <p className="font-mono text-xs text-muted-foreground/30 select-none">
            Payload will appear here after generation...
          </p>
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
