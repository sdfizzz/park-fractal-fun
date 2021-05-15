import React from 'react';
import styled from 'styled-components';

const Container = styled.footer<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Footer = ({ area }: { area: string }) => (
  <Container area={area}>
    <p>Footer</p>
    <p>Footer</p>
    <p>Footer</p>
    <p>Footer</p>
  </Container>
);

export default Footer;
