import styled from "styled-components/macro";

// The thing the foot(er) goes in... ha
const Shoe = styled.footer`
  display: flex;
  justify-content: space-between;

  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
`;

export const Footer = () => (
  <Shoe>
    <p>© 2022, Lucas Ogden-Davis</p>
    <p>
      Looking for my brother, Joshua Ogden-Davis? He's{" "}
      <a
        href="https://www.ogden-davis.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </p>
  </Shoe>
);
