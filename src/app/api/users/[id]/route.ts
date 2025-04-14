import { NextResponse } from "next/server";
import { userService } from "entities/user/model";
import { UpdateUserRequest } from "entities/user/types";

export async function PUT(
	request: Request,
	context: { params: Promise<{ id: string }> }
) {
	const { id } = await context.params;

	try {
		const data: UpdateUserRequest = await request.json();
		const updatedUser = await userService.updateUserById(id, data);

		return NextResponse.json(updatedUser);
	} catch (error: unknown) {
		if (error instanceof Error && error.message === "USER_NOT_FOUND") {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		console.error("Error updating user:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: Request,
	context: { params: Promise<{ id: string }> }
) {
	const { id } = await context.params;
	try {
		await userService.deleteUser(id);
		return NextResponse.json({ success: true });
	} catch (error: unknown) {
		if (error instanceof Error && error.message === "USER_NOT_FOUND") {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}
		console.error("Error deleting user:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
