/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightGreen: '#4CAF4F',
        silver: '#F5F7FA',
      },
      height: {
        70: '70vh',
      },
    },
  },
  plugins: [],
};
