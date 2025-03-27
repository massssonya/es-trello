import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		  colors: {
			primary: "#2B4242",
			secondary: "#93A4AB",
			background: "#C3C6C3",
			accent: "#7D8F8B",
			textMain: "#2B4242",
			textSecondary: "#6B8784",

		  },
		},
	  },
	plugins: []
} satisfies Config;
