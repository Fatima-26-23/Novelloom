import { AuthBrandingPanel } from "./AuthBrandingPanel";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-page-bg">
      <AuthBrandingPanel className="hidden lg:flex lg:w-1/2 lg:shrink-0" />

      <div className="flex flex-1 flex-col">
        <AuthBrandingPanel compact className="lg:hidden" />

        <div className="flex flex-1 items-center justify-center px-6 py-10 md:px-10 lg:px-16">
          {children}
        </div>
      </div>
    </div>
  );
}
