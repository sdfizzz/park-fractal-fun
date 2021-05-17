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

const FractalBranch = PixiComponent<
  { item: BranchProps; onClick?: (branch: BranchProps) => void },
  PIXI.Graphics
>('FractalBranch', {
  create: () => {
    const graphics = new PIXI.Graphics();
    graphics.interactive = true;
    graphics.buttonMode = true;

    return graphics;
  },
  applyProps: (ins: PIXI.Graphics, _, props) => {
    const { start, thickness, color, direction } = props.item;

    const draw = (c: number) => {
      ins.clear();
      ins.position.set(start.x, start.y);
      ins.lineStyle(thickness, c);
      ins.moveTo(0, 0);
      ins.lineTo(direction.dx, direction.dy);
    };

    draw(color);

    // @ts-ignore
    ins.click = () => {
      // ins.scale.x *= 1.25;
      // ins.scale.y *= 1.25;
      if (props.onClick) props.onClick(props.item);
      draw(0xff0000);
    };

    const sin = thickness * Math.sin(direction.angle);
    const cos = thickness * Math.cos(direction.angle);

    ins.hitArea = new PIXI.Polygon([
      new PIXI.Point(-sin, -cos),
      new PIXI.Point(sin, cos),
      new PIXI.Point(direction.dx + sin, direction.dy + cos),
      new PIXI.Point(direction.dx - sin, direction.dy - cos),
      new PIXI.Point(-sin, -cos),
    ]);
  },
});

export { FractalItem, FractalBranch };
