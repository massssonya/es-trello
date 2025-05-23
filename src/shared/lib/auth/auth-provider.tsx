import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserWithoutPassword } from "../../../entities/user/types";
import { getMe } from "shared/api/auth/auth.api";
import { queryKeys } from "shared/api/query-keys";

type AuthContextType = {
	user: UserWithoutPassword | null | undefined;
	isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	isLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { data: user, isLoading } =
		useQuery<UserWithoutPassword | null>({
			queryKey: queryKeys.currentUser,
			queryFn: getMe,
			retry: false,
		});

	return (
		<AuthContext.Provider value={{ user, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
