import styled from "styled-components/macro";

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
  // DISPLAY
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  margin: auto;
  width: ${({ theme }) => theme.contentWidth};
  max-width: 90%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    display: block;
  }
`;

interface HalfProps {
  portraitFirst?: boolean;
}

const Half = styled.div<HalfProps>`
  display: inline-block;
  order: ${({ portraitFirst }) => (portraitFirst ? 0 : 1)};
  width: 49%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    display: block;
    margin: auto;
    width: 95%;
  }
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
  const hasPortrait = !!portrait;

  const inner = hasPortrait ? (
    <>
      <Half>{children}</Half>
      <Half portraitFirst={!darkMode}>{portrait}</Half>
    </>
  ) : (
    <div>{children}</div>
  );

  return (
    <Section darkMode={darkMode}>
      <ContentContainer>{inner}</ContentContainer>
    </Section>
  );
};
