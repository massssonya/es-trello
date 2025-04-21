import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "shared/api/prisma";

export async function POST(req: Request) {
	const { email, password } = await req.json();

	const user = await prisma.user.findUnique({ where: { email } });

	if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
		return NextResponse.json({ error: "Неверные данные" }, { status: 401 });
	}

	const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
		expiresIn: "7d"
	});

	const response = NextResponse.json({ user });
	response.cookies.set("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 60 * 60 * 24 * 7 // 7 дней
	});

	return response;
}
