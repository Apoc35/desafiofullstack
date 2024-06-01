/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#3A4750',
        customDarkGray: '#303841',
        customLightGray: '#EEEEEE',
        customTeal: '#00ADB5'

      }
    },
  },
  plugins: [],
}
