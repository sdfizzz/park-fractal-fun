import { action, makeAutoObservable, observable } from 'mobx';
import { InputConfigItemType } from './types';

export default class InputConfigItem implements InputConfigItemType {
  readonly id;
  readonly type = 'input';

  readonly title;
  readonly format;

  @observable current;

  @action onChange(val: string) {
    this.current = val;
  }

  constructor(id: string, title: string, current: string, format?: (val: string) => string) {
    makeAutoObservable(this);

    this.id = id;
    this.title = title;
    this.format = format;

    this.current = current;
  }
}
