import React from 'react';
import styled from 'styled-components';

const Container = styled.nav<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = ({ area }: { area: string }) => (
  <Container area={area}>
    <a href=".">Home</a>
    <a href=".">Not home</a>
  </Container>
);

export default Header;
