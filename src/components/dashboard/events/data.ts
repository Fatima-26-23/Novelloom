export type EventCharacter = {
  initials: string;
  avatarGradient: string;
};

export type ImportantEvent = {
  id: string;
  chapter: string;
  title: string;
  description: string;
  location: string;
  characters: EventCharacter[];
  extraCharacters?: number;
  hasImage?: boolean;
};

const hp: EventCharacter = {
  initials: "HP",
  avatarGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)",
};
const rw: EventCharacter = {
  initials: "RW",
  avatarGradient: "linear-gradient(135deg, #ffcf86 0%, #d6862f 100%)",
};
const hg: EventCharacter = {
  initials: "HG",
  avatarGradient: "linear-gradient(135deg, #a9c6f5 0%, #4c6fbf 100%)",
};
const voldemort: EventCharacter = {
  initials: "V",
  avatarGradient: "linear-gradient(135deg, #6d6d6d 0%, #1c1c1c 100%)",
};

export const analysisStatus = 85;

export const importantEvents: ImportantEvent[] = [
  {
    id: "sorting-ceremony",
    chapter: "Chapter 7",
    title: "Sorting Ceremony",
    description:
      "The first major initiation ritual where students are assigned to their houses based on.",
    location: "Great Hall, Hogwarts",
    characters: [hp, rw, hg],
    extraCharacters: 12,
  },
  {
    id: "mirror-of-erised",
    chapter: "Chapter 12",
    title: "The Mirror of Erised",
    description: "Harry discovers a magical mirror that shows the deepest desires of the heart.",
    location: "Abandoned Classroom, Hogwarts",
    characters: [hp, rw],
  },
  {
    id: "the-boy-who-lived",
    chapter: "Chapter 1",
    title: "The Boy Who Lived",
    description:
      "The foundational event of the entire series. Following the defeat of Voldemort, infant Harry is delivered to 4 Privet Drive. This event establishes the central mystery and the tragic backstory of the protagonist.",
    location: "Privet Drive, Little Whinging",
    characters: [hp, rw, hg],
    hasImage: true,
  },
  {
    id: "troll-in-the-dungeon",
    chapter: "Chapter 10",
    title: "Troll in the Dungeon",
    description: "On Halloween, a mountain troll is let loose and Harry and Hermione save.",
    location: "Girl's Bathroom, Hogwarts",
    characters: [hp, rw, hg],
  },
  {
    id: "the-confrontation",
    chapter: "Chapter 17",
    title: "The Confrontation",
    description: "The final showdown between Harry and Professor Quirrell/Voldemort. Harry's.",
    location: "Underground Chambers",
    characters: [hp, voldemort],
  },
];
