const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.yellow,
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            ol: {
              color: "#fff"
            },
            ul: {
              color: "#fff"
            },
            li: {
              color: "#fff",
              listTypeStyle: "disk"
            },
            p: {
              color: "#fff", 
            },
            strong: {
              color: "#fff",
              fontWeight: 700
            },             
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: "#fff",
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: "#fff"
            },
            h3: {
              fontWeight: '600',
              color: "#fff"
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            blockquote: {
              color: "#fff"
            }
          },
        },                         
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

