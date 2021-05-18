import React from 'react';
import styled from 'styled-components';
import StoreContext from '../../store/StoreContext';
import { TextInput, RangeInput, ColorSelector } from './controls';
import { MenuBox, MenuButton, MenuButtonBox, MenuBoxItem } from './layout';

const Container = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-flow: column nowrap;
`;

const symbols = [
  'img/integral.svg',
  'img/df-dx.svg',
  'img/empty.svg',
  'img/sum.svg',
  'img/f.svg',
  'img/p.svg',
];

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
      <MenuButtonBox>
        {symbols.map((s) => (
          <MenuButton type="button" key={Math.random()}>
            <img src={s} alt="Intuition Park" />
          </MenuButton>
        ))}
      </MenuButtonBox>
      <MenuButtonBox>
        <MenuButton
          type="button"
          onClick={() => {
            // @ts-ignore
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
