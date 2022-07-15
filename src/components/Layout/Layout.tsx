import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { normalize } from "styled-normalize";

import "./svgStyles.css";

interface ThemeType {
  colors: {
    brightYellow: string;
    lightYellow: string;
    black: string;
  };
  contentWidth: string;
}

const theme = {
  colors: {
    black: "#303438",
    blue: "#0645AD",
    brightYellow: "yellow",
    lightYellow: "lightyellow",
  },
  contentWidth: "960px",
};

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}

  :root {
    font-size: 16px;
  }

  body {
    background: ${({ theme }) => theme.colors.lightYellow};
    color: ${({ theme }) => theme.colors.black};
    font-family: monospace;
    overflow-x: hidden;
  }
`;

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
