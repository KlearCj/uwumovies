const { extendTheme } = require("@chakra-ui/react");

const theme = {
  styles: {
    global: {
      body: {
        color: ("whiteAlpha.900"),
        bg: ("#121212"),
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
};

export default extendTheme(theme);
