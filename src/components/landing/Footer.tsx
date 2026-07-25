import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-white pb-8 pt-[33px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-brand">
              <Image
                src="/images/landing/logo-icon-sm.svg"
                alt=""
                width={13}
                height={12}
                aria-hidden
              />
            </div>
            <span className="font-heading text-xl font-bold text-brand">
              Novelloom
            </span>
          </div>
          <p className="text-xs font-semibold tracking-[0.36px] text-muted">
            © 2026 Novelloom AI. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-[0.36px] text-muted transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
