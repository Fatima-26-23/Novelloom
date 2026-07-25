import { UsersSmallIcon } from "../../icons";

const residentAvatars = [
  { initials: "HP", avatarGradient: "linear-gradient(135deg, #f4a4c8 0%, #a43073 100%)" },
  { initials: "RW", avatarGradient: "linear-gradient(135deg, #ffcf86 0%, #d6862f 100%)" },
  { initials: "HG", avatarGradient: "linear-gradient(135deg, #a9c6f5 0%, #4c6fbf 100%)" },
  { initials: "AD", avatarGradient: "linear-gradient(135deg, #b8e0c8 0%, #3f8a5e 100%)" },
];

type ResidentCharactersCardProps = {
  summary: string;
  extra: number;
};

export function ResidentCharactersCard({ summary, extra }: ResidentCharactersCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center gap-2">
        <UsersSmallIcon className="size-4 text-brand" />
        <p className="text-xs font-bold uppercase tracking-wide text-muted">
          Resident Characters
        </p>
      </div>

      <div className="mt-5 flex -space-x-2">
        {residentAvatars.map((character, index) => (
          <div
            key={index}
            className="flex size-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
            style={{ backgroundImage: character.avatarGradient }}
          >
            {character.initials}
          </div>
        ))}
        <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-badge-purple text-xs font-bold text-[#625595] shadow-sm">
          +{extra}
        </div>
      </div>

      <p className="mt-5 flex-1 text-base leading-relaxed text-body">{summary}</p>
    </div>
  );
}
