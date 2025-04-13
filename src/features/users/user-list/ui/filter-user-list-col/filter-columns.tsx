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
import { useState } from "react";

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

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
  ];

export const FilterColumns = () => {
	const [personName, setPersonName] = useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value }
		} = event;
		setPersonName(
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<FormControl sx={{ m: 1, width: 500 }}>
			<InputLabel id="demo-multiple-checkbox-label">Columns</InputLabel>
			<Select
				labelId="demo-multiple-checkbox-label"
				id="demo-multiple-checkbox"
				multiple
				value={personName}
				onChange={handleChange}
				input={<OutlinedInput label="Columns" />}
				renderValue={(selected) => selected.join(", ")}
				MenuProps={MenuProps}
			>
				{names.map((name) => (
					<MenuItem key={name} value={name}>
						<Checkbox checked={personName.includes(name)} />
						<ListItemText primary={name} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
