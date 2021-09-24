module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6F3E97',
        secondary: '#57A8DA'
      },
      textColor: {
        primary: '#6F3E97',
        secondary: '#57A8DA'
      },
      lineHeight: {
       '12': '3rem',
     },
     spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
