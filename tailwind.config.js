module.exports = {
  content: [
    './src/**/*.css',
    './*.html'
  ],
  theme: {
    "fontFamily": {
      "roboto": ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          lighter:'#322A71',
          light: '#291B6B',
          DEFAULT: '#0E0C44',
        },
        secondary: "#571CE0",
      },
    },
  },
  plugins: [],
}
