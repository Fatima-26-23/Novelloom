"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DashboardIcon,
  LibraryIcon,
  CharactersIcon,
  RelationshipsIcon,
  FamilyTreeIcon,
  TimelineIcon,
  LocationsIcon,
  SummariesIcon,
  EventsIcon,
  PlusIcon,
  SettingsIcon,
  LogoutIcon,
} from "./icons";


const mainNav = [
  { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { label: "My Library", href: "/library", icon: LibraryIcon },
];

const analysisNav = [
  { label: "Characters", href: "/dashboard/characters", icon: CharactersIcon },
  { label: "Relationships", href: "/dashboard/relationships", icon: RelationshipsIcon },
  { label: "Family Tree", href: "/dashboard/family-tree", icon: FamilyTreeIcon },
  { label: "Timeline", href: "/dashboard/timeline", icon: TimelineIcon },
  { label: "Locations", href: "/dashboard/locations", icon: LocationsIcon },
  { label: "Summaries", href: "/dashboard/summaries", icon: SummariesIcon },
  { label: "Events", href: "/dashboard/events", icon: EventsIcon },
];

type SidebarProps = {
  projectName?: string;
  userName?: string;
};

export function Sidebar({
  projectName = "Harry Potter and the Sorcerer's Stone",
  userName = "Name",
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href);

  return (
    <aside className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col overflow-y-auto border-r border-border/30 bg-white px-4 py-6">
      <Link href="/" className="flex items-center gap-2 px-2">
  <div className="flex size-10 items-center justify-center rounded-lg bg-brand">
    <LibraryIcon className="size-5 text-white" />
  </div>
  <div className="flex flex-col">
    <span className="font-heading text-sm font-bold leading-tight text-brand">
      Novelloom
    </span>
    <span className="text-[11px] leading-tight text-muted">Novel Analysis</span>
  </div>
</Link>

      <nav className="mt-6 flex flex-col gap-1">
        {mainNav.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive(href)
                ? "bg-brand/10 text-brand"
                : "text-body hover:bg-brand/5 hover:text-brand"
            }`}
          >
            <Icon className="size-[18px]" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-6 px-3">
       <p className="truncate text-[7.5px] font-semibold uppercase tracking-wide text-muted">
  {projectName}
</p>
      </div>

      <nav className="mt-2 flex flex-col gap-1">
        {analysisNav.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive(href)
                ? "bg-brand/10 text-brand"
                : "text-body hover:bg-brand/5 hover:text-brand"
            }`}
          >
            <Icon className="size-[18px]" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-3 border-t border-border/30 pt-4">
        <Link
          href="/upload"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90"
        >
          <PlusIcon className="size-4" />
          Upload Novel
        </Link>

        <Link
          href="/profile"
          className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors hover:bg-brand/5"
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-badge-purple text-sm font-semibold text-brand">
            {userName.charAt(0)}
          </div>
          <span className="text-sm font-medium text-heading">{userName}</span>
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-brand/5 hover:text-brand"
        >
          <SettingsIcon className="size-[18px]" />
          Settings
        </Link>
        <button
          type="button"
          onClick={() => router.push("/logout")}
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-brand/5 hover:text-brand"
        >
          <LogoutIcon className="size-[18px]" />
          Logout
        </button>
      </div>
    </aside>
  );
}
