import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "shared/api/prisma";

export async function POST(req: Request) {
	try {
		const { name, email, password } = await req.json();
		const SALT_ROUNDS = 10;

		const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				passwordHash: hashedPassword
			}
		});

		return NextResponse.json(newUser, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "Ошибка при создании пользователя" },
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
			return NextResponse.json({ error: "Invalid pagination parameters" }, { status: 400 });
		}

		const users = await prisma.user.findMany({
			skip: (page - 1) * limit,
			take: limit,
		});

		const total = await prisma.user.count(); // Получаем общее количество пользователей

		return NextResponse.json({ users, total, page, limit });
	} catch (error) {
		console.error("Error fetching users:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
