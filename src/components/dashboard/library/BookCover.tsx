import { BoltIcon, QuillIcon, RingIcon, PortraitIcon } from "../icons";
import type { LibraryBook } from "./data";

const coverIcons = {
  bolt: BoltIcon,
  quill: QuillIcon,
  ring: RingIcon,
  portrait: PortraitIcon,
};

type BookCoverProps = {
  book: LibraryBook;
};

export function BookCover({ book }: BookCoverProps) {
  const Icon = coverIcons[book.coverIcon];

  return (
    <div
      className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-xl shadow-md"
      style={{ backgroundImage: book.coverGradient }}
    >
      <Icon className="size-12 text-white/70" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
        <p className="font-heading text-xs font-bold uppercase tracking-wide text-white/90">
          {book.title}
        </p>
      </div>
    </div>
  );
}
