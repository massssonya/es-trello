import React from "react";

export const SidebarFooter = ({ isCollapsed }: { isCollapsed: boolean }) => {
    return (
        <div className={`p-2 ${isCollapsed ? "text-sm" : "text-lg"}`}>
            Footer
        </div>
    );
};
