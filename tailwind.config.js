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
        // Logo-inspired colors
        'prajana-orange': '#F5A623',
        'prajana-amber': '#F7B84B',
        'prajana-gray': '#4A4A4A',
        'prajana-dark-gray': '#2D2D2D',
      },
      fontSize: {
        // Increased all sizes by approximately 2 points (0.125rem)
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],      // was 0.75rem
        'sm': ['1rem', { lineHeight: '1.5rem' }],           // was 0.875rem
        'base': ['1.125rem', { lineHeight: '1.75rem' }],    // was 1rem
        'lg': ['1.25rem', { lineHeight: '1.875rem' }],      // was 1.125rem
        'xl': ['1.375rem', { lineHeight: '2rem' }],         // was 1.25rem
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }],     // was 1.5rem
        '3xl': ['2rem', { lineHeight: '2.5rem' }],          // was 1.875rem
        '4xl': ['2.5rem', { lineHeight: '3rem' }],          // was 2.25rem
        '5xl': ['3.125rem', { lineHeight: '3.75rem' }],     // was 3rem
        '6xl': ['4rem', { lineHeight: '4.5rem' }],          // was 3.75rem
        '7xl': ['5rem', { lineHeight: '5.5rem' }],          // was 4.5rem
        '8xl': ['6.125rem', { lineHeight: '6.75rem' }],     // was 6rem
        '9xl': ['8.125rem', { lineHeight: '8.75rem' }],     // was 8rem
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