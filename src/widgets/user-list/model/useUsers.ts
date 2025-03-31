import { useQuery } from "@tanstack/react-query";
import { apiUsers } from "entities/user/api";
import { User } from "entities/user/model";

interface UsersResponse {
	users: User[];
	total: number;
	page: number;
	limit: number;
  }

export const useUsers = ({ page, limit }: { page: number; limit: number }) => {
	return useQuery<UsersResponse>({
		queryKey: ["users", page, limit],
		queryFn: async (): Promise<UsersResponse> => {
			const response = await apiUsers.getUsers({ page, limit });
			return response;
		  },
		staleTime: 1000 * 60 * 5,
	});
};
