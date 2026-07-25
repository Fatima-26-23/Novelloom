import Image from "next/image";
import Link from "next/link";

const avatars = [
  "/images/landing/avatar-1.png",
  "/images/landing/avatar-2.png",
  "/images/landing/avatar-3.png",
];

export function HeroSection() {
  return (
    <section className="overflow-hidden pb-14 pt-10 lg:pb-[54px] lg:pt-[38px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-[15px] lg:px-10">
        {/* Left column */}
        <div className="flex w-full max-w-[588px] flex-col gap-8">
          <div className="badge-gradient inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5">
            <Image
              src="/images/landing/sparkle.svg"
              alt=""
              width={17}
              height={17}
              aria-hidden
            />
            <span className="text-xs font-semibold tracking-[0.36px] text-brand-dark">
              Next-Gen Literary AI
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.17] tracking-[-0.96px] text-heading sm:text-[48px] sm:leading-[56px]">
            Read Deeper with{" "}
            <span className="text-gradient-brand">AI-powered</span>
            <br />
            Novel Analysis
          </h1>

          <p className="max-w-[512px] text-lg leading-7 text-body">
            Upload your EPUB or PDF novels and let Novelloom uncover intricate
            character arcs, hidden relationships, and complex timelines in
            seconds.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 font-heading text-xl font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/landing/upload-icon.svg"
                alt=""
                width={16}
                height={20}
                aria-hidden
              />
              Upload Novel
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-[33px] py-[17px] font-heading text-xl font-semibold text-brand transition-colors hover:bg-page-bg"
            >
              View Demo
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={src}
                  className="relative size-10 overflow-hidden rounded-full border-2 border-white"
                  style={{ marginLeft: i === 0 ? 0 : -12, zIndex: avatars.length - i }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs font-semibold tracking-[0.36px] text-body">
              Trusted by 2,000+ writers and researchers
            </p>
          </div>
        </div>

        {/* Right column — dashboard visualization */}
        <div className="relative w-full max-w-[598px] shrink-0">
          <div
            className="absolute -right-8 -top-10 size-40 rounded-full bg-badge-pink/40 blur-[32px]"
            aria-hidden
          />
          <div
            className="absolute -bottom-10 -left-6 size-60 rounded-full bg-[rgba(164,150,219,0.3)] blur-[32px]"
            aria-hidden
          />

          <div className="relative mx-auto rotate-2 lg:mx-0">
            <div className="overflow-hidden rounded-[40px] border border-border/30 bg-white p-[33px] shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
              {/* Browser chrome */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-[rgba(186,26,26,0.2)]" />
                  <span className="size-3 rounded-full bg-badge-pink" />
                  <span className="size-3 rounded-full bg-[rgba(164,48,115,0.2)]" />
                </div>
                <div className="h-4 w-32 rounded-full bg-url-bar" />
              </div>

              {/* Dashboard screenshot */}
              <div className="relative mb-6 h-[200px] overflow-hidden rounded-2xl shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] sm:h-[260px] lg:h-[320px]">
                <Image
                  src="/images/landing/hero-dashboard.png"
                  alt="Novelloom character network dashboard preview"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 533px"
                  priority
                />
              </div>

              {/* Mini cards */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-tone-bg px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.6px] text-body">
                    Tone Map
                  </p>
                  <div className="mt-4 h-8 w-full rounded-full bg-gradient-to-r from-brand to-[#625595] opacity-30" />
                </div>
                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-tone-bg px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.6px] text-body">
                    Themes
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="h-4 w-12 rounded-full bg-icon-pink" />
                    <span className="h-4 w-16 rounded-full bg-icon-purple" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-[26%] flex items-center gap-3 rounded-2xl border border-border/30 bg-white p-[17px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/landing/mapped-icon.svg"
                alt=""
                width={22}
                height={16}
                aria-hidden
              />
              <span className="text-sm font-bold tracking-[0.14px] text-heading">
                Characters Mapped
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
