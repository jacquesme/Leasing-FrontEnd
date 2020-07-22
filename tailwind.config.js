/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {

    colors: {
      primary: {
        white: '#FFFFFF',
        black: '#323232'
      },

      accent: {
        purple: '#60198C',
        blue: '#0A386A'
      },

      secondary: {
        white100: '#F9F9F9',
        white200: '#F8F6F6',
        white300: '#FFF8F8',
        grey100: '#F2F2F2',
        grey200: '#C1C1C1',
        grey300: '#747474',
        hover: '#852BBD'
      }

    },

    extend: {

    },

    fontFamily: {
      serif: ['Proxima Nova', 'sans-serif']
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
