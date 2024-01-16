/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#e3e8ff",
          75: "#d4dce4",
          100: "#8a9ef0",
          200: "#6b86f2",
          300: "#4b6beb",
          400: "#435eca",
          500: "#2b47c0",
          600: "#1934ab",
          700: "#0927ad",
          800: "#081e81",
          900: "#041150",
          950: "#020c3b",
        },
      },
    },
  },
  plugins: [],
};
