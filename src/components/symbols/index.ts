import { SvgConfig } from '../../store/config/types';
import Integral from './Integral';
import Dxdy from './Dxdy';
import Empty from './Empty';
import Sum from './Sum';
import Function from './Function';
import Multiply from './Multiply';

const symbols: Array<SvgConfig> = [
  { src: 'img/integral.svg', alt: 'Intuition Park', node: Integral },
  { src: 'img/df-dx.svg', alt: 'Intuition Park', node: Dxdy },
  { src: 'img/empty.svg', alt: 'Intuition Park', node: Empty },
  { src: 'img/sum.svg', alt: 'Intuition Park', node: Sum },
  { src: 'img/f.svg', alt: 'Intuition Park', node: Function },
  { src: 'img/p.svg', alt: 'Intuition Park', node: Multiply },
];

// eslint-disable-next-line import/prefer-default-export
export { symbols };
