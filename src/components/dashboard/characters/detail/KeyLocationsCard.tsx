import Link from "next/link";
import { HomeIcon, LocationsIcon, ArrowRightIcon } from "../../icons";
import type { KeyLocation } from "../data";

const icons = [LocationsIcon, HomeIcon];

type KeyLocationsCardProps = {
  locations: KeyLocation[];
};

export function KeyLocationsCard({ locations }: KeyLocationsCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">Key Locations</p>

      <div className="mt-3 flex flex-col gap-3">
        {locations.map(({ name, subtitle }, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={name} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-badge-pink text-brand">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-heading">{name}</p>
                <p className="text-xs text-muted">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/dashboard/locations"
        className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
      >
        View Activity Map
        <ArrowRightIcon className="size-3.5" />
      </Link>
    </div>
  );
}
