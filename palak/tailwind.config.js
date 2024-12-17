/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('./src/assets/bg.jpg')",
        "popup-image1": "url('./src/assets/popup11.jpg')",
        "popup-image2": "url('./src/assets/popup12.png')",
        "popup-image3": "url('./src/assets/popup3.jpg')",
        "popup-image4": "url('./src/assets/popup42.png')",
      },
      fontFamily: { sans: ["Poppins", "sans-serif"], poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};
