import { DashboardFooter } from "../DashboardFooter";
import { ChapterBlock } from "./ChapterBlock";
import { TimelineStatsCard } from "./TimelineStatsCard";
import { FocusViewCard } from "./FocusViewCard";
import { timelineChapters } from "./data";
import { AiSparkleIcon, FilterIcon, ExportIcon } from "../icons";

export function TimelineScreen() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="flex w-fit items-center gap-1.5 rounded-full badge-gradient px-3 py-1 text-xs font-bold text-brand-dark">
              <AiSparkleIcon className="size-3" />
              AI-Generated Analysis
            </span>
            <h1 className="mt-3 font-heading text-base font-bold leading-tight text-heading">
              Narrative Chronology
            </h1>
            <p className="mt-1 max-w-xl text-xs text-body">
              Visualizing narrative architecture of{" "}
              <span className="font-semibold text-brand">&ldquo;The Philosopher&apos;s Stone&rdquo;</span>{" "}
              through an interactive plot-arc analysis.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-body transition-colors hover:border-brand hover:text-brand"
            >
              <FilterIcon className="size-4" />
              Filter
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              <ExportIcon className="size-4" />
              Export
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col">
            {timelineChapters.map((chapter, index) => (
              <ChapterBlock
                key={chapter.number}
                chapter={chapter}
                isLast={index === timelineChapters.length - 1}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start">
            <TimelineStatsCard />
            <FocusViewCard />
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}