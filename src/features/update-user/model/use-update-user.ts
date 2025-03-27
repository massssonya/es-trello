import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUsers } from "entities/user/api";
import { User } from "entities/user/model";
import { useState } from "react";

export const useUpdateUser = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const queryClient = useQueryClient();

	const openModal = (user: User) => {
		setSelectedUser(user);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedUser(null);
	};

	const updateUserMutation = useMutation({
		mutationFn: ({
			id,
			name,
			email
		}: {
			id: string;
			name: string;
			email: string;
		}) => apiUsers.changeUser(id, name, email),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			closeModal();
		}
	});

	const updateUser = (name: string, email: string) => {
		if (!selectedUser) return;
		updateUserMutation.mutate({ id: selectedUser.id, name, email });
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
