export type FamilyMember = {
  id: string;
  name: string;
  epithet: string;
  initials: string;
  avatarGradient: string;
  badges?: string[];
  description?: string;
  highlighted?: boolean;
};

export const parents: FamilyMember[] = [
  {
    id: "james-potter",
    name: "James Potter",
    epithet: "The Stag",
    initials: "JP",
    avatarGradient: "linear-gradient(135deg, #a9c6f5 0%, #4c6fbf 100%)",
    description: "Harry's father, a talented wizard known for his mischief and bravery at Hogwarts.",
  },
  {
    id: "lily-potter",
    name: "Lily Potter",
    epithet: "The Protector",
    initials: "LP",
    avatarGradient: "linear-gradient(135deg, #ffb6c9 0%, #d63d6f 100%)",
    description: "Harry's mother, whose sacrifice gave him a protection that shaped the entire saga.",
  },
];

export const child: FamilyMember = {
  id: "harry-potter",
  name: "Harry Potter",
  epithet: "The Boy Who Lived",
  initials: "HP",
  avatarGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)",
  badges: ["Auror", "Gryffindor"],
  highlighted: true,
};
