type AnalysisCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  dotColors?: string[];
  titleColor?: string;
  cardBg?: string;
};

export function AnalysisCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  dotColors,
  titleColor = "text-heading",
  cardBg,
}: AnalysisCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl p-6 ${
        cardBg
          ? ""
          : "border border-card-border bg-white shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]"
      }`}
      style={cardBg ? { backgroundColor: cardBg } : undefined}
    >
      <div
        className="flex size-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className={`size-5 ${iconColor}`} />
      </div>

      <h3 className={`mt-4 font-heading text-base font-bold ${titleColor}`}>{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-body">{description}</p>

      {dotColors && dotColors.length > 0 && (
        <div className="mt-4 flex gap-1.5">
          {dotColors.map((color, index) => (
            <span
              key={index}
              className="size-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
