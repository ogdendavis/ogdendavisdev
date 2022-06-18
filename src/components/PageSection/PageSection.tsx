import styled from "styled-components";

const DarkSection = styled.section`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.lightYellow};

  h2 {
    margin-top: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.brightYellow};
  }
`;

const LightSection = styled.section``;

const ContentContainer = styled.div`
  padding: 1rem;
  margin: auto;
  width: ${({ theme }) => theme.contentWidth};
  max-width: 90%;
`;

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  darkMode?: boolean;
}

/**
 * Wrap content in containers to control color/positioning and content width
 *
 * @param { boolean } darkMode true for dark background and light text
 */
export const PageSection = ({ darkMode = false, children }: SectionProps) => {
  return darkMode ? (
    <DarkSection>
      <ContentContainer>{children}</ContentContainer>
    </DarkSection>
  ) : (
    <LightSection>
      <ContentContainer>{children}</ContentContainer>
    </LightSection>
  );
};
