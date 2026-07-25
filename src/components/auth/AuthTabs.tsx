import Link from "next/link";
import { cn } from "@/lib/utils";

type AuthTab = "login" | "signup";

type AuthTabsProps = {
  activeTab: AuthTab;
};

const tabs: Array<{ id: AuthTab; label: string; href: string }> = [
  { id: "signup", label: "Create Profile", href: "/signup" },
  { id: "login", label: "Log In", href: "/login" },
];

export function AuthTabs({ activeTab }: AuthTabsProps) {
  return (
    <div
      className="mb-6 flex h-[48px] rounded-xl bg-auth-tab-bg p-1"
      role="tablist"
      aria-label="Authentication"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <Link
            key={tab.id}
            href={tab.href}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "flex h-[40px] flex-1 items-center justify-center rounded-lg text-xs leading-5 transition-colors",
              isActive
                ? "bg-white font-semibold text-brand shadow-[0px_1px_3px_rgba(0,0,0,0.08)]"
                : "font-normal text-muted hover:text-body",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
