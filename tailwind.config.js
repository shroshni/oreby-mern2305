/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        container : '1604px',
      },
      colors: {
        'white': '#ffffff',
        'primary':'#262626',
        'secondary':'#767676',
        'headerbg':'#F5F5F3',
        'black':'#2B2B2B',
        
      },
      fontFamily: {
        'dmsans': ["DM Sans", 'sans-serif'],
        
      }
    },
    
    
  },
  plugins: [],
}