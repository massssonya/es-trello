import {
	Paper,
	Table,
	TableContainer
} from "@mui/material";
import { UserWithoutPassword } from "../../../../../entities/user/types";
import { UserTableHead } from "./header";
import { UserTableBody } from "./body";
import { UserTableFooter } from "./footer";

interface UserTableProps {
	users: UserWithoutPassword[];
	toggleColumn: (id: keyof UserWithoutPassword) => void;
	onRowClick: (user: UserWithoutPassword) => void;
	totalRows: number;
	rowsPerPage: number;
	currentPage: number;
	setPage: (page: number) => void;
	setRowsPerPage: (rowsPerPage: number) => void;
	filterColumns: (keyof UserWithoutPassword)[];
	visibleColumns: { id: keyof UserWithoutPassword; label: string }[];
	setFilterColumns: (columns: (keyof UserWithoutPassword)[]) => void;
}

export const UserTable = ({
	users,
	onRowClick,
	totalRows,
	rowsPerPage,
	currentPage,
	setPage,
	setRowsPerPage,
	visibleColumns,
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
				<UserTableHead columns={visibleColumns} />
				<UserTableBody
					users={users}
					onRowClick={onRowClick}
					emptyRows={emptyRows}
					columns={visibleColumns}
				/>
				<UserTableFooter
					totalRows={totalRows}
					rowsPerPage={rowsPerPage}
					columns={visibleColumns}
					page={currentPage}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Table>
		</TableContainer>
	);
};
