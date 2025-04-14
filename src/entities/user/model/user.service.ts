import { prisma } from "shared/api/prisma";
import bcrypt from "bcrypt";
import { CreateUserRequest, UpdateUserRequest, User } from "../types";
import { serializeUser, serializeUsers } from "../lib/serialize-user";

export async function createUser(data: CreateUserRequest) {
	const { password, ...userData } = data;

	const existingUser = await prisma.user.findUnique({
		where: { email: userData.email }
	});

	if (existingUser) throw new Error("EMAIL_EXISTS");

	const passwordHash = await bcrypt.hash(password, 10);

	const newUser = await prisma.user.create({
		data: {
			...userData,
			passwordHash
		}
	});

	const safeUser = serializeUser(newUser as User);

	return safeUser;
}

export async function updateUserById(id: string, data: UpdateUserRequest) {
	const existingUser = await prisma.user.findUnique({ where: { id } });

	if (!existingUser) {
		throw new Error("USER_NOT_FOUND");
	}

	const safeUpdateData = serializeUser(data as User);

	const updatedUser = await prisma.user.update({
		where: { id },
		data: {
			...safeUpdateData,
			updatedAt: new Date()
		}
	});

	return updatedUser;
}

export async function getPaginatedUsers(page: number, limit: number) {
	const skip = (page - 1) * limit;

	const [users, total] = await Promise.all([
		prisma.user.findMany({
			skip,
			take: limit
		}),
		prisma.user.count()
	]);

	return {
		users: serializeUsers(users as User[]),
		total,
		page,
		limit
	};
}

export async function deleteUser(id: string) {
	const user = await prisma.user.findUnique({ where: { id } });
	if (!user) {
		throw new Error("USER_NOT_FOUND");
	}
	await prisma.user.delete({ where: { id } });
	return user;
}

export async function deleteUsers(ids: string[]) {
	await prisma.user.deleteMany({
		where: { id: { in: ids } }
	});
}
