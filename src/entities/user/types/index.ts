import { User as PrismaUser } from "@prisma/client";

export type User = PrismaUser;

export type PublicUser = {
	id: string;
	email: string;
	name: string | null;
	createdAt: Date;
	updatedAt: Date;
	role: string;
	avatarUrl: string | null;
  };

export interface UsersResponse {
	users: UserWithoutPassword[];
	total: number;
	page: number;
	limit: number;
  }

export enum UserRole {
	USER = "USER",
	SUPER_ADMIN = "SUPER_ADMIN",
	ADMIN = "ADMIN",
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
