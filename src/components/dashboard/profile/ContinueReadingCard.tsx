import { ShareIcon } from "../icons";

type ContinueReadingCardProps = {
  title: string;
  author: string;
  progressPercent: number;
  coverGradient: string;
};

export function ContinueReadingCard({
  title,
  author,
  progressPercent,
  coverGradient,
}: ContinueReadingCardProps) {
  return (
    <div className="h-full rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <h3 className="text-xs font-semibold text-heading">Continue Reading</h3>

      <div className="mt-4 flex gap-4">
        <div
          className="h-[110px] w-[78px] shrink-0 rounded-lg shadow-md"
          style={{ backgroundImage: coverGradient }}
        />

        <div className="flex flex-1 flex-col">
          <p className="font-heading text-base font-bold text-heading">{title}</p>
          <p className="text-xs text-muted">{author}</p>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-wide text-muted">Progress</span>
              <span className="font-semibold text-brand">{progressPercent}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-badge-pink">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dark"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-heading px-5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              Continue
            </button>
            <button
              type="button"
              aria-label="Share"
              className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-badge-pink/40 hover:text-brand"
            >
              <ShareIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
