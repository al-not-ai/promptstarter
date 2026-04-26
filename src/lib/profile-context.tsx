"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ProductProfile } from "@/lib/types/profile";
import { clearProfileCaches } from "@/lib/form-cache";

/**
 * Profile context.
 *
 * Holds every active profile the rep owns + which one is currently selected.
 * Switching profiles is a pure client-side concern (no route change, no full
 * re-render) so it feels instant; we fire-and-forget a PATCH to persist the
 * choice as the server-side default, so reloads remember the selection.
 *
 * `useProfile()` keeps its old signature — returns the currently active
 * profile or null — so existing consumers don't need to change.
 */

interface ProfileContextValue {
  profiles: ProductProfile[];
  activeProfileId: string | null;
  setActiveProfileId: (id: string) => void;
  activeProfile: ProductProfile | null;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({
  profiles,
  initialActiveId,
  children,
}: {
  profiles: ProductProfile[];
  initialActiveId: string | null;
  children: React.ReactNode;
}) {
  const [activeProfileId, setActiveProfileIdState] = useState<string | null>(
    initialActiveId
  );

  const setActiveProfileId = useCallback(
    (id: string) => {
      // Guard: ignore switches to unknown / already-active
      if (id === activeProfileId) return;
      if (!profiles.some((p) => p.id === id)) return;
      // Clear cached form state for the outgoing profile so a workspace
      // switch always starts fresh on the new profile's tools.
      if (activeProfileId) clearProfileCaches(activeProfileId);
      setActiveProfileIdState(id);

      // Persist selection as the server-side default so it survives reloads.
      // Fire and forget — the UI has already swapped. A failure here just
      // means next reload may land on a different profile; that's acceptable.
      fetch(`/api/profile/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_default: true }),
      }).catch(() => {
        /* swallow — cosmetic */
      });
    },
    [activeProfileId, profiles]
  );

  const activeProfile = useMemo(
    () => profiles.find((p) => p.id === activeProfileId) ?? null,
    [profiles, activeProfileId]
  );

  const value = useMemo(
    () => ({ profiles, activeProfileId, setActiveProfileId, activeProfile }),
    [profiles, activeProfileId, setActiveProfileId, activeProfile]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

/** Returns the currently active product profile, or null if none. */
export function useProfile(): ProductProfile | null {
  return useContext(ProfileContext)?.activeProfile ?? null;
}

/** Full switcher API — used by the sidebar dropdown. */
export function useProfileSwitcher(): {
  profiles: ProductProfile[];
  activeProfileId: string | null;
  setActiveProfileId: (id: string) => void;
} {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    return {
      profiles: [],
      activeProfileId: null,
      setActiveProfileId: () => {},
    };
  }
  const { profiles, activeProfileId, setActiveProfileId } = ctx;
  return { profiles, activeProfileId, setActiveProfileId };
}
