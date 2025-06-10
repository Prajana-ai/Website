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
    },
  },
  plugins: [],
};