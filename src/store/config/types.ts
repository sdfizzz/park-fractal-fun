type ItemType = {
  id: string;
  type: string;
  title: string;
  animatable?: boolean;
  current: string | number;
};

type ConfigItemType<T> = ItemType & {
  current: T;
  format?: (val: T) => string;
  onChange?: (val: T) => void;
  onAnimateStart?: () => void;
  onAnimateEnd?: () => void;
};

type SliderConfigItemType = ConfigItemType<number> & {
  type: 'slider';
  minVal: number;
  maxVal: number;
  step: number;
};

type DropdownConfigItemType<T> = ConfigItemType<T> & {
  type: 'dropdown';
  options: Array<T>;
};

type InputConfigItemType = ConfigItemType<string> & {
  type: 'input';
};

type StoreType = {
  config: Array<ItemType>;
};

export type {
  ItemType,
  ConfigItemType,
  SliderConfigItemType,
  DropdownConfigItemType,
  InputConfigItemType,
  StoreType,
};
