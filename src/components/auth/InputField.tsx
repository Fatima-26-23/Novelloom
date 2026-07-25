import { cn } from "@/lib/utils";

type InputFieldProps = {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
  name?: string;
  required?: boolean;
  className?: string;
};

export function InputField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  name,
  required,
  className,
}: InputFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="text-xs font-semibold leading-4 text-body"
      >
        {label}
      </label>
      <input
        id={id}
        name={name ?? id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-[48px] w-full rounded-xl border border-border bg-white px-4 text-sm leading-5 text-heading placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
