import { FileTextIcon, ThematicEvolutionIcon, UsersSmallIcon, DotsIcon } from "../../icons";

type LocationDetailStatsCardProps = {
  totalChapters: number;
  totalChaptersTrend: string;
  primaryMood: string;
  characterDensity: string;
};

export function LocationDetailStatsCard({
  totalChapters,
  totalChaptersTrend,
  primaryMood,
  characterDensity,
}: LocationDetailStatsCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">Location Stats</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-body">
          <FileTextIcon className="size-4 text-brand" />
          Total Chapters
        </span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-heading">{totalChapters}</span>
          <span className="rounded-full bg-badge-pink px-2 py-0.5 text-[10px] font-bold text-brand-dark">
            {totalChaptersTrend}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-body">
          <ThematicEvolutionIcon className="size-4 text-brand" />
          Primary Mood
        </span>
        <span className="font-bold text-heading">{primaryMood}</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-body">
          <UsersSmallIcon className="size-4 text-brand" />
          Character Density
        </span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-heading">{characterDensity}</span>
          <button type="button" aria-label="More stats" className="text-muted hover:text-brand">
            <DotsIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
