/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1440px",
        xl: "1600px"
      }
    },
    extend: {
      fontFamily: {
        titillium: "Titillium Web, sans-serif",
        "open-sans": "Open Sans, sans-serif"
      },
    },
  },
  plugins: [],
}

