import Link from "next/link";
import type { Character } from "./data";
import { roleBadgeStyles } from "./data";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps) {
  const { name, role, initials, avatarGradient, meta } = character;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex flex-col items-center text-center">
        <div
          className="flex size-16 items-center justify-center rounded-full text-base font-bold text-white shadow-md"
          style={{ backgroundImage: avatarGradient }}
        >
          {initials}
        </div>

        <h3 className="mt-3 font-heading text-base font-bold leading-tight text-heading">
          {name}
        </h3>

        <span
          className={`mt-2 rounded-full px-3 py-1 text-xs font-semibold ${roleBadgeStyles[role]}`}
        >
          {role}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-1.5 text-xs">
        {meta.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-2">
            <span className="text-muted">{label}</span>
            <span className="font-semibold text-[#625595]">{value}</span>
          </div>
        ))}
      </div>

      <Link
        href={`/dashboard/characters/${character.id}`}
        className="mt-4 block w-full rounded-full border border-brand px-4 py-2 text-center text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        View Analysis
      </Link>
    </div>
  );
}
