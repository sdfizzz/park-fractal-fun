import React from 'react';
import styled from 'styled-components';
import SliderPixi from './common/SliderPixi';
import StoreContext from '../store/StoreContext';
import InputPixi from './common/InputPixi';

const Container = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-flow: column nowrap;
`;

const SideMenu = ({ area }: { area: string }) => {
  const store = React.useContext(StoreContext);

  return (
    <Container area={area}>
      <p>Menu</p>
      {store.sliders
        .filter((r) => r.type === 'slider')
        .map((c) => (
          <SliderPixi key={c.id} config={c} />
        ))}
      {store.texts
        .filter((r) => r.type === 'input')
        .map((c) => (
          <InputPixi key={c.id} config={c} />
        ))}
    </Container>
  );
};

export default SideMenu;
