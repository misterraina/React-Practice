/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        normal: 600,
        bold: 700,
      },
      colors: {
        customPurple: '#1a1625',
        lightPurple: '#2f2b3a',
        buttonHover: '#382bf0',
        buttonColor: '#7a5af5',
        'night-bg': '#2f2b3a',
        'light-bg': '#f7fafc',
        'lightest-dark': '#8b8b8b'
      },
    },
  },
  plugins: [],
}

