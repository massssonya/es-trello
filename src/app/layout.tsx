import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { LayoutWrapper } from "./layout-wrapper"; // Клиентский компонент
import { Providers } from "./providers";

const poppinsSans = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-poppins-sans"
});

export const metadata: Metadata = {
	title: "es-Trello",
	description: "App for task management with drag-and-drop feature"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppinsSans.variable} antialiased`}>
				<Providers>
					<LayoutWrapper>{children}</LayoutWrapper>
					<div id="modal-root"></div>
				</Providers>
			</body>
		</html>
	);
}
