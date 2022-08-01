import styled from "styled-components/macro";

export const PortraitFrame = styled.div`
  overflow: auto;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 700px) {
    margin: auto;
    max-width: 380px;
  }
`;
