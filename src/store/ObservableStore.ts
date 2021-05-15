import { makeAutoObservable } from 'mobx';
import { StoreType } from './config/types';
import SliderConfigItem from './config/SliderConfigItem';
import InputConfigItem from './config/InputConfigItem';

class ObservableStore implements StoreType {
  constructor() {
    makeAutoObservable(this);
  }

  config = [
    new SliderConfigItem('stroke', 3, 50, 1, 'stroke weight: %value', 7, true),
    new SliderConfigItem(
      'angle',
      0,
      Math.PI * 2,
      Math.PI / 360,
      'angle: %value',
      Math.PI / 2,
      true,
      (val) => `${Math.floor((val * 180) / Math.PI)}°`
    ),
    new SliderConfigItem(
      'branch len',
      0.1,
      1.0,
      0.05,
      'branch length coef: %value',
      0.75,
      true,
      (val) => val.toFixed(2)
    ),
    new SliderConfigItem('deep', 1, 6, 1, 'deep: %value', 3),
    new InputConfigItem('text input', 'Type sm-th:', 'word'),
  ];
}

export default ObservableStore;
