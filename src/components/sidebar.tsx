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
      className={`hidden md:flex fixed left-0 top-0 bottom-0 z-50 flex-col border-r border-zinc-800 bg-[#070707] transition-all duration-300 overflow-visible ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Floating toggle pill — sits on the right border */}
      <button
        onClick={onToggle}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute -right-3 top-8 z-50 h-6 w-6 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all duration-150"
      >
        {isCollapsed
          ? <ChevronRight className="w-3.5 h-3.5" />
          : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Header — logo + wordmark */}
      <div className="flex h-[57px] shrink-0 items-center border-b border-white/8 px-4 overflow-hidden">

        {/* Logo container — centers and scales when collapsed */}
        <div
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-full justify-center" : "gap-3"
          }`}
        >
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className={`shrink-0 transition-all duration-300 ease-in-out origin-center ${
              isCollapsed ? "w-9 h-9 scale-110" : "w-8 h-8"
            }`}
            style={{ filter: "drop-shadow(0 0 8px rgba(255,51,0,0.45))" }}
          />

          {/* Wordmark — fades and collapses out */}
          <div
            className={`font-tech flex items-center leading-none tracking-tight whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden ${
              isCollapsed ? "w-0 opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white font-extrabold text-xl">PromptStarter</span>
            <span className="text-[#FF3300] font-bold text-xl">.ai</span>
          </div>
        </div>
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
