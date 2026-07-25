import Link from "next/link";
import { ChevronRightIcon } from "../icons";

export function LocationsBreadcrumb() {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted">
      <Link href="/dashboard" className="hover:text-brand">
        Project
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-brand">Locations</span>
    </nav>
  );
}
