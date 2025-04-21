"use client";

import { Button, TextField, Typography, Paper } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import * as styles from "./login-form.styles";
import { useLogin } from "../model/useLogin";

type LoginFormData = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const [form, setForm] = useState<LoginFormData>({
		email: "",
		password: ""
	});

	const { mutate: loginUser, isPending } = useLogin();

	const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginUser(form);
	};

	return (
		<Paper elevation={3} sx={styles.wrapperSx}>
			<Typography variant="h5" component="h1" textAlign="center">
				Вход в аккаунт
			</Typography>

			<form onSubmit={onSubmit}>
				<TextField
					label="Email"
					name="email"
					fullWidth
					margin="normal"
					value={form.email}
					onChange={changeForm}
				/>

				<TextField
					label="Пароль"
					name="password"
					type="password"
					fullWidth
					margin="normal"
					value={form.password}
					onChange={changeForm}
				/>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					sx={styles.submitButtonSx}
					disabled={isPending}
				>
					Войти
				</Button>
			</form>
		</Paper>
	);
};
