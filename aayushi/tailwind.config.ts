/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "640px" },
        xm: { max: "694px" },
      },
    },
  },
  plugins: [],
};
