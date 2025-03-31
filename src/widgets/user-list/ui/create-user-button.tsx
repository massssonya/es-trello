import { PersonAdd } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CreateUserForm } from "features/users/create-user/ui";

import { useState } from "react";
import { UiModal } from "shared/ui";

export const CreateUserButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				variant="contained"
				startIcon={<PersonAdd />}
				onClick={() => setIsOpen(true)}
			>
				Create user
			</Button>
			<UiModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<CreateUserForm onClose={() => setIsOpen(false)} />
			</UiModal>
		</>
	);
};
