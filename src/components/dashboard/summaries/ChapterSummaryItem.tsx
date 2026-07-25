"use client";

import { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "../icons";
import type { ChapterSummary } from "./data";

type ChapterSummaryItemProps = {
  chapter: ChapterSummary;
  defaultOpen?: boolean;
};

export function ChapterSummaryItem({ chapter, defaultOpen = false }: ChapterSummaryItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-card-border bg-white shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex gap-4">
          <span className="font-heading text-base font-bold text-muted">{chapter.number}</span>
          <div>
            <h3 className="font-heading text-base font-bold text-heading">{chapter.title}</h3>
            <p className="mt-0.5 text-xs text-muted">
              {chapter.wordCount} · {chapter.sceneCount}
            </p>
            {!open && (
              <p className="mt-2 max-w-2xl truncate text-xs text-body">{chapter.preview}</p>
            )}
          </div>
        </div>
        <ChevronDownIcon
          className={`mt-1 size-4 shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-border/40 px-6 pb-6 pt-4">
          <p className="border-l-2 border-brand pl-4 text-base leading-relaxed text-body">
            {chapter.preview}
          </p>

          {(chapter.primarySetting || chapter.toneShift) && (
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {chapter.primarySetting && (
                <div className="rounded-xl bg-badge-purple/40 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#625595]">
                    Primary Setting
                  </p>
                  <p className="mt-1 text-xs font-semibold text-heading">
                    {chapter.primarySetting}
                  </p>
                </div>
              )}
              {chapter.toneShift && (
                <div className="rounded-xl bg-[#fdf1f6] p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand">
                    Tone Shift
                  </p>
                  <p className="mt-1 text-xs font-semibold text-heading">{chapter.toneShift}</p>
                </div>
              )}
            </div>
          )}

          {chapter.keyTakeaways && chapter.keyTakeaways.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">
                Key Takeaways
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {chapter.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-body">
                    <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}