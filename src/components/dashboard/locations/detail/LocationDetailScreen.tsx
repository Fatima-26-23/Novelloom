import { DashboardFooter } from "../../DashboardFooter";
import { PlusIcon } from "../../icons";
import { LocationDetailBreadcrumb } from "./LocationDetailBreadcrumb";
import { LocationDetailHero } from "./LocationDetailHero";
import { LocationDetailTabs } from "./LocationDetailTabs";
import { LocationOverviewCard } from "./LocationOverviewCard";
import { NarrativeAtmosphereCard } from "./NarrativeAtmosphereCard";
import { ResidentCharactersCard } from "./ResidentCharactersCard";
import { ChronologyOfEventsCard } from "./ChronologyOfEventsCard";
import { LocationDetailStatsCard } from "./LocationDetailStatsCard";
import { RelatedSubLocationsCard } from "./RelatedSubLocationsCard";
import type { LocationDetail } from "./data";

type LocationDetailScreenProps = {
  location: LocationDetail;
};

export function LocationDetailScreen({ location }: LocationDetailScreenProps) {
  return (
    <div className="relative flex w-full flex-1 flex-col">
      <div className="flex-1">
        <LocationDetailBreadcrumb locationName={location.name} />

        <div className="mt-4">
          <LocationDetailHero
            name={location.name}
            badges={location.badges}
            tagline={location.tagline}
            narrativeWeight={location.narrativeWeight}
          />
        </div>

        <div className="mt-6">
          <LocationDetailTabs keySceneCount={location.subLocations.length + 21} />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <LocationOverviewCard
              title={location.overviewTitle}
              paragraphs={location.overviewParagraphs}
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <NarrativeAtmosphereCard
                from={location.atmosphereFrom}
                to={location.atmosphereTo}
                note={location.atmosphereNote}
              />
              <ResidentCharactersCard
                summary={location.residentSummary}
                extra={location.residentExtra}
              />
            </div>

            <ChronologyOfEventsCard events={location.chronology} />
          </div>

          <div className="flex flex-col gap-6">
            <LocationDetailStatsCard
              totalChapters={location.totalChapters}
              totalChaptersTrend={location.totalChaptersTrend}
              primaryMood={location.primaryMood}
              characterDensity={location.characterDensity}
            />
            <RelatedSubLocationsCard subLocations={location.subLocations} />
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Add new insight"
        className="fixed bottom-8 right-8 flex size-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-opacity hover:opacity-90"
      >
        <PlusIcon className="size-5" />
      </button>

      <DashboardFooter />
    </div>
  );
}
