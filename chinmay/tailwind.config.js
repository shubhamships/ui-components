/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
