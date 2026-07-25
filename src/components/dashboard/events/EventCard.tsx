import { LocationsIcon, DotsIcon } from "../icons";
import type { ImportantEvent } from "./data";

type EventCardProps = {
  event: ImportantEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-card-border bg-white shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-start justify-between px-5 pt-5">
        <span className="rounded-full bg-badge-pink px-3 py-1 text-xs font-bold text-brand-dark">
          {event.chapter}
        </span>
        <button
          type="button"
          aria-label="More options"
          className="text-muted transition-colors hover:text-brand"
        >
          <DotsIcon className="size-4" />
        </button>
      </div>

      <div className="px-5 pt-3">
        <h3 className="font-heading text-base font-bold leading-tight text-heading">
          {event.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-body">{event.description}</p>
      </div>

      {event.hasImage && (
        <div className="mx-5 mt-3 h-32 overflow-hidden rounded-xl bg-[linear-gradient(180deg,#1a2035_0%,#2c3552_55%,#4a5578_100%)]">
          <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="h-full w-full opacity-90">
            <rect x="20" y="55" width="40" height="55" fill="#12172a" />
            <polygon points="20,55 40,38 60,55" fill="#0c0f1d" />
            <rect x="80" y="40" width="45" height="70" fill="#171d34" />
            <polygon points="80,40 102,22 125,40" fill="#0c0f1d" />
            <rect x="150" y="60" width="55" height="50" fill="#12172a" />
            <rect x="220" y="45" width="42" height="65" fill="#171d34" />
            <polygon points="220,45 241,28 262,45" fill="#0c0f1d" />
            <circle cx="102" cy="30" r="2.5" fill="#ffd9a0" />
            <circle cx="241" cy="35" r="2.5" fill="#ffd9a0" />
          </svg>
        </div>
      )}

      <div className="mt-4 flex items-center gap-1.5 px-5 text-xs text-muted">
        <LocationsIcon className="size-4 text-brand" />
        {event.location}
      </div>

      <div className="mt-4 flex-1" />

      <div className="border-t border-border/40 px-5 py-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
          Key Characters Involved
        </p>
        <div className="flex -space-x-2">
          {event.characters.map((character, index) => (
            <div
              key={index}
              className="flex size-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
              style={{ backgroundImage: character.avatarGradient }}
            >
              {character.initials.slice(0, 2)}
            </div>
          ))}
          {event.extraCharacters && (
            <div className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-badge-purple text-xs font-bold text-[#625595] shadow-sm">
              +{event.extraCharacters}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}