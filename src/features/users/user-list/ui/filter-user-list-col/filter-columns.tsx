import {
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent
} from "@mui/material";
import { UserTableColumn } from "../../types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 50
		}
	}
};

export const FilterColumns = ({
	columns,
	toggleColumn,
	selectedColumns
}: {
	columns: UserTableColumn[];
	toggleColumn: (id: string) => void;
	selectedColumns: string[];
}) => {
	const handleChange = (event: SelectChangeEvent<typeof selectedColumns>) => {
		const {
			target: { value }
		} = event;

		const selectedLabels = typeof value === "string" ? value.split(",") : value;

		columns.forEach((col) => {
			const isSelected = selectedColumns.includes(col.id);
			const shouldBeSelected = selectedLabels.includes(col.label);

			if (isSelected !== shouldBeSelected) {
				toggleColumn(col.id);
			}
		});
	};

	return (
		<FormControl sx={{ m: 1, width: 500 }}>
			<InputLabel id="columns-label">Columns</InputLabel>
			<Select
				labelId="columns-label"
				id="columns-select"
				multiple
				value={columns
					.filter((col) => selectedColumns.includes(col.id))
					.map((col) => col.label)}
				onChange={handleChange}
				input={<OutlinedInput label="Columns" />}
				renderValue={(selected) => selected.join(", ")}
				MenuProps={MenuProps}
			>
				{columns.map((col) => (
					<MenuItem key={col.id} value={col.label}>
						<Checkbox checked={selectedColumns.includes(col.id)} />
						<ListItemText primary={col.label} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
