import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login, logout } from "shared/api/auth/auth.api";
import { queryKeys } from "shared/api/query-keys";

export function useAuth() {
	const queryClient = useQueryClient();
	const router = useRouter();

	const userLogin = useMutation({
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: queryKeys.currentUser,
			});
			router.push("/");
		},
		onError: (error) => {
			console.error("Login failed:", error);
		}
	});

	const userLogout = useMutation({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.setQueryData(["current-user"], null);
			router.push("/auth");
		},
		onError: (error) => {
			console.error("Logout failed:", error);
		}
	});

	return {
		userLogin,
		userLogout
	};
}
