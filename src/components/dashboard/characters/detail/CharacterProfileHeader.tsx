import { EditIcon, FileTextIcon, TargetIcon } from "../../icons";
import { roleBadgeStyles, type CharacterRole } from "../data";

type CharacterProfileHeaderProps = {
  name: string;
  role: CharacterRole;
  secondaryBadge?: string;
  photoInitials: string;
  photoGradient: string;
  totalChapters: number;
  characterImportance: string;
};

export function CharacterProfileHeader({
  name,
  role,
  secondaryBadge,
  photoInitials,
  photoGradient,
  totalChapters,
  characterImportance,
}: CharacterProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <div className="relative shrink-0">
        <div
          className="flex size-24 items-center justify-center rounded-2xl text-base font-bold text-white shadow-md sm:size-28"
          style={{ backgroundImage: photoGradient }}
        >
          {photoInitials}
        </div>
        <button
          type="button"
          aria-label="Edit character photo"
          className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-full bg-brand text-white shadow-md transition-opacity hover:opacity-90"
        >
          <EditIcon className="size-3.5" />
        </button>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${roleBadgeStyles[role]}`}>
            {role}
          </span>
          {secondaryBadge && (
            <span className="rounded-full bg-tone-bg px-3 py-1 text-xs font-semibold text-[#4c6ef5]">
              {secondaryBadge}
            </span>
          )}
        </div>

        <h1 className="mt-2 font-heading text-[26px] font-bold leading-tight text-heading">
          {name}
        </h1>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <FileTextIcon className="size-4 text-brand" />
            {totalChapters} Chapters
          </span>
          <span className="flex items-center gap-1.5">
            <TargetIcon className="size-4 text-brand" />
            {characterImportance}
          </span>
        </div>
      </div>
    </div>
  );
}
