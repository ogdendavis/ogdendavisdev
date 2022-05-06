import styled from "styled-components";

// Keep content from getting too big on large monitors, and too close to the edge of the display on phones
export const ContentContainer = styled.div`
  padding: 1rem;
  margin: auto;
  width: ${({ theme }) => theme.contentWidth};
  max-width: 90%;
`;
