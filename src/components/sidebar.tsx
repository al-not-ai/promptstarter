"use client";

import { X, ChevronLeft, ChevronRight, ChevronDown, Plus, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ToolNav } from "@/components/tool-nav";
import { useProfileSwitcher } from "@/lib/profile-context";

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
        className={`fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      {/* Sidebar — always in DOM, slides with transform */}
      <aside
        className={`
          flex flex-col fixed top-0 left-0 z-[100] h-[100dvh]
          w-72 border-r border-zinc-800 bg-[#070707]
          transition-[transform,width] duration-300 ease-in-out
          overflow-visible overscroll-contain
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "md:w-20" : "md:w-72"}
        `}
      >
        {/* Desktop floating toggle pill */}
        <button
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 bg-[#0a0a0a] border border-zinc-800 rounded-full items-center justify-center cursor-pointer hover:bg-zinc-900 hover:border-zinc-500 text-zinc-500 hover:text-zinc-300 transition-all duration-150"
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

          {/* Mobile close button — 44px touch target */}
          <button
            onClick={onMobileClose}
            aria-label="Close navigation"
            className="md:hidden flex items-center justify-center h-11 w-11 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile switcher — active product profile with dropdown */}
        <ProfileSwitcher isCollapsed={isCollapsed && !isMobileOpen} />

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

// ─── Profile switcher ─────────────────────────────────────────────────────

function ProfileSwitcher({ isCollapsed }: { isCollapsed: boolean }) {
  const { profiles, activeProfileId, setActiveProfileId } = useProfileSwitcher();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Collapse the menu if the sidebar itself collapses under us
  useEffect(() => {
    if (isCollapsed) setOpen(false);
  }, [isCollapsed]);

  const active = profiles.find((p) => p.id === activeProfileId) ?? null;
  if (!active) return null;

  return (
    <div
      className={`shrink-0 border-b border-white/5 relative overflow-visible transition-all duration-300 ease-in-out ${
        isCollapsed ? "md:max-h-0 md:py-0 md:opacity-0 pointer-events-auto" : "opacity-100"
      }`}
    >
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="group w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-white/[0.02] transition-colors duration-150"
      >
        <div className="min-w-0 flex-1">
          <div className="font-mono text-[10px] tracking-wider text-[#FF3300]/70 uppercase truncate">
            {active.company_name}
          </div>
          <div className="font-mono text-[11px] text-zinc-500 truncate">
            {active.product_name}
          </div>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-zinc-500 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-[#FF3300]" : "group-hover:text-zinc-300"
          }`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="listbox"
          className="absolute left-2 right-2 top-full mt-1 z-[110] rounded-lg border border-white/10 bg-[#0a0a0a] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <div className="max-h-72 overflow-y-auto py-1">
            {profiles.map((p) => {
              const isActive = p.id === activeProfileId;
              const isResearching = p.research_status === "researching";
              const isFailed = p.research_status === "failed";
              return (
                <button
                  key={p.id}
                  role="option"
                  aria-selected={isActive}
                  disabled={isResearching || isFailed}
                  onClick={() => {
                    setActiveProfileId(p.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 flex items-start gap-2 transition-colors duration-100 ${
                    isActive
                      ? "bg-[#FF3300]/10"
                      : "hover:bg-white/[0.04]"
                  } ${isResearching || isFailed ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] tracking-wider text-[#FF3300]/80 uppercase truncate">
                      {p.company_name}
                    </div>
                    <div className="font-mono text-xs text-zinc-300 truncate">
                      {p.product_name}
                      {isResearching && (
                        <span className="ml-2 text-zinc-600">• researching…</span>
                      )}
                      {isFailed && (
                        <span className="ml-2 text-red-400/80">• failed</span>
                      )}
                    </div>
                  </div>
                  {isActive && (
                    <Check className="w-3.5 h-3.5 text-[#FF3300] shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          <Link
            href="/onboarding"
            onClick={() => setOpen(false)}
            className="block border-t border-white/5 px-3 py-2.5 font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors duration-100"
          >
            <span className="inline-flex items-center gap-2">
              <Plus className="w-3.5 h-3.5 text-[#FF3300]" />
              Add product profile
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
