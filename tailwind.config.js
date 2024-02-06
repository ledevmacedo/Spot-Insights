/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'white-light': '#EBE7E1',
      'white-dark': '#F2EFEB',

      'purple-main': '#36E31D1',
      'purple-main-light': '#B282FF',
      'purple-main-dark': '#3C2169',

      'purple-dark': '#212026',
      'purple-dark-light': '#2B2B2E',
      'purple-dark-dark': '#19181D',

      'purple-black': '#131216',
      'purple-black-light': '#222127',
      'purple-black-dark': '#222127',

      'red-error': '#FF6161',
      'green-success': '#61FF71',
      'yellow-warning': '#FFD361',
    }, 
    fontFamily: {
      geist: ['Geist', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} 

      