import { useEffect, useState } from "react";
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

interface IntroHeadingProps {
  opacity: number;
  fadeDuration: number;
}

const IntroHeading = styled.h1<IntroHeadingProps>`
  opacity: ${({ opacity }) => opacity};
  transition: opacity ${({ fadeDuration }) => fadeDuration}s ease;
`;

export const Intro = () => {
  // How long it takes the svg to fade in. Used to time svg wave, and appearance of scroll arrow
  const svgFadeInDurationSecs = 2;

  const [headingOpacity, setHeadingOpacity] = useState(0);

  // Heading should start to fade in halfway through svg fade in
  useEffect(() => {
    const timeoutId = setTimeout(
      () => setHeadingOpacity(1),
      svgFadeInDurationSecs * 500
    );

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <IntroSection>
      <IntroHeading
        opacity={headingOpacity}
        fadeDuration={svgFadeInDurationSecs}
      >
        Hi, I'm Lucas
      </IntroHeading>
      <Lucas fadeDurationSecs={svgFadeInDurationSecs} />
      <ScrollArrow delaySecs={svgFadeInDurationSecs + 1.5} />
    </IntroSection>
  );
};
