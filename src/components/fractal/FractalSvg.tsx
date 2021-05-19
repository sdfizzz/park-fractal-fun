import * as PIXI from 'pixi.js';
import { PixiComponent } from '@inlet/react-pixi';
import { BranchProps } from './types';

const FractalSvg = PixiComponent<
  { item: BranchProps; onClick?: (branch: BranchProps) => void; texture: PIXI.Texture },
  PIXI.Sprite
>('FractalSvg', {
  create: (props) => {
    const sprite = new PIXI.Sprite(props.texture);
    console.log(props.texture);
    sprite.interactive = true;
    sprite.buttonMode = true;

    const { start, end, direction, thickness } = props.item;
    sprite.transform.position.set((start.x + end.x) / 2, (start.y + end.y) / 2);
    const scale = 1 + thickness / 10;
    sprite.transform.scale.set(scale, scale);
    sprite.transform.rotation = direction.angle;

    return sprite;
  },
});

export default FractalSvg;
