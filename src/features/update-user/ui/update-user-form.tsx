import { Button } from "@mui/material";

interface UpdateUserFormProps {
	name: string;
	email: string;
	onSubmit: (name: string, email: string) => void;
}

export const UpdateUserForm = ({ name, email, onSubmit }: UpdateUserFormProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		onSubmit(formData.get("name") as string, formData.get("email") as string);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input name="name" type="text" defaultValue={name} />
			</div>
			<div>
				<label>Email:</label>
				<input name="email" type="email" defaultValue={email} />
			</div>
			<Button variant="contained" color="primary" type="submit">
				Save Changes
			</Button>
		</form>
	);
};
