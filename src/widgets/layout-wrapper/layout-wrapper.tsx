"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "features/sidebar";
import { AppHeader } from "widgets/app-header";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showSidebar = pathname !== "/auth";

  return (
	<>
	{/* <CustomCursor /> */}
    <div className="flex min-h-screen">
		<AppHeader />
      {showSidebar && <Sidebar />}
      <main className="flex-1 w-full">{children}</main>
    </div>
	</>
  );
};
