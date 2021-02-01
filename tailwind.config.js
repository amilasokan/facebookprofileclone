module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.07), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.07)',
      '3xl': '0 0px 50px 20px rgba(0, 0, 0, 0.05)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      none: 'none',
      'fb': '0 1px 2px 0 rgba(0, 0, 0, 0.2)'
    },
    extend: {
      colors: {
        'fBlue': '#1877F3',
        'fRed': '#F12849',
        'fGrey': '#606770',
        'fBlack': '#1D1F23',
        'fFill':'#F0F2F5',
        'fButton':'#E4E6EB'

      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
