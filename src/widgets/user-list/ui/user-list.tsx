import { Alert, CircularProgress, Paper } from "@mui/material";
import { useUsers } from "../model/useUsers";
import { useUpdateUser } from "features/users/update-user/model";
import { UpdateUserForm } from "features/users/update-user/ui";
import { UserTable } from "entities/user/ui/user-table/user-table";
import { UiModal } from "shared/ui";
import { useUsersTableList } from "../hooks";

export const UserList = () => {
	const {
		// hideColumn,
		// showColumn,
		// resetColumns,
		// order,
		// orderBy,
		page,
		setPage,
		rowsPerPage,
		setRowsPerPage,
		visibleColumns
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
			<UserTable
				users={data?.users || []}
				// order={order}
				// orderBy={orderBy}
				// onRequestSort={handleSort}
				onRowClick={openModal}
				totalRows={data?.total || 0}
				rowsPerPage={rowsPerPage}
				setPage={setPage}
				setRowsPerPage={setRowsPerPage}
				currentPage={page}
				columns={visibleColumns}
			/>
			<UiModal isOpen={isModalOpen} onClose={closeModal} size="medium">
				{selectedUser && (
					<UpdateUserForm user={selectedUser} onSubmit={updateUser} />
				)}
			</UiModal>
		</Paper>
	);
};
