export type ChronologyEvent = {
  chapterLabel: string;
  stageLabel: string;
  title: string;
  description: string;
  dotStyle: "solid" | "outline" | "muted";
};

export type SubLocation = {
  id: string;
  name: string;
  narrativeWeight: number;
};

export type LocationDetail = {
  id: string;
  name: string;
  badges: string[];
  tagline: string;
  narrativeWeight: number;
  overviewTitle: string;
  overviewParagraphs: string[];
  atmosphereFrom: string;
  atmosphereTo: string;
  atmosphereNote: string;
  residentSummary: string;
  residentAvatarCount: number;
  residentExtra: number;
  totalChapters: number;
  totalChaptersTrend: string;
  primaryMood: string;
  characterDensity: string;
  chronology: ChronologyEvent[];
  subLocations: SubLocation[];
};

export const locationDetails: Record<string, LocationDetail> = {
  "hogwarts-castle": {
    id: "hogwarts-castle",
    name: "Hogwarts Castle",
    badges: ["Ancient", "Sentient"],
    tagline:
      "The ancestral seat of magical learning in Britain, serving as both a sanctuary and a focal point for tectonic narrative shifts.",
    narrativeWeight: 82,
    overviewTitle: "The Nexus of Fate",
    overviewParagraphs: [
      "Hogwarts is more than a backdrop; it is a semi-sentient participant in the story's progression. Its shifting staircases and hidden chambers mirror the protagonist's internal discovery.",
      "In the current arc, the castle acts as the primary conflict-aggregator, bringing disparate character threads together into a unified climax.",
      "Analysis shows that 68% of major character development beats occur within these walls, particularly in transit zones like the Great Hall and the corridors, which facilitate high-density social interactions.",
    ],
    atmosphereFrom: "Mystery",
    atmosphereTo: "Wonder",
    atmosphereNote:
      "The tone shifts from intellectual curiosity to cosmic awe as the protagonist explores the Room of Requirement.",
    residentSummary: "4 Key Residents, 10 Supporting Staff members currently present.",
    residentAvatarCount: 4,
    residentExtra: 16,
    totalChapters: 32,
    totalChaptersTrend: "+12% vs Mean",
    primaryMood: "Solemn",
    characterDensity: "High",
    chronology: [
      {
        chapterLabel: "CH. 1 — THE ARRIVAL",
        stageLabel: "First Introduction",
        title: "Sorting Ceremony",
        description:
          "The protagonist enters the Great Hall for the first time, establishing the primary social hierarchy and conflict source.",
        dotStyle: "solid",
      },
      {
        chapterLabel: "CH. 12 — MIDNIGHT DUEL",
        stageLabel: "Rising Action",
        title: "The Trophy Room Confrontation",
        description:
          "A planned duel becomes a narrow escape, introducing the Forbidden Corridor sub-location as a narrative beat.",
        dotStyle: "outline",
      },
      {
        chapterLabel: "CH. 36 — FINAL STAND",
        stageLabel: "Climax",
        title: "The Great Hall Siege",
        description:
          "The setting undergoes significant destruction, symbolizing the end of the current narrative safety.",
        dotStyle: "muted",
      },
    ],
    subLocations: [
      { id: "great-hall", name: "Great Hall", narrativeWeight: 88 },
      { id: "gryffindor-common-room", name: "Gryffindor Common Room", narrativeWeight: 71 },
      { id: "dungeons-and-potions", name: "Dungeons & Potions", narrativeWeight: 52 },
    ],
  },
};
