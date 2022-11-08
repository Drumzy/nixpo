const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.resolve(process.cwd(),"components/**/*.{js,jsx,ts,tsx}")],
  theme: {
    extend: {},
  },
  plugins: [],
}
