import { NextResponse } from "next/server";

export async function POST() {
	const response = NextResponse.json({ message: "Выход выполнен успешно" });

	// Удаляем куку с токеном, устанавливая её с пустым значением и истёкшим временем
	response.cookies.set("token", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 0
	});

	return response;
}
