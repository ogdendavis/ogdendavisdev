import styled from "styled-components";

import { Lucas } from "../../components/Lucas";

const IntroSection = styled.section`
  /* DISPLAY */
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;

export const Intro = () => {
  return (
    <IntroSection>
      <Lucas />
    </IntroSection>
  );
};
