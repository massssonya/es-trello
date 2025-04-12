import { userService } from "entities/user/model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const safeUser = await userService.createUser(body);
		return NextResponse.json(safeUser, { status: 201 });
	} catch (error: unknown) {
		if (error instanceof Error && error.message === "EMAIL_EXISTS") {
			return NextResponse.json(
				{ message: "Пользователь с таким email уже существует" },
				{ status: 400 }
			);
		}
		console.error("Ошибка создания пользователя:", error);
		return NextResponse.json(
			{ message: "Внутренняя ошибка сервера" },
			{ status: 500 }
		);
	}
}

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const page = parseInt(searchParams.get("page") || "1", 10);
		const limit = parseInt(searchParams.get("limit") || "10", 10);

		if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
			return NextResponse.json(
				{ error: "Invalid pagination parameters" },
				{ status: 400 }
			);
		}

		const result = await userService.getPaginatedUsers(page, limit);
		return NextResponse.json(result);
	} catch (error) {
		console.error("Error fetching users:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
