import { FeaturedAnalysisCard } from "./FeaturedAnalysisCard";
import { AnalysisCard } from "./AnalysisCard";
import {
  NetworkGraphIcon,
  NarrativeArcIcon,
  LocationAtlasIcon,
  ThematicEvolutionIcon,
} from "./icons";

export function ExploreAnalysisSection() {
  return (
    <section className="mt-8">
      <h2 className="mb-4 font-heading text-base font-bold text-heading">
        Explore Deep Analysis
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <FeaturedAnalysisCard
            icon={NetworkGraphIcon}
            title="Character Relationships"
            description="Interactive force-directed graph showing the dynamic bonds between Harry, Hermione, Ron, and the staff of Hogwarts."
            linkLabel="Launch Network Map"
          />
        </div>

        <AnalysisCard
          icon={NarrativeArcIcon}
          iconBg="var(--color-badge-pink)"
          iconColor="text-brand"
          title="Narrative Arc"
          description="Visualization of emotional resonance and tension spikes across all 17 chapters."
          dotColors={["#fbcfe8", "#fda4d9"]}
        />

        <AnalysisCard
          icon={LocationAtlasIcon}
          iconBg="var(--color-badge-pink)"
          iconColor="text-brand"
          title="Location Atlas"
          description="Detailed breakdown of key settings from Privet Drive to Gringotts Bank."
        />

        <div className="md:col-span-2">
          <AnalysisCard
            icon={ThematicEvolutionIcon}
            iconBg="#ffffff"
            iconColor="text-brand"
            title="Thematic Evolution"
            description={
              'Discover how themes of "Belonging" and "Choice" evolve from the first encounter with Hagrid to the final showdown.'
            }
            titleColor="text-brand"
            cardBg="var(--color-icon-pink-alt)"
          />
        </div>
      </div>
    </section>
  );
}
