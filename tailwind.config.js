const defaultTheme = require('tailwindcss/defaultTheme');
const { colors } = defaultTheme;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mmd: '868px',
      // => @media (min-width: 868px) { ... }

      mmmd: '968px',
      // => @media (min-width: 968px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      llg: '1180px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1440px',
      // => @media (min-width: 1440px) { ... }

      xxxl: '1580px',
      // => @media (min-width: 1580px) { ... }

      '4xl': '1680px',
      // => @media (min-width: 1700px) { ... }

      '5xl': '1780px',
      // => @media (min-width: 1700px) { ... }

      '6xl': '1880px',
      // => @media (min-width: 1700px) { ... }
    },
    extend: {
      backgroundImage: (theme) => ({
        'process-pattern-svg': "url('/src/assets/processpatternpad.svg')",
      }),
      colors: {
        gray: {
          ...colors.gray,
          50: '#fafafa',
        },
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      padding: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        14: '3.5rem',
        28: '7rem',
        32.5: '8.4rem',
        44: '11rem',
        52: '13rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
      },
      height: {
        0.5: '0.125rem',
        2.5: '0.625rem',
        3.5: '0.925rem',
        28: '7rem',
        44: '11rem',
        52: '13rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
      },
      width: {
        0.5: '0.125rem',
        2.5: '0.625rem',
        3.5: '0.925rem',
        28: '7rem',
        44: '11rem',
        52: '13rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
      },
      margin: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        '-9': '-2.25rem',
        28: '7rem',
        44: '11rem',
        52: '13rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        '-28': '-7rem',
        '-44': '-11rem',
        '-52': '-13rem',
        '-68': '-17rem',
        '-72': '-18rem',
        '-80': '-20rem',
        '-88': '-22rem',
        '-96': '-24rem',
        '-104': '-26rem',
        '-112': '-28rem',
        '-120': '-30rem',
        '-128': '-32rem',
        '-136': '-34rem',
      },
    },
  },
  variants: {
    textColor: [
      'responsive',
      'group-hover',
      'group-focus',
      'focus-within',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    backgroundColor: [
      'responsive',
      'group-hover',
      'group-focus',
      'focus-within',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
