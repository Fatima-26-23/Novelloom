export type RelationshipType = "friendship" | "mentor" | "antagonistic";

export type GraphNode = {
  id: string;
  name: string;
  initials: string;
  avatarGradient: string;
  x: number; // percentage position within canvas
  y: number; // percentage position within canvas
  size: "lg" | "md";
  badges: string[];
  influenceScore: number;
  summary: string;
  /** id of this character's full profile page, if one exists yet */
  profileId?: string;
};

export type GraphEdge = {
  from: string;
  to: string;
  type: RelationshipType;
  label?: string;
  curve?: number; // curvature offset for the connecting path
  /** pixel nudge applied to the label so it sits beside the line instead of on top of it */
  labelOffset?: { dx: number; dy: number };
};

export const graphNodes: GraphNode[] = [
  {
    id: "ron",
    name: "Ron",
    initials: "RW",
    avatarGradient: "linear-gradient(135deg, #ffcf9e 0%, #d97706 100%)",
    x: 30,
    y: 20,
    size: "md",
    badges: ["Supporting", "Gryffindor"],
    influenceScore: 68,
    profileId: "ron-weasley",
    summary:
      "Ron is Harry's closest friend and anchor into the wizarding world. His loyalty steadies the trio, and his family ties open the door to the Weasleys' warmth and humor.",
  },
  {
    id: "hermione",
    name: "Hermione",
    initials: "HG",
    avatarGradient: "linear-gradient(135deg, #c9b8f5 0%, #625595 100%)",
    x: 70,
    y: 20,
    size: "md",
    badges: ["Supporting", "Gryffindor"],
    influenceScore: 74,
    profileId: "hermione-granger",
    summary:
      "Hermione's knowledge and quick thinking repeatedly save the trio. Her friendship with Harry balances his instinct with reason, forming the emotional core of the group.",
  },
  {
    id: "harry",
    name: "Harry",
    initials: "HP",
    avatarGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)",
    x: 50,
    y: 52,
    size: "lg",
    badges: ["Protagonist", "Gryffindor"],
    influenceScore: 94,
    profileId: "harry-potter",
    summary:
      "Harry acts as the primary hub of the network. His connection with Dumbledore drives the narrative plot arc, while the Ron-Hermione triad provides emotional stability.",
  },
  {
    id: "dumbledore",
    name: "Dumbledore",
    initials: "AD",
    avatarGradient: "linear-gradient(135deg, #8b7fd6 0%, #4c3a7a 100%)",
    x: 50,
    y: 88,
    size: "md",
    badges: ["Mentor", "Headmaster"],
    influenceScore: 81,
    summary:
      "Dumbledore quietly guides Harry from a distance, offering protection and withholding key truths. His mentorship shapes almost every major turning point in the story.",
  },
];

export const graphEdges: GraphEdge[] = [
  { from: "ron", to: "hermione", type: "friendship", curve: -40 },
  { from: "ron", to: "harry", type: "friendship", label: "FRIEND", labelOffset: { dx: 10, dy: -2 } },
  { from: "hermione", to: "harry", type: "friendship", label: "FRIEND", labelOffset: { dx: -10, dy: -2 } },
  { from: "harry", to: "dumbledore", type: "mentor", label: "MENTOR", labelOffset: { dx: 12, dy: 0 } },
];

export const relationshipKey: { type: RelationshipType; label: string; colorClass: string }[] = [
  { type: "friendship", label: "Friendship", colorClass: "bg-[#8b7fd6]" },
  { type: "mentor", label: "Mentor/Family", colorClass: "bg-brand" },
  { type: "antagonistic", label: "Antagonistic", colorClass: "bg-[#dac0c9]" },
];