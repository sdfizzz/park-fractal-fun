import styled, { css } from 'styled-components';
import { MenuBox } from './index';

const MenuButton = styled.button<{ active?: boolean }>`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
  color: currentColor;

  background: transparent;
  border: none;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(82, 82, 84, 1);
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      background: rgba(75, 75, 78, 1);
    `};
`;

const MenuButtonBox = styled(MenuBox)`
  flex-flow: row nowrap;
  align-items: stretch;
  overflow: hidden;

  padding: 0;
  height: 50px;
`;

export { MenuButton, MenuButtonBox };
