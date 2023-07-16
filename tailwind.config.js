module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      dark: "#1e1e1e",
      blue: "#0087EF",
      gray: "#EDEDED",
      orange: "#ff4f32",
      regalblue: "#007BFF0D",
      darkSecondary: "#272937",
      markerOrange: "#FF5C00",
      markerBlue: "#007BFF",
      bordertabs: "#E6E6E6",
      footerborder: "#262626",
      dgWhite: "#E6E6E6",
    },
    weights: {
      maxWidth: "40rem",
    },
    extend: {
      spacing: {
        mx: "220px",
        mxlg: "202px",
      },
      fontFamily: {
        // sans: [
        //   'SF Pro Display',
        //   'SF Pro Text',
        //   'system-ui',
        //   '-apple-system',
        // ],
        pro: "SF Pro Display",
        protext: "SF Pro Text",
        mono: "Roboto Mono, sans-serif",
      },
      screens: {
        "3xs": "340px",
        "2xs": "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
    //   screens: {
    //     sm: { max: "640px" },
    //     md: { max: "768px" },
    //     lg: { max: "1024px" },
    //     xl: { max: "1280px" },
    // },
    content: {
      arrow: 'url("/src/img/icon/arrown.svg")',
      more: 'url("/src/img/icon/more.svg")',
      morewhite: 'url("/src/img/icon/morewhite.svg")',
      markerb: 'url("/src/img/icon/markerb.svg")',
      orangem: 'url("/src/img/icon/orange.svg")',
      number1: 'url("/src/img/icon/freemarket1.svg")',
      number2: 'url("/src/img/icon/provision2.svg")',
      number3: 'url("/src/img/icon/logisticschannel.svg")',
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    plugins: [
      require("@tailwindcss/typography"),
      // ...
    ],
  },
};
