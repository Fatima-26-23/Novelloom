import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: "/images/landing/feature-char.svg",
    iconBg: "#ffd8e7",
    title: "Character Mapping",
    description:
      "Track character evolution through the text. Identify key traits, motivations, and growth trajectories automatically extracted from the narrative.",
    preview: "/images/landing/feature-char-preview.png",
  },
  {
    icon: "/images/landing/feature-graph.svg",
    iconBg: "#e7deff",
    title: "Relationship Graphs",
    description:
      "Visualize the dynamic social web of your novel. Uncover hidden alliances, rivalries, and romantic arcs that weave the story together.",
    preview: "/images/landing/feature-graph-preview.png",
  },
  {
    icon: "/images/landing/feature-timeline.svg",
    iconBg: "#ffd8ed",
    title: "Automatic Timelines",
    description:
      "Stop getting lost in non-linear plots. Our AI builds chronological timelines to help you navigate flashbacks and complex pacing.",
    preview: "/images/landing/feature-timeline-preview.png",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 pb-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 lg:px-10">
        <div className="flex max-w-[672px] flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[1.2px] text-brand">
            Unleash the insight
          </p>
          <h2 className="font-heading text-2xl font-semibold tracking-[-0.24px] text-heading">
            Powerful tools for deep analysis
          </h2>
          <p className="text-base leading-6 text-body">
            From simple chapter summaries to complex narrative arcs, Novelloom
            provides the microscopic detail every literary mind craves.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
