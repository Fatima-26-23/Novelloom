import { HomeIcon, UsersSmallIcon, ClockIcon } from "../icons";
import { privetDrive } from "./data";

export function PrivetDriveCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-start justify-between">
        <div className="flex size-10 items-center justify-center rounded-full bg-tone-bg">
          <HomeIcon className="size-5 text-[#4c6ef5]" />
        </div>
        <span className="rounded-full bg-[#eef0f4] px-3 py-1 text-xs font-bold uppercase tracking-wide text-muted">
          {privetDrive.badge}
        </span>
      </div>

      <h3 className="mt-3 font-heading text-base font-bold text-heading">{privetDrive.name}</h3>
      <p className="text-xs text-muted">{privetDrive.address}</p>

      <p className="mt-3 flex-1 text-base leading-relaxed text-body">{privetDrive.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4 text-xs">
        <span className="flex items-center gap-1.5 text-muted">
          <UsersSmallIcon className="size-4 text-brand" />
          Characters Present
        </span>
        <span className="font-bold text-heading">{privetDrive.charactersPresent}</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-muted">
          <ClockIcon className="size-4 text-brand" />
          Total Page Time
        </span>
        <span className="font-bold text-heading">{privetDrive.totalPageTime}</span>
      </div>
    </div>
  );
}
