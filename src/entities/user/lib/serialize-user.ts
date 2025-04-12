import { User, UserWithoutPassword } from "../types";

export function serializeUser(user: User): UserWithoutPassword {
	const safeUser = Object.fromEntries(
		Object.entries(user).filter(([key]) => !["passwordHash"].includes(key))
	) as UserWithoutPassword;
	return safeUser;
}

export function serializeUsers(users: User[]): UserWithoutPassword[] {
	return users.map(serializeUser);
}
