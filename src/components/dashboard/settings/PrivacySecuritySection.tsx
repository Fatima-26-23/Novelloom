import { DownloadIcon, KeyIcon, ShieldIcon, TrashIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";

const actions = [
  { icon: KeyIcon, label: "Change Password" },
  { icon: ShieldIcon, label: "Two-Factor Authentication", status: "Enabled" },
  { icon: DownloadIcon, label: "Download My Data" },
  { icon: TrashIcon, label: "Delete Uploaded Novels" },
];

export function PrivacySecuritySection() {
  return (
    <SettingsSectionCard icon={ShieldIcon} title="Privacy & Security">
      <div className="grid grid-cols-2 gap-3">
        {actions.map(({ icon: Icon, label, status }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-start gap-2 rounded-lg border border-card-border px-3.5 py-3 text-left transition-colors hover:bg-badge-pink/20"
          >
            <Icon className="size-4 text-brand" />
            <span className="text-xs font-semibold text-heading">{label}</span>
            {status && <span className="text-[10px] font-medium text-emerald-600">{status}</span>}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
        <p className="text-xs font-semibold text-red-600">Danger Zone</p>
        <p className="mt-1 text-xs leading-relaxed text-red-500/80">
          Deleting your account is permanent. All reading progress and analysis data will be lost forever.
        </p>
        <button
          type="button"
          className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
        >
          Delete Account
        </button>
      </div>
    </SettingsSectionCard>
  );
}
