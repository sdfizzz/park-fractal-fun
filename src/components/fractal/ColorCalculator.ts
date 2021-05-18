import { ColorStrategies, ConfigProps, Rgba } from '../../store/config/types';
import { utils } from 'pixi.js';

function calculateGradient(k: number, start?: Rgba, end?: Rgba): number {
  if (!start || !end) return 0;
  const rest = 1 - k;
  const r = start.r * k + end.r * rest;
  const g = start.g * k + end.g * rest;
  const b = start.b * k + end.b * rest;
  return utils.rgb2hex([r, g, b]);
}

function colorCalculator(deep: number, config: ConfigProps) {
  const { strategy, gradientStart, gradientEnd } = config.color;

  if (strategy === ColorStrategies.GRADIENT_GRAY || strategy === ColorStrategies.GRADIENT_COLOR) {
    const { branchCount } = config;
    const k = 1 - deep / branchCount;
    return calculateGradient(k, gradientStart, gradientEnd);
  }

  if (strategy === ColorStrategies.WHITE) {
    return 0xffffff;
  }

  if (strategy === ColorStrategies.RANDOM) {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    return utils.rgb2hex([r, g, b]);
  }

  throw new Error('Unknown colorStrategy type');
}

export default colorCalculator;
