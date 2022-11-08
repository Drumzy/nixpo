const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [path.resolve(process.cwd(),"components/**/*.{js,jsx,ts,tsx}")],
}
