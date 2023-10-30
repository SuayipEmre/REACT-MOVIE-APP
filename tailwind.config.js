/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '50': '50%',
      },
      colors : {
        'avgColor' : {
          default : '#16a34a',
          red : '#4c0519',
          orange : '#f59e0b'
        }
      }

    },
  },
  plugins: [],
}