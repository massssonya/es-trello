import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { UserTableColumn } from "../../types";
import { FilterColumns } from "../filter-user-list-col";

const ITEM_HEIGHT = 48;

type MenuUserListProps = {
	className?: string;
	columns: UserTableColumn[];
	toggleColumn: (id: string) => void;
	selectedColumns: string[];
};

export function MenuUserList({
	className,
	columns,
	toggleColumn,
	selectedColumns
}: MenuUserListProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={className}>
			<IconButton
				aria-label="more"
				id="user-list-menu-button"
				aria-controls={open ? "user-list-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="user-list-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						style: {
							maxHeight: ITEM_HEIGHT * 4.5,
							width: "50ch"
						}
					}
				}}
			>
				<FilterColumns
					columns={columns}
					toggleColumn={toggleColumn}
					selectedColumns={selectedColumns}
				/>

			</Menu>
		</div>
	);
}
