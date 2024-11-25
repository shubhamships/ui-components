/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sn: { min: "320" },
        ss: { min: "375px" },
        xs: { max: "640px" },
        xm: { max: "694px" },
      },
    },
  },
  plugins: [],
};
