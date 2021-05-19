import React from 'react';
import styled from 'styled-components';
import StoreContext from '../../store/StoreContext';
import { TextInput, RangeInput, ColorSelector } from './controls';
import { MenuBox, MenuButton, MenuButtonBox, MenuBoxItem } from './layout';
import SymbolsButtonBox from './controls/SymbolsButtonBox';

const Container = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-flow: column nowrap;
  z-index: 1;
`;

const SideMenu = ({ area }: { area: string }) => {
  const store = React.useContext(StoreContext);

  return (
    <Container area={area}>
      <MenuBox>
        <MenuBoxItem>
          <TextInput config={store.text} />
          <RangeInput config={store.stroke} />
        </MenuBoxItem>
        <MenuBoxItem>
          <RangeInput config={store.branchCount} />
          <RangeInput config={store.branchLenCoef} />
        </MenuBoxItem>
        <MenuBoxItem>
          <RangeInput config={store.angle} />
          <RangeInput config={store.deep} />
        </MenuBoxItem>
        <MenuBoxItem>
          <ColorSelector />
        </MenuBoxItem>
      </MenuBox>
      <SymbolsButtonBox />
      <MenuButtonBox>
        <MenuButton
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('save svg');
          }}
        >
          Save SVG
        </MenuButton>
      </MenuButtonBox>
    </Container>
  );
};

export default SideMenu;
