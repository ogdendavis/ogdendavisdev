import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { normalize } from "styled-normalize";

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
    brightYellow: "yellow",
    lightYellow: "lightyellow",
    black: "#303438",
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

  a, a:visited {
    color: yellow;
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
