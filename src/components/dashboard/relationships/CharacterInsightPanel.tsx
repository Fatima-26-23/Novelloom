import Link from "next/link";
import type { GraphNode } from "./data";
import { ArrowRightIcon } from "../icons";

type CharacterInsightPanelProps = {
  node: GraphNode;
};

export function CharacterInsightPanel({ node }: CharacterInsightPanelProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.1)]">
      <div
        className="flex size-16 items-center justify-center rounded-full font-heading text-base font-bold text-white shadow-md"
        style={{ backgroundImage: node.avatarGradient }}
      >
        {node.initials}
      </div>

      <h3 className="mt-4 font-heading text-base font-bold text-heading">{node.name}</h3>

      <div className="mt-2.5 flex flex-wrap gap-2">
        {node.badges.map((badge, index) => (
          <span
            key={badge}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              index === 0 ? "bg-badge-pink text-brand-dark" : "bg-badge-purple text-[#625595]"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-body">Influence Score</span>
          <span className="font-bold text-brand">{node.influenceScore}/100</span>
        </div>
        <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-[#f3e6ee]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-[#625595]"
            style={{ width: `${node.influenceScore}%` }}
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">Dynamic Summary</p>
        <p className="mt-2.5 text-base leading-relaxed text-body">{node.summary}</p>
      </div>

      {node.profileId ? (
        <Link
          href={`/dashboard/characters/${node.profileId}`}
          className="mt-10 flex w-full items-center justify-center gap-2 rounded-full border border-brand px-4 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Full Profile Analysis
          <ArrowRightIcon className="size-4" />
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="mt-10 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-muted"
        >
          Full Profile Analysis
          <ArrowRightIcon className="size-4" />
        </button>
      )}
    </div>
  );
}