"use client";

import { useRouter } from "next/navigation";
import { LibraryIcon } from "./icons";

type LogoutScreenProps = {
  onClose?: () => void;
};

export function LogoutScreen({ onClose }: LogoutScreenProps) {
  const router = useRouter();

  const handleLogout = () => {
  router.push("/");
};

  const handleStayLoggedIn = () => {
    if (onClose) {
      onClose();
      return;
    }
    router.back();
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-page-bg px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-screen-title"
        className="w-full max-w-2xl min-h-[800px] rounded-3xl bg-white p-10 flex flex-col justify-center text-center shadow-[0px_20px_45px_-20px_rgba(109,0,71,0.25)]"
      >
        <div className="flex flex-col items-center">
          <div className="flex size-24 items-center justify-center rounded-3xl bg-brand">
            <LibraryIcon className="size-11 text-white" />
          </div>
          <p className="mt-5 font-heading text-base font-bold text-brand">Novelloom</p>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Creative Studio
          </p>
        </div>

        <h1
          id="logout-screen-title"
          className="mt-10 font-heading text-base font-bold leading-tight text-heading"
        >
          Are you sure you want to log out?
        </h1>

        <p className="mt-5 text-base leading-relaxed text-muted max-w-lg mx-auto">
          You will need to sign back in to access your library, manuscripts, and creative studio.
        </p>

        <div className="mt-10 flex flex-col gap-4 max-w-lg w-full mx-auto">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-xl bg-[#f8a8cf] px-6 py-5 text-base font-semibold text-heading transition-opacity hover:opacity-90"
          >
            Log Out
          </button>
          <button
            type="button"
            onClick={handleStayLoggedIn}
            className="w-full rounded-xl border border-card-border bg-badge-pink/30 px-6 py-5 text-base font-semibold text-body transition-colors hover:bg-badge-pink/50"
          >
            Stay Logged In
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="size-2 rounded-full bg-card-border" />
          <span className="size-2 rounded-full bg-card-border" />
          <span className="size-2 rounded-full bg-card-border" />
        </div>
      </div>
    </div>
  );
}