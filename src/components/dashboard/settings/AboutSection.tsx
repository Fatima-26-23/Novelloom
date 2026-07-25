import { InfoCircleIcon, LibraryIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";

export function AboutSection() {
  return (
    <SettingsSectionCard icon={InfoCircleIcon} title="About">
      <div className="flex flex-col gap-2.5 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-muted">Version</span>
          <span className="font-semibold text-heading">v2.1.0-alpha</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted">Last Update</span>
          <span className="font-semibold text-heading">12 Jul 2026</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold text-brand">
        <button type="button" className="hover:underline">
          Privacy Policy
        </button>
        <button type="button" className="hover:underline">
          Terms of Service
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-page-bg p-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand">
          <LibraryIcon className="size-4 text-white" />
        </div>
        <div>
          <p className="font-heading text-xs font-bold text-brand">NOVELLOOM</p>
          <p className="text-xs text-muted">Built for those who love the written word.</p>
        </div>
      </div>
    </SettingsSectionCard>
  );
}
