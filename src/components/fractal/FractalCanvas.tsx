import React from 'react';
import { Stage } from '@inlet/react-pixi';
import { observer } from 'mobx-react-lite';

import PixiFractal from './PixiFractal';

const FractalCanvas = observer(({ width, height }: { width: number; height: number }) => (
  <Stage
    width={width}
    height={height}
    options={{ antialias: true, autoDensity: true, backgroundColor: 0xeef1f5 }}
  >
    <PixiFractal />
  </Stage>
));

export default FractalCanvas;
