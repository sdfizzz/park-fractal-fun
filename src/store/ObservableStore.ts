import { makeAutoObservable } from 'mobx';
import {
  ColorConfig,
  InputConfigItemType,
  SliderConfigItemType,
  StoreType,
  SvgConfig,
} from './config/types';
import SliderConfigItem from './config/SliderConfigItem';
import InputConfigItem from './config/InputConfigItem';
import ColorStrategies from './config/colorStrategies';

class ObservableStore implements StoreType {
  readonly screen: { width: number; height: number };
  branch: { defaultLen: number; width: number } = { defaultLen: 100, width: 10 };
  stroke: SliderConfigItemType = new SliderConfigItem('stroke', 3, 50, 1, 'Stroke', 7, true);
  angle: SliderConfigItemType = new SliderConfigItem(
    'angle',
    0,
    Math.PI * 2,
    Math.PI / 360,
    'Angle',
    (2 * Math.PI) / 3,
    true,
    (val) => `${Math.floor((val * 180) / Math.PI)}°`
  );
  branchCount: SliderConfigItemType = new SliderConfigItem(
    'branch count',
    1,
    6,
    1,
    'Lines count',
    3
  );
  branchLenCoef: SliderConfigItemType = new SliderConfigItem(
    'branch len',
    0.1,
    1.0,
    0.05,
    'Length coef.',
    0.75,
    true,
    (val) => val.toFixed(2)
  );
  deep: SliderConfigItemType = new SliderConfigItem('deep', 1, 6, 1, 'Iterations', 5);
  text: InputConfigItemType = new InputConfigItem('text', 'Text', '');
  color: ColorConfig = {
    strategy: ColorStrategies.GRADIENT_COLOR,
    gradientStart: { r: Math.random(), g: Math.random(), b: Math.random() },
    gradientEnd: { r: Math.random(), g: Math.random(), b: Math.random() },
  };
  svg: SvgConfig = { src: '' };

  constructor(width: number, height: number) {
    makeAutoObservable(this);

    this.screen = { width, height };
  }

  get sliders() {
    return [this.stroke, this.angle, this.branchCount, this.branchLenCoef, this.deep];
  }

  get texts() {
    return [this.text];
  }

  setColorStrategy(strategy: ColorStrategies) {
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

    this.color = { strategy, ...gradient };
  }

  get config() {
    return {
      stroke: this.stroke.current,
      angle: this.angle.current,
      branchCount: this.branchCount.current,
      branchLenCoef: this.branchLenCoef.current,
      deep: this.deep.current,
      color: this.color,
    };
  }
}

export default ObservableStore;
