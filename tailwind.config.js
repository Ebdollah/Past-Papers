/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  screens: {
    'sm': '535px', // Customize the 'sm' breakpoint to start at 635px
    'md': '768px',
    'lg': '1024px',
    // Add more breakpoints if needed
  },
  plugins: [],
}

