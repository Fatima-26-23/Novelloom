import { ThematicEvolutionIcon } from "../../icons";

type NarrativeAtmosphereCardProps = {
  from: string;
  to: string;
  note: string;
};

export function NarrativeAtmosphereCard({ from, to, note }: NarrativeAtmosphereCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center gap-2">
        <ThematicEvolutionIcon className="size-4 text-brand" />
        <p className="text-xs font-bold uppercase tracking-wide text-muted">
          Narrative Atmosphere
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <span className="flex size-11 items-center justify-center rounded-full bg-badge-purple">
            <span className="size-3 rounded-full bg-[#625595]" />
          </span>
          <span className="text-xs font-semibold text-body">{from}</span>
        </div>
        <div className="h-px w-10 bg-border" />
        <div className="flex flex-col items-center gap-2">
          <span className="flex size-11 items-center justify-center rounded-full bg-badge-pink">
            <span className="size-3 rounded-full bg-brand" />
          </span>
          <span className="text-xs font-semibold text-body">{to}</span>
        </div>
      </div>

      <p className="mt-5 flex-1 text-base leading-relaxed text-body">{note}</p>
    </div>
  );
}
