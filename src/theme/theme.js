import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import JossefinRegular from "../fonts/Josefin_Sans/static/JosefinSans-Regular.ttf";

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
 },  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Josefin Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Josefin Sans'), local('JossefinRegular'), url(${JossefinRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "#006AB8",
    },
    secondary: {
      main: grey[500],
    },
    background: {
      default: "#FFF7F0",
    },
    common: {
      black: "#202A37",
      white: "#fff",
    },
    error: {
      main: "#FF1E01",
    },
    text: {
      primary: "#1C2A37",
    },
    warning: {
      main: "#FFAD00",
    },
    success: {
      main: "#97B14F",
    },
  },
});
