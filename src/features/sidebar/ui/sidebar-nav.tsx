import Link from "next/link";
import {
	Home,
	Settings,
	Dashboard,
	TaskAlt,
	Group,
	AdminPanelSettings
} from "@mui/icons-material";
import { UiButton } from "shared/ui";

interface NavItem {
	icon: React.ReactNode;
	label: string;
	href: string;
	minWidth: number;
}

const navItems: NavItem[] = [
	{
		icon: <Home sx={{ minWidth: "24px" }} />,
		label: "Dashboard",
		href: "/",
		minWidth: 100
	},
	{
		icon: <Dashboard sx={{ minWidth: "24px" }} />,
		label: "Boards",
		href: "/boards",
		minWidth: 100
	},
	{
		icon: <TaskAlt sx={{ minWidth: "24px" }} />,
		label: "My tasks",
		href: "/tasks",
		minWidth: 100
	},
	{
		icon: <Group sx={{ minWidth: "24px" }} />,
		label: "Teams",
		href: "/teams",
		minWidth: 100
	},
	{
		icon: <Settings sx={{ minWidth: "24px" }} />,
		label: "Settings",
		href: "/settings",
		minWidth: 100
	},
	{
		icon: <AdminPanelSettings sx={{ minWidth: "24px" }} />,
		label: "Admin",
		href: "/admin",
		minWidth: 100
	}
];

export const SidebarNav = ({ width }: { width: number }) => {
	return (
		<nav className="flex flex-col gap-4 font-sans text-current">
			{navItems.map(({ icon, label, href, minWidth }) => (
				<Link key={label} href={href} passHref legacyBehavior>
					<UiButton
						className="w-1/2"
						component="a"
						sx={{
							justifyContent: width > minWidth ? "flex-start" : "center",
							whiteSpace: "nowrap",
							color: "white",
							":hover": { background: "#6B8784" }
						}}
					>
						{icon}
						{width > minWidth && <span className="ml-2">{label}</span>}
					</UiButton>
				</Link>
			))}
		</nav>
	);
};
