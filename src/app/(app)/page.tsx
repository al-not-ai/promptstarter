"use client";

import { useState, useCallback, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { AppRail } from "@/components/app-rail";
import { ControlPanel } from "@/components/control-panel";
import { tools } from "@/lib/tools";
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

export default function Home() {
  const [activeToolId, setActiveToolId] = useState(tools[0].id);
  const [sliderValues, setSliderValues] = useState<Record<string, number>>(
    defaultSliderValues(tools[0].id)
  );
  const [variableValues, setVariableValues] = useState<Record<string, string>>(
    defaultVariableValues(tools[0].id)
  );
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [restored, setRestored] = useState<RestoredGeneration>(null);
  const [generationCount, setGenerationCount] = useState(0);
  // Default false; hydrated from localStorage after mount to avoid SSR mismatch
  const [railPinned, setRailPinned] = useState(false);

  useEffect(() => {
    try {
      setRailPinned(localStorage.getItem(RAIL_PIN_KEY) === "true");
    } catch {
      // localStorage unavailable
    }
  }, []);

  const activeTool = tools.find((t) => t.id === activeToolId)!;
  const firstVarName = activeTool.variables[0]?.name;
  const isReady = Boolean(firstVarName && variableValues[firstVarName]?.trim().length > 0);

  const handleToolSelect = useCallback((toolId: string) => {
    setActiveToolId(toolId);
    setSliderValues(defaultSliderValues(toolId));
    setVariableValues(defaultVariableValues(toolId));
  }, []);

  const handleRestoreGeneration = useCallback((gen: RestoredGeneration) => {
    if (!gen) return;
    setActiveToolId(gen.toolId);
    setSliderValues(gen.sliderValues);
    setVariableValues(gen.variableValues);
    setRestored(gen);
  }, []);

  return (
    <div className="grid-bg relative flex min-h-[100dvh] flex-col bg-background overflow-x-hidden">

      <TopBar onMenuOpen={() => setMobileNavOpen(true)} />

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
        <ControlPanel
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
          onReset={() => {
            setSliderValues(defaultSliderValues(activeToolId));
            setVariableValues(defaultVariableValues(activeToolId));
          }}
          restoredOutput={restored?.output ?? null}
          onGenerationStart={() => setRestored(null)}
          onGenerationComplete={() => setGenerationCount((c) => c + 1)}
        />
      </main>
    </div>
  );
}
