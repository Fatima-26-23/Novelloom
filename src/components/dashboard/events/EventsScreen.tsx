import { DashboardFooter } from "../DashboardFooter";
import { PlusIcon } from "../icons";
import { EventCard } from "./EventCard";
import { importantEvents, analysisStatus } from "./data";

export function EventsScreen() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="font-heading text-base font-bold leading-tight text-heading">
              Important Events
            </h1>
            <p className="mt-1 text-base text-body">
              A comprehensive map of the pivotal moments within{" "}
              <span className="font-semibold text-brand">
                Harry Potter and the Sorcerer&apos;s Stone
              </span>
              , tracked by their narrative impact and character evolution.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              type="button"
              aria-label="Add event"
              className="flex size-11 items-center justify-center rounded-full bg-brand text-white shadow-md transition-opacity hover:opacity-90"
            >
              <PlusIcon className="size-4" />
            </button>
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>Analysis Status</span>
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#f3e6ee]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-[#625595]"
                  style={{ width: `${analysisStatus}%` }}
                />
              </div>
              <span className="font-semibold text-brand">{analysisStatus}%</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {importantEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}