"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, BarChart2, Zap, MessageSquare, RotateCcw, DollarSign, Lock, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TOOL_CATEGORIES } from "@/lib/tools";

interface ToolNavProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
  isCollapsed?: boolean;
  userTier?: 'core' | 'pro';
  /**
   * When true, each tool icon is wrapped in a motion element with a stable
   * layoutId, so the picker → rail morph animation lands here. Default false:
   * the picker (tool-picker.tsx) owns the layoutIds during the gallery view,
   * and the rail picks them up only after the user has chosen a tool.
   */
  enableMorphAnchor?: boolean;
}

export const TOOL_ICONS: Record<string, LucideIcon> = {
  "pre-call-recon":         Phone,
  "objection-defuser":      ShieldCheck,
  "competitor-battlecard":  BarChart2,
  "cold-hook":              Zap,
  "follow-up-forward":      MessageSquare,
  "deal-reviver":           RotateCcw,
  "cfo-pitch":              DollarSign,
};

export const toolIconLayoutId = (toolId: string) => `tool-icon-${toolId}`;

export function ToolNav({
  activeToolId,
  onToolSelect,
  isCollapsed = false,
  userTier = 'core',
  enableMorphAnchor = false,
}: ToolNavProps) {
  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
      {TOOL_CATEGORIES.map(({ category, tools }) => (
        <div key={category}>
          {/* Eyebrow — always in DOM, collapses to zero-height when rail is narrow */}
          <p
            className={cn(
              "font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50 px-2 whitespace-nowrap overflow-hidden transition-all duration-200",
              isCollapsed ? "max-h-0 mb-0 opacity-0" : "max-h-4 mb-1.5 opacity-100"
            )}
          >
            {category}
          </p>
          <ul className="space-y-0.5">
            {tools.map((tool) => {
              const isActive = tool.id === activeToolId;
              const Icon = TOOL_ICONS[tool.id] ?? Zap;
              const isLocked = tool.tier === 'pro' && userTier === 'core';
              return (
                <li key={tool.id}>
                  <button
                    onClick={() => onToolSelect(tool.id)}
                    title={isCollapsed ? tool.name : undefined}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative w-full flex items-center gap-3 px-2 py-2.5 md:py-2",
                      "min-h-[44px] md:min-h-[36px] rounded-sm transition-colors duration-150",
                      "before:content-[''] before:absolute before:left-0 before:top-1.5 before:bottom-1.5",
                      "before:w-[3px] before:rounded-sm before:bg-[#FF3300]",
                      "before:transition-opacity before:duration-150",
                      isActive
                        ? "before:opacity-100 bg-white/[0.04] text-foreground"
                        : "before:opacity-0 text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                    )}
                  >
                    {/* Icon — fixed column, always visible. When the picker
                        is active, the morph anchor is OFF here so the gallery
                        owns the layoutId; when the user lands on a tool, the
                        anchor flips ON and Framer Motion morphs the gallery
                        icon into this slot. */}
                    {enableMorphAnchor ? (
                      <motion.span
                        layoutId={toolIconLayoutId(tool.id)}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="flex shrink-0 items-center justify-center w-5"
                      >
                        <Icon
                          size={17}
                          strokeWidth={isActive ? 2.25 : 1.75}
                          className={cn(
                            "transition-colors duration-150",
                            isActive && "text-[#FF3300]"
                          )}
                          style={isActive ? { filter: "drop-shadow(0 0 4px rgba(255,51,0,0.5))" } : undefined}
                        />
                      </motion.span>
                    ) : (
                      <span className="flex shrink-0 items-center justify-center w-5">
                        <Icon
                          size={17}
                          strokeWidth={isActive ? 2.25 : 1.75}
                          className={cn(
                            "transition-colors duration-150",
                            isActive && "text-[#FF3300]"
                          )}
                          style={isActive ? { filter: "drop-shadow(0 0 4px rgba(255,51,0,0.5))" } : undefined}
                        />
                      </span>
                    )}

                    {/* Label — fades and slides in when expanded */}
                    <span
                      aria-hidden={isCollapsed}
                      className={cn(
                        "font-mono text-sm md:text-[13px] truncate min-w-0 text-left flex items-center gap-1.5",
                        "transition-[opacity,transform] duration-200",
                        isCollapsed
                          ? "opacity-0 -translate-x-1 pointer-events-none"
                          : "opacity-100 translate-x-0"
                      )}
                      style={isActive ? { textShadow: "0 0 12px rgba(255,51,0,0.2)" } : undefined}
                    >
                      <span className="truncate">{tool.name.replace(/^The\s+/, "")}</span>
                      {isLocked && (
                        <Lock size={11} className="shrink-0 text-zinc-600" />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
