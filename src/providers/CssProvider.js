"use client";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";

const CssProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "__font_db263b",
    },

    palette: {
      primary: {
        main: "#254441",

        contrastText: "white",
      },
      secondary: {
        main: "#D7D6C9",
        contrastText: "white",
      },
      info: {
        main: "#43AA8B",
      },
      error: {
        main: "#DB504A",
      },
      success: {
        main: "#5AB028",
      },
      warning: {
        main: "#FFB508",
      },

      mode: "light",

      // اینو ادامه بدم
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default CssProvider;
