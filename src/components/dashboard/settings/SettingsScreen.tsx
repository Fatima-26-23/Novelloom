import { PageHeader } from "../PageHeader";
import { GeneralSection } from "./GeneralSection";
import { AppearanceSection } from "./AppearanceSection";
import { ReadingPreferencesSection } from "./ReadingPreferencesSection";
import { AiAnalysisSection } from "./AiAnalysisSection";
import { StorageSystemSection } from "./StorageSystemSection";
import { PrivacySecuritySection } from "./PrivacySecuritySection";
import { HelpSupportSection } from "./HelpSupportSection";
import { AboutSection } from "./AboutSection";
import { SettingsFooterBar } from "./SettingsFooterBar";

export function SettingsScreen() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <PageHeader
        title="Workspace Configuration"
        subtitle="Tailor your digital reading environment and AI analytical parameters for optimal literary focus."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GeneralSection />
        <AppearanceSection />
        <ReadingPreferencesSection />
        <AiAnalysisSection />
        <StorageSystemSection />
        <PrivacySecuritySection />
        <HelpSupportSection />
        <AboutSection />
      </div>

      <SettingsFooterBar />
    </div>
  );
}
