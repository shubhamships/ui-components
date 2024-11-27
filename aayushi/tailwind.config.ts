/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '375': '375px', 
        '320': '320px',
        xs: { max: "640px" },
        xm: { max: "694px" },
      },
    },
  },
  plugins: [],
};
