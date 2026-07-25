"use client";

import { useState } from "react";

type PillSelectProps = {
  options: string[];
  defaultValue?: string;
  className?: string;
};

export function PillSelect({ options, defaultValue, className }: PillSelectProps) {
  const [active, setActive] = useState(defaultValue ?? options[0]);

  return (
    <div className={`inline-flex items-center gap-1 rounded-full bg-page-bg p-1 ${className ?? ""}`}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setActive(option)}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
            option === active
              ? "bg-heading text-white shadow-sm"
              : "text-muted hover:text-heading"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
