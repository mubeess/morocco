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
        lightBlack: '#263238',
        fontColor: '#4D4D4D',
      },
      height: {
        70: '70vh',
      },
    },
  },
  plugins: [],
};
