import { timelineStats } from "./data";

export function TimelineStatsCard() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.1)]">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">Timeline Stats</p>

      <div className="mt-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-body">Active Characters</span>
          <span className="font-heading text-base font-bold text-brand">
            {timelineStats.activeCharacters}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-body">Total Plot Points</span>
          <span className="font-heading text-base font-bold text-brand">
            {timelineStats.totalPlotPoints}
          </span>
        </div>
      </div>

      <div className="mt-4 border-t border-border/30 pt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-body">Pacing Density</span>
          <span className="font-semibold text-brand-dark">{timelineStats.pacingDensity}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#f3e6ee]">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand to-[#625595]" />
        </div>
      </div>
    </div>
  );
}
