module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        fog: 'url("/src/images/ricardo-gomez-angel-jg4pkrwaico-unsplash.jpg")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
