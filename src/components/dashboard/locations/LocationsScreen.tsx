import { DashboardFooter } from "../DashboardFooter";
import { MapIcon } from "../icons";
import { LocationsBreadcrumb } from "./LocationsBreadcrumb";
import { LocationHeroCard } from "./LocationHeroCard";
import { HogwartsCastleCard } from "./HogwartsCastleCard";
import { PrivetDriveCard } from "./PrivetDriveCard";
import { LocationStatsCard } from "./LocationStatsCard";

export function LocationsScreen() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <LocationsBreadcrumb />

        <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-[26px] font-bold leading-tight text-heading">
              World Mapping
            </h1>
            <p className="mt-1 max-w-xl text-base text-body">
              Visualizing key settings, character movements, and environmental significance
              across your manuscript.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div
                className="flex size-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
                style={{ backgroundImage: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)" }}
              >
                HP
              </div>
              <div
                className="flex size-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
                style={{ backgroundImage: "linear-gradient(135deg, #a9c6f5 0%, #4c6fbf 100%)" }}
              >
                RH
              </div>
              <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-badge-purple text-xs font-bold text-[#625595] shadow-sm">
                +12
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold text-body shadow-sm transition-colors hover:border-brand hover:text-brand"
            >
              <MapIcon className="size-4" />
              Interactive Map
            </button>
          </div>
        </div>

        <div className="mt-6">
          <LocationHeroCard />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <HogwartsCastleCard />
          <PrivetDriveCard />
        </div>

        <div className="mt-6 max-w-md">
          <LocationStatsCard />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}
