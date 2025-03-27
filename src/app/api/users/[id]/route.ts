import { prisma } from "shared/api/prisma";
import { NextResponse } from "next/server";

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	console.log("ID из URL:", id);

	try {
		const { name, email } = await request.json();

		// Получаем текущие данные пользователя
		const existingUser = await prisma.user.findUnique({
			where: { id }
		});

		if (!existingUser) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		// Обновляем только переданные поля
		const updatedUser = await prisma.user.update({
			where: { id },
			data: {
				name: name ?? existingUser.name,
				email: email ?? existingUser.email
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
