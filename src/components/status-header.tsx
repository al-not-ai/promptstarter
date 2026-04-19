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
    <>
      {/* Mobile header — hidden on desktop (logo lives in sidebar on desktop) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3.5 backdrop-blur-md">
        <button
          className="flex items-center justify-center h-[44px] w-[44px] -ml-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open tool library"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2.5">
          <img
            src="/icon-dark.svg"
            width={28}
            height={28}
            alt=""
            aria-hidden="true"
            style={{ transform: "translateY(-1px)" }}
          />
          <div className="font-tech text-lg flex items-baseline tracking-tight">
            <span className="text-white font-bold">PromptStarter</span>
            <span className="text-[#FF3300] font-semibold">.ai</span>
          </div>
        </div>

        {/* System active pulse */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        </div>
      </header>

      {/* Mobile sheet drawer */}
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
    </>
  );
}
