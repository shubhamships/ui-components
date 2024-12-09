/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'scale-fade': 'scaleFade 0.5s ease-in-out',
      },
      keyframes: {
        scaleFade: {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
