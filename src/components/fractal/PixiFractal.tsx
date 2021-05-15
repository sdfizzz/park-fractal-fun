import React from 'react';
import { Graphics } from '@inlet/react-pixi';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/StoreContext';

const PixiFractal = observer(() => {
  const store = useStore();

  // eslint-disable-next-line no-console
  console.log('store', store);

  return (
    <Graphics
      draw={(g) => {
        g.beginFill(0xff3300);
        g.lineStyle(4, 0xffd900, 1);

        g.moveTo(50, 50);
        g.lineTo(250, 50);
        g.lineTo(100, 100);
        g.lineTo(50, 50);
        g.endFill();
      }}
    />
  );
});

export default PixiFractal;
