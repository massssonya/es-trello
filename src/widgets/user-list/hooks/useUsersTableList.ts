import { useState } from "react";
import { UserWithoutPassword } from "entities/user/types";

export const userColumns: { id: keyof UserWithoutPassword; label: string }[] = [
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
	const [visibleColumns, setVisibleColumns] = useState(userColumns);

	const hideColumn = (id: keyof UserWithoutPassword) => {
		setVisibleColumns((cols) => cols.filter((col) => col.id !== id));
	};

	const showColumn = (id: keyof UserWithoutPassword) => {
		const column = userColumns.find((col) => col.id === id);
		if (column && !visibleColumns.some((c) => c.id === id)) {
			setVisibleColumns((cols) => [...cols, column]);
		}
	};

	const resetColumns = () => {
		setVisibleColumns(userColumns);
	};

	return {
		page,
		setPage,
		rowsPerPage,
		setRowsPerPage,
		visibleColumns,
		hideColumn,
		showColumn,
		resetColumns
	};
};
