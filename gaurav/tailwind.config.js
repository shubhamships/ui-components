/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'btn-primary': '#1f499e',
        
      },
      backgroundImage: {
        'login-image': "url('./src/assets/login.jpg')"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
