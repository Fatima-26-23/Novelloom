"use client";

import { useState } from "react";
import { graphNodes, graphEdges, type GraphNode } from "./data";
import { ZoomInIcon, ZoomOutIcon, FrameIcon, DownloadIcon } from "../icons";

type RelationshipGraphCanvasProps = {
  selectedId: string;
  onSelect: (id: string) => void;
};

const nodeSizeMap: Record<GraphNode["size"], number> = { lg: 88, md: 64 };

function edgeColor(type: string) {
  if (type === "mentor") return "#a43073";
  if (type === "antagonistic") return "#dac0c9";
  return "#a99bdc";
}

export function RelationshipGraphCanvas({ selectedId, onSelect }: RelationshipGraphCanvasProps) {
  const [zoom, setZoom] = useState(1);

  const findNode = (id: string) => graphNodes.find((n) => n.id === id)!;

  return (
    <div className="relative h-[850px] w-full overflow-hidden rounded-2xl border border-card-border bg-white">
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        {[
          { icon: ZoomInIcon, action: () => setZoom((z) => Math.min(z + 0.15, 1.6)), label: "Zoom in" },
          { icon: ZoomOutIcon, action: () => setZoom((z) => Math.max(z - 0.15, 0.7)), label: "Zoom out" },
          { icon: FrameIcon, action: () => setZoom(1), label: "Reset frame" },
          { icon: DownloadIcon, action: () => {}, label: "Download" },
        ].map(({ icon: Icon, action, label }) => (
          <button
            key={label}
            type="button"
            onClick={action}
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-xl bg-white text-body shadow-[0px_4px_14px_-2px_rgba(100,70,90,0.18)] transition-colors hover:text-brand"
          >
            <Icon className="size-4" />
          </button>
        ))}
      </div>

      <div
        className="relative h-full w-full origin-center transition-transform duration-200"
        style={{ transform: `scale(${zoom})` }}
      >
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {graphEdges.map((edge) => {
            const from = findNode(edge.from);
            const to = findNode(edge.to);
            const x1 = `${from.x}%`;
            const y1 = `${from.y}%`;
            const x2 = `${to.x}%`;
            const y2 = `${to.y}%`;
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            const isMentor = edge.type === "mentor";
            const curveOffset = edge.curve ?? 0;

            return (
              <g key={`${edge.from}-${edge.to}`}>
                {curveOffset ? (
                  <path
                    d={`M ${from.x}% ${from.y}% Q ${midX}% ${midY + curveOffset / 10}%, ${to.x}% ${to.y}%`}
                    fill="none"
                    stroke={edgeColor(edge.type)}
                    strokeWidth={1.5}
                    strokeDasharray={edge.type === "antagonistic" ? "5 5" : undefined}
                  />
                ) : (
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={edgeColor(edge.type)}
                    strokeWidth={isMentor ? 2.5 : 1.5}
                    strokeDasharray={edge.type === "antagonistic" ? "5 5" : undefined}
                  />
                )}
                {edge.label && (
                  <text
                    x={`${midX}%`}
                    y={`${midY}%`}
                    dx={edge.labelOffset?.dx ?? 0}
                    dy={edge.labelOffset?.dy ?? 0}
                    textAnchor={
                      !edge.labelOffset || edge.labelOffset.dx === 0
                        ? "middle"
                        : edge.labelOffset.dx > 0
                          ? "start"
                          : "end"
                    }
                    className="select-none"
                    fill={isMentor ? "#a43073" : "#625595"}
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="0.5"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {graphNodes.map((node) => {
          const isSelected = node.id === selectedId;
          const size = nodeSizeMap[node.size];
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelect(node.id)}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span
                className="flex items-center justify-center rounded-full font-heading font-bold text-white shadow-md transition-transform"
                style={{
                  width: size,
                  height: size,
                  backgroundImage: node.avatarGradient,
                  fontSize: node.size === "lg" ? 20 : 15,
                  outline: isSelected ? "3px solid #f472b6" : "3px solid transparent",
                  outlineOffset: 3,
                  transform: isSelected ? "scale(1.05)" : "scale(1)",
                }}
              >
                {node.initials}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  isSelected ? "bg-brand text-white" : "bg-white text-heading shadow-sm"
                }`}
              >
                {node.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}