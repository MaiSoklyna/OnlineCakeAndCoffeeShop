module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8a56ac',
          light: '#b084d1',
          dark: '#6a3b8a',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      backgroundColor: {
        'hero': 'rgba(138, 86, 172, 0.1)',
      },
      boxShadow: {
        'violet': '0 4px 14px 0 rgba(138, 86, 172, 0.25)',
      },
      borderColor: {
        'violet': '#8a56ac',
      },
    },
  },
  plugins: [],
} 