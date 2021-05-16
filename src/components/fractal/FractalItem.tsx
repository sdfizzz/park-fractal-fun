import { PixiComponent } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import { BranchProps, RectangleProps } from './types';

const FractalItem = PixiComponent<RectangleProps, PIXI.Graphics>('FractalItem', {
  create: () => new PIXI.Graphics(),
  applyProps: (ins: PIXI.Graphics, _, props) => {
    ins.x = props.x;
    ins.beginFill(props.color);
    ins.moveTo(0, 0);
    ins.endFill();
  },
});

const FractalBranch = PixiComponent<{ item: BranchProps }, PIXI.Graphics>('FractalBranch', {
  create: () => new PIXI.Graphics(),
  applyProps: (ins: PIXI.Graphics, _, props) => {
    const { start, end, thickness, color } = props.item;
    ins.position.set(start.x, start.y);
    ins.lineStyle(thickness, color);
    ins.moveTo(0, 0);
    ins.lineTo(end.x - start.x, end.y - start.y);
  },
});

export { FractalItem, FractalBranch };
