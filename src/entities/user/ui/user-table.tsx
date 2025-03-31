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
	totalRows: number;
	rowsPerPage: number;
	currentPage: number;
}

export const UserTable = ({
	users,
	order,
	orderBy,
	onRequestSort,
	onRowClick,
	totalRows,
	rowsPerPage,
	currentPage
}: UserTableProps) => {
	const columns: { id: keyof User; label: string }[] = [
		{ id: "id", label: "ID" },
		{ id: "name", label: "Name" },
		{ id: "email", label: "Email" },
		{ id: "role", label: "Role" }
	];

	// Если это последняя страница, добавляем пустые строки
	const shouldFillEmptyRows = totalRows > 5 ? currentPage > 0 : true;

	const emptyRows =
		shouldFillEmptyRows && users.length < rowsPerPage
			? rowsPerPage - users.length
			: 0;

	return (
		<TableContainer component={Paper} className="max-h-[400px] overflow-y-auto">
			<Table stickyHeader>
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
						</TableRow>
					))}
					{emptyRows > 0 &&
						Array.from({ length: emptyRows }).map((_, index) => (
							<TableRow key={`empty-${index}`} className="h-[60px]">
								<TableCell colSpan={columns.length}></TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
