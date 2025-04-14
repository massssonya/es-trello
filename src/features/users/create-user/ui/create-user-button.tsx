import { PersonAdd } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CreateUserForm } from "./create-user-form";
import { UiModal } from "shared/ui";
import { useModal } from "shared/lib/hooks";



export const CreateUserButton = () => {
	const {close, open, isOpen} = useModal();
	return (
		<>
			<Button
				variant="contained"
				startIcon={<PersonAdd />}
				onClick={open}
			>
				Create user
			</Button>
			<UiModal isOpen={isOpen} onClose={close}>
				<CreateUserForm onClose={close} />
			</UiModal>
		</>
	);
};
