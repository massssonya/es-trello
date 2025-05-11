import { apiClient } from "shared/api/api-client";
import { Board, CreateBoardDto } from "./board.types";

export const getBoards = async (): Promise<Board[]> => {
	return (await apiClient.get("/boards")).data;
};

export const getBoardById = async (id: string): Promise<Board> => {
	return (await apiClient.get(`/boards/${id}`)).data;
};

export const createBoard = async (data: CreateBoardDto): Promise<Board> => {
	return (await apiClient.post("/boards", data)).data;
};
