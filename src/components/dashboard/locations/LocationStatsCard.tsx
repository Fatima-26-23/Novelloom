import { locationStats } from "./data";

export function LocationStatsCard() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">Location Statistics</p>

      <div className="mt-4 flex items-center justify-between text-base">
        <span className="text-body">Total Unique Settings</span>
        <span className="font-bold text-heading">{locationStats.totalUniqueSettings}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-base">
        <span className="text-body">Cross-Regional Travel</span>
        <span className="font-bold text-brand">{locationStats.crossRegionalTravel}%</span>
      </div>

      <div className="mt-5">
        <p className="text-base font-semibold text-body">Primary Sentiment</p>
        <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-gradient-to-r from-brand via-[#a58fd6] to-[#8fc8d6]" />
        <div className="mt-2 flex items-center justify-between text-xs text-muted">
          <span>Tension</span>
          <span>Wonder</span>
          <span>Safety</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-full bg-heading px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-opacity hover:opacity-90"
      >
        Generate Environment Report
      </button>
    </div>
  );
}