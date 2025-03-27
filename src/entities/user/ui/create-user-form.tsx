import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { apiUsers } from "../api";

interface CreateUserFormProps {
	onClose: () => void;
}

export const CreateUserForm = ({ onClose }: CreateUserFormProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			await apiUsers.createUser(name, email, password);
			onClose();
		} catch (error) {
			console.error("Ошибка при создании пользователя:", error);
		} finally {
			setLoading(false);
		}
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
			<TextField
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			{error && <p className="text-red-500">{error}</p>}
			<Button type="submit" variant="contained" color="primary">
				{loading ? "Creating..." : "Create User"}
			</Button>
		</form>
	);
};
