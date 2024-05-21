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
        lightorange: "#FFF2E5",
        darkorange: "#E55D22",
        orange: "#FF7E47",
        darker: "#F9F9F9",
        dark: "#242D43",
        grey: "#DEDEDE",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
