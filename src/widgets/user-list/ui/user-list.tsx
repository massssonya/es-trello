import { Alert, CircularProgress, Paper, TablePagination } from "@mui/material";
import { UserTable } from "entities/user/ui/user-table";
import { useUsers } from "../model/useUsers";
import { useState } from "react";
import { useUpdateUser } from "features/update-user/model";
import { UiModal } from "shared/ui";
import { UpdateUserForm } from "features/update-user/ui";

export const UserList = () => {
	const { data: users, isLoading, error } = useUsers();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState<"asc" | "desc">("asc");
	const [orderBy, setOrderBy] = useState<string>("name");

	const { isModalOpen, selectedUser, openModal, closeModal, updateUser } =
		useUpdateUser();

	const handleRequestSort = (property: string) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
	const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const sortedUsers = users
		? [...users]
				.sort((a, b) =>
					order === "asc"
						? a.name.localeCompare(b.name)
						: b.name.localeCompare(a.name)
				)
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
		: [];

	if (isLoading) return <CircularProgress />;
	if (error)
		return <Alert severity="error">Ошибка загрузки пользователей</Alert>;

	return (
		<Paper sx={{ width: "100%", mb: 2 }}>
			<UserTable
				users={sortedUsers}
				order={order}
				orderBy={orderBy}
				onRequestSort={handleRequestSort}
				onRowClick={openModal}
			/>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={users?.length ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<UiModal isOpen={isModalOpen} onClose={closeModal} size="medium">
				{selectedUser && (
					<UpdateUserForm
						name={selectedUser.name}
						email={selectedUser.email}
						onSubmit={updateUser}
					/>
				)}
			</UiModal>
		</Paper>
	);
};
