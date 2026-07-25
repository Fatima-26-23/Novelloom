"use client";

import { useState } from "react";

type ToggleSwitchProps = {
  defaultChecked?: boolean;
  label?: string;
  description?: string;
  disabled?: boolean;
};

export function ToggleSwitch({ defaultChecked = false, label, description, disabled }: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => setChecked((prev) => !prev)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors disabled:opacity-40 ${
        checked ? "bg-brand" : "bg-card-border"
      }`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );

  if (!label) return toggle;

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold text-heading">{label}</p>
        {description && <p className="mt-0.5 text-xs text-muted">{description}</p>}
      </div>
      {toggle}
    </div>
  );
}
