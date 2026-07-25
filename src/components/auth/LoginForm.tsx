"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthForm } from "./AuthForm";
import { CheckboxField } from "./CheckboxField";
import { InputField } from "./InputField";
import { PasswordInput } from "./PasswordInput";
import { PrimaryButton } from "./PrimaryButton";

export function LoginForm() {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <InputField
        id="email"
        label="Email Address"
        type="email"
        placeholder="leo@novelloom.ai"
        autoComplete="email"
        required
      />
      <PasswordInput />
      <div className="flex items-center justify-between gap-4 py-2">
        <CheckboxField
          id="remember"
          label="Remember me"
          className="py-0"
        />
        <Link
          href="#"
          className="text-xs font-semibold leading-4 text-brand hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <div className="pt-1">
        <PrimaryButton>Log In</PrimaryButton>
      </div>
    </AuthForm>
  );
}
