import { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import {
	UpdateUserRequest,
	UserRole,
	UserWithoutPassword
} from "entities/user/types";
import { DeleteUserButton } from "features/users/edit-user/ui/delete-user-button";

interface UpdateUserFormProps {
	user: UserWithoutPassword;
	onSubmit: (data: UpdateUserRequest) => void;
	onDelete: () => void;
	isPending: boolean;
	isError: boolean;
}

export const UpdateUserForm = ({
	user,
	onSubmit,
	onDelete,
	isPending,
	isError
}: UpdateUserFormProps) => {
	const [role, setRole] = useState<UserRole>(user.role);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			role
		};
		onSubmit(data);
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
				<MenuItem value="USER">USER</MenuItem>
				<MenuItem value="ADMIN">ADMIN</MenuItem>
				<MenuItem value="SUPER_ADMIN">SUPER_ADMIN</MenuItem>
				<MenuItem value="GUEST">GUEST</MenuItem>
			</Select>
			<Button variant="contained" color="primary" type="submit">
				Save Changes
			</Button>
			<DeleteUserButton
				onDelete={onDelete}
				isPending={isPending}
				isError={isError}
			/>
		</form>
	);
};
