/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        // Sets DM Sans as the default sans font
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Sets Playfair Display as the default serif font
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        cream: "#F5F4F0",
        primary: "#2C4E34",
        accent: "#C8973A",
        highlight: "#C4421A",
      },
    },
  },
  plugins: [],
};
