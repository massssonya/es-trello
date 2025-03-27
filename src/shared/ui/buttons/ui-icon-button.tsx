import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	label: string;
}

export const UiIconButton = ({
	icon,
	label,
	className = "",
	...props
}: IconButtonProps) => {
	return (
		<button
			className={`h-32 w-full flex flex-col items-center justify-center text-white text-xl uppercase bg-teal-500 rounded hover:bg-teal-600 hover:shadow-lg hover:text-2xl duration-200 ${className}`}
			{...props}
		>
			<span className="text-4xl">{icon}</span>
			<span>{label}</span>
		</button>
	);
};
