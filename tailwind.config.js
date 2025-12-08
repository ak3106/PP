/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6EEE3",
        primary: "#990808",
        accent: "#F44027",
        highlight: "#EDC537",
      },
    },
  },
  plugins: [],
};
