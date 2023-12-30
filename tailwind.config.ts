

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans serif'],
        fugaz: ['Fugaz One', 'sans serif'],
        lilita: ['Lilita One', 'sans serif'],
        julius: ['Julius Sans One', 'sans serif'],
      },
      colors: {
       midnightblue: {
        DEFAULT: '#050040'
       },
       gold: {
        DEFAULT: '#F1C40F'
       },
       white: {
        DEFAULT: '#FFFFFF'
       },
        black: {
          DEFAULT: '#000000'
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  ],
}

