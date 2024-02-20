/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {

    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        red: '#FF1700',
        accent: {
          DEFAULT: '#FFC600',
          secondary: '#EFC42C',
          tertiary: '#90c6cd'
        },
        gray: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 40px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage : {
        services : 'url(../assets/logo-bg/bg-1.png)',
        testimonials : 'url(../assets/logo-bg/bg-2.png)',
        departements : 'url(../assets/logo-bg/bg-3.png)',
        quouteleft : 'url(../assets/icons/testimonials/quote-left.svg)',
        quouteright : 'url(../assets/icons/testimonials/quote-right.svg)',
        

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}