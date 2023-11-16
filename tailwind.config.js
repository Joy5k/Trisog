/** @type {import('tailwindcss').Config} */
import img from './src/assets/nature'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('./src/assets/nature.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

