"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ToolNav } from "@/components/tool-nav";

interface SidebarProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ activeToolId, onToolSelect, isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`hidden md:flex fixed left-0 top-0 bottom-0 z-50 flex-col border-r border-zinc-800 bg-[#070707] transition-all duration-300 overflow-hidden ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header — logo + collapse toggle */}
      <div className="flex h-[57px] shrink-0 items-center border-b border-white/8 px-3 gap-2">
        {/* Flame icon — always visible */}
        <img
          src="/icon-dark.svg"
          width={24}
          height={24}
          alt=""
          aria-hidden="true"
          className="shrink-0"
          style={{ transform: "translateY(-1px)", filter: "drop-shadow(0 0 6px rgba(255,51,0,0.35))" }}
        />

        {/* Wordmark — hidden when collapsed */}
        <div
          className={`font-tech flex items-baseline tracking-tight whitespace-nowrap transition-all duration-300 overflow-hidden ${
            isCollapsed ? "w-0 opacity-0" : "flex-1 opacity-100"
          }`}
        >
          <span className="text-white font-bold text-base">PromptStarter</span>
          <span className="text-[#FF3300] font-semibold text-base">.ai</span>
        </div>

        {/* Toggle chevron */}
        <button
          onClick={onToggle}
          className="shrink-0 flex items-center justify-center h-7 w-7 rounded-sm text-zinc-600 hover:text-zinc-200 hover:bg-white/5 transition-colors duration-150"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Tool navigation */}
      <ToolNav
        activeToolId={activeToolId}
        onToolSelect={onToolSelect}
        isCollapsed={isCollapsed}
      />

      {/* Footer */}
      <div
        className={`shrink-0 border-t border-white/8 px-4 py-4 overflow-hidden transition-all duration-300 ${
          isCollapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 whitespace-nowrap">
          Promptstarter V1.0
        </p>
      </div>
    </aside>
  );
}
