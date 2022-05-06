import { createGlobalStyle } from "styled-components/macro";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    font-size: 16px;
  }

  body {
    background: lightyellow;
    font-family: monospace;
    overflow-x: hidden;
  }
`;

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
