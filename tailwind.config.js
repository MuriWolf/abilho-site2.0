module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
            "btnPurple": "#7316c4",
            "btnPink": "#d00dd6",
            "bgColor": "#0e0e0e",
            "grayText": "#8F92A1",
            "lightGrayText": "#c2c5ca",
            "bgButtonColor": "#2a2b2c"
        },
        fontFamily: {
          "neueMachine": ["neue machine", "Roboto"]
        },
        keyframes: {
        moveBackground: {
          'from': { 'background-position': '0% 50%' },
          'to': { 'background-position': '100% 50%' }
        },
      },
      animation: {
        moveBackground: 'moveBackground 1.5s ease-in-out alternate infinite'
      },
      },
    },
    plugins: [],
  }