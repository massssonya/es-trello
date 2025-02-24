"use client";

import clsx from "clsx";
import { Box } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
import { useResizeble } from "../lib/useResizeble";
import { UiButton } from "shared/ui";

export const Sidebar = () => {
	const { width, isResizing, handleMouseDown } = useResizeble();

	if (width === null) return null;

	return (
		<Box
			component="aside"
			className="h-screen bg-primary text-white flex flex-col items-center p-4 transition-all relative"
			style={{
				width,
				height: "100vh"
			}}
		>
			<nav className="flex flex-col gap-4 w-full font-sans text-current">
				<UiButton
					className="!min-w-0 w-full !p-2"
					sx={{
						justifyContent: width > 100 ? "flex-start" : "center",
						whiteSpace: "nowrap"
					}}
				>
					<Home sx={{ minWidth: "24px" }} />
					{width > 100 && <span className="ml-2">Dashboard</span>}
				</UiButton>
				<UiButton
					className="!min-w-0 w-full !p-2"
					sx={{
						justifyContent: width > 100 ? "flex-start" : "center",
						whiteSpace: "nowrap"
					}}
				>
					<Settings sx={{ minWidth: "24px" }} />
					{width > 150 && <span className="ml-2">Settings</span>}
				</UiButton>
			</nav>

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
