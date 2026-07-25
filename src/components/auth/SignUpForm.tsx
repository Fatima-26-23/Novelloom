"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthForm } from "./AuthForm";
import { CheckboxField } from "./CheckboxField";
import { InputField } from "./InputField";
import { PasswordInput } from "./PasswordInput";
import { PrimaryButton } from "./PrimaryButton";

export function SignUpForm() {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <InputField
        id="fullName"
        label="Full Name"
        placeholder="Leo Tolstoy"
        autoComplete="name"
        required
      />
      <InputField
        id="email"
        label="Email Address"
        type="email"
        placeholder="leo@novelloom.ai"
        autoComplete="email"
        required
      />
      <PasswordInput
        autoComplete="new-password"
        name="password"
      />
      <CheckboxField
        id="terms"
        required
        label={
          <>
            I agree to the{" "}
            <Link href="#" className="font-semibold text-brand hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-semibold text-brand hover:underline">
              Privacy Policy
            </Link>
          </>
        }
      />
      <div className="pt-1">
        <PrimaryButton>Create Account</PrimaryButton>
      </div>
    </AuthForm>
  );
}
