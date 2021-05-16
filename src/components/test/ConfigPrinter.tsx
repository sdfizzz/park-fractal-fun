import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConfigPrinter = observer(() => {
  const store = useStore();

  return (
    <Container>
      {store.sliders.map((v) => (
        <div key={v.id}>
          {v.id}: {v.current}
        </div>
      ))}
      {store.texts.map((v) => (
        <div key={v.id}>
          {v.id}: {v.current}
        </div>
      ))}
    </Container>
  );
});

export default ConfigPrinter;
