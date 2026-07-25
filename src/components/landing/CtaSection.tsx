import Link from "next/link";

export function CtaSection() {
  return (
    <section className="px-6 pb-16 lg:px-10">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[40px] bg-brand px-6 py-16 sm:px-12 lg:px-[216px] lg:py-24">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute -right-32 -top-32 size-64 rounded-full border-4 border-white" />
          <div className="absolute -bottom-48 -left-48 size-96 rounded-full border-4 border-white" />
        </div>

        <div className="relative mx-auto flex max-w-[768px] flex-col items-center gap-8 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.17] tracking-[-0.96px] text-white sm:text-[48px] sm:leading-[56px]">
            Ready to see your story in a new light?
          </h2>
          <p className="text-lg leading-7 text-cta-subtext opacity-90">
            Join thousands of editors and literary analysts. Upload your first
            novel today and receive a complete character map for free.
          </p>
          <Link
            href="/signup"
            className="mt-4 rounded-full bg-white px-10 py-5 font-heading text-xl font-bold text-brand shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90"
          >
            Upload Your First Novel
          </Link>
        </div>
      </div>
    </section>
  );
}
