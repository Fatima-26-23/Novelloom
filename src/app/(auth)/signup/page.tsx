import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthFooterText } from "@/components/auth/AuthFooterText";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { SocialAuthSection } from "@/components/auth/SocialAuthSection";

export const metadata: Metadata = {
  title: "Sign Up — Novelloom",
  description: "Create your Novelloom account and start analyzing novels with AI.",
};

export default function SignUpPage() {
  return (
    <AuthCard>
      <AuthTabs activeTab="signup" />
      <SignUpForm />
      <SocialAuthSection />
      <AuthFooterText mode="signup" />
    </AuthCard>
  );
}
