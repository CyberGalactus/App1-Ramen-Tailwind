/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      RamenShop: "#99050c",
      RamenBrown: "#6b4545",
      white: "#fff",
      black: "#0a0a0a"
    },

    fontFamily: {
      Nunito: ["Sedgwick Ave Display", "serif"],
      DancingScript: ["Sedgwick Ave Display", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

