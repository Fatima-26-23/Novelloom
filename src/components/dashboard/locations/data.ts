export type LocationCharacter = {
  initials: string;
  avatarGradient: string;
};

export const prominentCharacters: LocationCharacter[] = [
  { initials: "HP", avatarGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)" },
  { initials: "RH", avatarGradient: "linear-gradient(135deg, #ffcf86 0%, #d6862f 100%)" },
  { initials: "RH2", avatarGradient: "linear-gradient(135deg, #a9c6f5 0%, #4c6fbf 100%)" },
];

export const keyHub = {
  badge: "KEY HUB",
  name: "Diagon Alley",
  chapters: "1, 4, 5, 23",
  charactersEncountered: 14,
  plotDensity: 8.4,
  description:
    "The primary economic and social artery for the wizarding world. Features a high concentration of plot-critical items and mentor-figure interactions.",
};

export const hogwartsCastle = {
  locationId: "hogwarts-castle",
  name: "Hogwarts Castle",
  badges: ["Primary Setting", "High Magic"],
  upcomingEventLabel: "Upcoming Event",
  upcomingEvent: "The Sorting Ceremony (Chapter 7)",
  narrativeWeight: 92,
  subLocationsCount: 24,
};

export const privetDrive = {
  name: "Privet Drive",
  address: "Little Whinging, Surrey",
  badge: "MUNDANE",
  description: "A symbol of restriction and normalcy. Contrast point for the protagonist's growth.",
  charactersPresent: 5,
  totalPageTime: "42m",
};

export const locationStats = {
  totalUniqueSettings: 31,
  crossRegionalTravel: 12,
};
