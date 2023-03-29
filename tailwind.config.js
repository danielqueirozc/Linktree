/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    extend: {
      backgroundImage: {
        site: "url('./image/site-bg.jpg')",
      },
  },
  plugins: [],
} 
}
