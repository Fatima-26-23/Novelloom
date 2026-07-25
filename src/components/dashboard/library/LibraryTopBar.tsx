import Link from "next/link";
import { SearchIcon, UploadIcon } from "../icons";

export function LibraryTopBar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search your novels, characters, or analysis..."
          className="w-full rounded-full border border-border/30 bg-white py-2.5 pl-10 pr-4 text-xs text-heading placeholder:text-muted focus:border-brand focus:outline-none"
        />
      </div>

      <Link
        href="/upload"
        className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90"
      >
        <UploadIcon className="size-4" />
        Upload Novel
      </Link>
    </div>
  );
}
