import { Tornado } from "@mui/icons-material";

export const SidebarLogo = ({ isCollapsed }: { isCollapsed: boolean }) => {
	return (
		<div className="flex items-center gap-2 w-full px-3">
			<Tornado  className="text-4xl text-white" />
			<span
				className={`text-3xl font-bold text-secondary transition-all duration-300 ${
					isCollapsed ? "opacity-0 w-0" : "opacity-100 ml-2 w-auto"
				}`}
			>
				es<span className="text-accent">-Trello</span>
			</span>
		</div>
	);
};
