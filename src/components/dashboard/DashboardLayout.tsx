import { Sidebar } from "./Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-page-bg">
      <Sidebar />
      <main className="flex flex-1 flex-col px-6 py-8 lg:px-8 lg:py-10">
        {children}
      </main>
    </div>
  );
}
