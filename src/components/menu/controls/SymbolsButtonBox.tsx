import React from 'react';
import styled from 'styled-components';
import { MenuButton, MenuButtonBox } from '../layout';
import { useStore } from '../../../store/StoreContext';
import { SvgConfig } from '../../../store/config/types';
import { symbols } from '../../symbols';

const Image = styled.img`
  max-width: 80%;
`;

const SymbolsButtonBox = () => {
  const store = useStore();
  const [symbol, setSymbol] = React.useState<SvgConfig>({ src: '' });

  const handleSymbolButtonClick = (s: SvgConfig) => {
    const newSymbol: SvgConfig = symbol !== s ? s : { src: '' };
    setSymbol(newSymbol);
    store.svg = newSymbol;
  };

  return (
    <MenuButtonBox>
      {symbols.map((s) => (
        <MenuButton
          type="button"
          key={Math.random()}
          onClick={() => handleSymbolButtonClick(s)}
          active={symbol === s}
        >
          <Image src={s.src} alt={s.alt} />
        </MenuButton>
      ))}
    </MenuButtonBox>
  );
};

export default SymbolsButtonBox;
