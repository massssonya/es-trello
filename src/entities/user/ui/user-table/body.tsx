import { TableBody, TableCell, TableRow } from "@mui/material";
import { UserWithoutPassword } from "entities/user/types";
import { dateUtils } from "shared/utils";

interface UserTableBodyProps {
	users: UserWithoutPassword[];
	onRowClick: (user: UserWithoutPassword) => void;
	emptyRows: number;
	columns: { id: keyof UserWithoutPassword; label: string }[];
}

export const UserTableBody = ({
	users,
	onRowClick,
	emptyRows,
	columns
}: UserTableBodyProps) => (
	<TableBody>
		{users.map((user) => (
			<TableRow
				key={user.id}
				hover
				onClick={() => onRowClick(user)}
				className="cursor-pointer h-[60px]"
			>
				{columns.map((column) => {
					let value = user[column.id];
					if (column.id === "createdAt" || column.id === "updatedAt") {
						value = dateUtils.formatDate(value as Date).toString();
					} else value = value.toString();

					return <TableCell key={column.id}>{value}</TableCell>;
				})}
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
