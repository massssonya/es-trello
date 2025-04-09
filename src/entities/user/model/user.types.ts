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
	users: User[];
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
