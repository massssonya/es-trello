"use client";

import { useEffect, useState } from "react";

export const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "20px",
				height: "20px",
				borderRadius: "50%",
				backgroundColor: "#1976d2",
				transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
				pointerEvents: "none",
				zIndex: 9999,
			}}
		/>
	);
};
