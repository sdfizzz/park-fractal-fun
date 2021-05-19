import { ColorConfig } from './types';

enum ColorStrategies {
  WHITE,
  GRADIENT_GRAY,
  GRADIENT_COLOR,
  RANDOM,
}

const getColorConfig = (strategy: ColorStrategies) => {
  let gradient: Omit<ColorConfig, 'strategy'> = {};
  if (strategy === ColorStrategies.GRADIENT_COLOR) {
    gradient = {
      gradientStart: {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
      },
      gradientEnd: {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
      },
    };
  } else if (strategy === ColorStrategies.GRADIENT_GRAY) {
    gradient = {
      gradientStart: {
        r: 1,
        g: 1,
        b: 1,
      },
      gradientEnd: {
        r: 0,
        g: 0,
        b: 0,
      },
    };
  }

  return { strategy, ...gradient };
};

export { getColorConfig };
export default ColorStrategies;
