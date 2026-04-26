"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, Star, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useProfileSwitcher } from "@/lib/profile-context";
import { timeAgo } from "@/components/app-rail";
import type { ProductProfile } from "@/lib/types/profile";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ProfilesPage() {
  const { profiles, activeProfileId } = useProfileSwitcher();
  const router = useRouter();
  const [editingProfile, setEditingProfile] = useState<ProductProfile | null>(null);
  const [deletingProfile, setDeletingProfile] = useState<ProductProfile | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);

  const sorted = [...profiles]
    .filter((p) => !p.deleted_at)
    .sort((a, b) => {
      if (a.is_default !== b.is_default) return a.is_default ? -1 : 1;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

  async function handleStarToggle(profile: ProductProfile) {
    if (togglingId) return;
    setTogglingId(profile.id);
    try {
      const res = await fetch(`/api/profile/${profile.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_default: !profile.is_default }),
      });
      if (res.ok) router.refresh();
    } finally {
      setTogglingId(null);
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background pt-14">
      {/* Page header */}
      <div className="sticky top-14 z-10 border-b border-zinc-800 bg-[#070707]/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Back"
              className="flex items-center justify-center h-8 w-8 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors duration-150"
            >
              <ArrowLeft size={16} />
            </Link>
            <h1 className="font-mono text-sm font-bold text-white">Product profiles</h1>
            {sorted.length > 0 && (
              <span className="font-mono text-xs text-zinc-600">
                {sorted.length} profile{sorted.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {/* Add profile CTA */}
          <div>
            <Link
              href="/onboarding"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md border font-mono text-xs font-semibold",
                "border-[#FF3300]/40 text-[#FF3300] bg-[#FF3300]/[0.06] hover:bg-[#FF3300]/[0.12]",
                "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
              )}
            >
              <Plus size={13} />
              Add product profile
            </Link>
            <Link
              href="/onboarding"
              aria-label="Add product profile"
              className={cn(
                "sm:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md",
                "text-[#FF3300] hover:bg-[#FF3300]/[0.08] transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
              )}
            >
              <Plus size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Card list */}
      <div className="max-w-3xl mx-auto w-full px-4 md:px-6 py-6 flex flex-col gap-3">
        {sorted.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-mono text-sm text-zinc-600">No profiles yet.</p>
            <Link
              href="/onboarding"
              className="mt-3 inline-block font-mono text-xs text-[#FF3300]/70 hover:text-[#FF3300] transition-colors duration-150"
            >
              Create your first profile →
            </Link>
          </div>
        ) : (
          sorted.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isActive={profile.id === activeProfileId}
              isToggling={togglingId === profile.id}
              onStarToggle={() => handleStarToggle(profile)}
              onEdit={() => setEditingProfile(profile)}
              onDelete={() => setDeletingProfile(profile)}
            />
          ))
        )}
      </div>

      {/* Dialogs — conditionally mounted so form state resets on close */}
      {editingProfile && (
        <EditDialog
          key={editingProfile.id}
          profile={editingProfile}
          onClose={() => setEditingProfile(null)}
          onSaved={() => {
            setEditingProfile(null);
            toast("Profile saved");
            router.refresh();
          }}
        />
      )}
      {deletingProfile && (
        <DeleteDialog
          key={deletingProfile.id}
          profile={deletingProfile}
          onClose={() => setDeletingProfile(null)}
          onDeleted={() => {
            setDeletingProfile(null);
            toast("Profile deleted");
            router.refresh();
          }}
        />
      )}
    </div>
  );
}

// ─── Profile card ─────────────────────────────────────────────────────────────

interface ProfileCardProps {
  profile: ProductProfile;
  isActive: boolean;
  isToggling: boolean;
  onStarToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

function ProfileCard({
  profile,
  isActive,
  isToggling,
  onStarToggle,
  onEdit,
  onDelete,
}: ProfileCardProps) {
  const chips = profile.key_differentiators.slice(0, 3);
  const extraCount = Math.max(0, profile.key_differentiators.length - 3);

  return (
    <article
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md p-5 transition-colors",
        isActive && "ring-1 ring-[#FF3300]/30"
      )}
    >
      {/* Top row: company eyebrow + active pill */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF3300]/70 truncate">
          {profile.company_name}
        </span>
        {isActive && (
          <span className="inline-flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-full bg-[#FF3300]/10 border border-[#FF3300]/30 font-mono text-[10px] text-[#FF3300]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3300] animate-pulse" />
            active
          </span>
        )}
      </div>

      {/* Product name */}
      <h3 className="mt-1 font-mono text-lg font-bold text-white tracking-tight">
        {profile.product_name}
      </h3>

      {/* Summary */}
      {profile.product_summary && (
        <p className="mt-2 font-mono text-sm text-zinc-400 leading-relaxed">
          {profile.product_summary}
        </p>
      )}

      {/* Differentiator chips */}
      {chips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((d, i) => (
            <span
              key={i}
              className="inline-flex items-center bg-white/[0.04] border border-white/10 rounded-sm px-2 py-1 font-mono text-[11px] text-zinc-300"
            >
              {d}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="inline-flex items-center px-2 py-1 font-mono text-[11px] text-zinc-600">
              +{extraCount} more
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] text-zinc-600">
          Created {timeAgo(profile.created_at)}
          {profile.updated_at !== profile.created_at && (
            <> · Updated {timeAgo(profile.updated_at)}</>
          )}
        </p>

        <TooltipProvider>
          <div className="flex items-center gap-0.5">
            {/* Star toggle */}
            <Tooltip>
              <TooltipTrigger
                onClick={onStarToggle}
                disabled={isToggling}
                aria-pressed={profile.is_default}
                aria-label={profile.is_default ? "Default profile" : "Set as default"}
                className={cn(
                  "flex items-center justify-center rounded-md",
                  "min-h-[44px] min-w-[44px] md:min-h-[36px] md:min-w-[36px]",
                  "transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50",
                  profile.is_default
                    ? "text-[#FF3300] hover:bg-[#FF3300]/[0.08]"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.06]",
                  isToggling && "opacity-50 cursor-not-allowed"
                )}
              >
                <Star
                  size={15}
                  className={profile.is_default ? "fill-[#FF3300]" : ""}
                />
              </TooltipTrigger>
              <TooltipContent>
                <span className="font-mono text-xs">
                  {profile.is_default ? "Default" : "Set as default"}
                </span>
              </TooltipContent>
            </Tooltip>

            {/* Edit */}
            <button
              type="button"
              onClick={onEdit}
              aria-label="Edit profile"
              className="flex items-center justify-center rounded-md min-h-[44px] min-w-[44px] md:min-h-[36px] md:min-w-[36px] text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.06] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
            >
              <Pencil size={14} />
            </button>

            {/* Delete */}
            <button
              type="button"
              onClick={onDelete}
              aria-label="Delete profile"
              className="flex items-center justify-center rounded-md min-h-[44px] min-w-[44px] md:min-h-[36px] md:min-w-[36px] text-zinc-500 hover:text-red-400 hover:bg-white/[0.06] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </TooltipProvider>
      </div>
    </article>
  );
}

// ─── Edit dialog ──────────────────────────────────────────────────────────────

interface EditDialogProps {
  profile: ProductProfile;
  onClose: () => void;
  onSaved: () => void;
}

function EditDialog({ profile, onClose, onSaved }: EditDialogProps) {
  const [companyName, setCompanyName] = useState(profile.company_name);
  const [productName, setProductName] = useState(profile.product_name);
  const [productSummary, setProductSummary] = useState(profile.product_summary ?? "");
  const [differentiators, setDifferentiators] = useState(
    profile.key_differentiators.join("\n")
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const diffLines = differentiators
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const diffCount = Math.min(diffLines.length, 5);
  const atDiffLimit = diffLines.length >= 5;
  const summaryCount = productSummary.length;

  const newSummary = productSummary.trim() || null;
  const newDiffs = diffLines.slice(0, 5);

  const hasDiff =
    companyName.trim() !== profile.company_name ||
    productName.trim() !== profile.product_name ||
    newSummary !== profile.product_summary ||
    JSON.stringify(newDiffs) !== JSON.stringify(profile.key_differentiators);

  const canSave =
    companyName.trim().length > 0 &&
    productName.trim().length > 0 &&
    summaryCount <= 200 &&
    hasDiff &&
    !saving;

  async function handleSave() {
    if (!canSave) return;
    setSaving(true);
    setError(null);

    const patch: Record<string, unknown> = {};
    if (companyName.trim() !== profile.company_name) patch.company_name = companyName.trim();
    if (productName.trim() !== profile.product_name) patch.product_name = productName.trim();
    if (newSummary !== profile.product_summary) patch.product_summary = newSummary;
    if (JSON.stringify(newDiffs) !== JSON.stringify(profile.key_differentiators)) {
      patch.key_differentiators = newDiffs;
    }

    try {
      const res = await fetch(`/api/profile/${profile.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (res.ok) {
        onSaved();
      } else {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? "Failed to save. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-lg bg-[#0d0d0d] border-white/10 text-white">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div>
            <DialogTitle className="font-mono text-sm font-bold text-white mb-1">
              Edit profile
            </DialogTitle>
            <p className="font-mono text-xs text-zinc-500">
              Changes apply to all future generations.
            </p>
          </div>

          {/* Company name */}
          <div>
            <label className="block font-mono text-[11px] text-zinc-500 mb-1.5">
              Company name <span className="text-[#FF3300]">*</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full font-mono text-sm bg-zinc-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FF3300]/50 focus:border-[#FF3300]/40"
              placeholder="KEYENCE"
            />
          </div>

          {/* Product name */}
          <div>
            <label className="block font-mono text-[11px] text-zinc-500 mb-1.5">
              Product name <span className="text-[#FF3300]">*</span>
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full font-mono text-sm bg-zinc-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FF3300]/50 focus:border-[#FF3300]/40"
              placeholder="IV3 Vision System"
            />
          </div>

          {/* Product summary */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-mono text-[11px] text-zinc-500">
                Product summary
              </label>
              <span
                className={cn(
                  "font-mono text-[10px]",
                  summaryCount > 200 ? "text-[#FF3300]" : "text-zinc-600"
                )}
              >
                {summaryCount}/200
              </span>
            </div>
            <input
              type="text"
              value={productSummary}
              onChange={(e) => setProductSummary(e.target.value)}
              className="w-full font-mono text-sm bg-zinc-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FF3300]/50 focus:border-[#FF3300]/40"
              placeholder="One sentence on what it does"
            />
          </div>

          {/* Key differentiators */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-mono text-[11px] text-zinc-500">
                Key differentiators
              </label>
              <span
                className={cn(
                  "font-mono text-[10px]",
                  atDiffLimit ? "text-[#FF3300]" : "text-zinc-600"
                )}
              >
                {diffCount}/5 lines
              </span>
            </div>
            <textarea
              value={differentiators}
              onChange={(e) => setDifferentiators(e.target.value)}
              rows={4}
              className="w-full font-mono text-sm bg-zinc-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FF3300]/50 focus:border-[#FF3300]/40 resize-none"
              placeholder={"One per line — max 5\nFastest in class\nNo integration required"}
            />
          </div>

          {/* Inline error */}
          {error && <p className="font-mono text-xs text-red-400">{error}</p>}

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!canSave}
              className={cn(
                "px-4 py-2 rounded-md font-mono text-xs font-semibold transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50",
                canSave
                  ? "bg-[#FF3300] text-white hover:bg-[#e62e00]"
                  : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
              )}
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Delete dialog ────────────────────────────────────────────────────────────

interface DeleteDialogProps {
  profile: ProductProfile;
  onClose: () => void;
  onDeleted: () => void;
}

function DeleteDialog({ profile, onClose, onDeleted }: DeleteDialogProps) {
  const [generationCount, setGenerationCount] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/generations?profileId=${profile.id}&limit=200`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data: unknown[]) => setGenerationCount(data.length))
      .catch(() => setGenerationCount(0));
  }, [profile.id]);

  async function handleDelete() {
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`/api/profile/${profile.id}`, { method: "DELETE" });
      if (res.status === 204) {
        onDeleted();
      } else {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? "Failed to delete. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setDeleting(false);
    }
  }

  const n = generationCount;
  // Disable delete when there's a blocking error (e.g. last-profile guard)
  const canDelete = !deleting && !error;

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-md bg-[#0d0d0d] border-white/10 text-white">
        <div className="flex flex-col gap-4">
          <DialogTitle className="font-mono text-sm font-bold text-white">
            Delete this profile?
          </DialogTitle>

          <div className="font-mono text-sm text-zinc-400 leading-relaxed">
            {n === null ? (
              <div className="h-4 w-3/4 bg-zinc-800 rounded animate-pulse" />
            ) : (
              <p>
                Permanently delete{" "}
                <strong className="text-white">{profile.product_name}</strong> and{" "}
                <strong className="text-white">{n}</strong> saved generation
                {n !== 1 ? "s" : ""} linked to it. This can&apos;t be undone.
              </p>
            )}
          </div>

          {error && <p className="font-mono text-xs text-red-400">{error}</p>}

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300]/50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={!canDelete}
              className={cn(
                "px-4 py-2 rounded-md font-mono text-xs font-semibold border transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50",
                canDelete
                  ? "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
                  : "bg-red-500/[0.04] border-red-500/20 text-red-400/40 cursor-not-allowed"
              )}
            >
              {deleting ? "Deleting…" : "Delete"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
