/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freehand: ['Freehand', 'cursive'],
        Poppins : ["Poppins"],
        
      },
      translate: {
        '-50': '-50%',
      },
    },
  },
  plugins: [],
}
