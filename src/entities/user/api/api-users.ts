import { apiClient } from "shared/api/api-client";
import {
	UsersResponse,
	UserWithoutPassword,
	UpdateUserRequest
} from "../types";

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

export const changeUser = async ({
	id,
	payload
}: {
	id: string;
	payload: UpdateUserRequest;
}) => {
	const response = await apiClient.put(`/users/${id}`, payload);
	return response.data;
};
