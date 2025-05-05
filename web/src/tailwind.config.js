/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'space-y-6',
    'space-y-8',
    'space-y-10',
    'space-y-12', // Añadir todas las variaciones que quieras asegurarte de no purgar
    'gap-4',
    'gap-6',
    'gap-8',
  ],
  plugins: [],
}
