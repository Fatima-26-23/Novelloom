"use client";

import { useState } from "react";
import { DashboardFooter } from "../DashboardFooter";
import { RelationshipGraphCanvas } from "./RelationshipGraphCanvas";
import { RelationshipKeyCard } from "./RelationshipKeyCard";
import { CharacterInsightPanel } from "./CharacterInsightPanel";
import { graphNodes } from "./data";

export function RelationshipsScreen() {
  const [selectedId, setSelectedId] = useState("harry");
  const selectedNode = graphNodes.find((node) => node.id === selectedId) ?? graphNodes[2];

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand">Character Nexus</p>
            <h1 className="mt-1 font-heading text-[23px] font-bold leading-tight text-heading">
              Relationship Graph
            </h1>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-badge-pink/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-dark">
            <span className="size-1.5 animate-pulse rounded-full bg-brand" />
            Analyzing Potter Saga v1.0
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_300px]">
          <div className="relative">
            <RelationshipGraphCanvas selectedId={selectedId} onSelect={setSelectedId} />
            <div className="absolute bottom-4 left-4 hidden w-64 lg:block">
              <RelationshipKeyCard />
            </div>
          </div>

          <div className="mt-16">
            <CharacterInsightPanel node={selectedNode} />
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <RelationshipKeyCard />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}