import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import LindsayBecker from "./fonts/Lindsay Becker Regular.ttf";
import "fontsource-roboto";

const LindsayBeckerFont = {
    fontFamily: "Lindsay Becker",
    fontStyle: "normal",
    fontWeight: 600,
    src: `
    local('Lindsay Becker'),
    local('Lindsay Becker Regular'),
    url(${LindsayBecker}) format('ttf)
    `,
    unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

let theme = createMuiTheme({
    palette: {
        primary: {
            light: "#C5F1FF",
            main: "#B6E0ED",
            dark: "#6EC4DF",
        },
        secondary: {
            light: "#CBAFBE",
            main: "#7F7279",
            dark: "#5D5872",
        },
    },
    typography: {
        fontWeight: 300,
        button: {
            textTransform: "capitalize",
            fontSize: 18,
            margin: 15,
        },
        h1: {
            fontFamily: "Lindsay Becker",
            fontSize: 96,
            margin: "15px 0",
        },
        h2: {
            fontSize: 48,
        },
        h3: {
            fontWeight: 300,
            fontSize: 36,
            margin: 10,
        },
        h4: {
            fontSize: 28,
        },
        h5: {
            fontSize: 24,
        },
        body1: {
            fontSize: 24,
        },
        body2: {
            fontSize: 24,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;