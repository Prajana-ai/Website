export const theme = {
  // Colors
  colors: {
    primary: '#7C3AED',
    primaryLight: '#E9D5FF',
    primaryDark: '#5B21B6',
    secondary: '#1E40AF',
    background: '#FFFFFF',
    backgroundDark: '#1F2937',
    text: '#1F2937',
    textLight: '#6B7280',
    textDark: '#F9FAFB',
    border: '#E5E7EB',
    borderDark: '#374151',
  },

  // Typography
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      secondary: 'system-ui, sans-serif',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '5rem',
    '6xl': '6rem',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Components
  components: {
    card: {
      base: 'rounded-2xl shadow-lg overflow-hidden',
      padding: 'p-8',
      background: 'bg-white dark:bg-gray-800',
      border: 'border border-gray-200 dark:border-gray-700',
      hover: 'hover:shadow-xl transition-shadow',
    },
    button: {
      primary: 'bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors',
      secondary: 'bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors',
      text: 'text-primary hover:text-primary-dark transition-colors',
    },
    heading: {
      base: 'font-bold leading-tight',
      sizes: {
        h1: 'text-6xl md:text-7xl',
        h2: 'text-4xl md:text-5xl',
        h3: 'text-3xl md:text-4xl',
        h4: 'text-2xl md:text-3xl',
      },
    },
    text: {
      base: 'leading-relaxed',
      sizes: {
        base: 'text-base',
        sm: 'text-sm',
        lg: 'text-lg',
      },
    },
  },
};

export type Theme = typeof theme;
