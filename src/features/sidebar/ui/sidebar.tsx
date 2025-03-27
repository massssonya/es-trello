"use client";

import clsx from "clsx";
import { Box } from "@mui/material";
import { useResizeble } from "../lib/useResizeble";
import { SidebarHeader } from "./sidebar-header";
import { SidebarBody } from "./sidebar-body";
import { SidebarFooter } from "./sidebar-footer";

export const Sidebar = () => {
	const { width, isResizing, handleMouseDown } = useResizeble();

	if (width === null) return null;

	return (
		<Box
			component="aside"
			className="h-screen bg-primary text-white flex flex-col items-center sx:p-4 p-2 transition-all relative"
			style={{
				width,
				height: "100vh"
			}}
		>
			<SidebarHeader isCollapsed={width < 100}  />

			<SidebarBody width={width} />
			<SidebarFooter isCollapsed={width < 100} />

			<div
				className={clsx(
					"absolute top-0 right-0 h-full w-2 cursor-ew-resize bg-gray-700 hover:bg-gray-500",
					isResizing && "bg-gray-500"
				)}
				onMouseDown={handleMouseDown}
			/>
		</Box>
	);
};
