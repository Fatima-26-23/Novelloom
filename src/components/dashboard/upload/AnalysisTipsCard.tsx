import { LocationsIcon, CheckCircleIcon } from "../icons";

type Tip = {
  label: string;
  description: string;
};

const tips: Tip[] = [
  {
    label: "Text Quality:",
    description: "Ensure your file has selectable text. Scanned images without OCR may fail to analyze.",
  },
  {
    label: "Metadata:",
    description: "Fill in the title and author in your file's properties for faster character tagging.",
  },
  {
    label: "Structure:",
    description: "Proper chapter headings help our AI map the narrative arc more accurately.",
  },
];

export function AnalysisTipsCard() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center gap-2">
        <LocationsIcon className="size-5 text-brand" />
        <h2 className="font-heading text-base font-bold text-heading">Analysis Tips</h2>
      </div>

      <ul className="mt-4 flex flex-col gap-4">
        {tips.map(({ label, description }) => (
          <li key={label} className="flex items-start gap-2.5">
            <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-brand" />
            <p className="text-base leading-relaxed text-body">
              <span className="font-bold text-heading">{label}</span> {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}