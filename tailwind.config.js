/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 Important
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"metropolitan"', ""],
        captain: ['"cap"', ""],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
