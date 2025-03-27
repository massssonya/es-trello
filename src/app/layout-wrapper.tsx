"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "features/sidebar";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showSidebar = pathname !== "/login";

  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
};
