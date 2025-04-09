import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useCreateUser } from "../model";

interface CreateUserFormProps {
	onClose: () => void;
}

export const CreateUserForm = ({ onClose }: CreateUserFormProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { createUser, isLoading, error } = useCreateUser(onClose);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		createUser({ name, email, password });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<TextField
				label="Имя"
				value={name}
				onChange={(e) => setName(e.target.value)}
				// error={!name.trim()}
				// helperText={!name.trim() ? "Имя не может быть пустым" : ""}
				required
			/>
			<TextField
				label="Email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				// error={!/^\S+@\S+\.\S+$/.test(email)}
				// helperText={!/^\S+@\S+\.\S+$/.test(email) ? "Некорректный email" : ""}
				required
			/>
			<TextField
				label="Пароль"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				// error={password.length > 0 && password.length < 6}
				// helperText={password.length > 0 && password.length < 6 ? "Пароль должен быть не менее 6 символов" : ""}
				required
			/>
			{error && <p className="text-red-500">{error}</p>}
			<Button type="submit" variant="contained" color="primary" disabled={isLoading}>
				{isLoading ? "Creating..." : "Create User"}
			</Button>
		</form>
	);
};
