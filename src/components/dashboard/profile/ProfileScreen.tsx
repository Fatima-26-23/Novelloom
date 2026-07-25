import { PageHeader } from "../PageHeader";
import { DashboardFooter } from "../DashboardFooter";
import { MaskIcon, ClockIcon } from "../icons";
import { ProfileHeaderCard } from "./ProfileHeaderCard";
import { ProfileStatsRow } from "./ProfileStatsRow";
import { ProfileInfoCard } from "./ProfileInfoCard";
import { ContinueReadingCard } from "./ContinueReadingCard";
import { RecentlyOpenedCard } from "./RecentlyOpenedCard";
import { CollectionSection } from "./CollectionSection";
import { AccountManagementSection } from "./AccountManagementSection";
import {
  accountManagement,
  collectionBooks,
  continueReading,
  profileStats,
  recentlyOpened,
} from "./data";

export function ProfileScreen() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <PageHeader title="Profile" subtitle="Manage your account and reading preferences." />

        <div className="flex flex-col gap-6">
          <ProfileHeaderCard name="Name" email="name.name@example.com" />

          <ProfileStatsRow stats={profileStats} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProfileInfoCard icon={MaskIcon} label="Favorite Genre" value="Historical Fiction" />
            <ProfileInfoCard icon={ClockIcon} label="Total Reading Time" value="124h 15m" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
            <ContinueReadingCard
              title={continueReading.title}
              author={continueReading.author}
              progressPercent={continueReading.progressPercent}
              coverGradient={continueReading.coverGradient}
            />
            <RecentlyOpenedCard items={recentlyOpened} />
          </div>

          <CollectionSection books={collectionBooks} />

          <AccountManagementSection items={accountManagement} />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}
