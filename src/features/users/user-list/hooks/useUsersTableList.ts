import { useMemo, useState } from "react";
import { UserWithoutPassword } from "entities/user/types";
import { UserTableColumn } from "../types";


const userColumns: UserTableColumn[] = [
	{ id: "id", label: "ID" },
	{ id: "name", label: "Name" },
	{ id: "email", label: "Email" },
	{ id: "role", label: "Role" },
	{ id: "createdAt", label: "Created At" },
	{ id: "updatedAt", label: "Updated At" }
];

export const useUsersTableList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [filterColumns, setFilterColumns] = useState<string[]>(
		userColumns.map((col) => col.id)
	);

	const visibleColumns = useMemo(
		() => userColumns.filter((col) => filterColumns.includes(col.id)),
		[filterColumns]
	);

	const toggleColumn = (id: string) => {
		setFilterColumns((prev) =>
			prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
		);
	};

	return {
		page,
		setPage,
		rowsPerPage,
		setRowsPerPage,
		visibleColumns,
		toggleColumn,
		filterColumns,
		setFilterColumns,
		userColumns
	};
};
