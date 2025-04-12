import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { apiUsers } from "entities/user/api";
import {
	UpdateUserRequest,
	UserWithoutPassword
} from "entities/user/types";

type UpdateUserArgs = {
	id: string;
	payload: UpdateUserRequest;
};

export const useUpdateUser = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<UserWithoutPassword | null>(null);
	const queryClient = useQueryClient();

	const openModal = (user: UserWithoutPassword) => {
		setSelectedUser(user);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedUser(null);
	};

	const updateUserMutation = useMutation<
		UserWithoutPassword,
		Error,
		UpdateUserArgs
	>({
		mutationFn: ({ id, payload }: { id: string; payload: UpdateUserRequest }) =>
			apiUsers.changeUser({ id, payload }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			closeModal();
		}
	});

	const updateUser = (payload: UpdateUserRequest) => {
		if (!selectedUser) return;

		updateUserMutation.mutate({ id: selectedUser.id, payload });
	};

	return {
		isModalOpen,
		selectedUser,
		openModal,
		closeModal,
		updateUser,
		isLoading: updateUserMutation.isPending,
		isError: updateUserMutation.isError
	};
};
