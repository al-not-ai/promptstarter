"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ToolNav } from "@/components/tool-nav";

interface SidebarProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({
  activeToolId,
  onToolSelect,
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  function handleToolSelect(toolId: string) {
    onToolSelect(toolId);
    onMobileClose(); // auto-close drawer on mobile after selection
  }

  return (
    <>
      {/* Mobile backdrop overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          flex flex-col fixed left-0 top-0 bottom-0 z-50
          w-64 border-r border-zinc-800 bg-[#070707]
          transition-all duration-300 ease-in-out overflow-visible
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "md:w-16" : "md:w-64"}
        `}
      >
        {/* Floating toggle pill — desktop only */}
        <button
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-50 h-6 w-6 bg-[#0a0a0a] border border-zinc-800 rounded-full items-center justify-center cursor-pointer hover:bg-zinc-900 hover:border-zinc-500 text-zinc-500 hover:text-zinc-300 transition-all duration-150"
        >
          {isCollapsed
            ? <ChevronRight className="w-3.5 h-3.5" />
            : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>

        {/* Header — logo + wordmark */}
        <div className="flex h-16 shrink-0 items-center border-b border-white/8 px-4 overflow-hidden">
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              isCollapsed ? "md:w-full md:justify-center gap-3" : "gap-3"
            }`}
          >
            <img
              src="/icon-dark.svg"
              alt=""
              aria-hidden="true"
              className={`shrink-0 transition-all duration-300 ease-in-out origin-center ${
                isCollapsed ? "md:w-9 md:h-9 md:scale-110 w-8 h-8" : "w-8 h-8"
              }`}
              style={{ filter: "drop-shadow(0 0 8px rgba(255,51,0,0.45))" }}
            />
            <div
              className={`font-tech flex items-center leading-none tracking-tight whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden ${
                isCollapsed ? "md:w-0 md:opacity-0 opacity-100" : "opacity-100"
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
          onToolSelect={handleToolSelect}
          isCollapsed={isCollapsed && !isMobileOpen}
        />

        {/* Footer */}
        <div
          className={`shrink-0 border-t border-white/8 px-4 py-4 overflow-hidden transition-all duration-300 ${
            isCollapsed ? "md:opacity-0 md:pointer-events-none opacity-100" : "opacity-100"
          }`}
        >
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground/30 whitespace-nowrap">
            Promptstarter V1.0
          </p>
        </div>
      </aside>
    </>
  );
}
