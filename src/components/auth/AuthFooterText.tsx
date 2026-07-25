import Link from "next/link";

type AuthFooterTextProps = {
  mode: "login" | "signup";
};

export function AuthFooterText({ mode }: AuthFooterTextProps) {
  if (mode === "signup") {
    return (
      <p className="mt-8 text-center text-xs leading-4 text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand hover:underline">
          Log in
        </Link>
      </p>
    );
  }

  return (
    <p className="mt-8 text-center text-xs leading-4 text-muted">
      Don&apos;t have an account?{" "}
      <Link href="/signup" className="font-semibold text-brand hover:underline">
        Sign up
      </Link>
    </p>
  );
}
