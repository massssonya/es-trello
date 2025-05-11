import { Board } from "../api/board.types";
import { Card, CardContent, Typography } from "@mui/material";

type Props = {
	board: Board;
};

export const BoardCard = ({ board }: Props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6">{board.title}</Typography>
				<Typography variant="body2">{board.description}</Typography>
			</CardContent>
		</Card>
	);
};
