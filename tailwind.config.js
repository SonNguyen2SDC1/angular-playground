/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: 'var(--main-color)',
      },
      backgroundColor: {
        main: 'var(--main-bg-color)',
      },
    },
  },
  plugins: [],
};
