"use client";

import { useState } from "react";
import type { FamilyMember } from "./data";
import { ChevronDownIcon, AiSparkleIcon } from "../icons";

type FamilyTreeNodeCardProps = {
  member: FamilyMember;
};

export function FamilyTreeNodeCard({ member }: FamilyTreeNodeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { name, epithet, initials, avatarGradient, badges, description, highlighted } = member;

  return (
    <div
      className={`w-56 rounded-2xl bg-white p-5 text-center shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.12)] transition-shadow ${
        highlighted ? "border-2 border-brand" : "border border-card-border"
      }`}
    >
      <div className="relative mx-auto w-fit">
        <div
          className="flex size-16 items-center justify-center rounded-full font-heading text-base font-bold text-white shadow-md"
          style={{ backgroundImage: avatarGradient }}
        >
          {initials}
        </div>
        <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-white text-brand shadow-md">
          <AiSparkleIcon className="size-3" />
        </span>
      </div>

      <h3 className="mt-3 font-heading text-xs font-bold leading-tight text-heading">{name}</h3>
      <p className="mt-0.5 text-xs font-semibold text-brand">{epithet}</p>

      {badges && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {badges.map((badge, index) => (
            <span
              key={badge}
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                index === 0 ? "bg-badge-purple text-[#625595]" : "bg-badge-pink text-brand-dark"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {description && (
        <>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mx-auto mt-3 flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-brand"
          >
            Details
            <ChevronDownIcon
              className={`size-3 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
          {expanded && (
            <p className="mt-2 text-left text-xs leading-relaxed text-body">{description}</p>
          )}
        </>
      )}
    </div>
  );
}
