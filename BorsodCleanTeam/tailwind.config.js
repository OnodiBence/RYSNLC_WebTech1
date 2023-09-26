/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '790px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: '#3D5467',
        lightBlue: '#daeffd',
      }
    },
  },
  plugins: [],
}
