import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "shared/api/auth/auth.api";

export function useLogin() {
	const router = useRouter();

	return useMutation({
		mutationFn: login,
		onSuccess: () => {
			router.push('/')
		},
		onError: (error) => {
			console.error("Login failed:", error);
		}
	})
}
