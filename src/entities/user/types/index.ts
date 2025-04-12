export type User = {
	id: string;
	email: string;
	passwordHash: string;
	name: string;
	avatarUrl: string;
	role: UserRole;
	createdAt: Date;
	updatedAt: Date;
};

export interface UsersResponse {
	users: UserWithoutPassword[];
	total: number;
	page: number;
	limit: number;
  }

export enum UserRole {
	ADMIN = "ADMIN",
	SUPER_ADMIN = "SUPER_ADMIN",
	USER = "USER",
	GUEST = "GUEST"
}

export type UserWithoutPassword = Omit<User, "passwordHash">;

export type CreateUserRequest = Pick<User, "name" | "email"> & {
	password: string;
};

export type UpdateUserRequest = Omit<
	Partial<User>,
	"id" | "createdAt" | "updatedAt" | "passwordHash"
>;
