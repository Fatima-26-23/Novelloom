export type TimelineEventTag = "INCITING INCIDENT" | "MAJOR EVENT" | "TRANSITION";

export type TimelineEvent = {
  id: string;
  title: string;
  tag: TimelineEventTag;
  description: string;
  characters?: string[];
  quote?: string;
  highlight?: {
    title: string;
    sentiment: string;
  };
};

export type TimelineChapter = {
  number: string;
  title: string;
  setting: string;
  events: TimelineEvent[];
  ellipsis?: string;
};

export const timelineChapters: TimelineChapter[] = [
  {
    number: "01",
    title: "Chapter One: The Boy Who Lived",
    setting: "Privet Drive, Surrey | Nighttime",
    events: [
      {
        id: "the-boy-who-lived",
        title: "The Boy Who Lived",
        tag: "INCITING INCIDENT",
        description:
          "Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
        characters: ["Vernon Dursley", "Albus Dumbledore", "Privet Drive"],
      },
      {
        id: "arrival-of-harry",
        title: "The Arrival of Harry",
        tag: "MAJOR EVENT",
        description:
          "Dumbledore leaves the infant Harry on the Dursleys' doorstep with a letter, following the tragic events at Godric's Hollow. This marks the beginning of the 'living legend' status for the protagonist.",
        quote: "Harry Potter — the boy who lived.",
      },
    ],
  },
  {
    number: "06",
    title: "Chapter Six: The Journey from Platform Nine and Three-Quarters",
    setting: "King's Cross Station | Late Morning",
    ellipsis: "10 YEARS ELLIPSIS",
    events: [
      {
        id: "journey-platform-nine",
        title: "The Journey from Platform Nine and Three-Quarters",
        tag: "TRANSITION",
        description:
          "Harry meets the Weasley family at King's Cross and successfully navigates through the solid barrier crossing. This represents his rite-of-passage crossing into the magical world.",
        characters: ["Ron Weasley", "Molly Weasley"],
        highlight: {
          title: "Meeting Ron Weasley",
          sentiment: "POSITIVE (FOUNDATIONAL)",
        },
      },
    ],
  },
];

export const timelineStats = {
  activeCharacters: 12,
  totalPlotPoints: 48,
  pacingDensity: "High" as const,
};

export const focusViews = [
  { label: "Main Plot Arc", active: true },
  { label: "Subplot A: The Stone", active: false },
  { label: "Character Dev: Hermione", active: false },
];
