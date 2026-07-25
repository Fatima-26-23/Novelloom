import Link from "next/link";
import { ChevronRightIcon } from "../icons";

export function SummariesBreadcrumb() {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted">
      <Link href="/library" className="hover:text-brand">
        Library
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <Link href="/dashboard/summaries" className="hover:text-brand">
        The Midnight Echo
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-brand">Summaries</span>
    </nav>
  );
}
