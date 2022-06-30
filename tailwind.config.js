const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  safeList: [
    {
      pattern: /^(.*?)/
    },
  ],
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      lora: ['Lora', 'serif'],
      manrope: ['Manrope', 'san-serif'],
    },
    fontSize: {
      caption: ['0.75rem', { lineHeight: '1rem' }],
      'body-sm': ['0.8125rem', { lineHeight: '1.125rem' }],
      'body-md': ['0.875rem', { lineHeight: '1.1875rem' }],
      body: ['1rem', { lineHeight: '1.375rem' }],
      'body-lg': ['1.3125rem', { lineHeight: '1.8125rem' }],
      'sub-heading': ['1.3125rem', { lineHeight: '1.6875rem' }],
      'heading-sm': ['1.1875rem', { lineHeight: '1.5rem' }],
      heading: ['1.75rem', { lineHeight: '2.25rem' }],
      'title-sm': ['2.3125rem', { lineHeight: '2.9375rem' }],
      title: ['4.25rem', { lineHeight: '5.4375rem' }],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
    },
    wordSpacing: {},
    colors: {
      black: '#000',
      white: '#fff',
      gray: {
        50: '#F2F2F2',
        100: '#F7F7F7',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        600: '#666666',
        700: '#303030',
      },
      primary: {
        100: '#9470C2',
        200: '#6F5095',
        300: '#723A9E',
        400: '#53288A',
        800: '#25044E',
        900: '#120227',
      },
    },
    extend: {
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '4.5rem',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        92: '23rem',
        96: '24rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        270: '67.5rem',
      },
      height: {
        'screen/85': '85vh',
        'screen/75': '75vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      },
      width: {
        'screen/85': '85vh',
        'screen/75': '75vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-ripple')(),
    // @ts-expect-error: Expression not callable, importing 'plugin'
    plugin(function ({ matchUtilities, addUtilities, addComponents, theme }) {
      matchUtilities(
        {
          word: value => ({
            wordSpacing: value,
          }),
        },
        { values: theme('wordSpacing') },
      )

      addUtilities({
        'text-mask': {
          background:
            'linear-gradient(1.71deg,#000000 -5.31%,rgba(28, 28, 28, 0.3559) 36.07%, rgba(87, 87, 87, 0.278144) 45.96%, rgba(255, 255, 255, 0) 61.23%)',
        },
      })

      addComponents({
        '.card-mentor': {
          maxWidth: '294px',
          width: '100%',
          height: '352px',

          position: 'relative',
          justifySelf: 'center',
          transition: 'all 0.3s cubic- bezier(0.25, 0.45, 0.45, 0.95)',
        },
      })
    }),
  ],
}
