import { apiClient } from "../api-client";
import { Prisma } from "@prisma/client";
import { safeUserSelect } from "./selects";

export type PublicUser = Prisma.UserGetPayload<{
	select: typeof safeUserSelect;
}>;

export const login = async (data: {
	email: string;
	password: string;
}): Promise<{ user: PublicUser; token: string }> => {
	const response = await apiClient.post("/auth/login", data);
	return response.data;
};

export const logout = async (): Promise<void> => {
	await apiClient.post("/auth/logout");
};

export const getMe = async (): Promise<PublicUser | null> => {
	const response = await apiClient.get("/auth/me");
	return response.data;
};
