import { SortIcon } from "../../icons";
import type { ChronologyEvent } from "./data";

type ChronologyOfEventsCardProps = {
  events: ChronologyEvent[];
};

const dotStyles: Record<ChronologyEvent["dotStyle"], string> = {
  solid: "bg-brand border-brand",
  outline: "border-brand bg-white",
  muted: "border-border bg-border",
};

export function ChronologyOfEventsCard({ events }: ChronologyOfEventsCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-base font-bold text-heading">Chronology of Events</h2>
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
        >
          <SortIcon className="size-3.5" />
          Filter by Arc
        </button>
      </div>

      <div className="mt-5 flex flex-col">
        {events.map((event, index) => (
          <div key={event.title} className="relative flex gap-4 pb-6 last:pb-0">
            {index !== events.length - 1 && (
              <span className="absolute left-[5px] top-3 h-full w-px bg-border/60" />
            )}
            <span
              className={`relative z-10 mt-1.5 size-3 shrink-0 rounded-full border-2 ${dotStyles[event.dotStyle]}`}
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">
                  {event.chapterLabel}
                </span>
                <span className="text-xs text-muted">{event.stageLabel}</span>
              </div>
              <h3 className="mt-1 font-heading text-xs font-bold text-heading">
                {event.title}
              </h3>
              <p className="mt-1 text-base leading-relaxed text-body">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
