import styled from 'styled-components';

const MenuBoxItem = styled.div`
  padding: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(87, 87, 89, 1);
  }
`;

const MenuBox = styled.div`
  color: white;
  overflow: hidden;

  border-radius: 6px;
  background: rgba(59, 59, 61, 1);

  box-shadow: 0 1px 0 0 rgb(82 82 84);
  margin-bottom: 10px;
  display: flex;
  flex-flow: column nowrap;
`;

export { MenuBoxItem, MenuBox };
