import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { Sidebar } from "features/sidebar";
import { Providers } from "./providers";

const poppinsSans = Poppins({
	variable: "--font-poppins-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
	title: "es-Trello",
	description: "App for task management with drag-and-drop feature"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body

				className={`${poppinsSans.variable} antialiased`}
			>
				<Providers>
					<div className="flex min-h-screen">
						<Sidebar />
						<main className="flex-1">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
