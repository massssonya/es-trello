import React from "react";
import { SidebarLogo } from "./sidebar-logo";

export const SidebarHeader = ({ isCollapsed }: { isCollapsed: boolean }) => {
    return (
        <div className={`p-2 mb-2 ${isCollapsed ? "text-sm" : "text-lg"}`}>
            <SidebarLogo isCollapsed={isCollapsed} />
        </div>
    );
};
