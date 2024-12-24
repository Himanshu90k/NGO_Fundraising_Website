/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customBlack: '#1E1E1E',
        customBlue: '#00A2E8',
        lightRed: '#FEF4F3',
        customRed: '#EA4633',
        customGrey: '#4E535D',
        customBlack: '#444A55',
        pageColor: '#F1F2F3',
      },
      fontSize: {
        '3.25xl': '2rem',
        'xxs': '0.625rem',
      },
      width: {
        2.5: '0.625rem',
        38: '9.5rem',
        58: '16.375rem',
        270: '71.75',
      },
      height: {
        2.5: '0.625rem',
        210: '55.625rem',
        12.5: '3.125rem',
        240: '51.5rem',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4-xl': '1.25rem',
      },
      boxShadow: {
        cardShadow: '4px 3px 8.1px 0px rgba(0, 0, 0, 0.26)',
        aideShadow: '-28px 0px 61.9px 0px rgba(0, 0, 0, 0.25)',
        logoCardShadow: '-15px 1px 22.5px 0px rgba(0, 0, 0, 0.23)',
      },
      gap: {
        8.5: '2.125rem',
      },
      margin: {
        0.1: '1px',
        21: '5.625rem',
      },
      backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(180deg, #9FD3FF 0%, #81BDEF 22.86%, #72B2E7 41.94%, #2B7DC0 100%)',
      },
    },
  },
  plugins: [],
};



