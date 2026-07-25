"use client";

import { useState } from "react";

type SettingsCheckboxProps = {
  label: string;
  defaultChecked?: boolean;
};

export function SettingsCheckbox({ label, defaultChecked = false }: SettingsCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="flex items-center gap-2 text-xs text-body">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        className="size-3.5 rounded border-card-border text-brand focus:ring-brand/20"
      />
      {label}
    </label>
  );
}
