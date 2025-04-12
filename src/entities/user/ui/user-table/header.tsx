import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

export const UserTableHead = ({
	// order,
	// orderBy,
	// onRequestSort,
	columns
}: {
	// order: "asc" | "desc";
	// orderBy: string;
	// onRequestSort: (property: string) => void;
	columns: { id: string; label: string }[];
}) => (
	<TableHead>
		<TableRow>
			{columns.map((column) => (
				<TableCell
					key={column.id}
					// sortDirection={orderBy === column.id ? order : false}
				>
					<TableSortLabel
						// active={orderBy === column.id}
						// direction={orderBy === column.id ? order : "asc"}
						// onClick={() => onRequestSort(column.id)}
					>
						{column.label}
					</TableSortLabel>
				</TableCell>
			))}
		</TableRow>
	</TableHead>
);
