"use client";

interface UpgradeTriggerProps {
  toolId: string;
  userTier: 'core' | 'pro';
  hasCopied: boolean;
  suppressForFirstFlow: boolean;
}

const UPGRADE_NUDGES: Partial<Record<string, string>> = {
  'objection-defuser': "Most objections that stall go quiet within days. The Deal Reviver builds a 3-touch re-engagement sequence for exactly this moment.",
  'pre-call-recon':    "After the call, the Follow-Up Forward writes the follow-up email plus a recap your prospect can forward to their boss — no editing required.",
  'cold-hook':         "Following up on cold outreach is where most replies die. The Deal Reviver builds a multi-touch sequence for this same prospect.",
};

export function UpgradeTrigger({ toolId, userTier, hasCopied, suppressForFirstFlow }: UpgradeTriggerProps) {
  if (userTier !== 'core' || !hasCopied || suppressForFirstFlow) return null;

  const nudge = UPGRADE_NUDGES[toolId];
  if (!nudge) return null;

  return (
    <div className="w-full border border-white/10 bg-white/[0.02] border-l-2 border-l-[#FF8800]/50 rounded-sm px-4 py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
      <p className="font-mono text-xs text-zinc-400 flex-1 leading-relaxed">
        {nudge}
      </p>
      <a
        href="/upgrade"
        className="shrink-0 font-mono text-xs font-semibold text-[#FF3300] hover:text-[#ff5533] transition-colors duration-150 whitespace-nowrap"
      >
        Upgrade to Pro →
      </a>
    </div>
  );
}
