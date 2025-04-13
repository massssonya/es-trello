import { Alert, CircularProgress, Paper } from "@mui/material";

import { useUsersTableList } from "../hooks";
import { useUsers } from "../model";
import { UserTable } from "./user-table";
import { useUpdateUser } from "features/users/update-user/model";
import { UpdateUserForm } from "features/users/update-user/ui";
import { FilterColumns } from "features/users/user-list/ui/filter-user-list-col";
import { UiModal } from "shared/ui";

export const UserList = () => {
	const {
		filterColumns,
		setFilterColumns,
		toggleColumn,
		page,
		setPage,
		rowsPerPage,
		setRowsPerPage,
		visibleColumns,
		userColumns
	} = useUsersTableList();

	const { data, isLoading, error } = useUsers({
		page: page + 1,
		limit: rowsPerPage
	});

	const { isModalOpen, selectedUser, openModal, closeModal, updateUser } =
		useUpdateUser();

	if (isLoading) return <CircularProgress />;
	if (error)
		return <Alert severity="error">Ошибка загрузки пользователей</Alert>;

	// const [order, setOrder] = useState<"asc" | "desc">("asc");
	// const [orderBy, setOrderBy] = useState<string>("name");
	// const handleSort = (property: string) => {
	// 	const isAsc = orderBy === property && order === "asc";
	// 	setOrder(isAsc ? "desc" : "asc");
	// 	setOrderBy(property);
	// };
	// const sortedUsers = data?.users?.slice().sort((a, b) =>
	// 	order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
	// ) || [];

	return (
		<Paper sx={{ width: "100%", mb: 2 }}>
			<FilterColumns
				columns={userColumns}
				toggleColumn={toggleColumn}
				selectedColumns={filterColumns}
			/>
			<UserTable
				users={data?.users || []}
				setFilterColumns={setFilterColumns}
				onRowClick={openModal}
				totalRows={data?.total || 0}
				rowsPerPage={rowsPerPage}
				setPage={setPage}
				setRowsPerPage={setRowsPerPage}
				currentPage={page}
				filterColumns={filterColumns}
				visibleColumns={visibleColumns}
				toggleColumn={toggleColumn}
			/>
			<UiModal isOpen={isModalOpen} onClose={closeModal} size="medium">
				{selectedUser && (
					<UpdateUserForm user={selectedUser} onSubmit={updateUser} />
				)}
			</UiModal>
		</Paper>
	);
};
