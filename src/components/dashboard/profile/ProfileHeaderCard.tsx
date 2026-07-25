import { CameraIcon, MailIcon } from "../icons";

type ProfileHeaderCardProps = {
  name: string;
  email: string;
};

export function ProfileHeaderCard({ name, email }: ProfileHeaderCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-card-border bg-white p-6 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex size-16 items-center justify-center rounded-full bg-badge-purple text-base font-semibold text-brand">
            {name.charAt(0)}
          </div>
          <button
            type="button"
            aria-label="Change profile photo"
            className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full border-2 border-white bg-heading text-white"
          >
            <CameraIcon className="size-3" />
          </button>
        </div>

        <div>
          <h1 className="font-heading text-base font-bold leading-tight text-heading">{name}</h1>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
            <MailIcon className="size-3.5" />
            {email}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="rounded-full border border-card-border px-5 py-2.5 text-xs font-semibold text-body transition-colors hover:bg-badge-pink/30"
      >
        Edit Profile
      </button>
    </div>
  );
}
