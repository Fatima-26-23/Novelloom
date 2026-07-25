import Link from "next/link";
import { ChevronRightIcon } from "../../icons";

type LocationDetailBreadcrumbProps = {
  locationName: string;
};

export function LocationDetailBreadcrumb({ locationName }: LocationDetailBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted">
      <Link href="/dashboard" className="hover:text-brand">
        Project
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <Link href="/dashboard/locations" className="hover:text-brand">
        Locations
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-brand">{locationName}</span>
    </nav>
  );
}
