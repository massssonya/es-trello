import { apiClient } from "shared/api/api-client";
import { User, UserRole, UsersResponse } from "../model";

export const createUser = async (
	name: string,
	email: string,
	password: string
) => {
	const response = await apiClient.post("/users", {
		name,
		email,
		password
	});
	return response.data;
};

export const getUsers = async ({page, limit}: {page: number, limit: number}) => {
	const response = await apiClient.get<UsersResponse>(`/users`, {
		params: { page, limit },
	});
	return response.data;
};

export const getAllUsers = async (): Promise<User[]> => {
	const response = await apiClient.get<User[]>("/users");
	return response.data;
};

export const changeUser = async (id: string, name?: string, email?: string, role?: UserRole
) => {
	const response = await apiClient.put(`/users/${id}`, {
		name,
		email,
		role
	});
	return response.data;
};
