import { Button, TextField } from "@mui/material";
import { User } from "../model";
import { useState } from "react";

interface UserFormProps {
	onSubmit: (data: { name: string; email: string; password?: string }) => void;
	onClose: () => void;
	initialData?: User | null;
	isLoading?: boolean;
}

export const UserForm = ({
	onSubmit,
	initialData,
	isLoading
}: UserFormProps) => {
	const [name, setName] = useState(initialData?.name || "");
	const [email, setEmail] = useState(initialData?.email || "");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ name, email, password: initialData ? undefined : password });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<TextField
				label="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<TextField
				label="Email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			{!initialData && (
				<TextField
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			)}
			{/* {error && <p className="text-red-500">{error}</p>} */}
			<Button type="submit" variant="contained" color="primary">
				{isLoading ? "Saving..." : initialData ? "Save Changes" : "Create User"}
			</Button>
		</form>
	);
};
