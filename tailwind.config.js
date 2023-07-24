/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto Mono, monospace",
        rubik: "'Rubik', sans-serif",
      },
      colors: {
        main500: "#ec593fb0",
        main300: "#e9624a",
        secondary500: "#21585c",
        secondary300: "#137C8B",
        tertiary: "#606566",
        bgColor: "#FFF8E8",
      },
    },
  },
  plugins: [],
};
