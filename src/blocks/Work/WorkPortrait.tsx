import styled from "styled-components/macro";

import { ReactComponent as LucasSVG } from "../../assets/lucas.svg";
import { ReactComponent as DeskSVG } from "../../assets/desk.svg";

import { PortraitFrame } from "../../components/PortraitFrame";

const LucasContainer = styled.div`
  display: inline-block;
  position: relative;
  left: 20%;
  width: 42.5%;
`;

const DeskContainer = styled.div`
  display: inline-block;
  position: relative;
  right: 23%;
  width: 55%;
`;

export const WorkPortrait = () => {
  return (
    <PortraitFrame>
      <LucasContainer>
        <LucasSVG />
      </LucasContainer>
      <DeskContainer>
        <DeskSVG />
      </DeskContainer>
    </PortraitFrame>
  );
};
