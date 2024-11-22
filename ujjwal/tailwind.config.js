/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        backgroundImage: "url('./images/background.jpg')",
      },
    },
  },
  plugins: [],
};
