"use client";

import { useState } from "react";

type SettingsSliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  formatValue: (value: number) => string;
};

export function SettingsSlider({ label, min, max, step, defaultValue, formatValue }: SettingsSliderProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-body">{label}</p>
        <span className="text-xs font-semibold text-heading">{formatValue(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-card-border accent-brand"
      />
    </div>
  );
}
