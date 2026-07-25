import { PlusIcon } from "../icons";

type AddCharacterCardProps = {
  onClick?: () => void;
};

export function AddCharacterCard({ onClick }: AddCharacterCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-full min-h-[260px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-card-border bg-badge-pink/20 p-5 text-center transition-colors hover:border-brand hover:bg-badge-pink/40"
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-white text-brand shadow-sm">
        <PlusIcon className="size-5" />
      </span>
      <span className="font-heading text-xs font-bold text-heading">Add Character</span>
      <span className="text-xs text-muted">Or let AI detect more from the text</span>
    </button>
  );
}
