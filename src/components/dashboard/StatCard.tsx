type StatCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  value: string | number;
  label: string;
};

export function StatCard({ icon: Icon, iconBg, iconColor, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div
        className="flex size-11 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className={`size-5 ${iconColor}`} />
      </div>
      <div>
        <p className="font-heading text-base font-bold leading-tight text-heading">{value}</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}
