import * as PIXI from 'pixi.js';
import { PixiComponent } from '@inlet/react-pixi';
import { BranchProps } from './types';

const FractalText = PixiComponent<
  { item: BranchProps; onClick?: (branch: BranchProps) => void; text: string },
  PIXI.Text
>('FractalText', {
  create: (props) => {
    const { start, end, thickness, color, direction } = props.item;

    const style = new PIXI.TextStyle();
    style.fontSize = 2 * thickness;
    style.fill = color;
    style.stroke = color;
    style.align = 'center';

    const text = new PIXI.Text(props.text, style);
    text.interactive = true;
    text.buttonMode = true;

    const position = {
      x: (start.x + end.x) / 2,
      y: (start.y + end.y - text.height) / 2,
    };
    text.transform.position.set(position.x, position.y);
    text.transform.rotation = direction.angle;

    // @ts-ignore
    text.click = () => {
      // TODO add some on click
    };
    return text;
  },
});

export default FractalText;
