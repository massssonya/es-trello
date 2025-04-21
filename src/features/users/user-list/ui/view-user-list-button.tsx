import { PersonSearch } from "@mui/icons-material";

import { UiIconButton, UiModal } from "shared/ui";
import { useModal } from "shared/lib/hooks";
import { UserList } from "./user-list";

export const ViewUserListButton = () => {
	const { close, open, isOpen } = useModal();
	return (
		<>
			<UiIconButton
				icon={<PersonSearch sx={{ fontSize: "inherit" }} />}
				label="Users"
				onClick={open}
			/>
			<UiModal isOpen={isOpen} onClose={close} size="full">
				<UserList />
			</UiModal>
		</>
	);
};
