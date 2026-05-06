"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { TopBar } from "@/components/top-bar";
import { AppRail } from "@/components/app-rail";
import { ControlPanel } from "@/components/control-panel";
import { UpgradeTrigger } from "@/components/upgrade-trigger";
import { ProfileWizardSheet } from "@/components/profile-wizard-sheet";
import { ToolPicker } from "@/components/tool-picker";
import { tools } from "@/lib/tools";
import { useProfileSwitcher } from "@/lib/profile-context";
import {
  getCache,
  setCache,
} from "@/lib/form-cache";
import type { RestoredGeneration } from "@/lib/types/generation";
import type { ProductProfile } from "@/lib/types/profile";

const RAIL_COLLAPSED_KEY = "promptstarter:rail-collapsed";
// Set to "true" the first time the user copies any prompt. Suppresses the
// upgrade-trigger banner during the user's very first end-to-end flow so the
// initial copy moment isn't immediately competing with an upsell.
const HAS_COMPLETED_FIRST_FLOW_KEY = "promptstarter:has-completed-first-flow";
const LAST_VIEW_KEY = "promptstarter:last-view";
const LAST_TOOL_KEY = "promptstarter:last-tool";

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
  // True only between the moment the user clicks Copy on the *current* output
  // and the moment a new output replaces it. Drives the upgrade-trigger banner.
  const [hasCopiedCurrentOutput, setHasCopiedCurrentOutput] = useState(false);
  // Read once on mount. Stays false through the user's very first copy so the
  // upgrade banner doesn't appear during the first flow.
  const [hasCompletedFirstFlow, setHasCompletedFirstFlow] = useState(false);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);
  const [railCollapsed, setRailCollapsed] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [userTier, setUserTier] = useState<'core' | 'pro'>('core');
  const [welcomeBanner, setWelcomeBanner] = useState(false);

  // Picker view state. Default 'gallery' so every fresh load lands on the
  // picker. The ?picker=true effect keeps client-side nav working (e.g.
  // wordmark click from /dashboard where the component does not remount).
  // The restore effect below flips to 'tool' directly when ?restore= is
  // present so the restored generation skips the picker entirely.
  const [view, setView] = useState<'gallery' | 'tool'>('gallery');

  // ── One-time initialisation: load rail pin + handle ?restore / ?openWizard / cache ──

  const initialized = useRef(false);

  /* eslint-disable react-hooks/set-state-in-effect -- localStorage must be read client-side; lazy init would cause server/client hydration mismatch on first render */
  useEffect(() => {
    try {
      setRailCollapsed(localStorage.getItem(RAIL_COLLAPSED_KEY) === "true");
      setHasCompletedFirstFlow(
        localStorage.getItem(HAS_COMPLETED_FIRST_FLOW_KEY) === "true"
      );
      const savedTool = localStorage.getItem(LAST_TOOL_KEY);
      if (
        localStorage.getItem(LAST_VIEW_KEY) === "tool" &&
        savedTool &&
        tools.some((t) => t.id === savedTool)
      ) {
        setView("tool");
        setActiveToolId(savedTool);
        setSliderValues(defaultSliderValues(savedTool));
        setVariableValues(defaultVariableValues(savedTool));
      }
    } catch {
      // localStorage unavailable
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // ?picker=true — forces gallery view on client-side navigation (e.g. wordmark
  // click from /dashboard, where the component does not remount).
  /* eslint-disable react-hooks/set-state-in-effect -- reactive to URL params; setState is conditional behind a hard early-return guard */
  useEffect(() => {
    if (searchParams.get("picker") !== "true") return;
    setView('gallery');
    router.replace("/dashboard", { scroll: false });
  }, [searchParams, router]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    fetch('/api/user/tier')
      .then(r => r.ok ? r.json() : { tier: 'core' })
      .then(data => setUserTier(data.tier))
      .catch(() => {}); // fail safe — stays 'core'
  }, []);

  // ?openWizard=true — reactive so deep-links work after client-side nav too.
  /* eslint-disable react-hooks/set-state-in-effect -- reactive to URL params; setState is conditional behind a hard early-return guard */
  useEffect(() => {
    if (searchParams.get("openWizard") !== "true") return;
    setWizardOpen(true);
    router.replace("/dashboard", { scroll: false });
  }, [searchParams, router]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // ?welcome=true — strip URL and show banner. Auto-dismiss is a separate
  // effect so that replacing the URL (which re-runs this effect) doesn't
  // cancel the timeout by running the cleanup prematurely.
  /* eslint-disable react-hooks/set-state-in-effect -- reactive to URL params; setState is conditional behind a hard early-return guard */
  useEffect(() => {
    if (searchParams.get("welcome") !== "true") return;
    router.replace("/dashboard", { scroll: false });
    setWelcomeBanner(true);
  }, [searchParams, router]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!welcomeBanner) return;
    const t = setTimeout(() => setWelcomeBanner(false), 5000);
    return () => clearTimeout(t);
  }, [welcomeBanner]);

  /* eslint-disable react-hooks/set-state-in-effect -- one-time restore+init; dep is [activeProfileId] intentionally; adding view would break ?restore= deep-link logic */
  useEffect(() => {
    if (initialized.current || !activeProfileId) return;
    initialized.current = true;

    const restoreId = searchParams.get("restore");
    if (restoreId) {
      setView('tool');
      router.replace("/dashboard", { scroll: false });
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

    const cached = getCache(activeProfileId, activeToolId);
    if (cached) {
      setVariableValues(cached.variableValues);
      setSliderValues(cached.sliderValues);
      setRawContext(cached.rawContext);
      setContextOpen(cached.contextOpen);
      setCurrentOutput(cached.output);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProfileId]);
  /* eslint-enable react-hooks/set-state-in-effect */

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
      setHasCopiedCurrentOutput(false);

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

  // ── Picker → tool transition ───────────────────────────────────────────────

  const handlePickTool = useCallback(
    (toolId: string) => {
      handleToolSelect(toolId);
      setView('tool');
    },
    [handleToolSelect]
  );

  // ── Persist view + active tool to localStorage ────────────────────────────

  useEffect(() => {
    if (view !== "tool") return;
    try {
      localStorage.setItem(LAST_VIEW_KEY, "tool");
      localStorage.setItem(LAST_TOOL_KEY, activeToolId);
    } catch {
      // localStorage unavailable
    }
  }, [view, activeToolId]);

  // ── Restore from rail / history click ─────────────────────────────────────

  const handleRestoreGeneration = useCallback((gen: RestoredGeneration) => {
    if (!gen) return;
    setActiveToolId(gen.toolId);
    setSliderValues(gen.sliderValues);
    setVariableValues(gen.variableValues);
    setRawContext("");
    setContextOpen(false);
    setCurrentOutput(gen.output);
    setHasCopiedCurrentOutput(false);
  }, []);

  // ── Generation lifecycle ───────────────────────────────────────────────────

  const handleGenerationStart = useCallback(() => {
    setHasCopiedCurrentOutput(false);
  }, []);

  const handleGenerationComplete = useCallback((output: string) => {
    setCurrentOutput(output);
    setGenerationCount((c) => c + 1);
    setHasCopiedCurrentOutput(false);
  }, []);

  const handleCopy = useCallback(() => {
    setHasCopiedCurrentOutput(true);
    if (!hasCompletedFirstFlow) {
      try {
        localStorage.setItem(HAS_COMPLETED_FIRST_FLOW_KEY, "true");
      } catch {
        // best-effort
      }
      setHasCompletedFirstFlow(true);
    }
  }, [hasCompletedFirstFlow]);

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

      {/* Welcome banner — shown once after successful Pro upgrade */}
      {welcomeBanner && (
        <div className="fixed top-14 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <div
            className="pointer-events-auto flex items-center gap-3 bg-zinc-900 border border-[#FF3300]/40 rounded-md px-4 py-3 shadow-lg"
            style={{ boxShadow: "0 0 24px rgba(255,51,0,0.2)" }}
          >
            <span className="font-sans text-sm text-zinc-200">
              Welcome to Pro. All 7 tools are now unlocked.
            </span>
            <button
              type="button"
              onClick={() => setWelcomeBanner(false)}
              className="font-sans text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150 ml-1"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <AppRail
        activeToolId={activeToolId}
        onToolSelect={handleToolSelect}
        isMobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
        onRestoreGeneration={handleRestoreGeneration}
        refreshKey={generationCount}
        isCollapsed={railCollapsed}
        onCollapsedChange={setRailCollapsed}
        onAddProfile={() => setWizardOpen(true)}
        userTier={userTier}
        iconsDeferred={view === 'gallery'}
      />

      <main
        className={`
          flex flex-1 items-start justify-center
          px-4 md:px-8
          pt-20 md:pt-20
          pb-16
          transition-[margin-left] duration-200 ease-in-out
          ${view === 'gallery' ? "md:ml-16" : railCollapsed ? "md:ml-16" : "md:ml-60"}
        `}
      >
        {view === 'gallery' ? (
          <ToolPicker onPick={handlePickTool} userTier={userTier} />
        ) : (
          <ToolSurface
            activeToolId={activeToolId}
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
            currentOutput={currentOutput}
            onGenerationStart={handleGenerationStart}
            onGenerationComplete={handleGenerationComplete}
            onCopy={handleCopy}
            hasCopiedCurrentOutput={hasCopiedCurrentOutput}
            hasCompletedFirstFlow={hasCompletedFirstFlow}
            userTier={userTier}
          />
        )}
      </main>

      <ProfileWizardSheet
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        onComplete={handleWizardComplete}
      />
    </div>
  );
}

/**
 * Wraps the ControlPanel + UpgradeTrigger pair so the surface fades in once
 * the picker → rail morph has settled. Layout matches what `<main>` expects
 * (flex children sitting side by side / stacked at the breakpoints
 * ControlPanel itself manages).
 */
function ToolSurface(props: {
  activeToolId: string;
  activeTool: typeof tools[number];
  sliderValues: Record<string, number>;
  variableValues: Record<string, string>;
  isReady: boolean;
  onSliderChange: (id: string, value: number) => void;
  onVariableChange: (name: string, value: string) => void;
  rawContext: string;
  onRawContextChange: (value: string) => void;
  contextOpen: boolean;
  onContextOpenChange: (open: boolean) => void;
  currentOutput: string;
  onGenerationStart: () => void;
  onGenerationComplete: (output: string) => void;
  onCopy: () => void;
  hasCopiedCurrentOutput: boolean;
  hasCompletedFirstFlow: boolean;
  userTier: 'core' | 'pro';
}) {
  return (
    <motion.div
      key="tool-surface"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.35 }}
      className="flex flex-1 items-start justify-center"
    >
      <ControlPanel
        key={props.activeToolId}
        activeTool={props.activeTool}
        sliderValues={props.sliderValues}
        variableValues={props.variableValues}
        isReady={props.isReady}
        onSliderChange={props.onSliderChange}
        onVariableChange={props.onVariableChange}
        rawContext={props.rawContext}
        onRawContextChange={props.onRawContextChange}
        contextOpen={props.contextOpen}
        onContextOpenChange={props.onContextOpenChange}
        restoredOutput={props.currentOutput}
        onGenerationStart={props.onGenerationStart}
        onGenerationComplete={props.onGenerationComplete}
        onCopy={props.onCopy}
        userTier={props.userTier}
      />
      <UpgradeTrigger
        toolId={props.activeToolId}
        userTier={props.userTier}
        hasCopied={props.hasCopiedCurrentOutput}
        suppressForFirstFlow={!props.hasCompletedFirstFlow}
      />
    </motion.div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
