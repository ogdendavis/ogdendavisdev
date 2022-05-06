import { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { ReactComponent as LucasSVG } from "./lucas.svg";

import "./lucasSvgStyles.css";

interface LucasContainerProps {
  opacity: number;
  fadeDuration: number;
}

const LucasContainer = styled.div<LucasContainerProps>`
  height: 50vh;
  opacity: ${({ opacity }) => opacity};
  transition: opacity ${({ fadeDuration }) => fadeDuration}s ease;

  .svg {
    height: 100%;
  }
`;

interface LucasProps {
  fadeDurationSecs: number;
}

/**
 * Renders the Lucas portrait SVG, and controls its animation
 *
 * @param { number } fadeDurationSecs - how long it takes the svg to fade in
 */
export const Lucas = ({ fadeDurationSecs }: LucasProps) => {
  // Opacity of SVG - set to 1 on load to trigger fade-in animation
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
    // After full fade in, wave!
    setTimeout(lucasWave, fadeDurationSecs * 1000);
  }, [fadeDurationSecs]);

  return (
    <LucasContainer opacity={opacity} fadeDuration={fadeDurationSecs}>
      <LucasSVG />
    </LucasContainer>
  );
};

// Helper function with code copied over from old website's modSVG function - doesn't do this in a react-y way, but the animation works!
const lucasWave = (durationSecs = 1) => {
  const rightArm = document.querySelector(".lucas__arm--right");

  const wavePoints =
    "60,190 20,190 20,100 40,100 40,110 50,110 50,130 40,130 40,170 60,170";
  rightArm?.setAttribute("points", wavePoints);

  setTimeout(() => {
    const noWavePoints =
      "60,190 80,190 80,290 60,290 60,280 50,280 50,260 60,260";
    rightArm?.setAttribute("points", noWavePoints);
  }, durationSecs * 1000);
};
