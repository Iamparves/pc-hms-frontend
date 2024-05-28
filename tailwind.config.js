/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
