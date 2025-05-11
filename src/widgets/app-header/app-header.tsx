"use client";

import Link from "next/link";
import { authContext } from "shared/lib/auth";
import { Avatar, Box, Typography, Button } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { AuthUserMenuList } from "features/auth/ui";

export const AppHeader = () => {
	const { user, isLoading } = authContext();

	return (
		<AppBar
			elevation={3}
			sx={{
				backgroundColor: "#1f2937",
				color: "white",
				px: 4,
				py: 0.3
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				{/* Логотип / Название */}
				<Typography variant="h6" fontWeight="bold">
					es-trello
				</Typography>

				{/* Правая часть */}

				{user ? (
					<AuthUserMenuList />
				) : (
					// (
					// 	<Box display="flex" alignItems="center" gap={2}>
					// 		<Typography variant="body1">{user.name || user.email}</Typography>
					// 		<Avatar
					// 			src={user.avatarUrl || undefined}
					// 			alt={user.name || user.email}
					// 			sx={{ width: 32, height: 32 }}
					// 		/>
					// 	</Box>
					// )
					<Link href="/auth" passHref>
						<Button
							variant="outlined"
							sx={{ color: "white", borderColor: "white" }}
						>
							Войти
						</Button>
					</Link>
				)}
			</Toolbar>
		</AppBar>
	);
};
