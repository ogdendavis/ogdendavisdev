import { useEffect, useState } from "react";
import styled from "styled-components";

interface ScrollArrowContainerProps {
  opacity: number;
}

const ScrollArrowContainer = styled.div<ScrollArrowContainerProps>`
  /* POSITION */
  position: absolute; // Against IntroSection
  bottom: 0;

  animation: bouncyBounce 3s ease infinite;
  font-size: 4rem;
  font-weight: 900;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 1s ease;

  @keyframes bouncyBounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    3.5% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    10% {
      transform: scale(0.9, 1.1) translateY(-1rem);
    }
    16.5% {
      transform: scale(1, 1) translateY(0);
    }
    19% {
      transform: scale(1, 1) translateY(-0.25rem);
    }
    22% {
      transform: scale(1, 1) translateY(0);
    }
    33% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;

interface ScrollArrowProps {
  delaySecs: number;
}

export const ScrollArrow = ({ delaySecs }: ScrollArrowProps) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => setOpacity(1), delaySecs * 1000);

    return function () {
      clearTimeout(timeoutId);
    };
  }, [delaySecs]);

  return <ScrollArrowContainer opacity={opacity}>&or;</ScrollArrowContainer>;
};
