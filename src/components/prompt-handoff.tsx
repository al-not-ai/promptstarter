"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DOWNSTREAM_AIS,
  getPreferredAI,
  setPreferredAI,
  type DownstreamAIId,
} from "@/lib/downstream-ai";

interface PromptHandoffProps {
  visible: boolean;
}

export function PromptHandoff({ visible }: PromptHandoffProps) {
  const [preferred, setPreferred] = useState<DownstreamAIId | null>(null);

  useEffect(() => {
    setPreferred(getPreferredAI());
  }, []);

  function handleClick(id: DownstreamAIId, url: string) {
    setPreferredAI(id);
    setPreferred(id);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-out",
        visible
          ? "max-h-[260px] opacity-100 mt-3"
          : "max-h-0 opacity-0 mt-0 pointer-events-none"
      )}
    >
      <div className="rounded-lg border border-[#FF3300]/30 bg-[#FF3300]/[0.04] backdrop-blur-md px-5 py-4">
        {/* Header */}
        <div className="flex items-start gap-2.5 mb-3">
          <Check
            size={16}
            className="text-[#FF3300] shrink-0 mt-0.5"
            style={{ filter: "drop-shadow(0 0 4px rgba(255,51,0,0.6))" }}
          />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-sm text-white">
              Prompt copied to clipboard
            </p>
            <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
              Paste with ⌘V (Mac) or Ctrl+V (Windows)
            </p>
          </div>
        </div>

        {/* Three downstream AI buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {DOWNSTREAM_AIS.map((ai) => {
            const isPreferred = preferred === ai.id;
            return (
              <button
                key={ai.id}
                onClick={() => handleClick(ai.id, ai.url)}
                className={cn(
                  "group flex items-center justify-between gap-2 px-3.5 py-3 rounded-md border transition-all duration-150 min-h-[44px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50",
                  isPreferred
                    ? "bg-[#FF3300]/10 border-[#FF3300]/60 text-white"
                    : "bg-zinc-900/60 border-white/10 text-zinc-300 hover:border-[#FF3300]/40 hover:bg-[#FF3300]/[0.04] hover:text-white"
                )}
                style={isPreferred ? { boxShadow: "0 0 12px rgba(255,51,0,0.18)" } : undefined}
              >
                <span className="font-mono text-sm font-semibold tracking-tight">
                  {ai.label}
                </span>
                <ArrowUpRight
                  size={14}
                  className={cn(
                    "shrink-0 transition-transform duration-150",
                    isPreferred
                      ? "text-[#FF3300]"
                      : "text-zinc-500 group-hover:text-[#FF3300] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
