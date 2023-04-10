/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
,
  theme: {
    extend: {
      colors : {
        dark02: "#474747",
        dark03: "#757575",
        dark04: '#a3a3a3',
        dark05: '#d1d1d1',
        dark06: "#e8d8d8",
        dark07: "#f4f4f4",
        accent: "#7E90FE",
        primary: "#9873FF"
      }
    },
  },
  plugins: [],
}

