import { PersonAdd } from "@mui/icons-material";
import { CreateUserForm } from "entities/user/ui/create-user-form";
import { useState } from "react";
import { UiModal } from "shared/ui";
import { UiIconButton } from "shared/ui/buttons/ui-icon-button";

export const CreateUserButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<UiIconButton
				icon={<PersonAdd sx={{ fontSize: "inherit" }} />}
				label="Create user"
				onClick={() => setIsOpen(true)}
			/>
			<UiModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<CreateUserForm onClose={() => setIsOpen(false)} />
			</UiModal>
		</>
	);
};
