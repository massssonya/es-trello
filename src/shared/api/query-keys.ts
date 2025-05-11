export const queryKeys = {
	currentUser: ["current-user"] as const,
	users: {
		all: ["users"] as const,
		list: (page: number, limit: number) =>
			['users', page, limit] as const,
	},
	boards: {
		all: ["boards"] as const,
	}
}
