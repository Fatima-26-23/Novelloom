type ProfileInfoCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export function ProfileInfoCard({ icon: Icon, label, value }: ProfileInfoCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-card-border bg-white p-5 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div>
        <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-1 font-heading text-base font-bold text-heading">{value}</p>
      </div>
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-badge-pink">
        <Icon className="size-5 text-brand" />
      </div>
    </div>
  );
}
