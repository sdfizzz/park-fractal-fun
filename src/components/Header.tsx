import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav<{ area: string }>`
  grid-area: ${({ area }) => area};
  padding: 30px;

  > ul {
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;

    > li {
      float: left;
      height: 100px;
      list-style-type: none;
      padding: 10px;
      vertical-align: middle;

      > a {
        text-decoration: none;
        color: white;
        text-align: center;
        padding: 14px 16px;
      }
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
