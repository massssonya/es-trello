import { Alert, CircularProgress, Paper } from "@mui/material";

import { useUsersTableList } from "../hooks";
import { useGetUsers } from "../model";
import { UsersTable } from "./user-table";
import { useEditUser } from "features/users/edit-user/model";
import { UpdateUserForm } from "features/users/edit-user/ui";
import { FilterColumns } from "features/users/user-list/ui/filter-user-list-col";
import { UiModal } from "shared/ui";

export const UserList = () => {
	const {
		filterColumns,
		toggleColumn,
		page,
		setPage,
		rowsPerPage,
		setRowsPerPage,
		visibleColumns,
		userColumns
	} = useUsersTableList();

	const { data, isLoading, error } = useGetUsers({
		page: page + 1,
		limit: rowsPerPage
	});

	const {
		closeModal,
		openModal,
		isModalOpen,
		selectedUser,
		updateUser,
		deleteUser,
		isPending,
		isError
	} = useEditUser();

	if (isLoading) return <CircularProgress />;
	if (error)
		return <Alert severity="error">Ошибка загрузки пользователей</Alert>;

	return (
		<Paper sx={{ width: "100%", mb: 2 }}>
			<FilterColumns
				columns={userColumns}
				toggleColumn={toggleColumn}
				selectedColumns={filterColumns}
			/>
			<UsersTable
				users={data?.users || []}
				openEditUserForm={openModal}
				totalRows={data?.total || 0}
				rowsPerPage={rowsPerPage}
				setPage={setPage}
				setRowsPerPage={setRowsPerPage}
				currentPage={page}
				visibleColumns={visibleColumns}
			/>
			<UiModal isOpen={isModalOpen} onClose={closeModal} size="medium">
				{selectedUser && (
					<UpdateUserForm
						user={selectedUser}
						onSubmit={updateUser}
						onDelete={() => deleteUser(selectedUser.id)}
						isPending={isPending}
						isError={isError}
					/>
				)}
			</UiModal>
		</Paper>
	);
};
