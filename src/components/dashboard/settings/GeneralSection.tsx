import { GlobeIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";
import { SettingsSelectField } from "./SettingsSelectField";

export function GeneralSection() {
  return (
    <SettingsSectionCard icon={GlobeIcon} title="General">
      <SettingsSelectField
        id="language"
        label="Language"
        defaultValue="English (UK)"
        options={["English (UK)", "English (US)", "French", "German", "Spanish"]}
      />
      <SettingsSelectField
        id="region"
        label="Region"
        defaultValue="United Kingdom"
        options={["United Kingdom", "United States", "Canada", "Australia", "Pakistan"]}
      />
      <SettingsSelectField
        id="date-format"
        label="Date Format"
        defaultValue="DD/MM/YYYY"
        options={["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]}
      />
    </SettingsSectionCard>
  );
}
