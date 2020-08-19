/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {

    colors: {

      white: '#FFFFFF',
      black: '#323232',

      accent: {
        'purple-light': '#852BBD',
        purple: '#60198C',
        blue: '#0A386A'
      },

      grey: {
        100: '#F9F9F9',
        200: '#F8F6F6',
        300: '#FFF8F8',
        400: '#F2F2F2',
        500: '#C1C1C1',
        600: '#747474'
      },

      'red-700': '#c53030',
      'green-400': '#3BB44A'

    },

    extend: {
      borderWidth: {
        '1': '1px'
      },
      spacing: {
        sm: '10px',
        md: '18px'
      }
    },

    fontFamily: {
      serif: 'Proxima Nova'
    },

    fontSize: {
      '2xl': '22px',
      'xl': '18px',
      'm': '16px',
      'sm': '14px',
      'xs': '12px',
      'xxs': '11px'
    }

  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }

}
