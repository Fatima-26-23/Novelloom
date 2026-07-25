import { StatCard } from "../StatCard";
import { BookIcon, ChaptersStatIcon, FlameIcon } from "../icons";
import type { ProfileStat } from "./data";

const iconMap: Record<ProfileStat["icon"], React.ComponentType<{ className?: string }>> = {
  novels: BookIcon,
  chapters: ChaptersStatIcon,
  streak: FlameIcon,
};

const styleMap: Record<ProfileStat["icon"], { iconBg: string; iconColor: string }> = {
  novels: { iconBg: "var(--color-icon-pink)", iconColor: "text-brand" },
  chapters: { iconBg: "var(--color-icon-purple)", iconColor: "text-[#625595]" },
  streak: { iconBg: "var(--color-icon-pink-alt)", iconColor: "text-brand" },
};

type ProfileStatsRowProps = {
  stats: ProfileStat[];
};

export function ProfileStatsRow({ stats }: ProfileStatsRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          icon={iconMap[stat.icon]}
          iconBg={styleMap[stat.icon].iconBg}
          iconColor={styleMap[stat.icon].iconColor}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}
