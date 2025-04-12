import { ButtonGroup, TableCell, TableFooter, TablePagination, TableRow } from "@mui/material";
import { CreateUserButton } from "widgets/user-list/ui/create-user-button";

export const UserTableFooter = ({
	totalRows,
	rowsPerPage,
	page,
	columns,
	handleChangePage,
	handleChangeRowsPerPage
}: {
	totalRows: number;
	rowsPerPage: number;
	page: number;
	columns: { id: string; label: string }[];
	handleChangePage: (event: unknown, newPage: number) => void;
	handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
	<TableFooter
		sx={{
			position: "sticky",
			bottom: 0,
			backgroundColor: "#fff",
			zIndex: 1
		}}
	>
		<TableRow>
			<TableCell colSpan={columns.length}>
				<div className="flex justify-between items-center px-4 py-2">
					<ButtonGroup className="gap-2">
						<CreateUserButton />
					</ButtonGroup>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={totalRows}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</div>
			</TableCell>
		</TableRow>
	</TableFooter>
);
