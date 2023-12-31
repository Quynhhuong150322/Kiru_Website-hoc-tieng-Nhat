/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // plugins: [require("tailwind-scrollbar")],
  theme: {
    extend: {
      fontSize: {
        sm: '9px',
        base: '13px',
        xl: '20px',
        '2xl': '60px',
        '3xl': '80px',
        '4xl': '90px',
        '5xl': '100px',
      }
    },
    screens: {
      'sm': {'min': '400px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      japanese: ['"Japanese"'],
      interBold: ['"InterBold"'],
      interRegular: ['"InterRegular"'],
      montserrat: ['"Montserrat"']
    },
    boxShadow: {
      '2xl': '25px 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}