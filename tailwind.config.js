/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8fcff",
        primary: "#2C4E34",
        accent: "#FFA800",
        highlight: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
