"use client";

import { PageLayout } from "shared/ui";
import { Container, Typography } from "@mui/material";
import { CreateUserButton } from "features/create-users";
import { GetUsersButton } from "features/get-users";

export default function Admin() {
	return (
		<PageLayout>
			<PageLayout.Header>
				<Typography variant="h5">Admin Panel</Typography>
			</PageLayout.Header>
			<PageLayout.Body>
				<Container
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr 1fr",
						gap: 2
					}}
				>
					<CreateUserButton />
					<GetUsersButton />
				</Container>
			</PageLayout.Body>
			<PageLayout.Footer>
				<p>Footer</p>
			</PageLayout.Footer>
		</PageLayout>
	);
}
