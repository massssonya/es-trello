import { Alert, CircularProgress, Paper } from "@mui/material";
import { useState } from "react";
import { useUsers } from "../model/useUsers";
import { useUpdateUser } from "features/users/update-user/model";
import { UiModal } from "shared/ui";
import { UpdateUserForm } from "features/users/update-user/ui";
import { UserTableSection } from "./user-table-section";

export const UserList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState<"asc" | "desc">("asc");
	const [orderBy, setOrderBy] = useState<string>("name");

	const { data, isLoading, error } = useUsers({
		page: page + 1,
		limit: rowsPerPage
	});

	const { isModalOpen, selectedUser, openModal, closeModal, updateUser } = useUpdateUser();

	const handleSort = (property: string) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	if (isLoading) return <CircularProgress />;
	if (error) return <Alert severity="error">Ошибка загрузки пользователей</Alert>;

	const sortedUsers = data?.users?.slice().sort((a, b) =>
		order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
	) || [];

	return (
		<Paper sx={{ width: "100%", mb: 2 }}>
			<UserTableSection
				users={sortedUsers}
				order={order}
				orderBy={orderBy}
				onRequestSort={handleSort}
				onRowClick={openModal}
				totalRows={data?.total || 0}
				page={page}
				rowsPerPage={rowsPerPage}
				setPage={setPage}
				setRowsPerPage={setRowsPerPage}
			/>
			<UiModal isOpen={isModalOpen} onClose={closeModal} size="medium">
				{selectedUser && (
					<UpdateUserForm
						user={selectedUser}
						onSubmit={updateUser}
					/>
				)}
			</UiModal>
		</Paper>
	);
};
