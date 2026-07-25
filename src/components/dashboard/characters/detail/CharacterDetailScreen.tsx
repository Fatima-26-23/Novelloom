import { DashboardFooter } from "../../DashboardFooter";
import { Breadcrumb } from "./Breadcrumb";
import { CharacterProfileHeader } from "./CharacterProfileHeader";
import { CharacterTabs } from "./CharacterTabs";
import { CharacterDescriptionCard } from "./CharacterDescriptionCard";
import { KeyTraitsCard } from "./KeyTraitsCard";
import { NarrativePresenceCard } from "./NarrativePresenceCard";
import { AssociatedArtifactsCard } from "./AssociatedArtifactsCard";
import { KeyLocationsCard } from "./KeyLocationsCard";
import type { Character, CharacterProfile } from "../data";

type CharacterDetailScreenProps = {
  character: Character;
  profile: CharacterProfile;
};

export function CharacterDetailScreen({ character, profile }: CharacterDetailScreenProps) {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <Breadcrumb bookTitle={profile.bookTitle} characterName={character.name} />

        <div className="mt-5">
          <CharacterProfileHeader
            name={character.name}
            role={character.role}
            secondaryBadge={profile.secondaryBadge}
            photoInitials={profile.photoInitials}
            photoGradient={profile.photoGradient}
            totalChapters={profile.totalChapters}
            characterImportance={profile.characterImportance}
          />
        </div>

        <div className="mt-6">
          <CharacterTabs activeTab="Overview" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <CharacterDescriptionCard description={profile.description} aliases={profile.aliases} />
            <KeyTraitsCard traits={profile.keyTraits} />
          </div>

          <div className="flex flex-col gap-6">
            <NarrativePresenceCard stats={profile.narrativeStats} />
            <AssociatedArtifactsCard artifacts={profile.artifacts} />
            <KeyLocationsCard locations={profile.keyLocations} />
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}
