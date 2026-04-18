"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  className?: string
}

function Slider({
  value,
  defaultValue,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  className,
}: SliderProps) {
  const current = value?.[0] ?? defaultValue?.[0] ?? min
  const percent = max === min ? 0 : ((current - min) / (max - min)) * 100

  return (
    <div
      className={cn("relative flex w-full touch-none items-center select-none", className)}
    >
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="absolute h-full bg-primary"
          style={{ width: `${percent}%` }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        disabled={disabled}
        onChange={(e) => onValueChange?.([e.target.valueAsNumber])}
        className={cn(
          "absolute inset-0 h-full w-full cursor-pointer opacity-0",
          disabled && "pointer-events-none"
        )}
      />
      {/* Visible thumb */}
      <div
        className="pointer-events-none absolute size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[box-shadow]"
        style={{ left: `calc(${percent}% - ${percent / 100 * 12}px)` }}
      />
    </div>
  )
}

export { Slider }
