/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1f499e',
        'destructive':'#ff0000',
        
      }
    },
  },
  plugins: [],
};