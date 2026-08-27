/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#282A36",
        surface: "#303341",
        text: "#F8F8F2",
        muted: "#B6B8CC",
        accent: "#BD93F9",
        accent2: "#8BE9FD",
        accentHover: "#CAA9FA",
        borderDim: "#44475A",
      },
    },
  },
  plugins: [],
};
