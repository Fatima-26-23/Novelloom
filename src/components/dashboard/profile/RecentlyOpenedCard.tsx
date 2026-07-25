import type { RecentlyOpenedItem } from "./data";

type RecentlyOpenedCardProps = {
  items: RecentlyOpenedItem[];
};

export function RecentlyOpenedCard({ items }: RecentlyOpenedCardProps) {
  return (
    <div className="h-full rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <h3 className="text-xs font-semibold text-heading">Recently Opened</h3>

      <div className="mt-4 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div
              className="h-11 w-8 shrink-0 rounded-md shadow-sm"
              style={{ backgroundImage: item.coverGradient }}
            />
            <div>
              <p className="text-xs font-semibold text-heading">{item.title}</p>
              <p className="text-xs text-muted">{item.openedAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
