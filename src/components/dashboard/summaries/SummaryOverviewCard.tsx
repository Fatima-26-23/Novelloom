import { AiSparkleIcon } from "../icons";
import { overview } from "./data";

export function SummaryOverviewCard() {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (overview.percentAnalyzed / 100) * circumference;

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="max-w-xl">
        <span className="flex w-fit items-center gap-1.5 rounded-full badge-gradient px-3 py-1 text-xs font-bold text-brand-dark">
          <AiSparkleIcon className="size-3" />
          AI Overview
        </span>
        <span className="ml-2 text-xs text-muted">{overview.updated}</span>

        <p className="mt-3 font-heading text-base font-bold italic text-heading">
          &ldquo;{overview.quote}&rdquo;
        </p>

        <p className="mt-3 text-base leading-relaxed text-body">
          Your novel currently spans {overview.totalChapters} chapters with a total of{" "}
          {overview.totalWords} words. The narrative arc shows a significant peak in tension in
          Chapter {overview.peakChapter}, where the protagonist discovers the hidden archives.
        </p>
      </div>

      <div className="relative flex size-24 shrink-0 items-center justify-center">
        <svg viewBox="0 0 80 80" className="size-24 -rotate-90">
          <circle cx="40" cy="40" r={radius} fill="none" stroke="#f3e6ee" strokeWidth="7" />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#a43073"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="font-heading text-base font-bold text-heading">
            {overview.percentAnalyzed}%
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Analyzed
          </span>
        </div>
      </div>
    </div>
  );
}