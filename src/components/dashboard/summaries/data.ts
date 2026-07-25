export type ChapterSummary = {
  number: string;
  title: string;
  wordCount: string;
  sceneCount: string;
  preview: string;
  primarySetting?: string;
  toneShift?: string;
  keyTakeaways?: string[];
};

export const overview = {
  quote: "A journey through silence and memory.",
  updated: "Updated 2h ago",
  totalChapters: 12,
  totalWords: "42,000",
  peakChapter: 8,
  percentAnalyzed: 70,
};

export const chapterSummaries: ChapterSummary[] = [
  {
    number: "01",
    title: "The Threshold of Silence",
    wordCount: "3,450 words",
    sceneCount: "12 Scenes",
    preview:
      "The story opens with Elias returning to his ancestral home in Cornwall. He discovers a collection of letters hidden within the walls of the study, hinting at a family secret kept for generations. The atmosphere is heavy with nostalgia and a sense of impending discovery as Elias realizes he is not alone in the house.",
    primarySetting: "Blackwood Manor, Study",
    toneShift: "Melancholy → Suspense",
    keyTakeaways: [
      "Elias finds the 1924 ledger which serves as the primary inciting incident.",
      "Introduction of the 'Silver Key' motif through the attic dialogue.",
      "Atmospheric establishment of the \"living house\" theme.",
    ],
  },
  {
    number: "02",
    title: "Shadows in the Dust",
    wordCount: "2,800 words",
    sceneCount: "8 Scenes",
    preview: "Elias explores the dusty attic and encounters a figure from his past—his",
  },
  {
    number: "03",
    title: "The Unspoken Pact",
    wordCount: "4,100 words",
    sceneCount: "15 Scenes",
    preview: "A flashback sequence reveals the events of the summer of '98. The siblings",
  },
  {
    number: "04",
    title: "Echoes of Cornwall",
    wordCount: "3,950 words",
    sceneCount: "10 Scenes",
    preview: "Elias decides to stay and investigate the manor further, despite Clara's",
  },
];
