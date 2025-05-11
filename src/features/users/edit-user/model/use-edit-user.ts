import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUsers } from "entities/user/api";
import { UpdateUserRequest, UserWithoutPassword } from "entities/user/types";
import { useState } from "react";
import { queryKeys } from "shared/api/query-keys";
import { useModal } from "shared/lib/hooks";

type UpdateUserArgs = {
	id: string;
	payload: UpdateUserRequest;
};

export function useEditUser() {
	const { close, open, isOpen: isModalOpen } = useModal();
	const [selectedUser, setSelectedUser] = useState<UserWithoutPassword | null>(
		null
	);
	const queryClient = useQueryClient();

	const openModal = (user: UserWithoutPassword) => {
		setSelectedUser(user);
		open();
	};
	const closeModal = () => {
		setSelectedUser(null);
		close();
	};

	const updateUserMutation = useMutation<
		UserWithoutPassword,
		Error,
		UpdateUserArgs
	>({
		mutationFn: ({ id, payload }: { id: string; payload: UpdateUserRequest }) =>
			apiUsers.changeUser({ id, payload }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
			closeModal();
		}
	});

	const updateUser = (payload: UpdateUserRequest) => {
		if (!selectedUser) return;

		updateUserMutation.mutate({ id: selectedUser.id, payload });
	};

	const deleteUserMutation = useMutation({
		mutationFn: (userId: string) => apiUsers.deleteUser(userId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.users.all});
			closeModal();
		}
	});
	const deleteUser = (userId: string) => {
		deleteUserMutation.mutate(userId);
	};

	const isPending = updateUserMutation.isPending || deleteUserMutation.isPending;
	const isError = updateUserMutation.isError || deleteUserMutation.isError;
	const isSuccess = updateUserMutation.isSuccess || deleteUserMutation.isSuccess;

	return {
		isModalOpen,
		openModal,
		closeModal,
		selectedUser,
		updateUser,
		deleteUser,
		isPending,
		isError,
		isSuccess
	};
}
