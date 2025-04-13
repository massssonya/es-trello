import { PersonSearch } from "@mui/icons-material";
import { useState } from "react";
import { UserList } from "features/users/user-list/ui";
import { UiIconButton, UiModal } from "shared/ui";


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
