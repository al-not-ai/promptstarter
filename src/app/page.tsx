"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/sidebar";
import { StatusHeader } from "@/components/status-header";
import { ControlPanel } from "@/components/control-panel";
import { tools } from "@/lib/tools";

function defaultValues(toolId: string): Record<string, number> {
  const tool = tools.find((t) => t.id === toolId)!;
  return Object.fromEntries(tool.controls.map((c) => [c.id, c.min]));
}

export default function Home() {
  const [activeToolId, setActiveToolId] = useState(tools[0].id);
  const [targetAccount, setTargetAccount] = useState("");
  const [industryVertical, setIndustryVertical] = useState("");
  const [controlValues, setControlValues] = useState<Record<string, number>>(
    defaultValues(tools[0].id)
  );

  const activeTool = tools.find((t) => t.id === activeToolId)!;
  const isReady = targetAccount.trim().length > 0;

  const handleToolSelect = useCallback((toolId: string) => {
    setActiveToolId(toolId);
    setControlValues(defaultValues(toolId));
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="grid-bg relative flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Sidebar activeToolId={activeToolId} onToolSelect={handleToolSelect} />
      <StatusHeader activeToolId={activeToolId} onToolSelect={handleToolSelect} />

      <main className="flex flex-1 items-start md:items-center justify-center px-4 md:px-6 pt-24 pb-8 md:ml-[260px]">
        <ControlPanel
          activeTool={activeTool}
          controlValues={controlValues}
          targetAccount={targetAccount}
          industryVertical={industryVertical}
          isReady={isReady}
          onSliderChange={(id, value) =>
            setControlValues((prev) => ({ ...prev, [id]: value }))
          }
          onTargetAccountChange={setTargetAccount}
          onIndustryVerticalChange={setIndustryVertical}
          onReset={() => {
            setTargetAccount("");
            setIndustryVertical("");
            setControlValues(defaultValues(activeToolId));
          }}
        />
      </main>
    </div>
  );
}
