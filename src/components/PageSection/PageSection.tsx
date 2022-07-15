import styled from "styled-components";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  darkMode?: boolean;
  portrait?: React.ReactNode;
}

const Section = styled.section<SectionProps>`
  /* DISPLAY */
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.black : theme.colors.lightYellow};
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.lightYellow : theme.colors.black};
  min-height: 50vh;

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

const Half = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 50%;
`;

/**
 * Wrap content in containers to control color/positioning and content width
 *
 * @param { boolean } darkMode true for dark background and light text
 */
export const PageSection = ({
  darkMode = false,
  children,
  portrait = false,
}: SectionProps) => {
  return (
    <Section darkMode={darkMode}>
      <ContentContainer>
        <Half>{children}</Half>
        {portrait && <Half>{portrait}</Half>}
      </ContentContainer>
    </Section>
  );
};
