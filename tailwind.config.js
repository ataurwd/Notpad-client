/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      rancho: ['Rancho', 'serif'], 
      },
      colors: {
        webMain: '#FBCB45',
        webSecondary: '#FBDA5F',
        webText: '#212121',
      }
    },
  },
  plugins: [require('daisyui')],
}
