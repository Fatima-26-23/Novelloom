import { DashboardFooter } from "../DashboardFooter";
import { ManuscriptDropzone } from "./ManuscriptDropzone";
import { AnalysisTipsCard } from "./AnalysisTipsCard";
import { TrustBadgesRow } from "./TrustBadgesRow";

export function UploadScreen() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <div className="mx-auto mt-32 grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_680px] lg:items-start">
          <div>
            <div className="mt-20">
              <h1 className="font-heading whitespace-nowrap text-base font-bold leading-tight text-heading">
                Start your literary journey
              </h1>
              <p className="mt-4 max-w-lg text-base text-body">
                Upload your manuscript to begin deep structural analysis, character mapping, and
                narrative theme extraction.
              </p>
            </div>

            <div className="mt-12 max-w-lg">
              <AnalysisTipsCard />
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
            <ManuscriptDropzone />
          </div>
        </div>

        <TrustBadgesRow />
      </div>

      <DashboardFooter />
    </div>
  );
}