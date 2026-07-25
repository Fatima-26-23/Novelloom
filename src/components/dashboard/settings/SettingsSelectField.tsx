import { ChevronDownIcon } from "../icons";

type SettingsSelectFieldProps = {
  id: string;
  label: string;
  defaultValue: string;
  options: string[];
};

export function SettingsSelectField({ id, label, defaultValue, options }: SettingsSelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-body">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          defaultValue={defaultValue}
          className="h-11 w-full appearance-none rounded-lg border border-card-border bg-white px-3.5 pr-9 text-xs text-heading focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted" />
      </div>
    </div>
  );
}
