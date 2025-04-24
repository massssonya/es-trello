import { UserRole } from "@prisma/client";

export const isAdminUser = (role?: UserRole | null): boolean => {
	return role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN;
};
