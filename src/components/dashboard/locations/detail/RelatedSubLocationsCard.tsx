import { ChevronRightIcon, PlusIcon } from "../../icons";
import type { SubLocation } from "./data";

type RelatedSubLocationsCardProps = {
  subLocations: SubLocation[];
};

export function RelatedSubLocationsCard({ subLocations }: RelatedSubLocationsCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">
        Related Sub-Locations
      </p>

      <div className="mt-3 flex flex-col gap-1">
        {subLocations.map((subLocation) => (
          <button
            key={subLocation.id}
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-1 py-2.5 text-left transition-colors hover:bg-brand/5"
          >
            <span className="size-10 shrink-0 rounded-lg bg-[linear-gradient(160deg,#2c2338_0%,#4a2f3f_100%)]" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-heading">{subLocation.name}</p>
              <p className="text-xs text-muted">
                Narrative Weight: {subLocation.narrativeWeight}%
              </p>
            </div>
            <ChevronRightIcon className="size-4 shrink-0 text-muted" />
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2.5 text-xs font-semibold text-muted transition-colors hover:border-brand hover:text-brand"
      >
        <PlusIcon className="size-3.5" />
        Add New Room
      </button>
    </div>
  );
}
