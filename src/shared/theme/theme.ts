import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: { main: "#2B4242" },
		secondary: { main: "#93A4AB" },
		background: { default: "#C3C6C3", paper: "#93A4AB" },
		text: { primary: "#2B4242", secondary: "#6B8784" },
		success: { main: "#6B8784" },
		warning: { main: "#93A4AB" },
		error: { main: "#7D8F8B" }
	}
});
