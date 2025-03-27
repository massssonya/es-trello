import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel
} from "@mui/material";
import { User } from "../model";

interface UserTableProps {
	users: User[];
	order: "asc" | "desc";
	orderBy: string;
	onRequestSort: (property: string) => void;
	onRowClick: (user: User) => void;
}

export const UserTable = ({
	users,
	order,
	orderBy,
	onRequestSort,
	onRowClick
}: UserTableProps) => {
	const columns: { id: keyof User; label: string }[] = [
		{ id: "id", label: "ID" },
		{ id: "name", label: "Name" },
		{ id: "email", label: "Email" },
		{ id: "role", label: "Role" },
	];
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell
								key={column.id}
								sortDirection={orderBy === column.id ? order : false}
							>
								<TableSortLabel
									active={orderBy === column.id}
									direction={orderBy === column.id ? order : "asc"}
									onClick={() => onRequestSort(column.id)}
								>
									{column.label}
								</TableSortLabel>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id} hover onClick={() => onRowClick(user)}>
							<TableCell>{user.id}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.role}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
