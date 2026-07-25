import Link from "next/link";
import { BookCover } from "./BookCover";
import type { LibraryBook } from "./data";

type LibraryBookListRowProps = {
  book: LibraryBook;
};

export function LibraryBookListRow({ book }: LibraryBookListRowProps) {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-4 rounded-2xl border border-card-border bg-white p-3 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)] transition-shadow hover:shadow-[0px_8px_28px_-4px_rgba(244,114,182,0.18)]"
    >
      <div className="w-14 shrink-0">
        <BookCover book={book} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-heading text-xs font-bold leading-tight text-heading">
          {book.title}
        </h3>
        <p className="mt-0.5 text-xs text-muted">{book.author}</p>
      </div>

      <div className="w-40 shrink-0">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wide text-brand">Progress</span>
          <span className="font-semibold text-heading">{book.progressPercent}%</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-badge-pink">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dark"
            style={{ width: `${book.progressPercent}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
