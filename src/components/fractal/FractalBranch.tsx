import { PixiComponent } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import { BranchProps } from './types';
import { getBranchHitArea } from '../../store/config/helper';

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
      // draw(0xff0000);
    };

    // @ts-ignore
    ins.mouseover = () => {
      ins.alpha = 0.5;
    };

    // @ts-ignore
    ins.mouseout = () => {
      ins.alpha = 1;
    };

    const hitAreaPoint = getBranchHitArea(direction, thickness);

    // this block for showing hitArea
    // ins.lineStyle(1, 0xff0000);
    // ins.moveTo(0, 0);
    // hitAreaPoint.forEach((p) => ins.lineTo(p.x, p.y));
    // ins.lineTo(hitAreaPoint[0].x, hitAreaPoint[0].y);

    ins.hitArea = new PIXI.Polygon(hitAreaPoint.map((p) => new PIXI.Point(p.x, p.y)));
  },
});

export default FractalBranch;
