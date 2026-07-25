import { InputField } from "./InputField";

type PasswordInputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  name?: string;
  required?: boolean;
};

export function PasswordInput({
  id = "password",
  label = "Password",
  placeholder = "••••••••",
  autoComplete = "current-password",
  name = "password",
  required = true,
}: PasswordInputProps) {
  return (
    <InputField
      id={id}
      name={name}
      label={label}
      type="password"
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
    />
  );
}
