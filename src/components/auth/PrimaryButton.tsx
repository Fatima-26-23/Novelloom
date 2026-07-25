import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
};

export function PrimaryButton({
  children,
  type = "submit",
  className,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "flex h-[46px] w-full items-center justify-center rounded-full bg-brand text-xs font-bold leading-5 text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90",
        className,
      )}
    >
      {children}
    </button>
  );
}
