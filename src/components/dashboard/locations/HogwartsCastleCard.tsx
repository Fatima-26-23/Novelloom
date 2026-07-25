import Link from "next/link";
import { ArrowRightIcon } from "../icons";
import { hogwartsCastle } from "./data";

export function HogwartsCastleCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-card-border bg-white shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <Link
        href={`/dashboard/locations/${hogwartsCastle.locationId}`}
        className="relative block h-40 w-full overflow-hidden bg-[linear-gradient(180deg,#0f1b3d_0%,#284b7a_55%,#7fa8c9_100%)]"
      >
        <svg viewBox="0 0 400 140" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <rect x="60" y="60" width="26" height="70" fill="#1b2540" />
          <polygon points="60,60 73,42 86,60" fill="#111830" />
          <rect x="130" y="45" width="34" height="85" fill="#212c4a" />
          <polygon points="130,45 147,24 164,45" fill="#141c34" />
          <rect x="190" y="70" width="90" height="60" fill="#26314f" />
          <rect x="240" y="30" width="22" height="100" fill="#1b2540" />
          <polygon points="240,30 251,12 262,30" fill="#111830" />
          <rect x="300" y="58" width="26" height="72" fill="#1b2540" />
          <polygon points="300,58 313,38 326,58" fill="#111830" />
          <circle cx="313" cy="20" r="10" fill="#f5e6c8" opacity="0.85" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </Link>

      <div className="p-5">
        <Link href={`/dashboard/locations/${hogwartsCastle.locationId}`}>
          <h3 className="font-heading text-base font-bold text-heading hover:text-brand">
            {hogwartsCastle.name}
          </h3>
        </Link>

        <Link
          href={`/dashboard/locations/${hogwartsCastle.locationId}`}
          className="mt-1.5 flex w-fit items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
        >
          View Location
          <ArrowRightIcon className="size-3.5" />
        </Link>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {hogwartsCastle.badges.map((badge, index) => (
            <span
              key={badge}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                index === 0 ? "bg-badge-pink text-brand-dark" : "bg-badge-purple text-[#625595]"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-[#fdf1f6] p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-brand">
            {hogwartsCastle.upcomingEventLabel}
          </p>
          <p className="mt-1 text-base font-medium text-heading">{hogwartsCastle.upcomingEvent}</p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-body">Narrative Weight</span>
            <span className="font-bold text-brand">{hogwartsCastle.narrativeWeight}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#f3e6ee]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-[#625595]"
              style={{ width: `${hogwartsCastle.narrativeWeight}%` }}
            />
          </div>
        </div>

        <Link
          href={`/dashboard/locations/${hogwartsCastle.locationId}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-brand px-4 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
        >
          View sub-locations ({hogwartsCastle.subLocationsCount})
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}
