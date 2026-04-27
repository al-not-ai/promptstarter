"use client";

import { ArrowLeft } from "lucide-react";
import { UserMenu } from "@/components/top-bar";

interface SecondaryTopBarProps {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
}

export function SecondaryTopBar({ title, onBack, right }: SecondaryTopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[90] h-14 flex items-center border-b border-zinc-800 bg-[#070707]/95 backdrop-blur-md px-4">
      {/* Back button */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="flex items-center justify-center min-h-[44px] min-w-[44px] md:h-8 md:w-8 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150 shrink-0 -ml-2 mr-1"
        >
          <ArrowLeft size={16} />
        </button>
      )}

      {/* Brand lockup */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon-dark.svg"
        alt=""
        aria-hidden="true"
        className="w-6 h-6 shrink-0"
        style={{ filter: "drop-shadow(0 0 6px rgba(255,51,0,0.45))" }}
      />
      <div className="font-tech flex items-center leading-none tracking-tight translate-y-[2px] ml-2">
        <span className="text-white font-extrabold text-base">PromptStarter</span>
        <span className="text-[#FF3300] font-bold text-base">.ai</span>
      </div>

      {/* Divider + page title */}
      <div className="w-px h-4 bg-zinc-700/60 mx-3 shrink-0" />
      <span className="font-mono text-sm font-semibold text-zinc-300 truncate">
        {title}
      </span>

      {/* Right zone */}
      <div className="ml-auto flex items-center gap-2 shrink-0">
        {right}
        <UserMenu />
      </div>
    </header>
  );
}
