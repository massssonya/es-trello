import {
	Paper,
	Table,
	TableContainer,
} from "@mui/material";
import { UserWithoutPassword } from "../../types";
import { UserTableHead } from "./header";
import { UserTableBody } from "./body";
import { UserTableFooter } from "./footer";

interface UserTableProps {
	users: UserWithoutPassword[];
	// order: "asc" | "desc";
	// orderBy: string;
	columns: { id: keyof UserWithoutPassword; label: string }[];
	// onRequestSort: (property: string) => void;
	onRowClick: (user: UserWithoutPassword) => void;
	totalRows: number;
	rowsPerPage: number;
	currentPage: number;
	setPage: (page: number) => void;
	setRowsPerPage: (rowsPerPage: number) => void;
}

export const UserTable = ({
	users,
	// order,
	// orderBy,
	columns,
	// onRequestSort,
	onRowClick,
	totalRows,
	rowsPerPage,
	currentPage,
	setPage,
	setRowsPerPage
}: UserTableProps) => {
	const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
	const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};
	const shouldFillEmptyRows = totalRows > 5 ? currentPage > 0 : true;
	const emptyRows =
		shouldFillEmptyRows && users.length < rowsPerPage
			? rowsPerPage - users.length
			: 0;

	return (
		<TableContainer
			component={Paper}
			sx={{
				maxHeight: 500,
				overflow: "auto",
				position: "relative"
			}}
		>
			<Table stickyHeader>
				<UserTableHead
					// order={order}
					// orderBy={orderBy}
					// onRequestSort={onRequestSort}
					columns={columns}
				/>
				<UserTableBody
					users={users}
					onRowClick={onRowClick}
					emptyRows={emptyRows}
					columns={columns}
				/>
				<UserTableFooter
					totalRows={totalRows}
					rowsPerPage={rowsPerPage}
					columns={columns}
					page={currentPage}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Table>
		</TableContainer>
	);
};
