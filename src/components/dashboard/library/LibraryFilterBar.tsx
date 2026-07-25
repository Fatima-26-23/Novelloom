"use client";

import { SortIcon, FilterIcon, DashboardIcon, ListViewIcon } from "../icons";

type LibraryFilterBarProps = {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
};

export function LibraryFilterBar({ view, onViewChange }: LibraryFilterBarProps) {
  return (
    <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="font-heading text-[26px] font-bold leading-tight text-brand">
          My Library
        </h1>
        <p className="mt-1 text-base text-body">Organize and analyze your literary universe.</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-badge-pink px-3.5 py-2 text-xs font-semibold text-brand"
        >
          <SortIcon className="size-3.5" />
          Sort: Recent
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-card-border bg-white px-3.5 py-2 text-xs font-semibold text-body hover:border-brand hover:text-brand"
        >
          <FilterIcon className="size-3.5" />
          Filter
        </button>

        <div className="flex items-center gap-1 rounded-full border border-card-border bg-white p-1">
          <button
            type="button"
            aria-label="Grid view"
            onClick={() => onViewChange("grid")}
            className={`flex size-7 items-center justify-center rounded-full transition-colors ${
              view === "grid" ? "bg-brand text-white" : "text-muted hover:text-brand"
            }`}
          >
            <DashboardIcon className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="List view"
            onClick={() => onViewChange("list")}
            className={`flex size-7 items-center justify-center rounded-full transition-colors ${
              view === "list" ? "bg-brand text-white" : "text-muted hover:text-brand"
            }`}
          >
            <ListViewIcon className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
