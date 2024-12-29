/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"], // Make Work Sans the default sans-serif font
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        link: "#141624",
      },
    },
  },
  plugins: [],
};
