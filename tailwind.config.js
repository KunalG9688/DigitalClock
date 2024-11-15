/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'number-change': 'slide-top-to-bottom 1s ease-in-out',
      },
      keyframes: {
        'slide-top-to-bottom': {
          '0%': { top: '-100%', opacity: '0' },
          '50%': { top: '0', opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}