/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
    },
    extend: {
      colors: {
        green: '#20bf55',
        mainC: '#010101',
        secondaryC: '#f2f0ea',
        yellowC: '#edcf5d',
        greyC: '#a4a4a4',
      },
      fontFamily: {
        logo: 'cursive',
      },
    },
  },
  plugins: [],
};
