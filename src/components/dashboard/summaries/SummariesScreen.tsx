"use client";

import { useState } from "react";
import { DashboardFooter } from "../DashboardFooter";
import { SearchIcon, SortIcon, ExportIcon } from "../icons";
import { SummariesBreadcrumb } from "./SummariesBreadcrumb";
import { SummaryOverviewCard } from "./SummaryOverviewCard";
import { ChapterSummaryItem } from "./ChapterSummaryItem";
import { chapterSummaries } from "./data";

export function SummariesScreen() {
  const [searchValue, setSearchValue] = useState("");

  const filteredChapters = chapterSummaries.filter((chapter) =>
    chapter.title.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <SummariesBreadcrumb />
            <h1 className="mt-2 font-heading text-base font-bold leading-tight text-heading">
              Chapter Summaries
            </h1>
          </div>

          <div className="relative w-full max-w-xs">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search summaries..."
              className="w-full rounded-full border border-border bg-white py-2.5 pl-9 pr-4 text-xs text-heading placeholder:text-muted focus:border-brand focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <SummaryOverviewCard />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="font-heading text-base font-bold text-heading">Book Chapters</h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-brand"
            >
              <SortIcon className="size-4" />
              Ascending
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-brand"
            >
              <ExportIcon className="size-4" />
              Export PDF
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {filteredChapters.map((chapter, index) => (
            <ChapterSummaryItem key={chapter.number} chapter={chapter} defaultOpen={index === 0} />
          ))}

          {filteredChapters.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-card-border bg-white py-16 text-center">
              <p className="font-heading text-base font-bold text-heading">No chapters found</p>
              <p className="text-xs text-muted">Try a different search term.</p>
            </div>
          )}
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}