"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { X, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useProfile } from "@/lib/profile-context";
import { SecondaryTopBar } from "@/components/secondary-top-bar";
import { tools } from "@/lib/tools";
import { timeAgo, type GenerationMeta } from "@/components/app-rail";

// ─── Day grouping ──────────────────────────────────────────────────────────────

type DayGroup = "Today" | "Yesterday" | "Earlier this week" | "Older";

function getDayGroup(dateStr: string): DayGroup {
  const now = new Date();
  const date = new Date(dateStr);

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterdayStart = new Date(todayStart);
  yesterdayStart.setDate(yesterdayStart.getDate() - 1);
  const weekStart = new Date(todayStart);
  weekStart.setDate(weekStart.getDate() - 6);

  if (date >= todayStart) return "Today";
  if (date >= yesterdayStart) return "Yesterday";
  if (date >= weekStart) return "Earlier this week";
  return "Older";
}

const DAY_GROUP_ORDER: DayGroup[] = ["Today", "Yesterday", "Earlier this week", "Older"];

function groupByDay(items: GenerationMeta[]): { group: DayGroup; items: GenerationMeta[] }[] {
  const map = new Map<DayGroup, GenerationMeta[]>();
  for (const item of items) {
    const g = getDayGroup(item.created_at);
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(item);
  }
  return DAY_GROUP_ORDER.filter((g) => map.has(g)).map((g) => ({
    group: g,
    items: map.get(g)!,
  }));
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HistoryPage() {
  const profile = useProfile();
  const router = useRouter();
  const [items, setItems] = useState<GenerationMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const pendingDeletes = useRef<
    Map<string, { item: GenerationMeta; timer: ReturnType<typeof setTimeout> }>
  >(new Map());

  useEffect(() => {
    if (!profile) return;
    setLoading(true);
    fetch(`/api/generations?limit=200&profileId=${profile.id}`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data: GenerationMeta[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [profile]);

  // Flush pending deletes if the page is torn down before the undo window
  // expires. Uses a single bulk request so large bulk-selections don't fan out
  // into N individual requests. keepalive lets the fetch outlive the page.
  useEffect(() => {
    function onPageHide() {
      const ids = Array.from(pendingDeletes.current.keys());
      if (ids.length === 0) return;
      fetch("/api/generations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
        keepalive: true,
      }).catch(() => {});
      pendingDeletes.current.clear();
    }
    window.addEventListener("pagehide", onPageHide);
    return () => window.removeEventListener("pagehide", onPageHide);
  }, []);

  // ── Single delete with undo ──────────────────────────────────────────────────

  const handleDelete = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      const item = items.find((i) => i.id === id);
      if (!item) return;

      setItems((prev) => prev.filter((i) => i.id !== id));
      setSelected((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });

      const timer = setTimeout(() => {
        pendingDeletes.current.delete(id);
        fetch(`/api/generations/${id}`, { method: "DELETE" }).catch(() => {});
      }, 5000);

      pendingDeletes.current.set(id, { item, timer });

      toast("Generation deleted", {
        duration: 5000,
        action: {
          label: "Undo",
          onClick: () => {
            const pending = pendingDeletes.current.get(id);
            if (!pending) return;
            clearTimeout(pending.timer);
            pendingDeletes.current.delete(id);
            setItems((prev) =>
              [...prev, pending.item].sort(
                (a, b) =>
                  new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
              )
            );
          },
        },
      });
    },
    [items]
  );

  // ── Bulk delete ──────────────────────────────────────────────────────────────

  const handleBulkDelete = useCallback(async () => {
    const ids = Array.from(selected);
    if (ids.length === 0) return;

    const deletedItems = items.filter((i) => ids.includes(i.id));
    setItems((prev) => prev.filter((i) => !ids.includes(i.id)));
    setSelected(new Set());

    // Cancel any individually-pending deletes for these ids
    for (const id of ids) {
      const pending = pendingDeletes.current.get(id);
      if (pending) {
        clearTimeout(pending.timer);
        pendingDeletes.current.delete(id);
      }
    }

    const doDelete = async () => {
      await fetch("/api/generations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      }).catch(() => {});
    };

    const timer = setTimeout(doDelete, 5000);
    const bulkKey = `bulk-${Date.now()}`;

    // Store individually so undo works even for bulk
    for (const item of deletedItems) {
      pendingDeletes.current.set(item.id, {
        item,
        timer: 0 as unknown as ReturnType<typeof setTimeout>,
      });
    }

    toast(`${ids.length} generation${ids.length > 1 ? "s" : ""} deleted`, {
      duration: 5000,
      action: {
        label: "Undo",
        onClick: () => {
          clearTimeout(timer);
          for (const item of deletedItems) {
            pendingDeletes.current.delete(item.id);
          }
          setItems((prev) =>
            [...prev, ...deletedItems].sort(
              (a, b) =>
                new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            )
          );
        },
      },
    });

    // Suppress unused variable warning — bulkKey used as toast context key
    void bulkKey;
  }, [selected, items]);

  // ── Row click → restore ──────────────────────────────────────────────────────

  const handleRowClick = useCallback(
    (id: string) => {
      router.push(`/?restore=${id}`);
    },
    [router]
  );

  // ── Selection helpers ────────────────────────────────────────────────────────

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAll() {
    if (selected.size === items.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map((i) => i.id)));
    }
  }

  const groups = groupByDay(items);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <SecondaryTopBar title="History" onBack={() => router.back()} />

      {/* Bulk-select toolbar — secondary sticky strip, only when items selected */}
      {selected.size > 0 && (
        <div className="fixed top-14 left-0 right-0 z-[80] border-b border-zinc-800 bg-[#070707]/95 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-4 md:px-6 py-2 flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400">
              {selected.size} selected
            </span>
            <button
              onClick={handleBulkDelete}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs text-red-400 border border-red-400/30 hover:bg-red-400/10 transition-colors duration-150"
            >
              <Trash2 size={12} />
              Delete
            </button>
            <button
              onClick={() => setSelected(new Set())}
              className="font-mono text-xs text-zinc-500 hover:text-white transition-colors duration-150"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Content — extra top margin when bulk toolbar is visible */}
      <div className={`max-w-3xl mx-auto w-full px-4 md:px-6 pt-14 py-6 flex flex-col gap-8 ${selected.size > 0 ? "mt-10" : ""}`}>
        {loading ? (
          <div className="flex flex-col gap-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 rounded-md bg-zinc-900/60 animate-pulse" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-mono text-sm text-zinc-600">No generations yet.</p>
            <Link
              href="/dashboard"
              className="mt-3 inline-block font-mono text-xs text-[#FF3300]/70 hover:text-[#FF3300] transition-colors duration-150"
            >
              ← Go generate something
            </Link>
          </div>
        ) : (
          <>
            {/* Select-all row */}
            <div className="flex items-center gap-3 -mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selected.size === items.length && items.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 accent-[#FF3300] cursor-pointer"
                />
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider">
                  Select all
                </span>
              </label>
            </div>

            {groups.map(({ group, items: groupItems }) => (
              <section key={group}>
                <h2 className="font-mono text-[10px] uppercase tracking-wider text-zinc-600 mb-2 px-0.5">
                  {group}
                </h2>
                <div className="flex flex-col gap-0.5">
                  {groupItems.map((item) => {
                    const tool = tools.find((t) => t.id === item.tool_id);
                    const shortName = (tool?.name ?? item.tool_id).replace(/^The\s+/i, "");
                    const firstVal = Object.values(item.variable_values)[0] ?? "";
                    const subtitle =
                      firstVal.length > 48 ? firstVal.slice(0, 47) + "…" : firstVal;
                    const isSelected = selected.has(item.id);

                    return (
                      <div
                        key={item.id}
                        className={`group relative flex items-center gap-3 rounded-md px-3 py-2.5 cursor-pointer transition-colors duration-100 ${
                          isSelected
                            ? "bg-[#FF3300]/8 border border-[#FF3300]/20"
                            : "hover:bg-white/[0.04] border border-transparent"
                        }`}
                        onClick={() => handleRowClick(item.id)}
                      >
                        {/* Checkbox */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSelect(item.id);
                          }}
                          className="shrink-0 flex items-center justify-center w-5 h-5"
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleSelect(item.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 accent-[#FF3300] cursor-pointer"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 min-w-0">
                            <span className="font-mono text-sm text-zinc-300 group-hover:text-white truncate transition-colors duration-100 leading-snug">
                              {shortName}
                            </span>
                            <span className="font-mono text-[10px] text-zinc-600 shrink-0">
                              {timeAgo(item.created_at)}
                            </span>
                          </div>
                          {subtitle && (
                            <div className="font-mono text-xs text-zinc-500 truncate leading-snug mt-0.5">
                              {subtitle}
                            </div>
                          )}
                        </div>

                        {/* Delete — hover-reveal desktop, always mobile */}
                        <button
                          type="button"
                          onClick={(e) => handleDelete(e, item.id)}
                          aria-label="Delete generation"
                          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-md text-zinc-600 hover:text-red-400 hover:bg-white/[0.06] transition-colors duration-100
                            opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
