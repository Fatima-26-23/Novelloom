import { BarChartIcon } from "../../icons";
import type { NarrativeStat } from "../data";

type NarrativePresenceCardProps = {
  stats: NarrativeStat[];
};

export function NarrativePresenceCard({ stats }: NarrativePresenceCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center gap-2">
        <BarChartIcon className="size-4 text-brand" />
        <h2 className="font-heading text-xs font-bold text-heading">Narrative Presence</h2>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {stats.map(({ label, displayValue, percent }) => (
          <div key={label}>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">{label}</span>
              <span className="font-semibold text-heading">{displayValue}</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-badge-pink">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dark"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
