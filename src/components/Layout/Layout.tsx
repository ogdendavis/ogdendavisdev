import { createGlobalStyle } from "styled-components/macro";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    background: lightyellow;
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
