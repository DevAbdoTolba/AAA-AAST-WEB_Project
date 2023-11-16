"use client";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  responsiveFontSizes,
  CssVarsTheme,
  Theme,
} from "@mui/material/styles";
import { amber, blue } from "@mui/material/colors";
import Play from "next/font/google";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

interface Props {
  children: ReactNode;
}

const themeConfig = {
  colorSchemes: {
    light: {
      palette: {
        primary: blue,
        Main: {
          primary: "#26405e",
          white: "#ffffff",
          light: "#f9f9f9",
          black: "#041830",
          red: "#e52d04",
          orange: "#e79901",
          green: "#00c437",
        },
        Status: {
          danger: "#e53e3e",
          warning: "#e79901",
          accepted: "#00c437",
          pending: "#26405e",
        },
      },
    },
    dark: {
      palette: {
        primary: amber,
        NewOvr: {
          main: "#ffe74c",
          contrastText: "#000",
          dark: "#fff3a1",
          light: "#f4a638",
        },
        InprogressOvr: {
          main: "#a47cb6",
          contrastText: "#000",
          dark: "#D7C5E0",
          light: "664483",
        },
        ClosedOvr: {
          main: "#A38468",
          contrastText: "#000",
          dark: "#6A4829",
          light: "#F9E9D6",
        },
        FollowupOvr: {
          main: "#7BC16B",
          contrastText: "#000",
          dark: "#50943D",
          light: "#CFE8CA",
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Play",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),

    h1: {
      fontSize: "56px",
    },
    h2: {
      fontSize: "48px",
    },
    h3: {
      fontSize: "40px",
    },
    h4: {
      fontSize: "32px",
    },
    h5: {
      fontSize: "24px",
    },
    h6: {
      fontSize: "20px",
    },
  },

  unstable_sxConfig: {
    border: {
      borderTop: 0,
      borderRight: 0,
      borderBottom: 0,
      borderLeft: 0,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.filled": {
            borderRadius: "0",
            backgroundColor: "#041830",
            border: "1px solid #041830",

            color: "#fff",
            "&:hover": {
              backgroundColor: "#f9f9f9",
              border: "1px solid #041830",
              color: "#041830",
            },
          },
          "&.outlined": {
            borderRadius: "0",
            backgroundColor: "#fff",
            border: "1px solid #041830",
            color: "#041830",
            "&:hover": {
              backgroundColor: "#041830",
              border: "1px solid #041830",
              color: "#fff",
            },
          },
        },
        textTransform: "none",
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          // this is styles for the new variants
          "&.variant-noLine": {
            "& .MuiInputBase-input + fieldset": {
              border: "0",
            },
            "& .MuiOutlinedInput-input": {
              backgroundColor: "#f5f5f5",
              borderRadius: "16px",
            },
          },
        },
      },
    },
  },
};

const ThemeComponent = ({ children }: Props) => {
  // @ts-ignore
  const theme = responsiveFontSizes(extendTheme(themeConfig)) as Omit<
    Theme,
    "palette"
  > &
    CssVarsTheme;

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "#nprogress": {
            pointerEvents: "none",
            "& .bar": {
              left: 0,
              top: 0,
              height: 3,
              width: "100%",
              zIndex: 2000,
              position: "fixed",
              backgroundColor: "var(--mui-palette-primary-main)",
            },
          },
          a: {
            textDecoration: "none",
          },
        }}
      />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeComponent;
