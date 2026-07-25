export type ProfileStat = {
  icon: "novels" | "chapters" | "streak";
  value: string | number;
  label: string;
};

export const profileStats: ProfileStat[] = [
  { icon: "novels", value: 12, label: "Novels Uploaded" },
  { icon: "chapters", value: 458, label: "Chapters Read" },
  { icon: "streak", value: "14 days", label: "Reading Streak" },
];

export const continueReading = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  progressPercent: 65,
  coverGradient: "linear-gradient(160deg, #3a4a5c 0%, #16202c 100%)",
};

export type RecentlyOpenedItem = {
  id: string;
  title: string;
  openedAgo: string;
  coverGradient: string;
};

export const recentlyOpened: RecentlyOpenedItem[] = [
  {
    id: "wuthering-heights",
    title: "Wuthering Heights",
    openedAgo: "Opened 2h ago",
    coverGradient: "linear-gradient(160deg, #4a3b2b 0%, #241c14 100%)",
  },
  {
    id: "little-women",
    title: "Little Women",
    openedAgo: "Opened Yesterday",
    coverGradient: "linear-gradient(160deg, #6b5546 0%, #3a2c22 100%)",
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    openedAgo: "Opened 3 days ago",
    coverGradient: "linear-gradient(160deg, #2b2620 0%, #0f0d0a 100%)",
  },
];

export type CollectionBook = {
  id: string;
  title: string;
  coverGradient: string;
  coverIcon: "bolt" | "quill" | "ring" | "portrait";
};

export const collectionBooks: CollectionBook[] = [
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    coverGradient: "linear-gradient(160deg, #d8c9a3 0%, #b7a276 100%)",
    coverIcon: "quill",
  },
  {
    id: "1984",
    title: "1984",
    coverGradient: "linear-gradient(160deg, #cfc9be 0%, #a9a297 100%)",
    coverIcon: "portrait",
  },
  {
    id: "jane-eyre",
    title: "Jane Eyre",
    coverGradient: "linear-gradient(160deg, #2b2b33 0%, #101014 100%)",
    coverIcon: "ring",
  },
];

export const accountManagement = [
  {
    id: "change-password",
    title: "Change Password",
    description: "Update security details",
  },
  {
    id: "google-account",
    title: "Google Account",
    description: "Connected",
    connected: true,
  },
  {
    id: "delete-account",
    title: "Delete Account",
    description: "Permanently remove data",
    danger: true,
  },
];
