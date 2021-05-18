import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  align-items: center;

  > ul {
    display: table-row;

    > li {
      display: table-cell;
      height: 100px;
      list-style-type: none;
      padding: 10px;
      vertical-align: middle;
    }
  }
`;

const Header = ({ area }: { area: string }) => (
  <Container area={area}>
    <ul>
      <li>
        <Link to="/">Канторово множество</Link>
      </li>
      <li>
        <Link to="/info">Теория</Link>
      </li>
    </ul>
  </Container>
);

export default Header;
