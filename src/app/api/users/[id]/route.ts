import { prisma } from "shared/api/prisma";
import { NextResponse } from "next/server";
import { User } from "entities/user/model";

type UpdateUserRequest = Omit<
	Partial<User>,
	"id" | "createdAt" | "updatedAt" | "passwordHash"
>;

export async function PUT(
	request: Request,
	context: { params: Promise<{ id: string }> }
) {
	const { id } = await context.params;

	try {
		const dataToUpdate: UpdateUserRequest = await request.json();

		const existingUser = await prisma.user.findUnique({
			where: { id }
		});

		if (!existingUser) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		const safeUpdateData = Object.fromEntries(
			Object.entries(dataToUpdate).filter(([, value]) => value !== undefined)
		);

		const updatedUser = await prisma.user.update({
			where: { id },
			data: {
				...safeUpdateData,
				updatedAt: new Date()
			}
		});

		return NextResponse.json(updatedUser);
	} catch (error) {
		console.error("Error updating user:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
