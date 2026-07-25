import { StatCard } from "./StatCard";
import {
  CharactersStatIcon,
  LocationsStatIcon,
  EventsStatIcon,
  ChaptersStatIcon,
} from "./icons";

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  value: string | number;
  label: string;
};

const stats: Stat[] = [
  {
    icon: CharactersStatIcon,
    iconBg: "var(--color-icon-pink)",
    iconColor: "text-brand",
    value: 54,
    label: "Characters Found",
  },
  {
    icon: LocationsStatIcon,
    iconBg: "var(--color-icon-purple)",
    iconColor: "text-[#625595]",
    value: 12,
    label: "Locations Mapped",
  },
  {
    icon: EventsStatIcon,
    iconBg: "var(--color-icon-pink-alt)",
    iconColor: "text-brand",
    value: 142,
    label: "Events Logged",
  },
  {
    icon: ChaptersStatIcon,
    iconBg: "var(--color-icon-purple)",
    iconColor: "text-[#625595]",
    value: 17,
    label: "Chapters Analyzed",
  },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
