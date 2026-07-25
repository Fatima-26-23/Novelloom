"use client";

import { useState } from "react";
import { focusViews } from "./data";

export function FocusViewCard() {
  const [active, setActive] = useState(
    focusViews.find((v) => v.active)?.label ?? focusViews[0].label
  );

  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.1)]">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">Focus View</p>

      <ul className="mt-3 flex flex-col gap-2.5">
        {focusViews.map(({ label }) => {
          const isActive = active === label;
          return (
            <li key={label}>
              <button
                type="button"
                onClick={() => setActive(label)}
                className="flex w-full items-center gap-2.5 text-left text-xs"
              >
                <span
                  className={`size-2 shrink-0 rounded-full ${
                    isActive ? "bg-brand" : "border border-border bg-transparent"
                  }`}
                />
                <span className={isActive ? "font-semibold text-heading" : "text-body"}>
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
