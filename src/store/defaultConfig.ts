import { InputConfigItemType, SliderConfigItemType, StoreType } from './config/types';

const StrokeWeightConfig: SliderConfigItemType = {
  id: 'stroke',
  type: 'slider',
  minVal: 3,
  maxVal: 50,
  step: 1,
  title: 'stroke weight: %value',
  animatable: true,
  current: 7,
  onChange(val: number) {
    this.current = val;
  },
};

const AngleConfig: SliderConfigItemType = {
  id: 'angle',
  type: 'slider',
  minVal: 0,
  maxVal: Math.PI * 2,
  step: Math.PI / 360,
  title: 'angle: %value',
  animatable: true,
  current: Math.PI / 2,
  format: (val) => `${Math.floor((val * 180) / Math.PI)}°`,
};

const BranchLengthConfig: SliderConfigItemType = {
  id: 'branch len',
  type: 'slider',
  title: 'branch length coef: %value',
  minVal: 0.1,
  maxVal: 1.0,
  current: 0.75,
  step: 0.05,
  animatable: true,
  format: (val) => val.toFixed(2),
};

const DeepConfig: SliderConfigItemType = {
  id: 'deep',
  type: 'slider',
  title: 'branch count: %value',
  minVal: 1,
  maxVal: 6,
  current: 3,
  step: 1,
};

const InputConfig: InputConfigItemType = {
  id: 'text input',
  type: 'input',
  title: 'Type smth:',
  current: 'word',
};

const defaultStore: StoreType = {
  config: [StrokeWeightConfig, AngleConfig, BranchLengthConfig, DeepConfig, InputConfig],
};

export default defaultStore;
