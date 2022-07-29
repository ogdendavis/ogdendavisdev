import styled from "styled-components/macro";

import { ReactComponent as LucasSVG } from "../../assets/lucas-workout.svg";
import { ReactComponent as BarbellSVG } from "../../assets/barbell.svg";
import { ReactComponent as BookshelfSVG } from "../../assets/bookshelf.svg";

import { PortraitFrame } from "../../components/PortraitFrame";

const LucasContainer = styled.div`
  display: inline-block;
  position: relative;
  left: 15%;
  width: 42.5%;
`;

const BarbellContainer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 8%;
  width: 55%;
`;

const BookshelfContainer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
`;

export const PlayPortrait = () => {
  return (
    <PortraitFrame>
      <LucasContainer>
        <LucasSVG />
      </LucasContainer>
      <BarbellContainer>
        <BarbellSVG />
      </BarbellContainer>
      <BookshelfContainer>
        <BookshelfSVG />
      </BookshelfContainer>
    </PortraitFrame>
  );
};
