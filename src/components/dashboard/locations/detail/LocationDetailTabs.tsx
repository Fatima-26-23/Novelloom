type LocationDetailTabsProps = {
  activeTab?: string;
  keySceneCount: number;
};

export function LocationDetailTabs({
  activeTab = "Overview",
  keySceneCount,
}: LocationDetailTabsProps) {
  const tabs = ["Overview", `Key Scenes (${keySceneCount})`, "Spatial Logic"];

  return (
    <div className="flex items-center gap-6 border-b border-border/30">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`relative pb-3 text-xs font-semibold transition-colors ${
            tab === activeTab ? "text-brand" : "text-muted hover:text-brand"
          }`}
        >
          {tab}
          {tab === activeTab && (
            <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />
          )}
        </button>
      ))}
    </div>
  );
}
