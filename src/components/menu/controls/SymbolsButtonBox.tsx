import React from 'react';
import { MenuButton, MenuButtonBox } from '../layout';
import { useStore } from '../../../store/StoreContext';
import { SvgConfig } from '../../../store/config/types';

const symbols: Array<SvgConfig> = [
  { src: 'img/integral.svg', alt: 'Intuition Park' },
  { src: 'img/df-dx.svg', alt: 'Intuition Park' },
  { src: 'img/empty.svg', alt: 'Intuition Park' },
  { src: 'img/sum.svg', alt: 'Intuition Park' },
  { src: 'img/f.svg', alt: 'Intuition Park' },
  { src: 'img/p.svg', alt: 'Intuition Park' },
];

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
          <img src={s.src} alt={s.alt} />
        </MenuButton>
      ))}
    </MenuButtonBox>
  );
};

export default SymbolsButtonBox;
