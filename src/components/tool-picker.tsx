"use client";

import { motion } from "framer-motion";
import { Lock, type LucideIcon } from "lucide-react";
import { TOOL_CATEGORIES } from "@/lib/tools";
import { TOOL_ICONS, toolIconLayoutId } from "@/components/tool-nav";
import { DesktopProfileSwitcher } from "@/components/top-bar";
import { cn } from "@/lib/utils";

interface ToolPickerProps {
  onPick: (toolId: string) => void;
  userTier?: "core" | "pro";
}

/**
 * One-line outcome per tool. Each line describes the deliverable the engine
 * produces for that tool, derived from `outputDescriptor` + `outputFormat`
 * in src/lib/tools.ts. Edit the matching tool entry there before changing
 * copy here so the surfaces stay aligned.
 */
const TOOL_OUTCOMES: Record<string, string> = {
  "pre-call-recon":
    "Anchor facts, openers, and first-five-minute questions before a discovery call.",
  "objection-defuser":
    "A direct response and the follow-up question for any objection in your pipeline.",
  "competitor-battlecard":
    "Five discovery questions tuned to win against a known competitor.",
  "cold-hook":
    "A first-touch outreach hook tied to a real trigger event.",
  "follow-up-forward":
    "Post-call email plus a forward-ready recap your prospect can send internally.",
  "deal-reviver":
    "A three-touch revival sequence to bring a stalled deal back.",
  "cfo-pitch":
    "A CFO-ready business case in their language, not yours.",
};

function ToolCard({
  toolId,
  name,
  outcome,
  Icon,
  isLocked,
  onPick,
}: {
  toolId: string;
  name: string;
  outcome: string;
  Icon: LucideIcon;
  isLocked: boolean;
  onPick: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPick(toolId)}
      className={cn(
        "group relative flex flex-col items-start text-left",
        "min-h-[160px] md:min-h-[180px] p-5 rounded-md",
        "bg-[#1E1E1E] border border-white/10",
        "transition-[transform,border-color,box-shadow] duration-200 ease-out",
        "hover:border-[#FF3300]/30 hover:shadow-[0_0_24px_-4px_rgba(255,51,0,0.18)]",
        "active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
      )}
    >
      {/* Tier chip — top right, quiet */}
      <span
        className={cn(
          "absolute top-3 right-3 font-sans text-[10px] tracking-[0.16em] uppercase",
          isLocked ? "text-[#FF7A55]" : "text-zinc-500"
        )}
      >
        {isLocked ? "Pro" : "Core"}
      </span>

      {/* Icon — the morph anchor. Same layoutId in tool-nav rail. */}
      <motion.span
        layoutId={toolIconLayoutId(toolId)}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="flex items-center justify-center mb-4"
      >
        <Icon
          size={32}
          strokeWidth={1.75}
          className="text-[#FF3300]"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,51,0,0.35))" }}
        />
      </motion.span>

      <h3 className="font-sans text-white font-semibold text-[17px] tracking-tight leading-tight flex items-center gap-1.5">
        {name}
        {isLocked && <Lock size={12} className="text-zinc-600" />}
      </h3>
      <p className="mt-1.5 text-[13px] leading-snug text-zinc-400 max-w-[280px]">
        {outcome}
      </p>
    </button>
  );
}

export function ToolPicker({ onPick, userTier = "core" }: ToolPickerProps) {
  return (
    <section
      aria-label="Tool picker"
      className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-10 md:py-16"
    >
      <header className="mb-8 md:mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-sans text-white text-[22px] md:text-[26px] font-semibold tracking-tight">
            Pick a tool to start
          </h1>
          <p className="mt-1.5 text-[14px] text-zinc-400">
            Pick once. Switch anytime.
          </p>
        </div>
        <div className="relative shrink-0 pt-1">
          <DesktopProfileSwitcher dropdownAlign="right" />
        </div>
      </header>

      <div className="flex flex-col gap-8 md:gap-10">
        {TOOL_CATEGORIES.map(({ category, tools: categoryTools }) => (
          <div key={category}>
            <p className="font-sans text-[11px] tracking-wider uppercase text-zinc-500 mb-3">
              {category}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {categoryTools.map((tool) => {
                const Icon = TOOL_ICONS[tool.id];
                if (!Icon) return null;
                const isLocked = tool.tier === "pro" && userTier === "core";
                return (
                  <ToolCard
                    key={tool.id}
                    toolId={tool.id}
                    name={tool.name}
                    outcome={TOOL_OUTCOMES[tool.id] ?? ""}
                    Icon={Icon}
                    isLocked={isLocked}
                    onPick={onPick}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
