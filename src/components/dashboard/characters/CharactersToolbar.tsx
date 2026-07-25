"use client";

import { AiSparkleIcon, SearchIcon } from "../icons";
import { roleFilters } from "./data";
import type { CharacterRole } from "./data";

type CharactersToolbarProps = {
  activeFilter: "All" | CharacterRole;
  onFilterChange: (filter: "All" | CharacterRole) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export function CharactersToolbar({
  activeFilter,
  onFilterChange,
  searchValue,
  onSearchChange,
}: CharactersToolbarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-heading text-[26px] font-bold leading-tight text-heading">
            Characters
          </h1>
          <p className="mt-1 text-base text-body">12 Primary Entities Detected</p>
        </div>

        <div className="relative w-full sm:w-72">
          <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search characters..."
            className="w-full rounded-full border border-border/30 bg-white py-2.5 pl-10 pr-4 text-xs text-heading placeholder:text-muted focus:border-brand focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-card-border bg-white p-1.5">
          {roleFilters.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() => onFilterChange(value)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === value
                  ? "bg-brand text-white shadow-sm"
                  : "text-body hover:bg-brand/5 hover:text-brand"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-card-border bg-white px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand/5"
        >
          <AiSparkleIcon className="size-3.5" />
          AI Insights
        </button>
      </div>
    </div>
  );
}
