/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('./src/assets/bg.jpg')",
        popup: "url('./src/assets/popup3.webp')",
      },
      fontFamily: { sans: ["Poppins", "sans-serif"], poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};
