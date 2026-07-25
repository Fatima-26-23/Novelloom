import Image from "next/image";
import { AiSparkleIcon, EditIcon } from "./icons";

type BookOverviewCardProps = {
  coverImage: string;
  genre: string;
  publishedYear: string;
  title: string;
  author: string;
  currentChapter: number;
  totalChapters: number;
  totalWordCount: string;
  readingTime: string;
  complexityLabel: string;
  complexityScore: string;
};

export function BookOverviewCard({
  coverImage,
  genre,
  publishedYear,
  title,
  author,
  currentChapter,
  totalChapters,
  totalWordCount,
  readingTime,
  complexityLabel,
  complexityScore,
}: BookOverviewCardProps) {
  const progressPercent = Math.round((currentChapter / totalChapters) * 100);

  return (
    <div className="relative rounded-[24px] border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)] lg:p-8">
      <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-badge-purple px-3 py-1.5 text-xs font-semibold text-brand lg:right-8 lg:top-8">
        <AiSparkleIcon className="size-3.5" />
        AI Engine Active
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative h-[168px] w-[120px] shrink-0 overflow-hidden rounded-xl shadow-md">
          <Image src="/images/harry.png" alt={`${title} cover`} fill className="object-cover" sizes="120px" />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-badge-pink px-3 py-1 text-xs font-semibold text-brand">
              {genre}
            </span>
            <span className="text-xs text-muted">Published {publishedYear}</span>
          </div>

          <h2 className="mt-3 font-heading text-base font-bold leading-tight text-heading lg:text-[26px]">
            {title}
          </h2>
          <p className="mt-1 text-base text-body">by {author}</p>

          <div className="mt-4 flex items-center gap-2 text-xs text-body">
            <span>Currently on Chapter {currentChapter}</span>
            <button type="button" aria-label="Edit current chapter" className="text-muted hover:text-brand">
              <EditIcon className="size-3.5" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-body">Analysis Progress</span>
            <span className="font-semibold text-brand">
              {currentChapter} / {totalChapters} Chapters
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-badge-pink">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dark"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border/30 pt-5">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Total Wordcount</p>
              <p className="mt-1 font-heading text-base font-bold text-heading">{totalWordCount}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Reading Time</p>
              <p className="mt-1 font-heading text-base font-bold text-heading">{readingTime}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">{complexityLabel}</p>
              <p className="mt-1 font-heading text-base font-bold text-brand">{complexityScore}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
