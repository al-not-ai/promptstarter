"use client";

interface UpgradeTriggerProps {
  toolId: string;
  userTier: 'core' | 'pro';
  hasCopied: boolean;
  suppressForFirstFlow: boolean;
}

const UPGRADE_NUDGES: Partial<Record<string, string>> = {
  'pre-call-recon':    "After the call, the Follow-Up Forward writes the follow-up email plus a recap your prospect can forward to their boss — no editing required.",
};

export function UpgradeTrigger({ toolId, userTier, hasCopied, suppressForFirstFlow }: UpgradeTriggerProps) {
  if (userTier !== 'core' || !hasCopied || suppressForFirstFlow) return null;

  const nudge = UPGRADE_NUDGES[toolId];
  if (!nudge) return null;

  return (
    <div className="w-full border border-white/10 bg-[#1E1E1E] border-l-2 border-l-[#FF8800]/50 rounded-sm px-4 py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
      <p className="font-sans text-xs text-zinc-400 flex-1 leading-relaxed">
        {nudge}
      </p>
      <a
        href="/upgrade"
        className="shrink-0 font-sans text-xs font-semibold text-[#FF3300] hover:text-[#ff5533] transition-colors duration-150 whitespace-nowrap"
      >
        Upgrade to Pro →
      </a>
    </div>
  );
}
