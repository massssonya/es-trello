"use client";

import { Container, Typography } from "@mui/material";
import { PageLayout } from "shared/ui";
import { ViewUserListButton } from "features/users/view-user-list";

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
					<ViewUserListButton />
				</Container>
			</PageLayout.Body>
			<PageLayout.Footer>
				<p>Footer</p>
			</PageLayout.Footer>
		</PageLayout>
	);
}
