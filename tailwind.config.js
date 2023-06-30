module.exports = {
  content: ['./**/*.php', './src/**/*.js'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        main: '#7D8FB3',
      },
    },
  },
};
