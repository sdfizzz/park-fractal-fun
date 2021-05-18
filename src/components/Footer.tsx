import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  left: -20px;
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

const Footer = () => (
  <Container>
    <a href="https://intuition.team/park">
      <ParkLogo src="img/park-logo.svg" alt="Intuition Park" />
    </a>
    <br />
    <a href="">Вова,</a>
    <a href="">Алексей и</a>
    <a href="">Нелли</a>
    <br />
    сделали этот проект для весеннего парка в 2021 году
  </Container>
);

export default Footer;
