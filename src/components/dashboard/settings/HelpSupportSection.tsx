import { ExternalLinkIcon, HelpCircleIcon } from "../icons";
import { SettingsSectionCard } from "./SettingsSectionCard";

const links = ["FAQs & Documentation", "Contact Support", "Report a Bug", "Send Feedback"];

export function HelpSupportSection() {
  return (
    <SettingsSectionCard icon={HelpCircleIcon} title="Help & Support">
      <div className="flex flex-col">
        {links.map((label, index) => (
          <button
            key={label}
            type="button"
            className={`flex items-center justify-between py-2.5 text-xs text-body transition-colors hover:text-brand ${
              index !== links.length - 1 ? "border-b border-border/30" : ""
            }`}
          >
            {label}
            <ExternalLinkIcon className="size-3.5 text-muted" />
          </button>
        ))}
      </div>
    </SettingsSectionCard>
  );
}
