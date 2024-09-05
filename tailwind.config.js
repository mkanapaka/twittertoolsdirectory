/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      lineClamp: ['responsive', 'hover']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

