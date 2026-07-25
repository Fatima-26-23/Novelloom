import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthFooterText } from "@/components/auth/AuthFooterText";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { LoginForm } from "@/components/auth/LoginForm";
import { SocialAuthSection } from "@/components/auth/SocialAuthSection";

export const metadata: Metadata = {
  title: "Log In — Novelloom",
  description: "Sign in to your Novelloom account to analyze novels with AI.",
};

export default function LoginPage() {
  return (
    <AuthCard>
      <AuthTabs activeTab="login" />
      <LoginForm />
      <SocialAuthSection />
      <AuthFooterText mode="login" />
    </AuthCard>
  );
}
