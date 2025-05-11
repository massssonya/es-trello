import { useQuery } from "@tanstack/react-query";
import { apiUsers } from "entities/user/api";
import { UserWithoutPassword } from "entities/user/types";
import { queryKeys } from "shared/api/query-keys";

interface UsersResponse {
	users: UserWithoutPassword[];
	total: number;
	page: number;
	limit: number;
}

export const useGetUsers = ({ page, limit }: { page: number; limit: number }) => {
	return useQuery<UsersResponse>({
		queryKey: queryKeys.users.list(page, limit),
		queryFn: async (): Promise<UsersResponse> => {
			const response = await apiUsers.getUsers({ page, limit });
			return response;
		},
		staleTime: 1000 * 60 * 5,
		placeholderData: (previousData) => previousData
	});
};
