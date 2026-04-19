"use client";

import { Menu } from "lucide-react";

interface StatusHeaderProps {
  onMenuOpen: () => void;
}

export function StatusHeader({ onMenuOpen }: StatusHeaderProps) {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b border-zinc-800 bg-[#070707]/95 px-4 backdrop-blur-md">

      {/* Hamburger — far left, logically opens left drawer */}
      <button
        onClick={onMenuOpen}
        className="flex items-center justify-center h-10 w-10 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors duration-150"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      {/* Centered logo */}
      <div className="flex items-center gap-2.5">
        <img
          src="/icon-dark.svg"
          width={28}
          height={28}
          alt=""
          aria-hidden="true"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,51,0,0.4))" }}
        />
        {/* translate-y-[2px] corrects optical alignment with bottom-heavy flame */}
        <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px]">
          <span className="text-white font-extrabold text-lg">PromptStarter</span>
          <span className="text-[#FF3300] font-bold text-lg">.ai</span>
        </div>
      </div>

      {/* Right spacer for optical balance */}
      <div className="w-10" />
    </header>
  );
}
