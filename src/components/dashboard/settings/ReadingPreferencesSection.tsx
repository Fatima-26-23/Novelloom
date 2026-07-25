import { SummariesIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";
import { ToggleSwitch } from "./ToggleSwitch";
import { PillSelect } from "./PillSelect";

export function ReadingPreferencesSection() {
  return (
    <SettingsSectionCard icon={SummariesIcon} title="Reading Preferences">
      <ToggleSwitch
        label="Spoiler Protection"
        description="Hide analysis that reveals beyond current progress"
        defaultChecked
      />
      <ToggleSwitch
        label="Confirm Current Chapter"
        description="Ask before generating analysis for new sections"
        defaultChecked
      />
      <ToggleSwitch
        label="Auto-Save Progress"
        description="Sync reading position across all devices"
        defaultChecked
      />

      <div>
        <p className="text-xs font-semibold text-body">Summary Length</p>
        <PillSelect
          className="mt-2 w-full justify-between"
          options={["Short", "Medium", "Detailed"]}
          defaultValue="Medium"
        />
      </div>
    </SettingsSectionCard>
  );
}
