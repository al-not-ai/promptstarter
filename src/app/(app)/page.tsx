"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TopBar } from "@/components/top-bar";
import { AppRail } from "@/components/app-rail";
import { ControlPanel } from "@/components/control-panel";
import { tools } from "@/lib/tools";
import { useProfileSwitcher } from "@/lib/profile-context";
import {
  getCache,
  setCache,
} from "@/lib/form-cache";
import type { RestoredGeneration } from "@/lib/types/generation";

const RAIL_PIN_KEY = "promptstarter:rail-pinned";

function defaultSliderValues(toolId: string): Record<string, number> {
  const tool = tools.find((t) => t.id === toolId)!;
  return Object.fromEntries(tool.sliders.map((s) => [s.id, 0]));
}

function defaultVariableValues(toolId: string): Record<string, string> {
  const tool = tools.find((t) => t.id === toolId)!;
  return Object.fromEntries(tool.variables.map((v) => [v.name, ""]));
}

function HomeInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { activeProfileId } = useProfileSwitcher();

  const [activeToolId, setActiveToolId] = useState(tools[0].id);
  const [sliderValues, setSliderValues] = useState<Record<string, number>>(
    defaultSliderValues(tools[0].id)
  );
  const [variableValues, setVariableValues] = useState<Record<string, string>>(
    defaultVariableValues(tools[0].id)
  );
  // Lifted from ControlPanel so they can be cached across tool switches
  const [rawContext, setRawContext] = useState("");
  const [contextOpen, setContextOpen] = useState(false);
  // Tracks the last complete output for display + caching
  const [currentOutput, setCurrentOutput] = useState("");

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);
  const [railPinned, setRailPinned] = useState(false);

  // ── One-time initialisation: load rail pin + handle ?restore / cache ───────

  const initialized = useRef(false);

  useEffect(() => {
    try {
      setRailPinned(localStorage.getItem(RAIL_PIN_KEY) === "true");
    } catch {
      // localStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (initialized.current || !activeProfileId) return;
    initialized.current = true;

    // ?restore=<id> takes priority over everything
    const restoreId = searchParams.get("restore");
    if (restoreId) {
      router.replace("/", { scroll: false });
      fetch(`/api/generations/${restoreId}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((gen) => {
          if (!gen) return;
          setActiveToolId(gen.tool_id);
          setSliderValues(gen.slider_values);
          setVariableValues(gen.variable_values);
          setRawContext("");
          setContextOpen(false);
          setCurrentOutput(gen.output);
        })
        .catch(() => {});
      return;
    }

    // Try sessionStorage cache for the initial tool
    const cached = getCache(activeProfileId, tools[0].id);
    if (cached) {
      setVariableValues(cached.variableValues);
      setSliderValues(cached.sliderValues);
      setRawContext(cached.rawContext);
      setContextOpen(cached.contextOpen);
      setCurrentOutput(cached.output);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProfileId]); // activeProfileId is the gate; searchParams stable at mount

  // ── Persist form + output to sessionStorage on every meaningful change ─────

  useEffect(() => {
    if (!activeProfileId) return;
    const hasInput =
      Object.values(variableValues).some((v) => v.trim()) ||
      rawContext.trim().length > 0 ||
      Object.values(sliderValues).some((v) => v !== 0);
    if (!hasInput && !currentOutput) return; // nothing worth caching

    setCache(activeProfileId, activeToolId, {
      variableValues,
      sliderValues,
      rawContext,
      contextOpen,
      output: currentOutput,
      updatedAt: Date.now(),
    });
  }, [
    variableValues,
    sliderValues,
    rawContext,
    contextOpen,
    currentOutput,
    activeToolId,
    activeProfileId,
  ]);

  // ── Tool selection: load from cache or rehydrate from history ─────────────

  const handleToolSelect = useCallback(
    (toolId: string) => {
      setActiveToolId(toolId);

      if (!activeProfileId) {
        setVariableValues(defaultVariableValues(toolId));
        setSliderValues(defaultSliderValues(toolId));
        setRawContext("");
        setContextOpen(false);
        setCurrentOutput("");
        return;
      }

      const cached = getCache(activeProfileId, toolId);
      if (cached) {
        setVariableValues(cached.variableValues);
        setSliderValues(cached.sliderValues);
        setRawContext(cached.rawContext);
        setContextOpen(cached.contextOpen);
        setCurrentOutput(cached.output);
        return;
      }

      // No cache — start fresh
      setVariableValues(defaultVariableValues(toolId));
      setSliderValues(defaultSliderValues(toolId));
      setRawContext("");
      setContextOpen(false);
      setCurrentOutput("");
    },
    [activeProfileId]
  );

  // ── Restore from rail / history click ─────────────────────────────────────

  const handleRestoreGeneration = useCallback((gen: RestoredGeneration) => {
    if (!gen) return;
    setActiveToolId(gen.toolId);
    setSliderValues(gen.sliderValues);
    setVariableValues(gen.variableValues);
    setRawContext("");
    setContextOpen(false);
    setCurrentOutput(gen.output);
  }, []);

  // ── Generation lifecycle ───────────────────────────────────────────────────

  const handleGenerationStart = useCallback(() => {}, []);

  const handleGenerationComplete = useCallback((output: string) => {
    setCurrentOutput(output);
    setGenerationCount((c) => c + 1);
  }, []);

  // ── Derived ───────────────────────────────────────────────────────────────

  const activeTool = tools.find((t) => t.id === activeToolId)!;
  const firstVarName = activeTool.variables[0]?.name;
  const isReady = Boolean(
    firstVarName && variableValues[firstVarName]?.trim().length > 0
  );

  return (
    <div className="grid-bg relative flex min-h-[100dvh] flex-col bg-background overflow-x-hidden">
      <TopBar isMobileOpen={mobileNavOpen} onMenuToggle={() => setMobileNavOpen((v) => !v)} />

      <AppRail
        activeToolId={activeToolId}
        onToolSelect={handleToolSelect}
        isMobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
        onRestoreGeneration={handleRestoreGeneration}
        refreshKey={generationCount}
        isPinned={railPinned}
        onPinChange={setRailPinned}
      />

      <main
        className={`
          flex flex-1 items-start justify-center
          px-4 md:px-8
          pt-20 md:pt-20
          pb-16
          transition-[margin-left] duration-200 ease-in-out
          ${railPinned ? "md:ml-60" : "md:ml-16"}
        `}
      >
        {/* key={activeToolId} remounts ControlPanel on tool switch, which resets
            useCompletion's internal `completion` string so stale output from
            the previous tool never bleeds through. */}
        <ControlPanel
          key={activeToolId}
          activeTool={activeTool}
          sliderValues={sliderValues}
          variableValues={variableValues}
          isReady={isReady}
          onSliderChange={(id, value) =>
            setSliderValues((prev) => ({ ...prev, [id]: value }))
          }
          onVariableChange={(name, value) =>
            setVariableValues((prev) => ({ ...prev, [name]: value }))
          }
          rawContext={rawContext}
          onRawContextChange={setRawContext}
          contextOpen={contextOpen}
          onContextOpenChange={setContextOpen}
          restoredOutput={currentOutput}
          onGenerationStart={handleGenerationStart}
          onGenerationComplete={handleGenerationComplete}
        />
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
