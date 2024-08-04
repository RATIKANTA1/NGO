/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(255,251,235,1) 0%, rgba(255,241,242,1) 99%)',
      },
      colors: {
        'custom-color': '#FFFBEF',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        bounceSlow: 'bounceSlow 3s infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }, 
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(-8%)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      },
              
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
 
}

