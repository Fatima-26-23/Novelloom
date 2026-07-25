import Link from "next/link";
import { ChevronRightIcon } from "../../icons";

type BreadcrumbProps = {
  bookTitle: string;
  characterName: string;
};

export function Breadcrumb({ bookTitle, characterName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-muted">
      <Link href="/library" className="hover:text-brand">
        Library
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <Link href="/dashboard/characters" className="hover:text-brand">
        {bookTitle}
      </Link>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-brand">{characterName}</span>
    </nav>
  );
}
