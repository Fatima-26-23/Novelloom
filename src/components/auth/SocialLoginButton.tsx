"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
type SocialLoginButtonProps = {
  provider: "google" | "apple";
  label: string;
  className?: string;
};

const iconMap = {
  google: "/images/auth/google.svg",
  apple: "/images/auth/apple.svg",
} as const;

export function SocialLoginButton({
  provider,
  label,
  className,
}: SocialLoginButtonProps) {
  return (
    <button
  type="button"
  onClick={() => {
    if (provider === "google") {
      signIn("google");
    }
  }}
  className={cn(
    "flex h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white text-xs font-medium leading-5 text-heading transition-colors hover:bg-page-bg",
    className,
  )}
>
      <Image src={iconMap[provider]} alt="" width={20} height={20} aria-hidden />
      {label}
    </button>
  );
}
