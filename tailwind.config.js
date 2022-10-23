module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-bot-blue': '#6ba4f0',
      'light-bot-blue-2': '#c5deff',
      'bot-blue': '#2F7ADA',
      'dark-bot-blue': '#1d5eb4',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'red': '#ff0000',
      'dark-red': '#8b0000',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'dark-gray': '#273444',
      'gray': '#8492a6',
      'light-gray': '#F8F9FA',
      'light-gray-2': '#F0F0F0',
      'light-gray-3': '#dddddd',
      'white': '#fff',
      'black':'#000'
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      landingSans: ['Inter', 'sans-serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    backgroundImage: {
      'cover-homes': "url('src/assets/coverBg.png')",
    },
  },
}