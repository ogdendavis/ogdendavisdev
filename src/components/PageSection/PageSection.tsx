import styled from "styled-components";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  darkMode?: boolean;
}

const Section = styled.section<SectionProps>`
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.black : theme.colors.lightYellow};
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.lightYellow : theme.colors.black};

  h2 {
    margin-top: 0;
  }

  a {
    color: ${({ theme, darkMode }) =>
      darkMode ? theme.colors.brightYellow : theme.colors.blue};
  }
`;

const ContentContainer = styled.div`
  padding: 1rem;
  margin: auto;
  width: ${({ theme }) => theme.contentWidth};
  max-width: 90%;
`;

/**
 * Wrap content in containers to control color/positioning and content width
 *
 * @param { boolean } darkMode true for dark background and light text
 */
export const PageSection = ({ darkMode = false, children }: SectionProps) => {
  return (
    <Section darkMode={darkMode}>
      <ContentContainer>{children}</ContentContainer>
    </Section>
  );
};
