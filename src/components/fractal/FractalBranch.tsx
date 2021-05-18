import { PixiComponent } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import { BranchProps } from './types';
import { getBranchHitArea } from '../../store/config/helper';

const FractalBranch = PixiComponent<
  { item: BranchProps; onClick?: (branch: BranchProps) => void; text?: string },
  PIXI.Graphics
>('FractalBranch', {
  create: (props) => {
    const graphics = new PIXI.Graphics();
    graphics.interactive = true;
    graphics.buttonMode = true;

    const { start, thickness, color, direction } = props.item;

    const draw = (c: number) => {
      graphics.clear();

      graphics.position.set(start.x, start.y);
      graphics.lineStyle(thickness, c);
      graphics.moveTo(0, 0);
      graphics.lineTo(direction.dx, direction.dy);
    };

    draw(color);

    // @ts-ignore
    graphics.click = () => {
      // ins.scale.x *= 1.25;
      // ins.scale.y *= 1.25;
      if (props.onClick) props.onClick(props.item);
      // draw(0xff0000);
    };

    // @ts-ignore
    graphics.mouseover = () => {
      graphics.alpha = 0.5;
    };

    // @ts-ignore
    graphics.mouseout = () => {
      graphics.alpha = 1;
    };

    const hitAreaPoint = getBranchHitArea(direction, thickness);

    // this block for showing hitArea
    // ins.lineStyle(1, 0xff0000);
    // ins.moveTo(0, 0);
    // hitAreaPoint.forEach((p) => ins.lineTo(p.x, p.y));
    // ins.lineTo(hitAreaPoint[0].x, hitAreaPoint[0].y);

    graphics.hitArea = new PIXI.Polygon(hitAreaPoint.map((p) => new PIXI.Point(p.x, p.y)));

    return graphics;
  },
});

export default FractalBranch;
