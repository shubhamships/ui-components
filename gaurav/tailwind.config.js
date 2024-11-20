/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1f499e',
        'destructive': '#ff0000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
