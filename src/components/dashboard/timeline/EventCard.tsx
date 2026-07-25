import type { TimelineEvent } from "./data";
import { BoltIcon, QuoteIcon, CharactersIcon, WandIcon } from "../icons";

const tagStyles: Record<TimelineEvent["tag"], string> = {
  "INCITING INCIDENT": "bg-badge-pink text-brand-dark",
  "MAJOR EVENT": "bg-badge-purple text-[#625595]",
  TRANSITION: "bg-tone-bg text-[#4c6fbf]",
};

const iconBg: Record<TimelineEvent["tag"], string> = {
  "INCITING INCIDENT": "bg-brand",
  "MAJOR EVENT": "bg-[#8b7fd6]",
  TRANSITION: "bg-[#4c6fbf]",
};

type EventCardProps = {
  event: TimelineEvent;
};

export function EventCard({ event }: EventCardProps) {
  const { title, tag, description, characters, quote, highlight } = event;

  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-white ${iconBg[tag]}`}
          >
            <BoltIcon className="size-3.5" />
          </span>
          <h4 className="font-heading text-base font-bold leading-snug text-heading">{title}</h4>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${tagStyles[tag]}`}
        >
          {tag}
        </span>
      </div>

      <p className="mt-3 text-base leading-relaxed text-body">{description}</p>

      {characters && characters.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {characters.map((name) => (
            <span
              key={name}
              className="flex items-center gap-1 rounded-full bg-[#faf5f8] px-2.5 py-1 text-base font-medium text-muted"
            >
              <CharactersIcon className="size-3" />
              {name}
            </span>
          ))}
        </div>
      )}

      {quote && (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-badge-pink/30 p-3.5">
          <QuoteIcon className="mt-0.5 size-4 shrink-0 text-brand" />
          <p className="text-base italic leading-relaxed text-brand-dark">&ldquo;{quote}&rdquo;</p>
        </div>
      )}

      {highlight && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-card-border p-3">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffd8e7] to-[#e7deff]">
            <WandIcon className="size-6 text-brand" />
          </div>
          <div>
            <p className="text-base font-bold text-brand">{highlight.title}</p>
            <p className="mt-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-muted">
              AI Sentiment: {highlight.sentiment}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}