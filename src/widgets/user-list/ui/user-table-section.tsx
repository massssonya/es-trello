import {
	ButtonGroup,
	TablePagination
} from "@mui/material";
import { UserTable } from "entities/user/ui/user-table";
import { CreateUserButton } from "./create-user-button";
import { UserWithoutPassword } from "entities/user/types";

interface Props {
	users: UserWithoutPassword[];
	order: "asc" | "desc";
	orderBy: string;
	onRequestSort: (property: string) => void;
	onRowClick: (user: UserWithoutPassword) => void;
	totalRows: number;
	page: number;
	rowsPerPage: number;
	setPage: (page: number) => void;
	setRowsPerPage: (rowsPerPage: number) => void;
}

export const UserTableSection = ({
	users,
	order,
	orderBy,
	onRequestSort,
	onRowClick,
	totalRows,
	page,
	rowsPerPage,
	setPage,
	setRowsPerPage
}: Props) => {
	const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
	const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<UserTable
				users={users}
				order={order}
				orderBy={orderBy}
				onRequestSort={onRequestSort}
				onRowClick={onRowClick}
				currentPage={page}
				rowsPerPage={rowsPerPage}
				totalRows={totalRows}
			/>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={totalRows}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<ButtonGroup className="flex justify-end gap-2" sx={{ margin: "16px" }}>
				<CreateUserButton />
			</ButtonGroup>
		</>
	);
};
