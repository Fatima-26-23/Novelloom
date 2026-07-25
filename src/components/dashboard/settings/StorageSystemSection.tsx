import { DatabaseIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";
import { ToggleSwitch } from "./ToggleSwitch";

export function StorageSystemSection() {
  return (
    <SettingsSectionCard icon={DatabaseIcon} title="Storage & System">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-body">Cloud Storage</p>
          <span className="text-xs font-semibold text-heading">2.4 GB of 5.0 GB Used</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-badge-pink">
          <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          className="w-full rounded-lg border border-card-border px-4 py-2.5 text-left text-xs font-semibold text-body transition-colors hover:bg-badge-pink/20"
        >
          Clear Cache
        </button>
        <button
          type="button"
          className="w-full rounded-lg border border-card-border px-4 py-2.5 text-left text-xs font-semibold text-body transition-colors hover:bg-badge-pink/20"
        >
          Delete Old Analyses
        </button>
      </div>

      <div>
        <p className="text-xs font-semibold text-body">Notifications</p>
        <div className="mt-2.5 flex flex-col gap-3">
          <ToggleSwitch label="Analysis Complete" defaultChecked />
          <ToggleSwitch label="Reading Reminder" />
          <ToggleSwitch label="Weekly Summary" defaultChecked />
        </div>
      </div>
    </SettingsSectionCard>
  );
}
