import { PersonSearch } from "@mui/icons-material";
import { useState } from "react";
import { UiModal } from "shared/ui";
import { UiIconButton } from "shared/ui/buttons/ui-icon-button";
import { UserList } from "widgets/user-list/ui";

export const ViewUserListButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<UiIconButton
				icon={<PersonSearch sx={{ fontSize: "inherit" }} />}
				label="Users"
				onClick={() => setIsOpen(true)}
			/>
			<UiModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="full">
				<UserList />
			</UiModal>
		</>
	);
};
