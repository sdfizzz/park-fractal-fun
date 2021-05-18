import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgba(98, 98, 100, 1);
  border: 0.5px solid rgba(120, 120, 120, 1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Item = styled.div`
  padding: 10px 10px 10px 10px;
  box-shadow: 0 1px 0 0 rgba(82, 82, 84, 1);
  color: currentColor;

  &:hover {
    background: rgba(82, 82, 84, 1);
    cursor: pointer;
  }
`;

const options = ['White', 'Gradient', 'Gradient color', 'Random', 'Multicolored'];

const ColorSelector = () => (
  <Container>
    {options.map((r) => (
      <Item key={Math.random()}>{r}</Item>
    ))}
  </Container>
);

export default ColorSelector;
