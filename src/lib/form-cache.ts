export type FormCacheEntry = {
  variableValues: Record<string, string>;
  sliderValues: Record<string, number>;
  rawContext: string;
  contextOpen: boolean;
  output: string;
  updatedAt: number;
};

const CACHE_PREFIX = "psai:form-cache:";

// In-memory fallback for when sessionStorage is unavailable (Safari private mode)
const memoryCache = new Map<string, FormCacheEntry>();

function cacheKey(profileId: string, toolId: string): string {
  return `${CACHE_PREFIX}${profileId}:${toolId}`;
}

export function getCache(profileId: string, toolId: string): FormCacheEntry | null {
  const key = cacheKey(profileId, toolId);
  try {
    const raw = sessionStorage.getItem(key);
    if (raw) return JSON.parse(raw) as FormCacheEntry;
  } catch {
    // sessionStorage unavailable — fall through to memory
  }
  return memoryCache.get(key) ?? null;
}

export function setCache(
  profileId: string,
  toolId: string,
  entry: FormCacheEntry
): void {
  const key = cacheKey(profileId, toolId);
  try {
    sessionStorage.setItem(key, JSON.stringify(entry));
    return;
  } catch {
    // sessionStorage unavailable or quota exceeded — fall through
  }
  memoryCache.set(key, entry);
}

export function clearCache(profileId: string, toolId: string): void {
  const key = cacheKey(profileId, toolId);
  try {
    sessionStorage.removeItem(key);
  } catch {
    // ignore
  }
  memoryCache.delete(key);
}

export function clearProfileCaches(profileId: string): void {
  const prefix = `${CACHE_PREFIX}${profileId}:`;
  try {
    const toRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i);
      if (k?.startsWith(prefix)) toRemove.push(k);
    }
    for (const k of toRemove) sessionStorage.removeItem(k);
  } catch {
    // ignore
  }
  for (const k of memoryCache.keys()) {
    if (k.startsWith(prefix)) memoryCache.delete(k);
  }
}
