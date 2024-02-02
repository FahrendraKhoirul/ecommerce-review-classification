/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
		},
		extend: {
			animation: {
				gradient: "gradient 8s linear infinite",
			},
			keyframes: {
				gradient: {
					to: { "background-position": "200% center" },
				},
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				lightorange: "#FFF7E3",
				orange: "#FEB101",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
