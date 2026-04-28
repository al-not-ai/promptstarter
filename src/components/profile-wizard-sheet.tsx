"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ProfileWizard } from "@/components/profile-wizard";
import type { ProductProfile } from "@/lib/types/profile";

interface ProfileWizardSheetProps {
  open: boolean;
  onClose: () => void;
  onComplete: (profile: ProductProfile) => void;
}

export function ProfileWizardSheet({ open, onClose, onComplete }: ProfileWizardSheetProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Sheet open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        showCloseButton={false}
        className={
          isMobile
            ? "h-[100dvh] w-full p-0 flex flex-col bg-[#0a0a0a] border-t border-white/10 rounded-t-xl"
            : "w-full sm:w-[560px] p-0 flex flex-col bg-[#0a0a0a] border-l border-white/10"
        }
      >
        {/* Sheet header row */}
        <div className="h-12 shrink-0 flex items-center justify-between px-4 border-b border-white/[0.08]">
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            Add Profile
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center h-8 w-8 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable wizard content */}
        <div className="flex-1 overflow-y-auto overscroll-contain scroll-smooth px-6 py-6">
          <ProfileWizard
            isReturning={true}
            onComplete={onComplete}
            onCancel={onClose}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
