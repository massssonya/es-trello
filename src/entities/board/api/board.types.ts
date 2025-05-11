export type Board = {
	id: string;
	title: string;
	description?: string;
	createdAt: string;
	updatedAt: string;
};

export type CreateBoardDto = {
	title: string;
	description?: string;
};
