"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
    // Slight delay so the user sees the selection before the drawer slides away
    setTimeout(onMobileClose, 150);
  }

  return (
    <>
      {/* Mobile backdrop — always in DOM, fades with opacity */}
      <div
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      {/* Sidebar — always in DOM, slides with transform */}
      <aside
        className={`
          flex flex-col fixed top-0 left-0 z-[60] h-[100dvh]
          w-72 md:w-64 border-r border-zinc-800 bg-[#070707]
          transform transition-transform duration-300 ease-in-out
          overflow-visible
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "md:w-16" : "md:w-64"}
        `}
      >
        {/* Desktop floating toggle pill */}
        <button
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-50 h-6 w-6 bg-[#0a0a0a] border border-zinc-800 rounded-full items-center justify-center cursor-pointer hover:bg-zinc-900 hover:border-zinc-500 text-zinc-500 hover:text-zinc-300 transition-all duration-150"
        >
          {isCollapsed
            ? <ChevronRight className="w-3.5 h-3.5" />
            : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>

        {/* Header */}
        <div className="flex h-16 shrink-0 items-center border-b border-white/8 px-4 overflow-hidden">
          <div
            className={`flex flex-1 items-center transition-all duration-300 ease-in-out ${
              isCollapsed ? "md:justify-center gap-2" : "gap-2"
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
            {/* translate-y-[2px] corrects optical alignment with bottom-heavy flame */}
            <div
              className={`font-tech flex items-center leading-none tracking-tight whitespace-nowrap translate-y-[2px] transition-all duration-300 ease-in-out overflow-hidden ${
                isCollapsed ? "md:w-0 md:opacity-0 opacity-100" : "opacity-100"
              }`}
            >
              <span className="text-white font-extrabold text-xl">PromptStarter</span>
              <span className="text-[#FF3300] font-bold text-xl">.ai</span>
            </div>
          </div>

          {/* Mobile close button — only visible when drawer is open */}
          <button
            onClick={onMobileClose}
            aria-label="Close navigation"
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tool navigation */}
        <ToolNav
          activeToolId={activeToolId}
          onToolSelect={handleToolSelect}
          isCollapsed={isCollapsed && !isMobileOpen}
        />

        {/* Footer */}
        <div
          className={`mt-auto shrink-0 border-t border-white/8 px-4 py-4 overflow-hidden transition-all duration-300 pb-[max(1rem,env(safe-area-inset-bottom))] ${
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
