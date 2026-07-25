import Link from "next/link";
import { BookCover } from "./BookCover";
import type { LibraryBook } from "./data";

type LibraryBookCardProps = {
  book: LibraryBook;
};

export function LibraryBookCard({ book }: LibraryBookCardProps) {
  return (
    <Link
      href="/dashboard"
      className="group flex flex-col rounded-2xl border border-card-border bg-white p-4 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)] transition-shadow hover:shadow-[0px_8px_28px_-4px_rgba(244,114,182,0.18)]"
    >
      <BookCover book={book} />

      <h3 className="mt-3 font-heading text-xs font-bold leading-tight text-heading">
        {book.title}
      </h3>
      <p className="mt-0.5 text-xs text-muted">{book.author}</p>

      <div className="mt-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-wide text-brand">
            Analysis Progress
          </span>
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
