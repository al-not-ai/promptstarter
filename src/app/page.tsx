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
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader className="border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <CardTitle className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Control Panel
            </CardTitle>
          </div>
          <CardDescription className="font-mono text-xs text-muted-foreground">
            SYSTEM ONLINE — ALL NODES ACTIVE
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Target Node
            </label>
            <Input
              className="font-mono bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
              placeholder="node://192.168.0.1"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Power Output
              </label>
              <span className="font-mono text-sm text-primary">
                {power[0]}%
              </span>
            </div>
            <Slider
              value={power}
              onValueChange={(val) => setPower(val as number[])}
              min={0}
              max={100}
              step={1}
            />
          </div>

          <Button className="w-full font-mono uppercase tracking-widest">
            Execute Command
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
