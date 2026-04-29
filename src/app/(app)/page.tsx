"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TopBar } from "@/components/top-bar";
import { AppRail } from "@/components/app-rail";
import { ControlPanel } from "@/components/control-panel";
import { UpgradeTrigger } from "@/components/upgrade-trigger";
import { ProfileWizardSheet } from "@/components/profile-wizard-sheet";
import { tools } from "@/lib/tools";
import { useProfileSwitcher } from "@/lib/profile-context";
import {
  getCache,
  setCache,
} from "@/lib/form-cache";
import type { RestoredGeneration } from "@/lib/types/generation";
import type { ProductProfile } from "@/lib/types/profile";

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
  const [rawContext, setRawContext] = useState("");
  const [contextOpen, setContextOpen] = useState(false);
  const [currentOutput, setCurrentOutput] = useState("");

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);
  const [railPinned, setRailPinned] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [userTier, setUserTier] = useState<'core' | 'pro'>('core');

  // ── One-time initialisation: load rail pin + handle ?restore / ?openWizard / cache ──

  const initialized = useRef(false);

  useEffect(() => {
    try {
      setRailPinned(localStorage.getItem(RAIL_PIN_KEY) === "true");
    } catch {
      // localStorage unavailable
    }
  }, []);

  useEffect(() => {
    fetch('/api/user/tier')
      .then(r => r.ok ? r.json() : { tier: 'core' })
      .then(data => setUserTier(data.tier))
      .catch(() => {}); // fail safe — stays 'core'
  }, []);

  // Handle ?openWizard=true search param
  useEffect(() => {
    if (searchParams.get("openWizard") === "true") {
      setWizardOpen(true);
      router.replace("/", { scroll: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount; searchParams stable at mount

  useEffect(() => {
    if (initialized.current || !activeProfileId) return;
    initialized.current = true;

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

    const cached = getCache(activeProfileId, tools[0].id);
    if (cached) {
      setVariableValues(cached.variableValues);
      setSliderValues(cached.sliderValues);
      setRawContext(cached.rawContext);
      setContextOpen(cached.contextOpen);
      setCurrentOutput(cached.output);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProfileId]);

  // ── Persist form + output to sessionStorage ────────────────────────────────

  useEffect(() => {
    if (!activeProfileId) return;
    const hasInput =
      Object.values(variableValues).some((v) => v.trim()) ||
      rawContext.trim().length > 0 ||
      Object.values(sliderValues).some((v) => v !== 0);
    if (!hasInput && !currentOutput) return;

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

  // ── Tool selection ─────────────────────────────────────────────────────────

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

  // ── Wizard callbacks ───────────────────────────────────────────────────────

  const handleWizardComplete = useCallback((_profile: ProductProfile) => {
    setWizardOpen(false);
    router.refresh();
  }, [router]);

  // ── Derived ───────────────────────────────────────────────────────────────

  const activeTool = tools.find((t) => t.id === activeToolId)!;
  const firstVarName = activeTool.variables[0]?.name;
  const isReady = Boolean(
    firstVarName && variableValues[firstVarName]?.trim().length > 0
  );

  return (
    <div className="grid-bg relative flex min-h-[100dvh] flex-col bg-background overflow-x-hidden">
      <TopBar
        isMobileOpen={mobileNavOpen}
        onMenuToggle={() => setMobileNavOpen((v) => !v)}
        onAddProfile={() => setWizardOpen(true)}
      />

      <AppRail
        activeToolId={activeToolId}
        onToolSelect={handleToolSelect}
        isMobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
        onRestoreGeneration={handleRestoreGeneration}
        refreshKey={generationCount}
        isPinned={railPinned}
        onPinChange={setRailPinned}
        onAddProfile={() => setWizardOpen(true)}
        userTier={userTier}
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
          userTier={userTier}
        />
        <UpgradeTrigger
          toolId={activeToolId}
          userTier={userTier}
          hasOutput={Boolean(currentOutput)}
        />
      </main>

      <ProfileWizardSheet
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={handleWizardComplete}
      />
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
