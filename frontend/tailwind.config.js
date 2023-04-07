/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-blue': '#2563eb',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
