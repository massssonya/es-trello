import React from "react";
import { SidebarNav } from "./sidebar-nav";

export const SidebarBody = ({ width }: { width: number }) => {
    return (
        <div className="flex-grow w-full">
			<SidebarNav width={width} />
        </div>
    );
};
