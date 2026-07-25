import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { ArrowRightIcon } from "../../icons";
import type { Character } from "../data";

type CharacterProfilePendingProps = {
  character: Character;
};

export function CharacterProfilePending({ character }: CharacterProfilePendingProps) {
  return (
    <div className="w-full">
      <Breadcrumb
        bookTitle="Harry Potter and the Philosopher's Stone"
        characterName={character.name}
      />

      <div className="mt-8 flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-card-border bg-white py-20 text-center">
        <p className="font-heading text-base font-bold text-heading">
          Analysis for {character.name} isn&apos;t ready yet
        </p>
        <p className="max-w-sm text-xs text-muted">
          This character&apos;s deep-dive profile hasn&apos;t been generated. Check back soon.
        </p>
        <Link
          href="/dashboard/characters"
          className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
        >
          Back to Characters
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
