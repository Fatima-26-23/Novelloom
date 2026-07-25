import { notFound } from "next/navigation";
import { characters, characterProfiles } from "@/components/dashboard/characters/data";
import { CharacterDetailScreen } from "@/components/dashboard/characters/detail/CharacterDetailScreen";
import { CharacterProfilePending } from "@/components/dashboard/characters/detail/CharacterProfilePending";

type CharacterPageProps = {
  params: Promise<{ characterId: string }>;
};

export default async function CharacterDetailPage({ params }: CharacterPageProps) {
  const { characterId } = await params;

  const character = characters.find((c) => c.id === characterId);

  if (!character) {
    notFound();
  }

  const profile = characterProfiles[characterId];

  if (!profile) {
    return <CharacterProfilePending character={character} />;
  }

  return <CharacterDetailScreen character={character} profile={profile} />;
}
