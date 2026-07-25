import { AiSparkleIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";
import { SettingsSelectField } from "./SettingsSelectField";
import { SettingsCheckbox } from "./SettingsCheckbox";

export function AiAnalysisSection() {
  return (
    <SettingsSectionCard icon={AiSparkleIcon} title="AI Analysis">
      <SettingsSelectField
        id="model-selection"
        label="Model Selection"
        defaultValue="Gemini 2.5 Pro"
        options={["Gemini 2.5 Pro", "Gemini 2.5 Flash", "Claude Sonnet", "GPT-4o"]}
      />
      <SettingsSelectField
        id="analysis-depth"
        label="Analysis Depth"
        defaultValue="Standard"
        options={["Quick", "Standard", "Deep"]}
      />

      <div>
        <p className="text-xs font-semibold text-body">Granted Visualizations</p>
        <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2.5">
          <SettingsCheckbox label="Character Profiles" defaultChecked />
          <SettingsCheckbox label="Relationship Graph" defaultChecked />
          <SettingsCheckbox label="Timeline View" defaultChecked />
          <SettingsCheckbox label="Family Tree" />
          <SettingsCheckbox label="Location Map" defaultChecked />
        </div>
      </div>
    </SettingsSectionCard>
  );
}
