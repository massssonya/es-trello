import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUsers } from "entities/user/api";
import { queryKeys } from "shared/api/query-keys";

interface CreateUserInput {
	name: string;
	email: string;
	password: string;
}

export const useCreateUser = (onSuccess?: () => void) => {
	const queryClient = useQueryClient();
	const [error, setError] = useState<string | null>(null);

	const mutation = useMutation({
		mutationFn: async (data: CreateUserInput) => {
			if (!data.name.trim()) throw new Error("Имя не может быть пустым.");
			if (!/^\S+@\S+\.\S+$/.test(data.email)) throw new Error("Некорректный email.");
			if (data.password.length < 6) throw new Error("Пароль должен быть не менее 6 символов.");

			return apiUsers.createUser(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
			onSuccess?.();
		},
		onError: (err: unknown) => {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Ошибка при создании пользователя.");
			}
		},
	});

	return { createUser: mutation.mutate, isLoading: mutation.isPending, error };
};
