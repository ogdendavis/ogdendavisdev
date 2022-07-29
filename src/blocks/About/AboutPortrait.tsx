import styled from "styled-components/macro";

import { ReactComponent as LucasSVG } from "../../assets/lucas.svg";
import { ReactComponent as KimSVG } from "../../assets/kim.svg";
import { ReactComponent as FiggySVG } from "../../assets/figgy.svg";
import { ReactComponent as CedricSVG } from "../../assets/cedric.svg";

import { PortraitFrame } from "../../components/PortraitFrame";

const FiggyContainer = styled.div`
  display: inline-block;
  position: relative;
  left: 5%;
  width: 15%;
`;

const LucasContainer = styled.div`
  display: inline-block;
  width: 42.5%;
`;

const CedricContainer = styled.div`
  display: inline-block;
  position: relative;
  right: 5%;
  width: 15%;
`;

const KimContainer = styled.div`
  display: inline-block;
  position: relative;
  right: 5%;
  width: 27.5%;
`;

export const AboutPortrait = () => {
  return (
    <PortraitFrame>
      <FiggyContainer>
        <FiggySVG />
      </FiggyContainer>
      <LucasContainer>
        <LucasSVG />
      </LucasContainer>
      <CedricContainer>
        <CedricSVG />
      </CedricContainer>
      <KimContainer>
        <KimSVG />
      </KimContainer>
    </PortraitFrame>
  );
};
