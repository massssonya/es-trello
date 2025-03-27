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

export async function GET() {
	try {
		const users = await prisma.user.findMany();
		return NextResponse.json(users);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "Ошибка при получении списка пользователей" },
			{ status: 500 }
		);
	}
}
