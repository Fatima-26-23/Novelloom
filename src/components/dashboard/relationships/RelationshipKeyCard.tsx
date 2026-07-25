import { relationshipKey } from "./data";

export function RelationshipKeyCard() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.1)]">
      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand">
        Relationship Key
      </p>

      <ul className="mt-3 flex flex-col gap-2.5">
        {relationshipKey.map(({ type, label, colorClass }) => (
          <li key={type} className="flex items-center gap-2.5 text-xs font-medium text-body">
            <span className={`h-[3px] w-6 shrink-0 rounded-full ${colorClass}`} />
            {label}
          </li>
        ))}
      </ul>

      <p className="mt-4 border-t border-border/30 pt-3 text-xs italic text-muted">
        AI inferred 42 connections from the uploaded manuscript.
      </p>
    </div>
  );
}
