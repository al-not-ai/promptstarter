"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  const [power, setPower] = useState([72]);

  return (
    <div className="grid-bg relative flex min-h-screen flex-col bg-background">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/40 px-8 py-4 backdrop-blur-md">
        <span className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground">
          PROMPTSTARTER <span className="text-primary">// V1.0</span>
        </span>
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            SYSTEM STATUS:{" "}
            <span className="text-primary">ACTIVE</span>
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-4 pt-24 pb-8">
        <Card className="w-full max-w-[800px] border border-white/10 bg-white/[0.03] backdrop-blur-md">
          <CardHeader className="border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <CardTitle className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Control Panel
              </CardTitle>
            </div>
            <CardDescription className="font-mono text-xs tracking-widest text-muted-foreground/60">
              SYSTEM ONLINE — ALL NODES ACTIVE — {new Date().toUTCString()}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-10 pt-8 pb-8 px-8">

            {/* Power readout */}
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Power Output
                </p>
                <p className="font-mono text-7xl font-bold leading-none text-primary" style={{ textShadow: "0 0 40px rgba(57,255,20,0.4)" }}>
                  {power[0]}<span className="text-3xl text-primary/60">%</span>
                </p>
              </div>
              <div className="text-right font-mono text-xs text-muted-foreground space-y-1">
                <p>MAX: <span className="text-foreground">100%</span></p>
                <p>MIN: <span className="text-foreground">0%</span></p>
                <p>STEP: <span className="text-foreground">1</span></p>
              </div>
            </div>

            {/* Slider */}
            <Slider
              value={power}
              onValueChange={(val) => setPower(val as number[])}
              min={0}
              max={100}
              step={1}
            />

            {/* Target node input */}
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Target Node
              </label>
              <Input
                className="font-mono bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary h-11"
                placeholder="node://192.168.0.1"
              />
            </div>

            {/* Action row */}
            <div className="flex gap-4 pt-2">
              <Button
                variant="outline"
                className="flex-1 font-mono text-xs uppercase tracking-[0.2em] border-white/10 bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                Abort
              </Button>
              <Button className="flex-[2] font-mono text-xs uppercase tracking-[0.2em]">
                Execute Command
              </Button>
            </div>

          </CardContent>
        </Card>
      </main>
    </div>
  );
}
