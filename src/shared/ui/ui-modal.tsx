"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Card, CardContent } from "@mui/material";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	size?: "small" | "medium" | "large" | "full";
}

export const UiModal = ({
	isOpen,
	onClose,
	children,
	size = "medium"
}: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"; // Отключаем скролл
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpen]);

	if (!isOpen) return null;

	const sizeClasses = {
		small: "w-[300px]",
		medium: "w-[500px]",
		large: "w-[800px]",
		full: "w-full"
	};

	return createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
			<Card className={`p-6 relative ${sizeClasses[size]}`}>
				<button
					className="absolute top-2 right-2 text-gray-600 hover:text-black"
					onClick={onClose}
				>
					✖
				</button>
				<CardContent>{children}</CardContent>
			</Card>
		</div>,
		document.getElementById("modal-root") as HTMLElement
	);
};
