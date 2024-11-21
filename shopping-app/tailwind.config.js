/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FAFAFE",
        gray: {
          light: "#454545",
        },
        primaryYellow: "#F9A109",
        primaryOrange: "#EB5757",
        primaryBlue: "#56CCF2",
      },
      spacing: {
        23: "5.875rem",
        18: "5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
