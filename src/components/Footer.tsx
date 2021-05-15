import React from 'react';
import styled from 'styled-components';

const Container = styled.footer<{ area: string }>`
  grid-area: ${({ area }) => area};
`;

const Footer = ({ area }: { area: string }) => <Container area={area}>Footer</Container>;

export default Footer;
