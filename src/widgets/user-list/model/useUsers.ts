import { useQuery } from '@tanstack/react-query'
import { apiUsers } from 'entities/user/api'
import { User } from 'entities/user/model'

export const useUsers = () => {
	return useQuery<User[]>({
		queryKey: ['users'],
		queryFn: apiUsers.getUsers,
		staleTime: 1000 * 60 * 5,
	})
}
