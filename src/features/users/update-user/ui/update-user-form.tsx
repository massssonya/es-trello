import { Button, MenuItem, Select, TextField } from "@mui/material";
import { User, UserRole } from "entities/user/types";

import { useState } from "react";

interface UpdateUserFormProps {
	user: User;
	onSubmit: (name?: string, email?: string, role?: UserRole) => void;
}

export const UpdateUserForm = ({ user, onSubmit }: UpdateUserFormProps) => {
	const [role, setRole] = useState<UserRole>(user.role);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		onSubmit(
			formData.get("name") as string,
			formData.get("email") as string,
			role
		);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<TextField label="Name" name="name" defaultValue={user.name} />
			<TextField label="Email" name="email" defaultValue={user.email} />
			<Select
				label="Role"
				name="role"
				value={role}
				onChange={(e) => setRole(e.target.value as UserRole)}
			>
				<MenuItem value={"USER"}>USER</MenuItem>
				<MenuItem value="ADMIN">ADMIN</MenuItem>
				<MenuItem value="SUPER_ADMIN">SUPER_ADMIN</MenuItem>
				<MenuItem value="GUEST">GUEST</MenuItem>
			</Select>
			<Button variant="contained" color="primary" type="submit">
				Save Changes
			</Button>
		</form>
	);
};
