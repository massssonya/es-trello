"use client";

import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { authContext } from "shared/lib/auth";

export default function Home() {
	const { user, isLoading } = authContext();

	return (
		<Box sx={{ minHeight: "100vh", backgroundColor: "#f9fafb", pt: 16, }}>
			<Container maxWidth="md">
				<Stack spacing={4} alignItems="center" textAlign="center">
					<Typography variant="h3" fontWeight="bold">
						Добро пожаловать в <span style={{ color: "#1976d2" }}>es-trello</span>
					</Typography>

					<Typography variant="h6" color="text.secondary">
						Управляйте своими задачами, досками и командами эффективно
					</Typography>

					{!isLoading && (
						<>
							{user ? (
								<Stack spacing={2} direction="row">
									<Link href="/boards">
										<Button variant="contained" size="large">
											Перейти к доскам
										</Button>
									</Link>
								</Stack>
							) : (
								<Stack spacing={2} direction="row">
									<Link href="/auth">
										<Button variant="contained" size="large">
											Войти
										</Button>
									</Link>
									<Link href="/register">
										<Button variant="outlined" size="large">
											Зарегистрироваться
										</Button>
									</Link>
								</Stack>
							)}
						</>
					)}
				</Stack>
			</Container>
		</Box>
	);
}
