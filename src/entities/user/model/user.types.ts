export type User = {
	id: string;
	email: string;
	passwordHash: string;
	name: string;
	avatarUrl: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
};

export interface UsersResponse {
	users: User[];
	total: number;
	page: number;
	limit: number;
  }
