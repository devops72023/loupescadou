/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'oregano' : ['Oregano', 'cursive'],
        'poppins' : ['Poppins', 'sans-serif'],
        'dancing' : ['Dancing Script', 'cursive']
      },
      colors: {
        colors: {
          light: '#f1f6f8',
          blue: '#000C6E',
          lightblue: '#4F9CC9',
          blueAccent: '#2634A4',
          bgcolor: '#DCECF5',
        },
        "dark-blue": {
          100: "#cecedf",
          200: "#9d9dbf",
          300: "#6d6ba0",
          400: "#3c3a80",
          500: "#0b0960",
          600: "#09074d",
          700: "#07053a",
          800: "#040426",
          900: "#020213"
        },
        "light-blue": {
          100: "#d7e1f2",
          200: "#afc4e5",
          300: "#86a6d7",
          400: "#5e89ca",
          500: "#366bbd",
          600: "#2b5697",
          700: "#204071",
          800: "#162b4c",
          900: "#0b1526"
},
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

