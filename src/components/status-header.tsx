"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ToolNav } from "@/components/tool-nav";

interface StatusHeaderProps {
  activeToolId: string;
  onToolSelect: (toolId: string) => void;
}

export function StatusHeader({ activeToolId, onToolSelect }: StatusHeaderProps) {
  const [open, setOpen] = useState(false);

  function handleToolSelect(toolId: string) {
    onToolSelect(toolId);
    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 md:left-[260px] z-40 flex items-center justify-between border-b border-white/10 bg-black/50 px-6 md:px-10 py-4 backdrop-blur-md">

      {/* Mobile: hamburger — hidden on desktop */}
      <button
        className="md:hidden flex items-center justify-center h-[44px] w-[44px] -ml-2 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Open tool library"
      >
        <Menu size={20} />
      </button>

      <div className="flex items-center gap-3">
        <img src="/icon-dark.svg" width={32} height={32} alt="" aria-hidden="true" style={{ transform: "translateY(-2px)" }} />
        <div className="font-tech text-xl flex items-baseline tracking-tight">
          <span className="text-white font-bold">PromptStarter</span>
          <span className="text-[#FF3300] font-semibold">.ai</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          System <span className="text-primary">Active</span>
        </span>
      </div>

      {/* Mobile Sheet drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[80vw] max-w-[280px] border-r border-white/10 bg-[#070707] p-0">
          <SheetHeader className="flex h-[57px] items-center justify-start border-b border-white/8 px-6">
            <SheetTitle className="font-mono text-xs tracking-wider text-muted-foreground">
              Tool Library
            </SheetTitle>
          </SheetHeader>
          <ToolNav activeToolId={activeToolId} onToolSelect={handleToolSelect} />
        </SheetContent>
      </Sheet>
    </header>
  );
}
