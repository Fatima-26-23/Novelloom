import { TargetIcon } from "../../icons";
import type { KeyTrait } from "../data";

type KeyTraitsCardProps = {
  traits: KeyTrait[];
};

export function KeyTraitsCard({ traits }: KeyTraitsCardProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center gap-2">
        <TargetIcon className="size-4 text-brand" />
        <h2 className="font-heading text-base font-bold text-heading">Key Traits</h2>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {traits.map(({ title, description, accentColor }) => (
          <div
            key={title}
            className="rounded-r-lg border-l-[3px] py-1 pl-4"
            style={{ borderColor: accentColor }}
          >
            <p className="font-heading text-xs font-bold text-heading">{title}</p>
            <p className="mt-0.5 text-xs text-muted">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
