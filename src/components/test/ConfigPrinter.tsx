import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { ItemType } from '../../store/config/types';

const Title = styled.div<{ index: number }>`
  grid-row: ${({ index }) => `${index + 1} / ${index + 2}`};
  grid-column: 1 / 1;
  text-align: right;
`;

const Desc = styled.div<{ index: number }>`
  grid-row: ${({ index }) => `${index + 1} / ${index + 2}`};
  grid-column: 2 / 2;
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 20px;
`;

const DataRow = (conf: ItemType, index: number) => (
  <>
    <Title key={`${conf.id}_title`} index={index}>
      {conf.id}
    </Title>
    <Desc key={`${conf.id}_desc`} index={index}>
      {conf.format ? conf.format(conf.current) : conf.current}
    </Desc>
  </>
);

const ConfigPrinter = observer(({ className }: { className?: string }) => {
  const store = useStore();
  const colorIndex = store.sliders.length + store.texts.length + 1;
  return (
    <div className={className}>
      <Container>
        {store.sliders.map(DataRow)}
        {store.texts.map((c, i) => DataRow(c, i + store.sliders.length))}
        <Title index={colorIndex}>color</Title>
        <Desc index={colorIndex}> {store.color.strategy}</Desc>
      </Container>
    </div>
  );
});

export default ConfigPrinter;
