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

    const text = new PIXI.Text(props.text, style);
    text.interactive = true;
    text.buttonMode = true;

    text.transform.position.set((start.x + end.x) / 2, (start.y + end.y) / 2);
    text.transform.rotation = direction.angle;

    return text;
  },
});

export default FractalText;
