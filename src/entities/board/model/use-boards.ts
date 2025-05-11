import { useQuery } from "@tanstack/react-query";
import { getBoards } from "../api/board.api";
import { queryKeys } from "shared/api/query-keys";

export const useBoards = () => {
	return useQuery({
		queryKey: queryKeys.boards.all,
		queryFn: getBoards
	});
};
