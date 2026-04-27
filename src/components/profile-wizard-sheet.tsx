"use client";

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
  return (
    <Sheet open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:w-[560px] p-0 flex flex-col bg-[#0a0a0a] border-l border-white/10"
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
        <div className="flex-1 overflow-y-auto px-6 py-6">
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
