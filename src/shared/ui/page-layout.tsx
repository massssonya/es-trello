import { Box, Container, Paper } from "@mui/material";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container sx={{ mt: 10}} >
			<Paper
				elevation={3}
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "85vh",
					p: 3,
				}}
			>
				{children}
			</Paper>
		</Container>
	);
};

const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			component="header"
			sx={{ mb: 3, p: 2, borderBottom: "1px solid #ddd" }}
		>
			{children}
		</Box>
	);
};
Header.displayName = "PageLayout.Header";

const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1, p: 2 }}>
			{children}
		</Box>
	);
};
Body.displayName = "PageLayout.Body";

const Footer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			component="footer"
			sx={{ mt: 3, p: 2, borderTop: "1px solid #ddd", textAlign: "center" }}
		>
			{children}
		</Box>
	);
};
Footer.displayName = "PageLayout.Footer";

PageLayout.Header = Header;
PageLayout.Body = Body;
PageLayout.Footer = Footer;
