import { cn } from "@/lib/utils";

type CheckboxFieldProps = {
  id: string;
  name?: string;
  label: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function CheckboxField({
  id,
  name,
  label,
  required,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn("flex items-start gap-2 py-2", className)}>
      <input
        id={id}
        name={name ?? id}
        type="checkbox"
        required={required}
        className="mt-0.5 size-4 shrink-0 rounded border-border text-brand focus:ring-brand/20"
      />
      <label htmlFor={id} className="text-xs leading-4 text-body">
        {label}
      </label>
    </div>
  );
}
