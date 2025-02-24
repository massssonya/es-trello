import { Button, SxProps } from "@mui/material";
import clsx from "clsx";

export const UiButton = ({
	children,
	className,
	sx
}: {
	children: React.ReactNode;
	className?: string;
	sx?: SxProps;
}) => {
	return (
		<Button
			className={clsx("!min-w-0 w-full !p-2", className)}
			sx={{
				color: "inherit",
				overflow: "hidden",
				":hover": { background: "rgba(0, 0, 0, 0.05)" },
				...sx
			}}
		>
			{children}
		</Button>
	);
};
