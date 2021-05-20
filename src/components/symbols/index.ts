import { SvgConfig } from '../../store/config/types';
import Integral from './Integral';
import Empty from './Empty';
import Sum from './Sum';
import Function from './Function';
// import Dxdy from './Dxdy';
// import Multiply from './Multiply';

const symbols: Array<SvgConfig> = [
  // { src: 'img/df-dx.svg', alt: 'Intuition Park', node: Dxdy, symbol: "" },
  // { src: 'img/p.svg', alt: 'Intuition Park', node: Multiply, symbol: "" },
  { src: 'img/integral.svg', alt: 'Intuition Park', node: Integral, symbol: '∫' },
  { src: 'img/euro.svg', alt: 'Intuition Park', symbol: '€' },
  { src: 'img/empty.svg', alt: 'Intuition Park', node: Empty, symbol: '∅' },
  { src: 'img/sum.svg', alt: 'Intuition Park', node: Sum, symbol: 'Σ' },
  { src: 'img/f.svg', alt: 'Intuition Park', node: Function, symbol: 'ƒ' },
  { src: 'img/any.svg', alt: 'Intuition Park', symbol: '∀' },
  { src: 'img/infinity.svg', alt: 'Intuition Park', symbol: '∞' },
];

// eslint-disable-next-line import/prefer-default-export
export { symbols };
