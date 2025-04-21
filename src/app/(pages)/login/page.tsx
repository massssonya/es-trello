"use client";

import { LoginForm } from "features/auth/ui";

export default function Login() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<LoginForm />
		</div>
	);
}
