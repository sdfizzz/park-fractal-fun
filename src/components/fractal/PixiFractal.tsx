import React from 'react';
import { Graphics } from '@inlet/react-pixi';

const PixiFractal = () => {
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
};

export default PixiFractal;
