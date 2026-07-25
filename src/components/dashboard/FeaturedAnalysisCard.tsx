import { ArrowRightIcon } from "./icons";

type FeaturedAnalysisCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  linkLabel: string;
  onNavigate?: () => void;
};

export function FeaturedAnalysisCard({
  icon: Icon,
  title,
  description,
  linkLabel,
}: FeaturedAnalysisCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-badge-purple/40 p-6">
      <div className="flex size-10 items-center justify-center rounded-xl bg-white/70">
        <Icon className="size-5 text-[#625595]" />
      </div>

      <div className="mt-4">
        <h3 className="font-heading text-base font-bold text-brand">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-body">{description}</p>
      </div>

      <button
        type="button"
        className="mt-4 flex items-center gap-1.5 self-start text-xs font-semibold text-brand hover:underline"
      >
        {linkLabel}
        <ArrowRightIcon className="size-4" />
      </button>
    </div>
  );
}
