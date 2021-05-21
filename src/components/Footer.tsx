import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  right: 20px;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: right;
  padding-bottom: 20px;
  padding-right: -20px;
`;

const ParkLogo = styled.img`
  padding-bottom: 12px;
  height: 40px;
`;

const StyledLink = styled(Link)`
  :visited {
    color: currentColor;
  }
`;

const Footer = () => (
  <Container>
    <Link to="https://intuition.team/park">
      <ParkLogo src="img/park-logo.svg" alt="Intuition Park" />
    </Link>
    <br />
    <StyledLink to="https://ulyanov.design/">Вова</StyledLink>,{' '}
    <StyledLink to="https://www.linkedin.com/in/alexey-chupin-developer/">Алексей</StyledLink> и{' '}
    <StyledLink to="https://nellykam.space/">Нелли</StyledLink>
    <br />
    сделали этот проект для весеннего парка в 2021 году
  </Container>
);

export default Footer;
