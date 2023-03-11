module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-bot-blue-0': '#f1f7ff',
      'light-bot-blue': '#6ba4f0',
      'light-bot-blue-2': '#c5deff',
      'bot-blue': '#2F7ADA',
      'dark-bot-blue': '#1d5eb4',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'red': '#ff0000',
      'dark-red': '#6b0000',
      'dark-red-2': '#D2042D',
      'light-red': '#FFF6F6',
      'light-red-2': '#FFEFEF',
      'light-red-3': '#FFE9E9',
      'airbnb': '#FF385C',
      'dark-airbnb': '#FF143F',
      'green': '#13ce66',
      'light-green': '#F2FFF3',
      'light-green-2': '#E7FFE8',
      'dark-green': '#086300',
      'dark-green-2': '#008000',
      'yellow': '#ffc82c',
      'dark-gray': '#273444',
      'gray': '#8492a6',
      'gray-2': '#758396',
      'light-gray': 'rgb(247,247,248)',
      'light-gray-opaque': '#e9ecef',
      'light-gray-2': '#F0F0F0',
      'light-gray-3': '#dddddd',
      'light-gray-4': '#c7c7c7',
      'white':'#fff',
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