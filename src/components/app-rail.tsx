"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronDown, Check, Plus, Pin, PinOff, ArrowRight, Users } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ToolNav } from "@/components/tool-nav";
import { useProfileSwitcher } from "@/lib/profile-context";
import { tools } from "@/lib/tools";
import type { RestoredGeneration } from "@/lib/types/generation";

const RAIL_PIN_KEY = "promptstarter:rail-pinned";

interface AppRailProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
  onRestoreGeneration: (gen: RestoredGeneration) => void;
  refreshKey: number;
  isPinned: boolean;
  onPinChange: (pinned: boolean) => void;
  onAddProfile?: () => void;
  userTier?: 'core' | 'pro';
  /**
   * When true, the rail is the picker's "background" — icons fade to 30%, the
   * rail forces a collapsed width, and tool-nav does NOT yet hold the morph
   * layoutIds (the gallery owns them). Flips to false the moment the user
   * picks, so the rail captures the morph and re-asserts full opacity.
   */
  iconsDeferred?: boolean;
}

export function AppRail({
  activeToolId,
  onToolSelect,
  isMobileOpen,
  onMobileClose,
  onRestoreGeneration,
  refreshKey,
  isPinned,
  onPinChange,
  onAddProfile,
  userTier = 'core',
  iconsDeferred = false,
}: AppRailProps) {
  const [hoverExpanded, setHoverExpanded] = useState(false);
  const hoverInTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hoverOutTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // While the picker is rendering, ignore pin/hover and force collapsed.
  const isExpanded = !iconsDeferred && (hoverExpanded || isPinned);

  function handleMouseEnter() {
    if (isPinned || iconsDeferred) return;
    clearTimeout(hoverOutTimer.current);
    hoverInTimer.current = setTimeout(() => setHoverExpanded(true), 150);
  }

  function handleMouseLeave() {
    if (isPinned || iconsDeferred) return;
    clearTimeout(hoverInTimer.current);
    hoverOutTimer.current = setTimeout(() => setHoverExpanded(false), 100);
  }

  function handleToolSelect(toolId: string) {
    onToolSelect(toolId);
    setTimeout(onMobileClose, 150);
  }

  function togglePin() {
    const next = !isPinned;
    onPinChange(next);
    try {
      localStorage.setItem(RAIL_PIN_KEY, String(next));
    } catch {
      // localStorage unavailable — no-op
    }
    if (next) {
      // When pinning, collapse hover state (pin takes over)
      setHoverExpanded(false);
    }
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-[75] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      {/* ── Desktop rail ────────────────────────────────────── */}
      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          hidden md:flex flex-col fixed left-0 top-14 z-[80]
          h-[calc(100dvh-56px)]
          border-r border-zinc-800 bg-[#070707]
          transition-[width,opacity] duration-200 ease-in-out
          overflow-hidden
          ${isExpanded ? "w-60" : "w-16"}
          ${isPinned ? "" : "shadow-[2px_0_20px_-5px_rgba(0,0,0,0.6)]"}
          ${iconsDeferred ? "opacity-30 pointer-events-none" : "opacity-100"}
        `}
      >
        <ToolNav
          activeToolId={activeToolId}
          onToolSelect={onToolSelect}
          isCollapsed={!isExpanded}
          userTier={userTier}
          enableMorphAnchor={!iconsDeferred}
        />

        {isExpanded && (
          <RailHistorySection
            refreshKey={refreshKey}
            onRestoreGeneration={onRestoreGeneration}
          />
        )}

        {/* Pin toggle + footer */}
        <div className="mt-auto shrink-0 border-t border-white/5">
          {/* Pin button — unified layout, icon stays in column */}
          <button
            onClick={togglePin}
            aria-label={isPinned ? "Unpin sidebar" : "Pin sidebar open"}
            title={isPinned ? "Unpin sidebar" : "Pin sidebar open"}
            className="flex items-center w-full px-5 gap-3 py-3 text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.03] transition-colors duration-150"
          >
            <span className="flex shrink-0 items-center justify-center w-5">
              {isPinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
            </span>
            <span
              className={cn(
                "font-sans text-[11px] whitespace-nowrap transition-opacity duration-200",
                isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              {isPinned ? "Unpin sidebar" : "Pin sidebar"}
            </span>
          </button>

          {/* Version stamp — always in DOM, fades with opacity */}
          <div className="px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <p
              className={cn(
                "font-sans text-[10px] tracking-wider text-muted-foreground/30 whitespace-nowrap",
                "transition-opacity duration-200",
                isExpanded ? "opacity-100" : "opacity-0"
              )}
            >
              Promptstarter V1.0
            </p>
          </div>
        </div>
      </aside>

      {/* ── Mobile drawer ───────────────────────────────────── */}
      <aside
        className={`
          flex md:hidden flex-col fixed left-0 top-14 z-[80]
          h-[calc(100dvh-56px)] w-72
          border-r border-zinc-800 bg-[#070707]
          transition-transform duration-300 ease-in-out
          overflow-visible overscroll-contain
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile close button row */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/8 px-4">
          <span className="font-sans text-xs text-zinc-500 uppercase tracking-wider">
            Menu
          </span>
          <button
            onClick={onMobileClose}
            aria-label="Close navigation"
            className="flex items-center justify-center h-11 w-11 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150 shrink-0 -mr-2"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile switcher at top of drawer */}
        <DrawerProfileSwitcher onAddProfile={onAddProfile} onMobileClose={onMobileClose} />

        {/* Tool navigation */}
        <ToolNav
          activeToolId={activeToolId}
          onToolSelect={handleToolSelect}
          isCollapsed={false}
          userTier={userTier}
          enableMorphAnchor={!iconsDeferred}
        />

        {/* History */}
        <RailHistorySection
          refreshKey={refreshKey}
          onRestoreGeneration={(gen) => {
            onRestoreGeneration(gen);
            setTimeout(onMobileClose, 150);
          }}
        />

        {/* Footer */}
        <div className="mt-auto shrink-0 border-t border-white/8 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <p className="font-sans text-[10px] tracking-wider text-muted-foreground/30 whitespace-nowrap">
            Promptstarter V1.0
          </p>
        </div>
      </aside>
    </>
  );
}

// ─── Drawer profile switcher (mobile) ────────────────────────────────────────

function DrawerProfileSwitcher({
  onAddProfile,
  onMobileClose,
}: {
  onAddProfile?: () => void;
  onMobileClose?: () => void;
}) {
  const { profiles, activeProfileId, setActiveProfileId } = useProfileSwitcher();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  const active = profiles.find((p) => p.id === activeProfileId) ?? null;
  if (!active) return null;

  return (
    <div className="shrink-0 border-b border-white/5 relative overflow-visible">
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="group w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-white/[0.02] transition-colors duration-150"
      >
        <div className="min-w-0 flex-1">
          <div className="font-sans text-[10px] tracking-wider text-[#FF3300]/70 uppercase truncate">
            {active.company_name}
          </div>
          <div className="font-sans text-[11px] text-zinc-500 truncate">
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
          className="absolute left-2 right-2 top-full mt-1 z-[110] rounded-lg border border-white/10 bg-[#2A2A2A] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
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
                    isActive ? "bg-[#FF3300]/10" : "hover:bg-white/[0.04]"
                  } ${isResearching || isFailed ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-sans text-[10px] tracking-wider text-[#FF3300]/80 uppercase truncate">
                      {p.company_name}
                    </div>
                    <div className="font-sans text-xs text-zinc-300 truncate">
                      {p.product_name}
                      {isResearching && <span className="ml-2 text-zinc-600">• researching…</span>}
                      {isFailed && <span className="ml-2 text-red-400/80">• failed</span>}
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#FF3300] shrink-0 mt-1" />}
                </button>
              );
            })}
          </div>
          <Link
            href="/profiles"
            onClick={() => setOpen(false)}
            className="block border-t border-white/5 px-3 py-2.5 font-sans text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors duration-100"
          >
            <span className="inline-flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-zinc-500" />
              Manage profiles
            </span>
          </Link>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              if (onAddProfile) {
                onMobileClose?.();
                onAddProfile();
              } else {
                router.push("/dashboard?openWizard=true");
              }
            }}
            className="w-full text-left block border-t border-white/5 px-3 py-2.5 font-sans text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors duration-100"
          >
            <span className="inline-flex items-center gap-2">
              <Plus className="w-3.5 h-3.5 text-[#FF3300]" />
              Add product profile
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

