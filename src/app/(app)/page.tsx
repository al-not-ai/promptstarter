"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/sidebar";
import { StatusHeader } from "@/components/status-header";
import { ControlPanel } from "@/components/control-panel";
import { tools } from "@/lib/tools";
import type { RestoredGeneration } from "@/lib/types/generation";

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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [restored, setRestored] = useState<RestoredGeneration>(null);
  const [generationCount, setGenerationCount] = useState(0);

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

      <Sidebar
        activeToolId={activeToolId}
        onToolSelect={handleToolSelect}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
        isMobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
        onRestoreGeneration={handleRestoreGeneration}
        refreshKey={generationCount}
      />

      <StatusHeader onMenuOpen={() => setMobileNavOpen(true)} />

      <main
        className={`flex flex-1 items-start justify-center px-4 md:px-8 pt-20 md:pt-6 pb-16 transition-[margin-left] duration-300 ease-in-out ${
          sidebarCollapsed ? "md:ml-20" : "md:ml-72"
        }`}
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
