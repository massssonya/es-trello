import { Button, ButtonProps } from "@mui/material";
import clsx from "clsx";

interface UiButtonProps extends ButtonProps {
	className?: string;
}

export const UiButton = ({ children, className, ...props }: UiButtonProps) => {
	return (
		<Button
			className={clsx("!min-w-0 w-full !p-2", className)}
			sx={{
				color: "inherit",
				overflow: "hidden",
				":hover": { background: "#6B8784" },
				...props.sx
			}}
			{...props}
		>
			{children}
		</Button>
	);
};
