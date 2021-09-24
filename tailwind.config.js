module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6F3E97'
      },
      textColor: {
        primary: '#6F3E97'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
