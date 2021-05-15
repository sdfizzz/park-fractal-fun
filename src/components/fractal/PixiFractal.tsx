import React from 'react';
import { Graphics } from '@inlet/react-pixi';
import { Observer } from 'mobx-react';

import StoreContext from '../../store/StoreContext';

const PixiFractal = () => {
  const store = React.createContext(StoreContext);

  return (
    <Observer>
      {() => (
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
      )}
    </Observer>
  );
};

export default PixiFractal;
