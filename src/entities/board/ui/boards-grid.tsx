
import { Grid } from "@mui/material";
import { useBoards } from "../model/use-boards";
import { BoardCard } from "./board-card";

export const BoardsGrid = () => {
	const { data: boards, isLoading } = useBoards();

	if (isLoading) return <div>Loading...</div>;

	return (
		<Grid container spacing={2}>
			{boards?.map((board) => (
				<Grid key={board.id}>
					<BoardCard board={board} />
				</Grid>
			))}
		</Grid>
	);
};
