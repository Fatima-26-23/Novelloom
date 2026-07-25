import { FileTextIcon } from "../../icons";

type CharacterDescriptionCardProps = {
  description: string;
  aliases: string[];
};

export function CharacterDescriptionCard({ description, aliases }: CharacterDescriptionCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-2 font-heading text-6xl font-bold text-badge-pink"
      >
        &rdquo;
      </span>

      <div className="flex items-center gap-2">
        <FileTextIcon className="size-4 text-brand" />
        <h2 className="font-heading text-base font-bold text-heading">Character Description</h2>
      </div>

      <p className="relative mt-3 max-w-xl text-base leading-relaxed text-body">{description}</p>

      <div className="mt-5 border-t border-border/30 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Aliases</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {aliases.map((alias) => (
            <span
              key={alias}
              className="rounded-full bg-badge-purple px-3 py-1 text-xs font-semibold text-[#625595]"
            >
              {alias}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
