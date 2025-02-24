import { useState } from "react";

export function useResizeble() {
	const [width, setWidth] = useState<number | null>(300);
	const [isResizing, setIsResizing] = useState(false);

	const minWidth = 80;
	const maxWidth = 300;

	const handleMouseDown = (event: React.MouseEvent) => {
		if (width === null) return;

		setIsResizing(true);
		const startX = event.clientX;
		const startWidth = width;

		const onMouseMove = (moveEvent: MouseEvent) => {
			const currentWidth = startWidth + moveEvent.clientX - startX;

			// Определяем пороговое значение (середину между min и max)
			const threshold = (minWidth + maxWidth) / 2;

			// Если текущая ширина меньше порогового значения, устанавливаем минимальную ширину
			// В противном случае устанавливаем максимальную
			const newWidth = currentWidth < threshold ? minWidth : maxWidth;

			setWidth(newWidth);
		};

		const onMouseUp = () => {
			setIsResizing(false);
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
	};

	return {
		handleMouseDown,
		isResizing,
		width
	};
}
