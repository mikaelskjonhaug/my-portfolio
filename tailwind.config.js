/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#242424",      // dark background
        surface: "#2E2E2E", // cards/sections
        text: "#EBEBEB",    // primary text
        muted: "#B5B5B5",   // secondary text
        accent: "#FF8800",  // orange
        accent2: "#00BFA6", // teal
        accentHover: "#FFA04C",
        borderDim: "#383838",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