// ─── History section ──────────────────────────────────────────────────────────

export type GenerationMeta = {
  id: string;
  tool_id: string;
  variable_values: Record<string, string>;
  created_at: string;
};

type GenerationFull = {
  id: string;
  tool_id: string;
  variable_values: Record<string, string>;
  slider_values: Record<string, number>;
  output: string;
  created_at: string;
};

export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const HISTORY_OPEN_KEY = "rail-history-open";

function RailHistorySection({
  refreshKey,
  onRestoreGeneration,
}: {
  refreshKey: number;
  onRestoreGeneration: (gen: RestoredGeneration) => void;
}) {
  const [items, setItems] = useState<GenerationMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pendingDeletes = useRef<
    Map<string, { item: GenerationMeta; timer: ReturnType<typeof setTimeout> }>
  >(new Map());

  // Hydrate open state from localStorage
  useEffect(() => {
    try {
      setIsOpen(localStorage.getItem(HISTORY_OPEN_KEY) === "true");
    } catch {
      // localStorage unavailable — stay closed
    }
  }, []);

  // Flush any pending (undo-window) deletes when the page is torn down.
  // pagehide fires on refresh, tab close, and bfcache navigation — more
  // reliable than beforeunload on mobile Safari. keepalive lets the request
  // outlive the page.
  useEffect(() => {
    function onPageHide() {
      for (const [id] of pendingDeletes.current) {
        fetch(`/api/generations/${id}`, { method: "DELETE", keepalive: true }).catch(() => {});
      }
      pendingDeletes.current.clear();
    }
    window.addEventListener("pagehide", onPageHide);
    return () => window.removeEventListener("pagehide", onPageHide);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/api/generations")
      .then((r) => (r.ok ? r.json() : []))
      .then((data: GenerationMeta[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [refreshKey]);

  function toggleOpen() {
    const next = !isOpen;
    setIsOpen(next);
    try {
      localStorage.setItem(HISTORY_OPEN_KEY, String(next));
    } catch {
      // ignore
    }
  }

  const handleClick = useCallback(
    async (id: string) => {
      try {
        const r = await fetch(`/api/generations/${id}`);
        if (!r.ok) return;
        const gen: GenerationFull = await r.json();
        onRestoreGeneration({
          toolId: gen.tool_id,
          variableValues: gen.variable_values,
          sliderValues: gen.slider_values,
          output: gen.output,
        });
      } catch {
        // silently ignore — non-fatal
      }
    },
    [onRestoreGeneration]
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      const item = items.find((i) => i.id === id);
      if (!item) return;

      setItems((prev) => prev.filter((i) => i.id !== id));

      const timer = setTimeout(() => {
        pendingDeletes.current.delete(id);
        fetch(`/api/generations/${id}`, { method: "DELETE" }).catch(() => {});
      }, 5000);

      pendingDeletes.current.set(id, { item, timer });

      toast("Generation deleted", {
        duration: 5000,
        action: {
          label: "Undo",
          onClick: () => {
            const pending = pendingDeletes.current.get(id);
            if (!pending) return;
            clearTimeout(pending.timer);
            pendingDeletes.current.delete(id);
            setItems((prev) =>
              [...prev, pending.item].sort(
                (a, b) =>
                  new Date(b.created_at).getTime() -
                  new Date(a.created_at).getTime()
              )
            );
          },
        },
      });
    },
    [items]
  );

  // Hide entirely when empty and not loading
  if (!loading && items.length === 0) return null;

  const displayItems = items.slice(0, 5);

  return (
    <div className="shrink-0 border-t border-white/5 px-3 py-1">
      {/* Collapse toggle header */}
      <button
        type="button"
        onClick={toggleOpen}
        className="flex w-full items-center justify-between px-1 min-h-[44px] md:min-h-[32px] group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3300]/50 rounded"
      >
        <span className="font-sans text-[10px] tracking-wider text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors duration-150">
          Recent{!loading && items.length > 0 ? ` · ${items.length}` : ""}
        </span>
        <ChevronDown
          size={12}
          className={`text-zinc-600 group-hover:text-zinc-400 transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable list */}
      {isOpen && (
        <>
          <div className="flex flex-col gap-0.5 max-h-[220px] overflow-y-auto pb-1">
            {loading ? (
              [0, 1, 2].map((i) => (
                <div key={i} className="h-9 rounded-md bg-zinc-900/60 animate-pulse" />
              ))
            ) : (
              displayItems.map((item) => {
                const tool = tools.find((t) => t.id === item.tool_id);
                const shortName = (tool?.name ?? item.tool_id).replace(/^The\s+/i, "");
                const firstVal = Object.values(item.variable_values)[0] ?? "";
                const subtitle = firstVal.length > 24 ? firstVal.slice(0, 23) + "…" : firstVal;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="w-full text-left rounded-md px-2 py-1.5 hover:bg-white/[0.04] transition-colors duration-100 group relative"
                  >
                    <div className="flex items-baseline justify-between gap-2 min-w-0 pr-6">
                      <span className="font-sans text-[11px] text-zinc-300 group-hover:text-white truncate transition-colors duration-100 leading-snug">
                        {shortName}
                      </span>
                      <span className="font-sans text-[10px] text-zinc-600 shrink-0">
                        {timeAgo(item.created_at)}
                      </span>
                    </div>
                    {subtitle && (
                      <div className="font-sans text-[10px] text-zinc-600 truncate leading-snug pr-6">
                        {subtitle}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={(e) => handleDelete(e, item.id)}
                      aria-label="Delete"
                      className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded text-zinc-600 hover:text-red-400 hover:bg-white/[0.06] transition-colors duration-100
                        opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
                    >
                      <X size={11} />
                    </button>
                  </button>
                );
              })
            )}
          </div>

          {!loading && items.length > 0 && (
            <Link
              href="/history"
              className="mt-1 mb-1 flex items-center gap-1 px-1 font-sans text-[10px] text-zinc-600 hover:text-zinc-300 transition-colors duration-100"
            >
              Show all
              <ArrowRight size={10} />
            </Link>
          )}
        </>
      )}
    </div>
  );
}
