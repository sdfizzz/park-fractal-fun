import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav<{ area: string }>`
  grid-area: ${({ area }) => area};
  min-height: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin: 14px 16px;
`;

const Header = ({ area }: { area: string }) => (
  <Container area={area}>
    <StyledLink to="/">Канторово множество</StyledLink>
    <StyledLink to="/info">Теория</StyledLink>
  </Container>
);

export default Header;
