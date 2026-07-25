import { PageHeader } from "./PageHeader";
import { BookOverviewCard } from "./BookOverviewCard";
import { StatsRow } from "./StatsRow";
import { ExploreAnalysisSection } from "./ExploreAnalysisSection";
import { DashboardFooter } from "./DashboardFooter";

export function BookDashboard() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <PageHeader
          title="Book Dashboard"
          subtitle="Deep literary analysis for your current project."
        />

        <BookOverviewCard
          coverImage="/images/dashboard/hp-sorcerers-stone-cover.jpg"
          genre="Fantasy"
          publishedYear="1997"
          title="Harry Potter and the Sorcerer's Stone"
          author="J.K. Rowling"
          currentChapter={17}
          totalChapters={17}
          totalWordCount="76,944"
          readingTime="4h 16m"
          complexityLabel="Complexity Score"
          complexityScore="Grade 6.4"
        />

        <div className="mt-6">
          <StatsRow />
        </div>

        <ExploreAnalysisSection />
      </div>

      <DashboardFooter />
    </div>
  );
}