import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "shared/api/prisma";
import { UserWithoutPassword } from "entities/user/types";

type JWTPayload = {
	userId: string;
	iat: number;
	exp: number;
};

export async function GET(req: NextRequest) {
	const token = req.cookies.get("token")?.value;

	if (!token) {
		return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;

		const user: UserWithoutPassword | null = await prisma.user.findUnique({
			where: { id: decoded.userId },
			select: {
				id: true,
				email: true,
				name: true,
				createdAt: true,
				updatedAt: true,
				role: true,
				avatarUrl: true
			}
		});

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		return NextResponse.json(user);
	} catch (error) {
		return NextResponse.json({ error: "Invalid token" }, { status: 401 });
	}
}
