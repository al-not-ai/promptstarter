"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/sidebar";
import { StatusHeader } from "@/components/status-header";
import { ControlPanel } from "@/components/control-panel";
import { AccessGate } from "@/components/AccessGate";
import { tools } from "@/lib/tools";

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

  const activeTool = tools.find((t) => t.id === activeToolId)!;
  const firstVarName = activeTool.variables[0]?.name;
  const isReady = Boolean(firstVarName && variableValues[firstVarName]?.trim().length > 0);

  const handleToolSelect = useCallback((toolId: string) => {
    setActiveToolId(toolId);
    setSliderValues(defaultSliderValues(toolId));
    setVariableValues(defaultVariableValues(toolId));
  }, []);

  return (
    <AccessGate>
      <div className="grid-bg relative flex min-h-screen flex-col bg-background overflow-x-hidden">
        <Sidebar
          activeToolId={activeToolId}
          onToolSelect={handleToolSelect}
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />
        <StatusHeader activeToolId={activeToolId} onToolSelect={handleToolSelect} />

        <main
          className={`flex flex-1 items-start justify-center px-4 md:px-8 pt-[70px] md:pt-6 pb-16 transition-all duration-300 ${
            sidebarCollapsed ? "md:ml-16" : "md:ml-64"
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
          />
        </main>
      </div>
    </AccessGate>
  );
}
