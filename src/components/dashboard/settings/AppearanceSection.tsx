"use client";

import { PaletteIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";
import { PillSelect } from "./PillSelect";
import { SettingsSlider } from "./SettingsSlider";

export function AppearanceSection() {
  return (
    <SettingsSectionCard icon={PaletteIcon} title="Appearance">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold text-body">Theme</p>
        <PillSelect options={["Light", "Dark", "System"]} defaultValue="Light" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold text-body">Reading Font</p>
        <PillSelect options={["Lexend", "Inter", "Georgia"]} defaultValue="Lexend" />
      </div>

      <SettingsSlider
        label="Font Size"
        min={12}
        max={24}
        step={1}
        defaultValue={18}
        formatValue={(value) => `${value}px`}
      />

      <SettingsSlider
        label="Line Spacing"
        min={1}
        max={2.4}
        step={0.1}
        defaultValue={1.6}
        formatValue={(value) => `${value.toFixed(1)}x`}
      />
    </SettingsSectionCard>
  );
}
