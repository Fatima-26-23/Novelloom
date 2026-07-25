import { SocialLoginButton } from "./SocialLoginButton";

export function SocialAuthSection() {
  return (
    <div className="mt-6">
      <div className="relative mb-6">
        <div className="h-px w-full bg-border" aria-hidden />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs leading-4 text-muted">
          Or continue with
        </span>
      </div>

      <div className="flex gap-4">
        <SocialLoginButton provider="google" label="Google" />
        <SocialLoginButton provider="apple" label="Apple" />
      </div>
    </div>
  );
}
