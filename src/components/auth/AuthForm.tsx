type AuthFormProps = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
}
