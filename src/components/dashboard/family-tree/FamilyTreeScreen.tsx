"use client";

import { useState } from "react";
import { DashboardFooter } from "../DashboardFooter";
import { FamilyTreeNodeCard } from "./FamilyTreeNodeCard";
import { parents, child } from "./data";
import { AiSparkleIcon, ZoomInIcon, ZoomOutIcon, PencilFabIcon } from "../icons";

export function FamilyTreeScreen() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-[23px] font-bold leading-tight text-heading">
            Potter Dynasty
          </h1>
          <span className="flex items-center gap-1.5 rounded-full badge-gradient px-3 py-1 text-xs font-bold text-brand-dark">
            <AiSparkleIcon className="size-3" />
            AI Visualized
          </span>
        </div>
        <p className="-mt-4 mb-6 text-xs text-body">Tracing 4 generations of magical lineage</p>

        <div className="relative h-[850px] w-full overflow-hidden rounded-2xl border border-card-border bg-[#fdf1f6]">
          <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end gap-3">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-opacity hover:opacity-90"
              aria-label="Edit tree"
            >
              <PencilFabIcon className="size-4" />
            </button>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(z + 0.15, 1.6))}
                aria-label="Zoom in"
                className="flex size-9 items-center justify-center rounded-full bg-white text-body shadow-md transition-colors hover:text-brand"
              >
                <ZoomInIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(z - 0.15, 0.7))}
                aria-label="Zoom out"
                className="flex size-9 items-center justify-center rounded-full bg-white text-body shadow-md transition-colors hover:text-brand"
              >
                <ZoomOutIcon className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <div
              className="relative h-[420px] w-full max-w-[900px] origin-center transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            >
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <line x1="30%" y1="10%" x2="70%" y2="10%" stroke="#dac0c9" strokeWidth={1.5} />
                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#dac0c9" strokeWidth={1.5} />
              </svg>

              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: "30%", top: "10%" }}
              >
                <FamilyTreeNodeCard member={parents[0]} />
              </div>
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: "70%", top: "10%" }}
              >
                <FamilyTreeNodeCard member={parents[1]} />
              </div>
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: "50%", top: "90%" }}
              >
                <FamilyTreeNodeCard member={child} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}
