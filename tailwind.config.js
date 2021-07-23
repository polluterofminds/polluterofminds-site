module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rock-salt': ['Rock Salt', 'cursive']
    },
    colors: {
      orange: "#FFBD27", 
      black: "#282828", 
      white: "#fff"
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
