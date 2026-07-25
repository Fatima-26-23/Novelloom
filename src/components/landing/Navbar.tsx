import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-brand">
            <Image
              src="/images/landing/logo-icon.svg"
              alt=""
              width={22}
              height={20}
              aria-hidden
            />
          </div>
          <span className="font-heading text-2xl font-bold tracking-[-0.24px] text-brand">
            Novelloom
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex size-[18px] items-center justify-center"
            aria-label="Search"
          >
            <Image
              src="/images/landing/search.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden
            />
          </button>
          <Link
            href="/signup"
            className="rounded-full bg-brand px-6 py-2 text-sm font-bold tracking-[0.14px] text-white shadow-md transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
