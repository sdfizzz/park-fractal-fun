import * as PIXI from 'pixi.js';
import { PixiComponent } from '@inlet/react-pixi';
import { BranchProps } from './types';
import { SvgConfig } from '../../store/config/types';

const FractalSvg = PixiComponent<
  { item: BranchProps; svg: SvgConfig; onClick?: (branch: BranchProps) => void },
  PIXI.Sprite
>('FractalSvg', {
  create: (props) => {
    const blob = props.svg.node
      ? new Blob([props.svg.node(props.item.color)], {
          type: 'image/svg+xml',
        })
      : null;
    const url = URL.createObjectURL(blob);
    const texture = PIXI.Texture.from(url);

    const sprite = new PIXI.Sprite(texture);
    sprite.interactive = true;
    sprite.buttonMode = true;

    // @ts-ignore
    sprite.click = () => {
      // eslint-disable-next-line no-console
      console.log(props.item);
    };

    const { start, end, direction, thickness } = props.item;
    sprite.transform.position.set((start.x + end.x) / 2, (start.y + end.y) / 2);
    const scale = 1 + thickness / 10;
    sprite.transform.scale.set(scale, scale);
    sprite.transform.rotation = direction.angle;

    return sprite;
  },
});

export default FractalSvg;
