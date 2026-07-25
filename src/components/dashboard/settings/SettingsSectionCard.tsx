type SettingsSectionCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SettingsSectionCard({ icon: Icon, title, children, className }: SettingsSectionCardProps) {
  return (
    <div
      className={`rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-brand" />
        <h2 className="font-heading text-base font-bold text-heading">{title}</h2>
      </div>
      <div className="mt-5 flex flex-col gap-5">{children}</div>
    </div>
  );
}
