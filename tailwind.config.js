module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      dark: "#1e1e1e",
      blue: "#0087EF",
      gray: "#EDEDED",
      orange: "#ff4f32"
    },
    screens: {
      "3xs": "340px",
      "2xs": "380px",
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    extend: {},
    fontFamily: {
      "body": ["Kumbh Sans", "sans-serif"],
    },
  }
}
