import { apiClient } from "shared/api/api-client";
import { User, UsersResponse, UserRole, UserWithoutPassword } from "../types";

type CreateUserPayload = {
	name: string;
	email: string;
	password: string;
};

export const createUser = async (
	payload: CreateUserPayload
): Promise<UserWithoutPassword> => {
	const response = await apiClient.post<UserWithoutPassword>("/users", payload);
	return response.data;
};

export const getUsers = async ({
	page,
	limit
}: {
	page: number;
	limit: number;
}): Promise<UsersResponse> => {
	const response = await apiClient.get<UsersResponse>(`/users`, {
		params: { page, limit }
	});
	return response.data;
};

export const getAllUsers = async (): Promise<UserWithoutPassword[]> => {
	const response = await apiClient.get<UserWithoutPassword[]>("/users");
	return response.data;
};

type ChangeUserPayload = {
	name?: string;
	email?: string;
	role?: UserRole;
	avatarUrl?: string;
};

export const changeUser = async (
	id: string,
	name?: string,
	email?: string,
	role?: UserRole,
	avatarUrl?: string
) => {
	const response = await apiClient.put(`/users/${id}`, {
		name,
		email,
		role
	});
	return response.data;
};
