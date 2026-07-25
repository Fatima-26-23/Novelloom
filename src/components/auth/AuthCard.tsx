type AuthCardProps = {
  children: React.ReactNode;
};

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="relative w-full max-w-[420px] rounded-2xl border border-border/30 bg-white p-8 shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      {children}
    </div>
  );
}
