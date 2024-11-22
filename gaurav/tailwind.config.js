/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1f499e',
        'destructive': '#ff0000',
        'success': '#16a34a',
        'soft': '#e0e7ff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};