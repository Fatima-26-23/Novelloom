type LocationOverviewCardProps = {
  title: string;
  paragraphs: string[];
};

export function LocationOverviewCard({ title, paragraphs }: LocationOverviewCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <h2 className="font-heading text-base font-bold text-heading">{title}</h2>
      <div className="mt-3 flex flex-col gap-3">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-body">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
