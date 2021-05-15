import { action, makeAutoObservable, observable } from 'mobx';
import { SliderConfigItemType } from './types';

export default class SliderConfigItem implements SliderConfigItemType {
  readonly id;
  readonly type = 'slider';

  readonly minVal;
  readonly maxVal;
  readonly step;
  readonly title;
  readonly format;

  @observable animatable;
  @observable current;

  @action onChange(val: number) {
    this.current = val;
  }

  constructor(
    id: string,
    min: number,
    max: number,
    step: number,
    title: string,
    current: number,
    animatable = false,
    format?: (val: number) => string
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.minVal = min;
    this.maxVal = max;
    this.title = title;
    this.step = step;
    this.format = format;

    this.current = current;
    this.animatable = animatable;
  }
}
