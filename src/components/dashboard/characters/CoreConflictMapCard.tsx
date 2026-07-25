type ConflictItem = {
  label: string;
  dotColor: string;
};

const conflicts: ConflictItem[] = [
  { label: "Protagonist vs. Self", dotColor: "#a43073" },
  { label: "Protagonist vs. Society", dotColor: "#a43073" },
  { label: "Inner Turmoil Index: 6.2", dotColor: "#8b7fd6" },
];

export function CoreConflictMapCard() {
  return (
    <div className="mt-6 rounded-2xl bg-badge-pink/40 p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-brand">
        Core Conflict Map
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {conflicts.map(({ label, dotColor }) => (
          <li key={label} className="flex items-center gap-2.5 text-xs font-medium text-body">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: dotColor }}
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
