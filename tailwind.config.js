/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        lightbg: '#0b1a2e', // #0b1a2e 
        title: '#ccd6f6',
        subtitle: '#8892b0',
        secondary: '#64ffda', //ff8000 neon orange | #64ffda light green
        hoverbtn: '#1b394f',
        darkbg: '#112240'
      },
      fontFamily: {
        'fcode': 'Fira Code, monospace',
        'inter': 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}