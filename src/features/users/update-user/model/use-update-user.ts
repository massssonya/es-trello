import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUsers } from "entities/user/api";
import { User, UserRole } from "entities/user/model";
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
			email,
			role
		}: {
			id: string;
			name?: string;
			email?: string;
			role?: UserRole;
		}) => apiUsers.changeUser(id, name, email, role),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			closeModal();
		}
	});

	const updateUser = (name?: string, email?: string, role?: UserRole) => {
		if (!selectedUser) return;
		updateUserMutation.mutate({ id: selectedUser.id, name, email, role });
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
