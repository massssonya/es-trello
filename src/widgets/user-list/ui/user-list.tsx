import {
	Alert,
	ButtonGroup,
	CircularProgress,
	Paper,
	TablePagination
} from "@mui/material";
import { UserTable } from "entities/user/ui/user-table";
import { useUsers } from "../model/useUsers";
import { useState } from "react";
import { useUpdateUser } from "features/users/update-user/model";
import { UiModal } from "shared/ui";
import { UpdateUserForm } from "features/users/update-user/ui";
import { CreateUserButton } from "./create-user-button";

export const UserList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const { data, isLoading, error } = useUsers({
		page: page + 1,
		limit: rowsPerPage
	});
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

	const sortedUsers = data?.users
		? data?.users.sort((a, b) =>
				order === "asc"
					? a.name.localeCompare(b.name)
					: b.name.localeCompare(a.name)
		  )
		: [];

	if (isLoading) return <CircularProgress />;
	if (error)
		return <Alert severity="error">Ошибка загрузки пользователей</Alert>;

	return (
		<Paper sx={{ width: "100%", mb: 2 }}>
			<UserTable
				users={sortedUsers || []}
				order={order}
				orderBy={orderBy}
				onRequestSort={handleRequestSort}
				onRowClick={openModal}
				currentPage={page}
				rowsPerPage={rowsPerPage}
				totalRows={data?.total || 0}
			/>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={data?.total || 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<ButtonGroup
				className="flex justify-end gap-2"
				sx={{ margin: "16px", }}
			>
				<CreateUserButton />
			</ButtonGroup>
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
