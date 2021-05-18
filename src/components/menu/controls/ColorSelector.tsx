import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { ColorStrategies } from '../../../store/config/types';
import { useStore } from '../../../store/StoreContext';

const Container = styled.div`
  background: rgba(98, 98, 100, 1);
  border: 0.5px solid rgba(120, 120, 120, 1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Item = styled.div<{ active: boolean }>`
  padding: 10px 10px 10px 10px;
  box-shadow: 0 1px 0 0 rgba(82, 82, 84, 1);
  color: currentColor;
  ${({ active }) =>
    active &&
    css`
      background: rgba(82, 82, 84, 0.8);
    `}

  &:hover {
    background: rgba(82, 82, 84, 1);
    cursor: pointer;
  }
`;

const options = [
  { value: ColorStrategies.WHITE, title: 'White' },
  { value: ColorStrategies.GRADIENT_COLOR, title: 'Gradient color' },
  { value: ColorStrategies.GRADIENT_GRAY, title: 'Gradient gray' },
  { value: ColorStrategies.RANDOM, title: 'Random' },
];

const ColorSelector = () => {
  const store = useStore();
  const [selected, setSelected] = useState<ColorStrategies>(ColorStrategies.WHITE);

  const onColorChanged = useCallback(
    (str: ColorStrategies) => {
      setSelected(str);
      store.setColorStrategy(str);
    },
    [store, setSelected]
  );

  return (
    <Container>
      {options.map((r) => (
        <Item key={r.value} active={selected === r.value} onClick={() => onColorChanged(r.value)}>
          {r.title}
        </Item>
      ))}
    </Container>
  );
};

export default ColorSelector;
