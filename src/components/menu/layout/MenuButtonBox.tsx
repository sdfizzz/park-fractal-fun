import styled from 'styled-components';
import { MenuBox } from './index';

const MenuButton = styled.button`
  width: 100%;
  text-align: center;
  color: currentColor;

  background: transparent;
  border: none;
  box-sizing: border-box;

  &:hover {
    background: rgba(82, 82, 84, 1);
    cursor: pointer;
  }
`;

const MenuButtonBox = styled(MenuBox)`
  flex-flow: row nowrap;
  align-items: stretch;
  overflow: hidden;

  padding: 0;
  height: 50px;
`;

export { MenuButton, MenuButtonBox };
