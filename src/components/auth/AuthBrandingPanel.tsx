import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AuthBrandingPanelProps = {
  compact?: boolean;
  className?: string;
};

export function AuthBrandingPanel({
  compact = false,
  className,
}: AuthBrandingPanelProps) {
  if (compact) {
    return (
      <div
        className={cn(
          "relative overflow-hidden border-b border-border/30 bg-page-bg px-6 py-8",
          className,
        )}
      >
        <div
          className="absolute -right-10 -top-10 size-32 rounded-full bg-badge-pink/40 blur-[32px]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-md flex-col items-center gap-3 text-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-lg bg-brand">
              <Image
                src="/images/landing/logo-icon.svg"
                alt=""
                width={22}
                height={20}
                aria-hidden
              />
            </div>
            <span className="font-heading text-base font-bold tracking-[-0.24px] text-brand">
              Novelloom
            </span>
          </Link>
          <p className="text-xs leading-6 text-body">
            Your journey into deep narrative analysis begins here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <aside
      className={cn(
        "relative overflow-hidden bg-page-bg",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(253,208,234,0.35)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(231,222,255,0.4)_0%,transparent_45%)]"
        aria-hidden
      />

      <div
        className="absolute -bottom-16 -left-24 size-64 rounded-full bg-badge-pink/40 blur-[32px]"
        aria-hidden
      />
      <div
        className="absolute right-[242px] top-[387px] size-64 rounded-full bg-[rgba(164,150,219,0.3)] blur-[32px]"
        aria-hidden
      />

      <div className="relative flex h-full w-full min-h-[1024px] items-center justify-center px-10">
        <div className="flex w-full max-w-[512px] flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-brand shadow-[0px_4px_20px_-2px_rgba(164,48,115,0.25)]">
  <Image src="/images/landing/logo-icon.svg" alt="" width={44} height={38} aria-hidden />
</div>
            <h1 className="font-heading text-base font-bold leading-tight tracking-[-0.4px] text-brand">
              Novelloom
            </h1>
          </div>

          <blockquote className="max-w-[480px] text-base leading-8 text-body">
            &ldquo;Your journey into deep narrative analysis begins here.&rdquo;
          </blockquote>
        </div>
      </div>
    </aside>
  );
}
