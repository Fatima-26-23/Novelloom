import type { TimelineChapter } from "./data";
import { EventCard } from "./EventCard";

type ChapterBlockProps = {
  chapter: TimelineChapter;
  isLast: boolean;
};

export function ChapterBlock({ chapter, isLast }: ChapterBlockProps) {
  return (
    <div className="relative pl-16">
      {!isLast && (
        <span className="absolute left-[19px] top-11 h-full w-px bg-border/50" aria-hidden />
      )}

      <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border-2 border-brand bg-white font-heading text-xs font-bold text-brand">
        {chapter.number}
      </span>

      <div className="pb-2">
        <h3 className="font-heading text-base font-bold leading-tight text-heading">
          {chapter.title}
        </h3>
        <p className="mt-1 text-base text-muted">{chapter.setting}</p>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {chapter.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {chapter.ellipsis && (
        <div className="my-8 flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-muted">
          <span className="h-px flex-1 border-t border-dashed border-border" />
          {chapter.ellipsis}
          <span className="h-px flex-1 border-t border-dashed border-border" />
        </div>
      )}
    </div>
  );
}