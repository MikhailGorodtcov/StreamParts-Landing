module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    colors: {
      transparent: 'transparent',
      black: "#000",
      white: "#fff",
      dark: '#1e1e1e',
      blue: '#0087EF',
      gray: '#EDEDED',
      orange: '#ff4f32',
      regalblue: '#007BFF0D',
      darkSecondary: '#272937',
      markerOrange: '#FF5C00',
      markerBlue: '#007BFF',
      bordertabs: '#E6E6E6',
      footerborder: '#262626',
      dgWhite: '#E6E6E6',
    },
    weights: {
      maxWidth: '40rem',
    },
    extend: {
      spacing: {
        'mx': '220px',
        'mxlg': '202px'
      },
      screens: {
        '3xs': '340px',
        '2xs': '380px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
    },
  }
}
