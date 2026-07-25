export type CharacterRole = "Protagonist" | "Antagonist" | "Supporting";

export type CharacterMeta = {
  label: string;
  value: string;
};

export type Character = {
  id: string;
  name: string;
  role: CharacterRole;
  initials: string;
  avatarGradient: string;
  meta: CharacterMeta[];
};

export const characters: Character[] = [
  {
    id: "harry-potter",
    name: "Harry Potter",
    role: "Protagonist",
    initials: "HP",
    avatarGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 1" },
      { label: "Story Arc", value: "Hero's Journey" },
    ],
  },
  {
    id: "hermione-granger",
    name: "Hermione Granger",
    role: "Supporting",
    initials: "HG",
    avatarGradient: "linear-gradient(135deg, #c9b8f5 0%, #625595 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 6" },
      { label: "Core Trait", value: "Erudite" },
    ],
  },
  {
    id: "ron-weasley",
    name: "Ron Weasley",
    role: "Supporting",
    initials: "RW",
    avatarGradient: "linear-gradient(135deg, #ffcf9e 0%, #d97706 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 6" },
      { label: "Core Trait", value: "Loyalty" },
    ],
  },
  {
    id: "severus-snape",
    name: "Severus Snape",
    role: "Antagonist",
    initials: "SS",
    avatarGradient: "linear-gradient(135deg, #4b5563 0%, #111827 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 7" },
      { label: "Archetype", value: "The Shadow" },
    ],
  },
  {
    id: "albus-dumbledore",
    name: "Albus Dumbledore",
    role: "Supporting",
    initials: "AD",
    avatarGradient: "linear-gradient(135deg, #b8c6f5 0%, #4c5f95 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 1" },
      { label: "Role", value: "Mentor" },
    ],
  },
  {
    id: "draco-malfoy",
    name: "Draco Malfoy",
    role: "Antagonist",
    initials: "DM",
    avatarGradient: "linear-gradient(135deg, #d9d9e8 0%, #6b7280 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 5" },
      { label: "Status", value: "Pure-blood" },
    ],
  },
  {
    id: "molly-weasley",
    name: "Molly Weasley",
    role: "Supporting",
    initials: "MW",
    avatarGradient: "linear-gradient(135deg, #f7b8a6 0%, #b45309 100%)",
    meta: [
      { label: "First Appearance", value: "Chapter 6" },
      { label: "Alignment", value: "Caregiver" },
    ],
  },
];

export const roleFilters: { label: string; value: "All" | CharacterRole }[] = [
  { label: "All", value: "All" },
  { label: "Protagonists", value: "Protagonist" },
  { label: "Antagonists", value: "Antagonist" },
  { label: "Supporting", value: "Supporting" },
];

export const roleBadgeStyles: Record<CharacterRole, string> = {
  Protagonist: "bg-badge-pink text-brand",
  Supporting: "bg-badge-purple text-[#625595]",
  Antagonist: "bg-[#ffe1c7] text-[#b45309]",
};

// ---- Character detail / analysis profile ----

export type KeyTrait = {
  title: string;
  description: string;
  accentColor: string;
};

export type NarrativeStat = {
  label: string;
  displayValue: string;
  percent: number;
};

export type Artifact = {
  name: string;
  detail?: string;
};

export type KeyLocation = {
  name: string;
  subtitle: string;
};

export type CharacterProfile = {
  bookTitle: string;
  secondaryBadge?: string;
  photoInitials: string;
  photoGradient: string;
  totalChapters: number;
  appearedChapters: number;
  characterImportance: string;
  description: string;
  aliases: string[];
  keyTraits: KeyTrait[];
  narrativeStats: NarrativeStat[];
  artifacts: Artifact[];
  keyLocations: KeyLocation[];
};

export const characterProfiles: Record<string, CharacterProfile> = {
  "harry-potter": {
    bookTitle: "Harry Potter and the Philosopher's Stone",
    secondaryBadge: "Gryffindor",
    photoInitials: "HP",
    photoGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)",
    totalChapters: 17,
    appearedChapters: 17,
    characterImportance: "Central Character",
    description:
      "Harry Potter is a wizard, the only child of James and Lily Potter. He is famous for surviving an attack by Lord Voldemort when he was a baby. He is known for his lightning-bolt scar and his resilience. Harry is characterized by his bravery, loyalty to his friends, and his innate sense of justice, even when facing overwhelming odds.",
    aliases: ["The Boy Who Lived", "The Chosen One", "Undesirable No. 1"],
    keyTraits: [
      {
        title: "Exceptional Courage",
        description: "Willing to risk everything for the greater good.",
        accentColor: "#a43073",
      },
      {
        title: "Fierce Loyalty",
        description: "Protective of Hermione, Ron, and Dumbledore.",
        accentColor: "#f4a4c8",
      },
      {
        title: "Natural Seeker",
        description: "Highly skilled on a broomstick and observant.",
        accentColor: "#8b7fd6",
      },
    ],
    narrativeStats: [
      { label: "Chapter Appearances", displayValue: "17 / 17", percent: 100 },
      { label: "Dialogue Weight", displayValue: "42% of total", percent: 42 },
      { label: "Point of View Coverage", displayValue: "95%", percent: 95 },
    ],
    artifacts: [
      { name: "Holly Wand", detail: "Phoenix Feather" },
      { name: "Invisibility Cloak" },
      { name: "Marauder's Map" },
    ],
    keyLocations: [
      { name: "Hogwarts", subtitle: "Primary Setting" },
      { name: "4 Privet Drive", subtitle: "Childhood Home" },
    ],
  },
};

