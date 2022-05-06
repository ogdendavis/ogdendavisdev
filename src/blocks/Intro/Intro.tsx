import styled from "styled-components";

import { Lucas } from "../../components/Lucas";

import { ScrollArrow } from "./ScrollArrow";

const IntroSection = styled.section`
  /* DISPLAY */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  height: 100vh;
  padding-bottom: 5rem;
  position: relative;
  width: 100vw;
`;

export const Intro = () => {
  // How long it takes the svg to fade in. Used to time svg wave, and appearance of scroll arrow
  const svgFadeInDurationSecs = 2;

  return (
    <IntroSection>
      <h1>Hi, I'm Lucas</h1>
      <Lucas fadeDurationSecs={svgFadeInDurationSecs} />
      <ScrollArrow delaySecs={svgFadeInDurationSecs + 1.5} />
    </IntroSection>
  );
};
