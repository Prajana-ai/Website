/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'prajana-deep-blue': '#14123F',
        'prajana-purple': '#7A228B',
        'prajana-light-purple': '#835FA3',
        'prajana-magenta': '#CE47C0',
        'prajana-cyan': '#01E8EE',
        'prajana-teal': '#24A4C4',
        'prajana-ice-blue': '#DCF9F9',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};