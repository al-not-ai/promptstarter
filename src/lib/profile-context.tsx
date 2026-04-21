"use client";

import { createContext, useContext } from "react";
import type { ProductProfile } from "@/lib/types/profile";

const ProfileContext = createContext<ProductProfile | null>(null);

export function ProfileProvider({
  profile,
  children,
}: {
  profile: ProductProfile | null;
  children: React.ReactNode;
}) {
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}

/** Returns the active product profile, or null if none is loaded. */
export function useProfile(): ProductProfile | null {
  return useContext(ProfileContext);
}
