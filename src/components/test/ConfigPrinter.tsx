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
      {store.config
        ? store.config.map((v) => (
            <div key={v.id}>
              {v.id}: {v.current}
            </div>
          ))
        : 'empty'}
    </Container>
  );
});

export default ConfigPrinter;
