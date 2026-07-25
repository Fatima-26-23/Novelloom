import { LockIcon, CloudIcon } from "../icons";

export function TrustBadgesRow() {
  return (
    <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted">
      <span className="flex items-center gap-1.5">
        <LockIcon className="size-3.5" />
        End-to-end encrypted
      </span>
      <span className="flex items-center gap-1.5">
        <CloudIcon className="size-3.5" />
        Cloud-synced library
      </span>
    </div>
  );
}
