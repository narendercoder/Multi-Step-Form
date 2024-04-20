/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1200px",
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1200px",
      },
    },
    
  },
  plugins: [],
}
