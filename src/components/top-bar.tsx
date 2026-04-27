"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Check,
  Plus,
  Settings,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useProfileSwitcher } from "@/lib/profile-context";
import { createClient } from "@/lib/supabase/client";

interface TopBarProps {
  isMobileOpen: boolean;
  onMenuToggle: () => void;
  onAddProfile?: () => void;
}

export function TopBar({ isMobileOpen, onMenuToggle, onAddProfile }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[90] h-14 flex items-center border-b border-zinc-800 bg-[#070707]/95 backdrop-blur-md">

      {/* ── Desktop layout ─────────────────────────────────── */}
      <div className="hidden md:flex flex-1 items-center min-w-0">
        {/* Logo + brand */}
        <div className="flex items-center gap-2 px-4 shrink-0">
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className="w-7 h-7 shrink-0"
            style={{ filter: "drop-shadow(0 0 6px rgba(255,51,0,0.45))" }}
          />
          <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px]">
            <span className="text-white font-extrabold text-lg">PromptStarter</span>
            <span className="text-[#FF3300] font-bold text-lg">.ai</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-zinc-700/60 shrink-0" />

        {/* Profile switcher */}
        <div className="px-3">
          <DesktopProfileSwitcher onAddProfile={onAddProfile} />
        </div>

        {/* Center spacer — future cmd-K search */}
        <div className="flex-1" />

        {/* User avatar */}
        <div className="px-4 shrink-0">
          <UserMenu />
        </div>
      </div>

      {/* ── Mobile layout ──────────────────────────────────── */}
      <div className="flex md:hidden flex-1 items-center justify-between px-2">
        {/* Left: hamburger toggle */}
        <button
          onClick={onMenuToggle}
          aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
          className="flex items-center justify-center h-11 w-11 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors duration-150 shrink-0"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Center: brand lockup */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src="/icon-dark.svg"
            alt=""
            aria-hidden="true"
            className="w-6 h-6 shrink-0"
            style={{ filter: "drop-shadow(0 0 6px rgba(255,51,0,0.45))" }}
          />
          <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px]">
            <span className="text-white font-extrabold text-base">PromptStarter</span>
            <span className="text-[#FF3300] font-bold text-base">.ai</span>
          </div>
        </div>

        {/* Right: user avatar */}
        <div className="shrink-0">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

// ─── Desktop profile switcher ─────────────────────────────────────────────────

function DesktopProfileSwitcher({ onAddProfile }: { onAddProfile?: () => void }) {
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
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="group flex items-center gap-2 rounded-md px-2.5 py-1.5 hover:bg-white/[0.04] transition-colors duration-150"
      >
        <div className="flex flex-col items-start min-w-0">
          <span className="font-mono text-[10px] tracking-wider text-[#FF3300]/70 uppercase truncate max-w-[160px]">
            {active.company_name}
          </span>
          <span className="font-mono text-[11px] text-zinc-400 truncate max-w-[160px]">
            {active.product_name}
          </span>
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
          className="absolute left-0 top-full mt-1.5 z-[100] w-60 rounded-lg border border-white/10 bg-[#0a0a0a] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
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
                    <div className="font-mono text-[10px] tracking-wider text-[#FF3300]/80 uppercase truncate">
                      {p.company_name}
                    </div>
                    <div className="font-mono text-xs text-zinc-300 truncate">
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
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              if (onAddProfile) {
                onAddProfile();
              } else {
                router.push("/?openWizard=true");
              }
            }}
            className="w-full text-left block border-t border-white/5 px-3 py-2.5 font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors duration-100"
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

// ─── User avatar menu ─────────────────────────────────────────────────────────

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const [initials, setInitials] = useState("?");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    supabase
      .auth.getUser()
      .then(({ data }) => {
        const email = data.user?.email ?? "";
        const name = data.user?.user_metadata?.full_name as string | undefined;
        if (name) {
          const parts = name.trim().split(/\s+/);
          setInitials(
            parts.length >= 2
              ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
              : parts[0].slice(0, 2).toUpperCase()
          );
        } else if (email) {
          setInitials(email[0].toUpperCase());
        }
      })
      .catch(() => {});
  }, [supabase]);

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

  async function handleSignOut() {
    setOpen(false);
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-label="User menu"
        aria-expanded={open}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-xs font-bold hover:border-zinc-500 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
      >
        {initials}
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-1.5 z-[100] w-48 rounded-lg border border-white/10 bg-[#0a0a0a] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden py-1"
        >
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors duration-100"
          >
            <Settings className="w-3.5 h-3.5 shrink-0" />
            Settings
          </Link>
          <Link
            href="/profiles"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors duration-100"
          >
            <Users className="w-3.5 h-3.5 shrink-0" />
            Manage profiles
          </Link>
          <div className="my-1 border-t border-white/5" />
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-3 py-2 font-mono text-xs text-zinc-400 hover:text-red-400 hover:bg-white/[0.04] transition-colors duration-100"
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
