"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DOWNSTREAM_AIS,
  getPreferredAI,
  setPreferredAI,
  type DownstreamAIId,
} from "@/lib/downstream-ai";

export default function SettingsPage() {
  const [preferred, setPreferred] = useState<DownstreamAIId | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPreferred(getPreferredAI());
    setLoaded(true);
  }, []);

  function choose(id: DownstreamAIId | null) {
    setPreferredAI(id);
    setPreferred(id);
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background pt-14">
      <div className="sticky top-14 z-10 border-b border-zinc-800 bg-[#070707]/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center h-8 w-8 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150"
            aria-label="Back"
          >
            <ArrowLeft size={16} />
          </Link>
          <h1 className="font-mono text-sm font-bold text-white">Settings</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full px-4 md:px-6 py-8 flex flex-col gap-8">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
            Default AI
          </h2>
          <p className="font-mono text-xs text-zinc-500 mb-4 leading-relaxed">
            When you copy a generated prompt, this AI gets the spotlight in the handoff panel. Change anytime — your last-clicked AI also becomes the default automatically.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {DOWNSTREAM_AIS.map((ai) => {
              const isSelected = preferred === ai.id;
              return (
                <button
                  key={ai.id}
                  onClick={() => choose(ai.id)}
                  className={cn(
                    "flex items-center justify-between gap-2 px-3.5 py-3 rounded-md border transition-all duration-150 min-h-[44px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50",
                    isSelected
                      ? "bg-[#FF3300]/10 border-[#FF3300]/60 text-white"
                      : "bg-zinc-900/60 border-white/10 text-zinc-300 hover:border-[#FF3300]/40 hover:bg-[#FF3300]/[0.04]"
                  )}
                  style={isSelected ? { boxShadow: "0 0 12px rgba(255,51,0,0.18)" } : undefined}
                >
                  <span className="font-mono text-sm font-semibold">{ai.label}</span>
                  {isSelected && <Check size={14} className="text-[#FF3300] shrink-0" />}
                </button>
              );
            })}
          </div>
          {loaded && preferred && (
            <button
              onClick={() => choose(null)}
              className="mt-3 font-mono text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
            >
              Clear default
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
