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
      {/* Header — logo micro-interaction + collapse toggle */}
      <div className="relative flex h-[57px] shrink-0 items-center border-b border-white/8 px-3">

        {/* Logo container — centers and scales when collapsed */}
        <div
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-full justify-center" : "flex-1 gap-2.5 mr-1"
          }`}
        >
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className={`shrink-0 transition-all duration-300 ease-in-out origin-center ${
              isCollapsed ? "w-9 h-9 scale-110" : "w-6 h-6"
            }`}
            style={{ filter: "drop-shadow(0 0 8px rgba(255,51,0,0.45))", transform: "translateY(-1px)" }}
          />

          {/* Wordmark — fades and collapses out */}
          <div
            className={`font-tech flex items-baseline tracking-tight whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden ${
              isCollapsed ? "w-0 opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white font-bold text-base">PromptStarter</span>
            <span className="text-[#FF3300] font-semibold text-base">.ai</span>
          </div>
        </div>

        {/* Toggle chevron — absolute right edge */}
        <button
          onClick={onToggle}
          className={`shrink-0 flex items-center justify-center h-7 w-7 rounded-sm text-zinc-600 hover:text-zinc-200 hover:bg-white/5 transition-colors duration-150 ${
            isCollapsed ? "absolute right-1.5 bottom-1.5" : ""
          }`}
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
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 whitespace-nowrap">
          Promptstarter V1.0
        </p>
      </div>
    </aside>
  );
}
