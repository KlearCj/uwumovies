const { extendTheme } = require("@chakra-ui/react");

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        color: ("gray.800", "whiteAlpha.900"),
        bg: ("white", "#121212"),
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
