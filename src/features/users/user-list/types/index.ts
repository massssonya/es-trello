import { UserWithoutPassword } from "entities/user/types";

export type UserTableColumn = {
	id: keyof UserWithoutPassword;
	label: string;
};
