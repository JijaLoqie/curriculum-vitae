import { alpha, createTheme, darken, lighten } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor) => augmentColor({
  color: {
    main: mainColor,
    transparent: alpha(mainColor, 0.9),
    light: lighten(mainColor, 0.5),
  }
});


export const customPalette = {
  text: "#050315",
  background: "#fbfbfe",
  primary: "#2f27ce",
  secondary: "#dedcff",
  accent: "#fd4aea",
};




const customMuiPalette = {
  text: createColor(customPalette.text),
  background: createColor(customPalette.background),
  primary: createColor(customPalette.primary),
  secondary: createColor(customPalette.secondary),
  accent: createColor(customPalette.accent),
};




export const baseTheme = createTheme({
  palette: {
    mode: "dark",
    ...customMuiPalette,
  },
  typography: {
    caption: {
      color: "#999999",
    }
  },
})
