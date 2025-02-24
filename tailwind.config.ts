import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#2B4242",
				secondary: "#93A4AB",
				accent: "#7D8F8B",
				background: "#C3C6C3",
				surface: "#93A4AB",
				text: {
					primary: "#2B4242",
					secondary: "#6B8784"
				},
				success: "#6B8784",
				warning: "#93A4AB",
				error: "#7D8F8B"
			}
		}
	},
	plugins: []
} satisfies Config;
