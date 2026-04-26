"use client";

import { useEffect, useRef, useState } from "react";
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
  onDismiss: () => void;
  /** Increments on every Copy click; used to trigger the re-copy pulse. */
  pulseKey: number | null;
  /** Ref to the Copy button — click-outside should NOT dismiss when clicking it. */
  copyButtonRef: React.RefObject<HTMLElement | null>;
}

export function PromptHandoff({ visible, onDismiss, pulseKey, copyButtonRef }: PromptHandoffProps) {
  const [preferred, setPreferred] = useState<DownstreamAIId | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPreferred(getPreferredAI());
  }, []);

  // Click-outside + ESC dismissal — only active when visible
  useEffect(() => {
    if (!visible) return;
    function onDown(e: MouseEvent) {
      const t = e.target as Node;
      if (popoverRef.current?.contains(t)) return;
      if (copyButtonRef.current?.contains(t)) return;
      onDismiss();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onDismiss();
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [visible, onDismiss, copyButtonRef]);

  function handleClick(id: DownstreamAIId, url: string) {
    setPreferredAI(id);
    setPreferred(id);
    window.open(url, "_blank", "noopener,noreferrer");
    onDismiss();
  }

  return (
    <div
      ref={popoverRef}
      role="dialog"
      aria-hidden={!visible}
      className={cn(
        "absolute top-full right-0 mt-2 z-30",
        "w-[360px] max-w-[calc(100vw-2rem)]",
        "transition-all duration-[250ms] ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
      style={{ transitionDelay: visible ? "150ms" : "0ms" }}
    >
      <div className="relative rounded-lg border border-[#FF3300]/30 bg-[#0a0a0a]/95 backdrop-blur-md px-5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]">
        {/* Re-copy pulse — re-keyed on every pulseKey change so animation restarts */}
        {pulseKey != null && (
          <div
            key={`pulse-${pulseKey}`}
            className="absolute inset-0 rounded-lg pointer-events-none animate-copy-pulse"
          />
        )}

        {/* Header: check icon + heading + paste cue */}
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
