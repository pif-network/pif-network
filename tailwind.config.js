import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  content: [
    './pages/**/*.{jsx,tsx}',
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
    './features/**/*.{jsx,tsx}',
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
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      lora: ['Lora', 'serif'],
      manrope: ['Manrope', 'sans-serif'],
      'bm-daniel': ['BMDaniel', 'sans-serif'],
    },
    fontSize: {
      caption: ['0.75rem', { lineHeight: '1rem' }],
      'body-sm': ['0.8125rem', { lineHeight: '1.125rem' }],
      'body-md': ['0.875rem', { lineHeight: '1.1875rem' }],
      button: ['0.875rem', { lineHeight: '1.1875rem' }],
      body: ['1rem', { lineHeight: '1.375rem' }],
      'body-lg': ['1.3125rem', { lineHeight: '1.8125rem' }],
      'sub-heading': ['1.3125rem', { lineHeight: '1.6875rem' }],
      'heading-sm': ['1.1875rem', { lineHeight: '1.5rem' }],
      'heading-md': ['1.5rem', { lineHeight: '2rem' }],
      heading: ['1.75rem', { lineHeight: '2.25rem' }],
      'title-sm': ['2.3125rem', { lineHeight: '2.9375rem' }],
      title: ['4.25rem', { lineHeight: '5.4375rem' }],
    },
    fontWeight: {
      light: 300,
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
        700: '#380674',
        800: '#25044E',
        900: '#120227',
      },
      red: {
        100: '#B36670',
        200: '#9E3A46',
        300: '#7D2D3F',
        400: '#BC2445',
      },
      cyan: {
        100: '#6BB8B3',
        200: '#40A59F',
        300: '#1AACA3',
        400: '#12CEC8',
      },
      prussian: {
        200: '#00A375',
        300: '#008F64',
        400: '#006649',
      },
    },
    ripple: {
      ripple: theme => ({
        colors: theme('colors'),
      }),
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
      scale: {
        175: '1.75',
      },
      screens: {
        '1hxl': '1350px',
        tlg: { min: '1024px', max: '1140px' },
        'tlg-fh': { min: '1024px', max: '1103px' },
        'tlg-sh': { min: '1104px', max: '1140px' },
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-4rem)', opacity: 0 },
          '65%': { opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        appear: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fall: 'fall 1s ease-out',
        appear: 'appear 0.5s ease-in',
        'appear-long': 'appear 0.8s ease-in',
      },
    },
  },
  plugins: [
    // TODO: add type declaration for this, although it's not working..
    // require('tailwindcss-ripple')(),
    plugin(function ({ matchUtilities, addUtilities, addComponents, theme }) {
      // matchUtilities(
      //   {
      //     word: value => ({
      //       wordSpacing: value,
      //     }),
      //   },
      //   { values: theme('wordSpacing') }
      // );
      // word-spacing for !Firefox
      // matchUtilities(
      //   {
      //     cword: value => ({
      //       /*
      //        * @see https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
      //        **/
      //       '@supports (-webkit-appearance:push-button)': {
      //         wordSpacing: value,
      //       },
      //     }),
      //   },
      //   { values: theme('wordSpacing') }
      // );

      addUtilities({
        'text-mask': {
          background:
            'linear-gradient(1.71deg,#000000 -5.31%,rgba(28, 28, 28, 0.3559) 36.07%, rgba(87, 87, 87, 0.278144) 45.96%, rgba(255, 255, 255, 0) 61.23%)',
        },
        'value-card--text-mask': {
          background:
            'linear-gradient(179.95deg, #170330 9.05%, rgba(23, 3, 48, 0.1) 48.73%, rgba(23, 3, 48, 0.410738) 48.73%, rgba(23, 3, 48, 0.1) 48.73%)',
        },
        '.flex-centre': {
          ' @apply flex items-center justify-center ': {},
        },
        '.shadow--social-icon': {
          'box-shadow':
            '0px 3px 9px 0px rgba(0, 0, 0, 0.12), 0px 4px 48px 0px rgba(0, 0, 0, 0.08)',
        },
      });
    }),
  ],
};
export default config;
