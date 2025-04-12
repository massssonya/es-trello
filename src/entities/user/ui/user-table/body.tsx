import { TableBody, TableCell, TableRow } from "@mui/material";
import { UserWithoutPassword } from "entities/user/types";
import { dateUtils } from "shared/utils";

export const UserTableBody = ({
	users,
	onRowClick,
	emptyRows,
	columns
}: {
	users: UserWithoutPassword[];
	onRowClick: (user: UserWithoutPassword) => void;
	emptyRows: number;
	columns: { id: string; label: string }[];
}) => (
	<TableBody>
		{users.map((user) => (
			<TableRow
				key={user.id}
				hover
				onClick={() => onRowClick(user)}
				className="cursor-pointer h-[60px]"
			>
				<TableCell>{user.id}</TableCell>
				<TableCell>{user.name}</TableCell>
				<TableCell>{user.email}</TableCell>
				<TableCell>{user.role}</TableCell>
				<TableCell>{dateUtils.formatDate(user.createdAt as Date)}</TableCell>
				<TableCell>{dateUtils.formatDate(user.updatedAt as Date)}</TableCell>
			</TableRow>
		))}
		{emptyRows > 0 &&
			Array.from({ length: emptyRows }).map((_, index) => (
				<TableRow key={`empty-${index}`} className="h-[60px]">
					<TableCell colSpan={columns.length}></TableCell>
				</TableRow>
			))}
	</TableBody>
);
