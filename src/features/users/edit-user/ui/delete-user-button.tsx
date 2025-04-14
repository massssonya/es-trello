import { Button } from "@mui/material";

export const DeleteUserButton = ({
	onDelete,
	isPending,
	isError
}: {
	onDelete: () => void;
	isPending: boolean;
	isError: boolean;
}) => {
	return (
		<Button
			variant="outlined"
			color="error"
			disabled={isPending}
			onClick={onDelete}
		>
			Удалить пользователя
		</Button>
	);
};
