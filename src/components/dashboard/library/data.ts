export type LibraryBook = {
  id: string;
  title: string;
  author: string;
  progressPercent: number;
  coverGradient: string;
  coverIcon: "bolt" | "quill" | "ring" | "portrait";
};

export const libraryBooks: LibraryBook[] = [
  {
    id: "the-boy-who-lived",
    title: "The Boy Who Lived",
    author: "J.K. Rowling",
    progressPercent: 84,
    coverGradient: "linear-gradient(160deg, #1f4d3a 0%, #0d2b21 100%)",
    coverIcon: "bolt",
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    progressPercent: 100,
    coverGradient: "linear-gradient(160deg, #6b5546 0%, #3a2c22 100%)",
    coverIcon: "quill",
  },
  {
    id: "fellowship-of-the-ring",
    title: "Fellowship of Ring",
    author: "J.R.R. Tolkien",
    progressPercent: 42,
    coverGradient: "linear-gradient(160deg, #2b2620 0%, #0f0d0a 100%)",
    coverIcon: "ring",
  },
  {
    id: "normal-people",
    title: "Normal People",
    author: "Sally Rooney",
    progressPercent: 15,
    coverGradient: "linear-gradient(160deg, #f3c8c2 0%, #e39a91 100%)",
    coverIcon: "portrait",
  },
];
